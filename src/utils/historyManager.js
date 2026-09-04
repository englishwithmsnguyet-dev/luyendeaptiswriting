// History Manager for Aptis Writing Practice

export const saveClubHistory = (part, clubName, answers, grades = null) => {
  if (!clubName) return;
  const now = new Date();
  const timeStr = now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' ' + now.toLocaleDateString('vi-VN');
  
  if (part === 1) {
    localStorage.setItem(`aptis_p1_answers_${clubName}`, JSON.stringify(answers));
    if (grades) localStorage.setItem(`aptis_p1_grades_${clubName}`, JSON.stringify(grades));
    localStorage.setItem(`aptis_p1_saved_at_${clubName}`, timeStr);
  } else if (part === 2) {
    localStorage.setItem(`aptis_p2_answer_${clubName}`, typeof answers === 'string' ? answers : (answers?.text || ''));
    if (grades) localStorage.setItem(`aptis_p2_grade_${clubName}`, JSON.stringify(grades));
    localStorage.setItem(`aptis_p2_saved_at_${clubName}`, timeStr);
  } else if (part === 3) {
    localStorage.setItem(`aptis_p3_answers_${clubName}`, JSON.stringify(answers));
    if (grades) localStorage.setItem(`aptis_p3_grades_${clubName}`, JSON.stringify(grades));
    localStorage.setItem(`aptis_p3_saved_at_${clubName}`, timeStr);
  }
  
  window.dispatchEvent(new Event('progressUpdate'));
  return timeStr;
};

export const getClubSavedTime = (part, clubName) => {
  if (!clubName) return null;
  return localStorage.getItem(`aptis_p${part}_saved_at_${clubName}`);
};

export const clearClubHistory = (part, clubName) => {
  if (!clubName) return;
  
  if (part === 1) {
    localStorage.removeItem(`aptis_p1_answers_${clubName}`);
    localStorage.removeItem(`aptis_p1_grades_${clubName}`);
    localStorage.removeItem(`aptis_p1_saved_at_${clubName}`);
    const completed = JSON.parse(localStorage.getItem('aptis_p1_completed') || '[]');
    const next = completed.filter(c => c !== clubName);
    localStorage.setItem('aptis_p1_completed', JSON.stringify(next));
  } else if (part === 2) {
    localStorage.removeItem(`aptis_p2_answer_${clubName}`);
    localStorage.removeItem(`aptis_p2_grade_${clubName}`);
    localStorage.removeItem(`aptis_p2_saved_at_${clubName}`);
    const completed = JSON.parse(localStorage.getItem('aptis_p2_completed') || '[]');
    const next = completed.filter(c => c !== clubName);
    localStorage.setItem('aptis_p2_completed', JSON.stringify(next));
  } else if (part === 3) {
    localStorage.removeItem(`aptis_p3_answers_${clubName}`);
    localStorage.removeItem(`aptis_p3_grades_${clubName}`);
    localStorage.removeItem(`aptis_p3_saved_at_${clubName}`);
    const completed = JSON.parse(localStorage.getItem('aptis_p3_completed') || '[]');
    const next = completed.filter(c => c !== clubName);
    localStorage.setItem('aptis_p3_completed', JSON.stringify(next));
  }
  
  window.dispatchEvent(new Event('progressUpdate'));
};

export const clearPartHistory = (part) => {
  const prefix = `aptis_p${part}_`;
  const keysToRemove = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith(prefix)) {
      keysToRemove.push(k);
    }
  }
  keysToRemove.forEach(k => localStorage.removeItem(k));
  window.dispatchEvent(new Event('progressUpdate'));
};

export const clearAllHistory = () => {
  const keysToRemove = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith('aptis_p')) {
      keysToRemove.push(k);
    }
  }
  keysToRemove.forEach(k => localStorage.removeItem(k));
  window.dispatchEvent(new Event('progressUpdate'));
};

