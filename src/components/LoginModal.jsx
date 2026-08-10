import React, { useState } from 'react';

const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSfyvDrUrUL1TxHvA0xrL8JPmKCQ6n0gAey6s38s3100Iu6h4A/formResponse';
const ENTRY_ID = 'entry.388968236'; // Full name & class

export const submitToGoogleForm = (name) => {
  const formData = new FormData();
  formData.append(ENTRY_ID, name);
  
  // Submit via fetch with no-cors to avoid CORS errors
  fetch(GOOGLE_FORM_ACTION, {
    method: 'POST',
    mode: 'no-cors',
    body: formData
  }).catch(err => console.error('Error tracking login', err));
};

const LoginModal = ({ onLogin }) => {
  const [name, setName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    localStorage.setItem('aptis_student_name', name.trim());
    submitToGoogleForm(name.trim());
    sessionStorage.setItem('aptis_logged_in_session', 'true');
    onLogin(name.trim());
  };
  
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
      <div style={{ background: 'white', padding: '2.5rem', borderRadius: '12px', maxWidth: '450px', width: '90%', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}>
        <h2 style={{ marginBottom: '1rem', color: 'var(--primary)', textAlign: 'center', fontSize: '1.5rem' }}>Đăng nhập / Điểm danh</h2>
        <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: '1.5' }}>
          Vui lòng nhập <strong>Họ tên và Lớp</strong> của bạn để hệ thống ghi nhận sự tham gia của bạn trong buổi học hôm nay.
        </p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Ví dụ: Nguyễn Văn A - Lớp 10A1" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '0.8rem 1rem', 
              marginBottom: '1.5rem', 
              borderRadius: '8px', 
              border: '2px solid #e2e8f0',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.2s'
            }}
            required
            autoFocus
            onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
          />
          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.9rem', fontSize: '1.05rem', fontWeight: 'bold' }}>
            Bắt đầu làm bài
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
