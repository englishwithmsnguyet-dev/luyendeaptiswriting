import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import HistoryModal from './HistoryModal';
import { User, History } from 'lucide-react';
import LoginModal, { submitToGoogleForm } from './LoginModal';
import TimerBadge from './TimerBadge';

const Layout = () => {
  const [studentName, setStudentName] = useState(localStorage.getItem('aptis_student_name'));
  const [showLogin, setShowLogin] = useState(!studentName);
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  useEffect(() => {
    if (studentName) {
      // Check if we already tracked this session
      const tracked = sessionStorage.getItem('aptis_logged_in_session');
      if (!tracked) {
        submitToGoogleForm(studentName);
        sessionStorage.setItem('aptis_logged_in_session', 'true');
      }
    }
  }, [studentName]);

  const handleLogin = (name) => {
    setStudentName(name);
    setShowLogin(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('aptis_student_name');
    sessionStorage.removeItem('aptis_logged_in_session');
    setStudentName(null);
    setShowLogin(true);
  };

  return (
    <>
      {showLogin && <LoginModal onLogin={handleLogin} />}
      <HistoryModal isOpen={showHistoryModal} onClose={() => setShowHistoryModal(false)} />
      <div className="app-container" style={{ filter: showLogin ? 'blur(4px)' : 'none', pointerEvents: showLogin ? 'none' : 'auto' }}>
        <Sidebar />
        <main className="main-content">
          <header className="top-header">
            <div className="header-title">APTIS Writing Practice Test</div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => setShowHistoryModal(true)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.4rem 0.85rem',
                  fontSize: '0.85rem',
                  backgroundColor: 'var(--bg-main)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '20px',
                  color: 'var(--primary)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                title="Quản lý lịch sử bài làm, sao lưu và xuất file Word"
              >
                <History size={16} color="var(--primary)" />
                <span>Lịch sử & Xuất file</span>
              </button>

              {studentName && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-main)', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.9rem' }}>
                  <User size={16} color="var(--primary)" />
                  <span style={{ fontWeight: 500 }}>{studentName}</span>
                  <button 
                    onClick={handleLogout} 
                    style={{ border: 'none', background: 'none', color: '#ef4444', cursor: 'pointer', marginLeft: '0.5rem', fontSize: '0.8rem', textDecoration: 'underline' }}
                  >
                    Đổi tên
                  </button>
                </div>
              )}
              <TimerBadge />
            </div>
          </header>
          
          <div className="page-container">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
