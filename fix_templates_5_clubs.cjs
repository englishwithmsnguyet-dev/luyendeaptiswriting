const fs = require('fs');
const path = require('path');

const part3DataPath = path.join(__dirname, 'src', 'data', 'part3Data.js');
let fileData = fs.readFileSync(part3DataPath, 'utf8');
const jsonStr = fileData.replace('// This file is auto-generated\nexport const part3Data = ', '').replace(/;\n?$/, '');
const data = JSON.parse(jsonStr);

// Art club
data["Art club"].q1.templates = [
  "Regarding your question, a treasured item I have kept for ages is [món đồ bạn trân trọng]. It holds immense sentimental value and reminds me of [kỷ niệm].",
  "One thing that holds immense sentimental value to me is [món đồ]. I preserve it carefully because it represents [giá trị/ý nghĩa].",
  "To be honest, the oldest thing I own is [món đồ cũ]. Reading/seeing it brings back fond memories, and I feel deeply attached to it as a witness to [sự kiện]."
];
data["Art club"].q2.templates = [
  "I believe this throwaway culture is primarily caused by [nguyên nhân 1] and [nguyên nhân 2]. Buying new products is often cheaper than repairing broken ones.",
  "In my opinion, this concerning trend happens because [nguyên nhân]. Unfortunately, this excessive consumerism inevitably leads to [hậu quả].",
  "It is undeniable that people constantly upgrade their belongings to [lý do]. However, this dangerous habit significantly increases [hậu quả tiêu cực]."
];
data["Art club"].q3.templates = [
  "I highly recommend that we curate a gallery where members can [hành động 1]. Doing this will undoubtedly evoke strong emotions from visitors.",
  "One fantastic idea is to encourage members to [hành động]. We can arrange items chronologically to show [mục đích], creating a memorable experience.",
  "To make the exhibition truly engaging, we should [đề xuất]. This approach will successfully foster community connection and attract [đối tượng]."
];

// Food club
data["Food club"].q1.templates = [
  "The most bizarre dish I have ever tried is [tên món ăn]. Despite its [đặc điểm kỳ lạ], it was surprisingly delicious and offered a memorable tasting experience.",
  "During a recent trip, I bravely tasted [tên món ăn] made from [nguyên liệu]. It completely forced me to step out of my culinary comfort zone but tasted [cảm nhận].",
  "To my absolute surprise, the weirdest food I ate was [tên món ăn]. As an adventurous eater, I deeply appreciated the cultural authenticity behind [đặc điểm]."
];
data["Food club"].q2.templates = [
  "In my view, this trend is a double-edged sword because [lý do]. While exploring exotic delicacies boosts the local economy, it also carries [rủi ro].",
  "I firmly believe it is a positive development since it [lợi ích 1]. Trying unconventional ingredients significantly broadens one's palate and promotes [lợi ích 2].",
  "While it promotes cultural exchange, we must also consider [hạn chế]. It is crucial to exercise caution and make informed choices about [vấn đề]."
];
data["Food club"].q3.templates = [
  "I strongly recommend that we organize a [tên sự kiện] featuring [hoạt động]. This fun activity will definitely spark curiosity and attract [đối tượng].",
  "One fantastic approach is to set up [hoạt động] with unconventional ingredients. We can provide a unique sensory journey that will generate [kết quả].",
  "To maximize engagement, we could host a [tên cuộc thi] where members [hành động]. These interactive stalls will be incredibly entertaining and leave a lasting impression."
];

// Social club
data["Social club"].q1.templates = [
  "I usually hang out with my close friends on a [tần suất]. We typically [hoạt động 1] to share our latest updates and unwind after [thời gian bận rộn].",
  "Whenever time permits, we love to gather and [hoạt động]. It is a fantastic way to relieve daily stress and significantly strengthen our bond.",
  "My friends and I catch up regularly every [thời điểm]. We normally [hoạt động 1] or [hoạt động 2], which brings immense joy to our busy lives."
];
data["Social club"].q2.templates = [
  "While virtual interactions are highly convenient, I believe they often lack [điều còn thiếu]. Face-to-face meetings are crucial because they allow us to [lợi ích].",
  "It is concerning because relying too heavily on digital platforms can severely diminish [kỹ năng gì]. Teenagers might struggle to navigate real-life situations and feel [cảm xúc].",
  "Although social media allows instant messaging, it completely lacks [điều còn thiếu]. Without the ability to foster empathy, excessive screen time can frequently cause [hậu quả]."
];
data["Social club"].q3.templates = [
  "I strongly suggest that we sponsor poor children because it is an investment in [mục tiêu]. By providing [sự giúp đỡ], we can help them completely break [hậu quả].",
  "In my opinion, supporting the elderly who live alone is highly crucial. Offering [sự giúp đỡ] will significantly alleviate their loneliness and improve [điều gì].",
  "While both groups need help, focusing on [nhóm đối tượng] will make a lasting impact. If we raise funds effectively to [mục đích], they will eventually [kết quả]."
];

