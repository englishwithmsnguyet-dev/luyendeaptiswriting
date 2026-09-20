import React, { useState, useEffect } from 'react';
import { part4Data, part4CommonTemplates } from '../data/part4Data';
import { 
  part4SlotHints, 
  standardEmotionsPositive, 
  standardEmotionsConcern, 
  standardMembershipTimes, 
  standardPerspectivesPositive, 
  standardPerspectivesConcern 
} from '../data/part4SlotHints';
import { saveClubHistory, clearClubHistory, getClubSavedTime, getSafeJSON } from '../utils/historyManager';
import PracticeActionBar from '../components/PracticeActionBar';
import { 
  ChevronDown, Mail, User, ShieldCheck, BookOpen, 
  Sparkles, Copy, Check, AlertTriangle, HelpCircle, Columns, 
  CheckCircle2, Award, Info, FileText,
  Save, Send, CheckCircle, AlertCircle, XCircle, RotateCcw
} from 'lucide-react';
import { exportToWord } from '../utils/exportToWord';

// Helper to render text with vivid yellow/gold highlight for all [ ... ] placeholders
export const renderHighlightedText = (text) => {
  if (!text) return null;
  const parts = text.split(/(\[[^\]]+\])/g);

  return parts.map((part, idx) => {
    if (part.startsWith('[') && part.endsWith(']')) {
      return (
        <span
          key={idx}
          style={{
            backgroundColor: '#fef08a',
            color: '#854d0e',
            padding: '1px 5px',
            borderRadius: '3px',
            fontWeight: '600',
            borderBottom: '2px solid #eab308'
          }}
        >
          {part}
        </span>
      );
    }
    return <span key={idx}>{part}</span>;
  });
};

// Helper to render model sample essay with vivid highlights for substituted slots
export const renderSampleWithHighlights = (text, emailType) => {
  if (!text) return null;

  const highlightStyle = {
    backgroundColor: '#fef08a',
    color: '#854d0e',
    padding: '2px 6px',
    borderRadius: '4px',
    fontWeight: 700,
    borderBottom: '2px solid #eab308',
    boxShadow: '0 1px 2px rgba(234, 179, 8, 0.15)',
    display: 'inline'
  };

  if (emailType === 'email1') {
    const email1Regex = /^(Dear Kim,[\s\n]+How is it going\? I thought you would like to know that\s+)([\s\S]+?)(\.\s*I was\s+)([\s\S]+?)(\s+(?:about it!|about it\.|to hear it!|to hear about it\.)[\s\n]+Personally, I think\s+)([\s\S]+?)(\.\s*Moreover,\s+)([\s\S]+?)(\.\s*What do you think\?(?:[\s\n]+Hope to hear from you soon\.)?[\s\n]+Take care,[\s\n]+Kato)$/;
    const m = text.match(email1Regex);
    if (m) {
      return (
        <span>
          {m[1]}
          <span style={highlightStyle} title="Ý thế vào từ Gợi ý: [thông tin trong đề bài]">{m[2]}</span>
          {m[3]}
          <span style={highlightStyle} title="Ý thế vào từ Gợi ý: [cảm xúc]">{m[4]}</span>
          {m[5]}
          <span style={highlightStyle} title="Ý thế vào từ Gợi ý: [ý kiến & lý do]">{m[6]}</span>
          {m[7]}
          <span style={highlightStyle} title="Ý thế vào từ Gợi ý: [phát triển thêm ý]">{m[8]}</span>
          {m[9]}
        </span>
      );
    }
  } else if (emailType === 'email2') {
    const email2Regex = /^(Dear Club (?:Manager|President),[\s\n]+My name is Kato, and I have been an active member of our club for\s+)([\s\S]+?)(\.\s*(?:During this time, I have participated in many meaningful activities\.\s*)?I am writing to share my views and offer several practical suggestions regarding\s+)([\s\S]+?)(\.\s*I firmly believe\s+)([\s\S]+?)(\.\s*\n\s*To help achieve the best outcome, I would like to make three practical proposals\.\s*\n\s*First,\s+)([\s\S]+?)(\.\s*\n\s*Second,\s+)([\s\S]+?)(\.\s*\n\s*Finally,\s+)([\s\S]+?)(\.\s*\n\s*Thank you for your time and consideration\.\s*I look forward to hearing your response\.\s*\n\s*Yours sincerely,\s*\n\s*Kato)$/;
    const m = text.match(email2Regex);
    if (m) {
      return (
        <span>
          {m[1]}
          <span style={highlightStyle} title="Ý thế vào từ Gợi ý: [thời gian tham gia]">{m[2]}</span>
          {m[3]}
          <span style={highlightStyle} title="Ý thế vào từ Gợi ý: [thông tin trong đề bài]">{m[4]}</span>
          {m[5]}
          <span style={highlightStyle} title="Ý thế vào từ Gợi ý: [nêu quan điểm về vấn đề đó]">{m[6]}</span>
          {m[7]}
          <span style={highlightStyle} title="Ý thế vào từ Gợi ý: [đề xuất thứ nhất]">{m[8]}</span>
          {m[9]}
          <span style={highlightStyle} title="Ý thế vào từ Gợi ý: [đề xuất thứ hai]">{m[10]}</span>
          {m[11]}
          <span style={highlightStyle} title="Ý thế vào từ Gợi ý: [đề xuất thứ ba]">{m[12]}</span>
          {m[13]}
        </span>
      );
    }
  }

  return renderHighlightedText(text);
};

