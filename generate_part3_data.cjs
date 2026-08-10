const fs = require('fs');
const path = require('path');

// Read the questions from the JSON file
const questionsPath = path.join(__dirname, 'questions_part3.json');
let questionsData = {};
if (fs.existsSync(questionsPath)) {
  questionsData = JSON.parse(fs.readFileSync(questionsPath, 'utf8'));
}

const clubs = [
  "Art club", "Food club", "Social club", "Beautiful homes club", "Garden club",
  "Sports club", "Book club", "Healthy club", "Technology club", "Business club",
  "Home living club", "Television club", "Car club", "Language club", "Travel club",
  "Cinema club", "Language club 2", "Travel club 2", "College club", "Movie club",
  "Walking club", "Community club", "Museum club", "Writing club", "Computer club",
  "Music club", "Fashion club", "Cooking club", "Nature club", "English club 2",
  "Debate club", "Outdoor club", "English club 3", "English club", "Photography club",
  "Nature club 2", "Film club", "Reading club", "Fitness club", "Science club"
];

// Helper to determine club group for generic vocab/templates
function getClubGroup(clubName) {
  const name = clubName.toLowerCase();
  if (name.includes('art') || name.includes('music') || name.includes('writing') || name.includes('photography') || name.includes('cinema') || name.includes('film') || name.includes('movie')) return 'hobby';
  if (name.includes('language') || name.includes('english') || name.includes('reading') || name.includes('book') || name.includes('college') || name.includes('science') || name.includes('computer') || name.includes('technology') || name.includes('business') || name.includes('debate')) return 'academic';
  if (name.includes('sports') || name.includes('healthy') || name.includes('fitness') || name.includes('cooking') || name.includes('food') || name.includes('walking')) return 'health';
  return 'lifestyle';
}

const part3Data = {};

