const fs = require('fs');
const path = require('path');

const part3DataPath = path.join(__dirname, 'src', 'data', 'part3Data.js');
let fileData = fs.readFileSync(part3DataPath, 'utf8');
const jsonStr = fileData.replace('// This file is auto-generated\nexport const part3Data = ', '').replace(/;\n?$/, '');
const data = JSON.parse(jsonStr);

// --- ART CLUB ---
data["Art club"].q1.vocab = [
  "✨ [Đồ vật ý nghĩa]: <strong>a vintage camera</strong> (chiếc máy ảnh cổ), <strong>a childhood diary</strong> (cuốn nhật ký thời thơ ấu), <strong>a family heirloom</strong> (vật gia truyền), <strong>a traditional musical instrument</strong> (nhạc cụ truyền thống)",
  "✨ [Đặc điểm]: <strong>holds immense sentimental value</strong> (mang giá trị tinh thần to lớn), <strong>brings back fond memories</strong> (gợi lại những kỷ niệm đẹp), <strong>reminds me of my childhood</strong> (nhắc tôi nhớ về tuổi thơ), <strong>represents my family heritage</strong> (đại diện cho di sản gia đình)",
  "✨ [Hành động]: <strong>cherish it deeply</strong> (vô cùng trân trọng nó), <strong>feel deeply attached to it</strong> (cảm thấy vô cùng gắn bó với nó), <strong>keep it in pristine condition</strong> (giữ nó trong tình trạng nguyên vẹn), <strong>preserve it carefully</strong> (bảo quản nó cẩn thận)"
];
data["Art club"].q1.templates = [
  "Regarding your question, a treasured item I have kept for ages is [Đồ vật ý nghĩa]. Because it [Đặc điểm], I always [Hành động].",
  "One thing that [Đặc điểm] is [Đồ vật ý nghĩa]. I make sure to [Hành động] because it is irreplaceable to me.",
  "To be honest, the oldest thing I own is [Đồ vật ý nghĩa]. I [Hành động] since it constantly [Đặc điểm]."
];

data["Art club"].q2.vocab = [
  "✨ [Thực trạng]: <strong>throw away old things</strong> (vứt bỏ đồ cũ), <strong>constantly buy new products</strong> (liên tục mua sản phẩm mới), <strong>follow the latest trends</strong> (chạy theo xu hướng mới nhất), <strong>replace broken items instead of repairing them</strong> (thay thế đồ hỏng thay vì sửa chúng)",
  "✨ [Nguyên nhân]: <strong>poor durability of modern goods</strong> (độ bền kém của hàng hóa hiện đại), <strong>the rise of mass production</strong> (sự gia tăng của sản xuất hàng loạt), <strong>affordable prices</strong> (giá cả phải chăng), <strong>aggressive advertising</strong> (quảng cáo ồ ạt)",
  "✨ [Hậu quả]: <strong>causes severe environmental degradation</strong> (gây suy thoái môi trường nghiêm trọng), <strong>generates excessive waste</strong> (tạo ra rác thải quá mức), <strong>depletes our natural resources</strong> (làm cạn kiệt tài nguyên thiên nhiên), <strong>increases our carbon footprint</strong> (làm tăng lượng khí thải carbon)"
];
data["Art club"].q2.templates = [
  "I believe people nowadays [Thực trạng] primarily because of [Nguyên nhân]. Unfortunately, this dangerous habit [Hậu quả].",
  "In my opinion, this concerning trend happens due to [Nguyên nhân]. Consequently, it encourages people to [Thực trạng] and inevitably [Hậu quả].",
  "It is undeniable that modern society tends to [Thực trạng] because of [Nguyên nhân]. However, we must realize that this behavior [Hậu quả]."
];

