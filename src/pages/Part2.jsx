import React, { useState, useEffect } from 'react';
import { Bookmark, ChevronDown, CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import { part2Data } from '../data/part2Data';
import PracticeActionBar from '../components/PracticeActionBar';
import { saveClubHistory, clearClubHistory, getClubSavedTime } from '../utils/historyManager';

const Part2 = () => {
  const clubNames = Object.keys(part2Data).sort((a, b) => a.localeCompare(b));
  const [selectedClub, setSelectedClub] = useState(clubNames[0]);
  const [questionData, setQuestionData] = useState(part2Data[selectedClub]);
  
  const [answer, setAnswer] = useState('');
  const [gradingResult, setGradingResult] = useState(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [showTemplate, setShowTemplate] = useState(false);
  const [isGrading, setIsGrading] = useState(false);

  const [completedClubs, setCompletedClubs] = useState([]);
  const [lastSavedTime, setLastSavedTime] = useState(null);

  useEffect(() => {
    const updateCompleted = () => {
      setCompletedClubs(JSON.parse(localStorage.getItem('aptis_p2_completed') || '[]'));
    };
    updateCompleted();
    window.addEventListener('progressUpdate', updateCompleted);
    return () => window.removeEventListener('progressUpdate', updateCompleted);
  }, []);

  const playAudio = (word) => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = 0.85; // slightly slower to sound more articulated
      utterance.pitch = 1.1; // slightly higher pitch for a communicative, friendly tone
      
      // Select a more natural voice if available
      const voices = window.speechSynthesis.getVoices();
      const preferredVoices = voices.filter(voice => 
        (voice.name.includes('Google') || voice.name.includes('Premium') || voice.name.includes('Natural')) && 
        voice.lang.startsWith('en')
      );
      
      if (preferredVoices.length > 0) {
        // Google US English or Google UK English Female are usually best
        const bestVoice = preferredVoices.find(v => v.name.includes('Female') || v.name.includes('US')) || preferredVoices[0];
        utterance.voice = bestVoice;
      } else {
        // Fallback to standard good voices on Mac/Windows
        const fallback = voices.find(v => v.lang.startsWith('en') && (v.name === 'Samantha' || v.name === 'Alex' || v.name === 'Daniel'));
        if (fallback) utterance.voice = fallback;
      }

      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    setQuestionData(part2Data[selectedClub]);
    
    const savedAnswer = localStorage.getItem(`aptis_p2_answer_${selectedClub}`);
    const savedGrade = localStorage.getItem(`aptis_p2_grade_${selectedClub}`);
    setLastSavedTime(getClubSavedTime(2, selectedClub));

    if (savedAnswer) {
      setAnswer(savedAnswer);
    } else {
      setAnswer('');
    }

    if (savedGrade) {
      setGradingResult(JSON.parse(savedGrade));
    } else {
      setGradingResult(null);
    }

    setShowTranslation(false);
    setShowTemplate(false);
  }, [selectedClub]);

  // Auto save answers
  useEffect(() => {
    if (answer !== '') {
      localStorage.setItem(`aptis_p2_answer_${selectedClub}`, answer);
    }
  }, [answer, selectedClub]);

  // Auto save grades & update completion
  useEffect(() => {
    if (gradingResult) {
      localStorage.setItem(`aptis_p2_grade_${selectedClub}`, JSON.stringify(gradingResult));
    } else {
      localStorage.removeItem(`aptis_p2_grade_${selectedClub}`);
    }

    const completed = JSON.parse(localStorage.getItem('aptis_p2_completed') || '[]');
    let changed = false;

    if (gradingResult && gradingResult.status === 'success') {
      if (!completed.includes(selectedClub)) {
        completed.push(selectedClub);
        changed = true;
      }
    } else {
      if (completed.includes(selectedClub)) {
        const idx = completed.indexOf(selectedClub);
        completed.splice(idx, 1);
        changed = true;
      }
    }

    if (changed) {
      localStorage.setItem('aptis_p2_completed', JSON.stringify(completed));
      window.dispatchEvent(new Event('progressUpdate'));
    }
  }, [gradingResult, selectedClub]);

  const getWordCount = (text) => {
    if (!text || !text.trim()) return 0;
    return text.trim().split(/\s+/).length;
  };

  const handleGrade = async () => {
    const trimmed = answer.trim();
    const count = getWordCount(answer);
    
    let score = 5;
    let feedback = '';
    let status = '';
    let wordCountFeedback = '';
    let wordCountPenalty = 0;

    if (count === 0) {
      score = 0;
      feedback = 'Bạn chưa trả lời câu hỏi này.';
      status = 'error';
      setGradingResult({ score, feedback, status });
      return;
    } 
    
    if (count < 10) {
      score = 1;
      feedback = `LỖI ĐỘ DÀI: Câu trả lời quá ngắn (${count} từ). Part 2 yêu cầu 20-30 từ. Hãy viết thành các câu hoàn chỉnh.`;
      status = 'error';
      setGradingResult({ score, feedback, status });
      return;
    }

    if (count < 20 || count > 30) {
      wordCountFeedback = `Lưu ý độ dài: Bạn đã viết ${count} từ. Part 2 yêu cầu viết đúng trong khoảng 20-30 từ. (Bị trừ điểm)`;
      wordCountPenalty = 1;
    }

    const startsWithCapital = /^[A-Z]/.test(trimmed);
    const hasPunctuation = /[.,!?]$/.test(trimmed); // End of string
    
    let grammarIssues = [];
    if (!startsWithCapital) grammarIssues.push('viết hoa chữ cái đầu tiên');
    if (!hasPunctuation) grammarIssues.push('kết thúc câu bằng dấu câu (chấm, chấm than...)');
    if (/\b[i]\b/.test(trimmed)) grammarIssues.push('viết hoa đại từ "I"');

    // AI-like Relevance Check (Lạc đề)
    const lowerText = trimmed.toLowerCase();
    const lowerClub = selectedClub.toLowerCase();
    const vocabWords = [];
    if (questionData.vocabulary) {
        questionData.vocabulary.forEach(vocabStr => {
            const regex = /<strong>(.*?)<\/strong>/g;
            let match;
            while ((match = regex.exec(vocabStr)) !== null) {
                const words = match[1].toLowerCase().split(/\s+/).filter(w => w.length > 3);
                vocabWords.push(...words);
            }
        });
    }
    let coreKeywords = [];
    if (lowerClub.includes('book') || lowerClub.includes('reading')) coreKeywords = ['book', 'read', 'novel', 'literature', 'author', 'story', 'page', 'library', 'comic', 'knowledge'];
    else if (lowerClub.includes('art')) coreKeywords = ['art', 'paint', 'draw', 'picture', 'color', 'design', 'creative', 'gallery', 'exhibition', 'masterpiece', 'canvas'];
    else if (lowerClub.includes('food') || lowerClub.includes('cooking')) coreKeywords = ['food', 'cook', 'eat', 'meal', 'restaurant', 'recipe', 'dish', 'taste', 'delicious', 'kitchen', 'bake', 'diet'];
    else if (lowerClub.includes('travel')) coreKeywords = ['travel', 'trip', 'journey', 'tour', 'visit', 'abroad', 'culture', 'place', 'tourist', 'destination', 'flight', 'explore'];
    else if (lowerClub.includes('language') || lowerClub.includes('english')) coreKeywords = ['language', 'english', 'speak', 'communicate', 'vocabulary', 'grammar', 'practice', 'foreign', 'fluent', 'skill'];
    else if (lowerClub.includes('sport') || lowerClub.includes('walking') || lowerClub.includes('fitness')) coreKeywords = ['sport', 'walk', 'fit', 'health', 'exercise', 'run', 'gym', 'match', 'team', 'physical', 'muscle', 'sweat', 'active'];
    else if (lowerClub.includes('tech') || lowerClub.includes('computer')) coreKeywords = ['tech', 'computer', 'laptop', 'screen', 'software', 'internet', 'digital', 'online', 'game', 'code', 'data'];
    else if (lowerClub.includes('television') || lowerClub.includes('cinema') || lowerClub.includes('movie')) coreKeywords = ['tv', 'television', 'cinema', 'movie', 'film', 'watch', 'screen', 'actor', 'plot', 'comedy', 'drama', 'entertain'];
    else if (lowerClub.includes('music')) coreKeywords = ['music', 'song', 'sing', 'listen', 'melody', 'tune', 'instrument', 'band', 'pop', 'rock', 'audio'];
    else if (lowerClub.includes('business') || lowerClub.includes('fashion') || lowerClub.includes('beautiful')) coreKeywords = ['business', 'fashion', 'clothes', 'shop', 'buy', 'wear', 'style', 'trend', 'money', 'market', 'company', 'economy', 'home', 'house', 'decorate'];
    
    const clubWords = lowerClub.split(/\s+/).filter(w => w !== 'club');
    const allKeywords = [...new Set([...vocabWords, ...coreKeywords, ...clubWords])];
    const stopWords = ['this', 'that', 'with', 'from', 'your', 'have', 'make', 'take', 'very', 'much', 'really', 'some', 'good', 'best'];
    const validKeywords = allKeywords.filter(w => !stopWords.includes(w) && w.length >= 3);

    let matchCount = 0;
    for (const kw of validKeywords) {
        if (lowerText.includes(kw)) matchCount++;
    }

    if (matchCount === 0) {
        score = 1;
        feedback = 'LỖI LẠC ĐỀ NGHIÊM TRỌNG: Câu trả lời của bạn không liên quan đến chủ đề của câu lạc bộ (hoàn toàn thiếu các từ vựng cốt lõi). Hãy đọc lại câu hỏi và tham khảo mục TỪ VỰNG HỮU ÍCH bên dưới!';
        status = 'error';
        setGradingResult({ score, feedback, status });
        return;
    }

    // AI-like Grammar Rules for common mistakes
    if (/\bI\s+(really\s+|very\s+|so\s+|just\s+|truly\s+)?(keen|fond|interested|passionate|good|bad)\b/i.test(trimmed)) {
      grammarIssues.push('thiếu động từ "to be" trước tính từ (Ví dụ: I am keen, I am really interested...)');
    }
    if (/\b(it|this|that|he|she)\s+(really\s+|always\s+|usually\s+|often\s+|sometimes\s+|never\s+)?(help|allow|make|give|take|improve|boost|widen|expand|create)\b/i.test(trimmed)) {
      grammarIssues.push('chia động từ số ít (thêm "s" hoặc "es") sau chủ ngữ số ít (Ví dụ: it helps, this allows)');
    }
    if (/\b(want|decide|need|hope)\s+(really\s+|always\s+|usually\s+|often\s+|sometimes\s+|never\s+)?(play|go|join|learn|improve|make|do|take|have|build|boost|expand)\b/i.test(trimmed)) {
      grammarIssues.push('thêm "to" giữa 2 động từ (Ví dụ: want to go, decide to join)');
    }
    if (/\b(can|could|will|would|should|must)\s+(to)\b/i.test(trimmed)) {
      grammarIssues.push('không dùng "to" sau động từ khuyết thiếu (Ví dụ: can do, không phải can to do)');
    }
    if (/\bam\s+(really\s+|very\s+)?agree\b/i.test(trimmed)) {
      grammarIssues.push('không dùng "am agree" vì agree là động từ thường (Sửa thành: I agree)');
    }
    if (/\bvery\s+(like|love|enjoy|hate)\b/i.test(trimmed)) {
      grammarIssues.push('không dùng "very" ngay trước động từ (Nên dùng: really like, hoặc like... very much)');
    }
    if (/\b(am|is|are|was|were)\s+(really\s+|always\s+|usually\s+|often\s+|sometimes\s+|never\s+)?(play|go|join|learn|improve|make|do|take|have)\b/i.test(trimmed)) {
      grammarIssues.push('không dùng động từ nguyên thể ngay sau động từ "to be" (Thường dùng V-ing hoặc V-ed/P2)');
    }

    setIsGrading(true);
    let apiIssues = [];
    try {
      const response = await fetch('https://api.languagetoolplus.com/v2/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        },
        body: new URLSearchParams({
          text: trimmed,
          language: 'en-US'
        })
      });
      
      if (response.ok) {
         const data = await response.json();
         if (data.matches && data.matches.length > 0) {
           apiIssues = data.matches.map(match => {
              let msg = match.message;
              if (match.replacements && match.replacements.length > 0) {
                 msg += ` (Gợi ý: ${match.replacements.map(r => r.value).slice(0, 3).join(', ')})`;
              }
              // Translate common LanguageTool messages
              msg = msg.replace('Possible spelling mistake found.', 'Có thể bị lỗi chính tả')
                       .replace('Possible typo', 'Lỗi đánh máy')
                       .replace('This sentence does not start with an uppercase letter', 'Câu chưa bắt đầu bằng chữ viết hoa');
              return msg;
           });
         }
      }
    } catch (err) {
      console.error("LanguageTool API error", err);
    } finally {
      setIsGrading(false);
    }

    // Merge errors
    const allIssues = [...grammarIssues, ...apiIssues];

    score -= wordCountPenalty; // apply penalty
    score -= allIssues.length; // 1 point per error

    if (score < 1) score = 1; // Minimum score is 1 (if not completely blank)

    if (allIssues.length > 0 || wordCountPenalty > 0) {
      let finalFeedback = '';
      if (wordCountPenalty > 0) finalFeedback += wordCountFeedback + '\n\n';
      
      if (allIssues.length > 0) {
        finalFeedback += `Hệ thống phát hiện ${allIssues.length} lỗi. Bạn cần sửa lại các lỗi sau:\n- ${allIssues.join('\n- ')}`;
      } else {
        finalFeedback += 'Ngữ pháp và từ vựng của bạn rất tốt, không phát hiện lỗi nào.';
      }
      
      feedback = finalFeedback;
      status = 'warning';
      if (score <= 2) status = 'error';
    } else {
      feedback = 'Tuyệt vời! Câu trả lời của bạn đúng yêu cầu độ dài (20-30 từ) và không phát hiện lỗi ngữ pháp hay chính tả nào.';
      status = 'success';
    }
    
    setGradingResult({ score, feedback, status });
  };

  const clearGrade = () => {
    setGradingResult(null);
  };

  const handleManualSave = () => {
    const time = saveClubHistory(2, selectedClub, answer, gradingResult);
    setLastSavedTime(time);
    return time;
  };

  const handleClearCurrentClub = () => {
    clearClubHistory(2, selectedClub);
    setAnswer('');
    setGradingResult(null);
    setLastSavedTime(null);
  };

  const currentCount = getWordCount(answer);
  const isOutOfRange = currentCount > 0 && (currentCount < 20 || currentCount > 30);
  const isGoodRange = currentCount >= 20 && currentCount <= 30;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
        <h1 className="page-title">Writing Part 02</h1>
        
        {/* Club Selector Dropdown */}
        <div style={{ position: 'relative', minWidth: '200px' }}>
          <select 
            value={selectedClub} 
            onChange={(e) => setSelectedClub(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 2.5rem 0.75rem 1rem',
              appearance: 'none',
              backgroundColor: 'white',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              fontSize: '1rem',
              color: 'var(--primary)',
              fontWeight: '500',
              cursor: 'pointer',
              fontFamily: 'inherit',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            {clubNames.map(name => (
              <option key={name} value={name}>
                {completedClubs.includes(name) ? `✅ ${name}` : name}
              </option>
            ))}
          </select>
          <ChevronDown 
            size={18} 
            color="var(--text-muted)" 
            style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} 
          />
        </div>
      </div>

      {/* Proactive History Action Bar */}
      <PracticeActionBar 
        partName="Writing Part 02"
        partNumber={2}
        clubName={selectedClub}
        lastSavedTime={lastSavedTime}
        onSave={handleManualSave}
        onClear={handleClearCurrentClub}
      />
      
      <p className="page-description">
        You are a member of a club. Fill in the form. Write in sentences. Use 20-30 words. You have 7 minutes to complete this part.
      </p>

      <div className="card">
        <div className="question-list-container">
          <div className="question-block">
            <div className="question-header">
              <div className="question-text" style={{ marginBottom: '1rem' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem', display: 'block', marginBottom: '0.5rem' }}>
                  Now you've become a new member of the <strong>{selectedClub}</strong>. Fill in the form. Write in sentences. Use 20-30 words.
                </span>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <strong>{questionData.text}</strong>
                  <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0, marginLeft: '1rem' }}>
                    {questionData.templates && questionData.templates.length > 0 && (
                      <button 
                        className={`btn-translate ${showTemplate ? 'active' : ''}`}
                        onClick={() => setShowTemplate(!showTemplate)}
                        title="Gợi ý cấu trúc"
                      >
                        {showTemplate ? 'Ẩn cấu trúc' : 'Gợi ý cấu trúc'}
                      </button>
                    )}
                    {questionData.vi && (
                      <button 
                        className={`btn-translate ${showTranslation ? 'active' : ''}`}
                        onClick={() => setShowTranslation(!showTranslation)}
                        title="Dịch câu hỏi"
                      >
                        {showTranslation ? 'Ẩn dịch' : 'Dịch'}
                      </button>
                    )}
                  </div>
                </div>
                {showTranslation && questionData.vi && (
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontStyle: 'italic', marginTop: '0.3rem' }}>
                    {questionData.vi}
                  </div>
                )}
                {showTemplate && questionData.templates && questionData.templates.length > 0 && (
                  <div style={{ 
                    marginTop: '0.5rem', 
                    padding: '0.75rem', 
                    backgroundColor: '#F8FAFC', 
                    border: '1px dashed #94A3B8',
                    borderRadius: '6px',
                    color: 'var(--primary)',
                    fontSize: '0.95rem',
                    lineHeight: '1.5'
                  }}>
                    <div style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#B45309' }}>Khung đáp án gợi ý:</div>
                    <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                      {questionData.templates.map((tpl, idx) => (
                        <li key={idx} style={{ paddingBottom: '0.5rem', borderBottom: idx !== questionData.templates.length - 1 ? '1px dashed rgba(0,0,0,0.1)' : 'none' }}>
                          <span style={{ fontWeight: '600', marginRight: '0.3rem' }}>Cách {idx + 1}:</span>
                          <span dangerouslySetInnerHTML={{ 
                            __html: tpl.replace(/\[(.*?)\]/g, '<span style="color: #D97706; font-weight: 700;">[$1]</span>') 
                          }} />
                        </li>
                      ))}
                    </ul>
                    
                    {questionData.vocabulary && questionData.vocabulary.length > 0 && (
                      <div style={{ marginTop: '0.8rem', paddingTop: '0.8rem', borderTop: '2px solid rgba(180, 83, 9, 0.1)' }}>
                        <div style={{ fontWeight: '600', marginBottom: '0.8rem', color: '#B45309' }}>TỪ VỰNG HỮU ÍCH:</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                          {questionData.vocabulary.map((vocab, idx) => {
                            const catMatch = vocab.match(/^(✨ \[.*?\]):/);
                            const category = catMatch ? catMatch[1] : '';
                            const categoryName = category.replace('✨ ', '');
                            
                            const regex = /<strong>(.*?)<\/strong>\s*\((.*?)\)/g;
                            const items = [];
                            let match;
                            while ((match = regex.exec(vocab)) !== null) {
                              items.push({ en: match[1], vi: match[2] });
                            }

                            return (
                              <div key={idx}>
                                <div style={{ fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                                  ✨ <span style={{ color: '#D97706' }}>{categoryName}</span>:
                                </div>
                                <ul style={{ listStyleType: 'none', paddingLeft: '1rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                  {items.map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                                      <button 
                                        onClick={() => playAudio(item.en)}
                                        style={{ 
                                          background: 'rgba(217, 119, 6, 0.1)', 
                                          border: 'none', 
                                          cursor: 'pointer', 
                                          padding: '0.2rem', 
                                          borderRadius: '50%',
                                          fontSize: '1rem', 
                                          display: 'flex', 
                                          alignItems: 'center', 
                                          justifyContent: 'center',
                                          width: '28px',
                                          height: '28px',
                                          transition: 'all 0.2s ease'
                                        }}
                                        title={`Nghe phát âm: ${item.en}`}
                                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(217, 119, 6, 0.2)'}
                                        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(217, 119, 6, 0.1)'}
                                      >
                                        🔊
                                      </button>
                                      <span>
                                        <strong style={{ color: 'var(--text-main)' }}>{item.en}</strong> 
                                        <span style={{ marginLeft: '0.3rem' }}>({item.vi})</span>
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            
            <textarea
              className="premium-input"
              style={{ minHeight: '150px', resize: 'vertical' }}
              placeholder="Start writing your answer here..."
              value={answer}
              onChange={(e) => {
                setAnswer(e.target.value);
                if (gradingResult) setGradingResult(null);
              }}
            />
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
              <div className={`word-count ${isOutOfRange ? 'limit-reached' : ''}`} style={{ color: isGoodRange ? '#10B981' : undefined }}>
                Words: {currentCount} / 30
                {isOutOfRange && <span style={{ marginLeft: '0.5rem', fontSize: '0.8rem' }}>(Yêu cầu 20-30 từ)</span>}
              </div>
              
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {!gradingResult ? (
                  <button 
                    className="btn btn-secondary" 
                    style={{ padding: '0.4rem 1rem', fontSize: '0.85rem', opacity: isGrading ? 0.7 : 1, cursor: isGrading ? 'not-allowed' : 'pointer' }} 
                    onClick={handleGrade}
                    disabled={isGrading}
                  >
                    {isGrading ? 'Đang chấm...' : 'Chấm điểm'}
                  </button>
                ) : (
                  <button 
                    className="btn btn-primary" 
                    style={{ padding: '0.4rem 1rem', fontSize: '0.85rem', backgroundColor: 'var(--border-color)', color: 'var(--text-main)' }} 
                    onClick={clearGrade}
                  >
                    Làm lại
                  </button>
                )}
                <button className="bookmark-btn" title="Flag for review">
                  <Bookmark size={18} />
                </button>
              </div>
            </div>

            {/* Feedback Box */}
            {gradingResult && (
              <div className={`feedback-box feedback-${gradingResult.status}`}>
                <div className="feedback-score">
                  {gradingResult.status === 'success' && <CheckCircle size={18} />}
                  {gradingResult.status === 'warning' && <AlertCircle size={18} />}
                  {gradingResult.status === 'error' && <XCircle size={18} />}
                  Điểm: {gradingResult.score} / 5
                </div>
                <div style={{ whiteSpace: 'pre-line', lineHeight: '1.5' }}>{gradingResult.feedback}</div>

                {/* Sample Answers */}
                <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                  <div style={{ fontWeight: '600', marginBottom: '0.5rem', color: 'var(--primary)' }}>
                    💡 {questionData.samples.length} Đáp án tham khảo:
                  </div>
                  {questionData.samples && questionData.samples.length > 0 ? (
                    <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {questionData.samples.map((sample, idx) => (
                        <li key={idx} style={{ 
                          fontSize: '0.95rem', 
                          backgroundColor: '#FFFFFF', 
                          padding: '0.75rem', 
                          borderRadius: '6px',
                          textAlign: 'justify',
                          lineHeight: '1.5',
                          boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                          border: '1px solid rgba(0,0,0,0.05)'
                        }}>
                          <div style={{ fontWeight: '700', color: 'var(--primary)' }}>
                            <span style={{ color: '#B45309', marginRight: '4px' }}>{idx + 1}.</span> 
                            {sample.en}
                          </div>
                          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.3rem' }}>Dịch: {sample.vi}</div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontStyle: 'italic' }}>
                      Đang cập nhật đáp án mẫu cho câu lạc bộ này...
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part2;
