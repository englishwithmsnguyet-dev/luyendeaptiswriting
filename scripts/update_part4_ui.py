code = r'''import React, { useState, useEffect } from 'react';
import { part4Data, part4CommonTemplates } from '../data/part4Data';
import { saveClubHistory, clearClubHistory, getClubSavedTime, getSafeJSON } from '../utils/historyManager';
import PracticeActionBar from '../components/PracticeActionBar';
import { 
  ChevronDown, Mail, User, ShieldCheck, BookOpen, 
  Sparkles, Copy, Check, AlertTriangle, HelpCircle, Columns, 
  CheckCircle2, Volume2, Award, Info, FileText
} from 'lucide-react';
import { exportToWord } from '../utils/exportToWord';

// Helper to render text with vivid yellow/gold highlight for all [ ... ] placeholders
export const renderHighlightedText = (text) => {
  if (!text) return null;
  const parts = text.split(/(\[[^\]]+\])/g);

  return parts.map((part, idx) => {
    if (part.startsWith('[') && part.endsWith(']')) {
      return (
        <mark
          key={idx}
          style={{
            backgroundColor: '#fef08a', // Vibrant highlighter yellow
            color: '#78350f',          // Dark amber text for maximum contrast
            border: '1.5px dashed #d97706',
            borderRadius: '6px',
            padding: '0.15rem 0.55rem',
            margin: '0.1rem 0.2rem',
            fontWeight: 800,
            fontSize: '0.92em',
            boxShadow: '0 2px 5px rgba(217, 119, 6, 0.2)',
            display: 'inline-block',
            lineHeight: '1.35',
            verticalAlign: 'baseline'
          }}
          title="Chỗ cần thay thế thông tin từ đề bài"
        >
          ✏️ {part}
        </mark>
      );
    }
    return <span key={idx}>{part}</span>;
  });
};

// Grouping 19 clubs into logical sets for optgroup
export const clubGroups = [
  {
    group: "📘 BỘ 1: LUYỆN ĐỀ APTIS (11 ĐỀ)",
    clubs: [
      { id: "Film club", name: "1. Film Club (Nhà phê bình phim & Thu hút người dự)" },
      { id: "Car club", name: "2. Car Club (Chuyến đi Châu Âu & Cử 2 đại diện)" },
      { id: "Garden club 2", name: "3. Garden Club (Trồng 50 cây ở công viên vs Dạy kỹ năng làm vườn)" },
      { id: "Community club", name: "4. Community Club (Tuyển thành viên & Ý tưởng hoạt động)" },
      { id: "Music club", name: "5. Music Club (Khiếu nại tiếng ồn từ các buổi hòa nhạc)" },
      { id: "English club 1", name: "6.1 English Club (Talk Show bị hủy do khách mời bận)" },
      { id: "English club 2", name: "6.2 English Club (Tài trợ Talk Show về lợi ích tiếng Anh)" },
      { id: "Book club 1", name: "7.1 Book Club (Mời tác giả nổi tiếng & Thu hút mọi lứa tuổi)" },
      { id: "Book club 2", name: "7.2 Book Club (Đóng cửa thư viện vì xu hướng đọc online)" },
      { id: "Living home club", name: "8. Living Home Club (Lời khuyên cho người trẻ mua nhà sớm)" },
      { id: "Social club 2", name: "9. Social Club (Địa điểm họp mặt & Trong nhà vs Ngoài trời)" }
    ]
  },
  {
    group: "📙 BỘ 2: CÂU HỎI ÔN TẬP (6 ĐỀ)",
    clubs: [
      { id: "Art club", name: "Art Club (Mời họa sĩ nói chuyện trước công chúng)" },
      { id: "Food club", name: "Food Club (Tình nguyện làm diễn giả cùng đầu bếp nổi tiếng)" },
      { id: "Social club", name: "Social Club (Gặp mặt trực tiếp hàng tháng cho mọi lứa tuổi)" },
      { id: "Beautiful homes club", name: "Beautiful Homes Club (Phá dỡ công trình cũ xây chung cư)" },
      { id: "Garden club", name: "Garden Club (Hủy nói chuyện Vườn Nhật, thay bằng Vườn Anh)" },
      { id: "Sports club", name: "Sports Club (Tổ chức thi đấu thể thao cho thành viên trẻ)" }
    ]
  },
  {
    group: "📗 BỘ 3: ĐỀ MẪU GIÁO TRÌNH (2 ĐỀ)",
    clubs: [
      { id: "Walking club", name: "Walking Club (Sự kiện đi bộ hàng tháng - Đề chuẩn Cô Nguyệt)" },
      { id: "Fitness club", name: "Fitness Club (Nâng cấp thiết bị tập & Tăng phí hội viên 15%)" }
    ]
  }
];

const Part4 = () => {
  const [selectedClub, setSelectedClub] = useState('Walking club');
  const [clubData, setClubData] = useState(part4Data['Walking club'] || part4Data[Object.keys(part4Data)[0]]);
  
  const [answers, setAnswers] = useState({ email1: '', email2: '' });
  const [completedClubs, setCompletedClubs] = useState([]);
  const [lastSavedTime, setLastSavedTime] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Active top tab: 'practice' | 'templates' | 'style-guide'
  const [activeTab, setActiveTab] = useState('practice');

  // Workspace subview: 'all' (sequential) | 'email1' | 'email2'
  const [workspaceMode, setWorkspaceMode] = useState('all');

  // Toggles for helpers
  const [showNoticeVi, setShowNoticeVi] = useState(false);
  const [showPromptAnalysis, setShowPromptAnalysis] = useState(false);

  const [showEmail1InstructionVi, setShowEmail1InstructionVi] = useState(false);
  const [showEmail1Template, setShowEmail1Template] = useState(false);
  const [showEmail1Sample, setShowEmail1Sample] = useState(false);

  const [showEmail2InstructionVi, setShowEmail2InstructionVi] = useState(false);
  const [showEmail2Template, setShowEmail2Template] = useState(false);
  const [showEmail2Sample, setShowEmail2Sample] = useState(false);

  // Copied toast state
  const [copiedKey, setCopiedKey] = useState(null);

  // Audio pronunciation like Part 3
  const playAudio = (word) => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      utterance.pitch = 1.05;
      
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

  const showToast = (text, type = 'success') => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Load completed clubs on mount & when storage changes
  useEffect(() => {
    const loadCompleted = () => {
      setCompletedClubs(getSafeJSON('aptis_p4_completed', []));
    };
    loadCompleted();
    window.addEventListener('progressUpdate', loadCompleted);
    return () => window.removeEventListener('progressUpdate', loadCompleted);
  }, []);

  // When selected club changes, load saved answers
  useEffect(() => {
    const data = part4Data[selectedClub];
    if (data) {
      setClubData(data);
    }
    
    const saved = localStorage.getItem(`aptis_p4_answers_${selectedClub}`);
    setLastSavedTime(getClubSavedTime(4, selectedClub));

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setAnswers({ email1: parsed.email1 || '', email2: parsed.email2 || '' });
      } catch {
        setAnswers({ email1: '', email2: '' });
      }
    } else {
      setAnswers({ email1: '', email2: '' });
    }
  }, [selectedClub]);

  const getWordCount = (text) => {
    if (!text || !text.trim()) return 0;
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  const handleAnswerChange = (emailKey, value) => {
    const updated = { ...answers, [emailKey]: value };
    setAnswers(updated);
    
    // Auto-save to localStorage
    if (updated.email1?.trim() || updated.email2?.trim()) {
      localStorage.setItem(`aptis_p4_answers_${selectedClub}`, JSON.stringify(updated));
    } else {
      localStorage.removeItem(`aptis_p4_answers_${selectedClub}`);
    }
  };

  // Student proactively clicks Save
  const handleManualSave = () => {
    const time = saveClubHistory(4, selectedClub, answers);
    setLastSavedTime(time);

    const count1 = getWordCount(answers.email1);
    const count2 = getWordCount(answers.email2);

    if (count1 > 20 && count2 > 50) {
      const completed = getSafeJSON('aptis_p4_completed', []);
      if (!completed.includes(selectedClub)) {
        completed.push(selectedClub);
        localStorage.setItem('aptis_p4_completed', JSON.stringify(completed));
        window.dispatchEvent(new Event('progressUpdate'));
      }
    }

    showToast(`Đã lưu bài làm Part 4 "${clubData.title}" thành công! (${time})`, 'success');
    return time;
  };

  const handleClearCurrentClub = () => {
    clearClubHistory(4, selectedClub);
    setAnswers({ email1: '', email2: '' });
    setLastSavedTime(null);
    showToast(`Đã xoá bài làm của "${clubData.title}". Bạn có thể làm lại từ đầu!`, 'warning');
  };

  const handleExportWord = () => {
    exportToWord(4, selectedClub, answers, clubData);
    showToast('Đang tạo và tải xuống file Word bài làm Part 4 của bạn...', 'info');
  };

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    showToast('Đã sao chép nội dung vào khay nhớ tạm!', 'success');
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const insertTemplateToEditor = (emailKey, templateText) => {
    const current = answers[emailKey] || '';
    if (current.trim() && !window.confirm('Ô bài làm hiện đã có chữ. Bạn có chắc chắn muốn thay thế bằng khung mẫu không?')) {
      return;
    }
    handleAnswerChange(emailKey, templateText);
    showToast(`Đã dán khung sườn chuẩn vào ô ${emailKey === 'email1' ? 'Email 1' : 'Email 2'}!`, 'success');
  };

  const insertPhrase = (emailKey, phrase) => {
    const current = answers[emailKey] || '';
    const newText = current.trim() ? `${current.trim()} ${phrase}` : phrase;
    handleAnswerChange(emailKey, newText);
    showToast(`Đã chèn cụm từ vào ${emailKey === 'email1' ? 'Email 1' : 'Email 2'}!`, 'success');
  };

  // Contraction checking for Email 2 (formal)
  const contractionsRegex = /\b(can't|don't|won't|it's|i'm|i've|i'll|i'd|we're|they're|you're|didn't|doesn't|isn't|aren't|wasn't|weren't|haven't|hasn't|hadn't)\b/gi;
  const email2Contractions = (answers.email2.match(contractionsRegex) || []);

  const email1Count = getWordCount(answers.email1);
  const email2Count = getWordCount(answers.email2);

  const isEmail1InRange = email1Count >= 45 && email1Count <= 55;
  const isEmail1TooShort = email1Count > 0 && email1Count < 45;
  const isEmail1TooLong = email1Count > 65;

  const isEmail2InRange = email2Count >= 120 && email2Count <= 150;
  const isEmail2TooShort = email2Count > 0 && email2Count < 120;
  const isEmail2TooLong = email2Count > 165;

  return (
    <div className="part-container" style={{ maxWidth: '1080px', margin: '0 auto', padding: '1.5rem 1rem' }}>
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          backgroundColor: toastMessage.type === 'warning' ? '#f59e0b' : (toastMessage.type === 'info' ? '#2563eb' : '#10b981'),
          color: 'white',
          padding: '0.85rem 1.4rem',
          borderRadius: '8px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          fontWeight: 600,
          fontSize: '0.95rem'
        }}>
          {toastMessage.type === 'warning' ? <AlertTriangle size={20} /> : <CheckCircle2 size={20} />}
          <span>{toastMessage.text}</span>
        </div>
      )}

      {/* Header Bar */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '1.25rem',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
            <span style={{ 
              backgroundColor: '#eff6ff', 
              color: '#2563eb', 
              padding: '0.2rem 0.6rem', 
              borderRadius: '6px', 
              fontSize: '0.8rem', 
              fontWeight: 800,
              letterSpacing: '0.5px' 
            }}>
              APTIS Writing Master
            </span>
            <span style={{ color: '#64748b', fontSize: '0.85rem' }}>• Thời gian gợi ý: 30 phút</span>
          </div>
          <h1 className="page-title" style={{ margin: 0, fontSize: '1.75rem', color: '#0f172a' }}>
            Writing Part 04: Viết 2 Email
          </h1>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: '0.25rem 0 0 0' }}>
            Email 1 gửi bạn thân (~50 từ, thân mật) & Email 2 gửi Quản lý CLB (120 - 150 từ, trang trọng chuẩn B2-C1).
          </p>
        </div>
        
        {/* Grouped Club Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <label style={{ fontSize: '0.88rem', fontWeight: 700, color: '#475569' }}>Chọn đề luyện tập:</label>
          <div style={{ position: 'relative', minWidth: '280px' }}>
            <select 
              value={selectedClub} 
              onChange={(e) => setSelectedClub(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 2.25rem 0.65rem 1rem',
                appearance: 'none',
                backgroundColor: 'white',
                border: '2px solid #cbd5e1',
                borderRadius: '8px',
                fontSize: '0.92rem',
                color: '#0f172a',
                fontWeight: '600',
                cursor: 'pointer',
                outline: 'none',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
              }}
            >
              {clubGroups.map((grp, gIdx) => (
                <optgroup key={gIdx} label={grp.group}>
                  {grp.clubs.map(c => (
                    <option key={c.id} value={c.id}>
                      {completedClubs.includes(c.id) ? `✅ ${c.name}` : c.name}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <ChevronDown 
              size={18} 
              color="#64748b" 
              style={{ position: 'absolute', right: '0.85rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} 
            />
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <PracticeActionBar 
        partName="Writing Part 04"
        partNumber={4}
        clubName={selectedClub}
        lastSavedTime={lastSavedTime}
        onSave={handleManualSave}
        onClear={handleClearCurrentClub}
        onExportWord={handleExportWord}
      />

      {/* Navigation Tabs */}
      <div style={{ 
        display: 'flex', 
        gap: '0.5rem', 
        marginBottom: '1.5rem', 
        borderBottom: '2px solid #e2e8f0',
        paddingBottom: '0.25rem'
      }}>
        <button
          type="button"
          onClick={() => setActiveTab('practice')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.65rem 1.25rem',
            fontSize: '0.95rem',
            fontWeight: 700,
            color: activeTab === 'practice' ? '#2563eb' : '#64748b',
            backgroundColor: activeTab === 'practice' ? '#eff6ff' : 'transparent',
            border: 'none',
            borderBottom: activeTab === 'practice' ? '3px solid #2563eb' : '3px solid transparent',
            borderRadius: '6px 6px 0 0',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          <Mail size={18} />
          ⚡ Luyện viết & Làm bài
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('templates')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.65rem 1.25rem',
            fontSize: '0.95rem',
            fontWeight: 700,
            color: activeTab === 'templates' ? '#4f46e5' : '#64748b',
            backgroundColor: activeTab === 'templates' ? '#eef2ff' : 'transparent',
            border: 'none',
            borderBottom: activeTab === 'templates' ? '3px solid #4f46e5' : '3px solid transparent',
            borderRadius: '6px 6px 0 0',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          <BookOpen size={18} />
          📖 Khung sườn chi tiết 2 Email
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('style-guide')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.65rem 1.25rem',
            fontSize: '0.95rem',
            fontWeight: 700,
            color: activeTab === 'style-guide' ? '#0d9488' : '#64748b',
            backgroundColor: activeTab === 'style-guide' ? '#f0fdfa' : 'transparent',
            border: 'none',
            borderBottom: activeTab === 'style-guide' ? '3px solid #0d9488' : '3px solid transparent',
            borderRadius: '6px 6px 0 0',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          <Sparkles size={18} />
          ⚖️ So sánh: Thân mật vs Trang trọng
        </button>
      </div>

      {/* ======================================================== */}
      {/* TAB 1: WORKSPACE / PRACTICE */}
      {/* ======================================================== */}
      {activeTab === 'practice' && (
        <div>
          {/* Section 1: Official Club Notice */}
          <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '4px solid #2563eb' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={20} color="#2563eb" />
                <span style={{ fontWeight: 800, color: '#1e3a8a', fontSize: '1rem', textTransform: 'uppercase' }}>
                  Thông báo từ câu lạc bộ ({clubData.title})
                </span>
                {clubData.badge && (
                  <span style={{ backgroundColor: '#f1f5f9', color: '#475569', fontSize: '0.75rem', padding: '0.15rem 0.5rem', borderRadius: '12px', border: '1px solid #cbd5e1', fontWeight: 600 }}>
                    {clubData.badge}
                  </span>
                )}
              </div>

              <div style={{ display: 'flex', gap: '0.4rem' }}>
                {clubData.promptAnalysis && (
                  <button 
                    className={`btn-translate ${showPromptAnalysis ? 'active' : ''}`}
                    onClick={() => setShowPromptAnalysis(!showPromptAnalysis)}
                    title="Phân tích đề bài nhanh"
                  >
                    {showPromptAnalysis ? 'Ẩn phân tích' : '📌 Phân tích đề'}
                  </button>
                )}
                {clubData.noticeVi && (
                  <button 
                    className={`btn-translate ${showNoticeVi ? 'active' : ''}`}
                    onClick={() => setShowNoticeVi(!showNoticeVi)}
                    title="Dịch thông báo sang tiếng Việt"
                  >
                    {showNoticeVi ? 'Ẩn dịch' : '🇻🇳 Dịch thông báo'}
                  </button>
                )}
              </div>
            </div>

            {/* English Notice text */}
            <div style={{ 
              backgroundColor: '#f8fafc', 
              padding: '1rem 1.25rem', 
              borderRadius: '8px', 
              fontSize: '1rem', 
              lineHeight: '1.65', 
              color: '#1e293b', 
              whiteSpace: 'pre-line',
              border: '1px solid #e2e8f0',
              fontWeight: 500
            }}>
              {clubData.notice}
            </div>

            {/* Vietnamese Notice translation */}
            {showNoticeVi && clubData.noticeVi && (
              <div style={{ 
                color: '#065f46', 
                backgroundColor: '#ecfdf5',
                fontSize: '0.92rem', 
                fontStyle: 'italic', 
                marginTop: '0.75rem', 
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                borderLeft: '3px solid #10b981',
                lineHeight: '1.6',
                whiteSpace: 'pre-line'
              }}>
                <strong style={{ fontStyle: 'normal', display: 'block', marginBottom: '0.2rem', color: '#047857' }}>
                  🇻🇳 Bản dịch tiếng Việt:
                </strong>
                {clubData.noticeVi}
              </div>
            )}

            {/* Prompt Analysis */}
            {showPromptAnalysis && clubData.promptAnalysis && (
              <div style={{ 
                marginTop: '0.75rem', 
                padding: '0.75rem 1rem', 
                backgroundColor: '#eff6ff', 
                borderRadius: '6px', 
                border: '1px solid #bfdbfe',
                fontSize: '0.88rem',
                color: '#1e3a8a',
                lineHeight: '1.55'
              }}>
                <div><strong>📌 Chủ đề chính:</strong> {clubData.promptAnalysis.topic}</div>
                <div style={{ marginTop: '0.35rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.84rem', color: '#475569' }}>
                  <span>✉️ <strong>Task 1:</strong> {clubData.promptAnalysis.task1}</span>
                  <span>🏢 <strong>Task 2:</strong> {clubData.promptAnalysis.task2}</span>
                </div>
              </div>
            )}
          </div>

          {/* Sub-view Switcher for writing tasks */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '1.25rem',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              <button
                type="button"
                onClick={() => setWorkspaceMode('all')}
                style={{
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: workspaceMode === 'all' ? '#0f172a' : '#ffffff',
                  color: workspaceMode === 'all' ? '#ffffff' : '#475569',
                  cursor: 'pointer'
                }}
              >
                📑 Làm cả 2 Email (Tuần tự)
              </button>
              <button
                type="button"
                onClick={() => setWorkspaceMode('email1')}
                style={{
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  borderRadius: '6px',
                  border: '1px solid #a7f3d0',
                  backgroundColor: workspaceMode === 'email1' ? '#059669' : '#ffffff',
                  color: workspaceMode === 'email1' ? '#ffffff' : '#065f46',
                  cursor: 'pointer'
                }}
              >
                ✉️ Chỉ Email 1 (Bạn bè - 50 từ)
              </button>
              <button
                type="button"
                onClick={() => setWorkspaceMode('email2')}
                style={{
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  borderRadius: '6px',
                  border: '1px solid #bfdbfe',
                  backgroundColor: workspaceMode === 'email2' ? '#2563eb' : '#ffffff',
                  color: workspaceMode === 'email2' ? '#ffffff' : '#1e40af',
                  cursor: 'pointer'
                }}
              >
                🏢 Chỉ Email 2 (Quản lý - 120-150 từ)
              </button>
            </div>

            <div style={{ fontSize: '0.84rem', color: '#64748b' }}>
              💡 Mẹo: Bấm <strong>"Gợi ý cấu trúc"</strong> để xem khung sườn mẫu & từ vựng có loa phát âm 🔊
            </div>
          </div>

          {/* ======================================================== */}
          {/* SECTION 2: TASK 1 - EMAIL TO FRIEND (INFORMAL) */}
          {/* ======================================================== */}
          {(workspaceMode === 'all' || workspaceMode === 'email1') && (
            <div className="card" style={{ marginBottom: '2rem', borderLeft: '4px solid #10b981' }}>
              {/* Task 1 Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#059669', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                    1
                  </div>
                  <div>
                    <strong style={{ color: '#065f46', fontSize: '1.05rem' }}>{clubData.email1.title}</strong>
                    <span style={{ marginLeft: '0.6rem', fontSize: '0.75rem', backgroundColor: '#d1fae5', color: '#065f46', padding: '0.15rem 0.5rem', borderRadius: '12px', fontWeight: 700 }}>
                      Mục tiêu: 45 - 55 từ
                    </span>
                  </div>
                </div>

                {/* Word counter */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ 
                    fontSize: '0.92rem', 
                    fontWeight: 800, 
                    color: isEmail1InRange ? '#059669' : (email1Count === 0 ? '#64748b' : '#d97706') 
                  }}>
                    {email1Count} từ
                  </span>
                  <span style={{ fontSize: '0.8rem', color: isEmail1InRange ? '#059669' : '#64748b' }}>
                    {isEmail1InRange ? '✅ Chuẩn số từ' : (isEmail1TooShort ? '⚠️ Quá ngắn (<45 từ)' : (isEmail1TooLong ? '⚠️ Hơi dài (>65 từ)' : 'Cần: 45-65 từ'))}
                  </span>
                </div>
              </div>

              {/* Task 1 Instruction Bubble */}
              <div style={{ backgroundColor: '#F1F5F9', padding: '0.85rem 1rem', borderRadius: '0 8px 8px 8px', borderLeft: '4px solid #059669', marginBottom: '0.75rem', fontSize: '0.95rem', color: '#1e293b' }}>
                {clubData.email1.instruction}
              </div>

              {/* Action Buttons like Part 3 */}
              <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <button 
                  className={`btn-translate ${showEmail1Template ? 'active' : ''}`}
                  onClick={() => setShowEmail1Template(!showEmail1Template)}
                  title="Gợi ý cấu trúc & Từ vựng B2-C1"
                >
                  {showEmail1Template ? 'Ẩn cấu trúc' : '💡 Gợi ý cấu trúc & Từ vựng'}
                </button>
                {clubData.email1.instructionVi && (
                  <button 
                    className={`btn-translate ${showEmail1InstructionVi ? 'active' : ''}`}
                    onClick={() => setShowEmail1InstructionVi(!showEmail1InstructionVi)}
                    title="Dịch yêu cầu bài viết"
                  >
                    {showEmail1InstructionVi ? 'Ẩn dịch' : '🇻🇳 Dịch đề'}
                  </button>
                )}
                <button 
                  className={`btn-translate ${showEmail1Sample ? 'active' : ''}`}
                  onClick={() => setShowEmail1Sample(!showEmail1Sample)}
                  title="Xem bài mẫu chuẩn và phân tích câu"
                >
                  {showEmail1Sample ? 'Ẩn bài mẫu' : '📝 Bài mẫu chuẩn'}
                </button>
              </div>

              {/* Vietnamese translation of Instruction */}
              {showEmail1InstructionVi && clubData.email1.instructionVi && (
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '1rem', marginLeft: '0.5rem' }}>
                  🇻🇳 {clubData.email1.instructionVi}
                </div>
              )}

              {/* Gợi ý cấu trúc & Từ vựng Box (Style exactly like Part 3) */}
              {showEmail1Template && (
                <div style={{ 
                  marginBottom: '1rem', 
                  padding: '1rem', 
                  backgroundColor: '#F8FAFC', 
                  border: '1px dashed #94A3B8',
                  borderRadius: '6px',
                  color: 'var(--primary)',
                  fontSize: '0.95rem',
                  lineHeight: '1.6'
                }}>
                  {/* Highlighted Template */}
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <div style={{ fontWeight: '700', color: '#B45309', fontSize: '0.95rem' }}>
                        🎯 KHUNG ĐÁP ÁN GỢI Ý (CÁC CHỖ ✏️ [ ... ] CẦN THAY THẾ TỪ ĐỀ BÀI):
                      </div>
                      <button
                        type="button"
                        onClick={() => insertTemplateToEditor('email1', clubData.email1.template)}
                        style={{
                          backgroundColor: '#d1fae5',
                          color: '#065f46',
                          border: '1px solid #a7f3d0',
                          borderRadius: '4px',
                          padding: '0.25rem 0.6rem',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem'
                        }}
                      >
                        <Copy size={13} /> Dán khung sườn vào ô làm bài
                      </button>
                    </div>

                    <div style={{ 
                      backgroundColor: '#ffffff', 
                      padding: '0.85rem 1rem', 
                      borderRadius: '6px', 
                      border: '1px solid #e2e8f0',
                      lineHeight: '1.8',
                      fontSize: '0.96rem',
                      whiteSpace: 'pre-wrap'
                    }}>
                      {renderHighlightedText(clubData.email1.template)}
                    </div>
                  </div>

                  {/* Từ vựng hữu ích with audio buttons */}
                  {clubData.email1.vocabCategories && clubData.email1.vocabCategories.length > 0 && (
                    <div style={{ paddingTop: '0.75rem', borderTop: '2px solid rgba(180, 83, 9, 0.1)' }}>
                      <div style={{ fontWeight: '700', marginBottom: '0.6rem', color: '#B45309', fontSize: '0.95rem' }}>
                        TỪ VỰNG & Ý TƯỞNG ĂN ĐIỂM (BẤM LOA ĐỂ NGHE PHÁT ÂM 🔊):
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {clubData.email1.vocabCategories.map((cat, idx) => (
                          <div key={idx}>
                            <div style={{ fontWeight: '600', marginBottom: '0.35rem', fontSize: '0.88rem', color: '#1e293b' }}>
                              ✨ <span style={{ color: '#D97706' }}>{cat.name}</span>:
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                              {cat.items.map((item, i) => (
                                <div
                                  key={i}
                                  style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    backgroundColor: '#ffffff',
                                    border: '1px solid #cbd5e1',
                                    borderRadius: '6px',
                                    overflow: 'hidden',
                                    boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                                  }}
                                >
                                  <button 
                                    type="button"
                                    onClick={() => playAudio(item.en)}
                                    style={{ 
                                      background: 'rgba(217, 119, 6, 0.1)', 
                                      border: 'none', 
                                      borderRight: '1px solid #e2e8f0',
                                      cursor: 'pointer', 
                                      padding: '0.3rem 0.5rem', 
                                      fontSize: '0.82rem',
                                      display: 'flex', 
                                      alignItems: 'center', 
                                      justifyContent: 'center'
                                    }}
                                    title={`Nghe phát âm: ${item.en}`}
                                  >
                                    🔊
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => insertPhrase('email1', item.en)}
                                    style={{
                                      background: 'transparent',
                                      border: 'none',
                                      padding: '0.3rem 0.6rem',
                                      fontSize: '0.85rem',
                                      cursor: 'pointer',
                                      textAlign: 'left'
                                    }}
                                    title={`Chèn cụm từ vào bài: "${item.en}"`}
                                  >
                                    <strong style={{ color: '#0f172a' }}>{item.en}</strong> <span style={{ color: '#64748b' }}>({item.vi})</span>
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Bài mẫu chuẩn */}
              {showEmail1Sample && clubData.email1.samples && clubData.email1.samples.length > 0 && (
                <div style={{ 
                  marginBottom: '1rem', 
                  padding: '1rem', 
                  backgroundColor: '#ffffff', 
                  border: '1px solid #bbf7d0',
                  borderRadius: '6px'
                }}>
                  <div style={{ fontWeight: 700, color: '#065f46', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                    <span>📝 BÀI MẪU CHUẨN (EMAIL 1):</span>
                    <span style={{ fontSize: '0.82rem', color: '#047857' }}>Độ dài: {clubData.email1.samples[0].wordCount} từ</span>
                  </div>
                  <pre style={{ 
                    fontFamily: 'inherit', 
                    fontSize: '0.95rem', 
                    lineHeight: '1.65', 
                    color: '#0f172a', 
                    whiteSpace: 'pre-wrap',
                    backgroundColor: '#f8fafc',
                    padding: '0.85rem',
                    borderRadius: '6px',
                    border: '1px solid #e2e8f0',
                    margin: '0 0 0.75rem 0'
                  }}>
                    {clubData.email1.samples[0].en}
                  </pre>
                  <div style={{ 
                    fontSize: '0.88rem', 
                    color: '#065f46', 
                    backgroundColor: '#ecfdf5', 
                    padding: '0.75rem', 
                    borderRadius: '6px', 
                    borderLeft: '3px solid #10b981', 
                    lineHeight: '1.6', 
                    whiteSpace: 'pre-line' 
                  }}>
                    <strong style={{ display: 'block', marginBottom: '0.2rem' }}>🇻🇳 Bản dịch đối chiếu:</strong>
                    {clubData.email1.samples[0].vi}
                  </div>
                </div>
              )}

              {/* Writing Area */}
              <div style={{ marginTop: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569' }}>
                    Ô viết bài Email 1:
                  </span>
                  <button
                    type="button"
                    onClick={() => insertTemplateToEditor('email1', clubData.email1.template)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#059669',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    <Copy size={13} /> Dán khung sườn vào ô làm bài
                  </button>
                </div>

                <textarea
                  value={answers.email1}
                  onChange={(e) => handleAnswerChange('email1', e.target.value)}
                  placeholder="Viết email thân mật gửi bạn tại đây... (Ví dụ: Dear Kim, How's it going? ...)"
                  rows={8}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    fontSize: '0.98rem',
                    lineHeight: '1.6',
                    borderRadius: '8px',
                    border: `2px solid ${isEmail1InRange ? '#10b981' : (email1Count > 0 ? '#fbbf24' : '#cbd5e1')}`,
                    outline: 'none',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    backgroundColor: '#ffffff'
                  }}
                />

                {/* Progress bar */}
                <div style={{ width: '100%', height: '5px', backgroundColor: '#e2e8f0', borderRadius: '3px', marginTop: '0.5rem', overflow: 'hidden' }}>
                  <div style={{ 
                    height: '100%', 
                    width: `${Math.min(100, (email1Count / 55) * 100)}%`, 
                    backgroundColor: isEmail1InRange ? '#10b981' : (email1Count > 65 ? '#f59e0b' : '#38bdf8'),
                    transition: 'width 0.3s'
                  }} />
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION 3: TASK 2 - EMAIL TO CLUB MANAGER (FORMAL) */}
          {/* ======================================================== */}
          {(workspaceMode === 'all' || workspaceMode === 'email2') && (
            <div className="card" style={{ marginBottom: '2rem', borderLeft: '4px solid #2563eb' }}>
              {/* Task 2 Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#2563eb', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                    2
                  </div>
                  <div>
                    <strong style={{ color: '#1e3a8a', fontSize: '1.05rem' }}>{clubData.email2.title}</strong>
                    <span style={{ marginLeft: '0.6rem', fontSize: '0.75rem', backgroundColor: '#dbeafe', color: '#1e40af', padding: '0.15rem 0.5rem', borderRadius: '12px', fontWeight: 700 }}>
                      Mục tiêu: 120 - 150 từ
                    </span>
                  </div>
                </div>

                {/* Word counter */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ 
                    fontSize: '0.92rem', 
                    fontWeight: 800, 
                    color: isEmail2InRange ? '#2563eb' : (email2Count === 0 ? '#64748b' : '#d97706') 
                  }}>
                    {email2Count} từ
                  </span>
                  <span style={{ fontSize: '0.8rem', color: isEmail2InRange ? '#2563eb' : '#64748b' }}>
                    {isEmail2InRange ? '✅ Chuẩn số từ' : (isEmail2TooShort ? '⚠️ Quá ngắn (<120 từ)' : (isEmail2TooLong ? '⚠️ Hơi dài (>165 từ)' : 'Cần: 120-165 từ'))}
                  </span>
                </div>
              </div>

              {/* Task 2 Instruction Bubble */}
              <div style={{ backgroundColor: '#F1F5F9', padding: '0.85rem 1rem', borderRadius: '0 8px 8px 8px', borderLeft: '4px solid #2563eb', marginBottom: '0.75rem', fontSize: '0.95rem', color: '#1e293b' }}>
                {clubData.email2.instruction}
              </div>

              {/* Action Buttons like Part 3 */}
              <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <button 
                  className={`btn-translate ${showEmail2Template ? 'active' : ''}`}
                  onClick={() => setShowEmail2Template(!showEmail2Template)}
                  title="Gợi ý cấu trúc & 3 Đề xuất giải pháp B2-C1"
                >
                  {showEmail2Template ? 'Ẩn cấu trúc' : '💡 Gợi ý cấu trúc & 3 Đề xuất'}
                </button>
                {clubData.email2.instructionVi && (
                  <button 
                    className={`btn-translate ${showEmail2InstructionVi ? 'active' : ''}`}
                    onClick={() => setShowEmail2InstructionVi(!showEmail2InstructionVi)}
                    title="Dịch yêu cầu bài viết"
                  >
                    {showEmail2InstructionVi ? 'Ẩn dịch' : '🇻🇳 Dịch đề'}
                  </button>
                )}
                <button 
                  className={`btn-translate ${showEmail2Sample ? 'active' : ''}`}
                  onClick={() => setShowEmail2Sample(!showEmail2Sample)}
                  title="Xem bài mẫu chuẩn và phân tích câu"
                >
                  {showEmail2Sample ? 'Ẩn bài mẫu' : '📝 Bài mẫu chuẩn'}
                </button>
              </div>

              {/* Vietnamese translation of Instruction */}
              {showEmail2InstructionVi && clubData.email2.instructionVi && (
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '1rem', marginLeft: '0.5rem' }}>
                  🇻🇳 {clubData.email2.instructionVi}
                </div>
              )}

              {/* Gợi ý cấu trúc & 3 Đề xuất Box (Style exactly like Part 3) */}
              {showEmail2Template && (
                <div style={{ 
                  marginBottom: '1rem', 
                  padding: '1rem', 
                  backgroundColor: '#F8FAFC', 
                  border: '1px dashed #94A3B8',
                  borderRadius: '6px',
                  color: 'var(--primary)',
                  fontSize: '0.95rem',
                  lineHeight: '1.6'
                }}>
                  {/* Highlighted Template */}
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <div style={{ fontWeight: '700', color: '#B45309', fontSize: '0.95rem' }}>
                        🎯 KHUNG ĐÁP ÁN GỢI Ý (CÁC CHỖ ✏️ [ ... ] CẦN THAY THẾ TỪ ĐỀ BÀI):
                      </div>
                      <button
                        type="button"
                        onClick={() => insertTemplateToEditor('email2', clubData.email2.template)}
                        style={{
                          backgroundColor: '#dbeafe',
                          color: '#1e40af',
                          border: '1px solid #bfdbfe',
                          borderRadius: '4px',
                          padding: '0.25rem 0.6rem',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem'
                        }}
                      >
                        <Copy size={13} /> Dán khung sườn vào ô làm bài
                      </button>
                    </div>

                    <div style={{ 
                      backgroundColor: '#ffffff', 
                      padding: '0.85rem 1rem', 
                      borderRadius: '6px', 
                      border: '1px solid #e2e8f0',
                      lineHeight: '1.8',
                      fontSize: '0.96rem',
                      whiteSpace: 'pre-wrap'
                    }}>
                      {renderHighlightedText(clubData.email2.template)}
                    </div>
                  </div>

                  {/* 3 Đề xuất & Từ vựng hữu ích with audio buttons */}
                  {clubData.email2.vocabCategories && clubData.email2.vocabCategories.length > 0 && (
                    <div style={{ paddingTop: '0.75rem', borderTop: '2px solid rgba(180, 83, 9, 0.1)' }}>
                      <div style={{ fontWeight: '700', marginBottom: '0.6rem', color: '#B45309', fontSize: '0.95rem' }}>
                        3 ĐỀ XUẤT THỰC TẾ & TỪ VỰNG HỌC THUẬT B2-C1 (BẤM LOA ĐỂ NGHE PHÁT ÂM 🔊):
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {clubData.email2.vocabCategories.map((cat, idx) => (
                          <div key={idx}>
                            <div style={{ fontWeight: '600', marginBottom: '0.35rem', fontSize: '0.88rem', color: '#1e293b' }}>
                              ✨ <span style={{ color: '#D97706' }}>{cat.name}</span>:
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                              {cat.items.map((item, i) => (
                                <div
                                  key={i}
                                  style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    backgroundColor: '#ffffff',
                                    border: '1px solid #cbd5e1',
                                    borderRadius: '6px',
                                    overflow: 'hidden',
                                    boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                                  }}
                                >
                                  <button 
                                    type="button"
                                    onClick={() => playAudio(item.en)}
                                    style={{ 
                                      background: 'rgba(217, 119, 6, 0.1)', 
                                      border: 'none', 
                                      borderRight: '1px solid #e2e8f0',
                                      cursor: 'pointer', 
                                      padding: '0.3rem 0.5rem', 
                                      fontSize: '0.82rem',
                                      display: 'flex', 
                                      alignItems: 'center', 
                                      justifyContent: 'center'
                                    }}
                                    title={`Nghe phát âm: ${item.en}`}
                                  >
                                    🔊
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => insertPhrase('email2', item.en)}
                                    style={{
                                      background: 'transparent',
                                      border: 'none',
                                      padding: '0.3rem 0.6rem',
                                      fontSize: '0.85rem',
                                      cursor: 'pointer',
                                      textAlign: 'left'
                                    }}
                                    title={`Chèn cụm từ vào bài: "${item.en}"`}
                                  >
                                    <strong style={{ color: '#0f172a' }}>{item.en}</strong> <span style={{ color: '#64748b' }}>({item.vi})</span>
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Bài mẫu chuẩn */}
              {showEmail2Sample && clubData.email2.samples && clubData.email2.samples.length > 0 && (
                <div style={{ 
                  marginBottom: '1rem', 
                  padding: '1rem', 
                  backgroundColor: '#ffffff', 
                  border: '1px solid #bfdbfe',
                  borderRadius: '6px'
                }}>
                  <div style={{ fontWeight: 700, color: '#1e40af', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                    <span>📝 BÀI MẪU CHUẨN (EMAIL 2):</span>
                    <span style={{ fontSize: '0.82rem', color: '#2563eb' }}>Độ dài: {clubData.email2.samples[0].wordCount} từ</span>
                  </div>
                  <pre style={{ 
                    fontFamily: 'inherit', 
                    fontSize: '0.95rem', 
                    lineHeight: '1.65', 
                    color: '#0f172a', 
                    whiteSpace: 'pre-wrap',
                    backgroundColor: '#f8fafc',
                    padding: '0.85rem',
                    borderRadius: '6px',
                    border: '1px solid #e2e8f0',
                    margin: '0 0 0.75rem 0'
                  }}>
                    {clubData.email2.samples[0].en}
                  </pre>
                  <div style={{ 
                    fontSize: '0.88rem', 
                    color: '#1e40af', 
                    backgroundColor: '#eff6ff', 
                    padding: '0.75rem', 
                    borderRadius: '6px', 
                    borderLeft: '3px solid #2563eb', 
                    lineHeight: '1.6', 
                    whiteSpace: 'pre-line' 
                  }}>
                    <strong style={{ display: 'block', marginBottom: '0.2rem' }}>🇻🇳 Bản dịch đối chiếu:</strong>
                    {clubData.email2.samples[0].vi}
                  </div>
                </div>
              )}

              {/* Writing Area */}
              <div style={{ marginTop: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569' }}>
                    Ô viết bài Email 2:
                  </span>
                  <button
                    type="button"
                    onClick={() => insertTemplateToEditor('email2', clubData.email2.template)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#2563eb',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    <Copy size={13} /> Dán khung sườn vào ô làm bài
                  </button>
                </div>

                {/* Contraction warning */}
                {email2Contractions.length > 0 && (
                  <div style={{ 
                    marginBottom: '0.5rem', 
                    backgroundColor: '#fffbeb', 
                    border: '1px solid #fde68a', 
                    borderRadius: '6px', 
                    padding: '0.4rem 0.65rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.4rem', 
                    fontSize: '0.8rem', 
                    color: '#b45309' 
                  }}>
                    <AlertTriangle size={15} color="#d97706" />
                    <span>
                      <strong>Lưu ý thư trang trọng:</strong> Bạn đang dùng từ viết tắt ({email2Contractions.join(', ')}). Hãy đổi sang dạng đầy đủ để không bị trừ điểm!
                    </span>
                  </div>
                )}

                <textarea
                  value={answers.email2}
                  onChange={(e) => handleAnswerChange('email2', e.target.value)}
                  placeholder="Viết email trang trọng gửi Quản lý CLB tại đây... (Dear Club Manager, My name is ..., and I have been a member ...)"
                  rows={12}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    fontSize: '0.98rem',
                    lineHeight: '1.6',
                    borderRadius: '8px',
                    border: `2px solid ${isEmail2InRange ? '#2563eb' : (email2Count > 0 ? '#fbbf24' : '#cbd5e1')}`,
                    outline: 'none',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    backgroundColor: '#ffffff'
                  }}
                />

                {/* Progress bar */}
                <div style={{ width: '100%', height: '5px', backgroundColor: '#e2e8f0', borderRadius: '3px', marginTop: '0.5rem', overflow: 'hidden' }}>
                  <div style={{ 
                    height: '100%', 
                    width: `${Math.min(100, (email2Count / 150) * 100)}%`, 
                    backgroundColor: isEmail2InRange ? '#2563eb' : (email2Count > 165 ? '#f59e0b' : '#38bdf8'),
                    transition: 'width 0.3s'
                  }} />
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 2: COMMON TEMPLATES */}
      {/* ======================================================== */}
      {activeTab === 'templates' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Informal Email Template */}
          <div className="card" style={{ borderLeft: '4px solid #10b981' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div>
                <h2 style={{ margin: 0, fontSize: '1.2rem', color: '#065f46', fontWeight: 800 }}>
                  {part4CommonTemplates.informal.title}
                </h2>
                <div style={{ fontSize: '0.85rem', color: '#047857', marginTop: '0.2rem' }}>
                  {part4CommonTemplates.informal.target} • {part4CommonTemplates.informal.tone}
                </div>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(part4CommonTemplates.informal.templateText, 'all_informal')}
                style={{
                  backgroundColor: '#d1fae5',
                  color: '#065f46',
                  border: '1px solid #a7f3d0',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
              >
                {copiedKey === 'all_informal' ? <Check size={14} color="#16a34a" /> : <Copy size={14} />}
                {copiedKey === 'all_informal' ? 'Đã sao chép' : 'Sao chép khung'}
              </button>
            </div>

            <pre style={{
              backgroundColor: '#f8fafc',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              fontSize: '0.95rem',
              lineHeight: '1.8',
              whiteSpace: 'pre-wrap',
              fontFamily: 'inherit',
              color: '#0f172a'
            }}>
              {renderHighlightedText(part4CommonTemplates.informal.templateText)}
            </pre>
          </div>

          {/* Formal Email Template */}
          <div className="card" style={{ borderLeft: '4px solid #2563eb' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div>
                <h2 style={{ margin: 0, fontSize: '1.2rem', color: '#1e3a8a', fontWeight: 800 }}>
                  {part4CommonTemplates.formal.title}
                </h2>
                <div style={{ fontSize: '0.85rem', color: '#1d4ed8', marginTop: '0.2rem' }}>
                  {part4CommonTemplates.formal.target} • {part4CommonTemplates.formal.tone}
                </div>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(part4CommonTemplates.formal.templateText, 'all_formal')}
                style={{
                  backgroundColor: '#dbeafe',
                  color: '#1e40af',
                  border: '1px solid #bfdbfe',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
              >
                {copiedKey === 'all_formal' ? <Check size={14} color="#16a34a" /> : <Copy size={14} />}
                {copiedKey === 'all_formal' ? 'Đã sao chép' : 'Sao chép khung'}
              </button>
            </div>

            <pre style={{
              backgroundColor: '#f8fafc',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              fontSize: '0.95rem',
              lineHeight: '1.8',
              whiteSpace: 'pre-wrap',
              fontFamily: 'inherit',
              color: '#0f172a'
            }}>
              {renderHighlightedText(part4CommonTemplates.formal.templateText)}
            </pre>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 3: STYLE COMPARISON */}
      {/* ======================================================== */}
      {activeTab === 'style-guide' && (
        <div className="card">
          <h2 style={{ margin: '0 0 1rem 0', color: '#0f172a', fontSize: '1.25rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={20} color="#0d9488" />
            Bảng so sánh phong cách: Email thân mật vs Email trang trọng
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#f1f5f9', borderBottom: '2px solid #cbd5e1' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left', width: '22%', color: '#334155' }}>Tiêu chí</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', width: '39%', color: '#065f46', backgroundColor: '#ecfdf5' }}>
                    Email 1: Thân mật (Bạn bè)
                  </th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', width: '39%', color: '#1e3a8a', backgroundColor: '#eff6ff' }}>
                    Email 2: Trang trọng (Quản lý)
                  </th>
                </tr>
              </thead>
              <tbody>
                {part4CommonTemplates.styleComparison.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '0.75rem', fontWeight: 700, color: '#1e293b' }}>{row.criterion}</td>
                    <td style={{ padding: '0.75rem', color: '#047857', backgroundColor: '#f0fdf4' }}>{row.informal}</td>
                    <td style={{ padding: '0.75rem', color: '#1d4ed8', backgroundColor: '#f8fafc' }}>{row.formal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Part4;
'''

with open("src/pages/Part4.jsx", "w", encoding="utf-8") as f:
    f.write(code)

print("Updated src/pages/Part4.jsx successfully!")