data["Art club"].q3.vocab = [
  "✨ [Hoạt động]: <strong>curate a nostalgic gallery</strong> (tổ chức một phòng trưng bày hoài niệm), <strong>display personal heirlooms</strong> (trưng bày kỷ vật cá nhân), <strong>arrange items chronologically</strong> (sắp xếp các đồ vật theo trình tự thời gian), <strong>set up interactive booths</strong> (thiết lập các gian hàng tương tác)",
  "✨ [Chi tiết]: <strong>share captivating stories behind them</strong> (chia sẻ những câu chuyện hấp dẫn đằng sau chúng), <strong>attach brief descriptions to each item</strong> (đính kèm mô tả ngắn gọn cho mỗi món đồ), <strong>explain their historical context</strong> (giải thích bối cảnh lịch sử của chúng), <strong>highlight their sentimental value</strong> (nhấn mạnh giá trị tinh thần của chúng)",
  "✨ [Kết quả]: <strong>evoke strong emotions from visitors</strong> (gợi lên những cảm xúc mạnh mẽ từ du khách), <strong>foster community connection</strong> (thúc đẩy sự gắn kết cộng đồng), <strong>attract diverse audiences</strong> (thu hút lượng khán giả đa dạng), <strong>create a truly memorable experience</strong> (tạo ra một trải nghiệm thực sự đáng nhớ)"
];
data["Art club"].q3.templates = [
  "I highly recommend that we [Hoạt động] where members can [Chi tiết]. Doing this will undoubtedly [Kết quả].",
  "One fantastic idea is to [Hoạt động] and encourage owners to [Chi tiết]. This approach will successfully [Kết quả].",
  "To make the exhibition engaging, we should [Hoạt động]. By allowing people to [Chi tiết], we can easily [Kết quả]."
];


// --- FOOD CLUB ---
data["Food club"].q1.vocab = [
  "✨ [Món ăn]: <strong>fermented tofu</strong> (đậu phụ lên men), <strong>fried insects</strong> (côn trùng chiên), <strong>a local exotic delicacy</strong> (một món đặc sản kỳ lạ của địa phương), <strong>a dish made from unconventional ingredients</strong> (một món ăn làm từ nguyên liệu độc lạ)",
  "✨ [Đặc điểm kỳ lạ]: <strong>its incredibly pungent smell</strong> (mùi cực kỳ nồng của nó), <strong>its bizarre texture</strong> (kết cấu kỳ lạ của nó), <strong>its unappealing appearance</strong> (vẻ ngoài kém hấp dẫn của nó), <strong>its unusually spicy taste</strong> (vị cay bất thường của nó)",
  "✨ [Trải nghiệm]: <strong>it was surprisingly delicious</strong> (nó ngon đến bất ngờ), <strong>it offered a memorable tasting experience</strong> (nó mang lại trải nghiệm nếm thử đáng nhớ), <strong>it tasted wonderfully crunchy</strong> (nó có vị giòn tuyệt vời), <strong>it was quite hard to swallow</strong> (nó khá khó nuốt)"
];
data["Food club"].q1.templates = [
  "The most bizarre dish I have ever tried is [Món ăn]. Despite [Đặc điểm kỳ lạ], I must admit that [Trải nghiệm].",
  "During a recent trip, I bravely tasted [Món ăn]. Initially, I was hesitant because of [Đặc điểm kỳ lạ], but eventually, [Trải nghiệm].",
  "To my absolute surprise, the weirdest food I ate was [Món ăn]. Although [Đặc điểm kỳ lạ] shocked me at first, [Trải nghiệm]."
];

