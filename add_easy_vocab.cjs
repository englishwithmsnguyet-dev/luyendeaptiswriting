const fs = require('fs');
const path = require('path');

const part3DataPath = path.join(__dirname, 'src', 'data', 'part3Data.js');
let fileData = fs.readFileSync(part3DataPath, 'utf8');
const jsonStr = fileData.replace('// This file is auto-generated\nexport const part3Data = ', '').replace(/;\n?$/, '');
const data = JSON.parse(jsonStr);

// --- ART CLUB Q1 ---
data["Art club"].q1.vocab = [
  "✨ [Đồ vật ý nghĩa]: <strong>a vintage camera</strong> (chiếc máy ảnh cổ), <strong>a childhood diary</strong> (cuốn nhật ký thời thơ ấu), <strong>a family heirloom</strong> (vật gia truyền), <strong>a traditional musical instrument</strong> (nhạc cụ truyền thống), <strong>an old watch</strong> (một chiếc đồng hồ cũ), <strong>a cute teddy bear</strong> (một con gấu bông dễ thương)",
  "✨ [Đặc điểm]: <strong>holds immense sentimental value</strong> (mang giá trị tinh thần to lớn), <strong>brings back fond memories</strong> (gợi lại những kỷ niệm đẹp), <strong>reminds me of my childhood</strong> (nhắc tôi nhớ về tuổi thơ), <strong>represents my family heritage</strong> (đại diện cho di sản gia đình), <strong>looks very beautiful</strong> (trông rất đẹp), <strong>is a special gift from my best friend</strong> (là một món quà đặc biệt từ bạn thân)",
  "✨ [Hành động]: <strong>cherish it deeply</strong> (vô cùng trân trọng nó), <strong>feel deeply attached to it</strong> (cảm thấy vô cùng gắn bó với nó), <strong>keep it in pristine condition</strong> (giữ nó trong tình trạng nguyên vẹn), <strong>preserve it carefully</strong> (bảo quản nó cẩn thận), <strong>use it every single day</strong> (sử dụng nó mỗi ngày), <strong>clean it regularly</strong> (lau chùi nó thường xuyên)"
];

const newFileContent = `// This file is auto-generated\nexport const part3Data = ${JSON.stringify(data, null, 2)};\n`;
fs.writeFileSync(part3DataPath, newFileContent);
console.log('Successfully added easy vocab for Art Club Q1!');
