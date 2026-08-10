const fs = require('fs');
const path = require('path');

const part3DataPath = path.join(__dirname, 'src', 'data', 'part3Data.js');
let fileData = fs.readFileSync(part3DataPath, 'utf8');
const jsonStr = fileData.replace('// This file is auto-generated\nexport const part3Data = ', '').replace(/;\n?$/, '');
const data = JSON.parse(jsonStr);

function buildClub(clubName, q1_q, q1_vi, q1_vocab, q1_tpl, q1_samples,
                             q2_q, q2_vi, q2_vocab, q2_tpl, q2_samples,
                             q3_q, q3_vi, q3_vocab, q3_tpl, q3_samples) {
  data[clubName] = {
    q1: { member: "Member A", question: q1_q, vi: q1_vi, vocab: q1_vocab, templates: q1_tpl, samples: q1_samples },
    q2: { member: "Member B", question: q2_q, vi: q2_vi, vocab: q2_vocab, templates: q2_tpl, samples: q2_samples },
    q3: { member: "Member C", question: q3_q, vi: q3_vi, vocab: q3_vocab, templates: q3_tpl, samples: q3_samples },
  }
}

// 1. ART CLUB
buildClub("Art club",
  "I kept a painting for a long time. Tell me a thing that you have had for a long time.",
  "Tôi đã giữ một bức tranh trong một thời gian dài. Hãy kể cho tôi nghe một món đồ mà bạn đã giữ rất lâu.",
  [
    "✨ [Đồ vật ý nghĩa]: <strong>a vintage camera</strong> (chiếc máy ảnh cổ), <strong>a cute teddy bear</strong> (một con gấu bông dễ thương), <strong>a family heirloom</strong> (vật gia truyền)",
    "✨ [Đặc điểm]: <strong>holds immense sentimental value</strong> (mang giá trị tinh thần to lớn), <strong>is a special gift from my best friend</strong> (là món quà đặc biệt từ bạn thân), <strong>represents my family heritage</strong> (đại diện cho di sản gia đình)",
    "✨ [Hành động]: <strong>cherish it deeply</strong> (vô cùng trân trọng nó), <strong>clean it regularly</strong> (lau chùi nó thường xuyên), <strong>preserve it carefully</strong> (bảo quản nó cẩn thận)"
  ],
  [
    "Regarding your question, a treasured item I have kept for ages is [Đồ vật ý nghĩa]. Because it [Đặc điểm], I always [Hành động].",
    "One thing that [Đặc điểm] is [Đồ vật ý nghĩa]. I make sure to [Hành động] because it is irreplaceable to me.",
    "To be honest, the oldest thing I own is [Đồ vật ý nghĩa]. I [Hành động] since it constantly [Đặc điểm]."
  ],
  [
    { en: "Regarding your question, a treasured item I have kept for ages is a cute teddy bear. Because it is a special gift from my best friend, I always clean it regularly.", vi: "Về câu hỏi của bạn, một món đồ quý giá tôi đã giữ từ rất lâu là một con gấu bông dễ thương. Bởi vì nó là một món quà đặc biệt từ bạn thân, tôi luôn lau chùi nó thường xuyên." },
    { en: "One thing that holds immense sentimental value is a vintage camera. I make sure to preserve it carefully because it is irreplaceable to me.", vi: "Một thứ mang giá trị tinh thần to lớn là chiếc máy ảnh cổ. Tôi đảm bảo bảo quản nó cẩn thận vì nó không thể thay thế đối với tôi." },
    { en: "To be honest, the oldest thing I own is a family heirloom. I cherish it deeply since it constantly represents my family heritage.", vi: "Thành thật mà nói, thứ cũ nhất mà tôi sở hữu là vật gia truyền. Tôi vô cùng trân trọng nó vì nó luôn đại diện cho di sản gia đình tôi." }
  ],
  "I would like to learn painting, but I have not found an effective way. Should I take a course at my local college? Please, give me some advice.",
  "Tôi muốn học vẽ tranh, nhưng tôi chưa tìm ra cách hiệu quả. Tôi có nên tham gia một khóa học tại trường cao đẳng địa phương không? Xin hãy cho tôi lời khuyên.",
  [
    "✨ [Nhận định]: <strong>a fantastic idea</strong> (một ý tưởng tuyệt vời), <strong>a worthwhile investment</strong> (một sự đầu tư xứng đáng), <strong>the most effective way</strong> (cách hiệu quả nhất)",
    "✨ [Lợi ích khóa học]: <strong>master basic techniques quickly</strong> (nắm vững các kỹ thuật cơ bản nhanh chóng), <strong>receive professional guidance</strong> (nhận được sự hướng dẫn chuyên nghiệp), <strong>interact with experienced instructors</strong> (tương tác với những người hướng dẫn giàu kinh nghiệm)",
    "✨ [Kết quả]: <strong>improve your artistic skills significantly</strong> (cải thiện đáng kể kỹ năng nghệ thuật của bạn), <strong>build a solid foundation</strong> (xây dựng một nền tảng vững chắc), <strong>find your unique painting style</strong> (tìm ra phong cách vẽ độc đáo của bạn)"
  ],
  [
    "I believe taking a course at your local college is [Nhận định]. It will help you [Lợi ích khóa học] and eventually [Kết quả].",
    "In my opinion, enrolling in a formal class is [Nhận định]. You will [Lợi ích khóa học], which can [Kết quả].",
    "If I were you, I would definitely register because it is [Nhận định]. Having the opportunity to [Lợi ích khóa học] will certainly [Kết quả]."
  ],
  [
    { en: "I believe taking a course at your local college is a fantastic idea. It will help you master basic techniques quickly and eventually build a solid foundation.", vi: "Tôi tin rằng tham gia một khóa học tại trường cao đẳng địa phương là một ý tưởng tuyệt vời. Nó sẽ giúp bạn nắm vững các kỹ thuật cơ bản nhanh chóng và cuối cùng là xây dựng một nền tảng vững chắc." },
    { en: "In my opinion, enrolling in a formal class is a worthwhile investment. You will receive professional guidance, which can improve your artistic skills significantly.", vi: "Theo ý kiến của tôi, đăng ký một lớp học chính thức là một sự đầu tư xứng đáng. Bạn sẽ nhận được sự hướng dẫn chuyên nghiệp, điều này có thể cải thiện đáng kể kỹ năng nghệ thuật của bạn." },
    { en: "If I were you, I would definitely register because it is the most effective way. Having the opportunity to interact with experienced instructors will certainly help you find your unique painting style.", vi: "Nếu tôi là bạn, tôi chắc chắn sẽ đăng ký vì đó là cách hiệu quả nhất. Việc có cơ hội tương tác với những người hướng dẫn giàu kinh nghiệm chắc chắn sẽ giúp bạn tìm ra phong cách vẽ độc đáo của bạn." }
  ],
  "Street art – where people paint on the building – is becoming popular. However, some people criticize that it is bad. What is your opinion?",
  "Nghệ thuật đường phố - nơi mọi người vẽ lên tòa nhà - đang trở nên phổ biến. Tuy nhiên, một số người chỉ trích rằng nó là xấu. Ý kiến của bạn là gì?",
  [
    "✨ [Đánh giá]: <strong>a beautiful form of self-expression</strong> (một hình thức thể hiện bản thân tuyệt đẹp), <strong>an essential part of urban culture</strong> (một phần thiết yếu của văn hóa đô thị), <strong>a vibrant addition to the city</strong> (một sự bổ sung sống động cho thành phố)",
    "✨ [Mặt tích cực]: <strong>beautify dull concrete walls</strong> (làm đẹp những bức tường bê tông nhàm chán), <strong>convey powerful social messages</strong> (truyền tải những thông điệp xã hội mạnh mẽ), <strong>showcase local artistic talents</strong> (trưng bày tài năng nghệ thuật địa phương)",
    "✨ [Giải pháp]: <strong>designate specific areas for artists</strong> (chỉ định các khu vực cụ thể cho nghệ sĩ), <strong>regulate it properly</strong> (quản lý nó một cách hợp lý), <strong>differentiate it from vandalism</strong> (phân biệt nó với hành vi phá hoại)"
  ],
  [
    "I completely disagree with the criticism because street art is [Đánh giá]. It can successfully [Mặt tích cực].",
    "While some consider it vandalism, I think it is [Đánh giá]. Instead of banning it, we should [Giải pháp] to [Mặt tích cực].",
    "In my view, street art is [Đánh giá] that helps [Mặt tích cực]. If authorities [Giải pháp], it will benefit everyone."
  ],
  [
    { en: "I completely disagree with the criticism because street art is a beautiful form of self-expression. It can successfully convey powerful social messages.", vi: "Tôi hoàn toàn không đồng ý với lời chỉ trích vì nghệ thuật đường phố là một hình thức thể hiện bản thân tuyệt đẹp. Nó có thể truyền tải thành công các thông điệp xã hội mạnh mẽ." },
    { en: "While some consider it vandalism, I think it is a vibrant addition to the city. Instead of banning it, we should designate specific areas for artists to showcase local artistic talents.", vi: "Mặc dù một số người coi đó là hành vi phá hoại, tôi nghĩ nó là một sự bổ sung sống động cho thành phố. Thay vì cấm, chúng ta nên chỉ định các khu vực cụ thể cho các nghệ sĩ để trưng bày tài năng nghệ thuật địa phương." },
    { en: "In my view, street art is an essential part of urban culture that helps beautify dull concrete walls. If authorities regulate it properly, it will benefit everyone.", vi: "Theo quan điểm của tôi, nghệ thuật đường phố là một phần thiết yếu của văn hóa đô thị giúp làm đẹp những bức tường bê tông nhàm chán. Nếu chính quyền quản lý nó một cách hợp lý, nó sẽ mang lại lợi ích cho tất cả mọi người." }
  ]
);

