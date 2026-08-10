const fs = require('fs');
const path = require('path');

const part3DataPath = path.join(__dirname, 'src', 'data', 'part3Data.js');
let fileData = fs.readFileSync(part3DataPath, 'utf8');
const jsonStr = fileData.replace('// This file is auto-generated\nexport const part3Data = ', '').replace(/;\n?$/, '');
const data = JSON.parse(jsonStr);

// 1. Art club
data["Art club"].q1.templates = [
  "Regarding your question, a treasured item I have kept for ages is [Đồ vật ý nghĩa]. It holds immense sentimental value and brings back [Cảm xúc].",
  "One thing that holds immense sentimental value to me is [Đồ vật ý nghĩa]. I [Bảo quản] carefully because it represents [Cảm xúc].",
  "To be honest, the oldest thing I own is [Đồ vật ý nghĩa]. By ensuring to [Bảo quản], I feel deeply attached to it because it evokes [Cảm xúc]."
];
data["Art club"].q2.templates = [
  "I believe this [Thực trạng] is primarily caused by [Nguyên nhân]. Buying new products is often cheaper than repairing broken ones.",
  "In my opinion, this concerning trend happens because of [Nguyên nhân]. Unfortunately, this excessive consumerism inevitably leads to [Hậu quả].",
  "It is undeniable that people constantly upgrade their belongings to follow [Thực trạng]. However, this dangerous habit significantly increases [Hậu quả]."
];
data["Art club"].q3.templates = [
  "I highly recommend that we [Hoạt động trưng bày]. Doing this will undoubtedly [Kết quả].",
  "One fantastic idea is to encourage members to [Kể chuyện]. We can arrange items chronologically to show how things have evolved, creating [Kết quả].",
  "To make the exhibition truly engaging, we should [Hoạt động trưng bày]. This approach will successfully [Kết quả] and encourage members to [Kể chuyện]."
];

// 2. Food club
data["Food club"].q1.templates = [
  "The most bizarre dish I have ever tried is [Món ăn]. Despite its unusual look, it was surprisingly delicious and offered [Trải nghiệm].",
  "During a recent trip, I bravely tasted [Món ăn]. It completely forced me to [Trải nghiệm] but it truly reflects [Văn hóa].",
  "To my absolute surprise, the weirdest food I ate was [Món ăn]. As an adventurous eater, I deeply appreciated the [Văn hóa]."
];
data["Food club"].q2.templates = [
  "In my view, this trend is [Đánh giá]. While exploring exotic delicacies helps [Tích cực], it also carries [Tiêu cực].",
  "I firmly believe it is a positive development since it helps [Tích cực]. Trying unconventional ingredients significantly broadens one's palate.",
  "While it helps [Tích cực], we must also consider [Tiêu cực]. It is crucial to [Đánh giá] about this issue."
];
data["Food club"].q3.templates = [
  "I strongly recommend that we [Hoạt động]. This fun activity will definitely [Trải nghiệm] and help [Mục tiêu].",
  "One fantastic approach is to [Hoạt động]. By doing this, we can provide [Trải nghiệm] that will generate [Mục tiêu].",
  "To achieve our [Mục tiêu], we could [Hoạt động]. These interactive stalls will be incredibly entertaining and provide [Trải nghiệm]."
];

// 3. Social club
data["Social club"].q1.templates = [
  "I usually hang out with my close friends [Tần suất]. We typically [Hoạt động] to share our latest updates and [Lợi ích].",
  "Whenever time permits, we love to gather and [Hoạt động]. It is a fantastic way to [Lợi ích] and strengthen our bond.",
  "My friends and I catch up regularly [Tần suất]. We normally [Hoạt động], which brings immense joy and helps [Lợi ích]."
];
data["Social club"].q2.templates = [
  "While [Giao tiếp ảo] are highly convenient, I believe they often [Hạn chế]. Face-to-face meetings are crucial because they allow us to [Tầm quan trọng thực tế].",
  "It is concerning because relying too heavily on [Giao tiếp ảo] can severely [Hạn chế]. Teenagers might struggle to navigate real-life situations.",
  "Although social media allows [Giao tiếp ảo], it completely lacks the warmth of in-person communication. We need to [Tầm quan trọng thực tế] otherwise it will [Hạn chế]."
];
data["Social club"].q3.templates = [
  "I strongly suggest that we sponsor poor children because it helps [Trẻ em nghèo]. By deciding to [Hành động], we can help them completely break the vicious cycle of poverty.",
  "In my opinion, supporting the elderly who live alone is highly crucial. Offering them support will significantly [Người già neo đơn] and [Hành động].",
  "While both groups need help, focusing on poor children will [Hành động]. If we raise funds effectively to [Trẻ em nghèo], they will eventually give back to society."
];

