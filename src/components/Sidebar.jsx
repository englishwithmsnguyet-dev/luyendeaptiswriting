import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Edit3, MessageSquare, BookOpen, PenTool } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="brand-title">ENGLISH WITH</h1>
        <h2 className="brand-subtitle">MISS NGUYET</h2>
      </div>
      
      <nav className="nav-menu">
        <NavLink 
          to="/" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          end
        >
          <Home className="nav-icon" size={20} />
          <span>Trang Chủ</span>
        </NavLink>
        
        <NavLink 
          to="/part-1" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          <MessageSquare className="nav-icon" size={20} />
          <span>Writing Part 01</span>
        </NavLink>
        
        <NavLink 
          to="/part-2" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          <Edit3 className="nav-icon" size={20} />
          <span>Writing Part 02</span>
        </NavLink>
        
        <NavLink 
          to="/part-3" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          <BookOpen className="nav-icon" size={20} />
          <span>Writing Part 03</span>
        </NavLink>
        
        <NavLink 
          to="/part-4" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          <PenTool className="nav-icon" size={20} />
          <span>Writing Part 04</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
