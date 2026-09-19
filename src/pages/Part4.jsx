import React, { useState, useEffect } from 'react';
import { part4Data, part4CommonTemplates } from '../data/part4Data';
import { saveClubHistory, clearClubHistory, getClubSavedTime, getSafeJSON } from '../utils/historyManager';
import PracticeActionBar from '../components/PracticeActionBar';
import { ChevronDown, Mail, User, ShieldCheck, Eye, EyeOff, BookOpen, Sparkles, CheckCircle2, AlertCircle, Download, Save } from 'lucide-react';
import { exportToWord } from '../utils/exportToWord';

const Part4 = () => {
  const clubNames = Object.keys(part4Data).sort((a, b) => a.localeCompare(b));
  const [selectedClub, setSelectedClub] = useState(clubNames[0] || 'Walking club');
  const [clubData, setClubData] = useState(part4Data[selectedClub] || part4Data['Walking club']);
  
  const [answers, setAnswers] = useState({ email1: '', email2: '' });
  const [completedClubs, setCompletedClubs] = useState([]);
  const [lastSavedTime, setLastSavedTime] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Toggles for helpers
  const [showNoticeVi, setShowNoticeVi] = useState(false);
  const [showGeneralTemplate, setShowGeneralTemplate] = useState(false);
  
  const [showEmail1Template, setShowEmail1Template] = useState(false);
  const [showEmail1Vocab, setShowEmail1Vocab] = useState(false);
  const [showEmail1Sample, setShowEmail1Sample] = useState(false);

  const [showEmail2Template, setShowEmail2Template] = useState(false);
  const [showEmail2Vocab, setShowEmail2Vocab] = useState(false);
  const [showEmail2Sample, setShowEmail2Sample] = useState(false);

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

    // Reset helper toggles on club change
    setShowNoticeVi(false);
    setShowEmail1Template(false);
    setShowEmail1Vocab(false);
    setShowEmail1Sample(false);
    setShowEmail2Template(false);
    setShowEmail2Vocab(false);
    setShowEmail2Sample(false);
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

  const email1Count = getWordCount(answers.email1);
  const isEmail1InRange = email1Count >= 45 && email1Count <= 65;
  const isEmail1TooShort = email1Count > 0 && email1Count < 45;
  const isEmail1TooLong = email1Count > 65;

  const email2Count = getWordCount(answers.email2);
  const isEmail2InRange = email2Count >= 120 && email2Count <= 165;
  const isEmail2TooShort = email2Count > 0 && email2Count < 120;
  const isEmail2TooLong = email2Count > 165;

  return (
    <div>
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
            padding: '0.8rem 1.2rem',
            backgroundColor: toastMessage.type === 'success' ? '#065f46' : '#92400e',
            color: '#ffffff',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-lg)',
            fontSize: '0.9rem',
            fontWeight: '500',
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          {toastMessage.type === 'success' ? <CheckCircle2 size={18} color="#34d399" /> : <AlertCircle size={18} color="#fbbf24" />}
          <span>{toastMessage.text}</span>
        </div>
      )}

      {/* Header & Club Selector */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div>
          <h1 className="page-title" style={{ marginBottom: '0.25rem' }}>Writing Part 04</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0 }}>
            Viết 2 Email: Email 1 gửi bạn (~50 từ) & Email 2 gửi Quản lý CLB (120 - 150 từ). Thời gian gợi ý: 30 phút.
          </p>
        </div>
        
        <div style={{ position: 'relative', minWidth: '220px' }}>
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

      {/* Action Bar */}
      <PracticeActionBar 
        partName="Writing Part 04"
        partNumber={4}
        clubName={selectedClub}
        lastSavedTime={lastSavedTime}
        onSave={handleManualSave}
        onClear={handleClearCurrentClub}
      />

      {/* Universal Template Button */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
        <button
          type="button"
          onClick={() => setShowGeneralTemplate(!showGeneralTemplate)}
          className="btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.55rem 1.1rem',
            fontSize: '0.9rem',
            fontWeight: 600,
            backgroundColor: showGeneralTemplate ? '#4338ca' : '#eef2ff',
            color: showGeneralTemplate ? '#ffffff' : '#4338ca',
            border: '1px solid #c7d2fe',
            borderRadius: 'var(--radius-md)',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          <BookOpen size={16} />
          {showGeneralTemplate ? 'Đóng khung sườn chuẩn Part 4' : '📖 Xem khung sườn chuẩn Part 4 (Email bạn & Quản lý)'}
        </button>
      </div>

      {/* General Template Modal / Dropdown Box */}
      {showGeneralTemplate && (
        <div style={{ 
          marginBottom: '1.5rem', 
          padding: '1.5rem', 
          backgroundColor: '#f8fafc', 
          borderRadius: 'var(--radius-lg)', 
          border: '2px solid #818cf8',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ margin: 0, color: '#3730a3', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={20} color="#6366f1" />
              Khung sườn chuẩn Giáo trình APTIS WRITING PART 04
            </h3>
            <button 
              onClick={() => setShowGeneralTemplate(false)}
              style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.9rem' }}
            >
              ✕ Đóng
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
            {/* Informal Email Template */}
            <div style={{ backgroundColor: '#ffffff', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <User size={18} color="#059669" />
                <strong style={{ color: '#065f46', fontSize: '1rem' }}>{part4CommonTemplates.informal.title}</strong>
                <span style={{ fontSize: '0.75rem', backgroundColor: '#d1fae5', color: '#065f46', padding: '0.15rem 0.5rem', borderRadius: '12px', fontWeight: 600 }}>
                  {part4CommonTemplates.informal.target}
                </span>
              </div>
              <pre style={{ 
                whiteSpace: 'pre-wrap', 
                fontFamily: 'inherit', 
                fontSize: '0.88rem', 
                lineHeight: '1.6', 
                backgroundColor: '#f0fdf4', 
                padding: '1rem', 
                borderRadius: '6px', 
                color: '#1e293b',
                border: '1px solid #bbf7d0',
                margin: 0
              }}>
                {part4CommonTemplates.informal.templateText}
              </pre>
            </div>

            {/* Formal Email Template */}
            <div style={{ backgroundColor: '#ffffff', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <ShieldCheck size={18} color="#2563eb" />
                <strong style={{ color: '#1e40af', fontSize: '1rem' }}>{part4CommonTemplates.formal.title}</strong>
                <span style={{ fontSize: '0.75rem', backgroundColor: '#dbeafe', color: '#1e40af', padding: '0.15rem 0.5rem', borderRadius: '12px', fontWeight: 600 }}>
                  {part4CommonTemplates.formal.target}
                </span>
              </div>
              <pre style={{ 
                whiteSpace: 'pre-wrap', 
                fontFamily: 'inherit', 
                fontSize: '0.88rem', 
                lineHeight: '1.6', 
                backgroundColor: '#eff6ff', 
                padding: '1rem', 
                borderRadius: '6px', 
                color: '#1e293b',
                border: '1px solid #bfdbfe',
                margin: 0
              }}>
                {part4CommonTemplates.formal.templateText}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* Club Notice Card */}
      <div className="card" style={{ marginBottom: '1.75rem', borderLeft: '4px solid #3b82f6', backgroundColor: '#ffffff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Mail size={20} color="#2563eb" />
            <h2 style={{ fontSize: '1.15rem', color: '#1e40af', margin: 0, fontWeight: 700 }}>
              Thông báo từ Câu lạc bộ ({clubData.title})
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setShowNoticeVi(!showNoticeVi)}
            style={{
              background: 'none',
              border: 'none',
              color: '#2563eb',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}
          >
            {showNoticeVi ? <EyeOff size={15} /> : <Eye size={15} />}
            {showNoticeVi ? 'Ẩn bản dịch' : 'Xem bản dịch tiếng Việt'}
          </button>
        </div>

        <div style={{ 
          padding: '1rem 1.25rem', 
          backgroundColor: '#f8fafc', 
          borderRadius: 'var(--radius-md)', 
          border: '1px solid #e2e8f0',
          fontSize: '1rem',
          lineHeight: '1.6',
          color: '#1e293b',
          whiteSpace: 'pre-line'
        }}>
          {clubData.notice}
        </div>

        {showNoticeVi && (
          <div style={{ 
            marginTop: '0.75rem', 
            padding: '0.85rem 1.25rem', 
            backgroundColor: '#eff6ff', 
            borderRadius: 'var(--radius-md)', 
            fontSize: '0.9rem',
            lineHeight: '1.5',
            color: '#1e40af',
            whiteSpace: 'pre-line',
            border: '1px dashed #93c5fd'
          }}>
            <strong>Bản dịch:</strong><br />
            {clubData.noticeVi}
          </div>
        )}
      </div>

      {/* Task 1: Email 1 to Friend */}
      <div className="card" style={{ marginBottom: '2rem', borderTop: '4px solid #10b981' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <User size={20} color="#059669" />
              <h3 style={{ margin: 0, color: '#065f46', fontSize: '1.15rem', fontWeight: 700 }}>
                {clubData.email1.title}
              </h3>
              <span style={{ fontSize: '0.75rem', backgroundColor: '#d1fae5', color: '#065f46', padding: '0.2rem 0.6rem', borderRadius: '12px', fontWeight: 600 }}>
                Yêu cầu: ~50 từ
              </span>
            </div>
            <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              {clubData.email1.instruction}
            </p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ 
              fontSize: '0.9rem', 
              fontWeight: 700, 
              color: isEmail1InRange ? '#059669' : (email1Count === 0 ? 'var(--text-muted)' : '#d97706') 
            }}>
              Số từ: {email1Count} từ
            </div>
            <div style={{ fontSize: '0.75rem', color: isEmail1InRange ? '#059669' : (email1Count === 0 ? 'var(--text-muted)' : '#d97706') }}>
              {isEmail1InRange ? '✅ Độ dài đạt chuẩn (~50 từ)' : (isEmail1TooShort ? '⚠️ Quá ngắn (< 45 từ)' : (isEmail1TooLong ? '⚠️ Hơi dài (> 65 từ)' : 'Mục tiêu: 45 - 65 từ'))}
            </div>
          </div>
        </div>

        {/* Textarea for Email 1 */}
        <div style={{ marginBottom: '1rem' }}>
          <textarea
            value={answers.email1}
            onChange={(e) => handleAnswerChange('email1', e.target.value)}
            placeholder="Viết email gửi bạn của bạn tại đây (Bắt đầu với: Dear Kim, ...)"
            rows={8}
            style={{
              width: '100%',
              padding: '1rem',
              fontSize: '1rem',
              lineHeight: '1.6',
              borderRadius: 'var(--radius-md)',
              border: `2px solid ${isEmail1InRange ? '#10b981' : (email1Count > 0 ? '#fbbf24' : '#e2e8f0')}`,
              outline: 'none',
              fontFamily: 'inherit',
              resize: 'vertical',
              backgroundColor: '#ffffff',
              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)'
            }}
          />
        </div>

        {/* Helper toggles for Email 1 */}
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <button
            type="button"
            onClick={() => setShowEmail1Template(!showEmail1Template)}
            className="btn"
            style={{
              fontSize: '0.85rem',
              padding: '0.4rem 0.85rem',
              backgroundColor: showEmail1Template ? '#ecfdf5' : '#f8fafc',
              color: showEmail1Template ? '#065f46' : 'var(--text-muted)',
              border: '1px solid #d1fae5',
              borderRadius: '6px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            {showEmail1Template ? '▲ Ẩn Dàn ý / Template' : '💡 Xem Dàn ý / Template'}
          </button>

          <button
            type="button"
            onClick={() => setShowEmail1Vocab(!showEmail1Vocab)}
            className="btn"
            style={{
              fontSize: '0.85rem',
              padding: '0.4rem 0.85rem',
              backgroundColor: showEmail1Vocab ? '#ecfdf5' : '#f8fafc',
              color: showEmail1Vocab ? '#065f46' : 'var(--text-muted)',
              border: '1px solid #d1fae5',
              borderRadius: '6px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            {showEmail1Vocab ? '▲ Ẩn Gợi ý từ vựng' : '✨ Gợi ý từ vựng'}
          </button>

          <button
            type="button"
            onClick={() => setShowEmail1Sample(!showEmail1Sample)}
            className="btn"
            style={{
              fontSize: '0.85rem',
              padding: '0.4rem 0.85rem',
              backgroundColor: showEmail1Sample ? '#ecfdf5' : '#f8fafc',
              color: showEmail1Sample ? '#065f46' : 'var(--text-muted)',
              border: '1px solid #d1fae5',
              borderRadius: '6px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            {showEmail1Sample ? '▲ Ẩn Bài mẫu' : '📝 Xem Bài mẫu chuẩn'}
          </button>
        </div>

        {/* Email 1 Template Box */}
        {showEmail1Template && (
          <div style={{ backgroundColor: '#f0fdf4', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #bbf7d0', marginBottom: '1rem' }}>
            <div style={{ fontWeight: 700, color: '#065f46', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
              Khung sườn gợi ý cho Email 1:
            </div>
            <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', fontSize: '0.88rem', margin: 0, lineHeight: '1.5', color: '#166534' }}>
              {clubData.email1.template}
            </pre>
          </div>
        )}

        {/* Email 1 Vocab Box */}
        {showEmail1Vocab && (
          <div style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', marginBottom: '1rem' }}>
            <div style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
              Gợi ý cụm từ vựng hay cho Email 1:
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {clubData.email1.vocab.map((item, idx) => (
                <div key={idx} style={{ fontSize: '0.88rem', lineHeight: '1.5' }} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </div>
          </div>
        )}

        {/* Email 1 Sample Box */}
        {showEmail1Sample && (
          <div style={{ backgroundColor: '#ffffff', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '2px solid #34d399', marginBottom: '1rem', boxShadow: '0 2px 4px rgba(0,0,0,0.04)' }}>
            <div style={{ fontWeight: 700, color: '#065f46', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
              {clubData.email1.samples[0].title} (~{getWordCount(clubData.email1.samples[0].en)} từ):
            </div>
            <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', fontSize: '0.92rem', lineHeight: '1.6', margin: '0 0 0.75rem 0', color: '#1e293b' }}>
              {clubData.email1.samples[0].en}
            </pre>
            <div style={{ fontSize: '0.85rem', color: '#475569', backgroundColor: '#f0fdf4', padding: '0.75rem', borderRadius: '6px', borderLeft: '3px solid #10b981', lineHeight: '1.5', whiteSpace: 'pre-line' }}>
              <strong>Dịch nghĩa:</strong><br />
              {clubData.email1.samples[0].vi}
            </div>
          </div>
        )}
      </div>

      {/* Task 2: Email 2 to Club Manager */}
      <div className="card" style={{ marginBottom: '2rem', borderTop: '4px solid #3b82f6' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <ShieldCheck size={20} color="#2563eb" />
              <h3 style={{ margin: 0, color: '#1e40af', fontSize: '1.15rem', fontWeight: 700 }}>
                {clubData.email2.title}
              </h3>
              <span style={{ fontSize: '0.75rem', backgroundColor: '#dbeafe', color: '#1e40af', padding: '0.2rem 0.6rem', borderRadius: '12px', fontWeight: 600 }}>
                Yêu cầu: 120 - 150 từ
              </span>
            </div>
            <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              {clubData.email2.instruction}
            </p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ 
              fontSize: '0.9rem', 
              fontWeight: 700, 
              color: isEmail2InRange ? '#2563eb' : (email2Count === 0 ? 'var(--text-muted)' : '#d97706') 
            }}>
              Số từ: {email2Count} từ
            </div>
            <div style={{ fontSize: '0.75rem', color: isEmail2InRange ? '#2563eb' : (email2Count === 0 ? 'var(--text-muted)' : '#d97706') }}>
              {isEmail2InRange ? '✅ Độ dài đạt chuẩn (120-150 từ)' : (isEmail2TooShort ? '⚠️ Quá ngắn (< 120 từ)' : (isEmail2TooLong ? '⚠️ Hơi dài (> 165 từ)' : 'Mục tiêu: 120 - 165 từ'))}
            </div>
          </div>
        </div>

        {/* Textarea for Email 2 */}
        <div style={{ marginBottom: '1rem' }}>
          <textarea
            value={answers.email2}
            onChange={(e) => handleAnswerChange('email2', e.target.value)}
            placeholder="Viết email trang trọng gửi Quản lý CLB tại đây (Bắt đầu với: Dear Club Manager, ...)"
            rows={14}
            style={{
              width: '100%',
              padding: '1rem',
              fontSize: '1rem',
              lineHeight: '1.6',
              borderRadius: 'var(--radius-md)',
              border: `2px solid ${isEmail2InRange ? '#3b82f6' : (email2Count > 0 ? '#fbbf24' : '#e2e8f0')}`,
              outline: 'none',
              fontFamily: 'inherit',
              resize: 'vertical',
              backgroundColor: '#ffffff',
              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)'
            }}
          />
        </div>

        {/* Helper toggles for Email 2 */}
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <button
            type="button"
            onClick={() => setShowEmail2Template(!showEmail2Template)}
            className="btn"
            style={{
              fontSize: '0.85rem',
              padding: '0.4rem 0.85rem',
              backgroundColor: showEmail2Template ? '#eff6ff' : '#f8fafc',
              color: showEmail2Template ? '#1e40af' : 'var(--text-muted)',
              border: '1px solid #bfdbfe',
              borderRadius: '6px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            {showEmail2Template ? '▲ Ẩn Dàn ý / Template' : '💡 Xem Dàn ý / Template'}
          </button>

          <button
            type="button"
            onClick={() => setShowEmail2Vocab(!showEmail2Vocab)}
            className="btn"
            style={{
              fontSize: '0.85rem',
              padding: '0.4rem 0.85rem',
              backgroundColor: showEmail2Vocab ? '#eff6ff' : '#f8fafc',
              color: showEmail2Vocab ? '#1e40af' : 'var(--text-muted)',
              border: '1px solid #bfdbfe',
              borderRadius: '6px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            {showEmail2Vocab ? '▲ Ẩn Gợi ý từ vựng' : '✨ Gợi ý từ vựng'}
          </button>

          <button
            type="button"
            onClick={() => setShowEmail2Sample(!showEmail2Sample)}
            className="btn"
            style={{
              fontSize: '0.85rem',
              padding: '0.4rem 0.85rem',
              backgroundColor: showEmail2Sample ? '#eff6ff' : '#f8fafc',
              color: showEmail2Sample ? '#1e40af' : 'var(--text-muted)',
              border: '1px solid #bfdbfe',
              borderRadius: '6px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            {showEmail2Sample ? '▲ Ẩn Bài mẫu' : '📝 Xem Bài mẫu chuẩn'}
          </button>
        </div>

        {/* Email 2 Template Box */}
        {showEmail2Template && (
          <div style={{ backgroundColor: '#eff6ff', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #bfdbfe', marginBottom: '1rem' }}>
            <div style={{ fontWeight: 700, color: '#1e40af', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
              Khung sườn gợi ý cho Email 2:
            </div>
            <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', fontSize: '0.88rem', margin: 0, lineHeight: '1.5', color: '#1e3a8a' }}>
              {clubData.email2.template}
            </pre>
          </div>
        )}

        {/* Email 2 Vocab Box */}
        {showEmail2Vocab && (
          <div style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', marginBottom: '1rem' }}>
            <div style={{ fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
              Gợi ý cụm từ vựng hay cho Email 2:
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {clubData.email2.vocab.map((item, idx) => (
                <div key={idx} style={{ fontSize: '0.88rem', lineHeight: '1.5' }} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </div>
          </div>
        )}

        {/* Email 2 Sample Box */}
        {showEmail2Sample && (
          <div style={{ backgroundColor: '#ffffff', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '2px solid #60a5fa', marginBottom: '1rem', boxShadow: '0 2px 4px rgba(0,0,0,0.04)' }}>
            <div style={{ fontWeight: 700, color: '#1e40af', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
              {clubData.email2.samples[0].title} (~{getWordCount(clubData.email2.samples[0].en)} từ):
            </div>
            <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', fontSize: '0.92rem', lineHeight: '1.6', margin: '0 0 0.75rem 0', color: '#1e293b' }}>
              {clubData.email2.samples[0].en}
            </pre>
            <div style={{ fontSize: '0.85rem', color: '#475569', backgroundColor: '#eff6ff', padding: '0.75rem', borderRadius: '6px', borderLeft: '3px solid #3b82f6', lineHeight: '1.5', whiteSpace: 'pre-line' }}>
              <strong>Dịch nghĩa:</strong><br />
              {clubData.email2.samples[0].vi}
            </div>
          </div>
        )}
      </div>

      {/* Prominent Save and Export at the Bottom (Chủ động bấm lưu) */}
      <div className="card" style={{ 
        marginTop: '2rem', 
        padding: '1.5rem', 
        backgroundColor: '#F8FAFC', 
        borderRadius: 'var(--radius-lg)', 
        border: '2px dashed var(--border-color)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '1rem'
      }}>
        <div>
          <h3 style={{ margin: '0 0 0.4rem 0', color: 'var(--primary)', fontSize: '1.2rem' }}>
            Hoàn thành bài viết Part 04?
          </h3>
          <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Hãy bấm <strong>"Lưu bài làm"</strong> để ghi nhận lịch sử bài viết và tải file Word nộp cho cô Nguyệt nhé!
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            type="button"
            onClick={handleManualSave}
            className="btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.8rem 1.8rem',
              fontSize: '1rem',
              fontWeight: 700,
              backgroundColor: '#10B981',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer',
              boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.3)',
              transition: 'all 0.2s'
            }}
          >
            <Save size={18} />
            LƯU BÀI LÀM PART 04
          </button>

          <button
            type="button"
            onClick={() => exportToWord({ clubName: selectedClub, part: 4 })}
            className="btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.8rem 1.8rem',
              fontSize: '1rem',
              fontWeight: 700,
              backgroundColor: '#3B82F6',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer',
              boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.3)',
              transition: 'all 0.2s'
            }}
          >
            <Download size={18} />
            TẢI FILE WORD (.DOCX) NỘP BÀI
          </button>
        </div>

        {lastSavedTime && (
          <div style={{ fontSize: '0.85rem', color: '#059669', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <CheckCircle2 size={15} />
            Bài làm đã được lưu vào hệ thống lúc: <strong>{lastSavedTime}</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default Part4;