data["Food club"].q2.vocab = [
  "✨ [Xu hướng]: <strong>embrace culinary diversity</strong> (đón nhận sự đa dạng ẩm thực), <strong>explore exotic delicacies</strong> (khám phá các đặc sản kỳ lạ), <strong>try unconventional ingredients</strong> (thử các nguyên liệu độc lạ), <strong>step out of their culinary comfort zone</strong> (bước ra khỏi vùng an toàn ẩm thực)",
  "✨ [Tích cực]: <strong>broadens our palate</strong> (mở rộng khẩu vị của chúng ta), <strong>promotes meaningful cultural exchange</strong> (thúc đẩy giao lưu văn hóa ý nghĩa), <strong>boosts the local economy</strong> (thúc đẩy nền kinh tế địa phương), <strong>satisfies human curiosity</strong> (thỏa mãn sự tò mò của con người)",
  "✨ [Tiêu cực]: <strong>carries potential health risks</strong> (tiềm ẩn rủi ro sức khỏe), <strong>causes severe digestive issues</strong> (gây ra các vấn đề tiêu hóa nghiêm trọng), <strong>raises food safety concerns</strong> (gây lo ngại về an toàn thực phẩm), <strong>leads to unethical sourcing</strong> (dẫn đến nguồn gốc không hợp đạo đức)"
];
data["Food club"].q2.templates = [
  "In my view, encouraging people to [Xu hướng] is a double-edged sword. While it [Tích cực], it also [Tiêu cực].",
  "I firmly believe it is a positive development because choosing to [Xu hướng] significantly [Tích cực]. However, we must ensure it never [Tiêu cực].",
  "While the decision to [Xu hướng] successfully [Tích cực], we must also consider the drawbacks. If we are not careful, it [Tiêu cực]."
];

data["Food club"].q3.vocab = [
  "✨ [Sự kiện]: <strong>host a blind tasting challenge</strong> (tổ chức thử thách nếm giấu mặt), <strong>set up live cooking demonstrations</strong> (thiết lập các buổi trình diễn nấu ăn trực tiếp), <strong>organize a fusion food contest</strong> (tổ chức cuộc thi ẩm thực kết hợp), <strong>create interactive food stalls</strong> (tạo ra các quầy ẩm thực tương tác)",
  "✨ [Hành động]: <strong>invite adventurous local chefs</strong> (mời các đầu bếp địa phương ưa khám phá), <strong>feature various exotic delicacies</strong> (trình làng nhiều đặc sản kỳ lạ), <strong>combine traditional recipes with weird ingredients</strong> (kết hợp công thức truyền thống với nguyên liệu kỳ lạ), <strong>offer a unique sensory journey</strong> (mang đến một hành trình giác quan độc đáo)",
  "✨ [Kết quả]: <strong>spark immense curiosity</strong> (khơi gợi sự tò mò to lớn), <strong>attract adventurous food enthusiasts</strong> (thu hút những người đam mê ẩm thực ưa khám phá), <strong>generate widespread buzz</strong> (tạo ra tiếng vang rộng rãi), <strong>leave a lasting impression on all visitors</strong> (để lại ấn tượng sâu sắc cho tất cả du khách)"
];
data["Food club"].q3.templates = [
  "I strongly recommend that we [Sự kiện] and [Hành động]. This fun activity will definitely [Kết quả].",
  "One fantastic approach is to [Sự kiện] where we can [Hành động]. By doing this, we will easily [Kết quả].",
  "To maximize engagement, we could [Sự kiện]. If we [Hành động] during the event, it will undoubtedly [Kết quả]."
];


// --- SOCIAL CLUB ---
data["Social club"].q1.vocab = [
  "✨ [Tần suất]: <strong>on a weekly basis</strong> (hàng tuần), <strong>whenever time permits</strong> (bất cứ khi nào có thời gian), <strong>every other weekend</strong> (cách tuần vào cuối tuần), <strong>once a month</strong> (mỗi tháng một lần)",
  "✨ [Hoạt động]: <strong>grab a cup of coffee at a cozy café</strong> (đi uống cà phê tại một quán nhỏ ấm cúng), <strong>dine out at local eateries</strong> (ăn ngoài tại các quán ăn địa phương), <strong>go window shopping</strong> (đi ngắm đồ ngoài tủ kính), <strong>enjoy outdoor picnics</strong> (tận hưởng các buổi dã ngoại ngoài trời)",
  "✨ [Lợi ích]: <strong>share our latest updates</strong> (chia sẻ những thông tin mới nhất), <strong>unwind after a hectic week</strong> (thư giãn sau một tuần bận rộn), <strong>relieve daily stress</strong> (giảm căng thẳng hàng ngày), <strong>strengthen our bond</strong> (củng cố mối quan hệ của chúng tôi)"
];
data["Social club"].q1.templates = [
  "I usually hang out with my close friends [Tần suất]. We typically [Hoạt động] in order to [Lợi ích].",
  "[Tần suất], we love to gather and [Hoạt động]. It is a fantastic way to [Lợi ích].",
  "My friends and I catch up regularly [Tần suất]. We normally [Hoạt động], which brings immense joy and helps us [Lợi ích]."
];