// 2. FOOD CLUB
buildClub("Food club",
  "Tell me the last time you had a good meal.",
  "Hãy kể cho tôi nghe lần gần nhất bạn có một bữa ăn ngon.",
  [
    "✨ [Thời điểm & Dịp]: <strong>last weekend to celebrate my birthday</strong> (cuối tuần trước để mừng sinh nhật tôi), <strong>two days ago during a family gathering</strong> (hai ngày trước trong một buổi tụ họp gia đình), <strong>yesterday after a stressful working day</strong> (hôm qua sau một ngày làm việc căng thẳng)",
    "✨ [Món ăn]: <strong>a delicious homemade pizza</strong> (một chiếc bánh pizza tự làm thơm ngon), <strong>some authentic traditional pho</strong> (một ít phở truyền thống chuẩn vị), <strong>a mouth-watering seafood hotpot</strong> (một nồi lẩu hải sản hấp dẫn)",
    "✨ [Cảm nhận]: <strong>it tasted absolutely heavenly</strong> (nó có vị ngon tuyệt đỉnh), <strong>the flavors were perfectly balanced</strong> (hương vị được cân bằng hoàn hảo), <strong>it instantly melted in my mouth</strong> (nó tan ngay trong miệng tôi)"
  ],
  [
    "The last time I had a genuinely good meal was [Thời điểm & Dịp]. I enjoyed [Món ăn] and [Cảm nhận].",
    "I vividly remember eating [Món ăn] [Thời điểm & Dịp]. I must admit that [Cảm nhận].",
    "To be honest, my best recent dining experience was [Thời điểm & Dịp]. We ordered [Món ăn], and [Cảm nhận]."
  ],
  [
    { en: "The last time I had a genuinely good meal was last weekend to celebrate my birthday. I enjoyed a delicious homemade pizza and it tasted absolutely heavenly.", vi: "Lần gần nhất tôi có một bữa ăn thực sự ngon là cuối tuần trước để mừng sinh nhật. Tôi đã thưởng thức một chiếc bánh pizza tự làm ngon tuyệt và nó có vị ngon tuyệt đỉnh." },
    { en: "I vividly remember eating some authentic traditional pho yesterday after a stressful working day. I must admit that the flavors were perfectly balanced.", vi: "Tôi nhớ rất rõ đã ăn một chút phở truyền thống chuẩn vị hôm qua sau một ngày làm việc căng thẳng. Tôi phải thừa nhận rằng hương vị được cân bằng hoàn hảo." },
    { en: "To be honest, my best recent dining experience was two days ago during a family gathering. We ordered a mouth-watering seafood hotpot, and it instantly melted in my mouth.", vi: "Thành thật mà nói, trải nghiệm ăn uống tốt nhất gần đây của tôi là hai ngày trước trong một buổi tụ họp gia đình. Chúng tôi gọi một nồi lẩu hải sản hấp dẫn, và nó tan ngay trong miệng tôi." }
  ],
  "I want to visit your country. Do you have any suggestions for me on what delicious food to eat?",
  "Tôi muốn đến thăm đất nước của bạn. Bạn có gợi ý nào cho tôi về những món ăn ngon không?",
  [
    "✨ [Món đề xuất]: <strong>our world-famous beef noodle soup</strong> (món phở bò nổi tiếng thế giới của chúng tôi), <strong>savory Vietnamese crispy pancakes</strong> (bánh xèo Việt Nam giòn rụm), <strong>the iconic banh mi sandwich</strong> (bánh mì kẹp mang tính biểu tượng)",
    "✨ [Đặc điểm món ăn]: <strong>it features a rich and aromatic broth</strong> (nó có nước dùng đậm đà và thơm phức), <strong>it is filled with fresh herbs and meat</strong> (nó chứa đầy các loại rau thơm tươi và thịt), <strong>it perfectly balances sweet and savory flavors</strong> (nó cân bằng hoàn hảo hương vị mặn ngọt)",
    "✨ [Lời khuyên]: <strong>try it at local street food stalls</strong> (hãy thử nó tại các quầy thức ăn đường phố địa phương), <strong>eat it while it is still piping hot</strong> (hãy ăn nó khi nó vẫn còn nóng hổi), <strong>pair it with traditional iced tea</strong> (kết hợp nó với trà đá truyền thống)"
  ],
  [
    "If you visit my country, you must definitely try [Món đề xuất]. [Đặc điểm món ăn], so I highly recommend you [Lời khuyên].",
    "I strongly suggest that you taste [Món đề xuất]. Since [Đặc điểm món ăn], the best way to enjoy it is to [Lời khuyên].",
    "A must-try delicacy here is [Món đề xuất]. [Đặc điểm món ăn], and I advise you to [Lời khuyên] for an authentic experience."
  ],
  [
    { en: "If you visit my country, you must definitely try our world-famous beef noodle soup. It features a rich and aromatic broth, so I highly recommend you try it at local street food stalls.", vi: "Nếu bạn đến thăm đất nước tôi, bạn nhất định phải thử món phở bò nổi tiếng thế giới của chúng tôi. Nó có nước dùng đậm đà và thơm phức, vì vậy tôi thực sự khuyên bạn nên thử nó ở các quầy thức ăn đường phố địa phương." },
    { en: "I strongly suggest that you taste savory Vietnamese crispy pancakes. Since it perfectly balances sweet and savory flavors, the best way to enjoy it is to eat it while it is still piping hot.", vi: "Tôi thực sự khuyên bạn nên nếm thử bánh xèo Việt Nam giòn rụm. Vì nó cân bằng hoàn hảo giữa hương vị mặn và ngọt, cách tốt nhất để thưởng thức nó là ăn khi nó vẫn còn nóng hổi." },
    { en: "A must-try delicacy here is the iconic banh mi sandwich. It is filled with fresh herbs and meat, and I advise you to pair it with traditional iced tea for an authentic experience.", vi: "Một món ngon không thể bỏ qua ở đây là bánh mì kẹp mang tính biểu tượng. Nó chứa đầy các loại thảo mộc tươi và thịt, và tôi khuyên bạn nên kết hợp nó với trà đá truyền thống để có trải nghiệm đích thực." }
  ],
  "Today, many people eat pizza. But it is not healthy and they should limit eating it. What is your opinion?",
  "Ngày nay, nhiều người ăn bánh pizza. Nhưng nó không tốt cho sức khỏe và họ nên hạn chế ăn nó. Ý kiến của bạn là gì?",
  [
    "✨ [Quan điểm]: <strong>totally agree with this statement</strong> (hoàn toàn đồng ý với nhận định này), <strong>partly agree with this opinion</strong> (đồng ý một phần với ý kiến này), <strong>think we should strike a balance</strong> (nghĩ rằng chúng ta nên đạt được sự cân bằng)",
    "✨ [Lý do sức khỏe]: <strong>it contains excessive amounts of calories</strong> (nó chứa quá nhiều calo), <strong>it is a highly processed food</strong> (nó là một loại thực phẩm chế biến kỹ), <strong>it can lead to dangerous obesity</strong> (nó có thể dẫn đến bệnh béo phì nguy hiểm)",
    "✨ [Giải pháp thay thế]: <strong>consume it occasionally as a treat</strong> (thỉnh thoảng ăn nó như một phần thưởng), <strong>make homemade versions with fresh vegetables</strong> (làm các phiên bản tự làm với rau củ tươi), <strong>choose healthier toppings and thin crusts</strong> (chọn các loại nhân lành mạnh hơn và đế mỏng)"
  ],
  [
    "I [Quan điểm] because [Lý do sức khỏe]. Instead of eating it daily, we should [Giải pháp thay thế].",
    "In my opinion, I [Quan điểm]. Since [Lý do sức khỏe], the best approach is to [Giải pháp thay thế].",
    "While pizza is incredibly tasty, I [Quan điểm] because [Lý do sức khỏe]. Therefore, it is wise to [Giải pháp thay thế]."
  ],
  [
    { en: "I totally agree with this statement because it contains excessive amounts of calories. Instead of eating it daily, we should consume it occasionally as a treat.", vi: "Tôi hoàn toàn đồng ý với nhận định này vì nó chứa lượng calo quá mức. Thay vì ăn hàng ngày, chúng ta nên tiêu thụ nó thỉnh thoảng như một phần thưởng." },
    { en: "In my opinion, I partly agree with this opinion. Since it is a highly processed food, the best approach is to make homemade versions with fresh vegetables.", vi: "Theo ý kiến của tôi, tôi đồng ý một phần với ý kiến này. Vì nó là một loại thực phẩm chế biến cao, cách tốt nhất là làm các phiên bản tự làm với các loại rau tươi." },
    { en: "While pizza is incredibly tasty, I think we should strike a balance because it can lead to dangerous obesity. Therefore, it is wise to choose healthier toppings and thin crusts.", vi: "Mặc dù bánh pizza cực kỳ ngon, tôi nghĩ chúng ta nên đạt được sự cân bằng vì nó có thể dẫn đến bệnh béo phì nguy hiểm. Do đó, thật khôn ngoan khi chọn toppings lành mạnh hơn và lớp vỏ mỏng." }
  ]
);