clubs.forEach((clubName, index) => {
  const group = getClubGroup(clubName);
  
  // Try to get exact questions, fallback to generic
  const exactQuestions = questionsData[clubName] || [];
  const q1_q = exactQuestions[0] || `Tell me a time when you participated in a related activity.`;
  const q2_q = exactQuestions[1] || `Some people think this activity is a waste of time. What is your opinion?`;
  const q3_q = exactQuestions[2] || `Our club is planning an event to attract more members. What do you suggest?`;
  
  // Generic vocabulary (already expanded)
  let q1_vocab, q2_vocab, q3_vocab;
  let q1_samples, q2_samples, q3_samples;

  if (group === "hobby") {
    q1_vocab = [
      "✨ [lý do tham gia]: <strong>share my passion for this field</strong> (chia sẻ đam mê trong lĩnh vực này), <strong>meet like-minded people</strong> (gặp gỡ những người cùng chí hướng), <strong>relax after a long day</strong> (thư giãn sau một ngày dài), <strong>escape from daily routine</strong> (thoát khỏi thói quen hàng ngày), <strong>pursue a lifelong interest</strong> (theo đuổi sở thích cả đời), <strong>immerse myself in creativity</strong> (đắm chìm trong sự sáng tạo)",
      "✨ [mục tiêu]: <strong>enhance my creative skills</strong> (nâng cao kỹ năng sáng tạo), <strong>expand my knowledge</strong> (mở rộng kiến thức), <strong>find a healthy work-life balance</strong> (tìm kiếm sự cân bằng giữa công việc và cuộc sống), <strong>express myself freely</strong> (thể hiện bản thân một cách tự do), <strong>master new techniques</strong> (thành thạo các kỹ thuật mới), <strong>stay inspired and motivated</strong> (giữ nguồn cảm hứng và động lực)",
      "✨ [lợi ích cá nhân]: <strong>boost my imagination</strong> (thúc đẩy trí tưởng tượng), <strong>clear my mind</strong> (làm trí óc minh mẫn), <strong>spark my creativity</strong> (khơi dậy sự sáng tạo), <strong>cultivate a positive mindset</strong> (nuôi dưỡng tư duy tích cực)"
    ];
    q1_samples = [
      { en: "Regarding your question, I believe this is a wonderful topic. Sharing my passion for this field helps me relax after a long day. I hope to enhance my creative skills effectively in the future.", vi: "Về câu hỏi của bạn, tôi tin đây là một chủ đề tuyệt vời. Chia sẻ đam mê trong lĩnh vực này giúp tôi thư giãn sau một ngày dài. Tôi hy vọng sẽ nâng cao kỹ năng sáng tạo một cách hiệu quả." },
      { en: "In my opinion, engaging in these activities allows me to meet like-minded people. It is a fantastic way to escape from my daily routine and fully immerse myself in creativity every single weekend.", vi: "Theo tôi, tham gia các hoạt động này cho phép tôi gặp gỡ những người cùng chí hướng. Đây là một cách tuyệt vời để thoát khỏi thói quen hàng ngày và hoàn toàn đắm chìm trong sự sáng tạo mỗi cuối tuần." },
      { en: "To be honest, I decided to join to find a healthy work-life balance. Not only does it spark my creativity, but it also helps me clear my mind and cultivate a highly positive mindset.", vi: "Thành thật mà nói, tôi quyết định tham gia để tìm sự cân bằng giữa công việc và cuộc sống. Nó không chỉ khơi dậy sự sáng tạo mà còn giúp tôi làm trí óc minh mẫn và nuôi dưỡng một tư duy tích cực." }
    ];
  } else if (group === "academic") {
    q1_vocab = [
      "✨ [lý do tham gia]: <strong>boost my career prospects</strong> (nâng cao triển vọng nghề nghiệp), <strong>expand my professional network</strong> (mở rộng mạng lưới chuyên môn), <strong>stay updated with new trends</strong> (cập nhật các xu hướng mới), <strong>acquire in-demand skills</strong> (trang bị các kỹ năng đang được săn đón), <strong>build a strong foundation</strong> (xây dựng nền tảng vững chắc), <strong>stay ahead of the curve</strong> (đi trước đón đầu)",
      "✨ [mục tiêu]: <strong>improve my practical skills</strong> (cải thiện kỹ năng thực tế), <strong>gain valuable experience</strong> (thu được kinh nghiệm quý báu), <strong>exchange innovative ideas</strong> (trao đổi những ý tưởng đổi mới), <strong>overcome professional challenges</strong> (vượt qua những thách thức nghề nghiệp), <strong>unlock my full potential</strong> (khai phá toàn bộ tiềm năng), <strong>think outside the box</strong> (suy nghĩ đột phá)",
      "✨ [năng lực lõi]: <strong>enhance critical thinking</strong> (nâng cao tư duy phản biện), <strong>solve complex problems</strong> (giải quyết các vấn đề phức tạp), <strong>foster academic excellence</strong> (thúc đẩy sự xuất sắc trong học thuật), <strong>promote continuous learning</strong> (thúc đẩy học tập không ngừng)"
    ];
    q1_samples = [
      { en: "Regarding your question, I believe this is an interesting topic. I want to boost my career prospects and expand my professional network. I hope to improve my practical skills for my future jobs.", vi: "Về câu hỏi của bạn, tôi tin đây là một chủ đề thú vị. Tôi muốn nâng cao triển vọng nghề nghiệp và mở rộng mạng lưới. Tôi hy vọng cải thiện kỹ năng thực tế cho công việc tương lai." },
      { en: "In my opinion, participating in this area helps me stay updated with new trends. It is an excellent opportunity to acquire in-demand skills and exchange innovative ideas with many talented people around the world.", vi: "Theo tôi, tham gia lĩnh vực này giúp tôi cập nhật các xu hướng mới. Đây là cơ hội tuyệt vời để trang bị các kỹ năng đang được săn đón và trao đổi ý tưởng đổi mới với nhiều người tài năng." },
      { en: "To be honest, my main goal is to enhance my critical thinking. By solving complex problems regularly, I can easily overcome professional challenges and unlock my full potential in this highly competitive industry.", vi: "Thành thật mà nói, mục tiêu chính của tôi là nâng cao tư duy phản biện. Bằng cách giải quyết các vấn đề phức tạp thường xuyên, tôi có thể vượt qua thách thức và khai phá tiềm năng trong ngành công nghiệp cạnh tranh này." }
    ];
  } else if (group === "health") {
    q1_vocab = [
      "✨ [lý do tham gia]: <strong>stay in good shape</strong> (giữ dáng), <strong>relieve daily stress</strong> (giảm căng thẳng hàng ngày), <strong>adopt a healthier lifestyle</strong> (áp dụng lối sống lành mạnh hơn), <strong>maintain a balanced diet</strong> (duy trì chế độ ăn cân bằng), <strong>keep fit and active</strong> (giữ cơ thể cân đối và năng động), <strong>overcome a sedentary lifestyle</strong> (vượt qua lối sống thụ động)",
      "✨ [mục tiêu]: <strong>strengthen my physical endurance</strong> (tăng cường sức bền thể chất), <strong>boost my emotional well-being</strong> (nâng cao sức khỏe tinh thần), <strong>burn calories effectively</strong> (đốt cháy calo hiệu quả), <strong>build muscle strength</strong> (tăng cường sức mạnh cơ bắp), <strong>improve cardiovascular health</strong> (cải thiện sức khỏe tim mạch), <strong>increase flexibility</strong> (tăng cường sự dẻo dai)",
      "✨ [trạng thái tinh thần]: <strong>feel refreshed and energized</strong> (cảm thấy sảng khoái và tràn đầy năng lượng), <strong>clear mental fog</strong> (xua tan sự trì trệ của trí óc), <strong>boost self-confidence</strong> (nâng cao sự tự tin), <strong>achieve inner peace</strong> (đạt được sự bình yên nội tâm)"
    ];
    q1_samples = [
      { en: "Regarding your question, I believe this is a crucial topic. I want to stay in good shape and relieve daily stress. I hope to strengthen my physical endurance effectively in the upcoming months.", vi: "Về câu hỏi của bạn, tôi tin đây là một chủ đề quan trọng. Tôi muốn giữ dáng và giảm căng thẳng. Tôi hy vọng sẽ tăng cường sức bền thể chất một cách hiệu quả." },
      { en: "In my opinion, adopting a healthier lifestyle is extremely necessary nowadays. By keeping fit and active, we can improve our cardiovascular health and burn calories effectively after sitting in the office all day.", vi: "Theo tôi, áp dụng một lối sống lành mạnh hơn là cực kỳ cần thiết. Bằng cách giữ cơ thể cân đối và năng động, chúng ta có thể cải thiện sức khỏe tim mạch và đốt cháy calo hiệu quả." },
      { en: "To be honest, the best part is that I feel completely refreshed and energized. It helps clear my mental fog, overcome my sedentary lifestyle, and eventually achieve true inner peace during difficult times.", vi: "Thành thật mà nói, phần tuyệt nhất là tôi cảm thấy sảng khoái và tràn đầy năng lượng. Nó giúp xua tan sự trì trệ, vượt qua lối sống thụ động và đạt được sự bình yên trong tâm hồn." }
    ];
  } else {
    q1_vocab = [
      "✨ [lý do tham gia]: <strong>broaden my horizons</strong> (mở rộng tầm nhìn), <strong>contribute to the community</strong> (đóng góp cho cộng đồng), <strong>make meaningful connections</strong> (tạo ra những kết nối ý nghĩa), <strong>step out of my comfort zone</strong> (bước ra khỏi vùng an toàn), <strong>seek personal growth</strong> (tìm kiếm sự phát triển cá nhân), <strong>embrace diversity</strong> (đón nhận sự đa dạng)",
      "✨ [mục tiêu]: <strong>experience new things</strong> (trải nghiệm những điều mới), <strong>develop my soft skills</strong> (phát triển kỹ năng mềm), <strong>find peace of mind</strong> (tìm sự bình yên trong tâm trí), <strong>give back to society</strong> (cống hiến lại cho xã hội), <strong>build lifelong friendships</strong> (xây dựng tình bạn trọn đời), <strong>enrich my soul</strong> (làm phong phú tâm hồn)",
      "✨ [kỹ năng xã hội]: <strong>improve communication skills</strong> (cải thiện kỹ năng giao tiếp), <strong>foster teamwork</strong> (thúc đẩy tinh thần đồng đội), <strong>build empathy</strong> (xây dựng sự thấu cảm), <strong>navigate social situations easily</strong> (dễ dàng xoay sở trong các tình huống xã hội)"
    ];
    q1_samples = [
      { en: "Regarding your question, I believe this is a fascinating topic. I want to broaden my horizons and make meaningful connections. I hope to experience new things and learn from others effectively.", vi: "Về câu hỏi của bạn, tôi tin đây là một chủ đề thú vị. Tôi muốn mở rộng tầm nhìn và tạo các kết nối ý nghĩa. Tôi hy vọng trải nghiệm những điều mới mẻ và học hỏi từ người khác." },
      { en: "In my opinion, stepping out of my comfort zone allows me to seek personal growth. It is a fantastic opportunity to develop my soft skills, embrace diversity, and ultimately give back to society.", vi: "Theo tôi, bước ra khỏi vùng an toàn cho phép tôi tìm kiếm sự phát triển cá nhân. Đây là cơ hội tuyệt vời để phát triển kỹ năng mềm, đón nhận sự đa dạng và cống hiến cho xã hội." },
      { en: "To be honest, I truly enjoy activities that help me build lifelong friendships. They significantly improve my communication skills, foster great teamwork, and enrich my soul after stressful working hours in the city.", vi: "Thành thật mà nói, tôi thực sự thích các hoạt động giúp tôi xây dựng tình bạn trọn đời. Chúng cải thiện đáng kể kỹ năng giao tiếp, thúc đẩy tinh thần đồng đội và làm phong phú tâm hồn tôi." }
    ];
  }

  // --- QUESTION 2 ---
  q2_vocab = [
    "✨ [quan điểm]: <strong>I completely disagree</strong> (Tôi hoàn toàn không đồng ý), <strong>I partly agree, but...</strong> (Tôi đồng ý một phần, nhưng...), <strong>That is a misconception</strong> (Đó là một quan niệm sai lầm), <strong>I couldn't agree more</strong> (Tôi hoàn toàn đồng ý), <strong>I have mixed feelings about this</strong> (Tôi có cảm xúc lẫn lộn về việc này)",
    "✨ [lợi ích đối lập]: <strong>a worthwhile investment</strong> (một khoản đầu tư xứng đáng), <strong>bring long-term benefits</strong> (mang lại lợi ích lâu dài), <strong>improve my overall well-being</strong> (cải thiện sức khỏe tổng thể), <strong>enrich my life experiences</strong> (làm phong phú trải nghiệm sống), <strong>foster personal development</strong> (thúc đẩy sự phát triển cá nhân), <strong>offer priceless value</strong> (mang lại giá trị vô giá), <strong>pay off in the long run</strong> (mang lại thành quả về lâu dài)",
    "✨ [bác bỏ ý kiến]: <strong>it is totally unfounded</strong> (điều đó hoàn toàn vô căn cứ), <strong>miss the bigger picture</strong> (bỏ lỡ bức tranh toàn cảnh), <strong>focus too much on the short term</strong> (quá chú trọng vào trước mắt), <strong>underestimate the true value</strong> (đánh giá thấp giá trị thực sự)"
  ];
  q2_samples = [
    { en: "I completely disagree with that idea. Engaging in these activities is actually a worthwhile investment because it helps me relieve stress, foster personal development, and significantly enrich my valuable life experiences.", vi: "Tôi hoàn toàn không đồng ý. Tham gia hoạt động này thực chất là khoản đầu tư xứng đáng vì nó giúp tôi giảm căng thẳng, phát triển cá nhân và làm phong phú trải nghiệm sống." },
    { en: "I partly agree, but saying it is bad is a misconception. They simply miss the bigger picture. In fact, these experiences bring long-term benefits and offer priceless value to our overall well-being.", vi: "Tôi đồng ý một phần, nhưng nói nó tệ là một quan niệm sai lầm. Họ đơn giản là bỏ lỡ bức tranh toàn cảnh. Thực tế, trải nghiệm này mang lại lợi ích lâu dài và giá trị vô giá cho sức khỏe." },
    { en: "That argument is totally unfounded. People often underestimate the true value of these activities. I couldn't agree more that dedicating time here will definitely pay off in the long run for everyone involved.", vi: "Lập luận đó hoàn toàn vô căn cứ. Mọi người thường đánh giá thấp giá trị thực sự. Tôi hoàn toàn đồng ý rằng dành thời gian ở đây chắc chắn sẽ mang lại thành quả về lâu dài cho tất cả mọi người." }
  ];

  // --- QUESTION 3 ---
  q3_vocab = [
    "✨ [gợi ý sự kiện]: <strong>host a free workshop</strong> (tổ chức một buổi hội thảo miễn phí), <strong>organize an outdoor festival</strong> (tổ chức một lễ hội ngoài trời), <strong>run a charity campaign</strong> (thực hiện một chiến dịch từ thiện), <strong>set up an exhibition</strong> (tổ chức một buổi triển lãm), <strong>launch a social media challenge</strong> (phát động một thử thách trên mạng xã hội), <strong>plan a networking mixer</strong> (lên kế hoạch cho buổi giao lưu kết nối), <strong>arrange a weekend retreat</strong> (sắp xếp một chuyến dã ngoại cuối tuần)",
    "✨ [mục đích]: <strong>raise public awareness</strong> (nâng cao nhận thức cộng đồng), <strong>attract potential members</strong> (thu hút thành viên tiềm năng), <strong>create a welcoming environment</strong> (tạo ra một môi trường thân thiện), <strong>boost community engagement</strong> (tăng cường sự gắn kết cộng đồng), <strong>foster a sense of belonging</strong> (nuôi dưỡng cảm giác thuộc về), <strong>leave a lasting impression</strong> (để lại ấn tượng sâu sắc)",
    "✨ [cách thức thực hiện]: <strong>collaborate with local sponsors</strong> (hợp tác với các nhà tài trợ địa phương), <strong>leverage digital platforms</strong> (tận dụng các nền tảng kỹ thuật số), <strong>distribute eye-catching flyers</strong> (phân phát các tờ rơi bắt mắt), <strong>offer attractive incentives</strong> (cung cấp các ưu đãi hấp dẫn), <strong>invite guest speakers</strong> (mời các diễn giả khách mời)"
  ];
  q3_samples = [
    { en: "I highly recommend that we host a free workshop for beginners. This will definitely attract potential members, create a welcoming environment for everyone, and effectively boost our community engagement in the future.", vi: "Tôi chân thành đề xuất chúng ta nên tổ chức hội thảo miễn phí cho người mới. Điều này chắc chắn sẽ thu hút thành viên tiềm năng, tạo môi trường thân thiện và tăng cường sự gắn kết cộng đồng." },
    { en: "We should consider launching a social media challenge to raise public awareness. By leveraging digital platforms and offering attractive incentives, we can reach a younger audience and leave a lasting impression on them.", vi: "Chúng ta nên xem xét phát động một thử thách trên mạng xã hội để nâng cao nhận thức cộng đồng. Bằng cách tận dụng các nền tảng số và đưa ra ưu đãi, chúng ta có thể tiếp cận khán giả trẻ." },
    { en: "How about organizing an outdoor festival or a charity campaign? We can collaborate with local sponsors to distribute eye-catching flyers. This fantastic initiative will foster a sense of belonging among all participants.", vi: "Còn việc tổ chức một lễ hội ngoài trời hay chiến dịch từ thiện thì sao? Chúng ta có thể hợp tác với các nhà tài trợ địa phương để phát tờ rơi. Sáng kiến này sẽ nuôi dưỡng cảm giác thuộc về." }
  ];

  part3Data[clubName] = {
    q1: {
      member: "Member A",
      question: q1_q,
      vi: "Câu hỏi này đang được AI dịch sang tiếng Việt... (Đang cập nhật)",
      vocab: q1_vocab,
      templates: [
        "Regarding your question, I believe this is a wonderful topic. [trả lời ý 1] because [lý do].",
        "In my opinion, engaging in these activities allows me to [trả lời ý chính]. It is a fantastic way to [lợi ích].",
        "To be honest, I decided to do this to [trả lời]. Not only does it [lợi ích 1], but it also helps me [lợi ích 2]."
      ],
      samples: q1_samples
    },
    q2: {
      member: "Member B",
      question: q2_q,
      vi: "Câu hỏi này đang được AI dịch sang tiếng Việt... (Đang cập nhật)",
      vocab: q2_vocab,
      templates: [
        "I completely disagree with that idea. [Quan điểm của bạn] is actually a worthwhile investment because [lý do].",
        "I partly agree, but saying it is bad is a misconception. In fact, [quan điểm của bạn] brings long-term benefits.",
        "That argument is totally unfounded. People often underestimate the true value of [vấn đề được nhắc tới]. I believe that [quan điểm của bạn]."
      ],
      samples: q2_samples
    },
    q3: {
      member: "Member C",
      question: q3_q,
      vi: "Câu hỏi này đang được AI dịch sang tiếng Việt... (Đang cập nhật)",
      vocab: q3_vocab,
      templates: [
        "I highly recommend that we [đề xuất 1]. This will definitely attract potential members and create a welcoming environment.",
        "We should consider [đề xuất 2] to raise public awareness. By leveraging digital platforms, we can reach a wider audience.",
        "How about organizing [đề xuất 3]? We can collaborate with local sponsors to make this fantastic initiative successful."
      ],
      samples: q3_samples
    }
  };
});

const fileContent = `// This file is auto-generated
export const part3Data = ${JSON.stringify(part3Data, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'part3Data.js'), fileContent);
console.log('Successfully updated src/data/part3Data.js with real English questions!');