data["Social club"].q2.vocab = [
  "✨ [Hành động ảo]: <strong>rely heavily on digital platforms</strong> (phụ thuộc quá nhiều vào các nền tảng kỹ thuật số), <strong>interact via instant messaging</strong> (tương tác qua tin nhắn tức thời), <strong>spend excessive screen time</strong> (dành quá nhiều thời gian trên màn hình), <strong>prioritize online chatting</strong> (ưu tiên trò chuyện trực tuyến)",
  "✨ [Hạn chế]: <strong>lack genuine emotional connections</strong> (thiếu các kết nối cảm xúc chân thật), <strong>diminish important social skills</strong> (làm giảm các kỹ năng xã hội quan trọng), <strong>cause unnecessary misunderstandings</strong> (gây ra những hiểu lầm không đáng có), <strong>make teenagers feel isolated in real life</strong> (khiến thanh thiếu niên cảm thấy bị cô lập trong đời thực)",
  "✨ [Tầm quan trọng thực tế]: <strong>read body language</strong> (đọc ngôn ngữ cơ thể), <strong>convey real emotions accurately</strong> (truyền tải cảm xúc thật một cách chính xác), <strong>build profound relationships</strong> (xây dựng các mối quan hệ sâu sắc), <strong>foster empathy naturally</strong> (nuôi dưỡng sự thấu cảm một cách tự nhiên)"
];
data["Social club"].q2.templates = [
  "While it is convenient to [Hành động ảo], I believe this habit can [Hạn chế]. Face-to-face meetings are crucial because they allow us to [Tầm quan trọng thực tế].",
  "It is concerning because choosing to [Hành động ảo] will severely [Hạn chế]. Without the ability to [Tầm quan trọng thực tế], friendships remain superficial.",
  "Although social media is popular, deciding to [Hành động ảo] often [Hạn chế]. We need in-person communication to [Tầm quan trọng thực tế]."
];

data["Social club"].q3.vocab = [
  "✨ [Lý do chọn trẻ em]: <strong>it is an investment in our future</strong> (đó là khoản đầu tư vào tương lai của chúng ta), <strong>they are incredibly vulnerable</strong> (chúng vô cùng dễ bị tổn thương), <strong>they lack proper educational opportunities</strong> (chúng thiếu các cơ hội giáo dục phù hợp), <strong>it helps break the cycle of poverty</strong> (nó giúp phá vỡ vòng luẩn quẩn của sự nghèo đói)",
  "✨ [Lý do chọn người già]: <strong>they lack adequate care and companionship</strong> (họ thiếu sự chăm sóc và bầu bạn đầy đủ), <strong>they have contributed greatly to society</strong> (họ đã cống hiến rất nhiều cho xã hội), <strong>they often face severe medical issues</strong> (họ thường đối mặt với các vấn đề y tế nghiêm trọng), <strong>it shows our deep gratitude</strong> (điều đó thể hiện lòng biết ơn sâu sắc của chúng ta)",
  "✨ [Hành động]: <strong>provide essential supplies</strong> (cung cấp các nhu yếu phẩm thiết yếu), <strong>nurture young talents</strong> (nuôi dưỡng tài năng trẻ), <strong>offer medical assistance</strong> (cung cấp hỗ trợ y tế), <strong>alleviate their loneliness</strong> (làm giảm sự cô đơn của họ)"
];
data["Social club"].q3.templates = [
  "I strongly suggest that we sponsor poor children because [Lý do chọn trẻ em]. By deciding to [Hành động], we can make a lasting impact.",
  "In my opinion, supporting the elderly who live alone is crucial since [Lý do chọn người già]. Therefore, we should [Hành động] to improve their lives.",
  "While both groups need help, focusing on poor children is better because [Lý do chọn trẻ em]. If we raise funds effectively to [Hành động], they will thrive."
];


