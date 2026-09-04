import React, { useState, useEffect } from 'react';
import { Save, Trash2, Download, CheckCircle2, AlertCircle, FileText } from 'lucide-react';
import { exportToWord } from '../utils/exportToWord';

const PracticeActionBar = ({ 
  partName, 
  partNumber, 
  clubName, 
  lastSavedTime, 
  onSave, 
  onClear 
}) => {
  const [toastMessage, setToastMessage] = useState(null);
  const [showExportMenu, setShowExportMenu] = useState(false);

  const showToast = (text, type = 'success') => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleSaveClick = () => {
    if (onSave) {
      const time = onSave();
      showToast(`Đã lưu bài làm CLB "${clubName}" thành công! (${time || 'Vừa xong'})`, 'success');
    }
  };

  const handleClearClick = () => {
    const confirmClear = window.confirm(
      `Bạn có chắc chắn muốn XOÁ toàn bộ câu trả lời và kết quả chấm điểm của CLB "${clubName}" để làm lại từ đầu không?`
    );
    if (confirmClear && onClear) {
      onClear();
      showToast(`Đã xoá sạch bài làm CLB "${clubName}". Bạn có thể luyện tập lại!`, 'warning');
    }
  };

  const handleExportCurrent = () => {
    setShowExportMenu(false);
    exportToWord({ clubName, part: partNumber });
    showToast(`Đang tải file Word bài làm CLB "${clubName}"...`, 'info');
  };

  const handleExportAll = () => {
    setShowExportMenu(false);
    exportToWord();
    showToast('Đang tải file Word tổng hợp toàn bộ bài làm...', 'info');
  };

  return (
    <>
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
            backgroundColor: toastMessage.type === 'success' ? '#065f46' : (toastMessage.type === 'warning' ? '#92400e' : '#1e40af'),
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

      {/* Action Bar Container */}
      <div 
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '0.75rem 0 1.25rem 0',
          padding: '0.75rem 1.2rem',
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        {/* Status indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          <Save size={16} color="#10B981" />
          <span>
            {lastSavedTime ? (
              <>Lịch sử đã lưu lúc: <strong style={{ color: 'var(--primary)' }}>{lastSavedTime}</strong></>
            ) : (
              'Tự động lưu khi bạn nhập bài'
            )}
          </span>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', position: 'relative' }}>
          {/* Save Button */}
          <button 
            type="button"
            onClick={handleSaveClick}
            className="btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.9rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              backgroundColor: '#10B981',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            title="Lưu câu trả lời vào lịch sử bài làm"
          >
            <Save size={15} />
            Lưu bài làm
          </button>

          {/* Export Button with Dropdown */}
          <div style={{ position: 'relative' }}>
            <button 
              type="button"
              onClick={() => setShowExportMenu(!showExportMenu)}
              className="btn"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.9rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                backgroundColor: '#3B82F6',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              title="Xuất bài làm ra file Word"
            >
              <Download size={15} />
              Xuất file Word
            </button>

            {showExportMenu && (
              <div 
                style={{
                  position: 'absolute',
                  top: '110%',
                  right: 0,
                  backgroundColor: 'white',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid var(--border-color)',
                  zIndex: 50,
                  minWidth: '220px',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={handleExportCurrent}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    width: '100%',
                    padding: '0.7rem 1rem',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    fontSize: '0.85rem',
                    color: 'var(--text-main)',
                    cursor: 'pointer',
                    borderBottom: '1px solid #f1f5f9'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f8fafc'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  <FileText size={16} color="#3B82F6" />
                  <span>Xuất riêng CLB này (.docx)</span>
                </button>
                <button
                  onClick={handleExportAll}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    width: '100%',
                    padding: '0.7rem 1rem',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    fontSize: '0.85rem',
                    color: 'var(--text-main)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f8fafc'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  <Download size={16} color="#10B981" />
                  <span>Xuất toàn bộ bài làm (.docx)</span>
                </button>
              </div>
            )}
          </div>

          {/* Clear Button */}
          <button 
            type="button"
            onClick={handleClearClick}
            className="btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.9rem',
              fontSize: '0.85rem',
              fontWeight: 500,
              backgroundColor: '#fee2e2',
              color: '#dc2626',
              border: '1px solid #fecaca',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            title="Xoá câu trả lời của CLB này để làm lại"
          >
            <Trash2 size={15} />
            Xoá bài CLB này
          </button>
        </div>
      </div>
    </>
  );
};

export default PracticeActionBar;
