// APTIS WRITING PART 04 - COMPREHENSIVE DATA & TEMPLATES

export const part4CommonTemplates = {
  informal: {
    title: "EMAIL GỬI BẠN (Informal Email)",
    target: "Khoảng 50 từ (chuẩn 45 - 55 từ, tối đa ~65 từ)",
    tone: "Thân mật, tự nhiên, gần gũi (dùng tên thân mật, từ viết tắt, câu cảm thán)",
    structure: [
      {
        step: 1,
        name: "Lời chào thân mật",
        fixed: "Dear [Tên bạn],",
        note: "Dùng tên riêng của người nhận (ví dụ: Dear Kim, / Hi Sam,)"
      },
      {
        step: 2,
        name: "Mở đầu & Thăm hỏi",
        fixed: "How’s it going? I hope you're doing well.",
        note: "Chào hỏi tự nhiên, giữ mối quan hệ bạn bè"
      },
      {
        step: 3,
        name: "Nhắc tin tức & Bày tỏ cảm xúc",
        fixed: "I thought you'd be interested to hear that [thông tin trong đề bài]. I was quite [cảm xúc: excited / surprised / disappointed] when I found out about it.",
        note: "Tóm tắt ngắn gọn sự việc trong thông báo và thể hiện ngay cảm xúc cá nhân"
      },
      {
        step: 4,
        name: "Quan điểm & Đề xuất",
        fixed: "Personally, I think [ý kiến/câu trả lời 1] because [lý do]. Moreover, [phát triển thêm ý/đề xuất 2].",
        note: "Đưa ra 1 ý kiến rõ ràng kèm lý do, sau đó đưa thêm 1 đề xuất hoặc giải pháp vui vẻ"
      },
      {
        step: 5,
        name: "Hỏi ý bạn & Kết thư",
        fixed: "I would love to know what you think about this. Hope to hear from you soon.",
        note: "Mời bạn mình chia sẻ suy nghĩ và bày tỏ mong muốn sớm nhận phản hồi"
      },
      {
        step: 6,
        name: "Ký tên",
        fixed: "Take care, / [Tên của bạn]",
        note: "Lời chúc thân thiện (Take care, / Best, / Warmly,) kèm tên bạn (không cần họ)"
      }
    ],
    templateText: `Dear [tên người nhận],
How’s it going? I hope you're doing well.
I thought you'd be interested to hear that [thông tin trong đề bài]. I was quite surprised/ excited/ disappointed when I found out about it.
Personally, I think [ý kiến hoặc câu trả lời cho yêu cầu đầu tiên của đề] because [lý do]. Moreover, [phát triển thêm ý hoặc trả lời yêu cầu thứ hai của đề].
I would love to know what you think about this. Hope to hear from you soon.
Take care,
[tên người gửi]`,
    blocks: [
      { label: "1. Lời chào", fixedPrefix: "Dear ", slot: "[Tên bạn]", fixedSuffix: "," },
      { label: "2. Mở đầu", fixedPrefix: "How’s it going? I hope you're doing well." },
      { 
        label: "3. Tin tức & Cảm xúc", 
        fixedPrefix: "I thought you'd be interested to hear that ", 
        slot: "[thông tin sự việc trong đề bài]", 
        fixedMid: ". I was quite ", 
        slot2: "[cảm xúc: excited / surprised / disappointed]", 
        fixedSuffix: " when I found out about it." 
      },
      { 
        label: "4. Quan điểm & Lý do", 
        fixedPrefix: "Personally, I think ", 
        slot: "[ý kiến hoặc câu trả lời 1]", 
        fixedMid: " because ", 
        slot2: "[lý do ngắn gọn]", 
        fixedSuffix: "." 
      },
      { 
        label: "5. Đề xuất phát triển", 
        fixedPrefix: "Moreover, ", 
        slot: "[phát triển thêm ý hoặc đề xuất hoạt động 2]", 
        fixedSuffix: "." 
      },
      { label: "6. Hỏi ý bạn", fixedPrefix: "I would love to know what you think about this. Hope to hear from you soon." },
      { label: "7. Ký tên", fixedPrefix: "Take care,\n", slot: "[Tên của bạn]" }
    ]
  },

  formal: {
    title: "EMAIL GỬI QUẢN LÝ CÂU LẠC BỘ (Formal Email)",
    target: "120 - 150 từ (chuẩn 120 - 165 từ)",
    tone: "Trang trọng, lịch sự, chuyên nghiệp (KHÔNG viết tắt, dùng liên từ liên kết, từ vựng học thuật C1/B2)",
    structure: [
      {
        step: 1,
        name: "Lời chào trang trọng",
        fixed: "Dear Club Manager,",
        note: "Gửi quản lý câu lạc bộ hoặc chức danh được nêu trong đề (không dùng Hi/Hey)"
      },
      {
        step: 2,
        name: "Giới thiệu bản thân & Thời gian tham gia",
        fixed: "My name is [tên người gửi], and I have been a member of the club for [thời gian tham gia]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.",
        note: "Khẳng định sự gắn bó và đóng góp tích cực của bản thân cho câu lạc bộ"
      },
      {
        step: 3,
        name: "Mục đích viết thư & Bày tỏ quan điểm",
        fixed: "I am writing in response to your recent announcement regarding [vấn đề / sự kiện]. While I fully appreciate the club's initiative, I would like to express my perspective and put forward several constructive suggestions.",
        note: "Nêu rõ lý do viết thư, thể hiện sự đồng thuận/thấu hiểu và chuẩn bị đưa giải pháp"
      },
      {
        step: 4,
        name: "3 Đề xuất cụ thể & Lợi ích",
        fixed: "First and foremost, we should [đề xuất 1]. Secondly, it would be highly beneficial to [đề xuất 2]. Finally, we could consider [đề xuất 3]. Overall, I am convinced that these measures would make a positive impact and help the club achieve its objectives.",
        note: "3 đề xuất rõ ràng, dùng liên từ (First and foremost, Secondly, Finally), giải thích lợi ích"
      },
      {
        step: 5,
        name: "Lời cảm ơn & Bày tỏ thiện chí",
        fixed: "Thank you for taking the time to consider my feedback. I sincerely hope my suggestions will be taken into consideration, and I look forward to hearing from you soon.",
        note: "Cảm ơn người nhận đã dành thời gian và mong nhận phản hồi thiện chí"
      },
      {
        step: 6,
        name: "Ký tên trang trọng",
        fixed: "Yours sincerely, / [Họ và tên đầy đủ]",
        note: "Dùng Yours sincerely, hoặc Best regards, kèm Họ và tên đầy đủ"
      }
    ],
    templateText: `Dear Club Manager,
My name is [tên người gửi], and I have been a member of the club for [thời gian tham gia câu lạc bộ]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding [vấn đề / sự kiện / hoạt động được đề cập trong email]. I think this is a great idea / an important issue / an interesting topic / (nếu đề đưa ra lựa chọn thì trả lời [lựa chọn] would be a better choice]).
To help [mục tiêu], I would like to make a few suggestions. First, we should [đề xuất 1]. Second, it would be better to [đề xuất 2]. Finally, we could [đề xuất 3]. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
[tên người gửi]`,
    blocks: [
      { label: "1. Lời chào trang trọng", fixedPrefix: "Dear Club Manager," },
      { 
        label: "2. Giới thiệu bản thân", 
        fixedPrefix: "My name is ", 
        slot: "[Họ tên bạn]", 
        fixedMid: ", and I have been a member of the club for ", 
        slot2: "[thời gian: two years / nearly a year]", 
        fixedSuffix: ". During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development." 
      },
      { 
        label: "3. Mục đích & Quan điểm", 
        fixedPrefix: "I am writing in response to your email to share my thoughts and offer several practical suggestions regarding ", 
        slot: "[sự kiện / vấn đề được thông báo]", 
        fixedMid: ". I believe that this is ", 
        slot2: "[quan điểm: an excellent initiative / a matter that requires careful consideration]", 
        fixedSuffix: "." 
      },
      { 
        label: "4. Đề xuất 1 (Tuyến đường/Nội dung)", 
        fixedPrefix: "To help ", 
        slot: "[mục tiêu chính: attract new members / improve our club]", 
        fixedMid: ", I would like to propose a few practical measures. First, we should ", 
        slot2: "[đề xuất cụ thể 1]", 
        fixedSuffix: "." 
      },
      { 
        label: "5. Đề xuất 2 (Hoạt động tương tác)", 
        fixedPrefix: "Second, it would be better to ", 
        slot: "[đề xuất cụ thể 2 và lợi ích]", 
        fixedSuffix: "." 
      },
      { 
        label: "6. Đề xuất 3 (Hậu cần/Khích lệ)", 
        fixedPrefix: "Finally, we could ", 
        slot: "[đề xuất cụ thể 3]", 
        fixedMid: ". Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives." 
      },
      { 
        label: "7. Cảm ơn & Kỳ vọng", 
        fixedPrefix: "Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response." 
      },
      { label: "8. Ký tên trang trọng", fixedPrefix: "Best regards,\n", slot: "[Họ và tên của bạn]" }
    ]
  },

  styleComparison: [
    {
      criterion: "Mục đích",
      informal: "Tâm sự, kể chuyện, chia sẻ cảm xúc với bạn bè",
      formal: "Trình bày quan điểm, đóng góp ý kiến mang tính xây dựng cho quản lý"
    },
    {
      criterion: "Độ dài yêu cầu",
      informal: "Khoảng 50 từ (45 - 55 từ, tối đa 65 từ)",
      formal: "120 - 150 từ (chuẩn 120 - 165 từ)"
    },
    {
      criterion: "Lời chào",
      informal: "Dear [Tên], / Hi [Tên],",
      formal: "Dear Club Manager, / Dear Sir or Madam,"
    },
    {
      criterion: "Từ viết tắt",
      informal: "Được phép dùng: How's, I'm, I'd, don't, can't",
      formal: "TUYỆT ĐỐI KHÔNG VIẾT TẮT: I am, I would, do not, cannot"
    },
    {
      criterion: "Cấu trúc & Liên từ",
      informal: "Ngắn gọn, tự nhiên: Personally, Moreover, Hope to hear from you",
      formal: "Học thuật B2/C1: First and foremost, It would be highly beneficial to, Overall I am confident that"
    },
    {
      criterion: "Ký tên",
      informal: "Take care, / Warmly, / Best, + [Tên]",
      formal: "Best regards, / Yours sincerely, + [Họ và tên đầy đủ]"
    }
  ]
};

