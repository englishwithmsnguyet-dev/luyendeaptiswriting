import React, { useState, useEffect, useRef } from 'react';
import { X, Download, Upload, Trash2, FileText, CheckCircle2, History, AlertTriangle, RefreshCw, ListFilter } from 'lucide-react';
import { exportToWord } from '../utils/exportToWord';
import { exportBackupJSON, importBackupJSON, clearPartHistory, clearAllHistory, cleanDuplicateClubAnswers, clearClubHistory } from '../utils/historyManager';

const HistoryModal = ({ isOpen, onClose }) => {
  const fileInputRef = useRef(null);
  const [stats, setStats] = useState({ p1: 0, p2: 0, p3: 0, totalAnswered: 0 });
  const [message, setMessage] = useState(null);
  const [showClubList, setShowClubList] = useState(false);
  const [savedClubs, setSavedClubs] = useState({ p1: [], p2: [], p3: [] });

  const loadStats = () => {
    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;
    const p1List = [];
    const p2List = [];
    const p3List = [];

    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k) {
        if (k.startsWith('aptis_p1_answers_')) {
          const clubName = k.replace('aptis_p1_answers_', '');
          const savedAt = localStorage.getItem(`aptis_p1_saved_at_${clubName}`);
          p1List.push({ clubName, savedAt });
          p1Count++;
        } else if (k.startsWith('aptis_p2_answer_')) {
          const clubName = k.replace('aptis_p2_answer_', '');
          const savedAt = localStorage.getItem(`aptis_p2_saved_at_${clubName}`);
          p2List.push({ clubName, savedAt });
          p2Count++;
        } else if (k.startsWith('aptis_p3_answers_')) {
          const clubName = k.replace('aptis_p3_answers_', '');
          const savedAt = localStorage.getItem(`aptis_p3_saved_at_${clubName}`);
          p3List.push({ clubName, savedAt });
          p3Count++;
        }
      }
    }

    setSavedClubs({
      p1: p1List.sort((a, b) => a.clubName.localeCompare(b.clubName)),
      p2: p2List.sort((a, b) => a.clubName.localeCompare(b.clubName)),
      p3: p3List.sort((a, b) => a.clubName.localeCompare(b.clubName))
    });

    setStats({
      p1: p1Count,
      p2: p2Count,
      p3: p3Count,
      totalAnswered: p1Count + p2Count + p3Count
    });
  };

  useEffect(() => {
    if (isOpen) {
      loadStats();
      setMessage(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleExportWord = () => {
    exportToWord();
    setMessage({ type: 'success', text: 'Đang tải file Word (.docx) tổng hợp toàn bộ bài làm...' });
  };

  const handleExportJSON = () => {
    exportBackupJSON();
    setMessage({ type: 'success', text: 'Đã xuất file sao lưu (.json) bài làm thành công!' });
  };

  const handleCleanDuplicates = () => {
    const cleaned = cleanDuplicateClubAnswers();
    loadStats();
    if (cleaned > 0) {
      setMessage({
        type: 'success',
        text: `Đã dọn dẹp thành công ${cleaned} đề bị dính/sao chép đáp án từ đề khác! Giờ đây các CLB đã hoàn toàn độc lập và không còn bị lệch đáp án.`
      });
    } else {
      setMessage({
        type: 'success',
        text: 'Hệ thống kiểm tra: Không phát hiện đề nào bị dính/sao chép trùng lặp đáp án!'
      });
    }
  };

  const handleDeleteSingleClub = (part, clubName) => {
    if (window.confirm(`Bạn có chắc chắn muốn xoá bài làm của đề "${clubName}" (Part ${part}) không?`)) {
      clearClubHistory(part, clubName);
      loadStats();
      setMessage({ type: 'warning', text: `Đã xoá bài làm của đề "${clubName}" (Part ${part})!` });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content === 'string') {
        const res = importBackupJSON(content);
        if (res.success) {
          loadStats();
          setMessage({ type: 'success', text: `Khôi phục thành công ${res.count} mục bài làm từ file sao lưu!` });
        } else {
          setMessage({ type: 'error', text: `Lỗi khôi phục: ${res.error}` });
        }
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleClearPart = (partNum) => {
    if (window.confirm(`Bạn có chắc chắn muốn xoá toàn bộ lịch sử bài làm của WRITING PART 0${partNum} không?`)) {
      clearPartHistory(partNum);
      loadStats();
      setMessage({ type: 'warning', text: `Đã xoá toàn bộ lịch sử bài làm Part 0${partNum}!` });
    }
  };

  const handleClearAll = () => {
    if (window.confirm('CẢNH BÁO: Bạn có chắc chắn muốn XOÁ TOÀN BỘ lịch sử bài làm và kết quả của TẤT CẢ các phần không? Hành động này không thể hoàn tác!')) {
      clearAllHistory();
      loadStats();
      setMessage({ type: 'warning', text: 'Đã xoá sạch toàn bộ lịch sử bài làm!' });
    }
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(4px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-xl)',
          width: '100%',
          maxWidth: '620px',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden',
          animation: 'fadeIn 0.2s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div 
          style={{
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'var(--bg-main)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <History size={22} color="var(--primary)" />
            <h3 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--primary)', fontWeight: 700 }}>
              Quản lý Lịch sử Bài làm & Xuất file
            </h3>
          </div>
          <button 
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-muted)',
              padding: '0.25rem'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '1.5rem', maxHeight: '75vh', overflowY: 'auto' }}>
          {/* Notification Message */}
          {message && (
            <div 
              style={{
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1rem',
                fontSize: '0.875rem',
                backgroundColor: message.type === 'success' ? '#ecfdf5' : (message.type === 'warning' ? '#fffbeb' : '#fef2f2'),
                color: message.type === 'success' ? '#065f46' : (message.type === 'warning' ? '#92400e' : '#991b1b'),
                border: `1px solid ${message.type === 'success' ? '#a7f3d0' : (message.type === 'warning' ? '#fde68a' : '#fecaca')}`,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              {message.type === 'success' ? <CheckCircle2 size={16} /> : <AlertTriangle size={16} />}
              <span>{message.text}</span>
            </div>
          )}

          {/* Stats Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '0.75rem 1rem', backgroundColor: '#f0fdf4', borderRadius: 'var(--radius-md)', border: '1px solid #bbf7d0', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#166534', textTransform: 'uppercase' }}>Part 1</div>
              <div style={{ fontSize: '1.35rem', fontWeight: 700, color: '#15803d' }}>{stats.p1}</div>
              <div style={{ fontSize: '0.75rem', color: '#166534' }}>CLB đã trả lời</div>
            </div>
            <div style={{ padding: '0.75rem 1rem', backgroundColor: '#eff6ff', borderRadius: 'var(--radius-md)', border: '1px solid #bfdbfe', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#1e40af', textTransform: 'uppercase' }}>Part 2</div>
              <div style={{ fontSize: '1.35rem', fontWeight: 700, color: '#2563eb' }}>{stats.p2}</div>
              <div style={{ fontSize: '0.75rem', color: '#1e40af' }}>CLB đã trả lời</div>
            </div>
            <div style={{ padding: '0.75rem 1rem', backgroundColor: '#fdf4ff', borderRadius: 'var(--radius-md)', border: '1px solid #f5d0fe', textAlign: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#86198f', textTransform: 'uppercase' }}>Part 3</div>
              <div style={{ fontSize: '1.35rem', fontWeight: 700, color: '#a21caf' }}>{stats.p3}</div>
              <div style={{ fontSize: '0.75rem', color: '#86198f' }}>CLB đã trả lời</div>
            </div>
          </div>

          {/* Section: Xuất file & Sao lưu */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--primary)', marginBottom: '0.75rem', fontWeight: 600 }}>
              📥 Xuất file & Sao lưu bài làm
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <button
                type="button"
                onClick={handleExportWord}
                className="btn btn-primary"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1rem',
                  fontSize: '0.9rem',
                  fontWeight: 600
                }}
              >
                <Download size={18} />
                Xuất toàn bộ bài làm ra file Word (.docx)
              </button>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                <button
                  type="button"
                  onClick={handleExportJSON}
                  className="btn btn-secondary"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    padding: '0.6rem 0.8rem',
                    fontSize: '0.85rem'
                  }}
                  title="Lưu toàn bộ bài làm thành file JSON để lưu giữ an toàn"
                >
                  <FileText size={16} color="#3B82F6" />
                  Sao lưu file (.json)
                </button>

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="btn btn-secondary"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    padding: '0.6rem 0.8rem',
                    fontSize: '0.85rem'
                  }}
                  title="Nhập lại bài làm từ file sao lưu JSON đã tải trước đây"
                >
                  <Upload size={16} color="#10B981" />
                  Khôi phục từ (.json)
                </button>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  accept=".json" 
                  style={{ display: 'none' }} 
                />
              </div>
            </div>
          </div>

          {/* Section: Khắc phục lỗi nhảy đáp án */}
          <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#fffbeb', borderRadius: 'var(--radius-md)', border: '1px solid #fde68a' }}>
            <h4 style={{ fontSize: '0.95rem', color: '#92400e', marginBottom: '0.4rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <RefreshCw size={16} />
              Khắc phục bài làm bị dính / nhảy đề
            </h4>
            <p style={{ fontSize: '0.8rem', color: '#b45309', margin: '0 0 0.75rem 0', lineHeight: 1.4 }}>
              Nếu bài làm của một CLB vô tình bị sao chép sang CLB khác khi xem đề, nhấn nút dưới đây để hệ thống tự động lọc và xoá các bản sao chép trùng lặp, trả lại đúng bài gốc cho từng CLB.
            </p>
            <button
              type="button"
              onClick={handleCleanDuplicates}
              style={{
                width: '100%',
                padding: '0.6rem',
                fontSize: '0.85rem',
                backgroundColor: '#d97706',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem'
              }}
            >
              <RefreshCw size={16} />
              Quét & Dọn dẹp đáp án bị sao chép nhầm
            </button>
          </div>

          {/* Section: Danh sách CLB đã làm (Tuỳ chọn xem & xoá lẻ) */}
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--primary)', margin: 0, fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ListFilter size={16} />
                Danh sách đề đã lưu bài làm ({stats.totalAnswered})
              </h4>
              <button
                type="button"
                onClick={() => setShowClubList(!showClubList)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#2563eb',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                {showClubList ? 'Thu gọn ▲' : 'Xem chi tiết ▼'}
              </button>
            </div>

            {showClubList && (
              <div style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '0.5rem', backgroundColor: 'var(--bg-main)' }}>
                {stats.totalAnswered === 0 ? (
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center', padding: '0.5rem' }}>Chưa có bài làm nào được lưu.</div>
                ) : (
                  <div>
                    {savedClubs.p3.length > 0 && (
                      <div style={{ marginBottom: '0.5rem' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#a21caf', marginBottom: '0.25rem' }}>Part 3 ({savedClubs.p3.length} đề):</div>
                        {savedClubs.p3.map(item => (
                          <div key={item.clubName} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.3rem 0.5rem', fontSize: '0.8rem', backgroundColor: 'white', borderRadius: '4px', marginBottom: '0.25rem' }}>
                            <span>{item.clubName} {item.savedAt && <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>({item.savedAt})</span>}</span>
                            <button
                              type="button"
                              onClick={() => handleDeleteSingleClub(3, item.clubName)}
                              title="Xoá bài làm của đề này"
                              style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '0.1rem 0.3rem' }}
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                    {savedClubs.p2.length > 0 && (
                      <div style={{ marginBottom: '0.5rem' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2563eb', marginBottom: '0.25rem' }}>Part 2 ({savedClubs.p2.length} đề):</div>
                        {savedClubs.p2.map(item => (
                          <div key={item.clubName} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.3rem 0.5rem', fontSize: '0.8rem', backgroundColor: 'white', borderRadius: '4px', marginBottom: '0.25rem' }}>
                            <span>{item.clubName} {item.savedAt && <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>({item.savedAt})</span>}</span>
                            <button
                              type="button"
                              onClick={() => handleDeleteSingleClub(2, item.clubName)}
                              title="Xoá bài làm của đề này"
                              style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '0.1rem 0.3rem' }}
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                    {savedClubs.p1.length > 0 && (
                      <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#15803d', marginBottom: '0.25rem' }}>Part 1 ({savedClubs.p1.length} đề):</div>
                        {savedClubs.p1.map(item => (
                          <div key={item.clubName} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.3rem 0.5rem', fontSize: '0.8rem', backgroundColor: 'white', borderRadius: '4px', marginBottom: '0.25rem' }}>
                            <span>{item.clubName} {item.savedAt && <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>({item.savedAt})</span>}</span>
                            <button
                              type="button"
                              onClick={() => handleDeleteSingleClub(1, item.clubName)}
                              title="Xoá bài làm của đề này"
                              style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '0.1rem 0.3rem' }}
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Section: Xoá lịch sử */}
          <div>
            <h4 style={{ fontSize: '0.95rem', color: '#dc2626', marginBottom: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Trash2 size={16} />
              Xoá lịch sử bài làm (Chủ động làm lại)
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginBottom: '0.6rem' }}>
              <button
                type="button"
                onClick={() => handleClearPart(1)}
                style={{
                  padding: '0.55rem',
                  fontSize: '0.8rem',
                  backgroundColor: '#fee2e2',
                  color: '#b91c1c',
                  border: '1px solid #fca5a5',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  fontWeight: 500
                }}
              >
                Xoá Part 1
              </button>
              <button
                type="button"
                onClick={() => handleClearPart(2)}
                style={{
                  padding: '0.55rem',
                  fontSize: '0.8rem',
                  backgroundColor: '#fee2e2',
                  color: '#b91c1c',
                  border: '1px solid #fca5a5',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  fontWeight: 500
                }}
              >
                Xoá Part 2
              </button>
              <button
                type="button"
                onClick={() => handleClearPart(3)}
                style={{
                  padding: '0.55rem',
                  fontSize: '0.8rem',
                  backgroundColor: '#fee2e2',
                  color: '#b91c1c',
                  border: '1px solid #fca5a5',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  fontWeight: 500
                }}
              >
                Xoá Part 3
              </button>
            </div>

            <button
              type="button"
              onClick={handleClearAll}
              style={{
                width: '100%',
                padding: '0.6rem',
                fontSize: '0.85rem',
                backgroundColor: '#dc2626',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem'
              }}
            >
              <Trash2 size={16} />
              Xoá toàn bộ lịch sử (Làm mới 100%)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryModal;
