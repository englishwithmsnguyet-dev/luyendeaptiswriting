export const part4SlotHints = {
  "Walking club": {
    e1Topic: { en: "our Walking Club is planning to organize a monthly walking event", vi: "CLB Đi bộ đang lên kế hoạch tổ chức sự kiện đi bộ hàng tháng" },
    e2Topic: { en: "the plan to organize a monthly walking event to attract more members", vi: "kế hoạch tổ chức sự kiện đi bộ hàng tháng nhằm thu hút thêm hội viên" },
    positive: true
  },
  "Fitness club": {
    e1Topic: { en: "our Fitness Club is planning to increase the membership fee by 15% to upgrade workout equipment", vi: "CLB Thể hình dự định tăng 15% phí hội viên để nâng cấp thiết bị tập" },
    e2Topic: { en: "the plan to upgrade workout equipment and adjust membership fees", vi: "kế hoạch nâng cấp thiết bị tập và điều chỉnh phí hội viên" },
    positive: false
  },
  "Art club": {
    e1Topic: { en: "our Art Club is organizing a public talk with a guest artist", vi: "CLB Mỹ thuật đang tổ chức buổi nói chuyện công chúng với nghệ sĩ khách mời" },
    e2Topic: { en: "the plan to invite a guest artist for the upcoming public talk", vi: "kế hoạch mời một nghệ sĩ khách mời cho buổi nói chuyện trước công chúng sắp tới" },
    positive: true
  },
  "Food club": {
    e1Topic: { en: "our Food Club is seeking volunteer speakers for an upcoming talk show with a celebrity chef", vi: "CLB Ẩm thực đang tìm diễn giả tình nguyện cho buổi trò chuyện cùng đầu bếp nổi tiếng" },
    e2Topic: { en: "the plan to recruit volunteer speakers for the talk show with a famous chef", vi: "kế hoạch tuyển diễn giả tình nguyện cho buổi tọa đàm cùng đầu bếp nổi tiếng" },
    positive: true
  },
  "Social club": {
    e1Topic: { en: "our Social Club is going to organize monthly in-person gatherings", vi: "CLB Xã hội sẽ tổ chức các buổi gặp mặt trực tiếp hàng tháng" },
    e2Topic: { en: "the plan to organize monthly face-to-face meetings for club members", vi: "kế hoạch tổ chức các buổi gặp mặt trực tiếp hàng tháng cho hội viên" },
    positive: true
  },
  "Social club 2": {
    e1Topic: { en: "our Social Club is organizing in-person gatherings for both adults and children next month", vi: "CLB Xã hội tổ chức các buổi gặp gỡ trực tiếp cho cả người lớn và trẻ em" },
    e2Topic: { en: "the plan to organize face-to-face gatherings with indoor and outdoor activities", vi: "kế hoạch tổ chức các buổi gặp gỡ trực tiếp với các hoạt động trong nhà và ngoài trời" },
    positive: true
  },
  "Beautiful homes club": {
    e1Topic: { en: "the government has a proposal to knock down old buildings and build modern blocks", vi: "chính quyền có đề xuất phá bỏ các tòa nhà cũ để xây chung cư hiện đại" },
    e2Topic: { en: "the plan to replace old buildings with modern apartment blocks", vi: "kế hoạch thay thế các tòa nhà cũ bằng các khu chung cư hiện đại" },
    positive: false
  },
  "Living home club": {
    e1Topic: { en: "many young people nowadays want to have a house or an apartment early in their life", vi: "ngày nay nhiều người trẻ mong muốn sở hữu một ngôi nhà hoặc căn hộ ngay từ khi còn trẻ (Theo bài mẫu)" },
    e2Topic: [
      { en: "the advice for young people wishing to buy a home early", vi: "lời khuyên cho các bạn trẻ có nguyện vọng mua nhà sớm (Theo bài mẫu)" },
      { en: "the plan to provide housing guidance and financial advice for young homebuyers", vi: "kế hoạch cung cấp định hướng nhà ở và lời khuyên tài chính cho người mua nhà trẻ tuổi" }
    ],
    perspectives: [
      { isSafe: true, en: "they should prepare carefully before making this important decision", vi: "họ nên chuẩn bị cẩn thận trước khi đưa ra quyết định quan trọng này (Theo bài mẫu)" },
      { en: "providing practical guidance is essential because it helps them make smart financial decisions", vi: "việc đưa ra hướng dẫn thực tế là rất thiết yếu vì giúp các bạn đưa ra quyết định tài chính thông minh" },
      { en: "young adults should plan carefully because buying a house too early can cause heavy financial pressure", vi: "người trẻ nên lên kế hoạch cẩn thận vì mua nhà quá sớm có thể gây áp lực tài chính nặng nề" }
    ],
    positive: true
  },
  "Garden club": {
    e1Topic: { en: "Mr. Seiko's Japanese garden talk has been canceled and Mr. Jones will speak instead", vi: "bài nói về Vườn Nhật Bản của ông Seiko bị hủy và ông Jones sẽ nói thay" },
    e2Topic: { en: "the plan to invite Mr. Jones as a replacement speaker for Mr. Seiko", vi: "kế hoạch mời ông Jones làm diễn giả thay thế cho ông Seiko" },
    positive: false
  },
  "Garden club 2": {
    e1Topic: { en: "our Garden Club is deciding between planting 50 park trees and hosting a gardening workshop", vi: "CLB Làm vườn đang cân nhắc giữa việc trồng 50 cây tại công viên và mở lớp dạy làm vườn" },
    e2Topic: [
      { choice: "first", en: "the plan to plant 50 trees and flowers at the local park", vi: "kế hoạch trồng 50 cây xanh và hoa tại công viên (Nếu chọn First Choice)" },
      { choice: "second", en: "the plan to organize a gardening skills workshop for local residents", vi: "kế hoạch tổ chức khóa học kỹ năng làm vườn cho cư dân (Nếu chọn Second Choice)" },
      { en: "the plan to encourage tree planting across our city", vi: "kế hoạch khuyến khích phong trào trồng cây trong thành phố (Dùng chung)" }
    ],
    perspectives: [
      { choice: "first", en: "the first choice is better because it directly creates green spaces and shade for the community", vi: "phương án 1 tốt hơn vì trực tiếp tạo không gian xanh và bóng mát cho cộng đồng" },
      { choice: "second", en: "the second choice is better because teaching practical skills empowers residents to grow plants sustainably", vi: "phương án 2 tốt hơn vì dạy kỹ năng thực tế giúp cư dân tự trồng cây bền vững" },
      { isSafe: true, en: "this is a great idea that will make our city much greener and cleaner", vi: "đây là một ý tưởng rất hay sẽ giúp thành phố của chúng ta xanh và sạch hơn (Dùng chung an toàn B2)" },
      { en: "this project will bring great benefits to all members and local residents", vi: "dự án này sẽ mang lại lợi ích to lớn cho hội viên và người dân địa phương" }
    ],
    positive: true
  },
  "Sports club": {
    e1Topic: { en: "our Sports Club is planning to organize a sports competition for young members", vi: "CLB Thể thao đang lên kế hoạch tổ chức giải đấu thể thao cho hội viên trẻ" },
    e2Topic: { en: "the plan to organize a sports competition for young members", vi: "kế hoạch tổ chức cuộc thi thể thao dành cho các hội viên trẻ" },
    positive: true
  },
  "Film club": {
    e1Topic: { en: "a renowned film critic is speaking at our Film Club next week", vi: "một nhà phê bình phim nổi tiếng sẽ đến nói chuyện tại CLB Điện ảnh vào tuần tới" },
    e2Topic: { en: "the plan to invite a famous film critic to deliver a talk", vi: "kế hoạch mời một nhà phê bình phim nổi tiếng đến thuyết trình" },
    positive: true
  },
  "Car club": {
    e1Topic: { en: "our Car Club has been invited to send two representatives on a road trip across Europe", vi: "CLB Xe hơi được mời cử 2 đại diện tham gia chuyến lái xe xuyên châu Âu" },
    e2Topic: { en: "the plan to select two club representatives for the European road trip", vi: "kế hoạch tuyển chọn hai đại diện CLB tham gia chuyến đi xuyên châu Âu" },
    positive: true
  },
  "Community club": {
    e1Topic: { en: "our Community Club is recruiting new members and looking for creative ideas", vi: "CLB Cộng đồng đang tuyển thêm thành viên và tìm kiếm ý tưởng sáng tạo" },
    e2Topic: [
      { en: "the need for more members and creative ideas for club activities", vi: "nhu cầu tuyển thêm hội viên và ý tưởng sáng tạo cho các hoạt động của CLB" },
      { en: "the plan to attract new members and develop creative community activities", vi: "kế hoạch thu hút thành viên mới và phát triển các hoạt động cộng đồng sáng tạo" }
    ],
    perspectives: [
      { isSafe: true, en: "we should attract more members and organize more interesting activities", vi: "chúng ta nên thu hút thêm hội viên và tổ chức các hoạt động thú vị hơn" },
      { en: "this is a great idea that will help our club grow and thrive", vi: "đây là một ý tưởng rất hay sẽ giúp CLB phát triển mạnh mẽ" },
      { en: "attracting enthusiastic members will bring fresh energy to our community projects", vi: "thu hút thành viên nhiệt huyết sẽ mang lại luồng sinh khí mới cho các dự án cộng đồng" }
    ],
    positive: true
  },
  "Music club": {
    e1Topic: { en: "local residents have complained about noise during our evening concerts", vi: "người dân xung quanh phàn nàn về tiếng ồn trong các buổi hòa nhạc buổi tối" },
    e2Topic: { en: "the plan to address noise complaints from neighbors regarding evening concerts", vi: "kế hoạch giải quyết khiếu nại tiếng ồn từ hàng xóm về các buổi hòa nhạc buổi tối" },
    positive: false
  },
  "English club 1": {
    e1Topic: { en: "the guest speaker is busy so our talk show and weekly meeting have been canceled", vi: "diễn giả bận đột xuất nên buổi tọa đàm và sinh hoạt tuần này bị hủy" },
    e2Topic: [
      { en: "the cancellation of the Talk Show", vi: "việc hủy buổi Talk Show (Theo bài mẫu)" },
      { en: "the sudden cancellation of this week's English talk show", vi: "việc bất ngờ hủy buổi tọa đàm tiếng Anh tuần này" },
      { en: "the plan to cancel our meeting due to absent guest speakers", vi: "kế hoạch hủy buổi sinh hoạt do thiếu diễn giả khách mời" }
    ],
    perspectives: [
      { isSafe: true, en: "the club should organize another activity instead of canceling the meeting", vi: "CLB nên tổ chức hoạt động khác thay vì hủy luôn buổi sinh hoạt (Theo bài mẫu)" },
      { en: "canceling the entire meeting is quite regrettable for enthusiastic members", vi: "việc hủy toàn bộ buổi sinh hoạt là điều rất đáng tiếc cho các hội viên nhiệt tình" },
      { en: "this is an important issue that requires careful contingency planning", vi: "đây là vấn đề quan trọng cần có kế hoạch dự phòng chu đáo" }
    ],
    positive: false
  },
  "English club 2": {
    e1Topic: { en: "our English Club is sponsoring a talk show about the benefits of English to attract new members", vi: "CLB Tiếng Anh sắp tài trợ buổi talk show về lợi ích của tiếng Anh để thu hút hội viên mới" },
    e2Topic: [
      { en: "the plan to sponsor a talk show about the benefits of English", vi: "kế hoạch tài trợ buổi talk show về lợi ích của tiếng Anh (Theo bài mẫu)" },
      { en: "the plan to sponsor a talk show discussing the benefits of learning English", vi: "kế hoạch tài trợ buổi tọa đàm về lợi ích của việc học tiếng Anh" }
    ],
    perspectives: [
      { isSafe: true, en: "this is a great idea because it helps people understand the importance of learning English", vi: "đây là một ý tưởng rất hay vì giúp mọi người hiểu tầm quan trọng của việc học tiếng Anh (Theo bài mẫu)" },
      { en: "this is a wonderful plan to attract more members and promote English learning", vi: "đây là kế hoạch tuyệt vời để thu hút thêm thành viên và đẩy mạnh phong trào học tiếng Anh" },
      { en: "this project will bring great benefits to all students and young professionals", vi: "dự án này sẽ mang lại lợi ích lớn cho học sinh sinh viên và người đi làm" }
    ],
    positive: true
  },
  "Book club 1": {
    e1Topic: { en: "our club is going to organize an event and invite a famous book author", vi: "CLB của chúng ta sắp tổ chức sự kiện và mời một tác giả sách nổi tiếng (Theo bài mẫu)" },
    e2Topic: [
      { en: "the plan to organize an event and invite a famous book author", vi: "kế hoạch tổ chức sự kiện và mời một tác giả sách nổi tiếng (Theo bài mẫu)" },
      { en: "the plan to host an author event to attract both young and elderly members", vi: "kế hoạch tổ chức buổi giao lưu tác giả để thu hút cả hội viên trẻ và cao tuổi" }
    ],
    perspectives: [
      { isSafe: true, en: "this is a great idea because it can encourage people of different ages to enjoy reading", vi: "đây là một ý tưởng rất hay vì có thể khuyến khích mọi người ở các lứa tuổi khác nhau cùng yêu thích đọc sách (Theo bài mẫu)" },
      { en: "this is a wonderful initiative that will connect different generations through the love of reading", vi: "đây là một kế hoạch tuyệt vời giúp kết nối các thế hệ thông qua tình yêu đọc sách" },
      { en: "this event will significantly promote community reading culture and attract new members", vi: "sự kiện này sẽ thúc đẩy mạnh mẽ văn hóa đọc trong cộng đồng và thu hút thêm hội viên mới" }
    ],
    positive: true
  },
  "Book club 2": {
    e1Topic: { en: "local authorities plan to close our library next year because many people read online books", vi: "chính quyền địa phương dự định đóng cửa thư viện vào năm tới vì nhiều người đọc sách online" },
    e2Topic: [
      { en: "the plan to close the local library next year", vi: "kế hoạch đóng cửa thư viện địa phương vào năm tới (Theo bài mẫu)" },
      { en: "the local authorities' decision to close down our public library next year", vi: "quyết định của chính quyền địa phương về việc đóng cửa thư viện công cộng vào năm tới" }
    ],
    perspectives: [
      { isSafe: true, en: "closing the library is very regrettable because it plays a vital role in our community", vi: "việc đóng cửa thư viện là rất đáng tiếc vì nơi đây đóng vai trò thiết yếu trong cộng đồng (Theo bài mẫu)" },
      { en: "closing the library is an extremely regrettable decision because digital screens cannot replace physical libraries", vi: "đóng cửa thư viện là quyết định vô cùng đáng tiếc vì sách điện tử không thể thay thế thư viện truyền thống" },
      { en: "this decision is truly unfortunate and we must find practical ways to save and keep the library open", vi: "quyết định này thực sự đáng tiếc và chúng ta phải tìm các giải pháp thực tế để giữ lại thư viện" }
    ],
    positive: false
  },
  "Museum club": {
    e1Topic: { en: "our Museum Club is discussing whether to collect admission tickets from visitors to cover repairs and staff costs", vi: "CLB Bảo tàng đang thảo luận về việc có nên thu vé vào cửa đối với khách tham quan để trang trải chi phí sửa chữa và trả lương cho nhân viên hay không" },
    e2Topic: { en: "the plan to collect admission tickets from visitors to fund repairs and staff salaries", vi: "kế hoạch thu vé vào cửa đối với khách tham quan để có kinh phí sửa chữa và trả lương nhân viên" },
    positive: false
  },
  "Photography club": {
    e1Topic: {"en":"our photography club is planning a photo contest with separate categories","vi":"CLB nhiếp ảnh của chúng ta đang lên kế hoạch tổ chức cuộc thi ảnh với các bảng thi riêng"},
    e2Topic: {"en":"the plan to divide our upcoming photo contest into different age and genre categories","vi":"kế hoạch phân chia cuộc thi ảnh sắp tới thành các bảng theo độ tuổi và thể loại"},
    positive: true
  },
  "Science club": {
    e1Topic: {"en":"our science club is preparing an exhibition at the local town hall","vi":"CLB khoa học của chúng ta đang chuẩn bị một buổi triển lãm tại tòa thị chính địa phương"},
    e2Topic: {"en":"the plan to organize a science exhibition at the local town hall next month","vi":"kế hoạch tổ chức triển lãm khoa học tại tòa thị chính địa phương vào tháng tới"},
    positive: true
  },
  "Nature club": {
    e1Topic: {"en":"our club is choosing a community environmental project","vi":"CLB của chúng ta đang lựa chọn một dự án môi trường cộng đồng"},
    e2Topic: {"en":"the plan to select a community environmental project for our club","vi":"kế hoạch lựa chọn dự án môi trường cộng đồng cho CLB của chúng ta"},
    positive: true
  },
  "Business club": {
    e1Topic: {"en":"our club plans to support local entrepreneurs","vi":"CLB của chúng ta dự định hỗ trợ người khởi nghiệp địa phương"},
    e2Topic: {"en":"the plan to support local individuals who want to start up a business","vi":"kế hoạch hỗ trợ các cá nhân địa phương có nguyện vọng khởi nghiệp"},
    positive: true
  },
  "Debate club": {
    e1Topic: {"en":"our debate club is promoting debating skills to attract more young members","vi":"CLB tranh biện của chúng ta đang quảng bá kỹ năng tranh luận để thu hút thêm bạn trẻ"},
    e2Topic: {"en":"the plan to promote debate and public speaking skills among young people","vi":"kế hoạch thúc đẩy kỹ năng tranh biện và nói trước công chúng cho giới trẻ"},
    positive: true
  },
  "Fashion club": {
    e1Topic: {"en":"our fashion club plans to invite prominent designers to attract young members","vi":"CLB thời trang dự định mời các nhà thiết kế nổi tiếng để thu hút thành viên trẻ"},
    e2Topic: {"en":"the plan to invite renowned fashion designers to speak at our club","vi":"kế hoạch mời các nhà thiết kế thời trang nổi tiếng đến thuyết trình tại CLB"},
    positive: true
  },
  "Television club": {
    e1Topic: {"en":"our television club is planning an annual offline conference for international members","vi":"CLB truyền hình đang lên kế hoạch tổ chức hội nghị thường niên gặp mặt cho hội viên quốc tế"},
    e2Topic: {"en":"the plan to hold an annual conference to celebrate our television programs","vi":"kế hoạch tổ chức hội nghị thường niên nhằm kỷ niệm các chương trình truyền hình"},
    positive: true
  },
  "Computer club": {
    e1Topic: {"en":"our computer club is redesigning our website to make it more attractive","vi":"CLB tin học đang thiết kế lại trang web để giao diện hấp dẫn hơn"},
    e2Topic: {"en":"the plan to upgrade our club website to attract more visitors and members","vi":"kế hoạch nâng cấp trang web CLB để thu hút thêm khách truy cập và hội viên"},
    positive: true
  },
  "Technology club": {
    e1Topic: {"en":"our technology club is organizing a tech fair and inviting an inspiring speaker","vi":"CLB công nghệ đang tổ chức hội chợ công nghệ và mời diễn giả truyền cảm hứng"},
    e2Topic: {"en":"the plan to organize a technology fair and invite an expert guest speaker","vi":"kế hoạch tổ chức hội chợ công nghệ và mời diễn giả chuyên gia"},
    positive: true
  },
  "Travel club 3": {
    e1Topic: {"en":"our travel club is sharing essential travel advice for summer overseas trips","vi":"CLB du lịch đang chia sẻ các lời khuyên cần thiết cho những chuyến đi nước ngoài mùa hè"},
    e2Topic: {"en":"the plan to provide travel guidance and advice for overseas holidaymakers","vi":"kế hoạch cung cấp định hướng và lời khuyên du lịch cho du khách đi nghỉ ở nước ngoài"},
    positive: true
  }
};