// Beautiful homes club
data["Beautiful homes club"].q1.templates = [
  "In my opinion, a beautiful home is primarily defined by [yếu tố 1] and [yếu tố 2]. These elements instantly create a cozy and welcoming atmosphere.",
  "Beyond just elegant furniture, what truly makes a home beautiful is the sense of [cảm giác] it provides. Decluttered spaces that reflect your personal taste can [kết quả].",
  "I strongly believe that a beautiful home must be filled with [yếu tố 1] and [yếu tố 2]. Even with minimalist design, cherished family moments genuinely make any living space stunning."
];
data["Beautiful homes club"].q2.templates = [
  "I completely disagree because that is a complete misconception. Price does not equal taste, and a home can look gorgeous through [giải pháp 1] and [giải pháp 2].",
  "While expensive items are nice, they are definitely not a determining factor. The true beauty of a home stems from [yếu tố 1] and [yếu tố 2].",
  "That statement is highly superficial. [yếu tố quan trọng hơn] matter much more. A well-organized room with repurposed old items will always feel much warmer than [thứ khác]."
];
data["Beautiful homes club"].q3.templates = [
  "I strongly support this brilliant idea because it will undoubtedly [kết quả 1]. By providing [nội dung chương trình], we can easily inspire viewers to [kết quả 2].",
  "This television show would be a fantastic opportunity to [kết quả]. We should definitely feature [nội dung] to offer highly relatable and visually stunning content.",
  "To make the show successful, I highly suggest that we [hành động 1] and [hành động 2]. Ensuring high production quality will make our advice appear professional."
];

// Garden club
data["Garden club"].q1.templates = [
  "My absolute favorite flower is the [tên hoa]. Its [đặc điểm] instantly evoke incredibly positive feelings and constantly inspire me to [hành động/cảm xúc].",
  "I have a deep affection for the [tên hoa]. It elegantly symbolizes [ý nghĩa 1] and [ý nghĩa 2] because it [đặc điểm nở hoa/phát triển].",
  "The flower I admire the most is the [tên hoa]. Not only does it thrive beautifully with minimal maintenance, but its [đặc điểm] also helps me [kết quả]."
];
data["Garden club"].q2.templates = [
  "Since your house is small, I highly recommend [giải pháp]. By installing [vật dụng 1] or using [vật dụng 2], you can easily maximize your limited space.",
  "One fantastic solution for limited space is to grow [tên cây] in [vị trí]. Not only do they require minimal maintenance, but they also provide [lợi ích].",
  "You should definitely consider utilizing [giải pháp 1] and [giải pháp 2]. These lovely low-maintenance plants fit perfectly on tiny desks and help [lợi ích]."
];
data["Garden club"].q3.templates = [
  "I strongly suggest that we host a [tên sự kiện]. Providing [thứ gì đó] and distributing [tài liệu] will effectively encourage active participation and spark immense interest.",
  "It would be a brilliant idea to set up a [tên hoạt động]. This exciting activity allows attendees to trade [thứ gì đó], effortlessly helping us build [kết quả].",
  "To attract more members, we could organize a [tên hoạt động] and invite [đối tượng khách mời]. Discussing [chủ đề] in such an engaging way will definitely foster [kết quả]."
];

// Save the updated part3Data
const newFileContent = `// This file is auto-generated\nexport const part3Data = ${JSON.stringify(data, null, 2)};\n`;
fs.writeFileSync(part3DataPath, newFileContent);
console.log('Successfully updated 5 clubs with fill-in-the-blank templates!');
