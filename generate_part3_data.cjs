const fs = require("fs");
const path = require("path");

const clubsDataPath = path.join(__dirname, "src", "data", "clubsData.js");

// Đọc clubsData 
const clubsFileContent = fs.readFileSync(clubsDataPath, "utf-8");
let clubsDataRaw = {};
try {
  const match = clubsFileContent.match(/export const clubsData = ({[\s\S]+});/);
  if (match) {
    clubsDataRaw = new Function("return " + match[1])();
  }
} catch (e) {
  console.error("Lỗi khi đọc clubsData.js", e);
}

const part3Data = {};

Object.keys(clubsDataRaw).forEach((clubName) => {
  let group = "lifestyle";
  const nameLower = clubName.toLowerCase();
  
  if (nameLower.match(/art|movie|cinema|film|photo|read|book|music|fashion|television|tv|cook/)) {
    group = "hobby";
  } else if (nameLower.match(/english|language|computer|tech|science|business|debate|college|writ/)) {
    group = "academic";
  } else if (nameLower.match(/sport|fitness|health|walk|outdoor|nature|garden/)) {
    group = "health";
  }

  // --- QUESTION 1 ---
  let q1_q = "Hi! Welcome to the club. I've been a member for a few months. Why did you decide to join this club and what do you hope to achieve here?";
  let q1_vocab = [];
  let q1_samples = [];

  if (group === "hobby") {
    q1_vocab = [
      "✨ [lý do tham gia]: <strong>share my passion for this field</strong> (chia sẻ đam mê trong lĩnh vực này), <strong>meet like-minded people</strong> (gặp gỡ những người cùng chí hướng), <strong>relax after a long day</strong> (thư giãn sau một ngày dài)",
      "✨ [mục tiêu]: <strong>enhance my creative skills</strong> (nâng cao kỹ năng sáng tạo), <strong>expand my knowledge</strong> (mở rộng kiến thức), <strong>find a healthy work-life balance</strong> (tìm kiếm sự cân bằng giữa công việc và cuộc sống)"
    ];
    q1_samples = [
      { en: "I decided to join this club to share my passion for this field and meet like-minded people. I hope to enhance my creative skills effectively.", vi: "Tôi quyết định tham gia câu lạc bộ này để chia sẻ đam mê và gặp gỡ những người cùng chí hướng. Tôi hy vọng sẽ nâng cao kỹ năng sáng tạo hiệu quả." },
      { en: "I joined the club mainly to relax after a long day at work. My main goal is to find a healthy work-life balance through our activities.", vi: "Tôi tham gia CLB chủ yếu để thư giãn sau ngày dài làm việc. Mục tiêu chính là tìm sự cân bằng giữa công việc và cuộc sống thông qua các hoạt động." },
      { en: "Being part of this club allows me to expand my knowledge significantly. I hope to learn from experienced members and improve my skills.", vi: "Tham gia CLB cho phép tôi mở rộng kiến thức đáng kể. Tôi hy vọng học hỏi từ các thành viên giàu kinh nghiệm và cải thiện kỹ năng." }
    ];
  } else if (group === "academic") {
    q1_vocab = [
      "✨ [lý do tham gia]: <strong>boost my career prospects</strong> (nâng cao triển vọng nghề nghiệp), <strong>expand my professional network</strong> (mở rộng mạng lưới chuyên môn), <strong>stay updated with new trends</strong> (cập nhật các xu hướng mới)",
      "✨ [mục tiêu]: <strong>improve my practical skills</strong> (cải thiện kỹ năng thực tế), <strong>gain valuable experience</strong> (thu được kinh nghiệm quý báu), <strong>exchange innovative ideas</strong> (trao đổi những ý tưởng đổi mới)"
    ];
    q1_samples = [
      { en: "I joined this club to boost my career prospects and expand my professional network. I hope to improve my practical skills for my future jobs.", vi: "Tôi tham gia CLB để nâng cao triển vọng nghề nghiệp và mở rộng mạng lưới. Tôi hy vọng cải thiện kỹ năng thực tế cho công việc tương lai." },
      { en: "My main reason for joining is to stay updated with new trends in this field. I aim to exchange innovative ideas with other members.", vi: "Lý do chính của tôi là để cập nhật các xu hướng mới trong lĩnh vực này. Tôi hướng đến việc trao đổi ý tưởng đổi mới với các thành viên khác." },
      { en: "I decided to become a member to gain valuable experience from experts. I hope to apply this knowledge to solve real-world problems effectively.", vi: "Tôi quyết định trở thành thành viên để thu được kinh nghiệm từ các chuyên gia. Tôi hy vọng áp dụng kiến thức này để giải quyết vấn đề thực tế hiệu quả." }
    ];
  } else if (group === "health") {
    q1_vocab = [
      "✨ [lý do tham gia]: <strong>stay in good shape</strong> (giữ dáng), <strong>relieve daily stress</strong> (giảm căng thẳng hàng ngày), <strong>adopt a healthier lifestyle</strong> (áp dụng lối sống lành mạnh hơn)",
      "✨ [mục tiêu]: <strong>strengthen my physical endurance</strong> (tăng cường sức bền thể chất), <strong>boost my emotional well-being</strong> (nâng cao sức khỏe tinh thần), <strong>burn calories effectively</strong> (đốt cháy calo hiệu quả)"
    ];
    q1_samples = [
      { en: "I decided to join this club to stay in good shape and relieve daily stress. I hope to strengthen my physical endurance effectively.", vi: "Tôi tham gia CLB để giữ dáng và giảm căng thẳng. Tôi hy vọng sẽ tăng cường sức bền thể chất một cách hiệu quả." },
      { en: "I joined because I want to adopt a healthier lifestyle. My main goal is to boost my emotional well-being and meet active people.", vi: "Tôi tham gia vì muốn áp dụng lối sống lành mạnh hơn. Mục tiêu chính là nâng cao sức khỏe tinh thần và gặp gỡ những người năng động." },
      { en: "Being a member helps me burn calories effectively after working hours. I hope to maintain my physical health and regain my energy.", vi: "Là một thành viên giúp tôi đốt cháy calo hiệu quả sau giờ làm. Tôi hy vọng duy trì sức khỏe thể chất và nạp lại năng lượng." }
    ];
  } else {
    q1_vocab = [
      "✨ [lý do tham gia]: <strong>broaden my horizons</strong> (mở rộng tầm nhìn), <strong>contribute to the community</strong> (đóng góp cho cộng đồng), <strong>make meaningful connections</strong> (tạo ra những kết nối ý nghĩa)",
      "✨ [mục tiêu]: <strong>experience new things</strong> (trải nghiệm những điều mới), <strong>develop my soft skills</strong> (phát triển kỹ năng mềm), <strong>find peace of mind</strong> (tìm sự bình yên trong tâm trí)"
    ];
    q1_samples = [
      { en: "I joined this club to broaden my horizons and make meaningful connections. I hope to experience new things and learn from others.", vi: "Tôi tham gia CLB để mở rộng tầm nhìn và tạo các kết nối ý nghĩa. Tôi hy vọng trải nghiệm những điều mới mẻ và học hỏi từ người khác." },
      { en: "My primary reason for joining is to contribute to the community actively. I aim to develop my soft skills through our diverse activities.", vi: "Lý do chính của tôi là để đóng góp tích cực cho cộng đồng. Tôi hướng đến việc phát triển kỹ năng mềm thông qua các hoạt động đa dạng." },
      { en: "I decided to join because I want to find peace of mind after a busy week. I hope to balance my life and enjoy our events.", vi: "Tôi quyết định tham gia vì muốn tìm sự bình yên sau một tuần bận rộn. Tôi hy vọng cân bằng cuộc sống và tận hưởng các sự kiện." }
    ];
  }

  // --- QUESTION 2 ---
  let q2_q = "Hello! Some people think that spending time on club activities is a waste of time and money. What is your opinion on this?";
  let q2_vocab = [
    "✨ [quan điểm]: <strong>I completely disagree</strong> (Tôi hoàn toàn không đồng ý), <strong>I partly agree, but...</strong> (Tôi đồng ý một phần, nhưng...), <strong>That is a misconception</strong> (Đó là một quan niệm sai lầm)",
    "✨ [lợi ích đối lập]: <strong>a worthwhile investment</strong> (một khoản đầu tư xứng đáng), <strong>bring long-term benefits</strong> (mang lại lợi ích lâu dài), <strong>improve my overall well-being</strong> (cải thiện sức khỏe tổng thể), <strong>enrich my life experiences</strong> (làm phong phú trải nghiệm sống)"
  ];
  let q2_samples = [
    { en: "I completely disagree with that idea. Joining club activities is a worthwhile investment because it helps me relieve stress and enrich my life experiences.", vi: "Tôi hoàn toàn không đồng ý. Tham gia hoạt động CLB là khoản đầu tư xứng đáng vì nó giúp tôi giảm căng thẳng và làm phong phú trải nghiệm sống." },
    { en: "That is a common misconception. In fact, these activities bring long-term benefits, such as improving my overall well-being and expanding my social network.", vi: "Đó là một quan niệm sai lầm phổ biến. Thực tế, các hoạt động này mang lại lợi ích lâu dài, như cải thiện sức khỏe tổng thể và mở rộng mối quan hệ xã hội." },
    { en: "I partly agree if the club is expensive. However, most activities are affordable and provide a great chance to develop myself and learn new skills.", vi: "Tôi đồng ý một phần nếu CLB quá đắt đỏ. Tuy nhiên, hầu hết hoạt động đều phải chăng và mang lại cơ hội tuyệt vời để phát triển bản thân và học kỹ năng mới." }
  ];

  // --- QUESTION 3 ---
  let q3_q = "Hi there! Our club is planning to organize a special event next month to attract more people in our local community. Do you have any suggestions for what we should do?";
  let q3_vocab = [
    "✨ [gợi ý sự kiện]: <strong>host a free workshop</strong> (tổ chức một buổi hội thảo miễn phí), <strong>organize an outdoor festival</strong> (tổ chức một lễ hội ngoài trời), <strong>run a charity campaign</strong> (thực hiện một chiến dịch từ thiện), <strong>set up an exhibition</strong> (tổ chức một buổi triển lãm)",
    "✨ [mục đích]: <strong>raise public awareness</strong> (nâng cao nhận thức cộng đồng), <strong>attract potential members</strong> (thu hút thành viên tiềm năng), <strong>create a welcoming environment</strong> (tạo ra một môi trường thân thiện)"
  ];
  let q3_samples = [
    { en: "I highly recommend that we host a free workshop for beginners. This will definitely attract potential members and create a welcoming environment for everyone.", vi: "Tôi chân thành đề xuất chúng ta nên tổ chức hội thảo miễn phí cho người mới. Điều này chắc chắn sẽ thu hút thành viên tiềm năng và tạo môi trường thân thiện." },
    { en: "Why don't we organize an outdoor festival next month? It is an excellent way to raise public awareness about our club and engage the community.", vi: "Tại sao chúng ta không tổ chức lễ hội ngoài trời vào tháng tới? Đây là cách tuyệt vời để nâng cao nhận thức cộng đồng về CLB và gắn kết mọi người." },
    { en: "I think running a charity campaign would be a fantastic idea. It not only helps people in need but also builds a positive image for our club.", vi: "Tôi nghĩ thực hiện một chiến dịch từ thiện sẽ là ý tưởng tuyệt vời. Nó không chỉ giúp người khó khăn mà còn xây dựng hình ảnh tích cực cho CLB." }
  ];

  let q1_vi = "Chào bạn! Chào mừng đến với câu lạc bộ. Tôi đã là thành viên được vài tháng. Tại sao bạn lại quyết định tham gia câu lạc bộ này và bạn hy vọng đạt được điều gì ở đây?";
  let q1_templates = [
    "I decided to join this club to [lý do tham gia]. I hope to [mục tiêu].",
    "I joined the club mainly to [lý do tham gia]. My main goal is to [mục tiêu] through our activities.",
    "Being part of this club allows me to [lý do tham gia]. I hope to [mục tiêu]."
  ];

  let q2_vi = "Xin chào! Một số người nghĩ rằng dành thời gian cho các hoạt động câu lạc bộ là lãng phí thời gian và tiền bạc. Ý kiến của bạn về vấn đề này là gì?";
  let q2_templates = [
    "[quan điểm] with that idea. Joining club activities is [lợi ích đối lập] because it helps me relieve stress.",
    "[quan điểm]. In fact, these activities [lợi ích đối lập] and expand my social network.",
    "[quan điểm] if the club is expensive. However, most activities are affordable and provide a great chance to develop myself."
  ];

  let q3_vi = "Chào bạn! Câu lạc bộ của chúng ta đang lên kế hoạch tổ chức một sự kiện đặc biệt vào tháng tới để thu hút thêm nhiều người trong cộng đồng. Bạn có gợi ý nào không?";
  let q3_templates = [
    "I highly recommend that we [gợi ý sự kiện]. This will definitely [mục đích] and engage everyone.",
    "Why don't we [gợi ý sự kiện] next month? It is an excellent way to [mục đích].",
    "I think [gợi ý sự kiện] would be a fantastic idea. It not only helps people but also [mục đích]."
  ];

  part3Data[clubName] = {
    q1: { member: "Member A", question: q1_q, vi: q1_vi, vocab: q1_vocab, templates: q1_templates, samples: q1_samples },
    q2: { member: "Member B", question: q2_q, vi: q2_vi, vocab: q2_vocab, templates: q2_templates, samples: q2_samples },
    q3: { member: "Member C", question: q3_q, vi: q3_vi, vocab: q3_vocab, templates: q3_templates, samples: q3_samples }
  };
});

const outputContent = `// Tệp này được tạo tự động bởi generate_part3_data.cjs
// Vui lòng không sửa trực tiếp nếu không cần thiết. Cập nhật script thay thế.

export const part3Data = ${JSON.stringify(part3Data, null, 2)};
`;

const targetPath = path.join(__dirname, "src", "data", "part3Data.js");
fs.writeFileSync(targetPath, outputContent, "utf-8");
console.log("Successfully generated src/data/part3Data.js");