// 3. SOCIAL CLUB
buildClub("Social club",
  "What do you do when you go out with your friends?",
  "Bạn thường làm gì khi đi ra ngoài với bạn bè?",
  [
    "✨ [Hoạt động ăn uống]: <strong>grab a cup of coffee at a cozy café</strong> (đi uống cà phê tại một quán nhỏ ấm cúng), <strong>dine out at local eateries</strong> (ăn ngoài tại các quán ăn địa phương), <strong>have a lovely picnic in the park</strong> (tổ chức một buổi dã ngoại đáng yêu trong công viên)",
    "✨ [Hoạt động giải trí]: <strong>watch a blockbuster movie</strong> (xem một bộ phim bom tấn), <strong>go window shopping at the mall</strong> (đi ngắm đồ ở trung tâm thương mại), <strong>play board games together</strong> (cùng nhau chơi board game)",
    "✨ [Lợi ích]: <strong>share our latest updates</strong> (chia sẻ những thông tin mới nhất), <strong>unwind after a hectic week</strong> (thư giãn sau một tuần bận rộn), <strong>strengthen our tight bond</strong> (củng cố mối quan hệ bền chặt của chúng tôi)"
  ],
  [
    "When hanging out, we usually [Hoạt động ăn uống] and then [Hoạt động giải trí]. This helps us [Lợi ích].",
    "We love to [Hoạt động ăn uống] or [Hoạt động giải trí]. It is always a fantastic way to [Lợi ích].",
    "Typically, my friends and I [Hoạt động ăn uống]. Afterwards, we might [Hoạt động giải trí] in order to [Lợi ích]."
  ],
  [
    { en: "When hanging out, we usually grab a cup of coffee at a cozy café and then watch a blockbuster movie. This helps us unwind after a hectic week.", vi: "Khi đi chơi, chúng tôi thường uống cà phê tại một quán cà phê ấm cúng và sau đó xem một bộ phim bom tấn. Điều này giúp chúng tôi thư giãn sau một tuần bận rộn." },
    { en: "We love to dine out at local eateries or go window shopping at the mall. It is always a fantastic way to strengthen our tight bond.", vi: "Chúng tôi thích ăn ngoài tại các quán ăn địa phương hoặc đi ngắm đồ ở trung tâm mua sắm. Đó luôn là một cách tuyệt vời để củng cố mối quan hệ bền chặt của chúng tôi." },
    { en: "Typically, my friends and I have a lovely picnic in the park. Afterwards, we might play board games together in order to share our latest updates.", vi: "Thông thường, tôi và bạn bè có một buổi dã ngoại tuyệt đẹp trong công viên. Sau đó, chúng tôi có thể cùng nhau chơi board game để chia sẻ những thông tin mới nhất của chúng tôi." }
  ],
  "Is it easier for young people to have friends?",
  "Thanh niên kết bạn có dễ dàng hơn không?",
  [
    "✨ [Quan điểm]: <strong>absolutely believe it is easier</strong> (hoàn toàn tin rằng điều đó dễ dàng hơn), <strong>think they have a huge advantage</strong> (nghĩ rằng họ có một lợi thế to lớn), <strong>strongly agree with this</strong> (rất đồng tình với điều này)",
    "✨ [Lý do]: <strong>have more free time to socialize</strong> (có nhiều thời gian rảnh rỗi hơn để giao lưu), <strong>are generally more open-minded</strong> (nhìn chung là cởi mở hơn), <strong>frequently participate in group activities</strong> (thường xuyên tham gia các hoạt động nhóm)",
    "✨ [Yếu tố hỗ trợ]: <strong>meet peers easily at school</strong> (gặp gỡ bạn bè đồng trang lứa dễ dàng ở trường), <strong>share common interests and hobbies</strong> (chia sẻ những sở thích và đam mê chung), <strong>connect quickly through social media</strong> (kết nối nhanh chóng qua mạng xã hội)"
  ],
  [
    "I [Quan điểm] because they [Lý do]. Furthermore, they can [Yếu tố hỗ trợ].",
    "In my opinion, I [Quan điểm]. Young people [Lý do], which allows them to [Yếu tố hỗ trợ].",
    "I [Quan điểm] since they [Lý do]. Besides, it is convenient for them to [Yếu tố hỗ trợ]."
  ],
  [
    { en: "I absolutely believe it is easier because they have more free time to socialize. Furthermore, they can meet peers easily at school.", vi: "Tôi hoàn toàn tin rằng điều đó dễ dàng hơn vì họ có nhiều thời gian rảnh rỗi hơn để giao lưu. Hơn nữa, họ có thể gặp gỡ bạn bè đồng trang lứa dễ dàng ở trường." },
    { en: "In my opinion, I think they have a huge advantage. Young people are generally more open-minded, which allows them to share common interests and hobbies.", vi: "Theo ý kiến của tôi, tôi nghĩ họ có một lợi thế to lớn. Những người trẻ tuổi nói chung là cởi mở hơn, điều này cho phép họ chia sẻ những sở thích và đam mê chung." },
    { en: "I strongly agree with this since they frequently participate in group activities. Besides, it is convenient for them to connect quickly through social media.", vi: "Tôi rất đồng tình với điều này vì họ thường xuyên tham gia các hoạt động nhóm. Bên cạnh đó, thật thuận tiện cho họ khi kết nối nhanh chóng thông qua mạng xã hội." }
  ],
  "It is much easier to make new friends these days because of computers and mobile phones. Do you agree? Why or why not?",
  "Ngày nay kết bạn mới dễ dàng hơn rất nhiều nhờ máy tính và điện thoại di động. Bạn có đồng ý không? Tại sao hoặc tại sao không?",
  [
    "✨ [Sự đồng ý]: <strong>completely agree with this statement</strong> (hoàn toàn đồng ý với nhận định này), <strong>see the tremendous benefits of technology</strong> (thấy được những lợi ích to lớn của công nghệ), <strong>firmly support this idea</strong> (ủng hộ mạnh mẽ ý tưởng này)",
    "✨ [Lý do công nghệ]: <strong>overcome geographical barriers instantly</strong> (vượt qua các rào cản địa lý ngay lập tức), <strong>join online communities easily</strong> (tham gia các cộng đồng trực tuyến dễ dàng), <strong>find like-minded people globally</strong> (tìm những người cùng chí hướng trên toàn cầu)",
    "✨ [Hạn chế cần lưu ý]: <strong>maintain genuine face-to-face interactions</strong> (duy trì các tương tác trực tiếp chân thật), <strong>be careful of fake online identities</strong> (cẩn thận với các danh tính trực tuyến giả mạo), <strong>avoid digital addiction</strong> (tránh chứng nghiện kỹ thuật số)"
  ],
  [
    "I [Sự đồng ý] because devices help us [Lý do công nghệ]. However, we must still [Hạn chế cần lưu ý].",
    "In my view, I [Sự đồng ý]. We can [Lý do công nghệ], but it remains crucial to [Hạn chế cần lưu ý].",
    "I [Sự đồng ý] since smartphones allow us to [Lý do công nghệ]. Even so, we should [Hạn chế cần lưu ý]."
  ],
  [
    { en: "I completely agree with this statement because devices help us overcome geographical barriers instantly. However, we must still maintain genuine face-to-face interactions.", vi: "Tôi hoàn toàn đồng ý với nhận định này vì các thiết bị giúp chúng ta vượt qua rào cản địa lý ngay lập tức. Tuy nhiên, chúng ta vẫn phải duy trì các tương tác trực tiếp chân chính." },
    { en: "In my view, I see the tremendous benefits of technology. We can join online communities easily, but it remains crucial to be careful of fake online identities.", vi: "Theo quan điểm của tôi, tôi thấy những lợi ích to lớn của công nghệ. Chúng ta có thể tham gia các cộng đồng trực tuyến một cách dễ dàng, nhưng vẫn rất quan trọng để cẩn thận với những danh tính ảo giả mạo." },
    { en: "I firmly support this idea since smartphones allow us to find like-minded people globally. Even so, we should avoid digital addiction.", vi: "Tôi hết sức ủng hộ ý tưởng này vì điện thoại thông minh cho phép chúng ta tìm những người cùng chí hướng trên toàn cầu. Mặc dù vậy, chúng ta nên tránh việc nghiện thiết bị kỹ thuật số." }
  ]
);

