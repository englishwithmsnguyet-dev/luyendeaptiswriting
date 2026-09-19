import React, { useState, useEffect } from 'react';
import { part4Data, part4CommonTemplates } from '../data/part4Data';
import { saveClubHistory, clearClubHistory, getClubSavedTime, getSafeJSON } from '../utils/historyManager';
import PracticeActionBar from '../components/PracticeActionBar';
import { 
  ChevronDown, Mail, User, ShieldCheck, Eye, EyeOff, BookOpen, 
  Sparkles, CheckCircle2, AlertCircle, Download, Save, Copy, 
  ArrowRight, Check, AlertTriangle, HelpCircle, Columns, Maximize2 
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

const Part4 = () => {
  const clubNames = Object.keys(part4Data).sort((a, b) => a.localeCompare(b));
  const [selectedClub, setSelectedClub] = useState(clubNames[0] || 'Walking club');
  const [clubData, setClubData] = useState(part4Data[selectedClub] || part4Data['Walking club']);
  
  const [answers, setAnswers] = useState({ email1: '', email2: '' });
  const [completedClubs, setCompletedClubs] = useState([]);
  const [lastSavedTime, setLastSavedTime] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Active top tab: 'practice' | 'templates' | 'style-guide'
  const [activeTab, setActiveTab] = useState('practice');

  // Workspace subview: 'email1' | 'email2' | 'both'
  const [workspaceMode, setWorkspaceMode] = useState('both');

  // Toggles for helpers
  const [showNoticeVi, setShowNoticeVi] = useState(false);
  
  const [showEmail1Template, setShowEmail1Template] = useState(true);
  const [showEmail1Vocab, setShowEmail1Vocab] = useState(false);
  const [showEmail1Sample, setShowEmail1Sample] = useState(false);

  const [showEmail2Template, setShowEmail2Template] = useState(true);
  const [showEmail2Vocab, setShowEmail2Vocab] = useState(false);
  const [showEmail2Sample, setShowEmail2Sample] = useState(false);

  // Copied toast state
  const [copiedKey, setCopiedKey] = useState(null);

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
    
    // Auto-save to localStorage to prevent lost input on refresh
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

    // If both emails have answers, mark club as completed
    if (count1 > 20 && count2 > 50) {
      const completed = getSafeJSON('aptis_p4_completed', []);
      if (!completed.includes(selectedClub)) {
        completed.push(selectedClub);
        localStorage.setItem('aptis_p4_completed', JSON.stringify(completed));
        window.dispatchEvent(new Event('progressUpdate'));
      }
    }

    showToast(`Đã lưu bài làm Part 4 CLB "${selectedClub}" thành công! (${time})`, 'success');
    return time;
  };

  const handleClearCurrentClub = () => {
    clearClubHistory(4, selectedClub);
    setAnswers({ email1: '', email2: '' });
    setLastSavedTime(null);
    showToast(`Đã xoá bài làm của CLB "${selectedClub}". Bạn có thể làm lại từ đầu!`, 'warning');
  };

  const insertTemplateToEditor = (emailKey, templateText) => {
    if (answers[emailKey] && answers[emailKey].trim() !== '') {
      if (!window.confirm('Ô viết bài đã có nội dung. Bạn có muốn dán khung sườn mẫu đè lên không?')) {
        return;
      }
    }
    handleAnswerChange(emailKey, templateText);
    showToast(`Đã dán khung sườn vào ô làm bài! Bạn hãy điền các thông tin trong ngoặc vuông [ ... ] nhé.`, 'success');
  };

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    showToast('Đã sao chép vào bộ nhớ tạm!', 'success');
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const insertPhrase = (emailKey, phrase) => {
    const current = answers[emailKey] || '';
    const updated = current ? `${current} ${phrase}` : phrase;
    handleAnswerChange(emailKey, updated);
    showToast(`Đã thêm cụm từ: "${phrase}" vào bài viết!`, 'success');
  };

  // Check for contractions in Email 2 (Formal warning)
  const checkForContractions = (text) => {
    if (!text) return [];
    const contractions = ["don't", "can't", "won't", "it's", "i'm", "i've", "we're", "they're", "didn't", "shouldn't", "couldn't", "wasn't", "aren't"];
    const found = [];
    const lower = text.toLowerCase();
    contractions.forEach(c => {
      if (lower.includes(c)) found.push(c);
    });
    return found;
  };

  const email1Count = getWordCount(answers.email1);
  const isEmail1InRange = email1Count >= 45 && email1Count <= 65;
  const isEmail1TooShort = email1Count > 0 && email1Count < 45;
  const isEmail1TooLong = email1Count > 65;

  const email2Count = getWordCount(answers.email2);
  const isEmail2InRange = email2Count >= 120 && email2Count <= 165;
  const isEmail2TooShort = email2Count > 0 && email2Count < 120;
  const isEmail2TooLong = email2Count > 165;

  const email2Contractions = checkForContractions(answers.email2);

  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', paddingBottom: '3rem' }}>
      {/* Toast Notification */}
      {toastMessage && (
        <div 
          style={{
            position: 'fixed',
            top: '80px',
            right: '25px',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.85rem 1.35rem',
            backgroundColor: toastMessage.type === 'success' ? '#065f46' : '#92400e',
            color: '#ffffff',
            borderRadius: '10px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)',
            fontSize: '0.95rem',
            fontWeight: '600',
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          {toastMessage.type === 'success' ? <CheckCircle2 size={20} color="#34d399" /> : <AlertCircle size={20} color="#fbbf24" />}
          <span>{toastMessage.text}</span>
        </div>
      )}

      {/* Main Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '1rem', 
        flexWrap: 'wrap', 
        gap: '1rem',
        paddingBottom: '0.75rem',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
            <span style={{ 
              backgroundColor: '#dbeafe', 
              color: '#1e40af', 
              fontSize: '0.75rem', 
              fontWeight: 700, 
              padding: '0.2rem 0.6rem', 
              borderRadius: '20px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              APTIS Writing Master
            </span>
            <span style={{ color: '#64748b', fontSize: '0.85rem' }}>• Thời gian gợi ý: 30 phút</span>
          </div>
          <h1 className="page-title" style={{ margin: 0, fontSize: '1.75rem', color: '#0f172a' }}>
            Writing Part 04: Viết 2 Email
          </h1>
          <p style={{ color: '#64748b', fontSize: '0.92rem', margin: '0.25rem 0 0 0' }}>
            Email 1 gửi bạn thân (~50 từ, thân mật) & Email 2 gửi Quản lý CLB (120 - 150 từ, trang trọng chuẩn B2-C1).
          </p>
        </div>
        
        {/* Club Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <label style={{ fontSize: '0.88rem', fontWeight: 600, color: '#475569' }}>Chọn đề luyện tập:</label>
          <div style={{ position: 'relative', minWidth: '220px' }}>
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
                fontSize: '0.95rem',
                color: '#0f172a',
                fontWeight: '600',
                cursor: 'pointer',
                outline: 'none',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
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
            padding: '0.7rem 1.4rem',
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
            padding: '0.7rem 1.4rem',
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
          📖 Khung sườn chi tiết & Highlight chỗ điền
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('style-guide')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.7rem 1.4rem',
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
          ⚖️ So sánh Phong cách: Thân mật vs Trang trọng
        </button>
      </div>

      {/* ======================================================== */}
      {/* TAB 1: WORKSPACE / PRACTICE */}
      {/* ======================================================== */}
      {activeTab === 'practice' && (
        <div>
          {/* Official Notice Card (Designed like an email notification) */}
          <div style={{ 
            backgroundColor: '#ffffff', 
            borderRadius: '12px', 
            border: '1px solid #cbd5e1', 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', 
            marginBottom: '1.5rem', 
            overflow: 'hidden' 
          }}>
            {/* Notice Header Bar */}
            <div style={{ 
              backgroundColor: '#0f172a', 
              color: '#ffffff', 
              padding: '0.75rem 1.25rem', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={18} color="#38bdf8" />
                <span style={{ fontWeight: 700, fontSize: '0.95rem', letterSpacing: '0.3px' }}>
                  THÔNG BÁO TỪ CÂU LẠC BỘ ({clubData.title.toUpperCase()})
                </span>
                {clubData.badge && (
                  <span style={{ backgroundColor: '#1e293b', color: '#facc15', fontSize: '0.75rem', padding: '0.15rem 0.55rem', borderRadius: '12px', border: '1px solid #facc15' }}>
                    {clubData.badge}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setShowNoticeVi(!showNoticeVi)}
                style={{
                  backgroundColor: showNoticeVi ? '#38bdf8' : 'rgba(255,255,255,0.12)',
                  color: showNoticeVi ? '#0f172a' : '#ffffff',
                  border: '1px solid rgba(255,255,255,0.3)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.2s'
                }}
              >
                {showNoticeVi ? <EyeOff size={14} /> : <Eye size={14} />}
                {showNoticeVi ? 'Ẩn bản dịch tiếng Việt' : 'Xem bản dịch tiếng Việt'}
              </button>
            </div>

            {/* Notice Body */}
            <div style={{ padding: '1.25rem 1.5rem', backgroundColor: '#f8fafc' }}>
              <div style={{ 
                fontFamily: 'system-ui, -apple-system, sans-serif', 
                fontSize: '1.02rem', 
                lineHeight: '1.65', 
                color: '#1e293b', 
                whiteSpace: 'pre-line',
                fontWeight: '500' 
              }}>
                {clubData.notice}
              </div>

              {showNoticeVi && (
                <div style={{ 
                  marginTop: '1rem', 
                  padding: '0.85rem 1.15rem', 
                  backgroundColor: '#ecfdf5', 
                  borderLeft: '4px solid #10b981', 
                  borderRadius: '6px', 
                  color: '#065f46', 
                  fontSize: '0.92rem', 
                  lineHeight: '1.6',
                  whiteSpace: 'pre-line' 
                }}>
                  <strong style={{ display: 'block', marginBottom: '0.25rem', color: '#047857' }}>
                    🇻🇳 Bản dịch tiếng Việt:
                  </strong>
                  {clubData.noticeVi}
                </div>
              )}

              {/* Prompt Analysis Pill Box */}
              {clubData.promptAnalysis && (
                <div style={{ 
                  marginTop: '1rem', 
                  padding: '0.85rem 1rem', 
                  backgroundColor: '#eff6ff', 
                  borderRadius: '8px', 
                  border: '1px solid #bfdbfe',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem'
                }}>
                  <div style={{ fontSize: '0.85rem', color: '#1e40af', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <HelpCircle size={15} /> Phân tích đề bài nhanh:
                  </div>
                  <div style={{ fontSize: '0.88rem', color: '#334155' }}>
                    <strong style={{ color: '#1d4ed8' }}>📌 Chủ đề chính:</strong> {clubData.promptAnalysis.topic}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#475569', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <span>✉️ <strong>Task 1:</strong> {clubData.promptAnalysis.task1}</span>
                    <span>🏢 <strong>Task 2:</strong> {clubData.promptAnalysis.task2}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Workspace Layout Switcher (Side-by-side or Single View) */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '1rem',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              <button
                type="button"
                onClick={() => setWorkspaceMode('both')}
                style={{
                  padding: '0.45rem 0.9rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: workspaceMode === 'both' ? '#0f172a' : '#ffffff',
                  color: workspaceMode === 'both' ? '#ffffff' : '#475569',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <Columns size={15} /> Xem cả 2 Email
              </button>
              <button
                type="button"
                onClick={() => setWorkspaceMode('email1')}
                style={{
                  padding: '0.45rem 0.9rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: workspaceMode === 'email1' ? '#059669' : '#ffffff',
                  color: workspaceMode === 'email1' ? '#ffffff' : '#475569',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <User size={15} /> Chỉ Email 1 (Bạn bè - 50 từ)
              </button>
              <button
                type="button"
                onClick={() => setWorkspaceMode('email2')}
                style={{
                  padding: '0.45rem 0.9rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: workspaceMode === 'email2' ? '#2563eb' : '#ffffff',
                  color: workspaceMode === 'email2' ? '#ffffff' : '#475569',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <ShieldCheck size={15} /> Chỉ Email 2 (Quản lý - 120-150 từ)
              </button>
            </div>

            <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
              💡 Mẹo: Bấm <strong>"Dán khung vào ô bài làm"</strong> để có sẵn sườn chuẩn và chỉ cần điền từ!
            </div>
          </div>

          {/* Grid of Tasks */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: workspaceMode === 'both' ? 'repeat(auto-fit, minmax(520px, 1fr))' : '1fr', 
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            {/* ======================================================== */}
            {/* TASK 1: EMAIL 1 TO FRIEND (INFORMAL) */}
            {/* ======================================================== */}
            {(workspaceMode === 'both' || workspaceMode === 'email1') && (
              <div style={{ 
                backgroundColor: '#ffffff', 
                borderRadius: '12px', 
                border: '2px solid #10b981', 
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', 
                display: 'flex', 
                flexDirection: 'column' 
              }}>
                {/* Header */}
                <div style={{ 
                  backgroundColor: '#ecfdf5', 
                  padding: '1rem 1.25rem', 
                  borderBottom: '2px solid #a7f3d0',
                  borderRadius: '10px 10px 0 0'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <User size={20} color="#059669" />
                        <h3 style={{ margin: 0, color: '#065f46', fontSize: '1.15rem', fontWeight: 800 }}>
                          {clubData.email1.title}
                        </h3>
                        <span style={{ fontSize: '0.75rem', backgroundColor: '#d1fae5', color: '#065f46', padding: '0.2rem 0.6rem', borderRadius: '12px', fontWeight: 700 }}>
                          Mục tiêu: 45 - 55 từ
                        </span>
                      </div>
                      <p style={{ margin: '0.35rem 0 0 0', color: '#047857', fontSize: '0.88rem' }}>
                        {clubData.email1.instruction}
                      </p>
                    </div>

                    {/* Word Counter */}
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ 
                        fontSize: '0.92rem', 
                        fontWeight: 800, 
                        color: isEmail1InRange ? '#059669' : (email1Count === 0 ? '#64748b' : '#d97706') 
                      }}>
                        {email1Count} từ
                      </div>
                      <div style={{ 
                        fontSize: '0.75rem', 
                        fontWeight: 600,
                        color: isEmail1InRange ? '#059669' : (email1Count === 0 ? '#64748b' : '#d97706') 
                      }}>
                        {isEmail1InRange ? '✅ Chuẩn số từ' : (isEmail1TooShort ? '⚠️ Quá ngắn (<45 từ)' : (isEmail1TooLong ? '⚠️ Hơi dài (>65 từ)' : 'Cần: 45-65 từ'))}
                      </div>
                    </div>
                  </div>

                  {/* Word Count Progress Bar */}
                  <div style={{ width: '100%', height: '6px', backgroundColor: '#e2e8f0', borderRadius: '3px', marginTop: '0.65rem', overflow: 'hidden' }}>
                    <div style={{ 
                      height: '100%', 
                      width: `${Math.min(100, (email1Count / 55) * 100)}%`, 
                      backgroundColor: isEmail1InRange ? '#10b981' : (email1Count > 65 ? '#f59e0b' : '#38bdf8'),
                      transition: 'width 0.3s'
                    }} />
                  </div>
                </div>

                {/* Editor & Content Area */}
                <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  {/* Quick Action Bar for Email 1 */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#64748b' }}>
                      Ô làm bài viết Email 1:
                    </span>
                    <button
                      type="button"
                      onClick={() => insertTemplateToEditor('email1', clubData.email1.template)}
                      style={{
                        padding: '0.35rem 0.75rem',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        backgroundColor: '#d1fae5',
                        color: '#065f46',
                        border: '1px solid #a7f3d0',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                      title="Chèn khung câu có sẵn vào ô viết để chỉnh sửa"
                    >
                      <Copy size={13} /> Dán khung sườn mẫu vào ô viết
                    </button>
                  </div>

                  {/* Textarea */}
                  <textarea
                    value={answers.email1}
                    onChange={(e) => handleAnswerChange('email1', e.target.value)}
                    placeholder="Viết email thân mật gửi bạn tại đây... (Ví dụ: Dear Kim, How's it going? ...)"
                    rows={9}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontSize: '0.98rem',
                      lineHeight: '1.6',
                      borderRadius: '8px',
                      border: `2px solid ${isEmail1InRange ? '#10b981' : (email1Count > 0 ? '#fbbf24' : '#cbd5e1')}`,
                      outline: 'none',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                      backgroundColor: '#ffffff',
                      marginBottom: '1rem'
                    }}
                  />

                  {/* Helper Toggles */}
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                    <button
                      type="button"
                      onClick={() => setShowEmail1Template(!showEmail1Template)}
                      style={{
                        fontSize: '0.82rem',
                        padding: '0.4rem 0.8rem',
                        backgroundColor: showEmail1Template ? '#ecfdf5' : '#f8fafc',
                        color: showEmail1Template ? '#065f46' : '#64748b',
                        border: `1px solid ${showEmail1Template ? '#a7f3d0' : '#e2e8f0'}`,
                        borderRadius: '6px',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      {showEmail1Template ? '▲ Ẩn Khung sườn' : '💡 Xem Khung sườn nổi bật'}
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowEmail1Vocab(!showEmail1Vocab)}
                      style={{
                        fontSize: '0.82rem',
                        padding: '0.4rem 0.8rem',
                        backgroundColor: showEmail1Vocab ? '#ecfdf5' : '#f8fafc',
                        color: showEmail1Vocab ? '#065f46' : '#64748b',
                        border: `1px solid ${showEmail1Vocab ? '#a7f3d0' : '#e2e8f0'}`,
                        borderRadius: '6px',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      {showEmail1Vocab ? '▲ Ẩn Gợi ý từ vựng' : '✨ Gợi ý từ vựng & Ý tưởng'}
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowEmail1Sample(!showEmail1Sample)}
                      style={{
                        fontSize: '0.82rem',
                        padding: '0.4rem 0.8rem',
                        backgroundColor: showEmail1Sample ? '#ecfdf5' : '#f8fafc',
                        color: showEmail1Sample ? '#065f46' : '#64748b',
                        border: `1px solid ${showEmail1Sample ? '#a7f3d0' : '#e2e8f0'}`,
                        borderRadius: '6px',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      {showEmail1Sample ? '▲ Ẩn Bài mẫu' : '📝 Bài mẫu chuẩn + Dịch nghĩa'}
                    </button>
                  </div>

                  {/* Visual Highlighted Template Box */}
                  {showEmail1Template && (
                    <div style={{ 
                      backgroundColor: '#f0fdf4', 
                      padding: '1rem', 
                      borderRadius: '8px', 
                      border: '1px solid #bbf7d0', 
                      marginBottom: '1rem' 
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                        <div style={{ fontWeight: 800, color: '#166534', fontSize: '0.88rem' }}>
                          🎯 KHUNG SƯỜN EMAIL 1 (CÁC CHỖ CẦN THAY THẾ ĐƯỢC HIGHLIGHT VÀNG):
                        </div>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(clubData.email1.template, 'tmpl1')}
                          style={{ background: 'none', border: 'none', color: '#15803d', fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                        >
                          {copiedKey === 'tmpl1' ? <Check size={14} color="#16a34a" /> : <Copy size={14} />}
                          {copiedKey === 'tmpl1' ? 'Đã chép!' : 'Chép text'}
                        </button>
                      </div>

                      {/* Dynamic Highlighted Template for current club */}
                      <div style={{ 
                        backgroundColor: '#ffffff', 
                        padding: '1rem 1.2rem', 
                        borderRadius: '8px', 
                        border: '1px solid #dcfce7',
                        fontSize: '0.96rem',
                        lineHeight: '1.85',
                        whiteSpace: 'pre-wrap',
                        color: '#0f172a',
                        fontFamily: 'inherit'
                      }}>
                        {renderHighlightedText(clubData.email1.template)}
                      </div>

                      <div style={{ marginTop: '0.65rem', padding: '0.5rem 0.75rem', backgroundColor: '#ffffff', borderRadius: '6px', border: '1px dashed #10b981', fontSize: '0.82rem', color: '#047857', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span>💡</span>
                        <span><strong>Hướng dẫn:</strong> Toàn bộ các ô màu vàng <strong>✏️ [ ... ]</strong> là phần bạn cần thay thế thông tin từ đề bài!</span>
                      </div>
                    </div>
                  )}

                  {/* Vocabulary & Brainstorming Bank */}
                  {showEmail1Vocab && (
                    <div style={{ 
                      backgroundColor: '#ffffff', 
                      padding: '1.2rem', 
                      borderRadius: '8px', 
                      border: '1px solid #a7f3d0', 
                      marginBottom: '1rem',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.03)'
                    }}>
                      <div style={{ fontWeight: 800, color: '#065f46', marginBottom: '0.75rem', fontSize: '0.92rem' }}>
                        ✨ NGÂN HÀNG CỤM TỪ ĂN ĐIỂM CHO EMAIL 1 (BẤM VÀO ĐỂ CHÈN VÀO BÀI):
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                        {clubData.email1.vocabCategories?.map((cat, idx) => (
                          <div key={idx} style={{ backgroundColor: '#f8fafc', padding: '0.75rem', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                            <div style={{ fontWeight: 700, color: '#1e293b', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                              {cat.name}
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                              {cat.items.map((item, i) => (
                                <button
                                  key={i}
                                  type="button"
                                  onClick={() => insertPhrase('email1', item.en)}
                                  style={{
                                    backgroundColor: '#ffffff',
                                    border: '1px solid #cbd5e1',
                                    borderRadius: '6px',
                                    padding: '0.35rem 0.65rem',
                                    fontSize: '0.82rem',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    transition: 'all 0.15s'
                                  }}
                                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#10b981'}
                                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#cbd5e1'}
                                  title={`Bấm để chèn: "${item.en}" - ${item.vi}`}
                                >
                                  <strong style={{ color: '#047857' }}>{item.en}</strong>: <span style={{ color: '#64748b' }}>{item.vi}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Sample Answer Box */}
                  {showEmail1Sample && (
                    <div style={{ 
                      backgroundColor: '#ffffff', 
                      padding: '1.25rem', 
                      borderRadius: '8px', 
                      border: '2px solid #10b981', 
                      marginBottom: '1rem',
                      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                        <div style={{ fontWeight: 800, color: '#065f46', fontSize: '0.95rem' }}>
                          📝 {clubData.email1.samples[0].title} ({clubData.email1.samples[0].wordCount} từ):
                        </div>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(clubData.email1.samples[0].en, 'sample1')}
                          style={{ background: 'none', border: 'none', color: '#059669', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                        >
                          {copiedKey === 'sample1' ? <Check size={14} color="#16a34a" /> : <Copy size={14} />}
                          {copiedKey === 'sample1' ? 'Đã chép bài mẫu!' : 'Chép bài mẫu'}
                        </button>
                      </div>

                      <pre style={{ 
                        whiteSpace: 'pre-wrap', 
                        fontFamily: 'inherit', 
                        fontSize: '0.95rem', 
                        lineHeight: '1.65', 
                        color: '#0f172a',
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
                        padding: '0.85rem', 
                        borderRadius: '6px', 
                        borderLeft: '4px solid #10b981', 
                        lineHeight: '1.6', 
                        whiteSpace: 'pre-line' 
                      }}>
                        <strong style={{ display: 'block', marginBottom: '0.25rem' }}>🇻🇳 Bản dịch đối chiếu:</strong>
                        {clubData.email1.samples[0].vi}
                      </div>

                      {/* Sentence Analysis */}
                      {clubData.email1.samples[0].analysis && (
                        <div style={{ marginTop: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                          <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#047857' }}>
                            🔍 Phân tích cấu trúc câu chuẩn điểm:
                          </div>
                          {clubData.email1.samples[0].analysis.map((item, idx) => (
                            <div key={idx} style={{ fontSize: '0.82rem', color: '#334155', backgroundColor: '#f1f5f9', padding: '0.35rem 0.6rem', borderRadius: '4px' }}>
                              <strong style={{ color: '#059669' }}>{item.label}:</strong> {item.text}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* TASK 2: EMAIL 2 TO CLUB MANAGER (FORMAL) */}
            {/* ======================================================== */}
            {(workspaceMode === 'both' || workspaceMode === 'email2') && (
              <div style={{ 
                backgroundColor: '#ffffff', 
                borderRadius: '12px', 
                border: '2px solid #2563eb', 
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', 
                display: 'flex', 
                flexDirection: 'column' 
              }}>
                {/* Header */}
                <div style={{ 
                  backgroundColor: '#eff6ff', 
                  padding: '1rem 1.25rem', 
                  borderBottom: '2px solid #bfdbfe',
                  borderRadius: '10px 10px 0 0'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <ShieldCheck size={20} color="#1d4ed8" />
                        <h3 style={{ margin: 0, color: '#1e3a8a', fontSize: '1.15rem', fontWeight: 800 }}>
                          {clubData.email2.title}
                        </h3>
                        <span style={{ fontSize: '0.75rem', backgroundColor: '#dbeafe', color: '#1e40af', padding: '0.2rem 0.6rem', borderRadius: '12px', fontWeight: 700 }}>
                          Mục tiêu: 120 - 150 từ
                        </span>
                      </div>
                      <p style={{ margin: '0.35rem 0 0 0', color: '#1d4ed8', fontSize: '0.88rem' }}>
                        {clubData.email2.instruction}
                      </p>
                    </div>

                    {/* Word Counter */}
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ 
                        fontSize: '0.92rem', 
                        fontWeight: 800, 
                        color: isEmail2InRange ? '#2563eb' : (email2Count === 0 ? '#64748b' : '#d97706') 
                      }}>
                        {email2Count} từ
                      </div>
                      <div style={{ 
                        fontSize: '0.75rem', 
                        fontWeight: 600,
                        color: isEmail2InRange ? '#2563eb' : (email2Count === 0 ? '#64748b' : '#d97706') 
                      }}>
                        {isEmail2InRange ? '✅ Chuẩn số từ' : (isEmail2TooShort ? '⚠️ Quá ngắn (<120 từ)' : (isEmail2TooLong ? '⚠️ Hơi dài (>165 từ)' : 'Cần: 120-165 từ'))}
                      </div>
                    </div>
                  </div>

                  {/* Word Count Progress Bar */}
                  <div style={{ width: '100%', height: '6px', backgroundColor: '#e2e8f0', borderRadius: '3px', marginTop: '0.65rem', overflow: 'hidden' }}>
                    <div style={{ 
                      height: '100%', 
                      width: `${Math.min(100, (email2Count / 150) * 100)}%`, 
                      backgroundColor: isEmail2InRange ? '#2563eb' : (email2Count > 165 ? '#f59e0b' : '#38bdf8'),
                      transition: 'width 0.3s'
                    }} />
                  </div>

                  {/* Style Guard Warning for contractions in formal email */}
                  {email2Contractions.length > 0 && (
                    <div style={{ 
                      marginTop: '0.6rem', 
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
                        <strong>Cảnh báo thư trang trọng:</strong> Bạn đang dùng từ viết tắt ({email2Contractions.join(', ')}). Hãy đổi sang dạng đầy đủ để không bị trừ điểm phong cách!
                      </span>
                    </div>
                  )}
                </div>

                {/* Editor & Content Area */}
                <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  {/* Quick Action Bar for Email 2 */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#64748b' }}>
                      Ô làm bài viết Email 2:
                    </span>
                    <button
                      type="button"
                      onClick={() => insertTemplateToEditor('email2', clubData.email2.template)}
                      style={{
                        padding: '0.35rem 0.75rem',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        backgroundColor: '#dbeafe',
                        color: '#1e40af',
                        border: '1px solid #bfdbfe',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                      title="Chèn khung câu có sẵn vào ô viết để chỉnh sửa"
                    >
                      <Copy size={13} /> Dán khung sườn mẫu vào ô viết
                    </button>
                  </div>

                  {/* Textarea */}
                  <textarea
                    value={answers.email2}
                    onChange={(e) => handleAnswerChange('email2', e.target.value)}
                    placeholder="Viết email trang trọng gửi Quản lý CLB tại đây... (Dear Club Manager, My name is ..., and I have been a member ...)"
                    rows={12}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontSize: '0.98rem',
                      lineHeight: '1.6',
                      borderRadius: '8px',
                      border: `2px solid ${isEmail2InRange ? '#2563eb' : (email2Count > 0 ? '#fbbf24' : '#cbd5e1')}`,
                      outline: 'none',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                      backgroundColor: '#ffffff',
                      marginBottom: '1rem'
                    }}
                  />

                  {/* Helper Toggles */}
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                    <button
                      type="button"
                      onClick={() => setShowEmail2Template(!showEmail2Template)}
                      style={{
                        fontSize: '0.82rem',
                        padding: '0.4rem 0.8rem',
                        backgroundColor: showEmail2Template ? '#eff6ff' : '#f8fafc',
                        color: showEmail2Template ? '#1e40af' : '#64748b',
                        border: `1px solid ${showEmail2Template ? '#bfdbfe' : '#e2e8f0'}`,
                        borderRadius: '6px',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      {showEmail2Template ? '▲ Ẩn Khung sườn' : '💡 Xem Khung sườn nổi bật'}
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowEmail2Vocab(!showEmail2Vocab)}
                      style={{
                        fontSize: '0.82rem',
                        padding: '0.4rem 0.8rem',
                        backgroundColor: showEmail2Vocab ? '#eff6ff' : '#f8fafc',
                        color: showEmail2Vocab ? '#1e40af' : '#64748b',
                        border: `1px solid ${showEmail2Vocab ? '#bfdbfe' : '#e2e8f0'}`,
                        borderRadius: '6px',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      {showEmail2Vocab ? '▲ Ẩn Gợi ý từ vựng' : '✨ Gợi ý từ vựng & Ý tưởng'}
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowEmail2Sample(!showEmail2Sample)}
                      style={{
                        fontSize: '0.82rem',
                        padding: '0.4rem 0.8rem',
                        backgroundColor: showEmail2Sample ? '#eff6ff' : '#f8fafc',
                        color: showEmail2Sample ? '#1e40af' : '#64748b',
                        border: `1px solid ${showEmail2Sample ? '#bfdbfe' : '#e2e8f0'}`,
                        borderRadius: '6px',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      {showEmail2Sample ? '▲ Ẩn Bài mẫu' : '📝 Bài mẫu chuẩn + Dịch nghĩa'}
                    </button>
                  </div>

                  {/* Visual Highlighted Template Box */}
                  {showEmail2Template && (
                    <div style={{ 
                      backgroundColor: '#eff6ff', 
                      padding: '1rem', 
                      borderRadius: '8px', 
                      border: '1px solid #bfdbfe', 
                      marginBottom: '1rem' 
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                        <div style={{ fontWeight: 800, color: '#1e40af', fontSize: '0.88rem' }}>
                          🎯 KHUNG SƯỜN EMAIL 2 (CÁC CHỖ CẦN THAY THẾ ĐƯỢC HIGHLIGHT VÀNG):
                        </div>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(clubData.email2.template, 'tmpl2')}
                          style={{ background: 'none', border: 'none', color: '#1e40af', fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                        >
                          {copiedKey === 'tmpl2' ? <Check size={14} color="#16a34a" /> : <Copy size={14} />}
                          {copiedKey === 'tmpl2' ? 'Đã chép!' : 'Chép text'}
                        </button>
                      </div>

                      {/* Dynamic Highlighted Template for current club */}
                      <div style={{ 
                        backgroundColor: '#ffffff', 
                        padding: '1rem 1.2rem', 
                        borderRadius: '8px', 
                        border: '1px solid #dbeafe',
                        fontSize: '0.96rem',
                        lineHeight: '1.85',
                        whiteSpace: 'pre-wrap',
                        color: '#0f172a',
                        fontFamily: 'inherit'
                      }}>
                        {renderHighlightedText(clubData.email2.template)}
                      </div>

                      <div style={{ marginTop: '0.65rem', padding: '0.5rem 0.75rem', backgroundColor: '#ffffff', borderRadius: '6px', border: '1px dashed #2563eb', fontSize: '0.82rem', color: '#1e40af', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span>💡</span>
                        <span><strong>Hướng dẫn:</strong> Toàn bộ các ô màu vàng <strong>✏️ [ ... ]</strong> là phần bạn cần thay thế thông tin từ đề bài!</span>
                      </div>
                    </div>
                  )}

                  {/* Vocabulary & Brainstorming Bank */}
                  {showEmail2Vocab && (
                    <div style={{ 
                      backgroundColor: '#ffffff', 
                      padding: '1.2rem', 
                      borderRadius: '8px', 
                      border: '1px solid #bfdbfe', 
                      marginBottom: '1rem',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.03)'
                    }}>
                      <div style={{ fontWeight: 800, color: '#1e40af', marginBottom: '0.75rem', fontSize: '0.92rem' }}>
                        ✨ NGÂN HÀNG CỤM TỪ HỌC THUẬT B2-C1 CHO EMAIL 2 (BẤM VÀO ĐỂ CHÈN VÀO BÀI):
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                        {clubData.email2.vocabCategories?.map((cat, idx) => (
                          <div key={idx} style={{ backgroundColor: '#f8fafc', padding: '0.75rem', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                            <div style={{ fontWeight: 700, color: '#1e293b', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                              {cat.name}
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                              {cat.items.map((item, i) => (
                                <button
                                  key={i}
                                  type="button"
                                  onClick={() => insertPhrase('email2', item.en)}
                                  style={{
                                    backgroundColor: '#ffffff',
                                    border: '1px solid #cbd5e1',
                                    borderRadius: '6px',
                                    padding: '0.35rem 0.65rem',
                                    fontSize: '0.82rem',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    transition: 'all 0.15s'
                                  }}
                                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#2563eb'}
                                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#cbd5e1'}
                                  title={`Bấm để chèn: "${item.en}" - ${item.vi}`}
                                >
                                  <strong style={{ color: '#1d4ed8' }}>{item.en}</strong>: <span style={{ color: '#64748b' }}>{item.vi}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Sample Answer Box */}
                  {showEmail2Sample && (
                    <div style={{ 
                      backgroundColor: '#ffffff', 
                      padding: '1.25rem', 
                      borderRadius: '8px', 
                      border: '2px solid #2563eb', 
                      marginBottom: '1rem',
                      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                        <div style={{ fontWeight: 800, color: '#1e3a8a', fontSize: '0.95rem' }}>
                          📝 {clubData.email2.samples[0].title} ({clubData.email2.samples[0].wordCount} từ):
                        </div>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(clubData.email2.samples[0].en, 'sample2')}
                          style={{ background: 'none', border: 'none', color: '#1d4ed8', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                        >
                          {copiedKey === 'sample2' ? <Check size={14} color="#16a34a" /> : <Copy size={14} />}
                          {copiedKey === 'sample2' ? 'Đã chép bài mẫu!' : 'Chép bài mẫu'}
                        </button>
                      </div>

                      <pre style={{ 
                        whiteSpace: 'pre-wrap', 
                        fontFamily: 'inherit', 
                        fontSize: '0.95rem', 
                        lineHeight: '1.65', 
                        color: '#0f172a',
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
                        color: '#1e3a8a', 
                        backgroundColor: '#eff6ff', 
                        padding: '0.85rem', 
                        borderRadius: '6px', 
                        borderLeft: '4px solid #2563eb', 
                        lineHeight: '1.6', 
                        whiteSpace: 'pre-line' 
                      }}>
                        <strong style={{ display: 'block', marginBottom: '0.25rem' }}>🇻🇳 Bản dịch đối chiếu:</strong>
                        {clubData.email2.samples[0].vi}
                      </div>

                      {/* Sentence Analysis */}
                      {clubData.email2.samples[0].analysis && (
                        <div style={{ marginTop: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                          <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1e40af' }}>
                            🔍 Phân tích cấu trúc câu chuẩn điểm:
                          </div>
                          {clubData.email2.samples[0].analysis.map((item, idx) => (
                            <div key={idx} style={{ fontSize: '0.82rem', color: '#334155', backgroundColor: '#f1f5f9', padding: '0.35rem 0.6rem', borderRadius: '4px' }}>
                              <strong style={{ color: '#2563eb' }}>{item.label}:</strong> {item.text}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* BOTTOM PROACTIVE ACTION CARD */}
          {/* ======================================================== */}
          <div style={{ 
            backgroundColor: '#ffffff', 
            borderRadius: '16px', 
            border: '2px dashed #94a3b8', 
            padding: '2rem 1.5rem', 
            textAlign: 'center',
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div>
              <h2 style={{ margin: '0 0 0.5rem 0', color: '#0f172a', fontSize: '1.35rem', fontWeight: 800 }}>
                Hoàn thành bài viết Part 04?
              </h2>
              <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem', maxWidth: '600px' }}>
                Bấm <strong>"LƯU BÀI LÀM PART 04"</strong> để hệ thống ghi nhận tiến độ vào lịch sử máy của bạn, sau đó tải file Word (.docx) nộp bài trực tiếp cho cô Nguyet!
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                type="button"
                onClick={handleManualSave}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.85rem 2rem',
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  backgroundColor: '#10b981',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 10px rgba(16, 185, 129, 0.3)',
                  transition: 'all 0.2s'
                }}
              >
                <Save size={20} />
                LƯU BÀI LÀM PART 04
              </button>

              <button
                type="button"
                onClick={() => exportToWord({ clubName: selectedClub, part: 4 })}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.85rem 2rem',
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  backgroundColor: '#2563eb',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 10px rgba(37, 99, 235, 0.3)',
                  transition: 'all 0.2s'
                }}
              >
                <Download size={20} />
                TẢI FILE WORD (.DOCX) NỘP BÀI
              </button>
            </div>

            {lastSavedTime && (
              <div style={{ fontSize: '0.9rem', color: '#059669', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}>
                <CheckCircle2 size={16} />
                Đã lưu thành công vào lịch sử lúc: <strong>{lastSavedTime}</strong>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 2: DETAILED TEMPLATES & INTERACTIVE BREAKDOWN */}
      {/* ======================================================== */}
      {activeTab === 'templates' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Informal Template Card */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '2px solid #10b981', padding: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '2px solid #ecfdf5', paddingBottom: '0.75rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <User size={22} color="#059669" />
                  <h2 style={{ margin: 0, color: '#065f46', fontSize: '1.25rem', fontWeight: 800 }}>
                    {part4CommonTemplates.informal.title}
                  </h2>
                  <span style={{ fontSize: '0.75rem', backgroundColor: '#d1fae5', color: '#065f46', padding: '0.2rem 0.6rem', borderRadius: '12px', fontWeight: 700 }}>
                    {part4CommonTemplates.informal.target}
                  </span>
                </div>
                <p style={{ margin: '0.25rem 0 0 0', color: '#64748b', fontSize: '0.88rem' }}>
                  Phong cách: {part4CommonTemplates.informal.tone}
                </p>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(part4CommonTemplates.informal.templateText, 'full_informal')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#ecfdf5',
                  color: '#065f46',
                  border: '1px solid #a7f3d0',
                  borderRadius: '6px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                {copiedKey === 'full_informal' ? <Check size={16} color="#16a34a" /> : <Copy size={16} />}
                {copiedKey === 'full_informal' ? 'Đã chép toàn bộ!' : 'Sao chép khung mẫu'}
              </button>
            </div>

            {/* Top Explanatory Callout */}
            <div style={{ marginBottom: '1.25rem', padding: '0.85rem 1.15rem', backgroundColor: '#fefce8', border: '1px solid #fde047', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#854d0e', fontSize: '0.9rem' }}>
              <span style={{ fontSize: '1.25rem' }}>💡</span>
              <span><strong>Quy ước màu sắc:</strong> Toàn bộ những ô màu vàng <strong>✏️ [ ... ]</strong> là phần bạn cần thay thế thông tin tương ứng từ đề bài. Các câu chữ còn lại là <strong>khung sườn ngữ pháp cố định</strong> đã được chuẩn hóa để đạt điểm tối đa tiêu chí B2-C1!</span>
            </div>

            {/* 6 Structural Steps */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
              {part4CommonTemplates.informal.structure.map((item) => (
                <div key={item.step} style={{ backgroundColor: '#f8fafc', padding: '0.85rem 1.15rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                    <span style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.9rem' }}>
                      Bước {item.step}: {item.name}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: '#64748b' }}>{item.note}</span>
                  </div>
                  <div style={{ fontFamily: 'inherit', fontSize: '0.95rem', color: '#065f46', fontWeight: 600, lineHeight: '1.6' }}>
                    {renderHighlightedText(item.fixed)}
                  </div>
                </div>
              ))}
            </div>

            {/* Continuous Full Template View */}
            <div style={{ backgroundColor: '#f0fdf4', padding: '1rem', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
              <div style={{ fontWeight: 800, color: '#166534', fontSize: '0.88rem', marginBottom: '0.5rem' }}>
                📄 Toàn văn khung sườn Email 1 (Tổng quan liền mạch):
              </div>
              <div style={{ backgroundColor: '#ffffff', padding: '1rem', borderRadius: '6px', border: '1px solid #dcfce7', fontSize: '0.95rem', lineHeight: '1.85', whiteSpace: 'pre-wrap', color: '#0f172a' }}>
                {renderHighlightedText(part4CommonTemplates.informal.templateText)}
              </div>
            </div>
          </div>

          {/* Formal Template Card */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '2px solid #2563eb', padding: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '2px solid #eff6ff', paddingBottom: '0.75rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={22} color="#1d4ed8" />
                  <h2 style={{ margin: 0, color: '#1e3a8a', fontSize: '1.25rem', fontWeight: 800 }}>
                    {part4CommonTemplates.formal.title}
                  </h2>
                  <span style={{ fontSize: '0.75rem', backgroundColor: '#dbeafe', color: '#1e40af', padding: '0.2rem 0.6rem', borderRadius: '12px', fontWeight: 700 }}>
                    {part4CommonTemplates.formal.target}
                  </span>
                </div>
                <p style={{ margin: '0.25rem 0 0 0', color: '#64748b', fontSize: '0.88rem' }}>
                  Phong cách: {part4CommonTemplates.formal.tone}
                </p>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(part4CommonTemplates.formal.templateText, 'full_formal')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#eff6ff',
                  color: '#1e40af',
                  border: '1px solid #bfdbfe',
                  borderRadius: '6px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                {copiedKey === 'full_formal' ? <Check size={16} color="#16a34a" /> : <Copy size={16} />}
                {copiedKey === 'full_formal' ? 'Đã chép toàn bộ!' : 'Sao chép khung mẫu'}
              </button>
            </div>

            {/* Top Explanatory Callout */}
            <div style={{ marginBottom: '1.25rem', padding: '0.85rem 1.15rem', backgroundColor: '#fefce8', border: '1px solid #fde047', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#854d0e', fontSize: '0.9rem' }}>
              <span style={{ fontSize: '1.25rem' }}>💡</span>
              <span><strong>Quy ước màu sắc:</strong> Toàn bộ những ô màu vàng <strong>✏️ [ ... ]</strong> là phần bạn cần thay thế thông tin tương ứng từ đề bài. Các câu chữ còn lại là <strong>khung sườn ngữ pháp cố định</strong> đã được chuẩn hóa để đạt điểm tối đa tiêu chí B2-C1!</span>
            </div>

            {/* 6 Structural Steps */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
              {part4CommonTemplates.formal.structure.map((item) => (
                <div key={item.step} style={{ backgroundColor: '#f8fafc', padding: '0.85rem 1.15rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                    <span style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.9rem' }}>
                      Bước {item.step}: {item.name}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: '#64748b' }}>{item.note}</span>
                  </div>
                  <div style={{ fontFamily: 'inherit', fontSize: '0.95rem', color: '#1e3a8a', fontWeight: 600, lineHeight: '1.6' }}>
                    {renderHighlightedText(item.fixed)}
                  </div>
                </div>
              ))}
            </div>

            {/* Continuous Full Template View */}
            <div style={{ backgroundColor: '#eff6ff', padding: '1rem', borderRadius: '8px', border: '1px solid #bfdbfe' }}>
              <div style={{ fontWeight: 800, color: '#1e40af', fontSize: '0.88rem', marginBottom: '0.5rem' }}>
                📄 Toàn văn khung sườn Email 2 (Tổng quan liền mạch):
              </div>
              <div style={{ backgroundColor: '#ffffff', padding: '1rem', borderRadius: '6px', border: '1px solid #dbeafe', fontSize: '0.95rem', lineHeight: '1.85', whiteSpace: 'pre-wrap', color: '#0f172a' }}>
                {renderHighlightedText(part4CommonTemplates.formal.templateText)}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 3: STYLE COMPARISON GUIDE (INFORMAL VS FORMAL) */}
      {/* ======================================================== */}
      {activeTab === 'style-guide' && (
        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #cbd5e1', padding: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
          <div style={{ marginBottom: '1.25rem' }}>
            <h2 style={{ margin: '0 0 0.35rem 0', color: '#0f172a', fontSize: '1.3rem', fontWeight: 800 }}>
              Bảng Đối Chiếu Phong Cách: Email Thân Mật vs Email Trang Trọng
            </h2>
            <p style={{ margin: 0, color: '#64748b', fontSize: '0.92rem' }}>
              Trong APTIS Writing Part 4, giám khảo chấm điểm rất gắt gao tiêu chí <strong>Register & Tone (Văn phong phù hợp)</strong>. Hãy đảm bảo bạn không nhầm lẫn giữa 2 email!
            </p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#0f172a', color: '#ffffff', textAlign: 'left' }}>
                  <th style={{ padding: '0.85rem 1rem', width: '22%' }}>Tiêu chí</th>
                  <th style={{ padding: '0.85rem 1rem', width: '39%', backgroundColor: '#065f46' }}>
                    ✉️ Email 1: Thân mật (Informal)
                  </th>
                  <th style={{ padding: '0.85rem 1rem', width: '39%', backgroundColor: '#1e3a8a' }}>
                    🏢 Email 2: Trang trọng (Formal)
                  </th>
                </tr>
              </thead>
              <tbody>
                {part4CommonTemplates.styleComparison.map((row, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                    <td style={{ padding: '0.85rem 1rem', fontWeight: 700, color: '#1e293b' }}>
                      {row.criterion}
                    </td>
                    <td style={{ padding: '0.85rem 1rem', color: '#065f46', lineHeight: '1.5' }}>
                      {row.informal}
                    </td>
                    <td style={{ padding: '0.85rem 1rem', color: '#1e3a8a', lineHeight: '1.5' }}>
                      {row.formal}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Golden Rules Box */}
          <div style={{ marginTop: '1.5rem', padding: '1.25rem', backgroundColor: '#fffbeb', border: '1px solid #fde68a', borderRadius: '8px' }}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#b45309', fontSize: '1rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <AlertTriangle size={18} /> 3 NGUYÊN TẮC VÀNG ĐỂ ĐẠT ĐIỂM TỐI ĐA PART 4:
            </h3>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#92400e', fontSize: '0.9rem', lineHeight: '1.6' }}>
              <li><strong>Không bao giờ bỏ trống ô nào:</strong> Bắt buộc phải viết cả 2 email để được tính điểm đầy đủ cả phần.</li>
              <li><strong>Kiểm soát số từ:</strong> Email 1 chỉ viết khoảng 50 từ (45 - 65 từ). Email 2 viết từ 120 - 150 từ (tối đa 165 từ). Không viết quá dài gây mất thời gian và tăng nguy cơ sai ngữ pháp.</li>
              <li><strong>Email 2 phải có 3 đề xuất rõ ràng:</strong> Luôn dùng liên từ phân đoạn (First, we should... / Second, it would be better to... / Finally, we could...).</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Part4;