// Comprehensive Grading & Error Detection Engine for Aptis Part 4
export const gradeEmail = async (taskKey, rawText, clubData) => {
  const text = (rawText || '').trim();
  const wordCount = text ? text.split(/\s+/).filter(Boolean).length : 0;

  if (!text || wordCount === 0) {
    return {
      score: 0,
      band: 'Chưa có bài',
      status: 'error',
      wordCount: 0,
      wordFeedback: 'Bạn chưa nhập nội dung bài làm.',
      registerFeedback: '',
      issues: [{ type: 'format', message: 'Vui lòng viết bài trước khi bấm nộp bài và chấm điểm.' }],
      summary: 'Bài làm đang để trống.'
    };
  }

  const isEmail1 = taskKey === 'email1';
  let score = 5.0;
  let wordCountPenalty = 0;
  let wordFeedback = '';
  let registerFeedback = '';
  const issues = [];

  // 1. Word Count Evaluation
  if (isEmail1) {
    if (wordCount < 35) {
      wordCountPenalty = 2.0;
      wordFeedback = `Độ dài quá ngắn (${wordCount} từ). Mục tiêu chuẩn là 45-55 từ (tối thiểu 40 từ).`;
    } else if (wordCount < 45) {
      wordCountPenalty = 0.5;
      wordFeedback = `Độ dài hơi ngắn (${wordCount} từ). Bạn nên viết thêm 1-2 câu để đạt khoảng 45-55 từ.`;
    } else if (wordCount > 65) {
      wordCountPenalty = 0.5;
      wordFeedback = `Độ dài hơi dài (${wordCount} từ). Tránh viết quá 65 từ để giữ bài gọn gàng và không mất thời gian.`;
    } else {
      wordFeedback = `Độ dài hoàn hảo (${wordCount} từ, đạt chuẩn 45-55 từ).`;
    }
  } else {
    if (wordCount < 95) {
      wordCountPenalty = 2.0;
      wordFeedback = `Độ dài quá ngắn (${wordCount} từ). Thư trang trọng Part 4 yêu cầu 120-150 từ.`;
    } else if (wordCount < 120) {
      wordCountPenalty = 0.5;
      wordFeedback = `Độ dài hơi ngắn (${wordCount} từ). Nên bổ sung giải thích hoặc đề xuất cụ thể để đạt 120-150 từ.`;
    } else if (wordCount > 165) {
      wordCountPenalty = 0.5;
      wordFeedback = `Độ dài hơi dài (${wordCount} từ). Nên giữ trong khoảng 120-165 từ để kiểm soát độ súc tích.`;
    } else {
      wordFeedback = `Độ dài xuất sắc (${wordCount} từ, chuẩn band B2-C1: 120-150 từ).`;
    }
  }

  // 2. Register & Tone Evaluation
  if (isEmail1) {
    const hasGreeting = /(dear\s+[a-z]+|hi\s+[a-z]+|hello\s+[a-z]+|hey\s+[a-z]+)/i.test(text);
    if (!hasGreeting) {
      issues.push({
        type: 'register',
        message: 'Thiếu lời chào thân mật ở đầu thư.',
        suggestion: 'Mở đầu bằng: "Dear Kim," hoặc "Hi Sam,"'
      });
      score -= 0.5;
    }

    const hasSignOff = /(take care|best regards|best|warmly|see you|cheers|yours|love)\b/i.test(text);
    if (!hasSignOff) {
      issues.push({
        type: 'register',
        message: 'Thiếu lời kết thư thân mật ở cuối bài.',
        suggestion: 'Kết thúc bằng: "Take care," hoặc "Hope to hear from you soon. Best,"'
      });
      score -= 0.5;
    }

    registerFeedback = 'Văn phong thân mật (Informal) gửi bạn bè: Chia sẻ cảm xúc cá nhân và rủ bạn cùng tham gia.';
  } else {
    // Contractions check for Formal Email
    const contractionsRegex = /\b([a-z]+'t|i'm|you're|he's|she's|it's|we're|they're|i've|you've|we've|they've|i'll|you'll|he'll|she'll|we'll|they'll|i'd|you'd|he'd|she'd|we'd|they'd)\b/gi;
    const matches = text.match(contractionsRegex) || [];
    const uniqueContractions = [...new Set(matches.map(m => m.toLowerCase()))];
    
    if (uniqueContractions.length > 0) {
      const penalty = Math.min(1.5, uniqueContractions.length * 0.5);
      score -= penalty;
      issues.push({
        type: 'register',
        message: `Thư trang trọng dùng từ viết tắt: "${uniqueContractions.join(', ')}". Trong thư gửi Quản lý CLB (Formal B2-C1), tuyệt đối không được viết tắt!`,
        suggestion: `Hãy đổi sang dạng viết đầy đủ (Ví dụ: "do not", "cannot", "I am", "it is", "I would",...).`
      });
      registerFeedback = `⚠️ Phát hiện ${uniqueContractions.length} từ viết tắt cần đổi sang dạng đầy đủ.`;
    } else {
      registerFeedback = '✅ Văn phong trang trọng chuẩn B2-C1 (không dùng từ viết tắt, cấu trúc lịch sự).';
    }

    const hasFormalGreeting = /(dear\s+(club\s+manager|manager|sir|madam|mr|ms|mrs|committee))/i.test(text);
    if (!hasFormalGreeting) {
      issues.push({
        type: 'register',
        message: 'Thiếu lời chào trang trọng gửi ban quản lý ở đầu thư.',
        suggestion: 'Mở đầu bằng: "Dear Club Manager," hoặc "Dear Sir/Madam,"'
      });
      score -= 0.5;
    }

    const hasFormalSignOff = /(best regards|sincerely|yours sincerely|yours faithfully|warm regards)/i.test(text);
    if (!hasFormalSignOff) {
      issues.push({
        type: 'register',
        message: 'Thiếu lời kết thư trang trọng ở cuối thư.',
        suggestion: 'Kết thúc bằng: "Best regards," hoặc "Yours sincerely,"'
      });
      score -= 0.5;
    }
  }

  // 3. Rule-based Grammar & Vocabulary Checks
  if (/\b(it|this|that|he|she)\s+(really\s+|always\s+|usually\s+|often\s+|sometimes\s+|never\s+)?(help|allow|make|give|take|improve|boost|widen|expand|create|think|want|need)\b/i.test(text)) {
    issues.push({
      type: 'grammar',
      message: 'Lỗi chia động từ số ít: Sau he/she/it/this/that cần thêm "s" hoặc "es".',
      suggestion: 'Ví dụ: "it helps", "this allows", "she thinks"'
    });
    score -= 0.5;
  }

  if (/\b(can|could|will|would|should|must)\s+(to)\b/i.test(text)) {
    issues.push({
      type: 'grammar',
      message: 'Không dùng "to" sau động từ khuyết thiếu (can, could, will, would, should, must).',
      suggestion: 'Sửa thành: "can do", "would make" (thay vì "can to do")'
    });
    score -= 0.5;
  }

  if (/\b(want|decide|need|hope)\s+(really\s+|always\s+)?(play|go|join|learn|improve|make|do|take|have|build|boost|expand)\b/i.test(text)) {
    issues.push({
      type: 'grammar',
      message: 'Cần thêm "to" giữa 2 động từ thường liền nhau (want to V, decide to V).',
      suggestion: 'Ví dụ: "want to join", "hope to hear"'
    });
    score -= 0.5;
  }

  if (/\bam\s+(really\s+|very\s+)?agree\b/i.test(text)) {
    issues.push({
      type: 'grammar',
      message: 'Không dùng "am agree" vì "agree" là động từ thường.',
      suggestion: 'Sửa thành: "I agree" hoặc "I completely agree"'
    });
    score -= 0.5;
  }

  if (/\bvery\s+(like|love|enjoy|hate)\b/i.test(text)) {
    issues.push({
      type: 'grammar',
      message: 'Không dùng "very" trực tiếp trước động từ (very like).',
      suggestion: 'Nên dùng: "really like" hoặc "like ... very much"'
    });
    score -= 0.5;
  }

  // 4. LanguageTool API Check
  try {
    const response = await fetch('https://api.languagetoolplus.com/v2/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      body: new URLSearchParams({
        text: text,
        language: 'en-US'
      })
    });

    if (response.ok) {
      const data = await response.json();
      if (data.matches && data.matches.length > 0) {
        data.matches.slice(0, 5).forEach(match => {
          let msg = match.message;
          const contextSnippet = match.context?.text || '';
          const suggestion = match.replacements && match.replacements.length > 0 
            ? match.replacements.slice(0, 3).map(r => r.value).join(', ') 
            : null;

          msg = msg.replace('Possible spelling mistake found.', 'Có thể bị lỗi chính tả')
                   .replace('Possible typo', 'Lỗi đánh máy')
                   .replace('This sentence does not start with an uppercase letter', 'Đầu câu chưa viết hoa chữ cái đầu');

          issues.push({
            type: match.rule?.issueType === 'misspelling' ? 'spelling' : 'grammar',
            message: `${msg}${contextSnippet ? ` (ngữ cảnh: "...${contextSnippet}...")` : ''}`,
            suggestion: suggestion ? `Gợi ý thay thế: "${suggestion}"` : undefined
          });
          score -= 0.5;
        });
      }
    }
  } catch (err) {
    console.warn("LanguageTool offline or unavailable, continuing with rule checks:", err);
  }

  score -= wordCountPenalty;
  if (score < 1.0) score = 1.0;
  score = Math.round(score * 10) / 10;

  let band = 'Band B2';
  let status = 'success';

  if (isEmail1) {
    if (score >= 4.5) band = 'Band B2 (Xuất sắc)';
    else if (score >= 3.5) band = 'Band B1 (Đạt chuẩn)';
    else band = 'Band A2 (Cần luyện thêm)';
  } else {
    if (score >= 4.5) band = 'Band C1 (Xuất sắc)';
    else if (score >= 3.5) band = 'Band B2 (Đạt chuẩn)';
    else if (score >= 2.5) band = 'Band B1 (Khá)';
    else band = 'Band A2 (Cần cải thiện)';
  }

  if (score >= 4.0) status = 'success';
  else if (score >= 2.5) status = 'warning';
  else status = 'error';

  let summary = '';
  if (issues.length === 0 && wordCountPenalty === 0) {
    summary = isEmail1 
      ? 'Bài làm xuất sắc! Đúng chuẩn số từ, văn phong thân mật tự nhiên và ngữ pháp chính xác.'
      : 'Bài làm xuất sắc! Đúng chuẩn số từ, văn phong trang trọng B2-C1, lập luận chặt chẽ và không phát hiện lỗi ngữ pháp.';
  } else {
    summary = `Hệ thống ghi nhận bài làm của bạn đạt ${score}/5 điểm (${band}). Bạn hãy xem chi tiết các góp ý và sửa lỗi bên dưới để hoàn thiện bài.`;
  }

  return {
    score,
    band,
    status,
    wordCount,
    wordFeedback,
    registerFeedback,
    issues,
    summary
  };
};

// Flat list of 19 Part 4 clubs
export const clubList = [
  { id: "Walking club", name: "Walking Club (Sự kiện đi bộ hàng tháng)" },
  { id: "Fitness club", name: "Fitness Club (Nâng cấp thiết bị tập & Tăng phí hội viên)" },
  { id: "Film club", name: "Film Club (Nhà phê bình phim & Thu hút người dự)" },
  { id: "Car club", name: "Car Club (Chuyến đi Châu Âu & Cử 2 đại diện)" },
  { id: "Garden club", name: "Garden Club 1 (Hủy nói chuyện Vườn Nhật, thay bằng Vườn Anh)" },
  { id: "Garden club 2", name: "Garden Club 2 (Trồng 50 cây ở công viên & Dạy kỹ năng làm vườn)" },
  { id: "Community club", name: "Community Club (Tuyển thành viên & Ý tưởng hoạt động)" },
  { id: "Music club", name: "Music Club (Khiếu nại tiếng ồn từ các buổi hòa nhạc)" },
  { id: "English club 1", name: "English Club 1 (Talk Show bị hủy do khách mời bận)" },
  { id: "English club 2", name: "English Club 2 (Tài trợ Talk Show về lợi ích tiếng Anh)" },
  { id: "Book club 1", name: "Book Club 1 (Mời tác giả nổi tiếng & Thu hút mọi lứa tuổi)" },
  { id: "Book club 2", name: "Book Club 2 (Đóng cửa thư viện vì xu hướng đọc online)" },
  { id: "Living home club", name: "Living Home Club (Lời khuyên cho người trẻ mua nhà sớm)" },
  { id: "Social club", name: "Social Club 1 (Gặp mặt trực tiếp hàng tháng cho mọi lứa tuổi)" },
  { id: "Social club 2", name: "Social Club 2 (Địa điểm họp mặt & Trong nhà vs Ngoài trời)" },
  { id: "Art club", name: "Art Club (Mời họa sĩ nói chuyện trước công chúng)" },
  { id: "Food club", name: "Food Club (Tình nguyện làm diễn giả cùng đầu bếp nổi tiếng)" },
  { id: "Beautiful homes club", name: "Beautiful Homes Club (Phá dỡ công trình cũ xây chung cư)" },
  { id: "Sports club", name: "Sports Club (Tổ chức thi đấu thể thao cho thành viên trẻ)" }
];


