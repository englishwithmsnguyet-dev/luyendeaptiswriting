import React from 'react';
import { ArrowRight, Info, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="page-title">Chào mừng đến với hệ thống luyện thi APTIS Writing</h1>
      <p className="page-description">
        Dành riêng cho học viên của <strong>English With Miss Nguyet</strong>. Hãy làm quen với cấu trúc bài thi và luyện tập để đạt kết quả tốt nhất.
      </p>

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
