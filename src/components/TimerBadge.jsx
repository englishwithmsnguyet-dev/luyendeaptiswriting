import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const TimerBadge = () => {
  // Default APTIS Writing time is 50 minutes = 3000 seconds
  const [timeLeft, setTimeLeft] = useState(3000); 
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggleTimer = () => {
    if (timeLeft > 0) {
      setIsActive(!isActive);
    }
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className="timer-badge" 
      onClick={toggleTimer}
      title={isActive ? "Nhấn để tạm dừng" : "Nhấn để bắt đầu tính giờ"}
      style={{ 
        cursor: timeLeft > 0 ? 'pointer' : 'default', 
        userSelect: 'none',
        backgroundColor: timeLeft === 0 ? '#fee2e2' : undefined,
        color: timeLeft === 0 ? '#ef4444' : undefined,
        opacity: isActive ? 1 : 0.9,
        transition: 'all 0.2s',
        boxShadow: isActive ? '0 0 8px rgba(0,0,0,0.2)' : 'none'
      }}
    >
      <Clock size={18} style={{ opacity: isActive && timeLeft % 2 === 0 ? 0.5 : 1 }} />
      <span>{formatTime(timeLeft)}</span>
    </div>
  );
};

export default TimerBadge;