// 4. BEAUTIFUL HOMES CLUB
buildClub("Beautiful homes club",
  "I have a bad relationship with my neighbors because they often make noise. Tell me how is your relationship with your neighbors?",
  "Tôi có mối quan hệ tồi tệ với những người hàng xóm vì họ thường làm ồn. Hãy cho tôi biết mối quan hệ của bạn với hàng xóm như thế nào?",
  [
    "✨ [Tình trạng mối quan hệ]: <strong>have a harmonious relationship</strong> (có một mối quan hệ hài hòa), <strong>get along very well</strong> (rất hòa thuận), <strong>maintain a respectful distance</strong> (duy trì một khoảng cách tôn trọng)",
    "✨ [Hành động tích cực]: <strong>respect each other's privacy</strong> (tôn trọng sự riêng tư của nhau), <strong>always help each other in need</strong> (luôn giúp đỡ lẫn nhau khi cần thiết), <strong>share food occasionally</strong> (thỉnh thoảng chia sẻ đồ ăn)",
    "✨ [Giải quyết vấn đề]: <strong>communicate openly and politely</strong> (giao tiếp cởi mở và lịch sự), <strong>avoid unnecessary conflicts</strong> (tránh những xung đột không cần thiết), <strong>tolerate minor inconveniences</strong> (chấp nhận những sự bất tiện nhỏ)"
  ],
  [
    "Fortunately, I [Tình trạng mối quan hệ] with them. We [Hành động tích cực] and try to [Giải quyết vấn đề].",
    "I am lucky to [Tình trạng mối quan hệ]. Because we [Hành động tích cực], we can easily [Giải quyết vấn đề].",
    "Actually, I [Tình trạng mối quan hệ]. Whenever there is noise, we [Giải quyết vấn đề] and still [Hành động tích cực]."
  ],
  [
    { en: "Fortunately, I have a harmonious relationship with them. We respect each other's privacy and try to communicate openly and politely.", vi: "May mắn thay, tôi có mối quan hệ hài hòa với họ. Chúng tôi tôn trọng sự riêng tư của nhau và cố gắng giao tiếp cởi mở và lịch sự." },
    { en: "I am lucky to get along very well. Because we always help each other in need, we can easily avoid unnecessary conflicts.", vi: "Tôi may mắn khi rất hòa thuận. Vì chúng tôi luôn giúp đỡ nhau khi cần, chúng tôi có thể dễ dàng tránh những xung đột không cần thiết." },
    { en: "Actually, I maintain a respectful distance. Whenever there is noise, we tolerate minor inconveniences and still share food occasionally.", vi: "Thực ra, tôi duy trì một khoảng cách tôn trọng. Bất cứ khi nào có tiếng ồn, chúng tôi chấp nhận những sự bất tiện nhỏ và thỉnh thoảng vẫn chia sẻ đồ ăn." }
  ],
  "Do you prefer living in old buildings or modern buildings? Why?",
  "Bạn thích sống ở những tòa nhà cũ hay tòa nhà hiện đại hơn? Tại sao?",
  [
    "✨ [Lựa chọn]: <strong>definitely prefer modern buildings</strong> (chắc chắn thích các tòa nhà hiện đại hơn), <strong>lean towards newly built apartments</strong> (thiên về các căn hộ mới xây), <strong>choose contemporary housing</strong> (chọn nhà ở đương đại)",
    "✨ [Lý do hiện đại]: <strong>offer advanced security systems</strong> (cung cấp hệ thống an ninh tiên tiến), <strong>provide high-quality amenities</strong> (cung cấp các tiện nghi chất lượng cao), <strong>feature smart home technologies</strong> (có công nghệ nhà thông minh)",
    "✨ [Lợi ích]: <strong>ensure a convenient lifestyle</strong> (đảm bảo một lối sống tiện lợi), <strong>require far less maintenance</strong> (yêu cầu bảo trì ít hơn nhiều), <strong>save significantly on energy bills</strong> (tiết kiệm đáng kể hóa đơn năng lượng)"
  ],
  [
    "I [Lựa chọn] because they [Lý do hiện đại]. This helps [Lợi ích].",
    "In my opinion, I [Lựa chọn]. They [Lý do hiện đại], which will [Lợi ích].",
    "Personally, I [Lựa chọn] since they [Lý do hiện đại] and [Lợi ích]."
  ],
  [
    { en: "I definitely prefer modern buildings because they offer advanced security systems. This helps ensure a convenient lifestyle.", vi: "Tôi chắc chắn thích các tòa nhà hiện đại hơn vì chúng cung cấp các hệ thống an ninh tiên tiến. Điều này giúp đảm bảo một lối sống thuận tiện." },
    { en: "In my opinion, I lean towards newly built apartments. They provide high-quality amenities, which will require far less maintenance.", vi: "Theo ý kiến của tôi, tôi nghiêng về các căn hộ mới xây. Chúng cung cấp các tiện nghi chất lượng cao, điều này sẽ đòi hỏi ít công bảo trì hơn nhiều." },
    { en: "Personally, I choose contemporary housing since they feature smart home technologies and save significantly on energy bills.", vi: "Cá nhân tôi, tôi chọn nhà ở đương đại vì chúng trang bị công nghệ nhà thông minh và tiết kiệm đáng kể hóa đơn năng lượng." }
  ],
  "The house should be designed in a way that is good for the environment. Do you agree?",
  "Ngôi nhà nên được thiết kế theo cách tốt cho môi trường. Bạn có đồng ý không?",
  [
    "✨ [Sự đồng ý]: <strong>completely agree with this</strong> (hoàn toàn đồng ý với điều này), <strong>strongly support eco-friendly designs</strong> (mạnh mẽ ủng hộ các thiết kế thân thiện với môi trường), <strong>think this is absolutely essential</strong> (nghĩ rằng điều này là hoàn toàn cần thiết)",
    "✨ [Đặc điểm thiết kế]: <strong>install solar panels</strong> (lắp đặt các tấm pin năng lượng mặt trời), <strong>maximize natural light and ventilation</strong> (tối đa hóa ánh sáng và thông gió tự nhiên), <strong>use sustainable building materials</strong> (sử dụng vật liệu xây dựng bền vững)",
    "✨ [Tác động]: <strong>reduce carbon emissions globally</strong> (giảm lượng khí thải carbon trên toàn cầu), <strong>protect our fragile ecosystem</strong> (bảo vệ hệ sinh thái mỏng manh của chúng sửa), <strong>lower long-term living costs</strong> (giảm chi phí sinh hoạt dài hạn)"
  ],
  [
    "I [Sự đồng ý] because it helps [Tác động]. For instance, we can [Đặc điểm thiết kế].",
    "In my view, I [Sự đồng ý]. If we [Đặc điểm thiết kế], we will [Tác động].",
    "I [Sự đồng ý] since we need to [Tác động]. Therefore, designers should [Đặc điểm thiết kế]."
  ],
  [
    { en: "I completely agree with this because it helps reduce carbon emissions globally. For instance, we can install solar panels.", vi: "Tôi hoàn toàn đồng ý với điều này vì nó giúp giảm lượng khí thải carbon trên toàn cầu. Ví dụ, chúng ta có thể lắp đặt các tấm pin năng lượng mặt trời." },
    { en: "In my view, I strongly support eco-friendly designs. If we maximize natural light and ventilation, we will lower long-term living costs.", vi: "Theo quan điểm của tôi, tôi mạnh mẽ ủng hộ các thiết kế thân thiện với môi trường. Nếu chúng ta tối đa hóa ánh sáng tự nhiên và thông gió, chúng ta sẽ giảm được chi phí sinh hoạt dài hạn." },
    { en: "I think this is absolutely essential since we need to protect our fragile ecosystem. Therefore, designers should use sustainable building materials.", vi: "Tôi nghĩ điều này hoàn toàn cần thiết vì chúng ta cần bảo vệ hệ sinh thái mỏng manh của mình. Do đó, các nhà thiết kế nên sử dụng vật liệu xây dựng bền vững." }
  ]
);