// 4. Beautiful homes club
data["Beautiful homes club"].q1.templates = [
  "In my opinion, a beautiful home is primarily defined by [Kiến trúc & Nội thất]. These elements instantly create [Không khí].",
  "Beyond just [Kiến trúc & Nội thất], what truly makes a home beautiful is [Không khí]. Decluttered spaces that reflect your personal taste can provide [Kết nối].",
  "I strongly believe that a beautiful home must be filled with [Kết nối]. Even with [Kiến trúc & Nội thất], cherished family moments genuinely create [Không khí]."
];
data["Beautiful homes club"].q2.templates = [
  "I completely disagree because that is [Bác bỏ]. Price does not equal taste, and a home can look gorgeous through [Giá trị thực sự] or [Giải pháp thay thế].",
  "While expensive items are nice, they are [Bác bỏ]. The true beauty of a home stems from [Giá trị thực sự], such as utilizing [Giải pháp thay thế].",
  "That statement is [Bác bỏ]. [Giá trị thực sự] matter much more. A well-organized room with [Giải pháp thay thế] will always feel much warmer."
];
data["Beautiful homes club"].q3.templates = [
  "I strongly support this brilliant idea because it will undoubtedly [Tác động]. By providing [Nội dung chương trình], we can easily inspire viewers.",
  "This television show would be a fantastic opportunity to [Tác động]. We should definitely feature [Nội dung chương trình] and [Sản xuất] to offer highly relatable content.",
  "To make the show successful, I highly suggest that we [Sản xuất]. Sharing [Nội dung chương trình] will make our advice appear professional and [Tác động]."
];

// 5. Garden club
data["Garden club"].q1.templates = [
  "My absolute favorite flower is the sunflower. Its [Đặc điểm] instantly evoke positive feelings and [Ý nghĩa].",
  "I have a deep affection for the lotus. It elegantly symbolizes [Ý nghĩa] and only needs [Chăm sóc].",
  "The flower I admire the most is the lavender. Not only does it thrive beautifully with [Chăm sóc], but its [Đặc điểm] also helps me relax."
];
data["Garden club"].q2.templates = [
  "Since your house is small, I highly recommend [Giải pháp không gian]. By utilizing this, you can easily grow [Lựa chọn cây trồng].",
  "One fantastic solution for limited space is to grow [Lựa chọn cây trồng]. Not only do they require minimal maintenance, but they also provide [Lợi ích].",
  "You should definitely consider [Giải pháp không gian]. These lovely [Lựa chọn cây trồng] fit perfectly on tiny desks and help [Lợi ích]."
];
data["Garden club"].q3.templates = [
  "I strongly suggest that we [Hoạt động thực hành]. Providing free seeds and [Chia sẻ kiến thức] will effectively help [Mục tiêu].",
  "It would be a brilliant idea to [Hoạt động thực hành]. This exciting activity allows attendees to trade plants, effortlessly helping us [Mục tiêu].",
  "To attract more members, we could [Chia sẻ kiến thức]. Discussing sustainable practices in such an engaging way will definitely [Mục tiêu]."
];


const newFileContent = `// This file is auto-generated\nexport const part3Data = ${JSON.stringify(data, null, 2)};\n`;
fs.writeFileSync(part3DataPath, newFileContent);
console.log('Successfully updated 5 clubs with perfectly matching templates!');
