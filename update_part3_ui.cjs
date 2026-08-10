const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'Part3.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace handleGradeAll and state for grading
content = content.replace(
  /const \[isGrading, setIsGrading\] = useState\(false\);\s*const \[totalScore, setTotalScore\] = useState\(null\);/,
  `const [isGrading, setIsGrading] = useState({ q1: false, q2: false, q3: false });\n  const [totalScore, setTotalScore] = useState(null);`
);

content = content.replace(
  /const handleGradeAll = async \(\) => \{[\s\S]*?\};\s*const clearGrade = \(\) => \{[\s\S]*?\};/,
  `const handleGradeSingle = async (qKey) => {
    setIsGrading(prev => ({ ...prev, [qKey]: true }));
    const res = await gradeSingleAnswer(answers[qKey], questionData[qKey], qKey);
    setGradingResults(prev => {
      const newResults = { ...prev, [qKey]: res };
      
      // Calculate total if all 3 are graded
      if (newResults.q1 && newResults.q2 && newResults.q3) {
        setTotalScore(newResults.q1.score + newResults.q2.score + newResults.q3.score);
      }
      return newResults;
    });
    setIsGrading(prev => ({ ...prev, [qKey]: false }));
  };

  const clearGrade = () => {
    setGradingResults({ q1: null, q2: null, q3: null });
    setTotalScore(null);
  };`
);

// Add "Chấm điểm" button next to Word Count
content = content.replace(
  /<div className=\{\`word-count \$\{isOutOfRange \? 'limit-reached' : ''\}\`\} style=\{\{ color: isGoodRange \? '#10B981' : undefined \}\}>\s*Words: \{count\} \/ 40\s*\{isOutOfRange && <span style=\{\{ marginLeft: '0.5rem', fontSize: '0.8rem' \}\}>\(Yêu cầu 30-40 từ\)<\/span>\}\s*<\/div>/,
  `<div className={\`word-count \${isOutOfRange ? 'limit-reached' : ''}\`} style={{ color: isGoodRange ? '#10B981' : undefined }}>
                    Words: {count} / 40
                    {isOutOfRange && <span style={{ marginLeft: '0.5rem', fontSize: '0.8rem' }}>(Yêu cầu 30-40 từ)</span>}
                  </div>
                  
                  {!gResult ? (
                    <button 
                      className="btn btn-secondary" 
                      style={{ padding: '0.4rem 1rem', fontSize: '0.85rem', opacity: isGrading[qKey] ? 0.7 : 1, cursor: isGrading[qKey] ? 'not-allowed' : 'pointer' }} 
                      onClick={() => handleGradeSingle(qKey)}
                      disabled={isGrading[qKey]}
                    >
                      {isGrading[qKey] ? 'Đang chấm...' : 'Chấm điểm'}
                    </button>
                  ) : (
                    <button 
                      className="btn btn-primary" 
                      style={{ padding: '0.4rem 1rem', fontSize: '0.85rem', backgroundColor: 'var(--border-color)', color: 'var(--text-main)' }} 
                      onClick={() => {
                        setGradingResults(prev => ({...prev, [qKey]: null}));
                        setTotalScore(null);
                      }}
                    >
                      Làm lại
                    </button>
                  )}`
);

// Remove the global grading section at the bottom, just keep Total Score
content = content.replace(
  /\{\/\* Global Grading Section \*\/\}[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/,
  `{/* Global Grading Section */}
        {totalScore !== null && (
          <div style={{ 
            marginTop: '1rem', 
            padding: '1.5rem', 
            backgroundColor: '#F8FAFC', 
            borderRadius: '8px', 
            border: '1px solid var(--border-color)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>
              TỔNG ĐIỂM PART 3: {totalScore} / 15
            </div>
            <button 
              className="btn btn-secondary" 
              style={{ padding: '0.75rem 2rem', fontSize: '1rem', width: '100%', maxWidth: '300px' }} 
              onClick={clearGrade}
            >
              Làm lại toàn bộ Part 3
            </button>
          </div>
        )}
      </div>
    </div>`
);

fs.writeFileSync(filePath, content);
console.log('Successfully updated src/pages/Part3.jsx');