export const exportBackupJSON = () => {
  const studentName = localStorage.getItem('aptis_student_name') || 'HocVien';
  const backupData = {
    exportDate: new Date().toISOString(),
    studentName,
    data: {}
  };

  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && (k.startsWith('aptis_p') || k === 'aptis_student_name')) {
      backupData.data[k] = localStorage.getItem(k);
    }
  }

  const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `SaoLuu_BaiLam_APTIS_${studentName.replace(/\s+/g, '_')}_${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const importBackupJSON = (jsonString) => {
  try {
    const parsed = JSON.parse(jsonString);
    if (!parsed || !parsed.data) {
      throw new Error('Định dạng tệp sao lưu không hợp lệ.');
    }

    Object.keys(parsed.data).forEach(key => {
      localStorage.setItem(key, parsed.data[key]);
    });

    window.dispatchEvent(new Event('progressUpdate'));
    return { success: true, count: Object.keys(parsed.data).length };
  } catch (err) {
    return { success: false, error: err.message };
  }
};

export const cleanDuplicateClubAnswers = () => {
  let cleanedCount = 0;
  
  // Part 1
  const p1Map = new Map();
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith('aptis_p1_answers_')) {
      const clubName = k.replace('aptis_p1_answers_', '');
      const raw = localStorage.getItem(k);
      if (raw) {
        if (p1Map.has(raw)) {
          localStorage.removeItem(`aptis_p1_answers_${clubName}`);
          localStorage.removeItem(`aptis_p1_grades_${clubName}`);
          localStorage.removeItem(`aptis_p1_saved_at_${clubName}`);
          const comp = JSON.parse(localStorage.getItem('aptis_p1_completed') || '[]');
          localStorage.setItem('aptis_p1_completed', JSON.stringify(comp.filter(c => c !== clubName)));
          cleanedCount++;
        } else {
          p1Map.set(raw, clubName);
        }
      }
    }
  }

  // Part 2
  const p2Map = new Map();
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith('aptis_p2_answer_')) {
      const clubName = k.replace('aptis_p2_answer_', '');
      const raw = (localStorage.getItem(k) || '').trim();
      if (raw.length > 5) {
        if (p2Map.has(raw)) {
          localStorage.removeItem(`aptis_p2_answer_${clubName}`);
          localStorage.removeItem(`aptis_p2_grade_${clubName}`);
          localStorage.removeItem(`aptis_p2_saved_at_${clubName}`);
          const comp = JSON.parse(localStorage.getItem('aptis_p2_completed') || '[]');
          localStorage.setItem('aptis_p2_completed', JSON.stringify(comp.filter(c => c !== clubName)));
          cleanedCount++;
        } else {
          p2Map.set(raw, clubName);
        }
      }
    }
  }

  // Part 3
  const p3Map = new Map();
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith('aptis_p3_answers_')) {
      const clubName = k.replace('aptis_p3_answers_', '');
      const raw = localStorage.getItem(k);
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          const contentStr = ((parsed.q1 || '') + '|' + (parsed.q2 || '') + '|' + (parsed.q3 || '')).trim();
          if (contentStr !== '||' && contentStr.length > 10) {
            if (p3Map.has(contentStr)) {
              localStorage.removeItem(`aptis_p3_answers_${clubName}`);
              localStorage.removeItem(`aptis_p3_grades_${clubName}`);
              localStorage.removeItem(`aptis_p3_saved_at_${clubName}`);
              const comp = JSON.parse(localStorage.getItem('aptis_p3_completed') || '[]');
              localStorage.setItem('aptis_p3_completed', JSON.stringify(comp.filter(c => c !== clubName)));
              cleanedCount++;
            } else {
              p3Map.set(contentStr, clubName);
            }
          }
        } catch(e) {}
      }
    }
  }

  window.dispatchEvent(new Event('progressUpdate'));
  return cleanedCount;
};
