import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Clock } from 'lucide-react';

const Layout = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <header className="top-header">
          <div className="header-title">APTIS Writing Practice Test</div>
          <div className="timer-badge">
            <Clock size={18} />
            <span>50:00</span>
          </div>
        </header>
        
        <div className="page-container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
