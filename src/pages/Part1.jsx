import React, { useState, useEffect } from 'react';
import { Send, Bookmark, ChevronDown, CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import { clubsData } from '../data/clubsData';
import PracticeActionBar from '../components/PracticeActionBar';
import { saveClubHistory, clearClubHistory, getClubSavedTime } from '../utils/historyManager';

const Part1 = () => {
  const clubNames = Object.keys(clubsData).sort((a, b) => a.localeCompare(b));
  const [selectedClub, setSelectedClub] = useState(clubNames[0]);
  const [questions, setQuestions] = useState(clubsData[selectedClub]);
  
  // State for answers based on current questions
  const [answers, setAnswers] = useState({});
  // Store grading results per question id
  const [gradingResults, setGradingResults] = useState({});
  // Store loading state per question id
  const [isGrading, setIsGrading] = useState({});
  // Store translation visibility state per question id
  const [showTranslation, setShowTranslation] = useState({});

  // Add state for completed clubs
  const [completedClubs, setCompletedClubs] = useState([]);
  const [lastSavedTime, setLastSavedTime] = useState(null);

  useEffect(() => {
    const updateCompleted = () => {
      setCompletedClubs(JSON.parse(localStorage.getItem('aptis_p1_completed') || '[]'));
    };
    updateCompleted();
    window.addEventListener('progressUpdate', updateCompleted);
    return () => window.removeEventListener('progressUpdate', updateCompleted);
  }, []);

  // Reset answers when club changes
  useEffect(() => {
    const newQuestions = clubsData[selectedClub];
    setQuestions(newQuestions);
    
    const savedAnswers = localStorage.getItem(`aptis_p1_answers_${selectedClub}`);
    const savedGrades = localStorage.getItem(`aptis_p1_grades_${selectedClub}`);
    setLastSavedTime(getClubSavedTime(1, selectedClub));

    if (savedAnswers) {
      try {
        setAnswers(JSON.parse(savedAnswers));
      } catch {
        setAnswers(newQuestions.reduce((acc, q) => ({ ...acc, [q.id]: '' }), {}));
      }
    } else {
      setAnswers(newQuestions.reduce((acc, q) => ({ ...acc, [q.id]: '' }), {}));
    }

    if (savedGrades) {
      try {
        setGradingResults(JSON.parse(savedGrades));
      } catch {
        setGradingResults({});
      }
    } else {
      setGradingResults({}); // Clear previous results
    }

    setShowTranslation({});
  }, [selectedClub]);

  const toggleTranslation = (qId) => {
    setShowTranslation(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handleTextChange = (id, value) => {
    const updated = { ...answers, [id]: value };
    setAnswers(updated);
    if (Object.values(updated).some(val => val && val.trim() !== '')) {
      localStorage.setItem(`aptis_p1_answers_${selectedClub}`, JSON.stringify(updated));
    } else {
      localStorage.removeItem(`aptis_p1_answers_${selectedClub}`);
    }

    setGradingResults(prev => {
      if (!prev[id]) return prev;
      const newResults = { ...prev };
      delete newResults[id];
      localStorage.setItem(`aptis_p1_grades_${selectedClub}`, JSON.stringify(newResults));
      return newResults;
    });
  };

  const getWordCount = (text) => {
    if (!text || !text.trim()) return 0;
    return text.trim().split(/\s+/).length;
  };

  const gradeSingleQuestion = async (qId) => {
    const answer = answers[qId] || '';
    const trimmed = answer.trim();
    const count = getWordCount(answer);
    
    let score = 0;
    let feedback = '';
    let status = '';

    if (count === 0) {
      score = 0;
      feedback = 'Bạn chưa trả lời câu hỏi này.';
      status = 'error';
      setGradingResults(prev => ({ ...prev, [qId]: { score, feedback, status } }));
      return;
    } 
    
    if (count > 5) {
      score = 3;
      feedback = 'Bạn đã viết quá số từ quy định. Part 1 chỉ yêu cầu 1-5 từ.';
      status = 'warning';
      setGradingResults(prev => ({ ...prev, [qId]: { score, feedback, status } }));
      return;
    } 

    const startsWithCapital = /^[A-Z]/.test(trimmed);
    let grammarIssues = [];

    if (!startsWithCapital) {
      grammarIssues.push('viết hoa chữ cái đầu tiên');
    }

    // Basic heuristic rules for common mistakes
    if (/\b[i]\b/.test(trimmed)) {
      grammarIssues.push('viết hoa đại từ "I"');
    }
    
    const lowerTrimmed = trimmed.toLowerCase();
    if (lowerTrimmed.includes('fine thanks') || lowerTrimmed.includes('fine thank you')) {
      grammarIssues.push('thêm dấu phẩy sau "Fine" (ví dụ: Fine, thanks)');
    } else if (/^(yes|no|hi|hello)\s+[a-z]/i.test(trimmed) && !trimmed.includes(',')) {
      grammarIssues.push('thêm dấu phẩy sau các từ cảm thán như Yes, No, Hi, Hello');
    }

    setIsGrading(prev => ({ ...prev, [qId]: true }));
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
           apiIssues = data.matches
             .filter(match => match.rule.category.id !== 'PUNCTUATION') // Lược bỏ lỗi dấu câu vì Part 1 ngắn
             .map(match => {
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
    } finally {
      setIsGrading(prev => ({ ...prev, [qId]: false }));
    }

    const allIssues = [...grammarIssues, ...apiIssues];

    if (allIssues.length > 0) {
      score = Math.max(1, 5 - allIssues.length);
      feedback = `Nên sửa các lỗi sau để câu trả lời chuẩn xác hơn:\n- ${allIssues.join('\n- ')}`;
      status = 'warning';
    } else {
      score = 5;
      feedback = 'Tuyệt vời! Câu trả lời ngắn gọn, đúng format và không có lỗi chính tả/ngữ pháp.';
      status = 'success';
    }

    setGradingResults(prev => {
      const newResults = {
        ...prev,
        [qId]: { score, feedback, status }
      };
      localStorage.setItem(`aptis_p1_grades_${selectedClub}`, JSON.stringify(newResults));

      const qIds = clubsData[selectedClub]?.map(q => q.id) || [];
      if (qIds.length > 0) {
        const allSuccess = qIds.every(id => newResults[id] && newResults[id].status === 'success');
        const completed = JSON.parse(localStorage.getItem('aptis_p1_completed') || '[]');
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
          localStorage.setItem('aptis_p1_completed', JSON.stringify(completed));
          window.dispatchEvent(new Event('progressUpdate'));
        }
      }

      return newResults;
    });
  };

  const clearSingleGrade = (qId) => {
    setGradingResults(prev => {
      const newResults = { ...prev };
      delete newResults[qId];
      localStorage.setItem(`aptis_p1_grades_${selectedClub}`, JSON.stringify(newResults));

      const completed = JSON.parse(localStorage.getItem('aptis_p1_completed') || '[]');
      if (completed.includes(selectedClub)) {
        const next = completed.filter(c => c !== selectedClub);
        localStorage.setItem('aptis_p1_completed', JSON.stringify(next));
        window.dispatchEvent(new Event('progressUpdate'));
      }
      return newResults;
    });
  };

  const handleManualSave = () => {
    const time = saveClubHistory(1, selectedClub, answers, gradingResults);
    setLastSavedTime(time);
    return time;
  };

  const handleClearCurrentClub = () => {
    clearClubHistory(1, selectedClub);
    setAnswers(questions.reduce((acc, q) => ({ ...acc, [q.id]: '' }), {}));
    setGradingResults({});
    setLastSavedTime(null);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
        <h1 className="page-title">Writing Part 01</h1>
        
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
        partName="Writing Part 01"
        partNumber={1}
        clubName={selectedClub}
        lastSavedTime={lastSavedTime}
        onSave={handleManualSave}
        onClear={handleClearCurrentClub}
      />
      
      <p className="page-description">
        You are a member of a club. You are talking to other members in the club chat room. Talk to them using sentences. Use 1 - 5 words per answer. You have 3 minutes to complete this part.
      </p>

      <div className="card">
        <div className="question-list-container">
          {questions.map((q, index) => {
            const currentCount = getWordCount(answers[q.id]);
            const isLimitReached = currentCount > 5;
            const feedback = gradingResults[q.id];
            
            return (
              <div key={q.id} className="question-block">
                <div className="question-header">
                  <div className="question-text" style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', width: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div><strong>{index + 1}.</strong> {q.text}</div>
                      {q.vi && (
                        <button 
                          className={`btn-translate ${showTranslation[q.id] ? 'active' : ''}`}
                          onClick={() => toggleTranslation(q.id)}
                          title="Dịch câu hỏi"
                        >
                          {showTranslation[q.id] ? 'Ẩn dịch' : 'Dịch'}
                        </button>
                      )}
                    </div>
                    {showTranslation[q.id] && q.vi && (
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontStyle: 'italic', paddingLeft: '1.2rem' }}>
                        {q.vi}
                      </div>
                    )}
                  </div>
                </div>
                
                <input
                  type="text"
                  className="premium-input"
                  placeholder="Your answer..."
                  value={answers[q.id] || ''}
                  onChange={(e) => handleTextChange(q.id, e.target.value)}
                />
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                  <div className={`word-count ${isLimitReached ? 'limit-reached' : ''}`}>
                    Words: {currentCount} / 5
                  </div>
                  
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {!feedback ? (
                      <button 
                        className="btn btn-secondary" 
                        style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }} 
                        onClick={() => gradeSingleQuestion(q.id)}
                        disabled={isGrading[q.id]}
                      >
                        {isGrading[q.id] ? 'Đang chấm...' : 'Chấm điểm'}
                      </button>
                    ) : (
                      <button 
                        className="btn btn-primary" 
                        style={{ padding: '0.4rem 1rem', fontSize: '0.85rem', backgroundColor: 'var(--border-color)', color: 'var(--text-main)' }} 
                        onClick={() => clearSingleGrade(q.id)}
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
                {feedback && (
                  <div className={`feedback-box feedback-${feedback.status}`}>
                    <div className="feedback-score">
                      {feedback.status === 'success' && <CheckCircle size={18} />}
                      {feedback.status === 'warning' && <AlertCircle size={18} />}
                      {feedback.status === 'error' && <XCircle size={18} />}
                      Điểm: {feedback.score} / 5
                    </div>
                    <div>{feedback.feedback}</div>

                    {/* Sample Answers */}
                    <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                      <div style={{ fontWeight: '600', marginBottom: '0.5rem', color: 'var(--primary)' }}>
                        💡 {q.samples && q.samples.length ? q.samples.length : 0} Đáp án tham khảo:
                      </div>
                      {q.samples && q.samples.length > 0 ? (
                        <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          {q.samples.map((sample, idx) => (
                            <li key={idx} style={{ 
                              fontSize: '0.9rem', 
                              backgroundColor: '#FFFFFF', 
                              padding: '0.6rem', 
                              borderRadius: '6px',
                              textAlign: 'justify',
                              lineHeight: '1.4',
                              boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                              border: '1px solid rgba(0,0,0,0.05)'
                            }}>
                              <div style={{ fontWeight: '700', color: 'var(--primary)' }}>
                                <span style={{ color: '#B45309', marginRight: '4px' }}>{idx + 1}.</span> 
                                {sample.en}
                              </div>
                              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.2rem' }}>Dịch: {sample.vi}</div>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontStyle: 'italic' }}>
                          Đang cập nhật đáp án mẫu cho câu lạc bộ này...
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Part1;