// --- BEAUTIFUL HOMES CLUB ---
data["Beautiful homes club"].q1.vocab = [
  "✨ [Yếu tố thiết kế]: <strong>harmonious color schemes</strong> (tông màu hài hòa), <strong>minimalist design</strong> (thiết kế tối giản), <strong>abundant natural light</strong> (ánh sáng tự nhiên dồi dào), <strong>elegant furniture</strong> (nội thất thanh lịch)",
  "✨ [Cảm giác]: <strong>creates a cozy and welcoming atmosphere</strong> (tạo ra một bầu không khí ấm cúng và chào đón), <strong>brings a profound sense of tranquility</strong> (mang lại một cảm giác thanh bình sâu sắc), <strong>acts as a safe haven from the outside world</strong> (đóng vai trò như một nơi trú ẩn an toàn khỏi thế giới bên ngoài), <strong>offers a warm and relaxing vibe</strong> (mang đến một không gian ấm áp và thư giãn)",
  "✨ [Kết nối]: <strong>reflect the owner's personal taste</strong> (phản ánh gu thẩm mỹ cá nhân của chủ sở hữu), <strong>be filled with love and laughter</strong> (tràn ngập tình yêu và tiếng cười), <strong>foster cherished family moments</strong> (nuôi dưỡng những khoảnh khắc gia đình đáng trân trọng), <strong>encourage warm daily interactions</strong> (khuyến khích những tương tác ấm áp hàng ngày)"
];
data["Beautiful homes club"].q1.templates = [
  "In my opinion, a beautiful home is primarily defined by [Yếu tố thiết kế]. This element instantly [Cảm giác] for everyone.",
  "Beyond just [Yếu tố thiết kế], what truly makes a home beautiful is how it [Cảm giác]. Furthermore, the living space must [Kết nối].",
  "I strongly believe that a beautiful home must [Kết nối]. Even with simple decor, this genuinely [Cảm giác]."
];

data["Beautiful homes club"].q2.vocab = [
  "✨ [Quan điểm]: <strong>a complete misconception</strong> (một quan niệm hoàn toàn sai lầm), <strong>highly superficial</strong> (rất hời hợt), <strong>not a determining factor</strong> (không phải là yếu tố quyết định), <strong>an outdated belief</strong> (một niềm tin lỗi thời)",
  "✨ [Giá trị cốt lõi]: <strong>thoughtful arrangement</strong> (sự sắp xếp chu đáo), <strong>creativity and personalization</strong> (sự sáng tạo và cá nhân hóa), <strong>emotional comfort</strong> (sự thoải mái về cảm xúc), <strong>keeping the space neat and tidy</strong> (việc giữ cho không gian gọn gàng và ngăn nắp)",
  "✨ [Giải pháp thay thế]: <strong>utilizing affordable decor</strong> (sử dụng đồ trang trí giá cả phải chăng), <strong>engaging in fun DIY projects</strong> (tham gia vào các dự án tự làm thú vị), <strong>repurposing old items smartly</strong> (tái sử dụng đồ cũ một cách thông minh), <strong>optimizing spatial planning</strong> (tối ưu hóa quy hoạch không gian)"
];
data["Beautiful homes club"].q2.templates = [
  "I completely disagree because that is [Quan điểm]. Price does not equal taste, and a home can look gorgeous simply through [Giá trị cốt lõi].",
  "While expensive items are nice, they are [Quan điểm]. The true beauty of a home stems from [Giá trị cốt lõi] and [Giải pháp thay thế].",
  "That statement is [Quan điểm]. In reality, [Giá trị cốt lõi] matters much more. A well-organized room created by [Giải pháp thay thế] will always feel warmer."
];

