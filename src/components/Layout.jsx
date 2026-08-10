import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { User } from 'lucide-react';
import LoginModal, { submitToGoogleForm } from './LoginModal';
import TimerBadge from './TimerBadge';

const Layout = () => {
  const [studentName, setStudentName] = useState(localStorage.getItem('aptis_student_name'));
  const [showLogin, setShowLogin] = useState(!studentName);

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
      <div className="app-container" style={{ filter: showLogin ? 'blur(4px)' : 'none', pointerEvents: showLogin ? 'none' : 'auto' }}>
        <Sidebar />
        <main className="main-content">
          <header className="top-header">
            <div className="header-title">APTIS Writing Practice Test</div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
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