export const part4Data = {
  "Walking club": {
    title: "Walking Club",
    badge: "Đề chính thức (Giáo trình)",
    notice: "Dear members,\nOur Walking Club is planning to organize a monthly walking event to attract more members. We would like to know what you think about this idea and what activities we should include to make the event more enjoyable.",
    noticeVi: "Kính gửi các thành viên,\nCâu lạc bộ Đi bộ của chúng ta đang lên kế hoạch tổ chức một sự kiện đi bộ hàng tháng để thu hút thêm thành viên. Chúng tôi muốn biết bạn nghĩ gì về ý tưởng này và chúng ta nên đưa vào những hoạt động nào để sự kiện thêm phần thú vị.",
    promptAnalysis: {
      topic: "Tổ chức sự kiện đi bộ hàng tháng để thu hút thêm thành viên mới",
      task1: "Viết thư cho bạn (Kim): Bày tỏ cảm xúc về thông báo và gợi ý một số hoạt động vui nhộn sau khi đi bộ (~50 từ)",
      task2: "Viết thư cho Quản lý CLB: Nêu quan điểm về ý tưởng và đề xuất 3 giải pháp thực tế giúp sự kiện thành công và thu hút đông đảo hội viên (120 - 150 từ)"
    },
    email1: {
      title: "Email 1: Gửi bạn bè (Kim)",
      instruction: "Viết một email cho bạn của bạn (Kim). Cho bạn ấy biết cảm nghĩ của bạn về thông báo này và đề xuất một số hoạt động thú vị sau buổi đi bộ.",
      wordTarget: "Khoảng 50 từ (45 - 60 từ)",
      minWords: 45,
      maxWords: 65,
      template: `Dear Kim,
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Walking Club is planning a monthly walking event. I was quite excited when I found out about it. Personally, I think it's a great idea because it encourages people to exercise together. Moreover, we could organize some fun games after the walk.
I would love to know what you think about this. Hope to hear from you soon.
Take care,
[Tên của bạn]`,
      vocabCategories: [
        {
          name: "1. Bày tỏ Cảm xúc (Emotions)",
          icon: "Sparkles",
          items: [
            { en: "quite excited", vi: "khá hào hứng", example: "I was quite excited when I heard the news." },
            { en: "absolutely thrilled", vi: "cực kỳ phấn khích", example: "I was absolutely thrilled to find out about it." },
            { en: "pleasantly surprised", vi: "ngạc nhiên một cách thích thú", example: "I was pleasantly surprised by this wonderful announcement." },
            { en: "delighted", vi: "rất vui mừng", example: "I am delighted that our club is expanding." }
          ]
        },
        {
          name: "2. Nêu Quan điểm & Lý do (Opinion & Reasons)",
          icon: "CheckCircle2",
          items: [
            { en: "it encourages people to exercise together", vi: "khuyến khích mọi người cùng nhau vận động thể chất", example: "Personally, I think it is great because it encourages people to exercise together." },
            { en: "it helps members stay active and healthy", vi: "giúp các thành viên duy trì lối sống năng động và khỏe mạnh", example: "It promotes outdoor fitness and helps members stay healthy." },
            { en: "it creates a great opportunity to make new friends", vi: "tạo cơ hội tuyệt vời để kết thêm bạn mới", example: "It creates a great opportunity to socialize and make new friends." }
          ]
        },
        {
          name: "3. Hoạt động đề xuất vui nhộn (Fun Activities)",
          icon: "BookOpen",
          items: [
            { en: "organize some fun games after the walk", vi: "tổ chức một số trò chơi vui nhộn sau buổi đi bộ", example: "Moreover, we could organize some fun games after the walk." },
            { en: "have a small picnic in the park", vi: "cùng nhau tổ chức dã ngoại nhẹ trong công viên", example: "We could bring some light snacks and have a picnic together." },
            { en: "take group photos at scenic viewpoints", vi: "chụp ảnh tập thể kỷ niệm tại những điểm ngắm cảnh đẹp", example: "We could take lots of beautiful photos along the route." }
          ]
        }
      ],
      samples: [
        {
          title: "Bài mẫu chuẩn (Giáo trình Cô Nguyệt)",
          wordCount: 80,
          en: `Dear Kim,
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Walking Club is planning a monthly walking event. I was quite excited when I found out about it. Personally, I think it's a great idea because it encourages people to exercise together. Moreover, we could organize some fun games after the walk.
I would love to know what you think about this. Hope to hear from you soon.
Take care,
Kato`,
          vi: `Chào Kim,
Dạo này bạn thế nào? Mình hy vọng bạn vẫn khỏe.
Mình nghĩ bạn sẽ thích nghe rằng Câu lạc bộ Đi bộ của chúng ta đang lên kế hoạch tổ chức một sự kiện đi bộ hàng tháng. Mình khá hào hứng khi biết tin này. Cá nhân mình thấy đây là một ý tưởng tuyệt vời vì nó khuyến khích mọi người cùng nhau tập thể dục. Hơn nữa, chúng ta có thể tổ chức một số trò chơi vui nhộn sau khi đi bộ.
Mình rất muốn biết bạn nghĩ gì về điều này. Hy vọng sớm nhận được tin từ bạn.
Bảo trọng nhé,
Kato`,
          analysis: [
            { label: "Lời chào & Thăm hỏi", text: "Dear Kim, How's it going? I hope you're doing well." },
            { label: "Nhắc tin tức & Cảm xúc", text: "I thought you'd be interested to hear that our Walking Club is planning a monthly walking event. I was quite excited when I found out about it." },
            { label: "Nêu quan điểm & Lý do", text: "Personally, I think it's a great idea because it encourages people to exercise together." },
            { label: "Đề xuất hoạt động", text: "Moreover, we could organize some fun games after the walk." },
            { label: "Kết thư & Ký tên", text: "I would love to know what you think about this. Hope to hear from you soon. Take care, Kato" }
          ]
        }
      ]
    },

    email2: {
      title: "Email 2: Gửi Quản lý Câu lạc bộ",
      instruction: "Viết một email cho Quản lý CLB để bày tỏ sự ủng hộ và đưa ra 3 đề xuất thực tế giúp sự kiện đi bộ thu hút đông đảo thành viên và diễn ra thành công tốt đẹp.",
      wordTarget: "120 - 150 từ (chuẩn 120 - 165 từ)",
      minWords: 120,
      maxWords: 165,
      template: `Dear Club Manager,
My name is [tên người gửi], and I have been a member of the club for [thời gian tham gia]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding the monthly walking event. I think this is a great idea.
To help attract more members and make the event more enjoyable, I would like to make a few suggestions. First, we should [đề xuất 1: chọn tuyến đường an toàn, cảnh đẹp]. Second, it would be better to [đề xuất 2: tổ chức trò chơi đồng đội/thử thách]. Finally, we could [đề xuất 3: đồ uống lành mạnh/quà tặng động viên]. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
[Tên của bạn]`,
      vocabCategories: [
        {
          name: "1. Giới thiệu bản thân & Gắn bó với CLB",
          icon: "ShieldCheck",
          items: [
            { en: "I have been a member of the club for two years", vi: "tôi đã là thành viên của CLB được hai năm", example: "My name is Nam, and I have been a member of the club for two years." },
            { en: "a wide range of meaningful activities", vi: "đa dạng các hoạt động ý nghĩa", example: "I have had the opportunity to participate in a wide range of meaningful activities." },
            { en: "greatly enriched my experience and personal development", vi: "làm phong phú rất nhiều trải nghiệm và sự phát triển bản thân", example: "These events have greatly enriched my experience and personal development." }
          ]
        },
        {
          name: "2. Mục đích viết thư & Nêu quan điểm",
          icon: "Mail",
          items: [
            { en: "I am writing in response to your email to share my thoughts", vi: "tôi viết email này để hồi đáp email của bạn nhằm chia sẻ suy nghĩ", example: "I am writing in response to your email regarding the new event." },
            { en: "offer several practical suggestions", vi: "đưa ra một vài đề xuất thực tế, khả thi", example: "I would like to offer several practical suggestions to improve the event." },
            { en: "To help attract more members and make the event more enjoyable", vi: "nhằm giúp thu hút thêm thành viên và làm cho sự kiện thêm phần thú vị", example: "To help attract more members, I would like to make a few recommendations." }
          ]
        },
        {
          name: "3. Đề xuất 1: Tuyến đường đi bộ (Walking Routes)",
          icon: "Sparkles",
          items: [
            { en: "choose safe and scenic walking routes", vi: "lựa chọn các cung đường đi bộ an toàn và có cảnh quan tươi đẹp", example: "First, we should choose safe and scenic walking routes." },
            { en: "enjoy the natural surroundings", vi: "tận hưởng khung cảnh thiên nhiên xung quanh", example: "This allows participants to enjoy the natural surroundings and breathe fresh air." },
            { en: "suitable for participants of all fitness levels", vi: "phù hợp cho người tham gia ở mọi thể lực", example: "The route should be well-shaded and suitable for participants of all fitness levels." }
          ]
        },
        {
          name: "4. Đề xuất 2: Hoạt động gắn kết (Interactive Activities)",
          icon: "BookOpen",
          items: [
            { en: "organize some simple team games or fitness challenges", vi: "tổ chức các trò chơi đồng đội đơn giản hoặc thử thách thể lực nhẹ", example: "Second, it would be better to organize some simple team games after the walk." },
            { en: "encourage interaction among members", vi: "khuyến khích sự tương tác và giao lưu giữa các thành viên", example: "Team games encourage meaningful interaction among new and senior members." },
            { en: "pair newcomers with experienced members", vi: "ghép đôi người mới với các thành viên kỳ cựu", example: "We could pair newcomers with experienced members to make them feel welcomed." }
          ]
        },
        {
          name: "5. Đề xuất 3: Hậu cần & Khích lệ (Logistics & Incentives)",
          icon: "CheckCircle2",
          items: [
            { en: "prepare healthy drinks and snacks for everyone", vi: "chuẩn bị đồ uống lành mạnh và đồ ăn nhẹ bồi dưỡng cho mọi người", example: "Finally, we could prepare healthy drinks and fresh snacks for everyone." },
            { en: "award certificates or small souvenir badges", vi: "trao chứng nhận hoặc huy hiệu kỷ niệm lưu niệm", example: "We could award completion badges to members who join consecutively." },
            { en: "Overall, I am confident that these suggestions would make a positive difference", vi: "nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực", example: "Overall, I am confident that these measures will help the club achieve its objectives." }
          ]
        }
      ],
      samples: [
        {
          title: "Bài mẫu chuẩn (Giáo trình Cô Nguyệt)",
          wordCount: 189,
          en: `Dear Club Manager,
My name is Nam, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding the monthly walking event. I think this is a great idea.
To help attract more members and make the event more enjoyable, I would like to make a few suggestions. First, we should choose safe and scenic walking routes so participants can enjoy the natural surroundings. Second, it would be better to organize some simple team games or fitness challenges after the walk to encourage interaction among members. Finally, we could prepare healthy drinks and snacks for everyone. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
Kato`,
          vi: `Kính gửi Quản lý Câu lạc bộ,
Tên tôi là Nam, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.
Tôi viết email này để hồi đáp email của bạn nhằm chia sẻ suy nghĩ và đưa ra một vài đề xuất thực tế liên quan đến sự kiện đi bộ hàng tháng. Tôi nghĩ đây là một ý tưởng tuyệt vời.
Để giúp thu hút thêm thành viên và làm cho sự kiện thú vị hơn, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, chúng ta nên chọn các tuyến đường đi bộ an toàn và có cảnh quan đẹp để người tham gia có thể tận hưởng khung cảnh thiên nhiên xung quanh. Thứ hai, sẽ tốt hơn nếu tổ chức một số trò chơi đồng đội đơn giản hoặc thử thách rèn luyện thể lực sau buổi đi bộ để khuyến khích sự tương tác giữa các thành viên. Cuối cùng, chúng ta có thể chuẩn bị đồ uống lành mạnh và đồ ăn nhẹ cho mọi người. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo ra sự khác biệt tích cực và giúp câu lạc bộ đạt được các mục tiêu của mình.
Cảm ơn bạn đã dành thời gian xem xét các đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.
Trân trọng,
Kato`,
          analysis: [
            { label: "Mở đầu & Giới thiệu bản thân", text: "My name is Nam, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development." },
            { label: "Mục đích viết thư & Đồng thuận", text: "I am writing in response to your email to share my thoughts and offer several practical suggestions regarding the monthly walking event. I think this is a great idea." },
            { label: "Đề xuất 1 (Tuyến đường)", text: "First, we should choose safe and scenic walking routes so participants can enjoy the natural surroundings." },
            { label: "Đề xuất 2 (Hoạt động gắn kết)", text: "Second, it would be better to organize some simple team games or fitness challenges after the walk to encourage interaction among members." },
            { label: "Đề xuất 3 (Hậu cần & Kết luận)", text: "Finally, we could prepare healthy drinks and snacks for everyone. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives." },
            { label: "Cảm ơn & Ký tên", text: "Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response. Best regards, Kato" }
          ]
        }
      ]
    }
  },

  "Fitness club": {
    title: "Fitness Club",
    badge: "Đề ôn tập nâng cao",
    notice: "Dear members,\nOur Fitness Club is planning to upgrade our workout equipment and adjust our monthly membership fee by 15% starting next month. We would like to hear your thoughts on this change and any recommendations for new equipment or services to improve member satisfaction.",
    noticeVi: "Kính gửi các thành viên,\nCâu lạc bộ Thể hình của chúng ta đang lên kế hoạch nâng cấp trang thiết bị tập luyện và điều chỉnh tăng phí hội viên hàng tháng thêm 15% bắt đầu từ tháng tới. Chúng tôi muốn lắng nghe suy nghĩ của bạn về sự thay đổi này và bất kỳ đề xuất nào về thiết bị hoặc dịch vụ mới nhằm nâng cao sự hài lòng của hội viên.",
    promptAnalysis: {
      topic: "Nâng cấp thiết bị tập luyện và tăng phí hội viên thêm 15%",
      task1: "Viết thư cho bạn (Alex): Bày tỏ sự bất ngờ về việc tăng phí, chia sẻ suy nghĩ và rủ bạn tiếp tục tập chung (~50 từ)",
      task2: "Viết thư cho Quản lý CLB: Nêu quan điểm về việc tăng phí và đưa ra 3 đề xuất thực tế (ưu đãi cho hội viên cũ, bổ sung lớp học nhóm, nâng cấp máy chạy bộ) (120 - 150 từ)"
    },
    email1: {
      title: "Email 1: Gửi bạn bè (Alex)",
      instruction: "Viết một email cho bạn của bạn (Alex). Cho bạn ấy biết cảm nghĩ về việc tăng phí hội viên và đề xuất cùng nhau duy trì lịch tập.",
      wordTarget: "Khoảng 50 từ (45 - 60 từ)",
      minWords: 45,
      maxWords: 65,
      template: `Dear Alex,
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Fitness Club is going to increase the membership fee by 15% to upgrade the gym equipment. I was quite surprised when I found out about it. Personally, I think it's reasonable because the current machines are quite old. Moreover, we should renew our membership early to get discounts.
I would love to know what you think about this. Hope to hear from you soon.
Take care,
[Tên của bạn]`,
      vocabCategories: [
        {
          name: "1. Bày tỏ Cảm xúc (Emotions)",
          icon: "Sparkles",
          items: [
            { en: "quite surprised", vi: "khá bất ngờ", example: "I was quite surprised by the sudden price increase." },
            { en: "a bit concerned", vi: "hơi băn khoăn một chút", example: "I was a bit concerned about the 15% increase." },
            { en: "excited about the new equipment", vi: "hào hứng với các máy tập mới", example: "However, I am excited about the new equipment." }
          ]
        },
        {
          name: "2. Quan điểm & Lý do (Opinion & Reasons)",
          icon: "CheckCircle2",
          items: [
            { en: "it is totally reasonable", vi: "điều đó hoàn toàn hợp lý", example: "Personally, I think it is totally reasonable because the old machines break down often." },
            { en: "worth the extra money", vi: "đáng với số tiền bỏ thêm", example: "Better machines are definitely worth the extra money." },
            { en: "renew our membership early for discounts", vi: "gia hạn thẻ tập sớm để nhận ưu đãi", example: "Moreover, we could renew our package together for a discount." }
          ]
        }
      ],
      samples: [
        {
          title: "Bài mẫu chuẩn B2-C1",
          wordCount: 78,
          en: `Dear Alex,
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Fitness Club is planning to increase the membership fee by 15% to upgrade workout equipment. I was quite surprised when I found out about it. Personally, I think it is reasonable because our current machines are quite outdated. Moreover, we should renew our annual pass together to get a discount.
I would love to know what you think about this. Hope to hear from you soon.
Take care,
Nam`,
          vi: `Chào Alex,
Dạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.
Mình nghĩ bạn sẽ quan tâm khi nghe tin CLB Thể hình của chúng ta đang dự định tăng phí 15% để nâng cấp thiết bị tập luyện. Mình khá bất ngờ khi biết tin này. Cá nhân mình nghĩ mức tăng này là hợp lý vì các máy móc hiện tại đã khá cũ kỹ. Hơn nữa, chúng mình nên cùng gia hạn vé năm sớm để nhận ưu đãi giảm giá.
Mình rất muốn biết bạn nghĩ sao về việc này. Mong sớm nhận tin từ bạn nhé.
Bảo trọng,
Nam`
        }
      ]
    },

    email2: {
      title: "Email 2: Gửi Quản lý CLB Thể hình",
      instruction: "Viết email gửi Quản lý CLB: Bày tỏ quan điểm về việc tăng phí 15% và đề xuất 3 giải pháp thực tế để đảm bảo quyền lợi hội viên và giữ chân khách hàng.",
      wordTarget: "120 - 150 từ (chuẩn 120 - 165 từ)",
      minWords: 120,
      maxWords: 165,
      template: `Dear Club Manager,
My name is [tên người gửi], and I have been a member of the club for nearly two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding the proposed 15% fee increase and equipment upgrade. I think this is an important issue.
To help maintain member satisfaction and encourage renewals, I would like to make a few suggestions. First, we should prioritize purchasing modern cardio machines such as treadmills and rowing machines. Second, it would be better to offer loyalty discounts or a grace period for existing members before applying the new rate. Finally, we could introduce free weekly yoga or group fitness classes to add more value. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
[Tên của bạn]`,
      vocabCategories: [
        {
          name: "1. Đề xuất về Thiết bị (Equipment)",
          icon: "Sparkles",
          items: [
            { en: "prioritize modern cardio machines", vi: "ưu tiên sắm các máy tập tim mạch hiện đại", example: "First, we should prioritize modern cardio machines and multi-functional weight racks." },
            { en: "replace outdated treadmills", vi: "thay thế các máy chạy bộ đã cũ", example: "Replacing outdated treadmills will prevent workout interruptions." }
          ]
        },
        {
          name: "2. Đề xuất về Chính sách Phí (Pricing Policies)",
          icon: "CheckCircle2",
          items: [
            { en: "offer loyalty discounts for long-term members", vi: "dành chiết khấu tri ân cho hội viên lâu năm", example: "Second, it would be better to offer loyalty discounts for existing members." },
            { en: "implement a gradual price transition", vi: "áp dụng lộ trình tăng giá dần dần", example: "A gradual transition gives members sufficient time to adjust." }
          ]
        },
        {
          name: "3. Đề xuất về Dịch vụ cộng thêm (Added Value)",
          icon: "BookOpen",
          items: [
            { en: "introduce complimentary group fitness classes", vi: "bổ sung các lớp tập nhóm miễn phí (Yoga, Zumba)", example: "Finally, we could introduce complimentary group classes each weekend." },
            { en: "provide free body composition assessments", vi: "cung cấp dịch vụ đo chỉ số cơ thể InBody định kỳ miễn phí", example: "Providing free fitness consultations creates great added value." }
          ]
        }
      ],
      samples: [
        {
          title: "Bài mẫu chuẩn B2-C1",
          wordCount: 184,
          en: `Dear Club Manager,
My name is Nam, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding the proposed fee adjustment and facility renovation. I think this is an important issue.
To help maintain member satisfaction and ensure high retention, I would like to make a few suggestions. First, we should prioritize replacing outdated cardio equipment with smart treadmills and rowing machines. Second, it would be better to provide existing members with a special loyalty discount before applying the new pricing. Finally, we could organize complimentary weekend yoga and spinning classes to add value to our memberships. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
Nam Nguyen`,
          vi: `Kính gửi Quản lý Câu lạc bộ,
Tên tôi là Nam, và tôi đã là hội viên của câu lạc bộ được hai năm. Trong suốt thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự rèn luyện thể chất của bản thân rất nhiều.
Tôi viết thư này nhằm phản hồi thông báo của câu lạc bộ để chia sẻ góc nhìn và đề xuất một số giải pháp thực tế liên quan đến việc điều chỉnh học phí và nâng cấp cơ sở vật chất. Tôi cho rằng đây là một vấn đề rất đáng quan tâm.
Để duy trì sự hài lòng của hội viên và giữ chân khách hàng gắn bó, tôi xin phép đưa ra một vài kiến nghị. Thứ nhất, chúng ta nên ưu tiên thay thế các thiết bị cardio đã cũ bằng máy chạy bộ thông minh và máy chèo thuyền. Thứ hai, câu lạc bộ nên dành mức giá ưu đãi tri ân cho các thành viên hiện tại trước khi áp dụng biểu phí mới. Cuối cùng, chúng ta có thể bổ sung các lớp yoga và đạp xe nhóm miễn phí vào cuối tuần để gia tăng giá trị thẻ tập. Nhìn chung, tôi tin rằng những giải pháp này sẽ tạo nên sự thay đổi tích cực và giúp câu lạc bộ hoàn thành mục tiêu.
Cảm ơn bạn đã dành thời gian xem xét thư. Tôi rất hy vọng các đóng góp này sẽ được cân nhắc và mong sớm nhận được phản hồi.
Trân trọng,
Nam Nguyen`
        }
      ]
    }
  }
};
