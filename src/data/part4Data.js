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
        fixed: "I thought you'd be interested to hear that [thông tin trong đề bài]. I was quite [cảm xúc] when I found out about it.",
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
I thought you'd be interested to hear that [thông tin trong đề bài]. I was quite [cảm xúc] when I found out about it.
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
        slot2: "[cảm xúc]", 
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
        label: "4. Đề xuất 1 (Giải pháp cốt lõi)", 
        fixedPrefix: "To help ", 
        slot: "[mục tiêu chính: attract new members / improve our club]", 
        fixedMid: ", I would like to propose a few practical measures. First, we should ", 
        slot2: "[đề xuất cụ thể 1]", 
        fixedSuffix: "." 
      },
      { 
        label: "5. Đề xuất 2 (Chính sách / Hoạt động hỗ trợ)", 
        fixedPrefix: "Second, it would be better to ", 
        slot: "[đề xuất cụ thể 2 và lợi ích]", 
        fixedSuffix: "." 
      },
      { 
        label: "6. Đề xuất 3 (Hậu cần / Lan tỏa)", 
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
    "title": "Walking club (Monthly walking event)",
    "badge": "Đề thi mẫu chuẩn",
    "notice": "Dear members,\nOur Walking Club is planning to organize a monthly walking event to attract more members. We would like to know what you think about this idea and what activities we should include to make the event more enjoyable.",
    "noticeVi": "Kính gửi các thành viên,\nCâu lạc bộ Đi bộ của chúng ta đang lên kế hoạch tổ chức sự kiện đi bộ hàng tháng để thu hút thêm thành viên mới. Chúng tôi muốn biết bạn nghĩ gì về ý tưởng này và chúng ta nên đưa vào những hoạt động nào để sự kiện thêm phần thú vị.",
    "promptAnalysis": {
      "topic": "Tổ chức sự kiện đi bộ định kỳ hàng tháng nhằm thu hút hội viên mới và tăng tính gắn kết",
      "task1": "Viết email thân mật cho bạn (Kim): Bày tỏ sự hào hứng, nêu quan điểm tích cực và gợi ý trò chơi vui nhộn sau buổi đi bộ (~50 từ)",
      "task2": "Viết email trang trọng cho Quản lý CLB: Bày tỏ sự ủng hộ và đề xuất 3 giải pháp thực tế (chọn cung đường an toàn cảnh đẹp, tổ chức trò chơi đồng đội, chuẩn bị đồ uống lành mạnh) (120 - 150 từ)"
    },
    "email1": {
      "title": "Email 1: Gửi bạn bè (Kim)",
      "instruction": "Write a short email to your friend (about 50 words). Tell your friend your feelings about this and what you plan to do.",
      "instructionVi": "Viết một email ngắn cho bạn của bạn (khoảng 50 từ). Cho bạn ấy biết cảm xúc của bạn về việc này và bạn dự định sẽ làm gì.",
      "wordTarget": "Khoảng 50 từ (45 - 60 từ)",
      "minWords": 45,
      "maxWords": 65,
      "template": "Dear Kim,\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that [thông tin trong đề bài]. I was quite [cảm xúc: excited / surprised] when I found out about it.\nPersonally, I think [ý kiến của bạn] because [lý do]. Moreover, [phát triển thêm ý].\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Bày tỏ Cảm xúc (Emotions)",
                  "items": [
                        {
                              "en": "quite excited",
                              "vi": "khá hào hứng"
                        },
                        {
                              "en": "absolutely thrilled",
                              "vi": "cực kỳ phấn khích"
                        },
                        {
                              "en": "pleasantly surprised",
                              "vi": "ngạc nhiên một cách thích thú"
                        }
                  ]
            },
            {
                  "name": "2. [ý kiến & lý do] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "it is a great idea because it encourages people to exercise together",
                              "vi": "đây là ý tưởng tuyệt vời vì nó khuyến khích mọi người cùng rèn luyện thể chất"
                        },
                        {
                              "en": "this event is very beneficial because regular walking helps members stay active and healthy",
                              "vi": "sự kiện này rất bổ ích vì đi bộ thường xuyên giúp hội viên năng động và khỏe mạnh"
                        },
                        {
                              "en": "this is a wonderful opportunity because it helps us socialize and make new friends",
                              "vi": "đây là cơ hội tuyệt vời vì giúp chúng ta giao lưu và kết thêm bạn mới"
                        }
                  ]
            },
            {
                  "name": "3. [phát triển thêm ý] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we could organize some fun team games after the walk",
                              "vi": "chúng mình có thể tổ chức một số trò chơi đồng đội vui nhộn sau khi đi bộ"
                        },
                        {
                              "en": "we can bring light snacks and have a small picnic together in the park",
                              "vi": "chúng mình có thể mang đồ ăn nhẹ và cùng nhau dã ngoại trong công viên"
                        },
                        {
                              "en": "we should take lots of scenic group photos along the walking route",
                              "vi": "chúng mình nên chụp thật nhiều ảnh kỷ niệm đẹp trên suốt cung đường"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 80,
                  "en": "Dear Kim,\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that our Walking Club is planning a monthly walking event. I was quite excited when I found out about it. Personally, I think it's a great idea because it encourages people to exercise together. Moreover, we could organize some fun games after the walk.\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\nKato",
                  "vi": "Chào Kim,\nDạo này bạn thế nào? Mình hy vọng bạn vẫn khỏe.\nMình nghĩ bạn sẽ thích nghe rằng Câu lạc bộ Đi bộ của chúng ta đang lên kế hoạch tổ chức sự kiện đi bộ hàng tháng. Mình khá hào hứng khi biết tin này. Cá nhân mình thấy đây là ý tưởng tuyệt vời vì nó khuyến khích mọi người cùng nhau tập thể dục. Hơn nữa, chúng ta có thể tổ chức một số trò chơi vui nhộn sau khi đi bộ.\nMình rất muốn biết bạn nghĩ gì về điều này. Hy vọng sớm nhận được tin từ bạn.\nBảo trọng nhé,\nKato",
                  "analysis": [
                        {
                              "label": "Lời chào & Thăm hỏi",
                              "text": "Dear Kim, How's it going? I hope you're doing well."
                        },
                        {
                              "label": "Nhắc tin tức & Cảm xúc",
                              "text": "I thought you'd be interested to hear that our Walking Club is planning a monthly walking event. I was quite excited when I found out about it."
                        },
                        {
                              "label": "Nêu quan điểm & Lý do",
                              "text": "Personally, I think it's a great idea because it encourages people to exercise together."
                        },
                        {
                              "label": "Đề xuất hoạt động",
                              "text": "Moreover, we could organize some fun games after the walk."
                        },
                        {
                              "label": "Kết thư & Ký tên",
                              "text": "I would love to know what you think about this. Hope to hear from you soon. Take care, Kato"
                        }
                  ]
            }
      ]
    },
    "email2": {
      "title": "Email 2: Gửi Quản lý Câu lạc bộ",
      "instruction": "Write an email to the president of the club (about 120–150 words). Tell them your thoughts about this and what you would like to do.",
      "instructionVi": "Viết một email cho chủ tịch câu lạc bộ (khoảng 120–150 từ). Trình bày suy nghĩ của bạn và những việc bạn muốn đề xuất đóng góp.",
      "wordTarget": "120 - 150 từ (chuẩn 120 - 165 từ)",
      "minWords": 120,
      "maxWords": 165,
      "template": "Dear Club Manager,\nMy name is [Tên của bạn], and I have been a member of the club for [thời gian tham gia]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my thoughts and offer several practical suggestions regarding [thông tin trong đề bài]. I think [nêu quan điểm về vấn đề đó].\nTo help attract more members and make the event more enjoyable, I would like to make a few suggestions. First, [đề xuất thứ nhất]. Second, [đề xuất thứ hai]. Finally, [đề xuất thứ ba]. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Đề xuất 1: [đề xuất thứ nhất] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we should choose safe and scenic walking routes so participants can enjoy nature",
                              "vi": "chúng ta nên chọn các tuyến đường an toàn, có cảnh quan đẹp để người tham gia ngắm cảnh"
                        },
                        {
                              "en": "the club should select gentle walking trails suitable for members of all fitness levels",
                              "vi": "CLB nên chọn cung đường bằng phẳng, vừa sức với mọi thể lực của hội viên"
                        }
                  ]
            },
            {
                  "name": "2. Đề xuất 2: [đề xuất thứ hai] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "it would be better to organize simple team games after the walk to encourage interaction",
                              "vi": "sẽ tốt hơn nếu tổ chức các trò chơi đồng đội đơn giản sau buổi đi để tăng tương tác"
                        },
                        {
                              "en": "we ought to pair newcomers with experienced members to create a welcoming atmosphere",
                              "vi": "chúng ta nên ghép người mới với hội viên kỳ cựu để tạo không khí thân thiện, gần gũi"
                        }
                  ]
            },
            {
                  "name": "3. Đề xuất 3: [đề xuất thứ ba] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we could prepare healthy drinks and fresh fruit for all participants",
                              "vi": "chúng ta có thể chuẩn bị đồ uống lành mạnh và hoa quả tươi cho toàn thể người tham gia"
                        },
                        {
                              "en": "the club could award small souvenir badges to members who join consistently",
                              "vi": "CLB có thể trao tặng huy hiệu lưu niệm cho những hội viên tham gia tích cực"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 189,
                  "en": "Dear Club Manager,\nMy name is Kato, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my thoughts and offer several practical suggestions regarding the monthly walking event. I think this is a great idea.\nTo help attract more members and make the event more enjoyable, I would like to make a few suggestions. First, we should choose safe and scenic walking routes so participants can enjoy the natural surroundings. Second, it would be better to organize some simple team games or fitness challenges after the walk to encourage interaction among members. Finally, we could prepare healthy drinks and snacks for everyone. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\nKato",
                  "vi": "Kính gửi Quản lý Câu lạc bộ,\nTên tôi là Kato, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.\nTôi viết email này để hồi đáp email của bạn nhằm chia sẻ suy nghĩ và đưa ra một vài đề xuất thực tế liên quan đến sự kiện đi bộ hàng tháng. Tôi nghĩ đây là một ý tưởng tuyệt vời.\nĐể giúp thu hút thêm thành viên và làm cho sự kiện thú vị hơn, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, chúng ta nên chọn các tuyến đường đi bộ an toàn và có cảnh quan đẹp để người tham gia có thể tận hưởng khung cảnh thiên nhiên xung quanh. Thứ hai, sẽ tốt hơn nếu tổ chức một số trò chơi đồng đội đơn giản hoặc thử thách rèn luyện thể lực sau buổi đi bộ để khuyến khích sự tương tác giữa các thành viên. Cuối cùng, chúng ta có thể chuẩn bị đồ uống lành mạnh và đồ ăn nhẹ cho mọi người. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo ra sự khác biệt tích cực và giúp câu lạc bộ đạt được các mục tiêu của mình.\nCảm ơn bạn đã dành thời gian xem xét các đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.\nTrân trọng,\nKato",
                  "analysis": [
                        {
                              "label": "Mở đầu & Giới thiệu bản thân",
                              "text": "My name is Kato, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development."
                        },
                        {
                              "label": "Mục đích viết thư & Nêu quan điểm",
                              "text": "I am writing in response to your email to share my thoughts and offer several practical suggestions regarding the monthly walking event. I think this is a great idea."
                        },
                        {
                              "label": "Đề xuất 1: Tuyến đường",
                              "text": "First, we should choose safe and scenic walking routes so participants can enjoy the natural surroundings."
                        },
                        {
                              "label": "Đề xuất 2: Hoạt động gắn kết",
                              "text": "Second, it would be better to organize some simple team games or fitness challenges after the walk to encourage interaction among members."
                        },
                        {
                              "label": "Đề xuất 3 & Đánh giá chung",
                              "text": "Finally, we could prepare healthy drinks and snacks for everyone. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives."
                        },
                        {
                              "label": "Cảm ơn & Ký tên",
                              "text": "Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response. Best regards, Kato"
                        }
                  ]
            }
      ]
    }
  },
  "Fitness club": {
    "title": "Fitness club (Equipment & Fees)",
    "badge": "Đề ôn tập nâng cao",
    "notice": "Dear members,\nOur Fitness Club is planning to upgrade our workout equipment and adjust our monthly membership fee by 15% starting next month. We would like to hear your thoughts on this change and any recommendations for new equipment or services to improve member satisfaction.",
    "noticeVi": "Kính gửi các thành viên,\nCâu lạc bộ Thể hình của chúng ta đang lên kế hoạch nâng cấp trang thiết bị tập luyện và điều chỉnh tăng phí hội viên hàng tháng thêm 15% bắt đầu từ tháng tới. Chúng tôi muốn lắng nghe suy nghĩ của bạn về sự thay đổi này và bất kỳ đề xuất nào về thiết bị hoặc dịch vụ mới nhằm nâng cao sự hài lòng của hội viên.",
    "promptAnalysis": {
      "topic": "Nâng cấp thiết bị tập luyện và tăng phí hội viên hàng tháng thêm 15%",
      "task1": "Viết email cho bạn (Alex): Bày tỏ sự bất ngờ về việc tăng phí, nêu ý kiến ủng hộ nâng cấp máy tập và rủ bạn gia hạn sớm để nhận ưu đãi (~50 từ)",
      "task2": "Viết email cho Quản lý CLB: Nêu quan điểm về việc tăng phí và đề xuất 3 giải pháp thực tế (ưu tiên máy cardio hiện đại, chiết khấu cho hội viên lâu năm, bổ sung lớp tập nhóm miễn phí) (120 - 150 từ)"
    },
    "email1": {
      "title": "Email 1: Gửi bạn bè (Alex)",
      "instruction": "Write a short email to your friend (about 50 words). Tell your friend your feelings about the fee increase and what you think about upgrading equipment.",
      "instructionVi": "Viết một email ngắn cho bạn của bạn (khoảng 50 từ). Cho bạn ấy biết cảm xúc của bạn về việc tăng phí và suy nghĩ của bạn về việc nâng cấp thiết bị.",
      "wordTarget": "Khoảng 50 từ (45 - 60 từ)",
      "minWords": 45,
      "maxWords": 65,
      "template": "Dear Alex,\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that our Fitness Club is planning to increase the membership fee by 15% to upgrade equipment. I was quite surprised when I found out about it. Personally, I think it is reasonable because our current machines are quite outdated. Moreover, we should renew our annual pass together to get a discount.\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Bày tỏ Cảm xúc (Emotions)",
                  "items": [
                        {
                              "en": "quite surprised and concerned",
                              "vi": "khá ngạc nhiên và lo lắng"
                        },
                        {
                              "en": "a bit worried",
                              "vi": "hơi lo lắng một chút"
                        },
                        {
                              "en": "deeply concerned",
                              "vi": "rất băn khoăn và quan ngại"
                        }
                  ]
            },
            {
                  "name": "2. [ý kiến & lý do] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "this price adjustment is reasonable because upgrading gym equipment requires funding",
                              "vi": "việc điều chỉnh phí là hợp lý vì nâng cấp máy tập chất lượng đòi hỏi chi phí"
                        },
                        {
                              "en": "an immediate 15% increase is too steep because many students have tight budgets",
                              "vi": "tăng ngay 15% là quá cao vì nhiều học sinh sinh viên có ngân sách eo hẹp"
                        }
                  ]
            },
            {
                  "name": "3. [phát triển thêm ý] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we should renew our memberships early before the new fee takes effect",
                              "vi": "chúng mình nên gia hạn thẻ tập sớm trước khi biểu phí mới có hiệu lực"
                        },
                        {
                              "en": "we can suggest that the club offer student discount packages",
                              "vi": "chúng mình có thể đề xuất CLB áp dụng các gói giảm giá cho sinh viên"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 88,
                  "en": "Dear Kim,\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that our Fitness Club is planning to increase the membership fee by 15% to upgrade workout equipment. I was quite surprised when I found out about it. Personally, I think it is reasonable because our current machines are quite outdated. Moreover, we should renew our annual pass together to get a discount.\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\nKato",
                  "vi": "Chào Kim,\nDạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.\nMình nghĩ bạn sẽ quan tâm khi nghe tin CLB Thể hình của chúng ta đang dự định tăng phí 15% để nâng cấp thiết bị tập luyện. Mình khá bất ngờ khi biết tin này. Cá nhân mình nghĩ mức tăng này là hợp lý vì các máy móc hiện tại đã khá cũ kỹ. Hơn nữa, chúng mình nên cùng gia hạn vé năm sớm để nhận ưu đãi giảm giá.\nMình rất muốn biết bạn nghĩ sao về việc này. Mong sớm nhận tin từ bạn nhé.\nBảo trọng nhé,\nKato"
            }
      ]
    },
    "email2": {
      "title": "Email 2: Gửi Quản lý CLB Thể hình",
      "instruction": "Write an email to the club manager (about 120–150 words). Give your perspective on the fee change and offer 3 constructive suggestions to ensure member satisfaction.",
      "instructionVi": "Viết email cho quản lý CLB (khoảng 120–150 từ). Nêu quan điểm về việc thay đổi phí và đưa ra 3 đề xuất mang tính xây dựng nhằm đảm bảo sự hài lòng của hội viên.",
      "wordTarget": "120 - 150 từ (chuẩn 120 - 165 từ)",
      "minWords": 120,
      "maxWords": 165,
      "template": "Dear Club Manager,\nMy name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my thoughts and offer several practical suggestions regarding [vấn đề: the proposed 15% fee increase and equipment upgrade]. I think [quan điểm: this is an important issue].\nTo help [mục tiêu: maintain member satisfaction and ensure high retention], I would like to make a few suggestions. First, we should [đề xuất 1: prioritize modern cardio machines and multi-functional weight racks]. Second, it would be better to [đề xuất 2: offer loyalty discounts for existing members before applying the new rate]. Finally, we could [đề xuất 3: introduce complimentary weekend yoga or group fitness classes]. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Đề xuất 1: [đề xuất thứ nhất] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "the club should prioritize modern cardio machines and replace outdated treadmills first",
                              "vi": "CLB nên ưu tiên nâng cấp máy cardio hiện đại và thay thế máy chạy bộ đã cũ trước"
                        },
                        {
                              "en": "we should conduct a member survey to determine which workout equipment needs urgent replacement",
                              "vi": "chúng ta nên khảo sát hội viên để xem thiết bị tập luyện nào cần thay thế gấp nhất"
                        }
                  ]
            },
            {
                  "name": "2. Đề xuất 2: [đề xuất thứ hai] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "it would be highly beneficial to offer a 10% loyalty discount for existing long-term members",
                              "vi": "sẽ rất có lợi nếu dành mức chiết khấu tri ân 10% cho các hội viên lâu năm"
                        },
                        {
                              "en": "the management should implement a gradual fee transition instead of an abrupt increase",
                              "vi": "ban quản lý nên áp dụng lộ trình tăng phí từng bước thay vì tăng đột ngột"
                        }
                  ]
            },
            {
                  "name": "3. Đề xuất 3: [đề xuất thứ ba] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we could introduce complimentary weekend yoga and spinning classes to add value to our memberships",
                              "vi": "chúng ta có thể bổ sung các lớp yoga và đạp xe nhóm miễn phí cuối tuần để tăng giá trị thẻ tập"
                        },
                        {
                              "en": "the club could provide free monthly body composition assessments with certified trainers",
                              "vi": "CLB có thể đo chỉ số thể hình miễn phí hàng tháng với huấn luyện viên chuyên nghiệp"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 191,
                  "en": "Dear Club Manager,\nMy name is Kato, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my thoughts and offer several practical suggestions regarding the proposed fee adjustment and facility renovation. I think this is an important issue.\nTo help maintain member satisfaction and ensure high retention, I would like to make a few suggestions. First, we should prioritize replacing outdated cardio equipment with smart treadmills and rowing machines. Second, it would be better to provide existing members with a special loyalty discount before applying the new pricing. Finally, we could organize complimentary weekend yoga and spinning classes to add value to our memberships. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\nKato",
                  "vi": "Kính gửi Quản lý Câu lạc bộ,\nTên tôi là Kato, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong suốt thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự rèn luyện thể chất của bản thân rất nhiều.\nTôi viết thư này nhằm phản hồi thông báo của câu lạc bộ để chia sẻ góc nhìn và đề xuất một số giải pháp thực tế liên quan đến việc điều chỉnh học phí và nâng cấp cơ sở vật chất. Tôi cho rằng đây là một vấn đề rất đáng quan tâm.\nĐể duy trì sự hài lòng của hội viên và giữ chân khách hàng gắn bó, tôi xin phép đưa ra một vài kiến nghị. Thứ nhất, chúng ta nên ưu tiên thay thế các thiết bị cardio đã cũ bằng máy chạy bộ thông minh và máy chèo thuyền. Thứ hai, câu lạc bộ nên dành mức giá ưu đãi tri ân cho các thành viên hiện tại trước khi áp dụng biểu phí mới. Cuối cùng, chúng ta có thể bổ sung các lớp yoga và đạp xe nhóm miễn phí vào cuối tuần để gia tăng giá trị thẻ tập. Nhìn chung, tôi tin rằng những giải pháp này sẽ tạo nên sự thay đổi tích cực và giúp câu lạc bộ hoàn thành mục tiêu.\nCảm ơn bạn đã dành thời gian xem xét thư. Tôi rất hy vọng các đóng góp này sẽ được cân nhắc và mong sớm nhận được phản hồi.\nTrân trọng,\nKato"
            }
      ]
    }
  },
  "Art club": {
    "title": "Art club (Artist Talk Show)",
    "badge": "Đề ôn tập Part 04 (Đề 1)",
    "notice": "Dear all members,\nThe Art Club is organizing a talk to the public to attract more attention. We are going to invite an artist to give a talk to members. As a member of our club, could you give us an artist to join our talk and what topic should they share to gain more attention. We would like to have more both young and elderly members.",
    "noticeVi": "Kính gửi toàn thể thành viên,\nCâu lạc bộ Nghệ thuật đang tổ chức một buổi nói chuyện trước công chúng để thu hút nhiều sự chú ý hơn. Chúng tôi dự định mời một nghệ sĩ đến chia sẻ với các thành viên. Là một thành viên câu lạc bộ, bạn có thể gợi ý một nghệ sĩ tham gia và chủ đề họ nên chia sẻ để thu hút đông đảo sự quan tâm không? Chúng tôi rất muốn thu hút cả hội viên trẻ lẫn người lớn tuổi.",
    "promptAnalysis": {
      "topic": "Mời nghệ sĩ diễn giả và lựa chọn chủ đề buổi nói chuyện để thu hút cả giới trẻ và người lớn tuổi",
      "task1": "Viết email ngắn cho bạn (~50 từ): Chia sẻ cảm xúc hào hứng, gợi ý một họa sĩ nổi tiếng và chủ đề nghệ thuật thú vị, rủ bạn cùng đi tham dự",
      "task2": "Viết email cho Chủ tịch CLB (120-150 từ): Bày tỏ sự ủng hộ và đưa ra 3 đề xuất cụ thể (chọn nghệ sĩ có phong cách truyền cảm hứng, chủ đề kết nối truyền thống và hiện đại, tổ chức hoạt động trải nghiệm vẽ thực tế)"
    },
    "email1": {
      "title": "Email 1: Gửi bạn bè (Informal)",
      "instruction": "TASK 01: Write a short email to your friend (about 50 words). Tell your friend your feelings about this and what you plan to do.",
      "instructionVi": "TASK 01: Viết một email ngắn cho bạn của bạn (khoảng 50 từ). Cho bạn biết cảm xúc của bạn về việc này và bạn dự định sẽ làm gì.",
      "wordTarget": "Khoảng 50 từ (45 - 60 từ)",
      "minWords": 45,
      "maxWords": 65,
      "template": "Dear [Tên bạn],\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that our Art Club is organizing a public talk with a guest artist. I was quite excited when I found out about it. Personally, I think we should invite painter Minh to talk about watercolor painting because his art appeals to all ages. Moreover, let's attend the talk together next weekend.\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Bày tỏ Cảm xúc (Emotions)",
                  "items": [
                        {
                              "en": "quite excited",
                              "vi": "khá hào hứng"
                        },
                        {
                              "en": "absolutely thrilled",
                              "vi": "cực kỳ phấn khích"
                        },
                        {
                              "en": "truly delighted",
                              "vi": "thực sự rất vui mừng"
                        }
                  ]
            },
            {
                  "name": "2. [ý kiến & lý do] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "inviting a professional artist is wonderful because it will inspire our creative passion",
                              "vi": "mời họa sĩ chuyên nghiệp là rất tuyệt vì sẽ truyền cảm hứng sáng tạo cho chúng mình"
                        },
                        {
                              "en": "this public talk is very practical because we can learn real-world oil painting techniques",
                              "vi": "buổi nói chuyện rất thực tế vì chúng mình có thể học kỹ thuật vẽ sơn dầu thực tế"
                        }
                  ]
            },
            {
                  "name": "3. [phát triển thêm ý] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we should register early so we can secure front-row seats",
                              "vi": "chúng mình nên đăng ký sớm để giữ được vị trí ở hàng ghế đầu"
                        },
                        {
                              "en": "we can prepare a sketchbook to join the hands-on drawing session",
                              "vi": "chúng mình có thể mang sổ phác thảo để tham gia vẽ trực tiếp"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 89,
                  "en": "Dear Kim,\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that our Art Club is organizing a public talk with a guest artist. I was quite excited when I found out about it. Personally, I think we should invite painter Minh to discuss watercolor landscapes because his work appeals to both young and elderly people. Moreover, we should reserve our seats together early.\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\nKato",
                  "vi": "Chào Kim,\nDạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.\nMình nghĩ bạn sẽ thích nghe rằng Câu lạc bộ Nghệ thuật của chúng ta đang tổ chức một buổi nói chuyện công chúng với nghệ sĩ khách mời. Mình khá hào hứng khi biết tin này. Cá nhân mình nghĩ chúng ta nên mời họa sĩ Minh chia sẻ về tranh phong cảnh màu nước vì các tác phẩm của chú ấy thu hút cả người trẻ lẫn người lớn tuổi. Hơn nữa, chúng mình nên cùng đặt chỗ sớm nhé.\nMình rất muốn biết bạn nghĩ sao. Mong sớm nhận được tin từ bạn.\nBảo trọng nhé,\nKato"
            }
      ]
    },
    "email2": {
      "title": "Email 2: Gửi Chủ tịch CLB Nghệ thuật (Formal)",
      "instruction": "TASK 02: Write an email to the president of the club (about 120-150 words). Tell them your thoughts about this and what you would like to do.",
      "instructionVi": "TASK 02: Viết email cho chủ tịch câu lạc bộ (khoảng 120-150 từ). Trình bày suy nghĩ của bạn về sự kiện này và những đề xuất bạn muốn đóng góp.",
      "wordTarget": "120 - 150 từ (chuẩn 120 - 165 từ)",
      "minWords": 120,
      "maxWords": 165,
      "template": "Dear Club President,\nMy name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my thoughts and offer several practical suggestions regarding the public talk and guest artist invitation. I think this is a great idea.\nTo help attract both young and elderly members to the talk, I would like to make a few suggestions. First, we should invite a renowned local artist who specializes in blending traditional techniques with contemporary styles. Second, it would be better to focus the discussion on \"Art for Everyday Wellbeing\", which resonates across all generations. Finally, we could set up a 30-minute hands-on sketching session so attendees can practice alongside the speaker. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Đề xuất 1: [đề xuất thứ nhất] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we should invite an acclaimed local painter who specializes in contemporary watercolor art",
                              "vi": "chúng ta nên mời họa sĩ địa phương nổi tiếng chuyên về tranh màu nước đương đại"
                        },
                        {
                              "en": "the club should invite a versatile artist who can bridge classical and modern painting styles",
                              "vi": "CLB nên mời nghệ sĩ có khả năng kết nối phong cách hội họa cổ điển và hiện đại"
                        }
                  ]
            },
            {
                  "name": "2. Đề xuất 2: [đề xuất thứ hai] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "the presentation should focus on practical painting methods and daily artistic wellbeing",
                              "vi": "bài nói chuyện nên tập trung vào phương pháp vẽ thực hành và nghệ thuật thư giãn hàng ngày"
                        },
                        {
                              "en": "it would be ideal to explore how beginner painters can discover their unique artistic voices",
                              "vi": "sẽ rất lý tưởng nếu chia sẻ cách người mới bắt đầu có thể tìm ra phong cách hội họa riêng"
                        }
                  ]
            },
            {
                  "name": "3. Đề xuất 3: [đề xuất thứ ba] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we could dedicate the final 45 minutes to a hands-on live sketching workshop",
                              "vi": "chúng ta có thể dành 45 phút cuối cho buổi thực hành phác thảo trực tiếp"
                        },
                        {
                              "en": "the club could hold a mini exhibition displaying attendees' artwork right after the talk",
                              "vi": "CLB có thể tổ chức triển lãm nhỏ trưng bày tranh của người tham dự ngay sau sự kiện"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 200,
                  "en": "Dear Club President,\nMy name is Kato, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my thoughts and offer several practical suggestions regarding the public talk and guest artist invitation. I think this is a great idea.\nTo help attract both young and elderly participants, I would like to make a few suggestions. First, we should invite a renowned local painter who skillfully combines traditional folk motifs with contemporary art. Second, it would be better to choose the topic \"Art as Therapy for Daily Stress\", which appeals widely to students and retirees alike. Finally, we could include an interactive live drawing demonstration where attendees can create a small painting to take home. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\nKato",
                  "vi": "Kính gửi Chủ tịch Câu lạc bộ,\nTên tôi là Kato, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.\nTôi viết email này để hồi đáp email của bạn nhằm chia sẻ suy nghĩ và đưa ra một vài đề xuất thực tế liên quan đến buổi nói chuyện trước công chúng và việc mời nghệ sĩ khách mời. Tôi nghĩ đây là một ý tưởng tuyệt vời.\nĐể giúp thu hút cả người tham gia trẻ tuổi lẫn người lớn tuổi, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, chúng ta nên mời một họa sĩ địa phương nổi tiếng, người có sở trường kết hợp khéo léo họa tiết dân gian truyền thống với nghệ thuật đương đại. Thứ hai, sẽ tốt hơn nếu lựa chọn chủ đề \"Nghệ thuật như liệu pháp giải tỏa căng thẳng hàng ngày\", vốn thu hút đông đảo từ học sinh sinh viên đến người nghỉ hưu. Cuối cùng, chúng ta có thể bổ sung buổi hướng dẫn vẽ trực tiếp để người tham dự có thể tự tay sáng tạo một bức tranh nhỏ mang về. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo ra sự khác biệt tích cực và giúp câu lạc bộ đạt được mục tiêu của mình.\nCảm ơn bạn đã dành thời gian xem xét các đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.\nTrân trọng,\nKato"
            }
      ]
    }
  },
  "Food club": {
    "title": "Food club (Volunteer Guest Speaker)",
    "badge": "Đề ôn tập Part 04 (Đề 2)",
    "notice": "Dear members,\nThe club needs volunteers to be guest speakers for the talk show with a famous chef. Please suggest your desire to be a speaker and what topic will you talk about?",
    "noticeVi": "Kính gửi các thành viên,\nCâu lạc bộ đang cần các tình nguyện viên làm diễn giả khách mời cho buổi talk show cùng một đầu bếp nổi tiếng. Vui lòng cho biết nguyện vọng làm diễn giả của bạn và bạn sẽ chia sẻ về chủ đề gì?",
    "promptAnalysis": {
      "topic": "Tình nguyện đăng ký làm diễn giả khách mời trong buổi tọa đàm cùng đầu bếp nổi tiếng",
      "task1": "Viết email ngắn cho bạn (~50 từ): Kể về ý định đăng ký làm diễn giả, chủ đề món ăn gia đình lành mạnh và rủ bạn cùng tham gia chuẩn bị",
      "task2": "Viết email cho Quản lý CLB (120-150 từ): Chính thức đăng ký làm diễn giả khách mời và đề xuất 3 ý tưởng cụ thể (chủ đề Bữa ăn gia đình dinh dưỡng tiết kiệm, phần trình diễn nấu ăn trực tiếp, hoạt động nếm thử món ăn cùng đầu bếp)"
    },
    "email1": {
      "title": "Email 1: Gửi bạn bè (Informal)",
      "instruction": "TASK 01: Write a short email to your friend (about 50 words). Tell your friend what suggestions you will make and why.",
      "instructionVi": "TASK 01: Viết email ngắn cho bạn của bạn (khoảng 50 từ). Cho bạn ấy biết bạn sẽ đưa ra những gợi ý gì và lý do tại sao.",
      "wordTarget": "Khoảng 50 từ (45 - 60 từ)",
      "minWords": 45,
      "maxWords": 65,
      "template": "Dear [Tên bạn],\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that our Food Club needs volunteer speakers for a talk show with a famous chef. I was quite excited when I found out about it. Personally, I think I will volunteer to talk about quick healthy home-cooked meals because students need practical nutrition tips. Moreover, could you help me prepare my presentation slides?\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Bày tỏ Cảm xúc (Emotions)",
                  "items": [
                        {
                              "en": "quite excited",
                              "vi": "khá hào hứng"
                        },
                        {
                              "en": "absolutely thrilled",
                              "vi": "cực kỳ phấn khích"
                        },
                        {
                              "en": "eager to participate",
                              "vi": "rất hào hứng muốn tham gia ngay"
                        }
                  ]
            },
            {
                  "name": "2. [ý kiến & lý do] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "this is an incredible opportunity because we can share our favorite culinary recipes",
                              "vi": "đây là cơ hội tuyệt vời vì chúng mình có thể chia sẻ công thức nấu ăn yêu thích"
                        },
                        {
                              "en": "sharing tips on healthy meal prep on a budget is ideal because it helps all students",
                              "vi": "chia sẻ cách nấu ăn đủ chất tiết kiệm rất lý tưởng vì giúp ích cho sinh viên"
                        }
                  ]
            },
            {
                  "name": "3. [phát triển thêm ý] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we could team up and register as volunteer speakers together",
                              "vi": "chúng mình có thể lập nhóm và cùng đăng ký làm diễn giả tình nguyện"
                        },
                        {
                              "en": "we can prepare some homemade pastries to treat other attendees",
                              "vi": "chúng mình có thể làm một vài món bánh tự nướng để mời mọi người thưởng thức"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 92,
                  "en": "Dear Kim,\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that our Food Club is seeking volunteer speakers for an upcoming talk show with a celebrity chef. I was quite excited when I found out about it. Personally, I think I will volunteer to share practical recipes for healthy weekday meals because so many members struggle with balanced diets. Moreover, let's practice cooking together this Sunday!\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\nKato",
                  "vi": "Chào Kim,\nDạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.\nMình nghĩ bạn sẽ thích nghe tin CLB Ẩm thực đang tìm tình nguyện viên làm diễn giả cho buổi tọa đàm sắp tới cùng đầu bếp nổi tiếng. Mình khá hào hứng khi biết tin này. Cá nhân mình nghĩ mình sẽ đăng ký chia sẻ công thức các món ăn thường ngày lành mạnh vì rất nhiều hội viên đang gặp khó khăn trong việc ăn uống cân bằng. Hơn nữa, chủ nhật này chúng mình cùng nhau tập nấu thử nhé!\nMình rất muốn biết bạn nghĩ sao. Mong sớm nhận tin từ bạn.\nBảo trọng nhé,\nKato"
            }
      ]
    },
    "email2": {
      "title": "Email 2: Gửi Quản lý CLB Ẩm thực (Formal)",
      "instruction": "TASK 02: Write an email to the president of the club (about 120–150 words). Tell the manager what suggestions you will make and why.",
      "instructionVi": "TASK 02: Viết email cho chủ tịch/quản lý CLB (khoảng 120–150 từ). Cho người quản lý biết bạn sẽ đưa ra những gợi ý gì và lý do tại sao.",
      "wordTarget": "120 - 150 từ (chuẩn 120 - 165 từ)",
      "minWords": 120,
      "maxWords": 165,
      "template": "Dear Club Manager,\nMy name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to express my enthusiasm to volunteer as a guest speaker alongside the guest chef. I think this is a great idea.\nTo help make the talk show informative and engaging, I would like to make a few suggestions. First, I would love to present on \"Nutritious Family Meals on a Modest Budget\", which directly addresses our members' everyday needs. Second, it would be better to include a short 15-minute live cooking challenge where the chef and I prepare a dish using identical seasonal ingredients. Finally, we could organize a small tasting corner for the audience to evaluate the dishes. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Đề xuất 1: [đề xuất thứ nhất] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "I would like to volunteer as a speaker presenting 'Nutritious Family Meals on a Modest Budget'",
                              "vi": "tôi xin tình nguyện làm diễn giả chia sẻ chủ đề 'Bữa ăn gia đình đủ chất với chi phí vừa phải'"
                        },
                        {
                              "en": "the presentations should center on quick and wholesome recipes suitable for busy working people",
                              "vi": "các bài nói nên tập trung vào công thức nấu nhanh và lành mạnh cho người bận rộn"
                        }
                  ]
            },
            {
                  "name": "2. Đề xuất 2: [đề xuất thứ hai] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we should include a 30-minute live cooking demonstration by the celebrity chef",
                              "vi": "chúng ta nên có phần nấu ăn biểu diễn trực tiếp 30 phút từ đầu bếp nổi tiếng"
                        },
                        {
                              "en": "it would be fantastic to invite several audience members on stage to cook alongside the chef",
                              "vi": "sẽ rất tuyệt nếu mời một vài hội viên lên sân khấu cùng nấu ăn với đầu bếp"
                        }
                  ]
            },
            {
                  "name": "3. Đề xuất 3: [đề xuất thứ ba] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we could organize a tasting corner where attendees can sample freshly cooked dishes",
                              "vi": "chúng ta có thể tổ chức góc nếm thử để mọi người thưởng thức món ăn vừa chế biến"
                        },
                        {
                              "en": "the club could distribute printed recipe cards and cooking vouchers to all participants",
                              "vi": "CLB có thể phát tờ công thức in màu và phiếu giảm giá nấu ăn cho người tham gia"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 203,
                  "en": "Dear Club Manager,\nMy name is Kato, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to express my strong desire to volunteer as a guest speaker for the talk show with the famous chef. I think this is a great idea.\nTo help make the event both inspiring and practical, I would like to make a few suggestions. First, I propose delivering a presentation entitled \"Healthy Weekday Dinners on a Student Budget\", providing accessible culinary solutions for busy individuals. Second, it would be better to arrange a collaborative cooking demonstration where the guest chef and I prepare a dish together while sharing culinary tips. Finally, we could offer recipe cards and a tasting session for all attendees. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\nKato",
                  "vi": "Kính gửi Quản lý Câu lạc bộ,\nTên tôi là Kato, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.\nTôi viết email này để bày tỏ mong muốn được làm diễn giả khách mời cho buổi talk show cùng vị đầu bếp nổi tiếng. Tôi nghĩ đây là một ý tưởng tuyệt vời.\nĐể giúp sự kiện vừa truyền cảm hứng vừa mang tính ứng dụng thực tế, tôi xin đưa ra một số đề xuất. Thứ nhất, tôi đề xuất chia sẻ bài thuyết trình có tựa đề \"Bữa tối ngày thường lành mạnh với ngân sách sinh viên\", mang đến những giải pháp nấu nướng dễ dàng cho người bận rộn. Thứ hai, sẽ tốt hơn nếu tổ chức một màn nấu ăn kết hợp trực tiếp, nơi đầu bếp khách mời và tôi cùng nhau chuẩn bị món ăn và chia sẻ mẹo làm bếp. Cuối cùng, chúng ta có thể phát thẻ công thức nấu ăn và tổ chức một buổi nếm thử cho tất cả người tham dự. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ hoàn thành mục tiêu.\nCảm ơn bạn đã dành thời gian xem xét các đề xuất. Tôi rất mong nhận được phản hồi từ bạn.\nTrân trọng,\nKato"
            }
      ]
    }
  },
  "Social club": {
    "title": "Social club (Monthly Meetings for All Ages)",
    "badge": "Đề ôn tập Part 04 (Đề 3)",
    "notice": "Dear members,\nWe would like to organize some monthly face to face meetings. We would like your suggestions about when and where we could meet. It suits both young and older people. Please send us your suggestions and your reasons.",
    "noticeVi": "Kính gửi các thành viên,\nChúng tôi muốn tổ chức các buổi gặp mặt trực tiếp hàng tháng. Chúng tôi rất mong nhận được gợi ý của bạn về thời gian và địa điểm gặp gỡ phù hợp cho cả người trẻ và người lớn tuổi. Xin vui lòng gửi gợi ý và lý do của bạn.",
    "promptAnalysis": {
      "topic": "Đề xuất thời gian và địa điểm tổ chức các buổi gặp mặt trực tiếp hàng tháng phù hợp cho cả người trẻ lẫn người lớn tuổi",
      "task1": "Viết email ngắn cho bạn (~50 từ): Chia sẻ cảm xúc vui vẻ về kế hoạch gặp mặt trực tiếp, gợi ý buổi sáng thứ Bảy tại quán cà phê sân vườn rộng rãi",
      "task2": "Viết email cho Chủ tịch CLB (120-150 từ): Nêu quan điểm ủng hộ và đề xuất 3 giải pháp thực tế (thời gian sáng thứ Bảy, địa điểm trung tâm văn hóa cộng đồng có sân vườn, hoạt động giao lưu trà đàm kết nối hai thế hệ)"
    },
    "email1": {
      "title": "Email 1: Gửi bạn bè (Informal)",
      "instruction": "TASK 01: Write a short email to your friend (about 50 words).",
      "instructionVi": "TASK 01: Viết một email ngắn cho bạn của bạn (khoảng 50 từ).",
      "wordTarget": "Khoảng 50 từ (45 - 60 từ)",
      "minWords": 45,
      "maxWords": 65,
      "template": "Dear [Tên bạn],\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that our Social Club is planning monthly face-to-face meetings for all ages. I was quite excited when I found out about it. Personally, I think Saturday mornings at a spacious garden café would be ideal because it is peaceful and accessible. Moreover, let's attend the first meetup together!\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Bày tỏ Cảm xúc (Emotions)",
                  "items": [
                        {
                              "en": "quite excited",
                              "vi": "khá hào hứng"
                        },
                        {
                              "en": "absolutely thrilled",
                              "vi": "cực kỳ phấn khích"
                        },
                        {
                              "en": "delighted",
                              "vi": "vui mừng"
                        }
                  ]
            },
            {
                  "name": "2. [ý kiến & lý do] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "holding gatherings on Saturday mornings is ideal because members are free and relaxed",
                              "vi": "gặp mặt sáng thứ Bảy rất lý tưởng vì hội viên rảnh rỗi và tinh thần thoải mái"
                        },
                        {
                              "en": "meeting in person is much better than chatting online because it builds genuine friendships",
                              "vi": "gặp trực tiếp tốt hơn nhắn tin online nhiều vì tạo dựng tình bạn gắn kết thực sự"
                        }
                  ]
            },
            {
                  "name": "3. [phát triển thêm ý] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we can suggest a cozy garden cafe near the city center with convenient parking",
                              "vi": "chúng mình có thể đề xuất một quán cà phê sân vườn ấm cúng gần trung tâm có bãi đỗ xe"
                        },
                        {
                              "en": "we should bring some popular board games like Uno to break the ice quickly",
                              "vi": "chúng mình nên mang theo vài trò chơi như Uno để làm quen gắn kết nhanh chóng"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 93,
                  "en": "Dear Kim,\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that our Social Club is going to organize monthly in-person gatherings. I was quite excited when I found out about it. Personally, I think Saturday morning at the city central community hall is the best choice because it is accessible for both young students and older members. Moreover, we could organize light board games during the break.\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\nKato",
                  "vi": "Chào Hương,\nDạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.\nMình nghĩ bạn sẽ thích nghe rằng CLB Xã hội của chúng ta sắp tổ chức các buổi gặp mặt trực tiếp hàng tháng. Mình khá hào hứng khi biết tin này. Cá nhân mình thấy sáng thứ Bảy tại nhà văn hóa trung tâm thành phố là lựa chọn tốt nhất vì rất thuận tiện đi lại cho cả sinh viên trẻ lẫn các cô chú lớn tuổi. Hơn nữa, chúng mình có thể tổ chức chơi board game nhẹ nhàng trong giờ giải lao.\nMình rất muốn biết bạn nghĩ gì về điều này. Hy vọng sớm nhận được hồi âm từ bạn.\nBảo trọng nhé,\nKato"
            }
      ]
    },
    "email2": {
      "title": "Email 2: Gửi Chủ tịch CLB Xã hội (Formal)",
      "instruction": "TASK 02: Write an email to the president of the club (about 120–150 words).",
      "instructionVi": "TASK 02: Viết email cho chủ tịch câu lạc bộ (khoảng 120–150 từ).",
      "wordTarget": "120 - 150 từ (chuẩn 120 - 165 từ)",
      "minWords": 120,
      "maxWords": 165,
      "template": "Dear Club President,\nMy name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my thoughts and offer several practical suggestions regarding the monthly face-to-face meetings. I think this is a great idea.\nTo help make these meetings enjoyable and inclusive for both young and older members, I would like to make a few suggestions. First, we should schedule the gatherings on Saturday mornings from 9:00 AM to 11:00 AM, avoiding late hours. Second, it would be better to book the local community cultural center, as it features comfortable seating, wheelchair ramps, and spacious gardens. Finally, we could organize an intergenerational storytelling circle accompanied by tea and light refreshments. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Đề xuất 1: [đề xuất thứ nhất] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we should schedule gatherings on Saturday mornings from 9:00 AM to 11:30 AM",
                              "vi": "chúng ta nên tổ chức gặp mặt vào sáng thứ Bảy từ 9:00 đến 11:30 sáng"
                        },
                        {
                              "en": "the club should avoid weekday evenings because many working members face heavy traffic",
                              "vi": "CLB nên tránh tối ngày thường vì nhiều hội viên đi làm hay gặp kẹt xe"
                        }
                  ]
            },
            {
                  "name": "2. Đề xuất 2: [đề xuất thứ hai] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "it would be best to choose a community cultural hall with ample parking and wheelchair access",
                              "vi": "tốt nhất nên chọn nhà văn hóa cộng đồng có bãi đỗ xe rộng và lối đi cho xe lăn"
                        },
                        {
                              "en": "we should select a quiet cafe with outdoor garden seating to facilitate friendly conversations",
                              "vi": "chúng ta nên chọn quán cà phê có sân vườn yên tĩnh để dễ trò chuyện kết nối"
                        }
                  ]
            },
            {
                  "name": "3. Đề xuất 3: [đề xuất thứ ba] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we could host intergenerational storytelling circles where seniors and youth share life experiences",
                              "vi": "chúng ta có thể tổ chức vòng tròn kể chuyện để người cao tuổi và giới trẻ chia sẻ trải nghiệm"
                        },
                        {
                              "en": "the club could arrange structured icebreaker games and tea tastings to help newcomers integrate",
                              "vi": "CLB có thể chuẩn bị trò chơi khởi động và tiệc trà để người mới dễ dàng hòa nhập"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 206,
                  "en": "Dear Club President,\nMy name is Kato, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my thoughts and offer several practical suggestions regarding our monthly face-to-face meetings. I think this is a great idea.\nTo ensure the meetings are convenient and comfortable for all age groups, I would like to make a few suggestions. First, we should hold our meetings on Saturday mornings from 9:00 AM to 11:00 AM, allowing attendees to spend the rest of the weekend with family. Second, it would be better to select the municipal cultural house because it provides ample parking, ground-floor accessibility, and a serene atmosphere. Finally, we could organize a tea-break session combined with fun ice-breaking quizzes to stimulate lively discussions. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\nKato",
                  "vi": "Kính gửi Chủ tịch Câu lạc bộ,\nTên tôi là Kato, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.\nTôi viết email này để hồi đáp email của bạn nhằm chia sẻ suy nghĩ và đưa ra một vài đề xuất thực tế liên quan đến các buổi gặp mặt trực tiếp hàng tháng. Tôi nghĩ đây là một ý tưởng tuyệt vời.\nĐể đảm bảo các buổi gặp mặt thuận tiện và thoải mái cho mọi lứa tuổi, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, chúng ta nên tổ chức sinh hoạt vào sáng thứ Bảy từ 9:00 đến 11:00, giúp người tham dự có thể dành thời gian còn lại của cuối tuần cho gia đình. Thứ hai, sẽ tốt hơn nếu chọn nhà văn hóa thành phố vì nơi đây có bãi đỗ xe rộng rãi, lối đi bằng phẳng ở tầng trệt và không gian thanh tĩnh. Cuối cùng, chúng ta có thể tổ chức tiệc trà kết hợp các câu đố vui khởi động để khuấy động không khí giao lưu sôi nổi. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ hoàn thành mục tiêu.\nCảm ơn bạn đã dành thời gian xem xét các đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.\nTrân trọng,\nKato"
            }
      ]
    }
  },
  "Social club 2": {
    "title": "Social club 2 (Indoor vs Outdoor Activities)",
    "badge": "Luyện đề Part 04 (Đề 9)",
    "notice": "Dear members,\nI want to inform you that we will organize some face-to-face meetings for the club members next month. Therefore, we would like to receive your recommendations on which place will be appropriate for the meetings, provided that it will be suitable for both children and adults.\nSome members suggest organizing both indoor activities and outdoor activities to attract many people. Other members believe it is good to focus on one thing. Please send us your recommendations and explain why.",
    "noticeVi": "Kính gửi các thành viên,\nTôi muốn thông báo rằng chúng ta sẽ tổ chức các buổi gặp mặt trực tiếp cho hội viên vào tháng tới. Vì vậy, chúng tôi rất mong nhận được đề xuất của bạn về địa điểm thích hợp, đảm bảo phù hợp cho cả trẻ em và người lớn.\nMột số thành viên đề xuất tổ chức kết hợp cả hoạt động trong nhà và ngoài trời để thu hút đông đảo mọi người. Những thành viên khác lại cho rằng nên tập trung vào một thứ duy nhất. Xin hãy gửi đề xuất và giải thích lý do của bạn.",
    "promptAnalysis": {
      "topic": "Đề xuất địa điểm họp mặt phù hợp cho cả trẻ em và người lớn, tranh luận giữa việc kết hợp trong nhà - ngoài trời hay chỉ tập trung vào một thứ",
      "task1": "Viết email ngắn cho bạn (~50 từ): Bày tỏ sự ủng hộ đối với mô hình kết hợp cả trong nhà lẫn ngoài trời tại công viên sinh thái có nhà sinh hoạt chung",
      "task2": "Viết email cho Quản lý CLB (120-150 từ): Chọn phương án kết hợp cả hai hình thức và đề xuất 3 giải pháp thực tế (địa điểm công viên có hội trường có mái che, phân chia khu vui chơi ngoài trời cho trẻ em và tọa đàm trong nhà cho người lớn, kế hoạch ứng phó thời tiết)"
    },
    "email1": {
      "title": "Email 1: Gửi bạn bè (Informal)",
      "instruction": "Email 1: Email to your friend (about 50 words).",
      "instructionVi": "Email 1: Gửi email cho bạn của bạn (khoảng 50 từ).",
      "wordTarget": "Khoảng 50 từ (45 - 60 từ)",
      "minWords": 45,
      "maxWords": 65,
      "template": "Dear [Tên bạn],\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that our Social Club is planning face-to-face meetings for both kids and adults next month. I was quite excited when I found out about it. Personally, I think combining indoor and outdoor activities at an eco-park is the best choice because children can run around while adults chat comfortably inside. Moreover, let's bring our families along!\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Bày tỏ Cảm xúc (Emotions)",
                  "items": [
                        {
                              "en": "quite excited",
                              "vi": "khá hào hứng"
                        },
                        {
                              "en": "absolutely thrilled",
                              "vi": "cực kỳ phấn khích"
                        }
                  ]
            },
            {
                  "name": "2. [ý kiến & lý do] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "inviting both adults and children is wonderful because entire families can bond together",
                              "vi": "mời cả người lớn và trẻ em rất tuyệt vì cả gia đình có thể cùng nhau gắn kết"
                        },
                        {
                              "en": "an outdoor venue is the best choice because children need spacious green areas to play",
                              "vi": "địa điểm ngoài trời là tốt nhất vì các bé cần không gian xanh rộng rãi để vui chơi"
                        }
                  ]
            },
            {
                  "name": "3. [phát triển thêm ý] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we could organize a family picnic with outdoor relay games in the central park",
                              "vi": "chúng mình có thể tổ chức buổi dã ngoại gia đình với trò chơi tiếp sức ở công viên"
                        },
                        {
                              "en": "we should bring our younger siblings along so they can socialize and play together",
                              "vi": "chúng mình nên rủ các em nhỏ đi cùng để chúng cùng làm quen và vui chơi"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 93,
                  "en": "Dear Kim,\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that our Social Club is organizing in-person gatherings for adults and kids next month. I was quite excited when I found out about it. Personally, I think combining indoor and outdoor activities at the municipal park is ideal because energetic children can play sports outside while adults relax indoors. Moreover, we could organize a fun potluck picnic.\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\nKato",
                  "vi": "Chào Kim,\nDạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.\nMình nghĩ bạn sẽ thích nghe rằng CLB Xã hội của chúng ta đang tổ chức các buổi họp mặt trực tiếp cho cả người lớn và trẻ em vào tháng tới. Mình khá hào hứng khi biết tin này. Cá nhân mình thấy việc kết hợp cả hoạt động trong nhà và ngoài trời tại công viên thành phố là lý tưởng nhất vì trẻ em hiếu động có thể chơi thể thao ngoài trời trong khi người lớn thư giãn trò chuyện trong nhà. Hơn nữa, chúng mình có thể tổ chức một buổi dã ngoại góp đồ ăn chung thật vui.\nMình rất muốn biết bạn nghĩ gì. Mong sớm nhận được tin từ bạn.\nBảo trọng nhé,\nKato"
            }
      ]
    },
    "email2": {
      "title": "Email 2: Gửi Quản lý CLB Xã hội (Formal)",
      "instruction": "Email 2: Email to the club manager (about 120-150 words).",
      "instructionVi": "Email 2: Gửi email cho quản lý câu lạc bộ (khoảng 120-150 từ).",
      "wordTarget": "120 - 150 từ (chuẩn 120 - 165 từ)",
      "minWords": 120,
      "maxWords": 165,
      "template": "Dear Club Manager,\nMy name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my thoughts and offer several practical suggestions regarding our upcoming face-to-face gatherings. I believe that organizing both indoor and outdoor activities would be a much better choice.\nTo help make these events successful and inclusive for both children and adults, I would like to make a few suggestions. First, we should reserve a municipal botanical garden pavilion that offers both expansive lawns and a weather-proof indoor hall. Second, it would be better to divide the schedule: outdoor team games and sports for children and youth, alongside indoor discussions and workshops for adults. Finally, we could arrange healthy buffet refreshments and have a contingency plan for unexpected rain. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Đề xuất 1: [đề xuất thứ nhất] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "the club should select a hybrid community park that offers both shaded pavilions and safe lawns",
                              "vi": "CLB nên chọn công viên có cả mái che râm mát lẫn thảm cỏ an toàn cho trẻ em"
                        },
                        {
                              "en": "we should choose a community center adjacent to a public playground for maximum convenience",
                              "vi": "chúng ta nên chọn nhà sinh hoạt cộng đồng liền kề sân chơi để thuận tiện nhất"
                        }
                  ]
            },
            {
                  "name": "2. Đề xuất 2: [đề xuất thứ hai] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "it would be highly beneficial to organize separate activity corners for children while parents converse",
                              "vi": "sẽ rất hữu ích nếu mở các góc hoạt động riêng cho bé trong khi phụ huynh trò chuyện"
                        },
                        {
                              "en": "we ought to designate volunteer supervisors to host drawing contests and treasure hunts for kids",
                              "vi": "chúng ta nên cử tình nguyện viên phụ trách thi vẽ tranh và truy tìm kho báu cho các bé"
                        }
                  ]
            },
            {
                  "name": "3. Đề xuất 3: [đề xuất thứ ba] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we could prepare a comprehensive first-aid kit and establish a sheltered indoor backup plan",
                              "vi": "chúng ta có thể chuẩn bị sẵn hộp y tế và phương án phòng trong nhà dự phòng khi mưa"
                        },
                        {
                              "en": "the club could encourage each family to bring a signature homemade snack for a communal potluck",
                              "vi": "CLB có thể khuyến khích mỗi gia đình mang một món ăn nhẹ để tiệc ngọt thêm phong phú"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 208,
                  "en": "Dear Club Manager,\nMy name is Kato, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my thoughts and offer several practical suggestions regarding our upcoming face-to-face gatherings. I believe that organizing both indoor and outdoor activities would be a much better choice.\nTo ensure the event satisfies participants of all generations, I would like to make a few suggestions. First, we should rent the community center at West Lake Park, which features both large outdoor gardens and an air-conditioned function room. Second, it would be better to run parallel sessions: supervised treasure hunts and games for children outside, while adults enjoy coffee and cultural presentations indoors. Finally, we could conclude the day with a joint group photo and prize ceremony. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\nKato",
                  "vi": "Kính gửi Quản lý Câu lạc bộ,\nTên tôi là Kato, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.\nTôi viết email này để hồi đáp email của bạn nhằm chia sẻ suy nghĩ và đưa ra một vài đề xuất thực tế liên quan đến các buổi gặp mặt trực tiếp sắp tới. Tôi tin rằng việc tổ chức kết hợp cả hoạt động trong nhà và ngoài trời sẽ là một sự lựa chọn tốt hơn nhiều.\nĐể đảm bảo sự kiện làm hài lòng người tham dự ở mọi thế hệ, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, chúng ta nên thuê nhà văn hóa cộng đồng tại công viên Hồ Tây, nơi có cả khu vườn ngoài trời rộng rãi lẫn phòng sinh hoạt có máy lạnh. Thứ hai, sẽ tốt hơn nếu tổ chức các phiên hoạt động song song: trò chơi truy tìm kho báu ngoài trời có người giám sát cho trẻ em, trong khi người lớn thưởng thức cà phê và nghe thuyết trình văn hóa trong nhà. Cuối cùng, chúng ta có thể khép lại ngày hội bằng buổi chụp hình kỷ niệm chung và lễ trao giải. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ đạt được mục tiêu của mình.\nCảm ơn bạn đã dành thời gian xem xét các đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.\nTrân trọng,\nKato"
            }
      ]
    }
  },
  "Beautiful homes club": {
    "title": "Beautiful homes club (Old vs Modern Buildings)",
    "badge": "Đề ôn tập Part 04 (Đề 4)",
    "notice": "Dear member,\nThe cost of maintaining old building is very high and these building take up a lot of space. The government has a proposal that we knock down old buildings and build more modern blocks.",
    "noticeVi": "Kính gửi thành viên,\nChi phí bảo trì các tòa nhà cũ rất cao và các tòa nhà này chiếm rất nhiều diện tích. Chính phủ đang có đề xuất rằng chúng ta nên phá dỡ các tòa nhà cũ và xây dựng thêm các khu nhà cao tầng hiện đại hơn.",
    "promptAnalysis": {
      "topic": "Đề xuất của chính phủ về việc phá dỡ các công trình kiến trúc cũ để xây dựng các tòa nhà chung cư hiện đại",
      "task1": "Viết email ngắn cho bạn (~50 từ): Bày tỏ sự băn khoăn/tiếc nuối nếu các công trình lịch sử bị phá dỡ, chia sẻ quan điểm bảo tồn di sản văn hóa",
      "task2": "Viết email cho Chủ tịch CLB (120-150 từ): Trình bày quan điểm cân bằng và đề xuất 3 giải pháp thực tế (phân loại bảo tồn các công trình có giá trị lịch sử, cải tạo nâng cấp nội thất thay vì phá dỡ hoàn toàn, quy hoạch các tòa nhà hiện đại ở vùng ngoại ô)"
    },
    "email1": {
      "title": "Email 1: Gửi bạn bè (Informal)",
      "instruction": "TASK 01: Write a short email to your friend (about 50 words).",
      "instructionVi": "TASK 01: Viết một email ngắn cho bạn của bạn (khoảng 50 từ).",
      "wordTarget": "Khoảng 50 từ (45 - 60 từ)",
      "minWords": 45,
      "maxWords": 65,
      "template": "Dear [Tên bạn],\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that the government is proposing to demolish historic buildings for modern blocks. I was quite disappointed when I found out about it. Personally, I think old buildings give our city unique soul and cultural heritage that modern concrete blocks cannot replace. Moreover, we should start a petition to preserve them.\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Bày tỏ Cảm xúc (Emotions)",
                  "items": [
                        {
                              "en": "quite shocked and upset",
                              "vi": "khá sốc và bức xúc"
                        },
                        {
                              "en": "deeply concerned",
                              "vi": "vô cùng lo ngại"
                        },
                        {
                              "en": "quite surprised and saddened",
                              "vi": "khá bất ngờ và buồn bã"
                        }
                  ]
            },
            {
                  "name": "2. [ý kiến & lý do] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "these historic buildings hold great cultural value because they represent our architectural identity",
                              "vi": "các công trình này có giá trị văn hóa lớn vì đại diện cho bản sắc kiến trúc thành phố"
                        },
                        {
                              "en": "demolishing our architectural heritage is a tragic mistake because historic charm cannot be rebuilt",
                              "vi": "phá bỏ di sản kiến trúc là sai lầm đáng tiếc vì nét cổ kính không thể xây dựng lại"
                        }
                  ]
            },
            {
                  "name": "3. [phát triển thêm ý] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we should sign the petition to urge the authorities to preserve and renovate them instead",
                              "vi": "chúng mình nên ký vào đơn thỉnh nguyện kêu gọi chính quyền bảo tồn và tu sửa thay vì phá bỏ"
                        },
                        {
                              "en": "we could visit the historic street this weekend to take commemorative photographs",
                              "vi": "chúng mình có thể đến khu phố cổ cuối tuần này để chụp ảnh kỷ niệm"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 82,
                  "en": "Dear Kim,\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that the government plans to knock down ancient buildings to construct modern blocks. I was quite shocked when I found out about it. Personally, I think historic buildings represent our irreplaceable cultural heritage and architectural identity. Moreover, we should renovate them instead of destroying them completely.\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\nKato",
                  "vi": "Chào Kim,\nDạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.\nMình nghĩ bạn sẽ quan tâm khi nghe rằng chính phủ đang lên kế hoạch phá dỡ các tòa nhà cổ để xây dựng các khối nhà hiện đại. Mình khá sốc khi biết tin này. Cá nhân mình thấy các tòa nhà lịch sử đại diện cho di sản văn hóa và bản sắc kiến trúc không thể thay thế của chúng ta. Hơn nữa, chúng ta nên cải tạo chúng thay vì phá hủy hoàn toàn.\nMình rất muốn biết bạn nghĩ gì về điều này. Hy vọng sớm nhận được tin từ bạn.\nBảo trọng nhé,\nKato"
            }
      ]
    },
    "email2": {
      "title": "Email 2: Gửi Chủ tịch CLB Beautiful Homes (Formal)",
      "instruction": "TASK 02: Write an email to the president of the club (about 120–150 words).",
      "instructionVi": "TASK 02: Viết email cho chủ tịch câu lạc bộ (khoảng 120–150 từ).",
      "wordTarget": "120 - 150 từ (chuẩn 120 - 165 từ)",
      "minWords": 120,
      "maxWords": 165,
      "template": "Dear Club President,\nMy name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my perspective regarding the government's proposal to replace old buildings with modern high-rises. I think this is an important issue.\nTo help balance urban development with heritage conservation, I would like to make a few suggestions. First, we should conduct a thorough architectural assessment to preserve buildings with significant historical and artistic value. Second, it would be better to advocate for adaptive reuse, upgrading old interiors with modern energy-efficient amenities while retaining vintage facades. Finally, we could advise the authorities to direct large modern apartment projects toward designated suburban zones. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Đề xuất 1: [đề xuất thứ nhất] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "the club should submit an official petition to evaluate and protect buildings with historic value",
                              "vi": "CLB nên gửi văn bản kiến nghị chính thức để đánh giá và bảo vệ các công trình có giá trị lịch sử"
                        },
                        {
                              "en": "we should consult urban conservation architects before any demolition decisions are finalized",
                              "vi": "chúng ta nên tham vấn các kiến trúc sư bảo tồn đô thị trước khi ra quyết định phá dỡ"
                        }
                  ]
            },
            {
                  "name": "2. Đề xuất 2: [đề xuất thứ hai] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "it would be better to promote adaptive reuse, modernizing interior utilities while preserving historic facades",
                              "vi": "sẽ tốt hơn nếu áp dụng cải tạo thích ứng: hiện đại hóa nội thất nhưng giữ nguyên mặt tiền cổ kính"
                        },
                        {
                              "en": "the city should convert vintage structures into community cultural spaces, museums, or heritage cafes",
                              "vi": "thành phố nên chuyển đổi các tòa nhà cổ thành không gian văn hóa, bảo tàng hoặc quán cà phê"
                        }
                  ]
            },
            {
                  "name": "3. Đề xuất 3: [đề xuất thứ ba] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we could recommend that high-density modern residential blocks be prioritized in newly developing suburban areas",
                              "vi": "chúng ta có thể đề xuất xây chung cư cao tầng tại các khu đô thị mới ven thành phố"
                        },
                        {
                              "en": "the club should organize public photo exhibitions to raise civic awareness regarding architectural preservation",
                              "vi": "CLB nên tổ chức triển lãm ảnh để nâng cao nhận thức cộng đồng về bảo tồn kiến trúc"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 197,
                  "en": "Dear Club President,\nMy name is Kato, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my thoughts and offer several practical suggestions regarding the proposal to demolish older structures for modern housing blocks. I think this is an important issue.\nTo protect our city's architectural legacy while accommodating growth, I would like to make a few suggestions. First, the club should submit an official petition to evaluate and protect buildings that hold distinctive historic value. Second, it would be better to promote adaptive reuse, which modernizes plumbing and insulation while safeguarding historic exterior facades. Finally, we could suggest that high-density residential towers be prioritized in newly developing suburban districts. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\nKato",
                  "vi": "Kính gửi Chủ tịch Câu lạc bộ,\nTên tôi là Kato, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.\nTôi viết email này để chia sẻ suy nghĩ và đưa ra một vài đề xuất thực tế liên quan đến đề xuất phá dỡ các công trình cũ để xây dựng các khu chung cư hiện đại. Tôi nghĩ đây là một vấn đề vô cùng quan trọng.\nĐể bảo vệ di sản kiến trúc của thành phố trong khi vẫn đáp ứng nhu cầu phát triển, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, câu lạc bộ nên gửi một kiến nghị chính thức nhằm đánh giá và bảo vệ các tòa nhà mang giá trị lịch sử đặc sắc. Thứ hai, sẽ tốt hơn nếu đẩy mạnh phương án cải tạo thích ứng, nâng cấp hệ thống đường ống và cách nhiệt bên trong trong khi vẫn giữ gìn nguyên vẹn mặt tiền cổ kính bên ngoài. Cuối cùng, chúng ta có thể đề xuất ưu tiên xây dựng các tòa tháp chung cư mật độ cao tại các khu đô thị mới ven đô. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ hoàn thành mục tiêu.\nCảm ơn bạn đã dành thời gian xem xét đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc và rất mong nhận được phản hồi từ bạn.\nTrân trọng,\nKato"
            }
      ]
    }
  },
  "Living home club": {
    "title": "Living home club (Advice for Young Homebuyers)",
    "badge": "Luyện đề Part 04 (Đề 8)",
    "notice": "Dear members,\nNowadays many youngsters want to have a house or an apartment early in their life, do you have any advice for them? Why?",
    "noticeVi": "Kính gửi các thành viên,\nNgày nay, nhiều người trẻ mong muốn sở hữu một ngôi nhà hoặc căn hộ ngay từ khi còn trẻ, bạn có lời khuyên nào dành cho họ không? Tại sao?",
    "promptAnalysis": {
      "topic": "Lời khuyên và lý do dành cho các bạn trẻ có nguyện vọng sở hữu nhà hoặc căn hộ riêng từ sớm",
      "task1": "Viết email ngắn cho bạn (~50 từ): Chia sẻ lời khuyên thực tế về việc tiết kiệm, tránh vay nợ quá mức và cân nhắc thuê nhà để tích lũy tài chính",
      "task2": "Viết email cho Quản lý CLB (120-150 từ): Nêu quan điểm và đề xuất CLB tổ chức chuỗi hỗ trợ thiết thực (tọa đàm quản lý tài chính cá nhân, hướng dẫn thủ tục vay mua nhà thông minh, bắt đầu từ căn hộ studio nhỏ)"
    },
    "email1": {
      "title": "Email 1: Gửi bạn bè (Informal)",
      "instruction": "Email 1: Email to your friend (about 50 words).",
      "instructionVi": "Email 1: Gửi email cho bạn của bạn (khoảng 50 từ).",
      "wordTarget": "Khoảng 50 từ (45 - 60 từ)",
      "minWords": 45,
      "maxWords": 65,
      "template": "Dear [Tên bạn],\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that our Living Home Club is discussing advice for young homebuyers. I was quite interested when I found out about it. Personally, I think youngsters should avoid heavy mortgage debt and build a stable emergency fund before buying. Moreover, renting first allows them greater flexibility to explore careers.\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Bày tỏ Cảm xúc (Emotions)",
                  "items": [
                        {
                              "en": "quite intrigued",
                              "vi": "khá tò mò và hứng thú"
                        },
                        {
                              "en": "quite interested",
                              "vi": "rất quan tâm"
                        }
                  ]
            },
            {
                  "name": "2. [ý kiến & lý do] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "buying a house too early carries high risks because mortgage payments create huge financial stress",
                              "vi": "mua nhà quá sớm mang lại rủi ro lớn vì nợ vay ngân hàng gây áp lực tài chính đè nặng"
                        },
                        {
                              "en": "renting an apartment gives young people flexibility because they can relocate easily for career growth",
                              "vi": "thuê nhà mang lại sự linh hoạt cho người trẻ vì dễ chuyển chỗ ở khi có cơ hội thăng tiến"
                        }
                  ]
            },
            {
                  "name": "3. [phát triển thêm ý] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we should attend this seminar together to learn how to manage our personal savings wisely",
                              "vi": "chúng mình nên cùng đi dự tọa đàm này để học cách quản lý tiền tiết kiệm thông minh"
                        },
                        {
                              "en": "we can share some practical financial planning articles with each other",
                              "vi": "chúng mình có thể chia sẻ cho nhau một vài bài viết hay về kế hoạch tài chính"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 86,
                  "en": "Dear Kim,\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that our Living Home Club is discussing advice for young people buying homes early. I was quite intrigued when I found out about it. Personally, I think young professionals should avoid excessive bank debt and ensure financial stability first. Moreover, renting allows them valuable flexibility to relocate for better jobs.\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\nKato",
                  "vi": "Chào Kim,\nDạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.\nMình nghĩ bạn sẽ thấy thú vị khi nghe rằng CLB Living Home đang thảo luận lời khuyên cho các bạn trẻ muốn mua nhà sớm. Mình khá ấn tượng khi biết tin này. Cá nhân mình nghĩ các bạn trẻ đi làm nên tránh vay nợ ngân hàng quá mức và phải đảm bảo ổn định tài chính trước. Hơn nữa, thuê nhà giúp họ có sự linh hoạt quý giá để dễ dàng chuyển nơi ở khi có công việc tốt hơn.\nMình rất muốn biết bạn nghĩ gì về điều này. Mong sớm nhận được hồi âm từ bạn.\nBảo trọng nhé,\nKato"
            }
      ]
    },
    "email2": {
      "title": "Email 2: Gửi Quản lý CLB Living Home (Formal)",
      "instruction": "Email 2: Email to the club manager (about 120-150 words).",
      "instructionVi": "Email 2: Gửi email cho quản lý câu lạc bộ (khoảng 120-150 từ).",
      "wordTarget": "120 - 150 từ (chuẩn 120 - 165 từ)",
      "minWords": 120,
      "maxWords": 165,
      "template": "Dear Club Manager,\nMy name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my perspective and offer constructive recommendations regarding homeownership for young adults. I think this is an important issue.\nTo support young members in making prudent housing decisions, I would like to make a few suggestions. First, our club should organize a workshop on personal financial literacy and mortgage planning so youngsters understand long-term debt obligations. Second, it would be better to advise them to begin with smaller, affordable studio apartments rather than stretching beyond their budget for spacious houses. Finally, we could compile a legal checklist covering title deeds and contract verifications to protect first-time buyers. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Đề xuất 1: [đề xuất thứ nhất] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "the club should invite certified financial advisors to host workshops on managing debt and mortgage interest",
                              "vi": "CLB nên mời chuyên gia tài chính tổ chức hội thảo về quản lý nợ và tính lãi vay mua nhà"
                        },
                        {
                              "en": "we should guide young members to maintain an emergency savings fund before committing to home loans",
                              "vi": "chúng ta nên hướng dẫn người trẻ duy trì quỹ dự phòng khẩn cấp trước khi vay mua nhà"
                        }
                  ]
            },
            {
                  "name": "2. Đề xuất 2: [đề xuất thứ hai] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "it would be better to encourage young buyers to target affordable starter apartments rather than luxury homes",
                              "vi": "sẽ tốt hơn nếu khuyên người trẻ chọn các căn hộ vừa sức thay vì vay mượn mua nhà sang trọng"
                        },
                        {
                              "en": "we ought to explain the benefits of renting while investing in personal skills during early career stages",
                              "vi": "chúng ta nên phân tích lợi ích của việc thuê nhà để đầu tư phát triển kỹ năng bản thân"
                        }
                  ]
            },
            {
                  "name": "3. Đề xuất 3: [đề xuất thứ ba] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we could publish a comprehensive legal guide on land titles, contracts, and property taxes for first-time buyers",
                              "vi": "chúng ta có thể phát hành cẩm nang pháp lý về sổ đỏ, hợp đồng và thuế cho người mua lần đầu"
                        },
                        {
                              "en": "the club could establish a peer mentorship group where experienced homeowners share practical lessons",
                              "vi": "CLB có thể lập nhóm chia sẻ kinh nghiệm thực tế giữa những người đã mua nhà thành công"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 205,
                  "en": "Dear Club Manager,\nMy name is Kato, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my thoughts and offer several practical suggestions regarding young adults aspiring to own homes early in life. I think this is an important issue.\nTo help our young members make sound, sustainable housing choices, I would like to make a few suggestions. First, we should invite a financial advisor to conduct a seminar on managing monthly cash flow and calculating mortgage interest rates. Second, it would be better to encourage youngsters to focus on modest starter apartments rather than taking out excessive loans for luxury properties. Finally, we could publish a practical guidebook outlining legal documentation and contract essentials for first-time buyers. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\nKato",
                  "vi": "Kính gửi Quản lý Câu lạc bộ,\nTên tôi là Kato, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.\nTôi viết email này để chia sẻ góc nhìn và đưa ra một vài đề xuất thực tế liên quan đến nguyện vọng sở hữu nhà sớm của các bạn trẻ. Tôi nghĩ đây là một chủ đề rất thiết thực.\nĐể giúp các hội viên trẻ đưa ra những quyết định mua nhà đúng đắn và bền vững, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, chúng ta nên mời một chuyên gia tài chính tổ chức buổi tọa đàm về quản lý dòng tiền hàng tháng và tính toán lãi suất vay mua nhà. Thứ hai, sẽ tốt hơn nếu khuyến khích các bạn trẻ tập trung vào những căn hộ khởi điểm vừa sức thay vì gánh các khoản vay quá lớn cho những bất động sản xa xỉ. Cuối cùng, câu lạc bộ có thể xuất bản một cuốn cẩm nang thực tế nêu rõ các hồ sơ pháp lý và điều khoản hợp đồng cốt lõi cho người mua nhà lần đầu. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ hoàn thành mục tiêu.\nCảm ơn bạn đã dành thời gian xem xét các đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.\nTrân trọng,\nKato"
            }
      ]
    }
  },
  "Garden club": {
    "title": "Garden club 1 (Japan Garden Talk Canceled)",
    "badge": "Đề ôn tập Part 04 (Đề 5)",
    "notice": "Dear members,\nWe are writing to tell you that the talk and slide show on The Gardens of Japan by Mr.Seiko has been canceled because the speaker has been taken ill. Mr.Jones has kindly agreed to give his talk on The Gardens of England again. I know that many of you have already heard Mr. Jones before but I hope you will be happy to hear him once again. Please give your suggestions.",
    "noticeVi": "Kính gửi các thành viên,\nChúng tôi viết thư này để thông báo rằng buổi nói chuyện và trình chiếu slide về Vườn Nhật Bản của ông Seiko đã bị hủy do diễn giả bị ốm đột xuất. Ông Jones đã vui lòng đồng ý nói chuyện lại về chủ đề Vườn nước Anh. Tôi biết nhiều bạn đã từng nghe ông Jones chia sẻ trước đây, nhưng tôi hy vọng các bạn sẽ vui vẻ lắng nghe lại. Xin vui lòng gửi gợi ý của bạn.",
    "promptAnalysis": {
      "topic": "Buổi nói chuyện về Vườn Nhật Bản bị hủy do diễn giả bị ốm, ông Jones đồng ý nói lại về Vườn nước Anh",
      "task1": "Viết email ngắn cho bạn (~50 từ): Bày tỏ sự tiếc nuối khi buổi nói chuyện về Vườn Nhật bị hủy, chia sẻ kế hoạch vẫn đến nghe ông Jones hoặc rủ bạn cùng tham gia hoạt động trao đổi hạt giống",
      "task2": "Viết email cho Chủ tịch CLB (120-150 từ): Cảm thông với sự cố sức khỏe của diễn giả, ủng hộ giải pháp thay thế của ông Jones và đề xuất 3 ý tưởng cụ thể (ông Jones bổ sung thêm mẹo làm vườn thực tế mới, tổ chức phiên hỏi đáp tương tác hoặc trao đổi cây giống, gửi thư chúc ông Seiko mau bình phục)"
    },
    "email1": {
      "title": "Email 1: Gửi bạn bè (Informal)",
      "instruction": "TASK 01: Write a short email to your friend (about 50 words).",
      "instructionVi": "TASK 01: Viết một email ngắn cho bạn của bạn (khoảng 50 từ).",
      "wordTarget": "Khoảng 50 từ (45 - 60 từ)",
      "minWords": 45,
      "maxWords": 65,
      "template": "Dear [Tên bạn],\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that Mr. Seiko's talk on Japanese gardens has been canceled due to illness, and Mr. Jones will present English gardens again. I was quite disappointed when I found out about it because I was eager to learn about bonsai. Personally, I think we should still attend to support Mr. Jones. Moreover, let's bring some garden seeds to swap!\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Bày tỏ Cảm xúc (Emotions)",
                  "items": [
                        {
                              "en": "quite disappointed",
                              "vi": "khá thất vọng"
                        },
                        {
                              "en": "a bit surprised and sad",
                              "vi": "hơi bất ngờ và tiếc nuối"
                        }
                  ]
            },
            {
                  "name": "2. [ý kiến & lý do] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we should still attend because Mr. Jones is an exceptional expert on English rose gardens",
                              "vi": "chúng mình vẫn nên đi dự vì ông Jones là một chuyên gia rất giỏi về hoa hồng Anh"
                        },
                        {
                              "en": "learning practical pruning skills is very useful because we can apply them to our home gardens",
                              "vi": "học kỹ thuật cắt tỉa thực tế rất hữu ích vì chúng mình có thể áp dụng cho vườn nhà"
                        }
                  ]
            },
            {
                  "name": "3. [phát triển thêm ý] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we could bring some healthy plant cuttings to swap with other garden members",
                              "vi": "chúng mình có thể mang vài cành giâm khỏe mạnh để trao đổi với các hội viên khác"
                        },
                        {
                              "en": "we should sign a get-well card wishing Mr. Seiko a speedy recovery",
                              "vi": "chúng mình nên cùng ký thiệp chúc ông Seiko mau chóng bình phục sức khỏe"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 93,
                  "en": "Dear Kim,\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that Mr. Seiko's Japanese garden talk is canceled because he is unwell, so Mr. Jones will present English gardens again. I was quite disappointed when I found out about it as I love Japanese landscapes. Personally, I think we should still attend because Mr. Jones is an excellent speaker. Moreover, we could bring plant cuttings to share!\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\nKato",
                  "vi": "Chào Kim,\nDạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.\nMình nghĩ bạn sẽ muốn biết tin buổi nói chuyện về vườn Nhật Bản của ông Seiko đã bị hủy vì ông ấy bị ốm, nên ông Jones sẽ nói lại về vườn nước Anh. Mình khá thất vọng khi biết tin này vì mình rất mê phong cảnh vườn Nhật. Cá nhân mình nghĩ chúng ta vẫn nên tham dự vì ông Jones là một diễn giả rất tuyệt vời. Hơn nữa, chúng mình có thể mang cành cây giống đến chia sẻ cho nhau!\nMình rất muốn biết bạn nghĩ gì. Mong sớm nhận tin từ bạn.\nBảo trọng nhé,\nKato"
            }
      ]
    },
    "email2": {
      "title": "Email 2: Gửi Chủ tịch CLB Làm vườn (Formal)",
      "instruction": "TASK 02: Write an email to the president of the club (about 120–150 words).",
      "instructionVi": "TASK 02: Viết email cho chủ tịch câu lạc bộ (khoảng 120–150 từ).",
      "wordTarget": "120 - 150 từ (chuẩn 120 - 165 từ)",
      "minWords": 120,
      "maxWords": 165,
      "template": "Dear Club President,\nMy name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email regarding the cancellation of Mr. Seiko's lecture and the substitute talk by Mr. Jones. I think this is an appropriate temporary solution.\nTo help make Mr. Jones's presentation engaging for members who have attended his previous session, I would like to make a few suggestions. First, we could kindly ask Mr. Jones to focus on new practical tips for modern urban gardening and English cottage plants. Second, it would be better to dedicate 20 minutes for an open gardening Q&A and a seed exchange among members. Finally, the club should prepare a warm get-well card for Mr. Seiko wishing him a rapid recovery. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Đề xuất 1: [đề xuất thứ nhất] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "the club should ask Mr. Jones to highlight practical pruning techniques and organic pest control methods",
                              "vi": "CLB nên đề nghị ông Jones nhấn mạnh kỹ thuật cắt tỉa thực tế và trừ sâu sinh học"
                        },
                        {
                              "en": "we should ensure the replacement presentation provides fresh insights rather than repeating last year's content",
                              "vi": "chúng ta nên đảm bảo bài thuyết trình thay thế mang lại kiến thức mới lạ"
                        }
                  ]
            },
            {
                  "name": "2. Đề xuất 2: [đề xuất thứ hai] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "it would be highly beneficial to set up an informal plant and seed exchange table after the lecture",
                              "vi": "sẽ rất bổ ích nếu bố trí một bàn trao đổi cây giống và hạt giống sau buổi nói chuyện"
                        },
                        {
                              "en": "the committee could host an extended 30-minute interactive Q&A session for members to ask plant care advice",
                              "vi": "ban tổ chức có thể kéo dài phần hỏi đáp 30 phút để giải đáp thắc mắc chăm sóc cây"
                        }
                  ]
            },
            {
                  "name": "3. Đề xuất 3: [đề xuất thứ ba] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we could send a get-well gift basket and sincere card from the club wishing Mr. Seiko a swift recovery",
                              "vi": "chúng ta có thể gửi giỏ quà và thiệp chúc từ CLB chúc ông Seiko mau khỏi bệnh"
                        },
                        {
                              "en": "the club should reschedule the Japanese garden talk as soon as the speaker's health is restored",
                              "vi": "CLB nên lên lịch lại buổi thuyết trình vườn Nhật Bản ngay khi sức khỏe diễn giả ổn định"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 197,
                  "en": "Dear Club President,\nMy name is Kato, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email regarding the unfortunate cancellation of Mr. Seiko's presentation and Mr. Jones's kind offer to step in. I think this is a sensible backup plan.\nTo ensure the session remains captivating for returning attendees, I would like to make a few suggestions. First, we could invite Mr. Jones to highlight practical pruning methods and organic pest control alongside his English garden slides. Second, it would be highly beneficial to organize an informal plant-cutting exchange table where members can trade greenery. Finally, our club could send a get-well gift basket to Mr. Seiko wishing him a swift recovery. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\nKato",
                  "vi": "Kính gửi Chủ tịch Câu lạc bộ,\nTên tôi là Kato, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.\nTôi viết email này để hồi đáp thông báo của bạn liên quan đến việc buổi thuyết trình của ông Seiko không may bị hủy và lời đề nghị chia sẻ thay thế đầy nhiệt tình của ông Jones. Tôi nghĩ đây là một kế hoạch dự phòng rất hợp lý.\nĐể đảm bảo buổi sinh hoạt vẫn hấp dẫn đối với các hội viên đã từng nghe trước đây, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, chúng ta có thể mời ông Jones nhấn mạnh thêm các phương pháp cắt tỉa cành thực tế và kiểm soát sâu bệnh hữu cơ bên cạnh các slide về vườn nước Anh. Thứ hai, sẽ rất bổ ích nếu tổ chức một bàn giao lưu trao đổi cành giâm và cây giống, nơi các hội viên có thể chia sẻ cây xanh cùng nhau. Cuối cùng, câu lạc bộ chúng ta có thể gửi một giỏ quà thăm hỏi đến ông Seiko để chúc ông mau chóng hồi phục sức khỏe. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ hoàn thành mục tiêu.\nCảm ơn bạn đã dành thời gian xem xét các đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.\nTrân trọng,\nKato"
            }
      ]
    }
  },
  "Garden club 2": {
    "title": "Garden club 2 (Tree Planting vs Workshop)",
    "badge": "Luyện đề Part 04 (Đề 3)",
    "notice": "Dear members,\nThe city government is encouraging citizens to plant more trees. There are two proposals:\nThe first choice is to do a tree-planting project where everyone works together with the aim of planting 50 trees and flowers at the park. This will make the city greener.\nThe second choice is to organize an event to teach the members gardening skills in order to help them plant more trees around their living areas. This will gradually change the city from having few trees to having many trees.\nWhich option will you choose? Give your suggestions.",
    "noticeVi": "Kính gửi các thành viên,\nChính quyền thành phố đang khuyến khích người dân trồng thêm nhiều cây xanh. Có hai đề xuất:\nLựa chọn thứ nhất là thực hiện dự án trồng cây nơi mọi người cùng chung tay với mục tiêu trồng 50 cây xanh và hoa tại công viên. Điều này sẽ giúp thành phố xanh hơn.\nLựa chọn thứ hai là tổ chức sự kiện dạy kỹ năng làm vườn cho hội viên để giúp họ tự trồng thêm nhiều cây xung quanh khu vực sinh sống của mình. Điều này sẽ dần dần thay đổi thành phố từ nơi có ít cây xanh thành nơi có nhiều cây xanh.\nBạn sẽ chọn phương án nào? Hãy đưa ra các gợi ý của bạn.",
    "promptAnalysis": {
      "topic": "Chương trình trồng cây xanh của thành phố: Trồng 50 cây ở công viên hay Mở workshop dạy kỹ năng làm vườn tại nhà",
      "task1": "Viết email ngắn cho bạn (~50 từ): Chọn phương án dạy kỹ năng làm vườn (hoặc trồng cây công viên), giải thích lý do vì mang lại tác động bền vững lâu dài, rủ bạn cùng tham gia",
      "task2": "Viết email cho Quản lý CLB (120-150 từ): Chọn phương án 2 (workshop làm vườn) và đề xuất 3 giải pháp thực tế (tổ chức workshop thực hành hướng dẫn chăm sóc cây trong chậu/ban công, tặng cây giống miễn phí cho học viên mang về, tổ chức thử thách chụp ảnh theo dõi quá trình lớn của cây trên mạng xã hội)"
    },
    "email1": {
      "title": "Email 1: Gửi bạn bè (Informal)",
      "instruction": "Email 1: Email to your friend (about 50 words).",
      "instructionVi": "Email 1: Gửi email cho bạn của bạn (khoảng 50 từ).",
      "wordTarget": "Khoảng 50 từ (45 - 60 từ)",
      "minWords": 45,
      "maxWords": 65,
      "template": "Dear [Tên bạn],\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that our city is encouraging tree planting, and our Garden Club has two proposals. I was quite excited when I found out about it. Personally, I think the gardening skills workshop is the better choice because teaching people how to grow plants creates long-lasting green spaces at home. Moreover, let's attend the workshop together this weekend!\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Bày tỏ Cảm xúc (Emotions)",
                  "items": [
                        {
                              "en": "quite excited",
                              "vi": "khá hào hứng"
                        },
                        {
                              "en": "absolutely thrilled",
                              "vi": "cực kỳ phấn khích"
                        }
                  ]
            },
            {
                  "name": "2. [ý kiến & lý do] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "hosting a gardening skills workshop is the superior choice because it empowers residents to green their balconies",
                              "vi": "mở lớp dạy làm vườn là lựa chọn tối ưu vì giúp người dân tự phủ xanh ban công nhà mình"
                        },
                        {
                              "en": "practical workshops provide long-term educational value because members can teach gardening skills to their children",
                              "vi": "lớp học thực hành có giá trị lâu dài vì hội viên có thể dạy lại kỹ năng làm vườn cho con cái"
                        }
                  ]
            },
            {
                  "name": "3. [phát triển thêm ý] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we should sign up together to learn how to cultivate organic herbs on our window sills",
                              "vi": "chúng mình nên đăng ký cùng nhau để học cách trồng thảo mộc sạch bên bậu cửa sổ"
                        },
                        {
                              "en": "we could volunteer to help the organizers prepare planting soil and flowerpots",
                              "vi": "chúng mình có thể tình nguyện giúp ban tổ chức chuẩn bị đất trồng và chậu cây"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 93,
                  "en": "Dear Kim,\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that our Garden Club is deciding between planting 50 park trees and hosting a gardening workshop. I was quite excited when I found out about it. Personally, I think the gardening skills workshop is much better because it empowers people to green their own balconies sustainably. Moreover, we could register together to learn how to prune bonsai!\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\nKato",
                  "vi": "Chào Kim,\nDạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.\nMình nghĩ bạn sẽ thích nghe tin CLB Làm vườn đang cân nhắc giữa việc trồng 50 cây ở công viên và mở lớp dạy kỹ năng làm vườn. Mình khá hào hứng khi biết tin này. Cá nhân mình thấy việc tổ chức workshop dạy kỹ năng tốt hơn nhiều vì nó giúp người dân tự phủ xanh ban công nhà mình một cách bền vững. Hơn nữa, chúng mình có thể cùng đăng ký học cách cắt tỉa cây cảnh nhé!\nMình rất muốn biết bạn nghĩ gì về việc này. Mong sớm nhận tin từ bạn.\nBảo trọng nhé,\nKato"
            }
      ]
    },
    "email2": {
      "title": "Email 2: Gửi Quản lý CLB Làm vườn (Formal)",
      "instruction": "Email 2: Email to the club manager (about 120-150 words).",
      "instructionVi": "Email 2: Gửi email cho quản lý câu lạc bộ (khoảng 120-150 từ).",
      "wordTarget": "120 - 150 từ (chuẩn 120 - 165 từ)",
      "minWords": 120,
      "maxWords": 165,
      "template": "Dear Club Manager,\nMy name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email regarding the city's green initiative and the two proposed projects. In my view, organizing a gardening skills workshop would be a far more impactful choice.\nTo maximize the benefits of this educational campaign, I would like to make a few suggestions. First, we should design hands-on training sessions focused on cultivating balcony gardens and caring for indoor purifying plants. Second, it would be better to distribute free starter seed kits and nutrient soil packets to all attendees. Finally, the club could initiate an online \"Green Living Challenge\" where participants share weekly progress photos of their homegrown plants. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Đề xuất 1: [đề xuất thứ nhất] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "the club should organize hands-on gardening workshops guiding residents on balcony vegetable cultivation and composting",
                              "vi": "CLB nên tổ chức các lớp thực hành hướng dẫn cư dân trồng rau ban công và ủ phân hữu cơ"
                        },
                        {
                              "en": "we should invite experienced arborists to deliver practical demonstrations on soil mixing and organic pest prevention",
                              "vi": "chúng ta nên mời chuyên gia làm vườn biểu diễn cách trộn đất và ngừa sâu bọ sinh học"
                        }
                  ]
            },
            {
                  "name": "2. Đề xuất 2: [đề xuất thứ hai] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "it would be highly effective to distribute free starter seed kits and nutrient soil packets to all attendees",
                              "vi": "sẽ rất hiệu quả nếu phát tặng bộ hạt giống khởi đầu và túi đất dinh dưỡng cho người tham gia"
                        },
                        {
                              "en": "the club could partner with local nurseries to provide members with discounted gardening tools and fertilizers",
                              "vi": "CLB có thể liên kết với vườn ươm để giảm giá dụng cụ làm vườn và phân bón"
                        }
                  ]
            },
            {
                  "name": "3. Đề xuất 3: [đề xuất thứ ba] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we could initiate an online 'Green Living Challenge' encouraging members to share weekly growth photos on social media",
                              "vi": "chúng ta có thể phát động thử thách 'Sống Xanh' kêu gọi hội viên chia sẻ ảnh cây lớn mỗi tuần"
                        },
                        {
                              "en": "the club should arrange a weekend exhibition showcasing the best home-grown produce and miniature bonsai",
                              "vi": "CLB nên tổ chức triển lãm cuối tuần trưng bày nông sản sạch và cây cảnh đẹp tự trồng"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 192,
                  "en": "Dear Club Manager,\nMy name is Kato, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email regarding the tree-planting proposals encouraged by our municipal authorities. I firmly believe that organizing gardening skills workshops represents the more sustainable alternative.\nTo ensure the campaign achieves enduring environmental success, I would like to make a few suggestions. First, our club should organize interactive weekend seminars guiding residents on composting and cultivating vertical herb gardens. Second, it would be highly beneficial to provide each participant with complementary organic seedlings and potting instructions. Finally, we could launch a social media showcase encouraging members to document their greening progress and exchange gardening advice. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\nKato",
                  "vi": "Kính gửi Quản lý Câu lạc bộ,\nTên tôi là Kato, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.\nTôi viết email này để hồi đáp thông báo của bạn liên quan đến các đề xuất trồng cây do chính quyền thành phố khuyến khích. Tôi tin chắc rằng việc tổ chức các buổi workshop dạy kỹ năng làm vườn là phương án bền vững và ý nghĩa hơn nhiều.\nĐể đảm bảo chiến dịch mang lại hiệu quả bảo vệ môi trường lâu dài, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, câu lạc bộ nên tổ chức các buổi hội thảo thực hành vào cuối tuần nhằm hướng dẫn người dân cách ủ phân hữu cơ và trồng vườn rau gia vị dạng thẳng đứng. Thứ hai, sẽ rất hữu ích nếu tặng cho mỗi người tham gia các cây giống hữu cơ miễn phí kèm bảng hướng dẫn trồng cây vào chậu. Cuối cùng, chúng ta có thể phát động một diễn đàn trên mạng xã hội khuyến khích mọi người ghi lại hành trình phủ xanh ngôi nhà của mình và trao đổi kinh nghiệm. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ hoàn thành mục tiêu.\nCảm ơn bạn đã dành thời gian xem xét đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.\nTrân trọng,\nKato"
            }
      ]
    }
  },
  "Sports club": {
    "title": "Sports club (Youth Competition)",
    "badge": "Đề ôn tập Part 04 (Đề 6)",
    "notice": "Dear members,\nThe club needs suggestions about the organization of a sports competition for young members.",
    "noticeVi": "Kính gửi các thành viên,\nCâu lạc bộ cần những gợi ý về việc tổ chức một cuộc thi thể thao dành cho các thành viên trẻ tuổi.",
    "promptAnalysis": {
      "topic": "Đề xuất kế hoạch tổ chức một giải thi đấu thể thao sôi động, an toàn dành cho hội viên trẻ tuổi",
      "task1": "Viết email ngắn cho bạn (~50 từ): Chia sẻ cảm xúc phấn khởi, gợi ý các môn thể thao phổ biến (bóng đá mini, cầu lông), rủ bạn thành lập đội thi đấu chung",
      "task2": "Viết email cho Quản lý CLB (120-150 từ): Nêu quan điểm ủng hộ và đưa ra 3 đề xuất cụ thể (chọn các môn thể thao đồng đội dễ tiếp cận, bố trí trọng tài và y tế sơ cứu chu đáo, trao cúp lưu niệm và giấy chứng nhận khích lệ)"
    },
    "email1": {
      "title": "Email 1: Gửi bạn bè (Informal)",
      "instruction": "TASK 01: Write a short email to your friend (about 50 words).",
      "instructionVi": "TASK 01: Viết một email ngắn cho bạn của bạn (khoảng 50 từ).",
      "wordTarget": "Khoảng 50 từ (45 - 60 từ)",
      "minWords": 45,
      "maxWords": 65,
      "template": "Dear [Tên bạn],\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that our Sports Club is planning a sports competition for young members. I was quite excited when I found out about it. Personally, I think we should include 5-a-side football and badminton because they are popular and thrilling. Moreover, let's form a team together and start practicing!\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Bày tỏ Cảm xúc (Emotions)",
                  "items": [
                        {
                              "en": "quite excited",
                              "vi": "khá hào hứng"
                        },
                        {
                              "en": "absolutely thrilled",
                              "vi": "cực kỳ phấn khích"
                        }
                  ]
            },
            {
                  "name": "2. [ý kiến & lý do] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "organizing badminton and mini football is brilliant because these sports foster intense teamwork",
                              "vi": "tổ chức cầu lông và bóng đá mini rất tuyệt vì kích thích tinh thần đồng đội cao"
                        },
                        {
                              "en": "competing in sports tournaments boosts our stamina and relieves study pressure effectively",
                              "vi": "thi đấu thể thao giúp tăng sức bền thể lực và giải tỏa áp lực học tập rất tốt"
                        }
                  ]
            },
            {
                  "name": "3. [phát triển thêm ý] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we should form a doubles badminton team and practice together this Saturday",
                              "vi": "chúng mình nên lập đội đánh đôi cầu lông và cùng nhau tập luyện vào thứ Bảy này"
                        },
                        {
                              "en": "we can invite our classmates to come along and cheer for our club matches",
                              "vi": "chúng mình có thể rủ thêm bạn cùng lớp đến cổ vũ cho các trận đấu của CLB"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 83,
                  "en": "Dear Kim,\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that our Sports Club is planning an upcoming tournament for young members. I was quite excited when I found out about it. Personally, I think badminton and relay running would be ideal because they are dynamic and fun. Moreover, we should team up for the doubles competition!\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\nKato",
                  "vi": "Chào Kim,\nDạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.\nMình nghĩ bạn sẽ thích nghe tin CLB Thể thao của chúng ta đang lên kế hoạch tổ chức một giải đấu sắp tới cho các thành viên trẻ. Mình khá hào hứng khi biết tin này. Cá nhân mình nghĩ cầu lông và chạy tiếp sức sẽ rất lý tưởng vì chúng vừa sôi động vừa vui nhộn. Hơn nữa, chúng mình nên lập đội đôi để thi đấu cùng nhau nhé!\nMình rất muốn biết bạn nghĩ gì về việc này. Mong sớm nhận tin từ bạn.\nBảo trọng nhé,\nKato"
            }
      ]
    },
    "email2": {
      "title": "Email 2: Gửi Quản lý CLB Thể thao (Formal)",
      "instruction": "TASK 02: Write an email to the president of the club (about 120–150 words).",
      "instructionVi": "TASK 02: Viết email cho chủ tịch câu lạc bộ (khoảng 120–150 từ).",
      "wordTarget": "120 - 150 từ (chuẩn 120 - 165 từ)",
      "minWords": 120,
      "maxWords": 165,
      "template": "Dear Club Manager,\nMy name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my thoughts and offer several practical suggestions regarding the organization of the sports competition for youth members. I think this is a great idea.\nTo help make this competition vibrant and safe, I would like to make a few suggestions. First, we should select accessible and popular sports such as badminton, table tennis, and 5-a-side football. Second, it would be better to invite qualified physical education teachers to referee matches and ensure a dedicated medical team is on standby. Finally, we could award medals and certificates to all participants, along with fair-play trophies to encourage sportsmanship. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Đề xuất 1: [đề xuất thứ nhất] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "the club should feature accessible team sports such as five-a-side football, basketball, and badminton",
                              "vi": "CLB nên tổ chức các môn dễ tiếp cận như bóng đá 5 người, bóng rổ và cầu lông"
                        },
                        {
                              "en": "we should divide tournaments into age categories so participants compete on equal and fair footing",
                              "vi": "chúng ta nên phân bảng theo lứa tuổi để các bạn thi đấu công bằng"
                        }
                  ]
            },
            {
                  "name": "2. Đề xuất 2: [đề xuất thứ hai] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "it would be crucial to set up a professional medical station with certified first-aid personnel on site",
                              "vi": "điều tối quan trọng là lập trạm y tế chuyên nghiệp có nhân viên sơ cấp cứu túc trực"
                        },
                        {
                              "en": "the committee should invite certified referees to ensure fair play, strict rules, and participant safety",
                              "vi": "ban tổ chức nên mời trọng tài có chứng chỉ để đảm bảo tính công bằng và an toàn"
                        }
                  ]
            },
            {
                  "name": "3. Đề xuất 3: [đề xuất thứ ba] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we could award trophies, medals, and fair-play sportsmanship certificates to inspire all athletes",
                              "vi": "chúng ta có thể trao cúp, huy chương và chứng nhận phong cách thi đấu đẹp để khích lệ vận động viên"
                        },
                        {
                              "en": "the club could arrange complimentary healthy refreshments, energy drinks, and fresh fruit throughout match days",
                              "vi": "CLB có thể chuẩn bị nước tăng lực, trái cây và đồ uống bổ dưỡng miễn phí suốt giải đấu"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 198,
                  "en": "Dear Club Manager,\nMy name is Kato, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my thoughts and offer several practical suggestions regarding the sports tournament for our young members. I think this is a fantastic initiative.\nTo ensure the event runs smoothly and leaves a lasting impression, I would like to make a few suggestions. First, we should focus on high-participation sports such as 3-on-3 basketball, badminton doubles, and tug-of-war. Second, it would be highly beneficial to arrange a certified first-aid team with proper hydration stations to ensure athlete safety throughout the competition. Finally, the club should present commemorative medals, sports vouchers, and fair-play accolades to motivate every participant. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\nKato",
                  "vi": "Kính gửi Quản lý Câu lạc bộ,\nTên tôi là Kato, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.\nTôi viết email này để chia sẻ suy nghĩ và đưa ra một vài đề xuất thực tế liên quan đến giải đấu thể thao dành cho các thành viên trẻ tuổi. Tôi nghĩ đây là một sáng kiến tuyệt vời.\nĐể đảm bảo sự kiện diễn ra suôn sẻ và để lại ấn tượng sâu sắc, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, chúng ta nên tập trung vào các môn thể thao thu hút đông đảo người chơi như bóng rổ 3 đấu 3, đôi cầu lông và kéo co. Thứ hai, sẽ rất bổ ích nếu bố trí một đội sơ cứu được cấp chứng chỉ cùng các trạm cấp nước uống đầy đủ để bảo vệ an toàn sức khỏe cho vận động viên trong suốt giải đấu. Cuối cùng, câu lạc bộ nên trao huy chương kỷ niệm, phiếu mua đồ thể thao và giải phong cách để khích lệ mọi người tham gia. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ đạt được mục tiêu của mình.\nCảm ơn bạn đã dành thời gian xem xét các đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.\nTrân trọng,\nKato"
            }
      ]
    }
  },
  "Film club": {
    "title": "Film club (Famous Film Critic Talk)",
    "badge": "Luyện đề Part 04 (Đề 1)",
    "notice": "Dear Members,\nOur club will invite a famous film critic next week, and what is the topic should he talk about and how to attract many people as possible to attend.",
    "noticeVi": "Kính gửi các thành viên,\nCâu lạc bộ của chúng ta sẽ mời một nhà phê bình phim nổi tiếng vào tuần tới. Anh ấy nên chia sẻ về chủ đề gì và làm thế nào để thu hút càng nhiều người tham dự càng tốt?",
    "promptAnalysis": {
      "topic": "Lựa chọn chủ đề chia sẻ cho nhà phê bình phim nổi tiếng và các biện pháp quảng bá nhằm thu hút tối đa người tham dự",
      "task1": "Viết email ngắn cho bạn (~50 từ): Chia sẻ cảm xúc phấn khích khi biết tin nhà phê bình phim nổi tiếng đến thăm, gợi ý chủ đề hậu trường làm phim và rủ bạn cùng đi",
      "task2": "Viết email cho Quản lý CLB (120-150 từ): Nêu quan điểm ủng hộ và đưa ra 3 đề xuất cụ thể (chủ đề Nghệ thuật Kể chuyện và Bí mật Hậu trường Hollywood, quảng bá mạnh mẽ trên mạng xã hội với video ngắn, tổ chức bốc thăm vé xem phim miễn phí)"
    },
    "email1": {
      "title": "Email 1: Gửi bạn bè (Informal)",
      "instruction": "Email 1: Email to your friend (about 50 words).",
      "instructionVi": "Email 1: Gửi email cho bạn của bạn (khoảng 50 từ).",
      "wordTarget": "Khoảng 50 từ (45 - 60 từ)",
      "minWords": 45,
      "maxWords": 65,
      "template": "Dear [Tên bạn],\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that our Film Club is inviting a famous film critic next week. I was quite excited when I found out about it. Personally, I think he should talk about behind-the-scenes secrets of blockbuster movies because everyone loves film production stories. Moreover, we must reserve front-row seats together early!\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Bày tỏ Cảm xúc (Emotions)",
                  "items": [
                        {
                              "en": "quite excited",
                              "vi": "khá hào hứng"
                        },
                        {
                              "en": "absolutely thrilled",
                              "vi": "cực kỳ phấn khích"
                        }
                  ]
            },
            {
                  "name": "2. [ý kiến & lý do] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "listening to an acclaimed film critic is fantastic because it helps us understand cinematic directing secrets",
                              "vi": "lắng nghe nhà phê bình phim nổi tiếng rất tuyệt vì giúp chúng ta hiểu bí quyết đạo diễn điện ảnh"
                        },
                        {
                              "en": "analyzing hidden symbols in movies will deepen our appreciation for classic cinema masterpieces",
                              "vi": "phân tích biểu tượng ẩn trong phim sẽ giúp chúng ta thưởng thức các kiệt tác sâu sắc hơn"
                        }
                  ]
            },
            {
                  "name": "3. [phát triển thêm ý] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we should reserve our seats early so we can sit in the front rows",
                              "vi": "chúng mình nên đặt chỗ sớm để có vị trí ngồi hàng đầu"
                        },
                        {
                              "en": "we can prepare some thoughtful questions about screenplay writing to ask the guest speaker",
                              "vi": "chúng mình có thể chuẩn bị vài câu hỏi sâu sắc về viết kịch bản để giao lưu với diễn giả"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 84,
                  "en": "Dear Kim,\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that a renowned film critic is speaking at our Film Club next week. I was quite thrilled when I found out about it. Personally, I think he should discuss visual storytelling and screenwriting tips because aspiring filmmakers would love that. Moreover, let's grab dinner beforehand and attend together!\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\nKato",
                  "vi": "Chào Kim,\nDạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.\nMình nghĩ bạn sẽ thích nghe rằng một nhà phê bình phim nổi tiếng sẽ đến chia sẻ tại CLB Điện ảnh vào tuần tới. Mình cực kỳ phấn khích khi biết tin này. Cá nhân mình thấy anh ấy nên thảo luận về nghệ thuật kể chuyện bằng hình ảnh và mẹo viết kịch bản vì những bạn trẻ đam mê làm phim sẽ rất thích. Hơn nữa, chúng mình cùng đi ăn tối trước rồi cùng đi nhé!\nMình rất muốn biết bạn nghĩ gì. Mong sớm nhận tin từ bạn.\nBảo trọng nhé,\nKato"
            }
      ]
    },
    "email2": {
      "title": "Email 2: Gửi Quản lý CLB Điện ảnh (Formal)",
      "instruction": "Email 2: Email to the club manager (about 120-150 words).",
      "instructionVi": "Email 2: Gửi email cho quản lý câu lạc bộ (khoảng 120-150 từ).",
      "wordTarget": "120 - 150 từ (chuẩn 120 - 165 từ)",
      "minWords": 120,
      "maxWords": 165,
      "template": "Dear Club Manager,\nMy name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my thoughts and offer several practical suggestions regarding the upcoming talk by the famous film critic. I think this is a great idea.\nTo help attract a large and diverse audience, I would like to make a few suggestions. First, we should select the topic \"The Secret Art of Visual Storytelling in Modern Cinema\", which appeals to both casual moviegoers and film students. Second, it would be better to promote the event via short video teasers on university student fanpages and social media groups. Finally, we could organize an interactive Q&A session with free cinema vouchers awarded for the most thought-provoking questions. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Đề xuất 1: [đề xuất thứ nhất] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "the lecture should focus on 'Deciphering Hidden Cinematic Symbols in Oscar-Winning Masterpieces'",
                              "vi": "buổi nói chuyện nên tập trung vào chủ đề giải mã biểu tượng ẩn trong các kiệt tác Oscar"
                        },
                        {
                              "en": "we should request the speaker to illustrate theoretical insights with famous movie video excerpts",
                              "vi": "chúng ta nên đề nghị diễn giả minh họa kiến thức bằng các trích đoạn phim nổi tiếng"
                        }
                  ]
            },
            {
                  "name": "2. Đề xuất 2: [đề xuất thứ hai] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "it would be highly effective to launch short video teasers on social media and partner with campus film societies",
                              "vi": "sẽ rất hiệu quả nếu làm video ngắn quảng bá trên mạng xã hội và liên kết với CLB phim trường học"
                        },
                        {
                              "en": "the club should design attractive visual posters and distribute invitations across university campuses",
                              "vi": "CLB nên thiết kế áp phích ấn tượng và phát thư mời tại các trường đại học"
                        }
                  ]
            },
            {
                  "name": "3. Đề xuất 3: [đề xuất thứ ba] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we could organize a 20-minute cinema trivia quiz during the intermission, gifting free movie tickets to winners",
                              "vi": "chúng ta có thể tổ chức trò chơi đố vui điện ảnh giữa giờ và tặng vé xem phim cho người thắng"
                        },
                        {
                              "en": "the club could hold a relaxed post-talk coffee gathering where members discuss favorite directors with the speaker",
                              "vi": "CLB có thể tổ chức buổi uống cà phê thân mật sau tọa đàm để giao lưu cùng diễn giả"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 200,
                  "en": "Dear Club Manager,\nMy name is Kato, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my thoughts and offer several practical suggestions regarding the special appearance by the acclaimed film critic next week. I think this is an exceptional opportunity.\nTo maximize attendance and enthusiasm, I would like to make a few suggestions. First, I propose the discussion focus on \"Deciphering Hidden Cinematic Symbols in Oscar-Winning Films\", which naturally sparks curiosity. Second, it would be better to launch targeted social media advertisements and collaborate with local university cinema societies to widen our reach. Finally, we could hold a movie quiz during the intermission, gifting classic film posters and cinema tickets to winners. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\nKato",
                  "vi": "Kính gửi Quản lý Câu lạc bộ,\nTên tôi là Kato, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.\nTôi viết email này để chia sẻ góc nhìn và đưa ra một vài đề xuất thực tế liên quan đến buổi giao lưu với nhà phê bình phim danh tiếng vào tuần tới. Tôi nghĩ đây là một cơ hội vô cùng đặc biệt.\nĐể tối đa hóa số lượng người tham dự và sự hào hứng, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, tôi đề xuất chủ đề nói chuyện tập trung vào \"Giải mã các biểu tượng điện ảnh ẩn giấu trong các bộ phim đoạt giải Oscar\", một đề tài dễ khơi gợi trí tò mò của khán giả. Thứ hai, sẽ tốt hơn nếu chạy các bài quảng bá hướng đối tượng trên mạng xã hội và liên kết với các hội nhóm điện ảnh sinh viên để mở rộng tầm tiếp cận. Cuối cùng, chúng ta có thể tổ chức một trò chơi đố vui về phim ảnh trong giờ nghỉ giải lao, tặng áp phích phim kinh điển và vé xem phim cho những người thắng cuộc. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ hoàn thành mục tiêu.\nCảm ơn bạn đã dành thời gian xem xét các đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.\nTrân trọng,\nKato"
            }
      ]
    }
  },
  "Car club": {
    "title": "Car club (European Road Trip)",
    "badge": "Luyện đề Part 04 (Đề 2)",
    "notice": "Dear members,\nThere will be a car program running across Europe. The program invites the Car Club to send 2 representatives (1 main driver and 1 passenger) and both must have good driving skills. Do you have any suggestions for the above positions?\nThe manager.",
    "noticeVi": "Kính gửi các thành viên,\nSắp có một hành trình xe hơi chạy xuyên Châu Âu. Ban tổ chức chương trình mời CLB Xe hơi cử 2 đại diện (1 người lái chính và 1 hành khách đồng hành) và cả hai đều phải có kỹ năng lái xe tốt. Bạn có đề xuất gì cho các vị trí trên không?\nNgười quản lý.",
    "promptAnalysis": {
      "topic": "Đề cử 2 thành viên xuất sắc làm đại diện (lái chính và phụ lái/hành khách) tham gia hành trình xe hơi xuyên Châu Âu",
      "task1": "Viết email ngắn cho bạn (~50 từ): Bày tỏ sự hào hứng về hành trình xuyên Châu Âu, đề cử hai thành viên kỳ cựu (hoặc rủ bạn cùng đăng ký ứng tuyển)",
      "task2": "Viết email cho Quản lý CLB (120-150 từ): Nêu quan điểm ủng hộ và đề xuất 3 giải pháp thực tế (đề cử 2 thành viên có bằng lái quốc tế và kỹ năng sửa xe, tổ chức bài kiểm tra phản xạ thực tế, chuẩn bị bảo hiểm và thiết bị định vị GPS)"
    },
    "email1": {
      "title": "Email 1: Gửi bạn bè (Informal)",
      "instruction": "Email 1: Email to your friend (about 50 words).",
      "instructionVi": "Email 1: Gửi email cho bạn của bạn (khoảng 50 từ).",
      "wordTarget": "Khoảng 50 từ (45 - 60 từ)",
      "minWords": 45,
      "maxWords": 65,
      "template": "Dear [Tên bạn],\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that our Car Club is invited to send two skilled representatives on a European cross-country road trip. I was quite thrilled when I found out about it. Personally, I think we should nominate Alex and David because they both have over ten years of driving experience and mechanical expertise. Moreover, let's attend the club meeting to vote for them!\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Bày tỏ Cảm xúc (Emotions)",
                  "items": [
                        {
                              "en": "quite excited",
                              "vi": "khá hào hứng"
                        },
                        {
                              "en": "absolutely thrilled",
                              "vi": "cực kỳ phấn khích"
                        }
                  ]
            },
            {
                  "name": "2. [ý kiến & lý do] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "nominating experienced drivers like Robert and Elena is ideal because both possess international driving permits",
                              "vi": "đề cử lái xe kinh nghiệm như Robert và Elena là chuẩn xác vì cả hai đều có bằng lái quốc tế"
                        },
                        {
                              "en": "this trans-European road trip is a historic milestone because it puts our club on the international map",
                              "vi": "chuyến xuyên Âu này là cột mốc lịch sử vì khẳng định tên tuổi CLB trên trường quốc tế"
                        }
                  ]
            },
            {
                  "name": "3. [phát triển thêm ý] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we could help them inspect the car engine and pack essential emergency repair kits this weekend",
                              "vi": "chúng mình có thể giúp kiểm tra động cơ xe và đóng gói dụng cụ sửa xe khẩn cấp cuối tuần này"
                        },
                        {
                              "en": "we should design custom club bumper decals and small flags for their vehicle",
                              "vi": "chúng mình nên thiết kế logo dán xe và cờ lưu niệm của CLB cho chuyến đi"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 92,
                  "en": "Dear Kim,\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that our Car Club has been invited to send two representatives on a road trip across Europe. I was quite excited when I found out about it. Personally, I think we should nominate Mike as driver and Sarah as co-pilot because both possess international driving permits and great navigation skills. Moreover, we should help them prepare!\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\nKato",
                  "vi": "Chào Kim,\nDạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.\nMình nghĩ bạn sẽ thấy hào hứng khi nghe rằng CLB Xe hơi của chúng ta được mời cử 2 đại diện tham gia chuyến hành trình lái xe xuyên Châu Âu. Mình rất phấn khích khi biết tin này. Cá nhân mình nghĩ chúng ta nên đề cử anh Mike làm lái chính và chị Sarah làm hoa tiêu vì cả hai đều có bằng lái quốc tế và kỹ năng định vị tuyệt vời. Hơn nữa, chúng mình nên hỗ trợ họ chuẩn bị nhé!\nMình rất muốn biết bạn nghĩ gì về việc này. Mong sớm nhận tin từ bạn.\nBảo trọng nhé,\nKato"
            }
      ]
    },
    "email2": {
      "title": "Email 2: Gửi Quản lý CLB Xe hơi (Formal)",
      "instruction": "Email 2: Email to the club manager (about 120-150 words).",
      "instructionVi": "Email 2: Gửi email cho quản lý câu lạc bộ (khoảng 120-150 từ).",
      "wordTarget": "120 - 150 từ (chuẩn 120 - 165 từ)",
      "minWords": 120,
      "maxWords": 165,
      "template": "Dear Club Manager,\nMy name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my nominations and practical suggestions regarding the European road tour representatives. I think this is a prestigious honor for our club.\nTo ensure our club is represented safely and successfully, I would like to make a few suggestions. First, I strongly recommend Mr. Michael as the primary driver, given his fifteen years of cross-border driving and valid international license. Second, it would be better to select Ms. Sarah as the co-pilot because she is fluent in European languages and possesses sound mechanical troubleshooting knowledge. Finally, we should arrange comprehensive travel insurance, vehicle diagnostics, and emergency satellite equipment prior to departure. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Đề xuất 1: [đề xuất thứ nhất] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "I respectfully nominate Mr. Robert as the lead driver because he holds an international license and has completed alpine rallies",
                              "vi": "tôi xin đề cử anh Robert làm lái chính vì anh có bằng quốc tế và từng hoàn thành các giải đua đường đèo"
                        },
                        {
                              "en": "the lead driver should possess over a decade of manual transmission experience and flawless safety records",
                              "vi": "lái chính nên có hơn 10 năm kinh nghiệm xe số sàn và lý lịch lái xe an toàn tuyệt đối"
                        }
                  ]
            },
            {
                  "name": "2. Đề xuất 2: [đề xuất thứ hai] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "it would be ideal to appoint Ms. Elena as his co-pilot because she is a skilled automotive technician and speaks multiple languages",
                              "vi": "rất lý tưởng nếu cử chị Elena làm hoa tiêu vì chị am hiểu kỹ thuật xe và thông thạo ngoại ngữ"
                        },
                        {
                              "en": "the co-pilot must be proficient in international GPS navigation tools, customs formalities, and mechanical diagnostics",
                              "vi": "hoa tiêu cần thành thạo định vị GPS, thủ tục hải quan và chẩn đoán sự cố máy móc"
                        }
                  ]
            },
            {
                  "name": "3. Đề xuất 3: [đề xuất thứ ba] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we could equip the delegation with high-grade satellite tracking gear, emergency toolkits, and comprehensive medical insurance",
                              "vi": "chúng ta có thể trang bị cho phái đoàn thiết bị định vị vệ tinh, hộp đồ nghề và bảo hiểm y tế toàn diện"
                        },
                        {
                              "en": "the club should establish a daily live check-in vlog so members back home can track their journey across Europe",
                              "vi": "CLB nên lập kênh nhật ký hành trình trực tuyến mỗi ngày để hội viên ở nhà cùng theo dõi"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 200,
                  "en": "Dear Club Manager,\nMy name is Kato, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your announcement regarding the European cross-country expedition. I think sending a two-person delegation is a magnificent showcase for our club.\nTo ensure peak safety and outstanding performance throughout the journey, I would like to make a few suggestions. First, I nominate Mr. Robert as the lead driver because he holds an international driving license and has completed numerous alpine road rallies. Second, it would be ideal to appoint Ms. Elena as his co-pilot, as she is a certified automotive technician with fluent multilingual communication skills. Finally, the club should provide them with high-grade navigation tools, emergency toolkits, and comprehensive medical coverage. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\nKato",
                  "vi": "Kính gửi Quản lý Câu lạc bộ,\nTên tôi là Kato, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.\nTôi viết email này để hồi đáp thông báo của bạn liên quan đến chuyến hành trình lái xe xuyên Châu Âu. Tôi nghĩ việc cử một phái đoàn 2 thành viên là cơ hội tuyệt vời để khẳng định vị thế của câu lạc bộ chúng ta.\nĐể đảm bảo an toàn tối đa và đạt thành tích xuất sắc trong suốt hành trình, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, tôi xin đề cử anh Robert làm người lái chính vì anh có bằng lái quốc tế và đã từng hoàn thành nhiều chặng đua đường đèo hiểm trở. Thứ hai, sẽ rất lý tưởng nếu cử chị Elena làm bạn đồng hành/hoa tiêu, bởi chị là chuyên viên kỹ thuật ô tô và giao tiếp đa ngôn ngữ rất lưu loát. Cuối cùng, câu lạc bộ nên trang bị cho họ các thiết bị định vị cao cấp, bộ dụng cụ sửa chữa khẩn cấp và gói bảo hiểm y tế toàn diện. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ hoàn thành mục tiêu.\nCảm ơn bạn đã dành thời gian xem xét đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.\nTrân trọng,\nKato"
            }
      ]
    }
  },
  "Community club": {
    "title": "Community club (Recruit Members & Activities)",
    "badge": "Luyện đề Part 04 (Đề 4)",
    "notice": "Dear members,\nThe club needs support from everyone around us for many activities this year. First, we need more members so we can continue to participate in and organize upcoming events and projects. Additionally, we are looking for creative ideas to develop the club's activities. Can you give us some suggestions?",
    "noticeVi": "Kính gửi các thành viên,\nCâu lạc bộ cần sự ủng hộ từ mọi người xung quanh cho nhiều hoạt động trong năm nay. Trước hết, chúng ta cần thêm thành viên để có thể tiếp tục tham gia và tổ chức các sự kiện và dự án sắp tới. Ngoài ra, chúng tôi đang tìm kiếm những ý tưởng sáng tạo để phát triển các hoạt động của câu lạc bộ. Bạn có thể cho chúng tôi một số gợi ý không?",
    "promptAnalysis": {
      "topic": "Kế hoạch thu hút thành viên mới và phát triển các ý tưởng hoạt động cộng đồng sáng tạo, ý nghĩa trong năm",
      "task1": "Viết email ngắn cho bạn (~50 từ): Chia sẻ về chiến dịch tuyển hội viên và phát triển dự án thiện nguyện, rủ bạn cùng đăng ký và gợi ý dự án thu gom rác tái chế",
      "task2": "Viết email cho Quản lý CLB (120-150 từ): Nêu quan điểm ủng hộ và đề xuất 3 giải pháp thực tế (chiến dịch truyền thông tuyển thành viên tại các trường học, dự án gây quỹ 'Đổi rác lấy cây xanh', ngày hội gia đình tình nguyện cuối tuần)"
    },
    "email1": {
      "title": "Email 1: Gửi bạn bè (Informal)",
      "instruction": "Email 1: Email to your friend (about 50 words).",
      "instructionVi": "Email 1: Gửi email cho bạn của bạn (khoảng 50 từ).",
      "wordTarget": "Khoảng 50 từ (45 - 60 từ)",
      "minWords": 45,
      "maxWords": 65,
      "template": "Dear [Tên bạn],\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that our Community Club is recruiting new members and seeking creative project ideas. I was quite excited when I found out about it. Personally, I think we should organize a neighborhood recycling drive and charity garage sale because they directly help vulnerable families. Moreover, would you like to join the club with me?\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Bày tỏ Cảm xúc (Emotions)",
                  "items": [
                        {
                              "en": "quite excited",
                              "vi": "khá hào hứng"
                        },
                        {
                              "en": "absolutely thrilled",
                              "vi": "cực kỳ phấn khích"
                        }
                  ]
            },
            {
                  "name": "2. [ý kiến & lý do] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "launching a neighborhood recycling campaign is meaningful because it protects our local environment directly",
                              "vi": "tổ chức phong trào tái chế khu phố rất ý nghĩa vì trực tiếp bảo vệ môi trường địa phương"
                        },
                        {
                              "en": "community volunteering brings immense fulfillment because we can support disadvantaged children and lonely seniors",
                              "vi": "làm tình nguyện mang lại niềm vui lớn vì có thể hỗ trợ trẻ em khó khăn và người già neo đơn"
                        }
                  ]
            },
            {
                  "name": "3. [phát triển thêm ý] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we could register as core volunteer mentors together to help coordinate community projects",
                              "vi": "chúng mình có thể cùng đăng ký làm tình nguyện viên nòng cốt để điều phối các dự án"
                        },
                        {
                              "en": "we can donate some of our gently used books and warm clothes to the upcoming charity drive",
                              "vi": "chúng mình có thể quyên góp sách cũ và quần áo ấm cho đợt thiện nguyện sắp tới"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 84,
                  "en": "Dear Kim,\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that our Community Club is launching a membership drive and seeking fresh activity ideas. I was quite thrilled when I found out about it. Personally, I think we should organize weekly free tutoring for disadvantaged children because education brings lasting change. Moreover, let's register as volunteer mentors together!\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\nKato",
                  "vi": "Chào Kim,\nDạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.\nMình nghĩ bạn sẽ quan tâm khi nghe tin CLB Cộng đồng đang phát động chiến dịch tuyển thành viên và tìm kiếm ý tưởng hoạt động mới mẻ. Mình khá hào hứng khi biết tin này. Cá nhân mình nghĩ chúng ta nên tổ chức các lớp dạy kèm miễn phí hàng tuần cho trẻ em có hoàn cảnh khó khăn vì giáo dục mang lại sự thay đổi lâu dài. Hơn nữa, chúng mình cùng nhau đăng ký làm gia sư tình nguyện nhé!\nMình rất muốn biết bạn nghĩ sao về việc này. Mong sớm nhận tin từ bạn.\nBảo trọng nhé,\nKato"
            }
      ]
    },
    "email2": {
      "title": "Email 2: Gửi Quản lý CLB Cộng đồng (Formal)",
      "instruction": "Email 2: Email to the club manager (about 120-150 words).",
      "instructionVi": "Email 2: Gửi email cho quản lý câu lạc bộ (khoảng 120-150 từ).",
      "wordTarget": "120 - 150 từ (chuẩn 120 - 165 từ)",
      "minWords": 120,
      "maxWords": 165,
      "template": "Dear Club Manager,\nMy name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my thoughts and offer several practical suggestions regarding member recruitment and innovative community initiatives. I think this is an essential step forward.\nTo help expand our membership and enhance our community impact, I would like to make a few suggestions. First, we should partner with local high schools and universities to establish youth volunteer chapters, offering certificates of recognition. Second, it would be better to launch an \"Eco-Exchange\" program where citizens trade recyclable plastics and paper for potted plants. Finally, we could organize monthly family community dinners to connect residents and raise charitable funds. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Đề xuất 1: [đề xuất thứ nhất] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "the club should establish partnerships with local high schools and universities to recruit energetic youth volunteers",
                              "vi": "CLB nên hợp tác với các trường học địa phương để tuyển tình nguyện viên trẻ nhiệt huyết"
                        },
                        {
                              "en": "we should award official community service certificates to students who contribute over twenty voluntary hours",
                              "vi": "chúng ta nên cấp chứng nhận giờ tình nguyện chính quy cho các bạn cống hiến trên 20 giờ"
                        }
                  ]
            },
            {
                  "name": "2. Đề xuất 2: [đề xuất thứ hai] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "it would be highly effective to launch an 'Eco-Exchange Program' where residents trade recyclable plastics for potted herbs",
                              "vi": "sẽ rất hiệu quả nếu mở chương trình 'Đổi Rác Lấy Cây' để bà con đổi rác nhựa lấy thảo mộc"
                        },
                        {
                              "en": "the club should organize weekly elderly companionship visits and free basic computer tutoring for seniors",
                              "vi": "CLB nên tổ chức thăm hỏi người cao tuổi hàng tuần và dạy máy tính cơ bản miễn phí"
                        }
                  ]
            },
            {
                  "name": "3. Đề xuất 3: [đề xuất thứ ba] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we could host monthly community charity banquets where neighbors cook together to raise charitable funds",
                              "vi": "chúng ta có thể tổ chức tiệc ẩm thực thiện nguyện hàng tháng nơi bà con cùng nấu ăn gây quỹ"
                        },
                        {
                              "en": "the club should establish structured mentorship circles pairing senior volunteers with newly enrolled members",
                              "vi": "CLB nên ghép đôi các tình nguyện viên kỳ cựu hướng dẫn người mới tham gia"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 199,
                  "en": "Dear Club Manager,\nMy name is Kato, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my thoughts and offer several practical suggestions regarding member recruitment and activity development. I think this is an essential initiative.\nTo attract enthusiastic newcomers and strengthen our social impact, I would like to make a few suggestions. First, we should establish a digital outreach campaign across university portals, emphasizing verified community service hours for student volunteers. Second, it would be highly effective to launch a \"Green Saturday\" clean-up campaign coupled with an eco-craft fair to showcase our club's vitality. Finally, we could create mentoring circles where experienced members guide junior volunteers in organizing grassroots charity drives. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\nKato",
                  "vi": "Kính gửi Quản lý Câu lạc bộ,\nTên tôi là Kato, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.\nTôi viết email này để hồi đáp thông báo của bạn nhằm chia sẻ suy nghĩ và đưa ra một vài đề xuất thực tế liên quan đến việc tuyển thêm hội viên và phát triển các hoạt động. Tôi nghĩ đây là một sáng kiến hết sức cần thiết.\nĐể thu hút những gương mặt mới nhiệt huyết và nâng cao tác động xã hội của chúng ta, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, chúng ta nên triển khai một chiến dịch truyền thông trực tuyến qua các diễn đàn sinh viên đại học, nhấn mạnh việc cấp chứng nhận giờ tình nguyện cộng đồng chính quy. Thứ hai, sẽ rất hiệu quả nếu tổ chức chương trình dọn dẹp vệ sinh \"Thứ Bảy Xanh\" kết hợp hội chợ đồ tái chế thủ công để lan tỏa sức sống của câu lạc bộ. Cuối cùng, chúng ta có thể thành lập các nhóm hướng dẫn, nơi các hội viên kỳ cựu đồng hành cùng các tình nguyện viên trẻ tổ chức các dự án từ thiện thiết thực. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ hoàn thành mục tiêu.\nCảm ơn bạn đã dành thời gian xem xét các đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.\nTrân trọng,\nKato"
            }
      ]
    }
  },
  "Music club": {
    "title": "Music club (Concert Noise Complaints)",
    "badge": "Luyện đề Part 04 (Đề 5)",
    "notice": "Dear members,\nAs you know, we regularly hold concerts at our clubs in the evenings. Unfortunately, there have been complaints from people living in the area. If we don't do something about this situation, maybe we will have to stop the concerts. I would like to know what you think about this and what can we do to solve this problem?",
    "noticeVi": "Kính gửi các thành viên,\nNhư các bạn đã biết, chúng ta thường xuyên tổ chức các buổi hòa nhạc tại câu lạc bộ vào các buổi tối. Thật không may, đã có những lời phàn nàn từ người dân sống trong khu vực lân cận. Nếu chúng ta không có biện pháp xử lý tình trạng này, có thể chúng ta sẽ phải dừng tổ chức các buổi hòa nhạc. Tôi muốn biết suy nghĩ của bạn về điều này và chúng ta có thể làm gì để giải quyết vấn đề trên?",
    "promptAnalysis": {
      "topic": "Xử lý các khiếu nại về tiếng ồn từ các buổi hòa nhạc buổi tối của CLB để tránh nguy cơ bị dừng hoạt động",
      "task1": "Viết email ngắn cho bạn (~50 từ): Bày tỏ sự lo lắng khi nghe tin các buổi hòa nhạc có thể bị hủy, gợi ý chuyển sang chơi nhạc mộc acoustic và kết thúc sớm hơn",
      "task2": "Viết email cho Quản lý CLB (120-150 từ): Đồng cảm với sự bất tiện của cư dân xung quanh và đề xuất 3 giải pháp thực tế (lắp đặt mút xốp cách âm và rèm giảm âm, điều chỉnh giờ kết thúc trước 9:30 tối, chuyển sang các buổi diễn acoustic không dùng loa công suất lớn)"
    },
    "email1": {
      "title": "Email 1: Gửi bạn bè (Informal)",
      "instruction": "Email 1: Email to your friend (about 50 words).",
      "instructionVi": "Email 1: Gửi email cho bạn của bạn (khoảng 50 từ).",
      "wordTarget": "Khoảng 50 từ (45 - 60 từ)",
      "minWords": 45,
      "maxWords": 65,
      "template": "Dear [Tên bạn],\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that neighbors have complained about noise from our evening concerts, and they might be canceled. I was quite concerned when I found out about it. Personally, I think we should switch to acoustic unplugged music and wrap up by 9:00 PM to respect local residents. Moreover, let's attend the emergency club meeting together!\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Bày tỏ Cảm xúc (Emotions)",
                  "items": [
                        {
                              "en": "quite surprised and concerned",
                              "vi": "khá ngạc nhiên và lo lắng"
                        },
                        {
                              "en": "quite worried",
                              "vi": "khá lo lắng"
                        }
                  ]
            },
            {
                  "name": "2. [ý kiến & lý do] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "switching to unplugged acoustic music is sensible because loud electric amplifiers disturb the neighborhood",
                              "vi": "chuyển sang chơi nhạc mộc là hợp lý vì loa điện tử công suất lớn gây phiền xóm làng"
                        },
                        {
                              "en": "we must respect our neighbors because keeping a peaceful environment ensures the club can operate long-term",
                              "vi": "chúng ta phải tôn trọng hàng xóm vì môi trường yên tĩnh giúp CLB hoạt động lâu dài"
                        }
                  ]
            },
            {
                  "name": "3. [phát triển thêm ý] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we could rehearse some gentle acoustic ballad arrangements for our next session",
                              "vi": "chúng mình có thể tập trước vài bản phối ballad acoustic nhẹ nhàng cho buổi tới"
                        },
                        {
                              "en": "we should invite our local neighbors to attend a free tea-tasting afternoon concert",
                              "vi": "chúng mình nên mời bà con xung quanh đến dự một buổi hòa nhạc thưởng trà miễn phí"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 88,
                  "en": "Dear Kim,\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that local residents have complained about noise during our evening concerts, putting future gigs at risk. I was quite worried when I found out about it. Personally, I think we should lower the amplification volume and transition to soothing acoustic sets. Moreover, we could invite our neighbors to a free friendly concert!\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\nKato",
                  "vi": "Chào Kim,\nDạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.\nMình nghĩ bạn sẽ lo lắng khi nghe tin người dân địa phương đã phàn nàn về tiếng ồn trong các buổi hòa nhạc buổi tối, khiến các đêm diễn tương lai có nguy cơ bị hủy bỏ. Mình khá lo lắng khi biết tin này. Cá nhân mình thấy chúng ta nên giảm âm lượng loa và chuyển hướng sang các tiết mục acoustic nhẹ nhàng. Hơn nữa, chúng mình có thể mời cư dân xung quanh đến xem một buổi diễn tri ân miễn phí!\nMình rất muốn biết bạn nghĩ gì về việc này. Mong sớm nhận tin từ bạn.\nBảo trọng nhé,\nKato"
            }
      ]
    },
    "email2": {
      "title": "Email 2: Gửi Quản lý CLB Âm nhạc (Formal)",
      "instruction": "Email 2: Email to the club manager (about 120-150 words).",
      "instructionVi": "Email 2: Gửi email cho quản lý câu lạc bộ (khoảng 120-150 từ).",
      "wordTarget": "120 - 150 từ (chuẩn 120 - 165 từ)",
      "minWords": 120,
      "maxWords": 165,
      "template": "Dear Club Manager,\nMy name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email regarding the recent noise complaints from nearby residents. I fully acknowledge that this is a critical issue that requires prompt remediation.\nTo preserve our musical performances while maintaining harmonious neighborhood relations, I would like to make a few suggestions. First, we should install soundproofing acoustic curtains and foam panels around our performance hall to prevent sound leakage. Second, it would be better to reschedule all live performances to conclude no later than 9:30 PM on weekdays. Finally, we could introduce unplugged acoustic genres and invite neighboring residents to complimentary coffee recitals. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Đề xuất 1: [đề xuất thứ nhất] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "the club should immediately install acoustic soundproofing panels and dense curtains on rehearsing room walls",
                              "vi": "CLB nên lập tức lắp mút tiêu âm và rèm cách âm dày trên các vách phòng tập"
                        },
                        {
                              "en": "we should replace vibrating acoustic drum kits with electronic drum sets connected directly to individual headphones",
                              "vi": "chúng ta nên thay trống cơ bằng trống điện tử kết nối tai nghe để giảm tối đa rung chấn"
                        }
                  ]
            },
            {
                  "name": "2. Đề xuất 2: [đề xuất thứ hai] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "it would be better to enforce strict volume limits on all amplifiers and conclude all performances by 9:00 PM",
                              "vi": "sẽ tốt hơn nếu siết chặt âm lượng loa đài và kết thúc mọi buổi biểu diễn trước 9:00 tối"
                        },
                        {
                              "en": "the management should reschedule heavy percussion rehearsals to Saturday afternoons rather than late weekday nights",
                              "vi": "ban quản lý nên dời lịch tập trống gõ nặng sang chiều thứ Bảy thay vì tối muộn trong tuần"
                        }
                  ]
            },
            {
                  "name": "3. Đề xuất 3: [đề xuất thứ ba] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we could transition towards soothing unplugged acoustic sets and classical chamber music for evening shows",
                              "vi": "chúng ta có thể chuyển hướng sang biểu diễn nhạc mộc nhẹ nhàng và nhạc thính phòng vào buổi tối"
                        },
                        {
                              "en": "the club should host a friendly community open-house concert on Sunday afternoons to foster goodwill with neighbors",
                              "vi": "CLB nên tổ chức buổi hòa nhạc giao lưu thân thiện vào chiều chủ nhật để gắn kết với cư dân láng giềng"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 198,
                  "en": "Dear Club Manager,\nMy name is Kato, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email regarding the noise disturbances reported by nearby residents. I fully recognize that resolving this grievance is paramount to ensuring our club's continuous operation.\nTo mitigate noise concerns while preserving our vibrant musical culture, I would like to make a few suggestions. First, our club should invest in acoustic wall insulation and double-glazed windows to effectively contain excessive sound. Second, it would be beneficial to enforce strict volume limits on electric amplifiers and ensure concerts finish promptly by 9:15 PM. Finally, we could host an informal community appreciation matinée on Sunday afternoons to foster goodwill with local homeowners. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\nKato",
                  "vi": "Kính gửi Quản lý Câu lạc bộ,\nTên tôi là Kato, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.\nTôi viết email này để hồi đáp phản ánh của bạn liên quan đến các khiếu nại về tiếng ồn từ cư dân xung quanh. Tôi hoàn toàn nhận thức được rằng việc giải quyết dứt điểm vấn đề này là tối quan trọng để duy trì hoạt động lâu dài của câu lạc bộ.\nĐể giảm thiểu tiếng ồn trong khi vẫn gìn giữ không gian âm nhạc sôi động, tôi xin phép đưa ra một vài đề xuất. Thứ nhất, câu lạc bộ nên đầu tư vật liệu cách âm trên tường và cửa kính hai lớp để ngăn chặn hiệu quả việc phát tán âm thanh ra ngoài. Thứ hai, sẽ rất hữu ích nếu thiết lập mức giới hạn âm lượng nghiêm ngặt đối với loa ampli và đảm bảo các buổi diễn kết thúc đúng 9:15 tối. Cuối cùng, chúng ta có thể tổ chức buổi hòa nhạc tri ân cộng đồng nhẹ nhàng vào chiều Chủ Nhật để tạo dựng mối quan hệ hòa nhã với các gia đình lân cận. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ hoàn thành mục tiêu.\nCảm ơn bạn đã dành thời gian xem xét đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.\nTrân trọng,\nKato"
            }
      ]
    }
  },
  "English club 1": {
    "title": "English club 1 (Talk Show Canceled)",
    "badge": "Luyện đề Part 04 (Đề 6.1)",
    "notice": "Dear members,\nWe are sorry to inform you that the Talk Show has been canceled as the guests are unexpectedly busy. We do not have any back-up plan, so there will be no meeting this week. We will inform you of the reopening of the Talk Show as soon as we can. We are sorry for the inconvenience.",
    "noticeVi": "Kính gửi các thành viên,\nChúng tôi rất tiếc phải thông báo rằng buổi Talk Show đã bị hủy do các khách mời đột xuất bận việc. Chúng tôi không có kế hoạch dự phòng nào, do đó tuần này sẽ không có buổi sinh hoạt nào diễn ra. Chúng tôi sẽ thông báo về việc mở lại buổi Talk Show sớm nhất có thể. Thành thật xin lỗi vì sự bất tiện này.",
    "promptAnalysis": {
      "topic": "Sự cố hủy buổi Talk Show tiếng Anh vào phút chót do khách mời bận việc đột xuất và câu lạc bộ không có kế hoạch dự phòng",
      "task1": "Viết email ngắn cho bạn (~50 từ): Bày tỏ sự hụt hẫng khi buổi Talk Show bị hủy đột ngột, rủ bạn cùng đến quán cà phê để tự luyện nói tiếng Anh",
      "task2": "Viết email cho Quản lý CLB (120-150 từ): Thông cảm với sự cố bất khả kháng nhưng thẳng thắn góp ý về việc thiếu phương án dự phòng và đề xuất 3 giải pháp thực tế (thành lập nhóm diễn giả dự bị, tổ chức buổi tranh biện/trò chơi tiếng Anh giữa các thành viên thay vì hủy bỏ hoàn toàn, xây dựng quy trình thông báo sớm)"
    },
    "email1": {
      "title": "Email 1: Gửi bạn bè (Informal)",
      "instruction": "Email 1: Email to your friend (about 50 words).",
      "instructionVi": "Email 1: Gửi email cho bạn của bạn (khoảng 50 từ).",
      "wordTarget": "Khoảng 50 từ (45 - 60 từ)",
      "minWords": 45,
      "maxWords": 65,
      "template": "Dear [Tên bạn],\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that our English Club's talk show has been canceled because the speakers are busy, and there's no meeting this week. I was quite disappointed when I found out about it. Personally, I think we should meet at our favorite coffee shop to practice English conversation together anyway. Moreover, let's invite two other club members!\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Bày tỏ Cảm xúc (Emotions)",
                  "items": [
                        {
                              "en": "quite disappointed",
                              "vi": "khá thất vọng"
                        },
                        {
                              "en": "a bit surprised and sad",
                              "vi": "hơi bất ngờ và tiếc nuối"
                        }
                  ]
            },
            {
                  "name": "2. [ý kiến & lý do] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "canceling the entire session is unfortunate because we had spent hours preparing presentation topics",
                              "vi": "hủy toàn bộ buổi sinh hoạt là điều đáng tiếc vì chúng mình đã dành hàng giờ chuẩn bị chủ đề"
                        },
                        {
                              "en": "we should not waste our free weekend because consistent English speaking practice is vital for progress",
                              "vi": "chúng mình không nên lãng phí cuối tuần vì duy trì luyện nói tiếng Anh thường xuyên rất quan trọng"
                        }
                  ]
            },
            {
                  "name": "3. [phát triển thêm ý] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we could meet up at a quiet coffee shop to practice IELTS speaking topics together",
                              "vi": "chúng mình có thể gặp nhau ở quán cà phê yên tĩnh để cùng luyện nói các chủ đề IELTS"
                        },
                        {
                              "en": "I can bring some interesting conversation flashcards so we can debate in English for two hours",
                              "vi": "mình có thể mang vài bộ thẻ câu hỏi thú vị để chúng mình cùng tranh luận bằng tiếng Anh trong 2 tiếng"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 89,
                  "en": "Dear Kim,\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that this week's English talk show was abruptly canceled due to busy guests. I was quite disappointed when I found out about it as I had prepared several questions. Personally, I think we shouldn't waste our Saturday and should practice IELTS speaking together at Starbucks instead. Moreover, I can bring some topic flashcards!\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\nKato",
                  "vi": "Chào Kim,\nDạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.\nMình nghĩ bạn sẽ muốn biết tin buổi talk show tiếng Anh tuần này vừa bị hủy đột xuất vì các khách mời bận việc. Mình khá hụt hẫng khi biết tin vì mình đã chuẩn bị sẵn một số câu hỏi thú vị. Cá nhân mình nghĩ chúng mình không nên lãng phí buổi sáng thứ Bảy mà hãy cùng nhau ra Starbucks luyện nói IELTS nhé. Hơn nữa, mình có thể mang theo một số thẻ chủ đề flashcard!\nMình rất muốn biết bạn nghĩ gì. Mong sớm nhận được tin từ bạn.\nBảo trọng nhé,\nKato"
            }
      ]
    },
    "email2": {
      "title": "Email 2: Gửi Quản lý CLB Tiếng Anh (Formal)",
      "instruction": "Email 2: Email to the club manager (about 120-150 words).",
      "instructionVi": "Email 2: Gửi email cho quản lý câu lạc bộ (khoảng 120-150 từ).",
      "wordTarget": "120 - 150 từ (chuẩn 120 - 165 từ)",
      "minWords": 120,
      "maxWords": 165,
      "template": "Dear Club Manager,\nMy name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email regarding the sudden cancellation of this week's Talk Show. While I understand that unexpected scheduling conflicts arise, I believe that canceling the entire meeting is regrettable.\nTo prevent similar disruptions in the future and maintain active club participation, I would like to make a few suggestions. First, our management team should always maintain a roster of backup speakers from our senior alumni or university lecturers. Second, it would be better to organize peer-led English debates or vocabulary games whenever a guest speaker cancels, ensuring members still benefit from practice. Finally, the club should establish a prompt SMS or instant-messaging notification channel to alert members well in advance. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Đề xuất 1: [đề xuất thứ nhất] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "the organizing committee should maintain a standby roster of competent club seniors and local English lecturers",
                              "vi": "ban tổ chức nên lập danh sách dự phòng gồm các hội viên kỳ cựu và giảng viên tiếng Anh địa phương"
                        },
                        {
                              "en": "we should ensure every major event has a qualified backup speaker prepared at least three days in advance",
                              "vi": "chúng ta nên đảm bảo mỗi sự kiện lớn đều có diễn giả dự bị được chuẩn bị trước 3 ngày"
                        }
                  ]
            },
            {
                  "name": "2. Đề xuất 2: [đề xuất thứ hai] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "it would be highly effective to replace canceled formal talks with structured debates or interactive English board games",
                              "vi": "sẽ rất hiệu quả nếu thay các buổi tọa đàm bị hủy bằng các phiên tranh luận hoặc trò chơi tiếng Anh"
                        },
                        {
                              "en": "the club should never cancel a weekend session outright, but instead empower members to lead peer discussion circles",
                              "vi": "CLB không nên hủy hẳn buổi học mà hãy để hội viên tự điều phối các nhóm thảo luận tự do"
                        }
                  ]
            },
            {
                  "name": "3. Đề xuất 3: [đề xuất thứ ba] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we could establish an instant SMS or Telegram notification channel to alert members promptly when schedules change",
                              "vi": "chúng ta có thể lập kênh thông báo khẩn qua SMS hoặc Telegram để báo sớm cho hội viên khi có thay đổi"
                        },
                        {
                              "en": "the club could offer affected members complimentary workshop materials or priority seating for the next talk show",
                              "vi": "CLB có thể tặng tài liệu bổ trợ hoặc ưu tiên đặt chỗ hàng đầu trong buổi tọa đàm kế tiếp"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 205,
                  "en": "Dear Club Manager,\nMy name is Kato, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email regarding the last-minute cancellation of our scheduled Talk Show. While I understand that prominent guests can face sudden emergencies, I believe calling off the weekly session damages member enthusiasm.\nTo avoid complete session cancellations in future occurrences, I would like to make a few suggestions. First, the organizing committee should formulate a contingency roster of experienced club seniors or local teachers who can step in on short notice. Second, it would be highly effective to replace canceled lectures with structured group debates or interactive English board games. Finally, the club should implement a dedicated chat group to deliver timely updates and gather member feedback. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\nKato",
                  "vi": "Kính gửi Quản lý Câu lạc bộ,\nTên tôi là Kato, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.\nTôi viết email này để hồi đáp thông báo liên quan đến việc hủy buổi Talk Show vào phút chót. Mặc dù tôi thấu hiểu rằng các khách mời nổi tiếng có thể gặp phải lịch trình khẩn cấp, nhưng tôi tin rằng việc hủy bỏ toàn bộ buổi sinh hoạt tuần này sẽ làm giảm sút sự hào hứng của các hội viên.\nĐể tránh việc phải hủy bỏ hoàn toàn các buổi sinh hoạt trong tương lai, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, ban tổ chức nên xây dựng danh sách các diễn giả dự phòng gồm các cựu thành viên kỳ cựu hoặc giáo viên địa phương, những người có thể sẵn sàng hỗ trợ khi nhận thông báo gấp. Thứ hai, sẽ rất hiệu quả nếu thay thế buổi thuyết trình bị hủy bằng các phiên tranh biện theo nhóm hoặc trò chơi cờ bàn tiếng Anh tương tác. Cuối cùng, câu lạc bộ nên vận hành một kênh tin nhắn tức thì để cập nhật thông tin kịp thời và lắng nghe phản hồi của hội viên. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ hoàn thành mục tiêu.\nCảm ơn bạn đã dành thời gian xem xét đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.\nTrân trọng,\nKato"
            }
      ]
    }
  },
  "English club 2": {
    "title": "English club 2 (Benefits of English Talk Show)",
    "badge": "Luyện đề Part 04 (Đề 6.2)",
    "notice": "Dear members,\nOur club is going to sponsor a talk show to share about the benefits of English and attract more members. What lecture should the talk show offer and what makes you think a good guest speaker? Give your opinions.",
    "noticeVi": "Kính gửi các thành viên,\nCâu lạc bộ của chúng ta sắp tài trợ cho một buổi talk show nhằm chia sẻ về lợi ích của tiếng Anh và thu hút thêm thành viên. Buổi talk show nên có bài thuyết trình về chủ đề gì và theo bạn điều gì làm nên một diễn giả khách mời tốt? Hãy nêu ý kiến của bạn.",
    "promptAnalysis": {
      "topic": "Lựa chọn chủ đề bài thuyết trình về lợi ích của tiếng Anh và các tiêu chí đánh giá một diễn giả khách mời xuất sắc để thu hút thành viên mới",
      "task1": "Viết email ngắn cho bạn (~50 từ): Chia sẻ sự ủng hộ về buổi talk show, gợi ý chủ đề 'Tiếng Anh mở ra cơ hội làm việc quốc tế và học bổng', rủ bạn cùng đăng ký tham gia",
      "task2": "Viết email cho Quản lý CLB (120-150 từ): Nêu quan điểm ủng hộ và đề xuất 3 giải pháp thực tế (chủ đề bài nói 'Tiếng Anh - Tấm hộ chiếu toàn cầu', tiêu chí diễn giả truyền cảm hứng có phong cách hài hước và giàu kinh nghiệm thực tế, bổ sung mini-game giao lưu tương tác nhận học bổng)"
    },
    "email1": {
      "title": "Email 1: Gửi bạn bè (Informal)",
      "instruction": "Email 1: Email to your friend (about 50 words).",
      "instructionVi": "Email 1: Gửi email cho bạn của bạn (khoảng 50 từ).",
      "wordTarget": "Khoảng 50 từ (45 - 60 từ)",
      "minWords": 45,
      "maxWords": 65,
      "template": "Dear [Tên bạn],\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that our English Club is sponsoring a talk show about the benefits of English to attract new members. I was quite excited when I found out about it. Personally, I think the speaker should focus on global job opportunities and overseas study scholarships. Moreover, let's invite our classmates to attend together!\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Bày tỏ Cảm xúc (Emotions)",
                  "items": [
                        {
                              "en": "quite excited",
                              "vi": "khá hào hứng"
                        },
                        {
                              "en": "absolutely thrilled",
                              "vi": "cực kỳ phấn khích"
                        }
                  ]
            },
            {
                  "name": "2. [ý kiến & lý do] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "learning about real-world English benefits is crucial because English opens up lucrative multinational career prospects",
                              "vi": "học về lợi ích tiếng Anh rất thiết thực vì tiếng Anh mở ra cơ hội làm việc tại tập đoàn đa quốc gia"
                        },
                        {
                              "en": "strong language fluency gives graduates a decisive competitive advantage in international scholarship applications",
                              "vi": "thành thạo ngoại ngữ giúp sinh viên có lợi thế cạnh tranh vượt trội khi xin học bổng quốc tế"
                        }
                  ]
            },
            {
                  "name": "3. [phát triển thêm ý] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we should register early so we do not miss out on complimentary seminar seats",
                              "vi": "chúng mình nên đăng ký sớm để không bị lỡ mất chỗ ngồi miễn phí trong hội thảo"
                        },
                        {
                              "en": "we can prepare some questions regarding job interviews in English to ask the guest keynote speaker",
                              "vi": "chúng mình có thể chuẩn bị vài câu hỏi về phỏng vấn xin việc bằng tiếng Anh để giao lưu với diễn giả"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 87,
                  "en": "Dear Kim,\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that our English Club is hosting a sponsored seminar discussing the benefits of English proficiency. I was quite excited when I found out about it. Personally, I think the talk should highlight multinational employment and remote work opportunities because that directly interests university students. Moreover, let's register early to secure seats!\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\nKato",
                  "vi": "Chào Kim,\nDạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.\nMình nghĩ bạn sẽ rất quan tâm khi nghe tin CLB Tiếng Anh sắp tổ chức một buổi tọa đàm về lợi ích của việc thành thạo tiếng Anh. Mình khá hào hứng khi biết tin này. Cá nhân mình thấy bài thuyết trình nên nhấn mạnh cơ hội làm việc tại các tập đoàn đa quốc gia và làm việc từ xa vì điều đó trực tiếp thu hút sinh viên. Hơn nữa, chúng mình cùng đăng ký sớm để giữ chỗ nhé!\nMình rất muốn biết bạn nghĩ gì. Mong sớm nhận được tin từ bạn.\nBảo trọng nhé,\nKato"
            }
      ]
    },
    "email2": {
      "title": "Email 2: Gửi Quản lý CLB Tiếng Anh (Formal)",
      "instruction": "Email 2: Email to the club manager (about 120-150 words).",
      "instructionVi": "Email 2: Gửi email cho quản lý câu lạc bộ (khoảng 120-150 từ).",
      "wordTarget": "120 - 150 từ (chuẩn 120 - 165 từ)",
      "minWords": 120,
      "maxWords": 165,
      "template": "Dear Club Manager,\nMy name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my perspective regarding the upcoming talk show on the benefits of mastering English. I think this is an excellent initiative to recruit new members.\nTo ensure the event achieves outstanding engagement, I would like to make a few suggestions. First, I propose the lecture topic \"English as a Passport to Global Careers and Academic Excellence\", focusing on tangible career advantages. Second, it would be better to invite a dynamic bilingual guest speaker who possesses proven international experience and engaging storytelling abilities rather than pure academic theory. Finally, we could incorporate an interactive networking segment where attendees test their pronunciation with AI tools and win trial club memberships. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Đề xuất 1: [đề xuất thứ nhất] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "the presentation should focus on 'English as a Strategic Career Accelerator in Modern Multinational Corporations'",
                              "vi": "bài thuyết trình nên tập trung vào chủ đề 'Tiếng Anh - Đòn bẩy thăng tiến tại các tập đoàn đa quốc gia'"
                        },
                        {
                              "en": "we should highlight concrete salary statistics and overseas employment opportunities to inspire university attendees",
                              "vi": "chúng ta nên nêu các con số thống kê mức lương thực tế và cơ hội việc làm nước ngoài"
                        }
                  ]
            },
            {
                  "name": "2. Đề xuất 2: [đề xuất thứ hai] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "it would be ideal to invite an energetic bilingual executive who conquered language barriers from humble beginnings",
                              "vi": "sẽ rất lý tưởng nếu mời một lãnh đạo song ngữ từng tự học vượt khó từ mất gốc"
                        },
                        {
                              "en": "the guest speaker should deliver actionable daily habit roadmaps rather than generic motivational advice",
                              "vi": "diễn giả nên chia sẻ lộ trình rèn luyện thói quen mỗi ngày thay vì những lời khuyên chung chung"
                        }
                  ]
            },
            {
                  "name": "3. Đề xuất 3: [đề xuất thứ ba] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we could incorporate interactive pronunciation mini-games and gift complimentary club memberships to winners",
                              "vi": "chúng ta có thể lồng ghép các trò chơi phát âm vui nhộn và tặng thẻ sinh hoạt CLB cho người thắng"
                        },
                        {
                              "en": "the club could distribute structured self-study toolkits and curated podcast recommendation lists to all participants",
                              "vi": "CLB có thể phát cẩm nang tự học và danh sách podcast chất lượng cho toàn bộ người tham dự"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 206,
                  "en": "Dear Club Manager,\nMy name is Kato, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my thoughts and offer several practical suggestions regarding the sponsored seminar on the multifaceted benefits of English. I think this is a timely initiative.\nTo maximize the seminar's impact and appeal, I would like to make a few suggestions. First, the presentation should center on \"Unlocking International Horizons: English for Workplace Mobility\", providing concrete evidence of salary growth and study-abroad prospects. Second, our ideal guest speaker should be an energetic professional who successfully transitioned from a beginner to an executive at a multinational firm. Finally, the event should feature a lively Q&A session where participants receive personalized speaking roadmaps and complimentary club passes. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\nKato",
                  "vi": "Kính gửi Quản lý Câu lạc bộ,\nTên tôi là Kato, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.\nTôi viết email này để chia sẻ suy nghĩ và đưa ra một vài đề xuất thực tế liên quan đến buổi tọa đàm được tài trợ về những lợi ích đa dạng của tiếng Anh. Tôi nghĩ đây là một sáng kiến hết sức kịp thời.\nĐể tối đa hóa sức hút và tác động của buổi hội thảo, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, bài thuyết trình nên tập trung vào chủ đề \"Mở khóa những chân trời quốc tế: Tiếng Anh cho sự thăng tiến nơi công sở\", đưa ra các minh chứng cụ thể về gia tăng thu nhập và triển vọng du học. Thứ hai, diễn giả lý tưởng nên là một người đi làm năng động từng tự mình vượt khó từ mất gốc tiếng Anh để trở thành quản lý cấp cao tại tập đoàn đa quốc gia. Cuối cùng, sự kiện nên có phần hỏi đáp sôi nổi, nơi người tham dự được tư vấn lộ trình luyện nói cá nhân hóa và nhận thẻ sinh hoạt câu lạc bộ miễn phí. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ hoàn thành mục tiêu.\nCảm ơn bạn đã dành thời gian xem xét các đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.\nTrân trọng,\nKato"
            }
      ]
    }
  },
  "Book club 1": {
    "title": "Book club 1 (Invite Famous Author)",
    "badge": "Luyện đề Part 04 (Đề 7.1)",
    "notice": "Dear members,\nOur club is going to organize an event and invite a famous book author. What topic should he share about and who should we invite. Our club especially wants to attract both young and elderly members.",
    "noticeVi": "Kính gửi các thành viên,\nCâu lạc bộ của chúng ta sắp tổ chức một sự kiện và mời một tác giả sách nổi tiếng. Tác giả nên chia sẻ về chủ đề gì và chúng ta nên mời ai? Câu lạc bộ đặc biệt muốn thu hút cả thành viên trẻ tuổi lẫn người cao tuổi.",
    "promptAnalysis": {
      "topic": "Mời một tác giả sách nổi tiếng và lựa chọn chủ đề buổi giao lưu để kết nối, thu hút cả giới trẻ lẫn người lớn tuổi",
      "task1": "Viết email ngắn cho bạn (~50 từ): Chia sẻ cảm xúc vui mừng khi CLB mời nhà văn nổi tiếng, gợi ý nhà văn chuyên viết về tình cảm gia đình và tuổi thơ, rủ bạn mang sách đi xin chữ ký",
      "task2": "Viết email cho Quản lý CLB (120-150 từ): Nêu quan điểm ủng hộ và đề xuất 3 giải pháp thực tế (mời nhà văn được mọi thế hệ yêu mến, chủ đề 'Nuôi dưỡng thói quen đọc sách suốt đời và kết nối các thế hệ', tổ chức bàn ký tặng sách và trà đàm giao lưu)"
    },
    "email1": {
      "title": "Email 1: Gửi bạn bè (Informal)",
      "instruction": "Email 1: Email to your friend (about 50 words).",
      "instructionVi": "Email 1: Gửi email cho bạn của bạn (khoảng 50 từ).",
      "wordTarget": "Khoảng 50 từ (45 - 60 từ)",
      "minWords": 45,
      "maxWords": 65,
      "template": "Dear [Tên bạn],\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that our Book Club is inviting a famous author to host an event for both youth and seniors. I was quite excited when I found out about it. Personally, I think we should invite author Nguyen Nhat Anh to talk about childhood memories and family bonds because his heartwarming books touch all generations. Moreover, let's bring our copies to get them signed!\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Bày tỏ Cảm xúc (Emotions)",
                  "items": [
                        {
                              "en": "quite excited",
                              "vi": "khá hào hứng"
                        },
                        {
                              "en": "absolutely thrilled",
                              "vi": "cực kỳ phấn khích"
                        }
                  ]
            },
            {
                  "name": "2. [ý kiến & lý do] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "inviting writer Nguyen Nhat Anh is wonderful because his nostalgic childhood stories resonate across all generations",
                              "vi": "mời nhà văn Nguyễn Nhật Ánh rất tuyệt vời vì truyện tuổi thơ của ông chạm đến mọi thế hệ"
                        },
                        {
                              "en": "meeting an acclaimed author in person will ignite our love for creative reading and imaginative writing",
                              "vi": "gặp gỡ tác giả nổi tiếng ngoài đời sẽ thổi bùng niềm say mê đọc sách và sáng tác"
                        }
                  ]
            },
            {
                  "name": "3. [phát triển thêm ý] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we should bring our beloved copies to get author autographs and take souvenir photos",
                              "vi": "chúng mình nên mang theo những cuốn sách yêu thích để xin chữ ký và chụp ảnh kỷ niệm"
                        },
                        {
                              "en": "we can reread our favorite chapters beforehand so we can share our thoughts during the Q&A",
                              "vi": "chúng mình có thể đọc lại những chương truyện hay nhất trước để chia sẻ trong phần hỏi đáp"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 90,
                  "en": "Dear Kim,\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that our Book Club plans to host a meet-and-greet with a celebrated author for readers of all ages. I was quite thrilled when I found out about it. Personally, I think inviting writer Nguyen Nhat Anh to discuss nostalgic youth memories would be wonderful. Moreover, let's bring our books early to get author autographs!\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\nKato",
                  "vi": "Chào Kim,\nDạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.\nMình nghĩ bạn sẽ thích nghe tin CLB Sách đang dự định tổ chức buổi giao lưu với một nhà văn nổi tiếng dành cho độc giả mọi lứa tuổi. Mình khá hào hứng khi biết tin này. Cá nhân mình thấy việc mời nhà văn Nguyễn Nhật Ánh chia sẻ về những ký ức thanh xuân hoài niệm sẽ vô cùng tuyệt vời. Hơn nữa, chúng mình cùng mang sách đến sớm để xin chữ ký tác giả nhé!\nMình rất muốn biết bạn nghĩ gì về việc này. Mong sớm nhận tin từ bạn.\nBảo trọng nhé,\nKato"
            }
      ]
    },
    "email2": {
      "title": "Email 2: Gửi Quản lý CLB Sách (Formal)",
      "instruction": "Email 2: Email to the club manager (about 120-150 words).",
      "instructionVi": "Email 2: Gửi email cho quản lý câu lạc bộ (khoảng 120-150 từ).",
      "wordTarget": "120 - 150 từ (chuẩn 120 - 165 từ)",
      "minWords": 120,
      "maxWords": 165,
      "template": "Dear Club Manager,\nMy name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my recommendations regarding the author invitation event designed for both young and senior readers. I think this is a great idea.\nTo foster deep intergenerational engagement, I would like to make a few suggestions. First, we should invite an acclaimed author known for emotional life memoirs and coming-of-age literature, which naturally appeal to adolescents and grandparents alike. Second, it would be better to select the topic \"The Timeless Joy of Reading and Bridging Generational Divides\". Finally, we could organize an exclusive book-signing session alongside an informal tea circle where attendees share favorite excerpts. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Đề xuất 1: [đề xuất thứ nhất] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "the club should invite a beloved novelist whose evocative works appeal to both adolescents and senior citizens",
                              "vi": "CLB nên mời một nhà văn có những tác phẩm giàu cảm xúc cuốn hút cả thiếu niên lẫn người cao tuổi"
                        },
                        {
                              "en": "we should invite celebrated authors such as Nguyen Nhat Anh to share memorable childhood memories and writing inspiration",
                              "vi": "chúng ta nên mời các tác giả được yêu thích như Nguyễn Nhật Ánh để chia sẻ ký ức tuổi thơ"
                        }
                  ]
            },
            {
                  "name": "2. Đề xuất 2: [đề xuất thứ hai] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "it would be wonderful to center the discussion on 'The Timeless Power of Literature in Bridging Generational Divides'",
                              "vi": "sẽ rất tuyệt nếu tọa đàm xoay quanh chủ đề 'Sức mạnh của văn học trong việc kết nối các thế hệ'"
                        },
                        {
                              "en": "the presentation should explore how timeless literary classics foster empathy, emotional resilience, and family bonding",
                              "vi": "bài nói chuyện nên khám phá cách các tác phẩm văn học nuôi dưỡng sự thấu cảm và tình cảm gia đình"
                        }
                  ]
            },
            {
                  "name": "3. Đề xuất 3: [đề xuất thứ ba] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we could organize an interactive book-signing session accompanied by an intimate tea and coffee reception",
                              "vi": "chúng ta có thể tổ chức buổi ký tặng sách kết hợp tiệc trà ấm cúng"
                        },
                        {
                              "en": "the club could arrange a communal book swap corner where young readers and seniors exchange cherished volumes",
                              "vi": "CLB có thể bố trí góc đổi sách nơi các bạn trẻ và người cao tuổi tặng nhau những cuốn sách hay"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 198,
                  "en": "Dear Club Manager,\nMy name is Kato, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my thoughts and offer several practical suggestions regarding our upcoming literary event featuring a celebrated guest author. I think this is a fantastic initiative.\nTo bridge our club's diverse age demographics, I would like to make a few suggestions. First, I propose inviting a beloved national novelist whose works depict nostalgic family memories and coming-of-age struggles, captivating both teenagers and retirees. Second, it would be ideal to explore the theme \"Reading as an Emotional Anchor in Fast-Paced Modern Times\". Finally, the event could conclude with an interactive author Q&A and a communal book exchange corner. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\nKato",
                  "vi": "Kính gửi Quản lý Câu lạc bộ,\nTên tôi là Kato, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.\nTôi viết email này để chia sẻ suy nghĩ và đưa ra một vài đề xuất thực tế liên quan đến sự kiện văn học sắp tới cùng tác giả khách mời nổi tiếng. Tôi nghĩ đây là một sáng kiến vô cùng tuyệt vời.\nĐể kết nối các nhóm độ tuổi đa dạng trong câu lạc bộ, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, tôi đề xuất mời một tiểu thuyết gia quốc dân được yêu mến, người có các tác phẩm khắc họa ký ức gia đình và hành trình trưởng thành, vốn thu hút cả giới trẻ lẫn người lớn tuổi. Thứ hai, sẽ rất lý tưởng nếu chủ đề buổi nói chuyện xoay quanh \"Đọc sách như điểm tựa tinh thần giữa nhịp sống hiện đại hối hả\". Cuối cùng, sự kiện có thể khép lại bằng phần giao lưu hỏi đáp với tác giả và một góc trao đổi sách cũ cộng đồng. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ hoàn thành mục tiêu.\nCảm ơn bạn đã dành thời gian xem xét các đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.\nTrân trọng,\nKato"
            }
      ]
    }
  },
  "Book club 2": {
    "title": "Book club 2 (Library Closure & E-books)",
    "badge": "Luyện đề Part 04 (Đề 7.2)",
    "notice": "Dear members,\nThe local authorities will close the library next year because many people prefer reading online books. The club wants members to give their opinions and suggestions on this matter.",
    "noticeVi": "Kính gửi các thành viên,\nChính quyền địa phương sẽ đóng cửa thư viện vào năm tới vì nhiều người hiện nay thích đọc sách điện tử trực tuyến hơn. Câu lạc bộ muốn các thành viên đưa ra ý kiến và đề xuất về vấn đề này.",
    "promptAnalysis": {
      "topic": "Chính quyền địa phương dự định đóng cửa thư viện công cộng do xu hướng đọc sách điện tử trực tuyến",
      "task1": "Viết email ngắn cho bạn (~50 từ): Bày tỏ sự sốc/tiếc nuối khi thư viện có nguy cơ bị đóng cửa, nhấn mạnh giá trị của không gian đọc sách giấy và rủ bạn ký đơn kiến nghị giữ lại thư viện",
      "task2": "Viết email cho Quản lý CLB (120-150 từ): Bày tỏ sự phản đối việc đóng cửa vội vàng và đề xuất 3 giải pháp thực tế (nâng cấp thư viện thành mô hình kết hợp số hóa và sách giấy, bổ sung quán cà phê sách và phòng học nhóm, tổ chức câu lạc bộ đọc sách và workshop cuối tuần)"
    },
    "email1": {
      "title": "Email 1: Gửi bạn bè (Informal)",
      "instruction": "Email 1: Email to your friend (about 50 words).",
      "instructionVi": "Email 1: Gửi email cho bạn của bạn (khoảng 50 từ).",
      "wordTarget": "Khoảng 50 từ (45 - 60 từ)",
      "minWords": 45,
      "maxWords": 65,
      "template": "Dear [Tên bạn],\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that local authorities are planning to shut down our library next year because of online e-books. I was quite shocked and upset when I found out about it. Personally, I think the library is an irreplaceable quiet sanctuary that screens cannot replace. Moreover, let's sign the community petition to save it!\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Bày tỏ Cảm xúc (Emotions)",
                  "items": [
                        {
                              "en": "quite shocked and saddened",
                              "vi": "khá sốc và buồn bã"
                        },
                        {
                              "en": "deeply distressed",
                              "vi": "vô cùng lo lắng và phiền lòng"
                        }
                  ]
            },
            {
                  "name": "2. [ý kiến & lý do] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "closing the municipal library is a tragic loss because it is an essential quiet sanctuary for students and seniors",
                              "vi": "đóng cửa thư viện là mất mát lớn vì đó là không gian yên tĩnh thiết yếu cho học sinh và người già"
                        },
                        {
                              "en": "physical paper books offer an irreplaceable reading experience that digital screens can never fully replicate",
                              "vi": "sách giấy truyền thống mang lại trải nghiệm đọc vô giá mà màn hình điện tử không thể thay thế"
                        }
                  ]
            },
            {
                  "name": "3. [phát triển thêm ý] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we should join the public petition campaign to urge the city council to keep the library open",
                              "vi": "chúng mình nên tham gia chiến dịch ký đơn thỉnh nguyện kêu gọi hội đồng thành phố giữ lại thư viện"
                        },
                        {
                              "en": "we can organize a collective study session at the library this Saturday to demonstrate community support",
                              "vi": "chúng mình có thể cùng đến thư viện học nhóm vào thứ Bảy này để thể hiện sự ủng hộ"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 90,
                  "en": "Dear Kim,\nHow's it going? I hope you're doing well.\nI thought you'd be interested to hear that our public library faces closure next year as people shift to online reading. I was quite saddened when I found out about it. Personally, I think the library remains a vital intellectual sanctuary for students, seniors, and underprivileged children who lack internet access. Moreover, we must organize a book drive to revitalize it!\nI would love to know what you think about this. Hope to hear from you soon.\nTake care,\nKato",
                  "vi": "Chào Kim,\nDạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.\nMình nghĩ bạn sẽ quan tâm khi biết thư viện công cộng của chúng ta có nguy cơ đóng cửa vào năm tới do mọi người chuyển sang đọc sách trực tuyến. Mình khá buồn khi biết tin này. Cá nhân mình thấy thư viện vẫn là không gian học tập vô giá cho học sinh, người cao tuổi và trẻ em khó khăn không có điều kiện tiếp cận internet. Hơn nữa, chúng mình hãy cùng nhau quyên góp sách để làm mới thư viện nhé!\nMình rất muốn biết bạn nghĩ gì. Mong sớm nhận tin từ bạn.\nBảo trọng nhé,\nKato"
            }
      ]
    },
    "email2": {
      "title": "Email 2: Gửi Quản lý CLB Sách (Formal)",
      "instruction": "Email 2: Email to the club manager (about 120-150 words).",
      "instructionVi": "Email 2: Gửi email cho quản lý câu lạc bộ (khoảng 120-150 từ).",
      "wordTarget": "120 - 150 từ (chuẩn 120 - 165 từ)",
      "minWords": 120,
      "maxWords": 165,
      "template": "Dear Club Manager,\nMy name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email regarding the municipal authority's plan to close down our public library. I firmly believe that this decision is short-sighted and deeply regrettable.\nTo preserve and modernize this vital cultural institution, I would like to make a few suggestions. First, our club should advocate for transforming the library into a modern hybrid learning hub equipped with free Wi-Fi, computer workstations, and digital archives alongside traditional book stacks. Second, it would be better to integrate a community coffee lounge and silent study pods to attract freelance workers and students. Finally, we could organize weekly literary storytelling sessions and coding clubs for children to demonstrate high community utility. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\n[Tên của bạn]",
      "vocabCategories": [
            {
                  "name": "1. Đề xuất 1: [đề xuất thứ nhất] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "the city should modernize the library into a dynamic hybrid learning center combining physical books with digital databases",
                              "vi": "thành phố nên hiện đại hóa thư viện thành trung tâm học tập tích hợp sách giấy và cơ sở dữ liệu số"
                        },
                        {
                              "en": "the club should petition local authorities to install modern workstations, high-speed Wi-Fi, and e-reader lending services",
                              "vi": "CLB nên kiến nghị chính quyền lắp đặt máy tính hiện đại, Wi-Fi tốc độ cao và dịch vụ mượn máy đọc sách"
                        }
                  ]
            },
            {
                  "name": "2. Đề xuất 2: [đề xuất thứ hai] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "it would be highly effective to establish a quiet community co-working cafe inside the library to attract students and freelancers",
                              "vi": "sẽ rất hiệu quả nếu mở một quán cà phê tự học yên tĩnh trong thư viện để thu hút sinh viên"
                        },
                        {
                              "en": "the facility should create soundproof group study rooms and comfortable lounge areas for collaborative projects",
                              "vi": "thư viện nên xây dựng các phòng học nhóm cách âm và khu vực nghỉ ngơi thoải mái"
                        }
                  ]
            },
            {
                  "name": "3. Đề xuất 3: [đề xuất thứ ba] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we could host regular weekend cultural programs, author talks, and children's reading clubs to increase community patronage",
                              "vi": "chúng ta có thể tổ chức định kỳ các sự kiện văn hóa, giao lưu tác giả và câu lạc bộ đọc sách thiếu nhi"
                        },
                        {
                              "en": "the club could launch public fundraising book fairs to assist the library with operational and maintenance expenses",
                              "vi": "CLB có thể phát động hội chợ sách gây quỹ cộng đồng để hỗ trợ chi phí vận hành thư viện"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 204,
                  "en": "Dear Club Manager,\nMy name is Kato, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email regarding the proposed shutdown of our local municipal library. I strongly feel that closing this historic landmark would strip our community of an essential educational haven.\nTo safeguard and revitalize our library, I would like to make a few suggestions. First, the club should petition the municipal council to renovate the facility into a dynamic hybrid learning center combining e-readers, research databases, and paper collections. Second, it would be highly effective to establish a collaborative café and quiet study pods to attract university students and freelancers. Finally, we could initiate weekend literacy workshops, book launches, and children's reading clubs to increase community patronage. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\nKato",
                  "vi": "Kính gửi Quản lý Câu lạc bộ,\nTên tôi là Kato, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.\nTôi viết email này để chia sẻ suy nghĩ và đưa ra một vài đề xuất thực tế liên quan đến kế hoạch đóng cửa thư viện thành phố. Tôi thực sự cảm thấy việc đóng cửa công trình lịch sử này sẽ tước đi của cộng đồng một mái nhà tri thức vô giá.\nĐể bảo vệ và hồi sinh thư viện của chúng ta, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, câu lạc bộ nên gửi kiến nghị lên hội đồng thành phố để cải tạo cơ sở này thành trung tâm học tập tích hợp hiện đại, kết hợp giữa máy đọc sách điện tử, cơ sở dữ liệu tra cứu và các đầu sách in truyền thống. Thứ hai, sẽ rất hiệu quả nếu xây dựng một quán cà phê kết hợp các khoang tự học yên tĩnh để thu hút sinh viên và những người làm việc tự do. Cuối cùng, chúng ta có thể phát động các buổi hội thảo văn học cuối tuần, ra mắt sách và câu lạc bộ đọc sách thiếu nhi để gia tăng lượng độc giả đến thư viện. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ hoàn thành mục tiêu.\nCảm ơn bạn đã dành thời gian xem xét các đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.\nTrân trọng,\nKato"
            }
      ]
    }
  }
};