const Part4 = () => {
  const [selectedClub, setSelectedClub] = useState('Walking club');
  const [clubData, setClubData] = useState(part4Data['Walking club'] || part4Data[Object.keys(part4Data)[0]]);
  
  const [answers, setAnswers] = useState({ email1: '', email2: '' });
  const [completedClubs, setCompletedClubs] = useState([]);
  const [lastSavedTime, setLastSavedTime] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Active top tab: 'practice' | 'templates' | 'style-guide'
  const [activeTab, setActiveTab] = useState('practice');

  // Workspace subview: 'all' (sequential) | 'email1' | 'email2'
  const [workspaceMode, setWorkspaceMode] = useState('all');

  // Toggles for helpers
  const [showNoticeVi, setShowNoticeVi] = useState(false);
  const [showPromptAnalysis, setShowPromptAnalysis] = useState(false);

  const [showEmail1InstructionVi, setShowEmail1InstructionVi] = useState(false);
  const [email1HelperTab, setEmail1HelperTab] = useState('template'); // 'template' | 'sample' | 'none'

  const [showEmail2InstructionVi, setShowEmail2InstructionVi] = useState(false);
  const [email2HelperTab, setEmail2HelperTab] = useState('template'); // 'template' | 'sample' | 'none'

  // Copied toast state
  const [copiedKey, setCopiedKey] = useState(null);

  // Detailed Grading & Correction State for Part 4
  const [gradingResults, setGradingResults] = useState({ email1: null, email2: null });
  const [isGrading, setIsGrading] = useState({ email1: false, email2: false });

  const showToast = (text, type = 'success') => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Load completed clubs on mount & when storage changes
  useEffect(() => {
    const loadCompleted = () => {
      setCompletedClubs(getSafeJSON('aptis_p4_completed', []));
    };
    loadCompleted();
    window.addEventListener('progressUpdate', loadCompleted);
    return () => window.removeEventListener('progressUpdate', loadCompleted);
  }, []);

  // When selected club changes, load saved answers and grades
  useEffect(() => {
    const data = part4Data[selectedClub];
    if (data) {
      setClubData(data);
    }
    
    const saved = localStorage.getItem(`aptis_p4_answers_${selectedClub}`);
    setLastSavedTime(getClubSavedTime(4, selectedClub));

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setAnswers({ email1: parsed.email1 || '', email2: parsed.email2 || '' });
      } catch {
        setAnswers({ email1: '', email2: '' });
      }
    } else {
      setAnswers({ email1: '', email2: '' });
    }

    const savedGrades = localStorage.getItem(`aptis_p4_grades_${selectedClub}`);
    if (savedGrades) {
      try {
        setGradingResults(JSON.parse(savedGrades));
      } catch {
        setGradingResults({ email1: null, email2: null });
      }
    } else {
      setGradingResults({ email1: null, email2: null });
    }
  }, [selectedClub]);

  const getWordCount = (text) => {
    if (!text || !text.trim()) return 0;
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  const handleAnswerChange = (emailKey, value) => {
    const updated = { ...answers, [emailKey]: value };
    setAnswers(updated);
    
    // Auto-save to localStorage
    if (updated.email1?.trim() || updated.email2?.trim()) {
      localStorage.setItem(`aptis_p4_answers_${selectedClub}`, JSON.stringify(updated));
    } else {
      localStorage.removeItem(`aptis_p4_answers_${selectedClub}`);
    }
  };

  // Student proactively clicks Save for a single email
  const handleSaveEmail = (emailKey) => {
    const updated = { ...answers };
    localStorage.setItem(`aptis_p4_answers_${selectedClub}`, JSON.stringify(updated));
    const time = saveClubHistory(4, selectedClub, updated);
    setLastSavedTime(time);
    showToast(`Đã lưu bài làm ${emailKey === 'email1' ? 'Email 1 (Gửi bạn)' : 'Email 2 (Gửi Quản lý)'} thành công! (${time || 'Vừa xong'})`, 'success');
  };

  // Submit and grade a single email with detailed correction
  const handleGradeEmail = async (emailKey) => {
    setIsGrading(prev => ({ ...prev, [emailKey]: true }));
    try {
      const res = await gradeEmail(emailKey, answers[emailKey], clubData);
      setGradingResults(prev => {
        const updated = { ...prev, [emailKey]: res };
        localStorage.setItem(`aptis_p4_grades_${selectedClub}`, JSON.stringify(updated));
        return updated;
      });

      const count1 = getWordCount(answers.email1);
      const count2 = getWordCount(answers.email2);
      if (count1 >= 40 && count2 >= 100) {
        const completed = getSafeJSON('aptis_p4_completed', []);
        if (!completed.includes(selectedClub)) {
          completed.push(selectedClub);
          localStorage.setItem('aptis_p4_completed', JSON.stringify(completed));
          window.dispatchEvent(new Event('progressUpdate'));
        }
      }

      showToast(`Đã chấm ${emailKey === 'email1' ? 'Email 1' : 'Email 2'}: ${res.score}/5 điểm (${res.band})!`, res.status === 'error' ? 'warning' : 'success');
    } catch (err) {
      console.error("Grading error:", err);
      showToast('Có lỗi xảy ra khi chấm bài. Vui lòng thử lại!', 'warning');
    } finally {
      setIsGrading(prev => ({ ...prev, [emailKey]: false }));
    }
  };

  const handleResetEmailGrade = (emailKey) => {
    setGradingResults(prev => {
      const updated = { ...prev, [emailKey]: null };
      localStorage.setItem(`aptis_p4_grades_${selectedClub}`, JSON.stringify(updated));
      return updated;
    });
  };

  // Student proactively clicks Save
  const handleManualSave = () => {
    const time = saveClubHistory(4, selectedClub, answers);
    setLastSavedTime(time);

    const count1 = getWordCount(answers.email1);
    const count2 = getWordCount(answers.email2);

    if (count1 > 20 && count2 > 50) {
      const completed = getSafeJSON('aptis_p4_completed', []);
      if (!completed.includes(selectedClub)) {
        completed.push(selectedClub);
        localStorage.setItem('aptis_p4_completed', JSON.stringify(completed));
        window.dispatchEvent(new Event('progressUpdate'));
      }
    }

    showToast(`Đã lưu bài làm Part 4 "${clubData.title}" thành công! (${time})`, 'success');
    return time;
  };

  const handleClearCurrentClub = () => {
    clearClubHistory(4, selectedClub);
    setAnswers({ email1: '', email2: '' });
    setGradingResults({ email1: null, email2: null });
    localStorage.removeItem(`aptis_p4_grades_${selectedClub}`);
    setLastSavedTime(null);
    showToast(`Đã xoá bài làm của "${clubData.title}". Bạn có thể làm lại từ đầu!`, 'warning');
  };

  const handleExportWord = () => {
    exportToWord(4, selectedClub, answers, clubData);
    showToast('Đang tạo và tải xuống file Word bài làm Part 4 của bạn...', 'info');
  };

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    showToast('Đã sao chép nội dung vào khay nhớ tạm!', 'success');
    setTimeout(() => setCopiedKey(null), 2500);
  };

  // Contraction checking for Email 2 (formal)
  const contractionsRegex = /\b(can't|don't|won't|it's|i'm|i've|i'll|i'd|we're|they're|you're|didn't|doesn't|isn't|aren't|wasn't|weren't|haven't|hasn't|hadn't)\b/gi;
  const email2Contractions = (answers.email2.match(contractionsRegex) || []);

  const email1Count = getWordCount(answers.email1);
  const email2Count = getWordCount(answers.email2);

  const isEmail1InRange = email1Count >= 40 && email1Count <= 60;
  const isEmail1TooShort = email1Count > 0 && email1Count < 40;
  const isEmail1TooLong = email1Count > 60;

  const isEmail2InRange = email2Count >= 120 && email2Count <= 150;
  const isEmail2TooShort = email2Count > 0 && email2Count < 120;
  const isEmail2TooLong = email2Count > 165;

  // Active club slot hints & templates
  const activeClubHints = part4SlotHints[selectedClub] || {
    e1Topic: { en: clubData?.title || 'the upcoming club event', vi: 'sự kiện sắp tới của CLB' },
    e2Topic: { en: clubData?.title || 'the club announcement', vi: 'thông báo của CLB' },
    positive: true
  };
  const isPositiveClub = activeClubHints.positive;
  const activeEmotions = isPositiveClub ? standardEmotionsPositive : standardEmotionsConcern;
  const activePerspectives = isPositiveClub ? standardPerspectivesPositive : standardPerspectivesConcern;

  const email1Template = `Dear Kim,

How is it going? I thought you would like to know that [thông tin trong đề bài]. I was [cảm xúc] to hear about it.

Personally, I think [ý kiến & lý do]. Moreover, [phát triển thêm ý]. What do you think? Hope to hear from you soon.

Take care,
Kato`;

  const email2Template = `Dear Club Manager,

My name is Kato, and I have been an active member of our club for [thời gian tham gia]. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding [thông tin trong đề bài]. I firmly believe [nêu quan điểm về vấn đề đó].

To help achieve the best outcome, I would like to make three practical proposals.
First, [đề xuất thứ nhất].
Second, [đề xuất thứ hai].
Finally, [đề xuất thứ ba].

Thank you for your time and consideration. I look forward to hearing your response.

Yours sincerely,
Kato`;

  return (
    <div className="part-container" style={{ width: '100%', margin: '0 auto' }}>
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          backgroundColor: toastMessage.type === 'warning' ? '#f59e0b' : (toastMessage.type === 'info' ? '#2563eb' : '#10b981'),
          color: 'white',
          padding: '0.85rem 1.4rem',
          borderRadius: '8px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          fontWeight: 600,
          fontSize: '0.95rem'
        }}>
          {toastMessage.type === 'warning' ? <AlertTriangle size={20} /> : <CheckCircle2 size={20} />}
          <span>{toastMessage.text}</span>
        </div>
      )}

      {/* Header Bar */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '1.25rem',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
            <span style={{ 
              backgroundColor: '#eff6ff', 
              color: '#2563eb', 
              padding: '0.2rem 0.6rem', 
              borderRadius: '6px', 
              fontSize: '0.8rem', 
              fontWeight: 800,
              letterSpacing: '0.5px' 
            }}>
              APTIS Writing Master
            </span>
            <span style={{ color: '#64748b', fontSize: '0.85rem' }}>• Thời gian gợi ý: 30 phút</span>
          </div>
          <h1 className="page-title" style={{ margin: 0, fontSize: '1.75rem', color: '#0f172a' }}>
            Writing Part 04: Viết 2 Email
          </h1>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: '0.25rem 0 0 0' }}>
            Email 1 gửi bạn thân (~50 từ, thân mật) & Email 2 gửi Quản lý CLB (120 - 150 từ, trang trọng chuẩn B2-C1).
          </p>
        </div>
        
        {/* Grouped Club Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <label style={{ fontSize: '0.88rem', fontWeight: 700, color: '#475569' }}>Chọn đề luyện tập:</label>
          <div style={{ position: 'relative', minWidth: '280px' }}>
            <select 
              value={selectedClub} 
              onChange={(e) => setSelectedClub(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 2.25rem 0.65rem 1rem',
                appearance: 'none',
                backgroundColor: 'white',
                border: '2px solid #cbd5e1',
                borderRadius: '8px',
                fontSize: '0.92rem',
                color: '#0f172a',
                fontWeight: '600',
                cursor: 'pointer',
                outline: 'none',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
              }}
            >
              {clubList.map(c => (
                <option key={c.id} value={c.id}>
                  {completedClubs.includes(c.id) ? `✅ ${c.name}` : c.name}
                </option>
              ))}
            </select>
            <ChevronDown 
              size={18} 
              color="#64748b" 
              style={{ position: 'absolute', right: '0.85rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} 
            />
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <PracticeActionBar 
        partName="Writing Part 04"
        partNumber={4}
        clubName={selectedClub}
        lastSavedTime={lastSavedTime}
        onSave={handleManualSave}
        onClear={handleClearCurrentClub}
        onExportWord={handleExportWord}
      />

      {/* Navigation Tabs */}
      <div style={{ 
        display: 'flex', 
        gap: '0.5rem', 
        marginBottom: '1.5rem', 
        borderBottom: '2px solid #e2e8f0',
        paddingBottom: '0.25rem'
      }}>
        <button
          type="button"
          onClick={() => setActiveTab('practice')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.65rem 1.25rem',
            fontSize: '0.95rem',
            fontWeight: 700,
            color: activeTab === 'practice' ? '#2563eb' : '#64748b',
            backgroundColor: activeTab === 'practice' ? '#eff6ff' : 'transparent',
            border: 'none',
            borderBottom: activeTab === 'practice' ? '3px solid #2563eb' : '3px solid transparent',
            borderRadius: '6px 6px 0 0',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          <Mail size={18} />
          ⚡ Luyện viết & Làm bài
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('templates')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.65rem 1.25rem',
            fontSize: '0.95rem',
            fontWeight: 700,
            color: activeTab === 'templates' ? '#4f46e5' : '#64748b',
            backgroundColor: activeTab === 'templates' ? '#eef2ff' : 'transparent',
            border: 'none',
            borderBottom: activeTab === 'templates' ? '3px solid #4f46e5' : '3px solid transparent',
            borderRadius: '6px 6px 0 0',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          <BookOpen size={18} />
          📖 Khung sườn chi tiết 2 Email
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('style-guide')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.65rem 1.25rem',
            fontSize: '0.95rem',
            fontWeight: 700,
            color: activeTab === 'style-guide' ? '#0d9488' : '#64748b',
            backgroundColor: activeTab === 'style-guide' ? '#f0fdfa' : 'transparent',
            border: 'none',
            borderBottom: activeTab === 'style-guide' ? '3px solid #0d9488' : '3px solid transparent',
            borderRadius: '6px 6px 0 0',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          <Sparkles size={18} />
          ⚖️ So sánh: Thân mật vs Trang trọng
        </button>
      </div>

      {/* ======================================================== */}
      {/* TAB 1: WORKSPACE / PRACTICE */}
      {/* ======================================================== */}
      {activeTab === 'practice' && (
        <div>
          {/* Section 1: Official Club Notice */}
          <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '4px solid #2563eb', padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={20} color="#2563eb" />
                <span style={{ fontWeight: 800, color: '#1e3a8a', fontSize: '1rem', textTransform: 'uppercase' }}>
                  Thông báo từ câu lạc bộ ({clubData.title})
                </span>
                {clubData.badge && (
                  <span style={{ backgroundColor: '#f1f5f9', color: '#475569', fontSize: '0.75rem', padding: '0.15rem 0.5rem', borderRadius: '12px', border: '1px solid #cbd5e1', fontWeight: 600 }}>
                    {clubData.badge}
                  </span>
                )}
              </div>

              <div style={{ display: 'flex', gap: '0.4rem' }}>
                {clubData.promptAnalysis && (
                  <button 
                    className={`btn-translate ${showPromptAnalysis ? 'active' : ''}`}
                    onClick={() => setShowPromptAnalysis(!showPromptAnalysis)}
                    title="Phân tích đề bài nhanh"
                  >
                    {showPromptAnalysis ? 'Ẩn phân tích' : '📌 Phân tích đề'}
                  </button>
                )}
                {clubData.noticeVi && (
                  <button 
                    className={`btn-translate ${showNoticeVi ? 'active' : ''}`}
                    onClick={() => setShowNoticeVi(!showNoticeVi)}
                    title="Dịch thông báo sang tiếng Việt"
                  >
                    {showNoticeVi ? 'Ẩn dịch' : '🇻🇳 Dịch thông báo'}
                  </button>
                )}
              </div>
            </div>

            {/* English Notice text */}
            <div style={{ 
              backgroundColor: '#f8fafc', 
              padding: '1rem 1.25rem', 
              borderRadius: '8px', 
              fontSize: '1rem', 
              lineHeight: '1.65', 
              color: '#1e293b', 
              whiteSpace: 'pre-line',
              border: '1px solid #e2e8f0',
              fontWeight: 500
            }}>
              {clubData.notice}
            </div>

            {/* Vietnamese Notice translation */}
            {showNoticeVi && clubData.noticeVi && (
              <div style={{ 
                color: '#065f46', 
                backgroundColor: '#ecfdf5',
                fontSize: '0.92rem', 
                fontStyle: 'italic', 
                marginTop: '0.75rem', 
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                borderLeft: '3px solid #10b981',
                lineHeight: '1.6',
                whiteSpace: 'pre-line'
              }}>
                <strong style={{ fontStyle: 'normal', display: 'block', marginBottom: '0.2rem', color: '#047857' }}>
                  🇻🇳 Bản dịch tiếng Việt:
                </strong>
                {clubData.noticeVi}
              </div>
            )}

            {/* Prompt Analysis */}
            {showPromptAnalysis && clubData.promptAnalysis && (
              <div style={{ 
                marginTop: '0.75rem', 
                padding: '0.75rem 1rem', 
                backgroundColor: '#eff6ff', 
                borderRadius: '6px', 
                border: '1px solid #bfdbfe',
                fontSize: '0.88rem',
                color: '#1e3a8a',
                lineHeight: '1.55'
              }}>
                <div><strong>📌 Chủ đề chính:</strong> {clubData.promptAnalysis.topic}</div>
                <div style={{ marginTop: '0.35rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.84rem', color: '#475569' }}>
                  <span>✉️ <strong>Task 1:</strong> {clubData.promptAnalysis.task1}</span>
                  <span>🏢 <strong>Task 2:</strong> {clubData.promptAnalysis.task2}</span>
                </div>
              </div>
            )}
          </div>

          {/* Sub-view Switcher for writing tasks */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '1.25rem',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              <button
                type="button"
                onClick={() => setWorkspaceMode('all')}
                style={{
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: workspaceMode === 'all' ? '#0f172a' : '#ffffff',
                  color: workspaceMode === 'all' ? '#ffffff' : '#475569',
                  cursor: 'pointer'
                }}
              >
                📑 Làm cả 2 Email (Tuần tự)
              </button>
              <button
                type="button"
                onClick={() => setWorkspaceMode('email1')}
                style={{
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  borderRadius: '6px',
                  border: '1px solid #a7f3d0',
                  backgroundColor: workspaceMode === 'email1' ? '#059669' : '#ffffff',
                  color: workspaceMode === 'email1' ? '#ffffff' : '#065f46',
                  cursor: 'pointer'
                }}
              >
                ✉️ Chỉ Email 1 (Bạn bè - 50 từ)
              </button>
              <button
                type="button"
                onClick={() => setWorkspaceMode('email2')}
                style={{
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  borderRadius: '6px',
                  border: '1px solid #bfdbfe',
                  backgroundColor: workspaceMode === 'email2' ? '#2563eb' : '#ffffff',
                  color: workspaceMode === 'email2' ? '#ffffff' : '#1e40af',
                  cursor: 'pointer'
                }}
              >
                🏢 Chỉ Email 2 (Quản lý - 120-150 từ)
              </button>
            </div>

            <div style={{ fontSize: '0.84rem', color: '#64748b' }}>
              💡 Mẹo: Bấm <strong>"Gợi ý cấu trúc"</strong> để xem khung sườn mẫu & từ vựng gợi ý theo đề bài
            </div>
          </div>

          {/* ======================================================== */}
          {/* SECTION 2: TASK 1 - EMAIL TO FRIEND (INFORMAL) */}
          {/* ======================================================== */}
          {(workspaceMode === 'all' || workspaceMode === 'email1') && (
            <div className="card" style={{ marginBottom: '2.5rem', borderLeft: '4px solid #10b981', padding: '1.5rem' }}>
              {/* Task 1 Top Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid #e2e8f0', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#059669', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                    1
                  </div>
                  <div>
                    <strong style={{ color: '#065f46', fontSize: '1.1rem' }}>{clubData.email1.title}</strong>
                    <span style={{ marginLeft: '0.6rem', fontSize: '0.78rem', backgroundColor: '#d1fae5', color: '#065f46', padding: '0.2rem 0.6rem', borderRadius: '12px', fontWeight: 700 }}>
                      Mục tiêu: 45 - 55 từ (Tối đa 65 từ)
                    </span>
                  </div>
                </div>
                <div style={{ fontSize: '0.84rem', color: '#64748b' }}>
                  Phong cách: <strong>Thân mật (Informal)</strong> • Thời gian gợi ý: ~8 - 10 phút
                </div>
              </div>

              {/* 2-Column Grid */}
              <div className="part4-split-grid">
                {/* CỘT TRÁI: ĐỀ BÀI & GỢI Ý */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {/* Đề bài (Prompt Box) */}
                  <div style={{ 
                    backgroundColor: '#f8fafc', 
                    padding: '1rem 1.15rem', 
                    borderRadius: '8px', 
                    border: '1.5px solid #e2e8f0',
                    borderLeft: '4px solid #059669' 
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#065f46', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        📋 Đề bài Email 1:
                      </span>
                      {clubData.email1.instructionVi && (
                        <button 
                          className={`btn-translate ${showEmail1InstructionVi ? 'active' : ''}`}
                          onClick={() => setShowEmail1InstructionVi(!showEmail1InstructionVi)}
                          style={{ fontSize: '0.78rem', padding: '0.25rem 0.55rem' }}
                          title="Dịch yêu cầu bài viết"
                        >
                          {showEmail1InstructionVi ? 'Ẩn dịch' : '🇻🇳 Dịch đề'}
                        </button>
                      )}
                    </div>
                    <div style={{ fontSize: '0.96rem', color: '#1e293b', lineHeight: '1.6', fontWeight: 500 }}>
                      {clubData.email1.instruction}
                    </div>
                    {showEmail1InstructionVi && clubData.email1.instructionVi && (
                      <div style={{ 
                        marginTop: '0.65rem', 
                        paddingTop: '0.65rem', 
                        borderTop: '1px dashed #cbd5e1', 
                        color: '#065f46', 
                        fontSize: '0.9rem', 
                        fontStyle: 'italic',
                        lineHeight: '1.5'
                      }}>
                        🇻🇳 {clubData.email1.instructionVi}
                      </div>
                    )}
                  </div>

                  {/* Action Tabs for Left Column */}
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <button 
                      className={`btn-translate ${email1HelperTab === 'template' ? 'active' : ''}`}
                      onClick={() => setEmail1HelperTab(email1HelperTab === 'template' ? 'none' : 'template')}
                      title="Xem gợi ý cấu trúc & từ vựng B2+"
                    >
                      💡 Gợi ý cấu trúc & Từ vựng
                    </button>
                    <button 
                      className={`btn-translate ${email1HelperTab === 'sample' ? 'active' : ''}`}
                      onClick={() => setEmail1HelperTab(email1HelperTab === 'sample' ? 'none' : 'sample')}
                      title="Xem bài mẫu chuẩn band B2+ và phân tích"
                    >
                      📝 Bài mẫu chuẩn (B2+)
                    </button>
                    {email1HelperTab !== 'none' && (
                      <button
                        type="button"
                        onClick={() => setEmail1HelperTab('none')}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#64748b',
                          fontSize: '0.8rem',
                          cursor: 'pointer',
                          padding: '0.25rem 0.5rem',
                          textDecoration: 'underline'
                        }}
                        title="Đóng phần gợi ý / bài mẫu"
                      >
                        Ẩn
                      </button>
                    )}
                  </div>

                  {/* Gợi ý cấu trúc & Từ vựng Box */}
                  {email1HelperTab === 'template' && (
                    <div style={{ 
                      padding: '1rem 1.15rem', 
                      backgroundColor: '#f8fafc', 
                      borderRadius: '8px',
                      border: '1.5px solid #e2e8f0',
                      borderLeft: '4px solid #f59e0b',
                      fontSize: '0.92rem',
                      lineHeight: '1.6',
                      boxSizing: 'border-box'
                    }}>
                      {/* Highlighted Template */}
                      <div style={{ marginBottom: '1.25rem' }}>
                        <div style={{ fontWeight: 800, color: '#b45309', fontSize: '0.9rem', marginBottom: '0.6rem' }}>
                          💡 KHUNG CẤU TRÚC MẪU (EMAIL 1 - THÂN MẬT):
                        </div>

                        <div style={{ 
                          backgroundColor: '#ffffff',
                          border: '1.5px solid #e2e8f0',
                          borderRadius: '8px',
                          padding: '1rem 1.15rem',
                          lineHeight: '1.85',
                          fontSize: '0.96rem',
                          color: '#1e293b',
                          whiteSpace: 'pre-wrap',
                          textAlign: 'justify',
                          boxSizing: 'border-box'
                        }}>
                          {renderHighlightedText(email1Template)}
                        </div>
                      </div>

                      {/* GỢI Ý ĐIỀN ĐÚNG CÁC CHỖ [ ... ] CHO ĐỀ NÀY */}
                      <div style={{ paddingTop: '1rem', borderTop: '1.5px dashed #cbd5e1', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                        <div style={{ fontWeight: 800, color: '#b45309', fontSize: '0.88rem' }}>
                          🎯 GỢI Ý ĐIỀN VÀO CÁC CHỖ [ ... ] CHO ĐỀ NÀY:
                        </div>

                        {/* Chỗ thay 1: [thông tin trong đề bài] */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                          <div style={{ fontWeight: 700, fontSize: '0.86rem', color: '#0f172a' }}>
                            📍 [thông tin trong đề bài]:
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                            <div
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                backgroundColor: '#ffffff',
                                border: '1px solid #cbd5e1',
                                borderRadius: '6px',
                                padding: '0.35rem 0.65rem',
                                boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                              }}
                            >
                              <span className="p4-en-hint" style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontWeight: 800, color: '#0f172a' }}>
                                {activeClubHints.e1Topic.en}
                              </span>{' '}
                              <span style={{ color: '#64748b', fontWeight: 400, marginLeft: '0.35rem' }}>({activeClubHints.e1Topic.vi})</span>
                            </div>
                          </div>
                        </div>

                        {/* Chỗ thay 2: [cảm xúc] */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                          <div style={{ fontWeight: 700, fontSize: '0.86rem', color: '#0f172a' }}>
                            📍 [cảm xúc]:
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                            {activeEmotions.map((item, idx) => (
                              <div
                                key={idx}
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  backgroundColor: '#ffffff',
                                  border: '1px solid #cbd5e1',
                                  borderRadius: '6px',
                                  padding: '0.35rem 0.65rem',
                                  boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                                }}
                              >
                                <span className="p4-en-hint" style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontWeight: 800, color: '#0f172a' }}>
                                  {item.en}
                                </span>{' '}
                                <span style={{ color: '#64748b', fontWeight: 400, marginLeft: '0.35rem' }}>({item.vi})</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Chỗ thay 3 & 4: Ý kiến & Lý do, Phát triển thêm ý (Mệnh đề hoàn chỉnh) */}
                        {clubData.email1.vocabCategories && clubData.email1.vocabCategories
                          .filter(cat => !cat.name.toLowerCase().includes('cảm xúc') && !cat.name.toLowerCase().includes('emotion'))
                          .map((cat, idx) => {
                            const isOpinion = cat.name.toLowerCase().includes('ý kiến') || cat.name.toLowerCase().includes('quan điểm') || cat.name.toLowerCase().includes('lý do') || idx === 0;
                            const slotLabel = isOpinion ? '[ý kiến & lý do]' : '[phát triển thêm ý]';

                          return (
                            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                              <div style={{ fontWeight: 700, fontSize: '0.86rem', color: '#0f172a' }}>
                                📍 {slotLabel}: <span style={{ color: '#d97706', fontWeight: 600 }}>{cat.name.replace(/^[0-9.]+\s*/, '')}</span>
                              </div>
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                {cat.items.map((item, i) => (
                                  <div
                                    key={i}
                                    style={{
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      backgroundColor: '#ffffff',
                                      border: '1px solid #cbd5e1',
                                      borderRadius: '6px',
                                      padding: '0.35rem 0.65rem',
                                      boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                                    }}
                                  >
                                    <span className="p4-en-hint" style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontWeight: 800, color: '#0f172a' }}>
                                      {item.en}
                                    </span>{' '}
                                    {item.vi && <span style={{ color: '#64748b', fontWeight: 400, marginLeft: '0.35rem' }}>({item.vi})</span>}
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Bài mẫu chuẩn Box */}
                  {email1HelperTab === 'sample' && clubData.email1.samples && clubData.email1.samples.length > 0 && (
                    <div style={{ 
                      padding: '1rem', 
                      backgroundColor: '#ffffff', 
                      border: '1.5px solid #bbf7d0',
                      borderRadius: '8px'
                    }}>
                      <div style={{ fontWeight: 700, color: '#065f46', marginBottom: '0.6rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>📝 BÀI MẪU CHUẨN (EMAIL 1 - THÂN MẬT):</span>
                        <span style={{ fontSize: '0.82rem', color: '#047857', backgroundColor: '#dcfce7', padding: '0.15rem 0.5rem', borderRadius: '4px', fontWeight: 600 }}>
                          Độ dài: {clubData.email1.samples[0].wordCount} từ
                        </span>
                      </div>

                      {/* Chú thích các chỗ thế vào */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        padding: '0.45rem 0.75rem',
                        backgroundColor: '#fefce8',
                        border: '1px solid #fef08a',
                        borderRadius: '6px',
                        fontSize: '0.82rem',
                        color: '#854d0e',
                        marginBottom: '0.65rem',
                        lineHeight: '1.45'
                      }}>
                        <span style={{ fontSize: '1rem' }}>💡</span>
                        <span><strong>Chú thích:</strong> Các cụm từ <span style={{ backgroundColor: '#fef08a', color: '#854d0e', padding: '1px 5px', borderRadius: '3px', fontWeight: 700, borderBottom: '2px solid #eab308' }}>được tô vàng</span> là nội dung lấy từ Gợi ý thế vào các vị trí <strong>[ ... ]</strong> của Template.</span>
                      </div>

                      <div style={{ 
                        fontFamily: 'inherit', 
                        fontSize: '0.94rem', 
                        lineHeight: '1.8', 
                        color: '#0f172a', 
                        whiteSpace: 'pre-wrap',
                        backgroundColor: '#f8fafc',
                        padding: '0.9rem 1rem',
                        borderRadius: '6px',
                        border: '1px solid #e2e8f0',
                        margin: '0 0 0.65rem 0',
                        textAlign: 'justify'
                      }}>
                        {renderSampleWithHighlights(clubData.email1.samples[0].en, 'email1')}
                      </div>
                      <div style={{ 
                        fontSize: '0.86rem', 
                        color: '#065f46', 
                        backgroundColor: '#ecfdf5', 
                        padding: '0.65rem 0.85rem', 
                        borderRadius: '6px', 
                        borderLeft: '3px solid #10b981', 
                        lineHeight: '1.55', 
                        whiteSpace: 'pre-line' 
                      }}>
                        <strong style={{ display: 'block', marginBottom: '0.2rem' }}>🇻🇳 Bản dịch đối chiếu:</strong>
                        {clubData.email1.samples[0].vi}
                      </div>
                    </div>
                  )}
                </div>

                {/* CỘT PHẢI: KHUNG ĐÁNH ĐÁP ÁN */}
                <div style={{ 
                  backgroundColor: '#ffffff',
                  border: '1.5px solid #e2e8f0',
                  borderLeft: '4px solid #059669',
                  borderRadius: '8px',
                  padding: '1rem 1.15rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  height: '100%',
                  boxSizing: 'border-box'
                }}>
                  {/* Editor Top Bar: Title & Word Count */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0f172a' }}>
                        ✍️ Ô ĐÁNH ĐÁP ÁN (EMAIL 1)
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {gradingResults.email1 && (
                        <span style={{ 
                          backgroundColor: '#d1fae5', 
                          color: '#065f46', 
                          padding: '0.2rem 0.6rem', 
                          borderRadius: '12px', 
                          fontWeight: 800, 
                          fontSize: '0.78rem', 
                          border: '1px solid #a7f3d0' 
                        }}>
                          🏆 {gradingResults.email1.score}/5 ({gradingResults.email1.band})
                        </span>
                      )}
                      <span style={{ 
                        fontSize: '0.92rem', 
                        fontWeight: 800, 
                        color: isEmail1InRange ? '#059669' : (email1Count === 0 ? '#64748b' : '#d97706') 
                      }}>
                        {email1Count} từ
                      </span>
                      <span style={{ fontSize: '0.78rem', color: isEmail1InRange ? '#059669' : '#64748b', fontWeight: 600 }}>
                        {isEmail1InRange ? '✅ Chuẩn số từ' : (isEmail1TooShort ? '⚠️ Quá ngắn (<40)' : (isEmail1TooLong ? '⚠️ Quá dài (>60)' : 'Cần: 40-60 từ'))}
                      </span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div>
                    <div style={{ width: '100%', height: '6px', backgroundColor: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ 
                        height: '100%', 
                        width: `${Math.min(100, (email1Count / 58) * 100)}%`, 
                        backgroundColor: isEmail1InRange ? '#059669' : (email1Count > 60 ? '#f59e0b' : '#38bdf8'),
                        transition: 'width 0.3s'
                      }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                      <span>0 từ</span>
                      <span>Mục tiêu Aptis: 40 - 50 từ (chuẩn 48 - 58 từ)</span>
                      <span>Tối đa: 60 từ</span>
                    </div>
                  </div>

                  {/* Action Buttons: LƯU BÀI & NỘP BÀI / CHẤM ĐIỂM */}
                  <div style={{ display: 'flex', gap: '0.6rem', margin: '0.2rem 0', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      onClick={() => handleSaveEmail('email1')}
                      style={{
                        flex: 1,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem',
                        backgroundColor: '#f1f5f9',
                        color: '#0f172a',
                        border: '1px solid #cbd5e1',
                        padding: '0.55rem 0.9rem',
                        borderRadius: '6px',
                        fontSize: '0.86rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      <Save size={16} color="#059669" />
                      Lưu bài
                    </button>

                    <button
                      type="button"
                      onClick={() => handleGradeEmail('email1')}
                      disabled={isGrading.email1}
                      style={{
                        flex: 2,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem',
                        backgroundColor: '#059669',
                        color: '#ffffff',
                        border: 'none',
                        padding: '0.55rem 0.9rem',
                        borderRadius: '6px',
                        fontSize: '0.86rem',
                        fontWeight: 700,
                        cursor: isGrading.email1 ? 'not-allowed' : 'pointer',
                        opacity: isGrading.email1 ? 0.75 : 1,
                        transition: 'all 0.2s',
                        boxShadow: '0 2px 4px rgba(5, 150, 105, 0.2)'
                      }}
                    >
                      <Send size={16} />
                      {isGrading.email1 ? 'Đang chấm bài...' : (gradingResults.email1 ? 'Chấm lại' : 'Nộp bài & Chấm điểm')}
                    </button>

                    {gradingResults.email1 && (
                      <button
                        type="button"
                        onClick={() => handleResetEmailGrade('email1')}
                        title="Xóa kết quả chấm và làm lại"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.3rem',
                          backgroundColor: '#ffffff',
                          color: '#64748b',
                          border: '1px solid #cbd5e1',
                          padding: '0.55rem 0.75rem',
                          borderRadius: '6px',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          cursor: 'pointer'
                        }}
                      >
                        <RotateCcw size={14} />
                        Làm lại
                      </button>
                    )}
                  </div>

                  {/* Header on top of textarea */}
                  <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                    Nhập bài làm bằng tiếng Anh:
                  </div>

                  {/* Textarea */}
                  <textarea
                    value={answers.email1}
                    onChange={(e) => handleAnswerChange('email1', e.target.value)}
                    placeholder="Viết email thân mật gửi bạn tại đây...&#10;(Ví dụ: Dear Kim,&#10;How's it going? I hope you're doing well.&#10;I thought you'd be interested to hear that...)"
                    style={{
                      width: '100%',
                      flex: 1,
                      minHeight: '280px',
                      padding: '0.85rem 1rem',
                      fontSize: '0.98rem',
                      lineHeight: '1.65',
                      borderRadius: '6px',
                      border: `2px solid ${isEmail1InRange ? '#10b981' : (email1Count > 0 ? '#fbbf24' : '#cbd5e1')}`,
                      outline: 'none',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                      backgroundColor: '#ffffff',
                      boxSizing: 'border-box'
                    }}
                  />

                  {/* DETAILED GRADING & CORRECTION FEEDBACK CARD */}
                  {gradingResults.email1 && (
                    <div style={{
                      backgroundColor: gradingResults.email1.status === 'success' ? '#f0fdf4' : (gradingResults.email1.status === 'warning' ? '#fffbeb' : '#fef2f2'),
                      border: `1.5px solid ${gradingResults.email1.status === 'success' ? '#86efac' : (gradingResults.email1.status === 'warning' ? '#fde68a' : '#fecaca')}`,
                      borderRadius: '8px',
                      padding: '0.95rem 1rem',
                      marginTop: '0.4rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.6rem',
                      fontSize: '0.88rem',
                      lineHeight: '1.55'
                    }}>
                      {/* Score & Band Header */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem', borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: '0.45rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          {gradingResults.email1.status === 'success' && <CheckCircle size={18} color="#16a34a" />}
                          {gradingResults.email1.status === 'warning' && <AlertCircle size={18} color="#d97706" />}
                          {gradingResults.email1.status === 'error' && <XCircle size={18} color="#dc2626" />}
                          <strong style={{ fontSize: '1rem', color: gradingResults.email1.status === 'success' ? '#166534' : (gradingResults.email1.status === 'warning' ? '#92400e' : '#991b1b') }}>
                            Điểm số: {gradingResults.email1.score} / 5
                          </strong>
                        </div>
                        <span style={{ 
                          backgroundColor: '#ffffff', 
                          padding: '0.2rem 0.6rem', 
                          borderRadius: '12px', 
                          fontSize: '0.78rem', 
                          fontWeight: 700, 
                          border: '1px solid rgba(0,0,0,0.1)',
                          color: '#0f172a' 
                        }}>
                          🏆 {gradingResults.email1.band}
                        </span>
                      </div>

                      {/* Summary */}
                      <div style={{ fontWeight: 600, color: '#334155' }}>
                        {gradingResults.email1.summary}
                      </div>

                      {/* Rubric Breakdown */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', backgroundColor: '#ffffff', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid rgba(0,0,0,0.06)' }}>
                        <div>
                          <strong>📏 Số từ:</strong> {gradingResults.email1.wordFeedback}
                        </div>
                        <div>
                          <strong>👔 Văn phong:</strong> {gradingResults.email1.registerFeedback}
                        </div>
                      </div>

                      {/* Detailed Issues List */}
                      {gradingResults.email1.issues && gradingResults.email1.issues.length > 0 && (
                        <div>
                          <div style={{ fontWeight: 700, color: '#b91c1c', marginBottom: '0.35rem' }}>
                            🔍 Chi tiết lỗi & Gợi ý sửa ({gradingResults.email1.issues.length} điểm cần lưu ý):
                          </div>
                          <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                            {gradingResults.email1.issues.map((iss, i) => (
                              <li key={i} style={{ backgroundColor: '#ffffff', padding: '0.45rem 0.65rem', borderRadius: '4px', borderLeft: '3px solid #ef4444', fontSize: '0.84rem' }}>
                                <div style={{ color: '#991b1b', fontWeight: 600 }}>• {iss.message}</div>
                                {iss.suggestion && (
                                  <div style={{ color: '#047857', marginTop: '0.15rem', fontWeight: 600 }}>
                                    👉 {iss.suggestion}
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* SECTION 3: TASK 2 - EMAIL TO CLUB MANAGER (FORMAL) */}
          {/* ======================================================== */}
          {(workspaceMode === 'all' || workspaceMode === 'email2') && (
            <div className="card" style={{ marginBottom: '2.5rem', borderLeft: '4px solid #2563eb', padding: '1.5rem' }}>
              {/* Task 2 Top Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid #e2e8f0', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#2563eb', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                    2
                  </div>
                  <div>
                    <strong style={{ color: '#1e3a8a', fontSize: '1.1rem' }}>{clubData.email2.title}</strong>
                    <span style={{ marginLeft: '0.6rem', fontSize: '0.78rem', backgroundColor: '#dbeafe', color: '#1e40af', padding: '0.2rem 0.6rem', borderRadius: '12px', fontWeight: 700 }}>
                      Mục tiêu: 120 - 150 từ (Tối đa 165 từ)
                    </span>
                  </div>
                </div>
                <div style={{ fontSize: '0.84rem', color: '#64748b' }}>
                  Phong cách: <strong>Trang trọng (Formal B2-C1)</strong> • Không dùng từ viết tắt
                </div>
              </div>

              {/* 2-Column Grid */}
              <div className="part4-split-grid">
                {/* CỘT TRÁI: ĐỀ BÀI & GỢI Ý */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {/* Đề bài (Prompt Box) */}
                  <div style={{ 
                    backgroundColor: '#f8fafc', 
                    padding: '1rem 1.15rem', 
                    borderRadius: '8px', 
                    border: '1.5px solid #e2e8f0',
                    borderLeft: '4px solid #2563eb' 
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#1e40af', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        📋 Đề bài Email 2:
                      </span>
                      {clubData.email2.instructionVi && (
                        <button 
                          className={`btn-translate ${showEmail2InstructionVi ? 'active' : ''}`}
                          onClick={() => setShowEmail2InstructionVi(!showEmail2InstructionVi)}
                          style={{ fontSize: '0.78rem', padding: '0.25rem 0.55rem' }}
                          title="Dịch yêu cầu bài viết"
                        >
                          {showEmail2InstructionVi ? 'Ẩn dịch' : '🇻🇳 Dịch đề'}
                        </button>
                      )}
                    </div>
                    <div style={{ fontSize: '0.96rem', color: '#1e293b', lineHeight: '1.6', fontWeight: 500 }}>
                      {clubData.email2.instruction}
                    </div>
                    {showEmail2InstructionVi && clubData.email2.instructionVi && (
                      <div style={{ 
                        marginTop: '0.65rem', 
                        paddingTop: '0.65rem', 
                        borderTop: '1px dashed #cbd5e1', 
                        color: '#1e40af', 
                        fontSize: '0.9rem', 
                        fontStyle: 'italic',
                        lineHeight: '1.5'
                      }}>
                        🇻🇳 {clubData.email2.instructionVi}
                      </div>
                    )}
                  </div>

                  {/* Action Tabs for Left Column */}
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <button 
                      className={`btn-translate ${email2HelperTab === 'template' ? 'active' : ''}`}
                      onClick={() => setEmail2HelperTab(email2HelperTab === 'template' ? 'none' : 'template')}
                      title="Xem gợi ý cấu trúc & 3 đề xuất thực tế B2-C1"
                    >
                      💡 Gợi ý cấu trúc & 3 Đề xuất
                    </button>
                    <button 
                      className={`btn-translate ${email2HelperTab === 'sample' ? 'active' : ''}`}
                      onClick={() => setEmail2HelperTab(email2HelperTab === 'sample' ? 'none' : 'sample')}
                      title="Xem bài mẫu chuẩn band B2+ và phân tích"
                    >
                      📝 Bài mẫu chuẩn (B2+)
                    </button>
                    {email2HelperTab !== 'none' && (
                      <button
                        type="button"
                        onClick={() => setEmail2HelperTab('none')}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#64748b',
                          fontSize: '0.8rem',
                          cursor: 'pointer',
                          padding: '0.25rem 0.5rem',
                          textDecoration: 'underline'
                        }}
                        title="Đóng phần gợi ý / bài mẫu"
                      >
                        Ẩn
                      </button>
                    )}
                  </div>

                  {/* Gợi ý cấu trúc & 3 Đề xuất Box */}
                  {email2HelperTab === 'template' && (
                    <div style={{ 
                      padding: '1rem 1.15rem', 
                      backgroundColor: '#f8fafc', 
                      border: '1.5px solid #e2e8f0',
                      borderLeft: '4px solid #2563eb',
                      borderRadius: '8px',
                      fontSize: '0.92rem',
                      lineHeight: '1.6',
                      boxSizing: 'border-box'
                    }}>
                      {/* Highlighted Template */}
                      <div style={{ marginBottom: '1.25rem' }}>
                        <div style={{ fontWeight: 800, color: '#1e40af', fontSize: '0.9rem', marginBottom: '0.6rem' }}>
                          💡 KHUNG CẤU TRÚC MẪU (EMAIL 2 - TRANG TRỌNG):
                        </div>

                        <div style={{ 
                          backgroundColor: '#ffffff',
                          border: '1.5px solid #e2e8f0',
                          borderRadius: '8px',
                          padding: '1rem 1.15rem',
                          lineHeight: '1.85',
                          fontSize: '0.96rem',
                          color: '#1e293b',
                          whiteSpace: 'pre-wrap',
                          textAlign: 'justify',
                          boxSizing: 'border-box'
                        }}>
                          {renderHighlightedText(email2Template)}
                        </div>
                      </div>

                      {/* GỢI Ý ĐIỀN ĐÚNG CÁC CHỖ [ ... ] CHO ĐỀ NÀY */}
                      <div style={{ paddingTop: '1rem', borderTop: '1.5px dashed #cbd5e1', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                        <div style={{ fontWeight: 800, color: '#1e40af', fontSize: '0.88rem' }}>
                          🎯 GỢI Ý ĐIỀN VÀO CÁC CHỖ [ ... ] CHO ĐỀ NÀY:
                        </div>

                        {/* Chỗ thay 1: [thời gian tham gia] */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                          <div style={{ fontWeight: 700, fontSize: '0.86rem', color: '#0f172a' }}>
                            📍 [thời gian tham gia]:
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                            {standardMembershipTimes.map((item, idx) => (
                              <div
                                key={idx}
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  backgroundColor: '#ffffff',
                                  border: '1px solid #cbd5e1',
                                  borderRadius: '6px',
                                  padding: '0.35rem 0.65rem',
                                  fontSize: '0.86rem',
                                  boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                                }}
                              >
                                <span className="p4-en-hint" style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontWeight: 800, color: '#0f172a' }}>
                                  {item.en}
                                </span>{' '}
                                <span style={{ color: '#64748b', fontWeight: 400, marginLeft: '0.35rem' }}>({item.vi})</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Chỗ thay 2: [thông tin trong đề bài] */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                          <div style={{ fontWeight: 700, fontSize: '0.86rem', color: '#0f172a' }}>
                            📍 [thông tin trong đề bài]:
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                            <div
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                backgroundColor: '#ffffff',
                                border: '1px solid #cbd5e1',
                                borderRadius: '6px',
                                padding: '0.35rem 0.65rem',
                                fontSize: '0.86rem',
                                boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                              }}
                            >
                              <span className="p4-en-hint" style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontWeight: 800, color: '#0f172a' }}>
                                {activeClubHints.e2Topic.en}
                              </span>{' '}
                              <span style={{ color: '#64748b', fontWeight: 400, marginLeft: '0.35rem' }}>({activeClubHints.e2Topic.vi})</span>
                            </div>
                          </div>
                        </div>

                        {/* Chỗ thay 3: [nêu quan điểm về vấn đề đó] */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                          <div style={{ fontWeight: 700, fontSize: '0.86rem', color: '#0f172a' }}>
                            📍 [nêu quan điểm về vấn đề đó]:
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                            {activePerspectives.map((item, idx) => (
                              <div
                                key={idx}
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  backgroundColor: '#ffffff',
                                  border: '1px solid #cbd5e1',
                                  borderRadius: '6px',
                                  padding: '0.35rem 0.65rem',
                                  fontSize: '0.86rem',
                                  boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                                }}
                              >
                                <span className="p4-en-hint" style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontWeight: 800, color: '#0f172a' }}>
                                  {item.en}
                                </span>{' '}
                                <span style={{ color: '#64748b', fontWeight: 400, marginLeft: '0.35rem' }}>({item.vi})</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Chỗ thay 4, 5, 6: 3 Đề xuất từ clubData.email2.vocabCategories (Mệnh đề hoàn chỉnh) */}
                        {clubData.email2.vocabCategories && clubData.email2.vocabCategories
                          .filter(cat => !cat.name.toLowerCase().includes('giới thiệu'))
                          .map((cat, idx) => {
                            let slotLabel = `[đề xuất thứ ${idx + 1}]`;
                            const lower = cat.name.toLowerCase();
                            if (lower.includes('đề xuất 1') || lower.includes('đề xuất thứ nhất') || idx === 0) slotLabel = '[đề xuất thứ nhất]';
                            else if (lower.includes('đề xuất 2') || lower.includes('đề xuất thứ hai') || idx === 1) slotLabel = '[đề xuất thứ hai]';
                            else if (lower.includes('đề xuất 3') || lower.includes('đề xuất thứ ba') || idx === 2) slotLabel = '[đề xuất thứ ba]';

                          return (
                            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                              <div style={{ fontWeight: 700, fontSize: '0.86rem', color: '#0f172a' }}>
                                📍 {slotLabel}: <span style={{ color: '#2563eb', fontWeight: 600 }}>{cat.name.replace(/^[0-9.]+\s*/, '')}</span>
                              </div>
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                {cat.items.map((item, i) => (
                                  <div
                                    key={i}
                                    style={{
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      backgroundColor: '#ffffff',
                                      border: '1px solid #cbd5e1',
                                      borderRadius: '6px',
                                      padding: '0.35rem 0.65rem',
                                      fontSize: '0.86rem',
                                      boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                                    }}
                                  >
                                    <span className="p4-en-hint" style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontWeight: 800, color: '#0f172a' }}>
                                      {item.en}
                                    </span>{' '}
                                    {item.vi && <span style={{ color: '#64748b', fontWeight: 400, marginLeft: '0.35rem' }}>({item.vi})</span>}
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Bài mẫu chuẩn Box */}
                  {email2HelperTab === 'sample' && clubData.email2.samples && clubData.email2.samples.length > 0 && (
                    <div style={{ 
                      padding: '1rem', 
                      backgroundColor: '#ffffff', 
                      border: '1.5px solid #bfdbfe',
                      borderRadius: '8px'
                    }}>
                      <div style={{ fontWeight: 700, color: '#1e40af', marginBottom: '0.6rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>📝 BÀI MẪU CHUẨN (EMAIL 2 - TRANG TRỌNG):</span>
                        <span style={{ fontSize: '0.82rem', color: '#1d4ed8', backgroundColor: '#dbeafe', padding: '0.15rem 0.5rem', borderRadius: '4px', fontWeight: 600 }}>
                          Độ dài: {clubData.email2.samples[0].wordCount} từ
                        </span>
                      </div>

                      {/* Chú thích các chỗ thế vào */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        padding: '0.45rem 0.75rem',
                        backgroundColor: '#fefce8',
                        border: '1px solid #fef08a',
                        borderRadius: '6px',
                        fontSize: '0.82rem',
                        color: '#854d0e',
                        marginBottom: '0.65rem',
                        lineHeight: '1.45'
                      }}>
                        <span style={{ fontSize: '1rem' }}>💡</span>
                        <span><strong>Chú thích:</strong> Các cụm từ <span style={{ backgroundColor: '#fef08a', color: '#854d0e', padding: '1px 5px', borderRadius: '3px', fontWeight: 700, borderBottom: '2px solid #eab308' }}>được tô vàng</span> là nội dung lấy từ Gợi ý thế vào các vị trí <strong>[ ... ]</strong> của Template.</span>
                      </div>

                      <div style={{ 
                        fontFamily: 'inherit', 
                        fontSize: '0.94rem', 
                        lineHeight: '1.8', 
                        color: '#0f172a', 
                        whiteSpace: 'pre-wrap',
                        backgroundColor: '#f8fafc',
                        padding: '0.9rem 1rem',
                        borderRadius: '6px',
                        border: '1px solid #e2e8f0',
                        margin: '0 0 0.65rem 0',
                        textAlign: 'justify'
                      }}>
                        {renderSampleWithHighlights(clubData.email2.samples[0].en, 'email2')}
                      </div>
                      <div style={{ 
                        fontSize: '0.86rem', 
                        color: '#1e40af', 
                        backgroundColor: '#eff6ff', 
                        padding: '0.65rem 0.85rem', 
                        borderRadius: '6px', 
                        borderLeft: '3px solid #2563eb', 
                        lineHeight: '1.55', 
                        whiteSpace: 'pre-line' 
                      }}>
                        <strong style={{ display: 'block', marginBottom: '0.2rem' }}>🇻🇳 Bản dịch đối chiếu:</strong>
                        {clubData.email2.samples[0].vi}
                      </div>
                    </div>
                  )}
                </div>

                {/* CỘT PHẢI: KHUNG ĐÁNH ĐÁP ÁN */}
                <div style={{ 
                  backgroundColor: '#ffffff',
                  border: '1.5px solid #e2e8f0',
                  borderLeft: '4px solid #2563eb',
                  borderRadius: '8px',
                  padding: '1rem 1.15rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  height: '100%',
                  boxSizing: 'border-box'
                }}>
                  {/* Editor Top Bar: Title & Word Count */}
                  {/* Editor Top Bar: Title & Word Count */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0f172a' }}>
                        ✍️ Ô ĐÁNH ĐÁP ÁN (EMAIL 2)
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {gradingResults.email2 && (
                        <span style={{ 
                          backgroundColor: '#dbeafe', 
                          color: '#1e40af', 
                          padding: '0.2rem 0.6rem', 
                          borderRadius: '12px', 
                          fontWeight: 800, 
                          fontSize: '0.78rem', 
                          border: '1px solid #bfdbfe' 
                        }}>
                          🏆 {gradingResults.email2.score}/5 ({gradingResults.email2.band})
                        </span>
                      )}
                      <span style={{ 
                        fontSize: '0.92rem', 
                        fontWeight: 800, 
                        color: isEmail2InRange ? '#2563eb' : (email2Count === 0 ? '#64748b' : '#d97706') 
                      }}>
                        {email2Count} từ
                      </span>
                      <span style={{ fontSize: '0.78rem', color: isEmail2InRange ? '#2563eb' : '#64748b', fontWeight: 600 }}>
                        {isEmail2InRange ? '✅ Chuẩn số từ' : (isEmail2TooShort ? '⚠️ Quá ngắn (<120)' : (isEmail2TooLong ? '⚠️ Quá dài (>165)' : 'Cần: 120-165 từ'))}
                      </span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div>
                    <div style={{ width: '100%', height: '6px', backgroundColor: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ 
                        height: '100%', 
                        width: `${Math.min(100, (email2Count / 150) * 100)}%`, 
                        backgroundColor: isEmail2InRange ? '#2563eb' : (email2Count > 165 ? '#f59e0b' : '#38bdf8'),
                        transition: 'width 0.3s'
                      }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                      <span>0 từ</span>
                      <span>Mục tiêu: 120 - 150 từ</span>
                      <span>Tối đa: 165 từ</span>
                    </div>
                  </div>

                  {/* Action Buttons: LƯU BÀI & NỘP BÀI / CHẤM ĐIỂM */}
                  <div style={{ display: 'flex', gap: '0.6rem', margin: '0.2rem 0', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      onClick={() => handleSaveEmail('email2')}
                      style={{
                        flex: 1,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem',
                        backgroundColor: '#f1f5f9',
                        color: '#0f172a',
                        border: '1px solid #cbd5e1',
                        padding: '0.55rem 0.9rem',
                        borderRadius: '6px',
                        fontSize: '0.86rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      <Save size={16} color="#2563eb" />
                      Lưu bài
                    </button>

                    <button
                      type="button"
                      onClick={() => handleGradeEmail('email2')}
                      disabled={isGrading.email2}
                      style={{
                        flex: 2,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem',
                        backgroundColor: '#2563eb',
                        color: '#ffffff',
                        border: 'none',
                        padding: '0.55rem 0.9rem',
                        borderRadius: '6px',
                        fontSize: '0.86rem',
                        fontWeight: 700,
                        cursor: isGrading.email2 ? 'not-allowed' : 'pointer',
                        opacity: isGrading.email2 ? 0.75 : 1,
                        transition: 'all 0.2s',
                        boxShadow: '0 2px 4px rgba(37, 99, 235, 0.2)'
                      }}
                    >
                      <Send size={16} />
                      {isGrading.email2 ? 'Đang chấm bài...' : (gradingResults.email2 ? 'Chấm lại' : 'Nộp bài & Chấm điểm')}
                    </button>

                    {gradingResults.email2 && (
                      <button
                        type="button"
                        onClick={() => handleResetEmailGrade('email2')}
                        title="Xóa kết quả chấm và làm lại"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.3rem',
                          backgroundColor: '#ffffff',
                          color: '#64748b',
                          border: '1px solid #cbd5e1',
                          padding: '0.55rem 0.75rem',
                          borderRadius: '6px',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          cursor: 'pointer'
                        }}
                      >
                        <RotateCcw size={14} />
                        Làm lại
                      </button>
                    )}
                  </div>

                  {/* Contraction warning if any */}
                  {email2Contractions.length > 0 && (
                    <div style={{ 
                      backgroundColor: '#fffbeb', 
                      border: '1px solid #fde68a', 
                      borderRadius: '6px', 
                      padding: '0.4rem 0.65rem', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.4rem', 
                      fontSize: '0.8rem', 
                      color: '#b45309' 
                    }}>
                      <AlertTriangle size={15} color="#d97706" />
                      <span>
                        <strong>Lưu ý thư trang trọng:</strong> Đang dùng từ viết tắt ({email2Contractions.join(', ')}). Hãy đổi sang dạng đầy đủ!
                      </span>
                    </div>
                  )}

                  {/* Header on top of textarea */}
                  <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                    Nhập bài làm bằng tiếng Anh (Trang trọng):
                  </div>

                  {/* Textarea */}
                  <textarea
                    value={answers.email2}
                    onChange={(e) => handleAnswerChange('email2', e.target.value)}
                    placeholder="Viết email trang trọng gửi Quản lý CLB tại đây...&#10;(Ví dụ: Dear Club Manager,&#10;My name is ..., and I have been a member of the club for two years...)"
                    rows={16}
                    style={{
                      width: '100%',
                      flex: 1,
                      minHeight: '380px',
                      padding: '0.9rem 1rem',
                      fontSize: '0.98rem',
                      lineHeight: '1.65',
                      borderRadius: '6px',
                      border: `2px solid ${isEmail2InRange ? '#2563eb' : (email2Count > 0 ? '#fbbf24' : '#cbd5e1')}`,
                      outline: 'none',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                      backgroundColor: '#ffffff',
                      boxSizing: 'border-box'
                    }}
                  />

                  {/* DETAILED GRADING & CORRECTION FEEDBACK CARD */}
                  {gradingResults.email2 && (
                    <div style={{
                      backgroundColor: gradingResults.email2.status === 'success' ? '#f0fdf4' : (gradingResults.email2.status === 'warning' ? '#fffbeb' : '#fef2f2'),
                      border: `1.5px solid ${gradingResults.email2.status === 'success' ? '#86efac' : (gradingResults.email2.status === 'warning' ? '#fde68a' : '#fecaca')}`,
                      borderRadius: '8px',
                      padding: '0.95rem 1rem',
                      marginTop: '0.4rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.6rem',
                      fontSize: '0.88rem',
                      lineHeight: '1.55'
                    }}>
                      {/* Score & Band Header */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem', borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: '0.45rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          {gradingResults.email2.status === 'success' && <CheckCircle size={18} color="#16a34a" />}
                          {gradingResults.email2.status === 'warning' && <AlertCircle size={18} color="#d97706" />}
                          {gradingResults.email2.status === 'error' && <XCircle size={18} color="#dc2626" />}
                          <strong style={{ fontSize: '1rem', color: gradingResults.email2.status === 'success' ? '#166534' : (gradingResults.email2.status === 'warning' ? '#92400e' : '#991b1b') }}>
                            Điểm số: {gradingResults.email2.score} / 5
                          </strong>
                        </div>
                        <span style={{ 
                          backgroundColor: '#ffffff', 
                          padding: '0.2rem 0.6rem', 
                          borderRadius: '12px', 
                          fontSize: '0.78rem', 
                          fontWeight: 700, 
                          border: '1px solid rgba(0,0,0,0.1)',
                          color: '#0f172a' 
                        }}>
                          🏆 {gradingResults.email2.band}
                        </span>
                      </div>

                      {/* Summary */}
                      <div style={{ fontWeight: 600, color: '#334155' }}>
                        {gradingResults.email2.summary}
                      </div>

                      {/* Rubric Breakdown */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', backgroundColor: '#ffffff', padding: '0.55rem 0.75rem', borderRadius: '6px', border: '1px solid rgba(0,0,0,0.06)' }}>
                        <div>
                          <strong>📏 Số từ:</strong> {gradingResults.email2.wordFeedback}
                        </div>
                        <div>
                          <strong>👔 Văn phong:</strong> {gradingResults.email2.registerFeedback}
                        </div>
                      </div>

                      {/* Detailed Issues List */}
                      {gradingResults.email2.issues && gradingResults.email2.issues.length > 0 && (
                        <div>
                          <div style={{ fontWeight: 700, color: '#b91c1c', marginBottom: '0.35rem' }}>
                            🔍 Chi tiết lỗi & Gợi ý sửa ({gradingResults.email2.issues.length} điểm cần lưu ý):
                          </div>
                          <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                            {gradingResults.email2.issues.map((iss, i) => (
                              <li key={i} style={{ backgroundColor: '#ffffff', padding: '0.45rem 0.65rem', borderRadius: '4px', borderLeft: '3px solid #ef4444', fontSize: '0.84rem' }}>
                                <div style={{ color: '#991b1b', fontWeight: 600 }}>• {iss.message}</div>
                                {iss.suggestion && (
                                  <div style={{ color: '#047857', marginTop: '0.15rem', fontWeight: 600 }}>
                                    👉 {iss.suggestion}
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 2: COMMON TEMPLATES */}
      {/* ======================================================== */}
      {activeTab === 'templates' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Informal Email Template */}
          <div className="card" style={{ borderLeft: '4px solid #10b981' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div>
                <h2 style={{ margin: 0, fontSize: '1.2rem', color: '#065f46', fontWeight: 800 }}>
                  {part4CommonTemplates.informal.title}
                </h2>
                <div style={{ fontSize: '0.85rem', color: '#047857', marginTop: '0.2rem' }}>
                  {part4CommonTemplates.informal.target} • {part4CommonTemplates.informal.tone}
                </div>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(part4CommonTemplates.informal.templateText, 'all_informal')}
                style={{
                  backgroundColor: '#d1fae5',
                  color: '#065f46',
                  border: '1px solid #a7f3d0',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
              >
                {copiedKey === 'all_informal' ? <Check size={14} color="#16a34a" /> : <Copy size={14} />}
                {copiedKey === 'all_informal' ? 'Đã sao chép' : 'Sao chép khung'}
              </button>
            </div>

            <pre style={{
              backgroundColor: '#f8fafc',
              padding: '1rem 1.15rem',
              borderRadius: '8px',
              border: '1.5px solid #e2e8f0',
              fontSize: '0.95rem',
              lineHeight: '1.85',
              whiteSpace: 'pre-wrap',
              textAlign: 'justify',
              boxSizing: 'border-box',
              fontFamily: 'inherit',
              color: '#0f172a'
            }}>
              {renderHighlightedText(part4CommonTemplates.informal.templateText)}
            </pre>
          </div>

          {/* Formal Email Template */}
          <div className="card" style={{ borderLeft: '4px solid #2563eb' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div>
                <h2 style={{ margin: 0, fontSize: '1.2rem', color: '#1e3a8a', fontWeight: 800 }}>
                  {part4CommonTemplates.formal.title}
                </h2>
                <div style={{ fontSize: '0.85rem', color: '#1d4ed8', marginTop: '0.2rem' }}>
                  {part4CommonTemplates.formal.target} • {part4CommonTemplates.formal.tone}
                </div>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(part4CommonTemplates.formal.templateText, 'all_formal')}
                style={{
                  backgroundColor: '#dbeafe',
                  color: '#1e40af',
                  border: '1px solid #bfdbfe',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
              >
                {copiedKey === 'all_formal' ? <Check size={14} color="#16a34a" /> : <Copy size={14} />}
                {copiedKey === 'all_formal' ? 'Đã sao chép' : 'Sao chép khung'}
              </button>
            </div>

            <pre style={{
              backgroundColor: '#f8fafc',
              padding: '1rem 1.15rem',
              borderRadius: '8px',
              border: '1.5px solid #e2e8f0',
              fontSize: '0.95rem',
              lineHeight: '1.85',
              whiteSpace: 'pre-wrap',
              textAlign: 'justify',
              boxSizing: 'border-box',
              fontFamily: 'inherit',
              color: '#0f172a'
            }}>
              {renderHighlightedText(part4CommonTemplates.formal.templateText)}
            </pre>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 3: STYLE COMPARISON */}
      {/* ======================================================== */}
      {activeTab === 'style-guide' && (
        <div className="card">
          <h2 style={{ margin: '0 0 1rem 0', color: '#0f172a', fontSize: '1.25rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={20} color="#0d9488" />
            Bảng so sánh phong cách: Email thân mật vs Email trang trọng
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#f1f5f9', borderBottom: '2px solid #cbd5e1' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left', width: '22%', color: '#334155' }}>Tiêu chí</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', width: '39%', color: '#065f46', backgroundColor: '#ecfdf5' }}>
                    Email 1: Thân mật (Bạn bè)
                  </th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', width: '39%', color: '#1e3a8a', backgroundColor: '#eff6ff' }}>
                    Email 2: Trang trọng (Quản lý)
                  </th>
                </tr>
              </thead>
              <tbody>
                {part4CommonTemplates.styleComparison.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '0.75rem', fontWeight: 700, color: '#1e293b' }}>{row.criterion}</td>
                    <td style={{ padding: '0.75rem', color: '#047857', backgroundColor: '#f0fdf4' }}>{row.informal}</td>
                    <td style={{ padding: '0.75rem', color: '#1d4ed8', backgroundColor: '#f8fafc' }}>{row.formal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Part4;
