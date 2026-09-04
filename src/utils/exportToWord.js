import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle } from 'docx';
import { saveAs } from 'file-saver';
import { clubsData } from '../data/clubsData';
import { part2Data } from '../data/part2Data';
import { part3Data } from '../data/part3Data';

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

  // Helper to add question, answer, word count, and grading feedback
  const addQA = (questionText, answerText, gradeInfo = null) => {
    children.push(
      new Paragraph({
        children: [
          new TextRun({ text: "Câu hỏi: ", bold: true, color: "0f172a" }),
          new TextRun({ text: questionText, italics: true, color: "334155" }),
        ],
        spacing: { before: 200, after: 100 },
      })
    );
    
    const count = answerText ? answerText.trim().split(/\s+/).filter(Boolean).length : 0;
    
    children.push(
      new Paragraph({
        children: [
          new TextRun({ text: "Bài làm: ", bold: true, color: "047857" }),
          new TextRun({ text: answerText || "(Chưa có câu trả lời)", color: answerText ? "000000" : "94a3b8" }),
          new TextRun({ text: `   [Số từ: ${count} từ]`, italics: true, color: "64748b" }),
        ],
        spacing: { after: gradeInfo && gradeInfo.feedback ? 100 : 300 },
      })
    );

    if (gradeInfo && gradeInfo.feedback) {
      children.push(
        new Paragraph({
          children: [
            new TextRun({ 
              text: `Nhận xét & Điểm số (${gradeInfo.score !== undefined ? gradeInfo.score : '-'}/5 điểm): `, 
              bold: true, 
              color: gradeInfo.status === 'success' ? "059669" : (gradeInfo.status === 'warning' ? "d97706" : "dc2626") 
            }),
            new TextRun({ text: gradeInfo.feedback, italics: true, color: "475569" }),
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

  // If no answers at all
  if (answeredClubsP1.length === 0 && answeredClubsP2.length === 0 && answeredClubsP3.length === 0) {
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