data["Beautiful homes club"].q3.vocab = [
  "✨ [Nội dung]: <strong>practical decorating tips</strong> (các mẹo trang trí thực tế), <strong>budget-friendly makeovers</strong> (cải tạo nhà tiết kiệm ngân sách), <strong>step-by-step DIY tutorials</strong> (hướng dẫn tự làm từng bước), <strong>amazing before-and-after transformations</strong> (những màn biến đổi trước và sau đáng kinh ngạc)",
  "✨ [Sản xuất]: <strong>feature renowned guest experts</strong> (mời các chuyên gia khách mời nổi tiếng), <strong>showcase real members' homes</strong> (trưng bày ngôi nhà của các thành viên thực tế), <strong>ensure high production quality</strong> (đảm bảo chất lượng sản xuất cao), <strong>engage the audience interactively</strong> (tương tác hai chiều với khán giả)",
  "✨ [Tác động]: <strong>inspire viewers immensely</strong> (truyền cảm hứng mạnh mẽ cho người xem), <strong>provide actionable advice</strong> (cung cấp lời khuyên có thể áp dụng ngay), <strong>boost our club's reputation</strong> (nâng cao danh tiếng của câu lạc bộ), <strong>reach a wider demographic</strong> (tiếp cận tệp nhân khẩu học rộng hơn)"
];
data["Beautiful homes club"].q3.templates = [
  "I strongly support this brilliant idea because it will undoubtedly [Tác động]. By sharing [Nội dung], we can easily [Tác động].",
  "This television show would be a fantastic opportunity to [Tác động]. We should definitely broadcast [Nội dung] and [Sản xuất] to attract viewers.",
  "To make the show successful, I highly suggest that we [Sản xuất]. Featuring [Nội dung] will make our program highly relatable and [Tác động]."
];


// --- GARDEN CLUB ---
data["Garden club"].q1.vocab = [
  "✨ [Đặc điểm]: <strong>has vibrant yellow petals</strong> (có những cánh hoa màu vàng rực rỡ), <strong>possesses an enchanting fragrance</strong> (sở hữu hương thơm quyến rũ), <strong>blooms gracefully from the mud</strong> (nở một cách duyên dáng từ bùn lầy), <strong>has a highly resilient nature</strong> (có bản chất rất kiên cường)",
  "✨ [Ý nghĩa]: <strong>symbolizes purity and strength</strong> (tượng trưng cho sự thuần khiết và sức mạnh), <strong>represents undying love</strong> (đại diện cho tình yêu bất diệt), <strong>evokes incredibly positive feelings</strong> (gợi lên những cảm xúc vô cùng tích cực), <strong>holds massive cultural significance</strong> (mang ý nghĩa văn hóa to lớn)",
  "✨ [Chăm sóc]: <strong>requires minimal maintenance</strong> (yêu cầu bảo dưỡng tối thiểu), <strong>thrives beautifully in sunlight</strong> (phát triển tuyệt đẹp dưới ánh nắng mặt trời), <strong>needs to be watered regularly</strong> (cần được tưới nước thường xuyên), <strong>flourishes vigorously in spring</strong> (nở rộ mạnh mẽ vào mùa xuân)"
];
data["Garden club"].q1.templates = [
  "My absolute favorite flower is the sunflower. It [Đặc điểm], which instantly [Ý nghĩa] and constantly inspires me.",
  "I have a deep affection for the lotus. It elegantly [Ý nghĩa] because it [Đặc điểm]. Furthermore, it only [Chăm sóc].",
  "The flower I admire the most is the lavender. Not only does it [Chăm sóc], but it also [Đặc điểm] and [Ý nghĩa]."
];