// 5. GARDEN CLUB
buildClub("Garden club",
  "I want to plant some flowers but I live in an apartment. Do you have any ideas on how I can do this?",
  "Tôi muốn trồng vài bông hoa nhưng tôi sống trong một căn hộ. Bạn có ý tưởng nào về cách tôi có thể làm điều này không?",
  [
    "✨ [Giải pháp]: <strong>adopt vertical gardening</strong> (áp dụng làm vườn thẳng đứng), <strong>install wall-mounted shelves</strong> (lắp đặt các kệ treo tường), <strong>utilize hanging baskets</strong> (sử dụng giỏ treo)",
    "✨ [Vị trí]: <strong>on your small balcony</strong> (trên ban công nhỏ của bạn), <strong>near sunny windows</strong> (gần các cửa sổ đầy nắng), <strong>along the bright corridors</strong> (dọc theo các hành lang sáng sủa)",
    "✨ [Lợi ích]: <strong>maximize your limited space</strong> (tối đa hóa không gian hạn chế của bạn), <strong>add a beautiful touch of greenery indoors</strong> (thêm một chút sắc xanh tuyệt đẹp trong nhà), <strong>create a wonderfully refreshing vibe</strong> (tạo ra một bầu không khí vô cùng tươi mới)"
  ],
  [
    "Since you live in an apartment, I highly recommend you [Giải pháp]. You can place them [Vị trí] to [Lợi ích].",
    "One fantastic idea is to [Giải pháp] [Vị trí]. Not only does it save room, but it also helps [Lợi ích].",
    "You should definitely consider deciding to [Giải pháp] [Vị trí]. This creative setup will instantly [Lợi ích]."
  ],
  [
    { en: "Since you live in an apartment, I highly recommend you adopt vertical gardening. You can place them on your small balcony to maximize your limited space.", vi: "Vì bạn sống trong một căn hộ, tôi thực sự khuyên bạn nên áp dụng làm vườn thẳng đứng. Bạn có thể đặt chúng trên ban công nhỏ của bạn để tối đa hóa không gian hạn chế." },
    { en: "One fantastic idea is to install wall-mounted shelves near sunny windows. Not only does it save room, but it also helps add a beautiful touch of greenery indoors.", vi: "Một ý tưởng tuyệt vời là lắp đặt các kệ treo tường gần các cửa sổ đầy nắng. Nó không chỉ tiết kiệm không gian mà còn giúp mang lại một chút sắc xanh tuyệt đẹp cho trong nhà." },
    { en: "You should definitely consider deciding to utilize hanging baskets along the bright corridors. This creative setup will instantly create a wonderfully refreshing vibe.", vi: "Bạn chắc chắn nên cân nhắc quyết định sử dụng giỏ treo dọc theo các hành lang sáng sủa. Thiết lập sáng tạo này sẽ ngay lập tức tạo ra một bầu không khí vô cùng tươi mát." }
  ],
  "Do you think having a garden makes a house beautiful?",
  "Bạn có nghĩ rằng việc có một khu vườn làm cho một ngôi nhà trở nên đẹp đẽ không?",
  [
    "✨ [Quan điểm]: <strong>absolutely agree with this</strong> (hoàn toàn đồng ý với điều này), <strong>strongly believe it does</strong> (mạnh mẽ tin rằng nó là như vậy), <strong>think a garden is essential</strong> (nghĩ rằng một khu vườn là thiết yếu)",
    "✨ [Lý do thẩm mỹ]: <strong>brings vibrant colors to the property</strong> (mang lại màu sắc rực rỡ cho tài sản), <strong>creates a stunning natural landscape</strong> (tạo ra một cảnh quan thiên nhiên tuyệt đẹp), <strong>softens the harsh architectural lines</strong> (làm mềm mại các đường nét kiến trúc thô cứng)",
    "✨ [Cảm nhận]: <strong>feel much more relaxing</strong> (cảm thấy thư giãn hơn nhiều), <strong>look incredibly welcoming</strong> (trông vô cùng thân thiện), <strong>connect residents with nature deeply</strong> (kết nối cư dân với thiên nhiên một cách sâu sắc)"
  ],
  [
    "I [Quan điểm] because it [Lý do thẩm mỹ]. Therefore, it makes the entire house [Cảm nhận].",
    "In my opinion, I [Quan điểm]. A well-maintained garden [Lý do thẩm mỹ] and helps the home [Cảm nhận].",
    "I [Quan điểm] since it [Lý do thẩm mỹ]. This wonderful addition makes living spaces [Cảm nhận]."
  ],
  [
    { en: "I absolutely agree with this because it brings vibrant colors to the property. Therefore, it makes the entire house feel much more relaxing.", vi: "Tôi hoàn toàn đồng ý với điều này vì nó mang lại màu sắc rực rỡ cho ngôi nhà. Do đó, nó làm cho toàn bộ ngôi nhà có cảm giác thư giãn hơn nhiều." },
    { en: "In my opinion, I strongly believe it does. A well-maintained garden creates a stunning natural landscape and helps the home look incredibly welcoming.", vi: "Theo ý kiến của tôi, tôi mạnh mẽ tin là như vậy. Một khu vườn được chăm sóc tốt tạo ra một cảnh quan thiên nhiên tuyệt đẹp và giúp ngôi nhà trông cực kỳ chào đón." },
    { en: "I think a garden is essential since it softens the harsh architectural lines. This wonderful addition makes living spaces connect residents with nature deeply.", vi: "Tôi nghĩ một khu vườn là thiết yếu vì nó làm dịu đi những đường nét kiến trúc cứng nhắc. Sự bổ sung tuyệt vời này làm cho không gian sống kết nối cư dân với thiên nhiên một cách sâu sắc." }
  ],
  "What are the benefits of eating vegetables? Can you tell me your opinion on this?",
  "Những lợi ích của việc ăn rau là gì? Bạn có thể cho tôi biết ý kiến của bạn về điều này?",
  [
    "✨ [Dinh dưỡng]: <strong>provide essential vitamins and minerals</strong> (cung cấp các vitamin và khoáng chất thiết yếu), <strong>are an excellent source of dietary fiber</strong> (là một nguồn chất xơ tuyệt vời), <strong>contain powerful antioxidants</strong> (chứa các chất chống oxy hóa mạnh mẽ)",
    "✨ [Sức khỏe thể chất]: <strong>boost our immune system</strong> (tăng cường hệ thống miễn dịch của chúng ta), <strong>improve digestion significantly</strong> (cải thiện tiêu hóa đáng kể), <strong>lower the risk of chronic diseases</strong> (làm giảm nguy cơ mắc các bệnh mãn tính)",
    "✨ [Sức khỏe tổng thể]: <strong>maintain a healthy weight</strong> (duy trì mức cân nặng khỏe mạnh), <strong>keep our skin glowing</strong> (giữ cho làn da của chúng ta rạng rỡ), <strong>promote overall longevity</strong> (thúc đẩy tuổi thọ tổng thể)"
  ],
  [
    "In my opinion, vegetables [Dinh dưỡng]. Thus, they effectively [Sức khỏe thể chất] and help us [Sức khỏe tổng thể].",
    "I believe the main benefit is that they [Dinh dưỡng]. Consequently, eating them will [Sức khỏe thể chất] and [Sức khỏe tổng thể].",
    "Personally, I think because they [Dinh dưỡng], they naturally [Sức khỏe thể chất]. This allows us to [Sức khỏe tổng thể]."
  ],
  [
    { en: "In my opinion, vegetables provide essential vitamins and minerals. Thus, they effectively boost our immune system and help us maintain a healthy weight.", vi: "Theo tôi, rau xanh cung cấp các vitamin và khoáng chất thiết yếu. Do đó, chúng tăng cường hiệu quả hệ miễn dịch và giúp chúng ta duy trì cân nặng khỏe mạnh." },
    { en: "I believe the main benefit is that they are an excellent source of dietary fiber. Consequently, eating them will improve digestion significantly and keep our skin glowing.", vi: "Tôi tin rằng lợi ích chính là chúng là một nguồn cung cấp chất xơ dồi dào. Hậu quả là, việc ăn chúng sẽ cải thiện tiêu hóa đáng kể và giữ cho làn da chúng ta rạng rỡ." },
    { en: "Personally, I think because they contain powerful antioxidants, they naturally lower the risk of chronic diseases. This allows us to promote overall longevity.", vi: "Cá nhân tôi nghĩ rằng vì chúng chứa các chất chống oxy hóa mạnh mẽ, chúng làm giảm nguy cơ mắc các bệnh mãn tính một cách tự nhiên. Điều này cho phép chúng ta nâng cao tuổi thọ tổng thể." }
  ]
);


const newFileContent = `// This file is auto-generated\nexport const part3Data = ${JSON.stringify(data, null, 2)};\n`;
fs.writeFileSync(part3DataPath, newFileContent);
console.log('Successfully remade 5 clubs with perfectly matching questions, grammar templates and vocab!');
