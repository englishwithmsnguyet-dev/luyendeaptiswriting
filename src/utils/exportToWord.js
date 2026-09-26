import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle } from 'docx';
import { saveAs } from 'file-saver';
import { clubsData } from '../data/clubsData';
import { part2Data } from '../data/part2Data';
import { part3Data } from '../data/part3Data';
import { part4Data } from '../data/part4Data';

export const exportToWord = async ({ clubName: targetClub = null, part: targetPart = null } = {}) => {
  const studentName = localStorage.getItem('aptis_student_name') || 'HocVien';
  const now = new Date();
  const dateStr = now.toLocaleDateString('vi-VN');
  const timeStr = now.toLocaleTimeString('vi-VN');
  
  // Fetch answers & grades per club
  let p1Answers = {};
  let p1Grades = {};
  let p2Answers = {};
  let p2Grades = {};
  let p3Answers = {};
  let p3Grades = {};
  let p4Answers = {};
  let p4Grades = {};

  // Part 1
  if (!targetPart || targetPart === 1) {
    const clubsToScan = targetClub ? [targetClub] : Object.keys(clubsData);
    clubsToScan.forEach(clubName => {
      try {
        const p1 = localStorage.getItem(`aptis_p1_answers_${clubName}`);
        if (p1) {
          const parsed = JSON.parse(p1);
          if (Object.values(parsed).some(val => val && val.trim())) {
            p1Answers[clubName] = parsed;
          }
        }
        const g1 = localStorage.getItem(`aptis_p1_grades_${clubName}`);
        if (g1) p1Grades[clubName] = JSON.parse(g1);
      } catch(e) {}
    });
  }

  // Part 2
  if (!targetPart || targetPart === 2) {
    const clubsToScan = targetClub ? [targetClub] : Object.keys(part2Data);
    clubsToScan.forEach(clubName => {
      try {
        const p2 = localStorage.getItem(`aptis_p2_answer_${clubName}`);
        if (p2 && p2.trim()) p2Answers[clubName] = p2;
        const g2 = localStorage.getItem(`aptis_p2_grade_${clubName}`);
        if (g2) p2Grades[clubName] = JSON.parse(g2);
      } catch(e) {}
    });
  }

  // Part 3
  if (!targetPart || targetPart === 3) {
    const clubsToScan = targetClub ? [targetClub] : Object.keys(part3Data);
    clubsToScan.forEach(clubName => {
      try {
        const p3 = localStorage.getItem(`aptis_p3_answers_${clubName}`);
        if (p3) {
          const parsed = JSON.parse(p3);
          if (Object.values(parsed).some(val => val && val.trim())) {
            p3Answers[clubName] = parsed;
          }
        }
        const g3 = localStorage.getItem(`aptis_p3_grades_${clubName}`);
        if (g3) p3Grades[clubName] = JSON.parse(g3);
      } catch(e) {}
    });
  }

  // Part 4
  if (!targetPart || targetPart === 4) {
    const clubsToScan = targetClub ? [targetClub] : Object.keys(part4Data);
    clubsToScan.forEach(clubName => {
      try {
        const p4 = localStorage.getItem(`aptis_p4_answers_${clubName}`);
        if (p4) {
          const parsed = JSON.parse(p4);
          if ((parsed.email1 && parsed.email1.trim()) || (parsed.email2 && parsed.email2.trim())) {
            p4Answers[clubName] = parsed;
          }
        }
        const g4 = localStorage.getItem(`aptis_p4_grades_${clubName}`);
        if (g4) p4Grades[clubName] = JSON.parse(g4);
      } catch(e) {}
    });
  }

  const children = [];

  // Title
  children.push(
    new Paragraph({
      text: targetClub ? `BÀI LÀM APTIS WRITING - ${targetClub.toUpperCase()}` : "BÀI LÀM TỔNG HỢP APTIS WRITING",
      heading: HeadingLevel.HEADING_1,
      alignment: AlignmentType.CENTER,
      spacing: { after: 300 },
    })
  );

  // Meta info
  children.push(
    new Paragraph({
      children: [
        new TextRun({ text: "Học viên: ", bold: true }),
        new TextRun({ text: studentName, bold: true, color: "0052cc" }),
        new TextRun({ text: "   |   Ngày xuất: " }),
        new TextRun({ text: `${timeStr} - ${dateStr}` }),
      ],
      spacing: { after: 400 },
    })
  );

  // Helper to split multi-line text into TextRuns with Word line breaks (<w:br/>)
  const formatTextRuns = (text, defaultOptions = {}) => {
    if (!text) return [new TextRun({ text: "", ...defaultOptions })];
    const lines = String(text).split(/\r?\n/);
    const runs = [];
    lines.forEach((line, index) => {
      runs.push(
        new TextRun({
          text: line,
          break: index > 0 ? 1 : undefined,
          ...defaultOptions,
        })
      );
    });
    return runs;
  };

  // Helper to add question, answer, word count, and grading feedback
  const addQA = (questionText, answerText, gradeInfo = null) => {
    // 1. Question (supports multi-line prompt/questions)
    children.push(
      new Paragraph({
        children: [
          new TextRun({ text: "Câu hỏi: ", bold: true, color: "0f172a" }),
          ...formatTextRuns(questionText, { italics: true, color: "334155" }),
        ],
        spacing: { before: 200, after: 100 },
      })
    );
    
    const count = answerText ? answerText.trim().split(/\s+/).filter(Boolean).length : 0;
    
    // 2. Answer (properly preserves all newlines and paragraphs in Word)
    if (!answerText || !answerText.trim()) {
      children.push(
        new Paragraph({
          children: [
            new TextRun({ text: "Bài làm: ", bold: true, color: "047857" }),
            new TextRun({ text: "(Chưa có câu trả lời)", color: "94a3b8" }),
            new TextRun({ text: "   [Số từ: 0 từ]", italics: true, color: "64748b" }),
          ],
          spacing: { after: gradeInfo && gradeInfo.feedback ? 100 : 300 },
        })
      );
    } else {
      const lines = answerText.trim().split(/\r?\n/);
      if (lines.length === 1) {
        // Single-line answer (Part 1, short answers)
        children.push(
          new Paragraph({
            children: [
              new TextRun({ text: "Bài làm: ", bold: true, color: "047857" }),
              new TextRun({ text: lines[0], color: "000000" }),
              new TextRun({ text: `   [Số từ: ${count} từ]`, italics: true, color: "64748b" }),
            ],
            spacing: { after: gradeInfo && gradeInfo.feedback ? 100 : 300 },
          })
        );
      } else {
        // Multi-line answer (Part 4 emails, multi-paragraph essays)
        const answerRuns = [
          new TextRun({ text: "Bài làm: ", bold: true, color: "047857" }),
          new TextRun({ text: `   [Số từ: ${count} từ]`, italics: true, color: "64748b" }),
        ];
        lines.forEach(line => {
          answerRuns.push(
            new TextRun({
              text: line,
              break: 1,
              color: "000000",
            })
          );
        });

        children.push(
          new Paragraph({
            children: answerRuns,
            spacing: { after: gradeInfo && gradeInfo.feedback ? 100 : 300 },
          })
        );
      }
    }

    // 3. Feedback & Grade
    if (gradeInfo && gradeInfo.feedback) {
      children.push(
        new Paragraph({
          children: [
            new TextRun({ 
              text: `Nhận xét & Điểm số (${gradeInfo.score !== undefined ? gradeInfo.score : '-'}/5 điểm): `, 
              bold: true, 
              color: gradeInfo.status === 'success' ? "059669" : (gradeInfo.status === 'warning' ? "d97706" : "dc2626") 
            }),
            ...formatTextRuns(gradeInfo.feedback, { italics: true, color: "475569" }),
          ],
          spacing: { after: 300 },
        })
      );
    }
  };

  // Process Part 1
  const answeredClubsP1 = Object.keys(p1Answers);
  if (answeredClubsP1.length > 0) {
    children.push(
      new Paragraph({
        text: "PHẦN 1: WRITING PART 01",
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 400, after: 200 },
      })
    );

    answeredClubsP1.forEach(clubName => {
      const clubQuestions = clubsData[clubName];
      if (clubQuestions) {
        children.push(
          new Paragraph({
            text: `Câu lạc bộ: ${clubName}`,
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 },
          })
        );
        const ans = p1Answers[clubName];
        const grades = p1Grades[clubName] || {};
        if (ans) {
          clubQuestions.forEach((q, index) => {
            const userAns = ans[q.id] || ans[String(q.id)];
            const gradeInfo = grades[q.id] || grades[String(q.id)];
            addQA(q.text, userAns, gradeInfo);
          });
        }
      }
    });
  }

  // Process Part 2
  const answeredClubsP2 = Object.keys(p2Answers);
  if (answeredClubsP2.length > 0) {
    children.push(
      new Paragraph({
        text: "PHẦN 2: WRITING PART 02",
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 400, after: 200 },
      })
    );

    answeredClubsP2.forEach(clubName => {
      const clubData = part2Data[clubName];
      if (clubData) {
        children.push(
          new Paragraph({
            text: `Câu lạc bộ: ${clubName}`,
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 },
          })
        );
        const questionText = clubData.text || "Question for Part 2";
        const userAns = p2Answers[clubName];
        const gradeInfo = p2Grades[clubName];
        addQA(questionText, userAns, gradeInfo);
      }
    });
  }

  // Process Part 3
  const answeredClubsP3 = Object.keys(p3Answers);
  if (answeredClubsP3.length > 0) {
    children.push(
      new Paragraph({
        text: "PHẦN 3: WRITING PART 03",
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 400, after: 200 },
      })
    );

    answeredClubsP3.forEach(clubName => {
      const club = part3Data[clubName];
      if (club) {
        children.push(
          new Paragraph({
            text: `Câu lạc bộ: ${clubName}`,
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 },
          })
        );
        const ans = p3Answers[clubName];
        const grades = p3Grades[clubName] || {};
        if (ans) {
          ['q1', 'q2', 'q3'].forEach(qKey => {
            const memberText = club[qKey]?.member ? `[${club[qKey].member}] ` : '';
            const questionText = `${memberText}${club[qKey]?.question || `Question ${qKey}`}`;
            const userAns = ans[qKey];
            const gradeInfo = grades[qKey];
            addQA(questionText, userAns, gradeInfo);
          });
        }
      }
    });
  }

  // Process Part 4
  const answeredClubsP4 = Object.keys(p4Answers);
  if (answeredClubsP4.length > 0) {
    children.push(
      new Paragraph({
        text: "PHẦN 4: WRITING PART 04 (VIẾT EMAIL)",
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 400, after: 200 },
      })
    );

    answeredClubsP4.forEach(clubName => {
      const club = part4Data[clubName];
      if (club) {
        children.push(
          new Paragraph({
            text: `Câu lạc bộ: ${clubName}`,
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: "Thông báo từ CLB: ", bold: true, color: "1e40af" }),
              ...formatTextRuns(club.notice, { italics: true, color: "334155" }),
            ],
            spacing: { after: 200 }
          })
        );
        const ans = p4Answers[clubName];
        if (ans) {
          if (ans.email1) {
            addQA("Email 1 (Gửi bạn - ~50 từ):", ans.email1);
          }
          if (ans.email2) {
            addQA("Email 2 (Gửi Quản lý CLB - 120-150 từ):", ans.email2);
          }
        }
      }
    });
  }

  // If no answers at all
  if (answeredClubsP1.length === 0 && answeredClubsP2.length === 0 && answeredClubsP3.length === 0 && answeredClubsP4.length === 0) {
    children.push(
      new Paragraph({
        text: targetClub 
          ? `Học viên chưa có câu trả lời nào cho câu lạc bộ ${targetClub}.` 
          : "Chưa có dữ liệu bài làm nào được lưu.",
        italics: true,
        spacing: { before: 200, after: 200 }
      })
    );
  }

  const doc = new Document({
    sections: [{
      properties: {},
      children: children,
    }],
  });

  const filename = targetClub 
    ? `BaiLam_APTIS_${targetClub.replace(/\s+/g, '_')}_${studentName.replace(/\s+/g, '_')}.docx`
    : `BaiLam_TongHop_APTIS_${studentName.replace(/\s+/g, '_')}_${dateStr.replace(/\//g, '-')}.docx`;

  Packer.toBlob(doc).then(blob => {
    saveAs(blob, filename);
  });
};
