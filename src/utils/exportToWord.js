import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx';
import { saveAs } from 'file-saver';
import { clubsData } from '../data/clubsData';
import { part3Data } from '../data/part3Data';

export const exportToWord = async () => {
  const studentName = localStorage.getItem('aptis_student_name') || 'Khach';
  
  // Fetch answers
  let p1Answers = {};
  let p2Answers = {};
  let p3Answers = {};
  
  try {
    p1Answers = JSON.parse(localStorage.getItem('aptis_p1_answers')) || {};
    p2Answers = JSON.parse(localStorage.getItem('aptis_p2_answers')) || {};
    p3Answers = JSON.parse(localStorage.getItem('aptis_p3_answers')) || {};
  } catch (e) {
    console.error("Error parsing answers from localStorage", e);
  }

  const children = [];

  // Title
  children.push(
    new Paragraph({
      text: "BÀI TẬP APTIS WRITING",
      heading: HeadingLevel.HEADING_1,
      alignment: "center",
      spacing: { after: 400 },
    })
  );

  children.push(
    new Paragraph({
      children: [
        new TextRun({ text: "Học viên: ", bold: true }),
        new TextRun({ text: studentName }),
      ],
      spacing: { after: 400 },
    })
  );

  // Helper to add questions and answers
  const addQA = (questionText, answerText) => {
    children.push(
      new Paragraph({
        children: [
          new TextRun({ text: "Q: ", bold: true, color: "0052cc" }),
          new TextRun({ text: questionText, italics: true }),
        ],
        spacing: { before: 200, after: 100 },
      })
    );
    
    children.push(
      new Paragraph({
        children: [
          new TextRun({ text: "A: ", bold: true, color: "10b981" }),
          new TextRun({ text: answerText || "(Chưa làm)" }),
        ],
        spacing: { after: 300 },
      })
    );
  };

  // Process Part 1
  const answeredClubsP1 = Object.keys(p1Answers);
  if (answeredClubsP1.length > 0) {
    children.push(
      new Paragraph({
        text: "PART 1",
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 400, after: 200 },
      })
    );

    answeredClubsP1.forEach(clubName => {
      const club = clubsData.find(c => c.name === clubName);
      if (club) {
        children.push(
          new Paragraph({
            text: `Club: ${clubName}`,
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 },
          })
        );
        const ans = p1Answers[clubName];
        if (ans) {
          Object.keys(ans).forEach((qKey, index) => {
            const questionText = club.questions[index]?.en || `Question ${index + 1}`;
            addQA(questionText, ans[qKey]);
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
        text: "PART 2",
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 400, after: 200 },
      })
    );

    answeredClubsP2.forEach(clubName => {
      const club = clubsData.find(c => c.name === clubName);
      if (club) {
        children.push(
          new Paragraph({
            text: `Club: ${clubName}`,
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 },
          })
        );
        const questionText = club.part2_question?.en || "Question for Part 2";
        addQA(questionText, p2Answers[clubName]);
      }
    });
  }

  // Process Part 3
  const answeredClubsP3 = Object.keys(p3Answers);
  if (answeredClubsP3.length > 0) {
    children.push(
      new Paragraph({
        text: "PART 3",
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 400, after: 200 },
      })
    );

    answeredClubsP3.forEach(clubName => {
      const club = part3Data[clubName];
      if (club) {
        children.push(
          new Paragraph({
            text: `Club: ${clubName}`,
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 300, after: 100 },
          })
        );
        const ans = p3Answers[clubName];
        if (ans) {
          ['q1', 'q2', 'q3'].forEach(qKey => {
            const questionText = club[qKey]?.question || `Question ${qKey}`;
            addQA(questionText, ans[qKey]);
          });
        }
      }
    });
  }

  // If no answers at all
  if (answeredClubsP1.length === 0 && answeredClubsP2.length === 0 && answeredClubsP3.length === 0) {
    children.push(
      new Paragraph({
        text: "Học viên chưa làm phần nào.",
        italics: true,
      })
    );
  }

  const doc = new Document({
    sections: [{
      properties: {},
      children: children,
    }],
  });

  Packer.toBlob(doc).then(blob => {
    saveAs(blob, `BaiLam_APTIS_${studentName.replace(/\s+/g, '_')}.docx`);
  });
};
