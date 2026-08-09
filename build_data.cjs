const fs = require('fs');

function getPart2Template(question) {
  const q = question.toLowerCase();
  
  // Nhóm Mục đích tham gia
  if (q.includes('why did you join') || q.includes('why do you want to join') || q.includes('why did you decide')) {
    return "I decided to join this club because I am really into [sở thích - Ving]. It helps me [lợi ích 1 - Vo] and [lợi ích 2 - Vo].";
  }
  
  // Nhóm Sở thích / Kể về 1 thứ mình thích
  if (q.includes('favorite') || q.includes('favourite') || q.includes('like') || q.includes('interested')) {
    return "I am really into [hoạt động - Ving / tên sự vật] because it is very [tính từ]. It helps me [lợi ích 1 - Vo] and [lợi ích 2 - Vo].";
  }
  
  // Nhóm Thói quen / Tần suất
  if (q.includes('when') || q.includes('where') || q.includes('how often') || q.includes('usually')) {
    return "I usually [hoạt động - Vo] at [địa điểm] in my free time. It allows me to [lợi ích 1 - Vo] and [lợi ích 2 - Vo].";
  }
  
  // Nhóm Mô tả
  if (q.includes('tell me about') || q.includes('describe') || q.includes('tell me the last time')) {
    return "I would like to tell you about [đối tượng / sự việc]. It was very [tính từ 1] and [tính từ 2]. This makes me feel [cảm xúc].";
  }
  
  // Các trường hợp khác
  return "I usually [hoạt động - Vo] because it is [tính từ]. It helps me [lợi ích 1 - Vo] and [lợi ích 2 - Vo].";
}

// Read old Part 2
const content2 = fs.readFileSync('src/data/part2Data.js', 'utf8');
const match2 = content2.match(/export const part2Data = ([\s\S]*);/);
let data2;
eval('data2 = ' + match2[1]);

for (let club in data2) {
  // Update template field for all entries using the new methodology
  data2[club].template = getPart2Template(data2[club].text);
}

fs.writeFileSync('src/data/part2Data.js', 'export const part2Data = ' + JSON.stringify(data2, null, 2) + ';');
console.log('Updated templates to match teacher methodology');