export const standardEmotionsPositive = [
  { en: "quite excited", vi: "khá hào hứng" },
  { en: "absolutely thrilled", vi: "cực kỳ phấn khích" },
  { en: "pleasantly surprised", vi: "ngạc nhiên một cách thích thú" }
];

export const standardEmotionsConcern = [
  { en: "quite surprised and concerned", vi: "khá ngạc nhiên và lo lắng" },
  { en: "deeply disappointed", vi: "vô cùng thất vọng" },
  { en: "quite shocked", vi: "khá sốc và bất ngờ" }
];

export const standardMembershipTimes = [
  { en: "two years", vi: "được hai năm" },
  { en: "nearly two years", vi: "gần hai năm" },
  { en: "over a year", vi: "hơn một năm" },
  { en: "since the club was established", vi: "từ khi CLB thành lập" }
];

export const standardPerspectivesPositive = [
  { en: "this is a great idea", vi: "đây là một ý tưởng rất hay" },
  { en: "this is a reasonable decision", vi: "đây là một quyết định hợp lý" },
  { en: "this is a wonderful plan", vi: "đây là một kế hoạch tuyệt vời" },
  { en: "this project will bring great benefits to all members", vi: "dự án này sẽ mang lại lợi ích lớn cho các hội viên" }
];

export const standardPerspectivesConcern = [
  { en: "this is a reasonable decision", vi: "đây là một quyết định hợp lý" },
  { en: "this is an important issue that requires careful consideration", vi: "đây là vấn đề quan trọng cần cân nhắc kỹ lưỡng" },
  { en: "this decision is quite regrettable", vi: "quyết định này là điều khá đáng tiếc" },
  { en: "this decision has caused considerable concern among members", vi: "quyết định này đã gây ra nhiều lo ngại trong hội viên" }
];