data["Garden club"].q2.vocab = [
  "✨ [Giải pháp]: <strong>adopt vertical gardening</strong> (áp dụng làm vườn thẳng đứng), <strong>install wall-mounted shelves</strong> (lắp đặt các kệ treo tường), <strong>utilize hanging baskets</strong> (sử dụng giỏ treo), <strong>set up indoor terrariums</strong> (thiết lập tiểu cảnh trong lọ thủy tinh)",
  "✨ [Cây trồng]: <strong>grow potted succulents</strong> (trồng sen đá trong chậu), <strong>plant compact herbs in window boxes</strong> (trồng thảo mộc nhỏ gọn trong hộp ở cửa sổ), <strong>choose lovely low-maintenance plants</strong> (chọn những loại cây đáng yêu ít cần chăm sóc), <strong>buy small air-purifying plants</strong> (mua những cây nhỏ thanh lọc không khí)",
  "✨ [Lợi ích]: <strong>maximize your limited space</strong> (tối đa hóa không gian hạn chế của bạn), <strong>purify the indoor air efficiently</strong> (thanh lọc không khí trong nhà một cách hiệu quả), <strong>add a beautiful touch of greenery indoors</strong> (thêm một chút sắc xanh tuyệt đẹp trong nhà), <strong>create a wonderfully refreshing vibe</strong> (tạo ra một bầu không khí vô cùng tươi mới)"
];
data["Garden club"].q2.templates = [
  "Since your house is small, I highly recommend you [Giải pháp]. By doing this, you can easily [Cây trồng] and [Lợi ích].",
  "One fantastic solution for limited space is to [Cây trồng]. Not only do they require minimal maintenance, but they also [Lợi ích].",
  "You should definitely consider deciding to [Giải pháp]. These setups allow you to [Cây trồng], which will instantly [Lợi ích]."
];

data["Garden club"].q3.vocab = [
  "✨ [Sự kiện]: <strong>host a hands-on seed-planting workshop</strong> (tổ chức một hội thảo gieo hạt thực hành), <strong>demonstrate composting techniques</strong> (trình diễn kỹ thuật ủ phân hữu cơ), <strong>set up a lively plant exchange corner</strong> (thiết lập một góc trao đổi cây cảnh sôi động), <strong>organize a fun DIY terrarium session</strong> (tổ chức một buổi tự làm tiểu cảnh thủy tinh thú vị)",
  "✨ [Hành động]: <strong>invite experienced botanists to speak</strong> (mời các nhà thực vật học giàu kinh nghiệm đến nói chuyện), <strong>distribute practical gardening guides</strong> (phân phát tài liệu hướng dẫn làm vườn thực tế), <strong>share effective pest control tips</strong> (chia sẻ mẹo kiểm soát sâu bệnh hiệu quả), <strong>discuss sustainable eco-friendly practices</strong> (thảo luận về các phương pháp thân thiện với môi trường bền vững)",
  "✨ [Mục tiêu]: <strong>foster a profound love for nature</strong> (nuôi dưỡng tình yêu sâu sắc đối với thiên nhiên), <strong>build a strong eco-friendly community</strong> (xây dựng một cộng đồng vững mạnh thân thiện với môi trường), <strong>encourage active participation from beginners</strong> (khuyến khích sự tham gia tích cực từ những người mới bắt đầu), <strong>spark immense interest among locals</strong> (khơi dậy sự hứng thú to lớn ở người dân địa phương)"
];
data["Garden club"].q3.templates = [
  "I strongly suggest that we [Sự kiện]. If we also [Hành động], it will effectively [Mục tiêu].",
  "It would be a brilliant idea to [Sự kiện]. This exciting activity allows attendees to trade plants, effortlessly helping us [Mục tiêu].",
  "To attract more members, we could [Sự kiện] and [Hành động]. Approaching it this way will definitely [Mục tiêu]."
];


const newFileContent = `// This file is auto-generated\nexport const part3Data = ${JSON.stringify(data, null, 2)};\n`;
fs.writeFileSync(part3DataPath, newFileContent);
console.log('Successfully fixed grammar for templates and vocab!');
