import React, { useState, useEffect } from 'react';
import { ArrowRight, Info, CheckCircle2, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  const [progress, setProgress] = useState({
    p1: 0,
    p2: 0,
    p3: 0
  });

  const loadProgress = () => {
    const p1 = JSON.parse(localStorage.getItem('aptis_p1_completed') || '[]');
    const p2 = JSON.parse(localStorage.getItem('aptis_p2_completed') || '[]');
    const p3 = JSON.parse(localStorage.getItem('aptis_p3_completed') || '[]');
    setProgress({ p1: p1.length, p2: p2.length, p3: p3.length });
  };

  useEffect(() => {
    loadProgress();
    window.addEventListener('progressUpdate', loadProgress);
    return () => window.removeEventListener('progressUpdate', loadProgress);
  }, []);

  const handleClearProgress = () => {
    if (window.confirm('Bạn có chắc chắn muốn xóa toàn bộ tiến độ học (bao gồm câu trả lời và kết quả chấm điểm) không?')) {
      // Collect keys to remove to avoid clearing other potential site data not related to progress
      const keysToRemove = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('aptis_p')) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach(k => localStorage.removeItem(k));
      loadProgress();
      window.dispatchEvent(new Event('progressUpdate'));
      alert('Đã xóa toàn bộ tiến độ học thành công!');
    }
  };

  return (
    <div>
      <h1 className="page-title">Chào mừng đến với hệ thống luyện thi APTIS Writing</h1>
      <p className="page-description">
        Dành riêng cho học viên của <strong>English With Miss Nguyet</strong>. Hãy làm quen với cấu trúc bài thi và luyện tập để đạt kết quả tốt nhất.
      </p>

      {/* Progress Dashboard */}
      <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '4px solid #10B981' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', margin: 0 }}>
            <CheckCircle2 size={24} color="#10B981" />
            <span>Tiến độ học tập</span>
          </h2>
          <button 
            className="btn btn-secondary" 
            onClick={handleClearProgress}
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
          >
            <Trash2 size={16} /> Xóa tiến độ
          </button>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div style={{ padding: '1rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--primary)' }}>Part 1</strong>
              <span style={{ color: 'var(--text-muted)' }}>{progress.p1} / 40</span>
            </div>
            <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${(progress.p1 / 40) * 100}%`, height: '100%', background: '#10B981', transition: 'width 0.3s ease' }}></div>
            </div>
          </div>
          
          <div style={{ padding: '1rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--primary)' }}>Part 2</strong>
              <span style={{ color: 'var(--text-muted)' }}>{progress.p2} / 40</span>
            </div>
            <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${(progress.p2 / 40) * 100}%`, height: '100%', background: '#3b82f6', transition: 'width 0.3s ease' }}></div>
            </div>
          </div>
          
          <div style={{ padding: '1rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <strong style={{ color: 'var(--primary)' }}>Part 3</strong>
              <span style={{ color: 'var(--text-muted)' }}>{progress.p3} / 40</span>
            </div>
            <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${(progress.p3 / 40) * 100}%`, height: '100%', background: '#8b5cf6', transition: 'width 0.3s ease' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
          <Info size={24} />
          <span>Cấu trúc bài thi APTIS Writing</span>
        </h2>
        
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--secondary)' }}>
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Phần 1: Giao tiếp cơ bản (Word-level)</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Bạn sẽ tham gia vào một câu lạc bộ và phải trả lời 5 tin nhắn/câu hỏi ngắn từ các thành viên khác.</p>
            <ul style={{ listStylePosition: 'inside', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <li>Trả lời bằng 1-5 từ.</li>
              <li>Thời gian gợi ý: 3 phút.</li>
            </ul>
          </div>
          
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--secondary)' }}>
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Phần 2: Viết đoạn văn ngắn (Sentence-level)</h3>
            <p style={{ color: 'var(--text-muted)' }}>Viết thông tin cá nhân hoặc lý do tham gia câu lạc bộ (20-30 từ). Thời gian gợi ý: 7 phút.</p>
          </div>
          
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--secondary)' }}>
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Phần 3: Giao tiếp mạng xã hội (Paragraph-level)</h3>
            <p style={{ color: 'var(--text-muted)' }}>Trả lời 3 câu hỏi trên mạng xã hội của câu lạc bộ (30-40 từ/câu). Thời gian gợi ý: 10 phút.</p>
          </div>
          
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--secondary)' }}>
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Phần 4: Viết Email (Email-writing)</h3>
            <p style={{ color: 'var(--text-muted)' }}>Viết 1 email không trang trọng (50 từ) cho bạn bè và 1 email trang trọng (120-150 từ) cho ban quản lý. Thời gian gợi ý: 30 phút.</p>
          </div>
        </div>
      </div>

      <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ marginBottom: '0.5rem', color: 'var(--primary)' }}>Sẵn sàng bắt đầu?</h2>
          <p style={{ color: 'var(--text-muted)' }}>Hãy bắt đầu với Phần 1 để làm quen với giao diện nhé.</p>
        </div>
        <button className="btn btn-primary" onClick={() => navigate('/part-1')}>
          Bắt đầu Phần 1
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Home;
