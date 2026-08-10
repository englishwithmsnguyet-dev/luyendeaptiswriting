import React, { useState, useEffect } from 'react';
import { Bookmark, ChevronDown, CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import { part3Data } from '../data/part3Data';

const Part3 = () => {
  const clubNames = Object.keys(part3Data).sort((a, b) => a.localeCompare(b));
  const [selectedClub, setSelectedClub] = useState(clubNames[0]);
  const [questionData, setQuestionData] = useState(part3Data[selectedClub]);
  
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '' });
  const [gradingResults, setGradingResults] = useState({ q1: null, q2: null, q3: null });
  const [showTemplate, setShowTemplate] = useState({ q1: false, q2: false, q3: false });
  const [showTranslation, setShowTranslation] = useState({ q1: false, q2: false, q3: false });
  const [isGrading, setIsGrading] = useState({ q1: false, q2: false, q3: false });
  const [totalScore, setTotalScore] = useState(null);

  const [completedClubs, setCompletedClubs] = useState([]);

  useEffect(() => {
    const updateCompleted = () => {
      setCompletedClubs(JSON.parse(localStorage.getItem('aptis_p3_completed') || '[]'));
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
      utterance.rate = 0.85;
      utterance.pitch = 1.1;
      
      const voices = window.speechSynthesis.getVoices();
      const preferredVoices = voices.filter(voice => 
        (voice.name.includes('Google') || voice.name.includes('Premium') || voice.name.includes('Natural')) && 
        voice.lang.startsWith('en')
      );
      
      if (preferredVoices.length > 0) {
        const bestVoice = preferredVoices.find(v => v.name.includes('Female') || v.name.includes('US')) || preferredVoices[0];
        utterance.voice = bestVoice;
      } else {
        const fallback = voices.find(v => v.lang.startsWith('en') && (v.name === 'Samantha' || v.name === 'Alex' || v.name === 'Daniel'));
        if (fallback) utterance.voice = fallback;
      }

      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    setQuestionData(part3Data[selectedClub]);
    
    const savedAnswers = localStorage.getItem(`aptis_p3_answers_${selectedClub}`);
    const savedGrades = localStorage.getItem(`aptis_p3_grades_${selectedClub}`);

    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    } else {
      setAnswers({ q1: '', q2: '', q3: '' });
    }

    if (savedGrades) {
      setGradingResults(JSON.parse(savedGrades));
    } else {
      setGradingResults({ q1: null, q2: null, q3: null });
    }

    setShowTemplate({ q1: false, q2: false, q3: false });
    setShowTranslation({ q1: false, q2: false, q3: false });
    setTotalScore(null);
  }, [selectedClub]);

  // Auto save answers
  useEffect(() => {
    if (Object.values(answers).some(val => val !== '')) {
      localStorage.setItem(`aptis_p3_answers_${selectedClub}`, JSON.stringify(answers));
    }
  }, [answers, selectedClub]);

  // Auto save grades & update completion
  useEffect(() => {
    const hasAnyGrade = Object.values(gradingResults).some(val => val !== null);
    if (hasAnyGrade) {
      localStorage.setItem(`aptis_p3_grades_${selectedClub}`, JSON.stringify(gradingResults));
    } else {
      localStorage.removeItem(`aptis_p3_grades_${selectedClub}`);
    }

    const allSuccess = ['q1', 'q2', 'q3'].every(
      key => gradingResults[key] && gradingResults[key].status === 'success'
    );
    
    const completed = JSON.parse(localStorage.getItem('aptis_p3_completed') || '[]');
    let changed = false;

    if (allSuccess && !completed.includes(selectedClub)) {
      completed.push(selectedClub);
      changed = true;
    } else if (!allSuccess && completed.includes(selectedClub)) {
      const idx = completed.indexOf(selectedClub);
      completed.splice(idx, 1);
      changed = true;
    }

    if (changed) {
      localStorage.setItem('aptis_p3_completed', JSON.stringify(completed));
      window.dispatchEvent(new Event('progressUpdate'));
    }
  }, [gradingResults, selectedClub]);

  const getWordCount = (text) => {
    if (!text || !text.trim()) return 0;
    return text.trim().split(/\s+/).length;
  };

  const handleAnswerChange = (qKey, value) => {
    setAnswers(prev => ({ ...prev, [qKey]: value }));
    setGradingResults(prev => {
      if (!prev[qKey]) return prev;
      const newResults = { ...prev };
      delete newResults[qKey];
      return newResults;
    });
  };

  const toggleTranslation = (qKey) => {
    setShowTranslation(prev => ({ ...prev, [qKey]: !prev[qKey] }));
  };
  const toggleTemplate = (qKey) => {
    setShowTemplate(prev => ({ ...prev, [qKey]: !prev[qKey] }));
  };

  const gradeSingleAnswer = async (answerText, questionObj, qKey) => {
    const trimmed = answerText.trim();
    const count = getWordCount(answerText);
    
    let score = 5;
    let feedback = '';
    let status = '';
    let wordCountFeedback = '';
    let wordCountPenalty = 0;

    if (count === 0) {
      return { score: 0, feedback: 'Bạn chưa trả lời câu hỏi này.', status: 'error' };
    } 
    
    if (count < 15) {
      return { score: 1, feedback: `LỖI ĐỘ DÀI: Câu trả lời quá ngắn (${count} từ). Part 3 yêu cầu 30-40 từ. Hãy viết thành các câu hoàn chỉnh.`, status: 'error' };
    }

    if (count < 30 || count > 40) {
      wordCountFeedback = `Lưu ý độ dài: Bạn đã viết ${count} từ. Part 3 yêu cầu viết đúng trong khoảng 30-40 từ. (Bị trừ điểm)`;
      wordCountPenalty = 1;
    }

    const startsWithCapital = /^[A-Z]/.test(trimmed);
    const hasPunctuation = /[.,!?]$/.test(trimmed); 
    
    let grammarIssues = [];
    if (!startsWithCapital) grammarIssues.push('viết hoa chữ cái đầu tiên');
    if (!hasPunctuation) grammarIssues.push('kết thúc câu bằng dấu câu (chấm, chấm than...)');
    if (/\b[i]\b/.test(trimmed)) grammarIssues.push('viết hoa đại từ "I"');

    // Grammar Rules
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
              msg = msg.replace('Possible spelling mistake found.', 'Có thể bị lỗi chính tả')
                       .replace('Possible typo', 'Lỗi đánh máy')
                       .replace('This sentence does not start with an uppercase letter', 'Câu chưa bắt đầu bằng chữ viết hoa');
              return msg;
           });
         }
      }
    } catch (err) {
      console.error("LanguageTool API error", err);
    }

    const allIssues = [...grammarIssues, ...apiIssues];

    score -= wordCountPenalty; 
    score -= allIssues.length; 

    if (score < 1) score = 1; 

    if (allIssues.length > 0 || wordCountPenalty > 0) {
      let finalFeedback = '';
      if (wordCountPenalty > 0) finalFeedback += wordCountFeedback + '\n\n';
      
      if (allIssues.length > 0) {
        finalFeedback += `Hệ thống phát hiện ${allIssues.length} lỗi:\n- ${allIssues.join('\n- ')}`;
      } else {
        finalFeedback += 'Ngữ pháp và từ vựng rất tốt, không phát hiện lỗi nào.';
      }
      
      feedback = finalFeedback;
      status = 'warning';
      if (score <= 2) status = 'error';
    } else {
      feedback = 'Tuyệt vời! Câu trả lời của bạn đúng yêu cầu độ dài (30-40 từ) và không phát hiện lỗi ngữ pháp hay chính tả nào.';
      status = 'success';
    }
    
    return { score, feedback, status };
  };

  const handleGradeSingle = async (qKey) => {
    setIsGrading(prev => ({ ...prev, [qKey]: true }));
    const res = await gradeSingleAnswer(answers[qKey], questionData[qKey], qKey);
    setGradingResults(prev => {
      const newResults = { ...prev, [qKey]: res };
      
      // Calculate total if all 3 are graded
      if (newResults.q1 && newResults.q2 && newResults.q3) {
        setTotalScore(newResults.q1.score + newResults.q2.score + newResults.q3.score);
      }
      return newResults;
    });
    setIsGrading(prev => ({ ...prev, [qKey]: false }));
  };

  const clearGrade = () => {
    setGradingResults({ q1: null, q2: null, q3: null });
    setTotalScore(null);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
        <h1 className="page-title">Writing Part 03</h1>
        
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
      
      <p className="page-description">
        You are a member of a club. You are talking to three other members in the club chat room. Talk to them using sentences. Use 30-40 words per answer. You have 10 minutes to complete this part.
      </p>

      <div className="card">
        <div className="question-list-container">
          {['q1', 'q2', 'q3'].map((qKey, index) => {
            const qData = questionData[qKey];
            const ansText = answers[qKey];
            const gResult = gradingResults[qKey];
            const count = getWordCount(ansText);
            const isOutOfRange = count > 0 && (count < 30 || count > 40);
            const isGoodRange = count >= 30 && count <= 40;
            const isTranslationVisible = showTranslation[qKey];
            const isTemplateVisible = showTemplate[qKey];
            
            return (
              <div className="question-block" key={qKey} style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: index < 2 ? '1px dashed var(--border-color)' : 'none' }}>
                <div className="question-header">
                  <div className="question-text" style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                        {qData.member.charAt(qData.member.length - 1)}
                      </div>
                      <strong style={{ color: 'var(--primary)' }}>{qData.member}</strong>
                    </div>
                    <div style={{ backgroundColor: '#F1F5F9', padding: '1rem', borderRadius: '0 8px 8px 8px', borderLeft: '4px solid var(--primary)', marginBottom: '1rem' }}>
                      {qData.question}
                    </div>
                    
                    <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      {qData.templates && qData.templates.length > 0 && (
                        <button 
                          className={`btn-translate ${isTemplateVisible ? 'active' : ''}`}
                          onClick={() => toggleTemplate(qKey)}
                          title="Gợi ý cấu trúc"
                        >
                          {isTemplateVisible ? 'Ẩn cấu trúc' : 'Gợi ý cấu trúc'}
                        </button>
                      )}
                      {qData.vi && (
                        <button 
                          className={`btn-translate ${isTranslationVisible ? 'active' : ''}`}
                          onClick={() => toggleTranslation(qKey)}
                          title="Dịch câu hỏi"
                        >
                          {isTranslationVisible ? 'Ẩn dịch' : 'Dịch'}
                        </button>
                      )}
                    </div>

                    {isTranslationVisible && qData.vi && (
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '1rem', marginLeft: '0.5rem' }}>
                        {qData.vi}
                      </div>
                    )}

                    {isTemplateVisible && (
                      <div style={{ 
                        marginBottom: '1rem', 
                        padding: '0.75rem', 
                        backgroundColor: '#F8FAFC', 
                        border: '1px dashed #94A3B8',
                        borderRadius: '6px',
                        color: 'var(--primary)',
                        fontSize: '0.95rem',
                        lineHeight: '1.5'
                      }}>
                        {qData.templates && qData.templates.length > 0 && (
                          <div style={{ marginBottom: qData.vocab && qData.vocab.length > 0 ? '1rem' : '0' }}>
                            <div style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#B45309' }}>Khung đáp án gợi ý:</div>
                            <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                              {qData.templates.map((tpl, idx) => (
                                <li key={idx} style={{ paddingBottom: '0.5rem', borderBottom: idx !== qData.templates.length - 1 ? '1px dashed rgba(0,0,0,0.1)' : 'none' }}>
                                  <span style={{ fontWeight: '600', marginRight: '0.3rem' }}>Cách {idx + 1}:</span>
                                  <span dangerouslySetInnerHTML={{ 
                                    __html: tpl.replace(/\[(.*?)\]/g, '<span style="color: #D97706; font-weight: 700;">[$1]</span>') 
                                  }} />
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {qData.vocab && qData.vocab.length > 0 && (
                          <div style={{ 
                            paddingTop: qData.templates && qData.templates.length > 0 ? '1rem' : '0', 
                            borderTop: qData.templates && qData.templates.length > 0 ? '2px solid rgba(180, 83, 9, 0.1)' : 'none'
                          }}>
                            <div style={{ fontWeight: '600', marginBottom: '0.8rem', color: '#B45309' }}>TỪ VỰNG HỮU ÍCH:</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                              {qData.vocab.map((vocabItem, idx) => {
                                const catMatch = vocabItem.match(/^(✨ \[.*?\]):/);
                                const categoryName = catMatch ? catMatch[1].replace('✨ ', '') : '';
                                
                                const regex = /<strong>(.*?)<\/strong>\s*\((.*?)\)/g;
                                const items = [];
                                let match;
                                while ((match = regex.exec(vocabItem)) !== null) {
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
                                              width: '28px',
                                              height: '28px',
                                              display: 'flex', 
                                              alignItems: 'center', 
                                              justifyContent: 'center',
                                              transition: 'all 0.2s'
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
                  style={{ minHeight: '120px', resize: 'vertical' }}
                  placeholder={`Start writing your answer for ${qKey}...`}
                  value={answers[qKey] || ''}
                  onChange={(e) => handleAnswerChange(qKey, e.target.value)}
                />
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                  <div className={`word-count ${isOutOfRange ? 'limit-reached' : ''}`} style={{ color: isGoodRange ? '#10B981' : undefined }}>
                    Words: {count} / 40
                    {isOutOfRange && <span style={{ marginLeft: '0.5rem', fontSize: '0.8rem' }}>(Yêu cầu 30-40 từ)</span>}
                  </div>
                  
                  {!gResult ? (
                    <button 
                      className="btn btn-secondary" 
                      style={{ padding: '0.4rem 1rem', fontSize: '0.85rem', opacity: isGrading[qKey] ? 0.7 : 1, cursor: isGrading[qKey] ? 'not-allowed' : 'pointer' }} 
                      onClick={() => handleGradeSingle(qKey)}
                      disabled={isGrading[qKey]}
                    >
                      {isGrading[qKey] ? 'Đang chấm...' : 'Chấm điểm'}
                    </button>
                  ) : (
                    <button 
                      className="btn btn-primary" 
                      style={{ padding: '0.4rem 1rem', fontSize: '0.85rem', backgroundColor: 'var(--border-color)', color: 'var(--text-main)' }} 
                      onClick={() => {
                        setGradingResults(prev => ({...prev, [qKey]: null}));
                        setTotalScore(null);
                      }}
                    >
                      Làm lại
                    </button>
                  )}
                </div>

                {gResult && (
                  <div className={`feedback-box feedback-${gResult.status}`} style={{ marginTop: '1rem' }}>
                    <div className="feedback-score">
                      {gResult.status === 'success' && <CheckCircle size={18} />}
                      {gResult.status === 'warning' && <AlertCircle size={18} />}
                      {gResult.status === 'error' && <XCircle size={18} />}
                      Điểm: {gResult.score} / 5
                    </div>
                    <div style={{ whiteSpace: 'pre-line', lineHeight: '1.5' }}>{gResult.feedback}</div>
                    
                    {/* Sample Answers shown after grading */}
                    <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                      <div style={{ fontWeight: '600', marginBottom: '0.5rem', color: 'var(--primary)' }}>
                        💡 {qData.samples.length} Đáp án tham khảo:
                      </div>
                      {qData.samples && qData.samples.length > 0 && (
                        <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                          {qData.samples.map((sample, idx) => (
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
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Global Grading Section */}
        {totalScore !== null && (
          <div style={{ 
            marginTop: '1rem', 
            padding: '1.5rem', 
            backgroundColor: '#F8FAFC', 
            borderRadius: '8px', 
            border: '1px solid var(--border-color)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>
              TỔNG ĐIỂM PART 3: {totalScore} / 15
            </div>
            <button 
              className="btn btn-secondary" 
              style={{ padding: '0.75rem 2rem', fontSize: '1rem', width: '100%', maxWidth: '300px' }} 
              onClick={clearGrade}
            >
              Làm lại toàn bộ Part 3
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Part3;
