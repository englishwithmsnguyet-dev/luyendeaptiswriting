// APTIS WRITING PART 04 - COMPREHENSIVE DATA & TEMPLATES

export const part4CommonTemplates = {
  informal: {
    title: "EMAIL GỬI BẠN (Informal Email)",
    target: "Khoảng 40 - 50 từ (chuẩn 48 - 58 từ, hoàn thành trong 10 phút)",
    tone: "Thân mật, tự nhiên, gần gũi (dùng tên thân mật, câu cảm thán, ký tên Kato)",
    structure: [
      {
        step: 1,
        name: "Lời chào thân mật",
        fixed: "Dear Kim,",
        note: "Chào bạn bè thân mật bằng tên riêng (ví dụ: Dear Kim,)"
      },
      {
        step: 2,
        name: "Thăm hỏi & Bày tỏ cảm xúc",
        fixed: "How is it going? I thought you would like to know that [thông tin trong đề bài]. I was [cảm xúc] to hear about it.",
        note: "Hỏi thăm tự nhiên, nhắc ngay thông tin từ đề bài và thể hiện cảm xúc cá nhân"
      },
      {
        step: 3,
        name: "Quan điểm, Lý do & Phát triển ý",
        fixed: "Personally, I think [ý kiến & lý do]. Moreover, [phát triển thêm ý]. What do you think? Hope to hear from you soon. Hope to hear from you soon.",
        note: "Nêu quan điểm kèm lý do, bổ sung 1 ý phát triển/rủ rê và hỏi ý kiến bạn"
      },
      {
        step: 4,
        name: "Ký tên",
        fixed: "Take care,\nKato",
        note: "Lời chúc thân mật và ký tên chuẩn Kato"
      }
    ],
    templateText: `Dear Kim,

How is it going? I thought you would like to know that [thông tin trong đề bài]. I was [cảm xúc] to hear about it.

Personally, I think [ý kiến & lý do]. Moreover, [phát triển thêm ý]. What do you think?

Take care,
Kato`,
    blocks: [
      { label: "1. Lời chào", fixedPrefix: "Dear Kim," },
      { 
        label: "2. Tin tức & Cảm xúc", 
        fixedPrefix: "How is it going? I thought you would like to know that ", 
        slot: "[thông tin sự việc trong đề bài]", 
        fixedMid: ". I was ", 
        slot2: "[cảm xúc]", 
        fixedSuffix: " to hear about it." 
      },
      { 
        label: "3. Quan điểm, Lý do & Phát triển ý", 
        fixedPrefix: "Personally, I think ", 
        slot: "[ý kiến & lý do]", 
        fixedMid: ". Moreover, ", 
        slot2: "[phát triển thêm ý]", 
        fixedSuffix: ". What do you think? Hope to hear from you soon." 
      },
      { label: "4. Ký tên", fixedPrefix: "Take care,\nKato" }
    ]
  },

  formal: {
    title: "EMAIL GỬI QUẢN LÝ CÂU LẠC BỘ (Formal Email)",
    target: "120 - 150 từ (chuẩn 128 - 140 từ, hoàn thành trong 20 phút)",
    tone: "Trang trọng, lịch sự, chuyên nghiệp (KHÔNG viết tắt, dùng liên từ liên kết, từ vựng B2+/C1, ký tên Kato)",
    structure: [
      {
        step: 1,
        name: "Lời chào trang trọng",
        fixed: "Dear Club Manager,",
        note: "Chào người quản lý hoặc chủ tịch CLB một cách trang trọng"
      },
      {
        step: 2,
        name: "Giới thiệu, Mục đích & Quan điểm",
        fixed: "My name is Kato, and I have been an active member of our club for [thời gian tham gia]. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding [thông tin trong đề bài]. I believe [nêu quan điểm về vấn đề đó].",
        note: "Giới thiệu bản thân là hội viên tích cực, nêu rõ mục đích viết thư và khẳng định lập trường vững vàng"
      },
      {
        step: 3,
        name: "Dẫn nhập & 3 Đề xuất cụ thể",
        fixed: "To help achieve the best outcome, I would like to make some practical proposals.\nFirst, [đề xuất thứ nhất].\nSecond, [đề xuất thứ hai].\nFinally, [đề xuất thứ ba].",
        note: "Đưa ra 3 đề xuất thiết thực, giải thích giải pháp rõ ràng bằng các liên từ First, Second, Finally"
      },
      {
        step: 4,
        name: "Lời cảm ơn & Ký tên trang trọng",
        fixed: "Thank you for your time and consideration. I look forward to hearing your response.\n\nBest regards,\nKato",
        note: "Cảm ơn lịch sự, bày tỏ kỳ vọng nhận phản hồi và kết thư trang trọng"
      }
    ],
    templateText: `Dear Club Manager,

My name is Kato, and I have been an active member of our club for [thời gian tham gia]. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding [thông tin trong đề bài]. I believe [nêu quan điểm về vấn đề đó].

To help achieve the best outcome, I would like to make some practical proposals.
First, [đề xuất thứ nhất].
Second, [đề xuất thứ hai].
Finally, [đề xuất thứ ba].

Thank you for your time and consideration. I look forward to hearing your response.

Best regards,
Kato`,
    blocks: [
      { label: "1. Lời chào trang trọng", fixedPrefix: "Dear Club Manager," },
      { 
        label: "2. Giới thiệu & Mục đích viết thư", 
        fixedPrefix: "My name is Kato, and I have been an active member of our club for ", 
        slot: "[thời gian tham gia: two years]", 
        fixedMid: ". During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding ",
        slot2: "[thông tin trong đề bài]",
        fixedSuffix: "."
      },
      {
        label: "3. Quan điểm chủ đạo",
        fixedPrefix: "I believe ",
        slot: "[nêu quan điểm về vấn đề đó]",
        fixedSuffix: "."
      },
      { 
        label: "4. Dẫn nhập đề xuất", 
        fixedPrefix: "To help achieve the best outcome, I would like to make some practical proposals." 
      },
      { 
        label: "5. Đề xuất thứ nhất", 
        fixedPrefix: "First, ", 
        slot: "[đề xuất thứ nhất]", 
        fixedSuffix: "." 
      },
      { 
        label: "6. Đề xuất thứ hai", 
        fixedPrefix: "Second, ", 
        slot: "[đề xuất thứ hai]", 
        fixedSuffix: "." 
      },
      { 
        label: "7. Đề xuất thứ ba", 
        fixedPrefix: "Finally, ", 
        slot: "[đề xuất thứ ba]", 
        fixedSuffix: "." 
      },
      { 
        label: "8. Lời cảm ơn & Kỳ vọng", 
        fixedPrefix: "Thank you for your time and consideration. I look forward to hearing your response." 
      },
      { label: "9. Ký tên trang trọng", fixedPrefix: "Best regards,\nKato" }
    ]
  },

  styleComparison: [
    {
      criterion: "Mục đích",
      informal: "Tâm sự, kể chuyện, chia sẻ cảm xúc với bạn bè",
      formal: "Trình bày quan điểm, đóng góp ý kiến mang tính xây dựng cho ban quản lý"
    },
    {
      criterion: "Độ dài chuẩn Aptis",
      informal: "40 - 50 từ (chuẩn 48 - 52 từ, 10 phút)",
      formal: "120 - 150 từ (chuẩn 128 - 140 từ, 20 phút)"
    },
    {
      criterion: "Lời chào",
      informal: "Dear Kim, / Hi Kim,",
      formal: "Dear Club Manager, / Dear Club President,"
    },
    {
      criterion: "Từ viết tắt",
      informal: "Được phép dùng: How's, I'm, I'd, don't, can't",
      formal: "TUYỆT ĐỐI KHÔNG VIẾT TẮT: I am, I would, do not, cannot"
    },
    {
      criterion: "Cấu trúc & Liên từ",
      informal: "Ngắn gọn, tự nhiên: Personally, Moreover, What do you think? Hope to hear from you soon.",
      formal: "Học thuật B2+/C1: I believe, To help achieve the best outcome, First, Second, Finally"
    },
    {
      criterion: "Ký tên chuẩn",
      informal: "Take care, + Kato",
      formal: "Best regards, + Kato"
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
                  "wordCount": 57,
                  "en": "Dear Kim,\n\nHow is it going? I thought you would like to know that our club is planning a monthly walk. I was delighted to hear about it.\n\nPersonally, I think it keeps us active. Moreover, we could organize fun games after the walk. What do you think? Hope to hear from you soon.\n\nTake care,\nKato",
                  "vi": "Chào Kim,\n\nDạo này bạn thế nào? Mình nghĩ bạn sẽ thích biết tin CLB của chúng mình đang lên kế hoạch tổ chức sự kiện đi bộ hàng tháng. Mình rất vui khi nghe tin này.\n\nCá nhân mình thấy hoạt động này giúp chúng mình luôn năng động. Hơn nữa, chúng mình có thể tổ chức trò chơi vui sau buổi đi bộ. Bạn nghĩ sao? Mong sớm nhận được tin từ bạn.\n\nBảo trọng nhé,\nKato",
                  "analysis": [
                        {
                              "label": "Chào hỏi & Tin tức",
                              "text": "Dear Kim, How is it going? I thought you would like to know that our club is planning a monthly walk. I was delighted to hear about it."
                        },
                        {
                              "label": "Quan điểm, Lý do & Đề xuất",
                              "text": "Personally, I think it keeps us active. Moreover, we could organize fun games after the walk. What do you think? Hope to hear from you soon."
                        },
                        {
                              "label": "Ký tên",
                              "text": "Take care, Kato"
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
                              "en": "we should choose safe and scenic walking routes, so participants can enjoy nature",
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
                  "wordCount": 140,
                  "en": "Dear Club Manager,\n\nMy name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the monthly walking event to attract more members. I believe this is an excellent initiative that will foster community solidarity.\n\nTo help achieve the best outcome, I would like to make some practical proposals.\nFirst, we should select safe and scenic walking trails, so participants can fully enjoy nature.\nSecond, it would be highly beneficial to organize simple team games after the walk to encourage friendly interaction.\nFinally, we could prepare healthy refreshments and fresh fruit for all attendees.\n\nThank you for your time and consideration. I look forward to hearing your response.\n\nBest regards,\nKato",
                  "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Kato, và tôi đã là một hội viên tích cực của câu lạc bộ chúng ta được hai năm. Trong thời gian này, tôi đã tham gia vào nhiều hoạt động ý nghĩa. Tôi viết thư này để chia sẻ góc nhìn và đưa ra một vài đề xuất mang tính xây dựng liên quan đến sự kiện đi bộ hàng tháng nhằm thu hút thêm hội viên. Tôi tin chắc rằng đây là một sáng kiến tuyệt vời giúp thắt chặt tình đoàn kết cộng đồng.\n\nĐể giúp đạt được kết quả tốt nhất, tôi xin phép đưa ra ba đề xuất thực tế.\nThứ nhất, chúng ta nên lựa chọn các cung đường đi bộ an toàn và có cảnh quan đẹp để người tham gia tận hưởng trọn vẹn thiên nhiên.\nThứ hai, sẽ rất có lợi nếu tổ chức các trò chơi đồng đội đơn giản sau buổi đi bộ để khuyến khích sự tương tác thân thiện.\nCuối cùng, chúng ta có thể chuẩn bị đồ giải khát lành mạnh và hoa quả tươi cho toàn thể người tham dự.\n\nCảm ơn bạn đã dành thời gian xem xét thư. Tôi rất mong sớm nhận được phản hồi từ bạn.\n\nTrân trọng,\nKato",
                  "analysis": [
                        {
                              "label": "Mở đầu, Mục đích & Quan điểm",
                              "text": "My name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the monthly walking event to attract more members. I believe this is an excellent initiative that will foster community solidarity."
                        },
                        {
                              "label": "3 Đề xuất thực tế",
                              "text": "To help achieve the best outcome, I would like to make some practical proposals. First, we should select safe and scenic walking trails, so participants can fully enjoy nature. Second, it would be highly beneficial to organize simple team games after the walk to encourage friendly interaction. Finally, we could prepare healthy refreshments and fresh fruit for all attendees."
                        },
                        {
                              "label": "Cảm ơn & Ký tên",
                              "text": "Thank you for your time and consideration. I look forward to hearing your response. Best regards, Kato"
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
                              "en": "the club should offer discounts for students",
                              "vi": "CLB nên áp dụng chính sách giảm giá cho sinh viên"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 58,
                  "en": "Dear Kim,\n\nHow is it going? I thought you would like to know that our club plans to raise fees. I was quite concerned about it.\n\nPersonally, I think this adjustment is reasonable because upgrading machines requires funds. Moreover, we should renew our memberships early. What do you think? Hope to hear from you soon.\n\nTake care,\nKato",
                  "vi": "Chào Kim,\n\nDạo này bạn thế nào? Mình nghĩ bạn sẽ muốn biết tin CLB của chúng mình dự định tăng học phí. Mình khá lo lắng về điều đó.\n\nCá nhân mình thấy mức điều chỉnh này là hợp lý vì nâng cấp máy móc cần kinh phí. Hơn nữa, chúng mình nên gia hạn thẻ tập sớm. Bạn nghĩ sao? Mong sớm nhận được tin từ bạn.\n\nBảo trọng nhé,\nKato",
                  "analysis": [
                        {
                              "label": "Chào hỏi & Tin tức",
                              "text": "Dear Kim, How is it going? I thought you would like to know that our club plans to raise fees. I was quite concerned about it."
                        },
                        {
                              "label": "Quan điểm, Lý do & Đề xuất",
                              "text": "Personally, I think this adjustment is reasonable because upgrading machines requires funds. Moreover, we should renew our memberships early. What do you think? Hope to hear from you soon."
                        },
                        {
                              "label": "Ký tên",
                              "text": "Take care, Kato"
                        }
                  ]
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
                              "en": "we could offer free yoga classes at weekends",
                              "vi": "chúng ta có thể tổ chức các lớp yoga miễn phí vào cuối tuần"
                        },
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
                  "wordCount": 138,
                  "en": "Dear Club Manager,\n\nMy name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the proposed fee adjustment and facility renovation. I believe this is an important issue that requires careful consideration.\n\nTo help achieve the best outcome, I would like to make some practical proposals.\nFirst, the club should prioritize modern cardio machines and replace outdated treadmills first.\nSecond, it would be highly beneficial to offer a 10% loyalty discount for existing long-term members.\nFinally, we could introduce complimentary weekend yoga and spinning classes to add value to our memberships.\n\nThank you for your time and consideration. I look forward to hearing your response.\n\nBest regards,\nKato",
                  "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Kato, và tôi đã là một hội viên tích cực của câu lạc bộ chúng ta được hai năm. Trong thời gian này, tôi đã tham gia vào nhiều hoạt động ý nghĩa. Tôi viết thư này để chia sẻ góc nhìn và đưa ra một vài đề xuất mang tính xây dựng liên quan đến việc điều chỉnh học phí và nâng cấp cơ sở vật chất. Tôi tin chắc rằng đây là một vấn đề quan trọng cần cân nhắc kỹ lưỡng.\n\nĐể giúp đạt được kết quả tốt nhất, tôi xin phép đưa ra ba đề xuất thực tế.\nThứ nhất, CLB nên ưu tiên đầu tư máy cardio hiện đại và thay thế các máy chạy bộ đã cũ trước.\nThứ hai, sẽ rất có lợi nếu áp dụng mức chiết khấu tri ân 10% cho các hội viên lâu năm hiện tại.\nCuối cùng, chúng ta có thể bổ sung các lớp yoga và đạp xe nhóm miễn phí cuối tuần để gia tăng giá trị thẻ tập.\n\nCảm ơn bạn đã dành thời gian xem xét thư. Tôi rất mong sớm nhận được phản hồi từ bạn.\n\nTrân trọng,\nKato",
                  "analysis": [
                        {
                              "label": "Mở đầu, Mục đích & Quan điểm",
                              "text": "My name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the proposed fee adjustment and facility renovation. I believe this is an important issue that requires careful consideration."
                        },
                        {
                              "label": "3 Đề xuất thực tế",
                              "text": "To help achieve the best outcome, I would like to make some practical proposals. First, the club should prioritize modern cardio machines and replace outdated treadmills first. Second, it would be highly beneficial to offer a 10% loyalty discount for existing long-term members. Finally, we could introduce complimentary weekend yoga and spinning classes to add value to our memberships."
                        },
                        {
                              "label": "Cảm ơn & Ký tên",
                              "text": "Thank you for your time and consideration. I look forward to hearing your response. Best regards, Kato"
                        }
                  ]
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
                              "en": "we should register early, so we can secure front-row seats",
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
                  "wordCount": 59,
                  "en": "Dear Kim,\n\nHow is it going? I thought you would like to know that our club is organizing an artist talk. I was thrilled about it!\n\nPersonally, I think inviting a painter is wonderful because it inspires creativity. Moreover, we should register early for front-row seats. What do you think? Hope to hear from you soon.\n\nTake care,\nKato",
                  "vi": "Chào Kim,\n\nDạo này bạn thế nào? Mình nghĩ bạn sẽ thích biết tin CLB của chúng mình đang tổ chức buổi nói chuyện với nghệ sĩ. Mình rất hào hứng về tin này!\n\nCá nhân mình thấy mời một họa sĩ thật tuyệt vời vì truyền cảm hứng sáng tạo. Hơn nữa, chúng mình nên đăng ký sớm để có chỗ hàng đầu. Bạn nghĩ sao? Mong sớm nhận được tin từ bạn.\n\nBảo trọng nhé,\nKato",
                  "analysis": [
                        {
                              "label": "Chào hỏi & Tin tức",
                              "text": "Dear Kim, How is it going? I thought you would like to know that our club is organizing an artist talk. I was thrilled about it!"
                        },
                        {
                              "label": "Quan điểm, Lý do & Đề xuất",
                              "text": "Personally, I think inviting a painter is wonderful because it inspires creativity. Moreover, we should register early for front-row seats. What do you think? Hope to hear from you soon."
                        },
                        {
                              "label": "Ký tên",
                              "text": "Take care, Kato"
                        }
                  ]
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
      "template": "Dear Club President,\nMy name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my thoughts and offer several practical suggestions regarding the public talk and guest artist invitation. I think this is a great idea.\nTo help attract both young and elderly members to the talk, I would like to make a few suggestions. First, we should invite a renowned local artist who specializes in blending traditional techniques with contemporary styles. Second, it would be better to focus the discussion on \"Art for Everyday Wellbeing\", which resonates across all generations. Finally, we could set up a 30-minute hands-on sketching session, so attendees can practice alongside the speaker. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\n[Tên của bạn]",
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
                  "wordCount": 137,
                  "en": "Dear Club President,\n\nMy name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the upcoming public talk and guest artist invitation. I believe this is an excellent initiative that will elevate our club profile.\n\nTo help achieve the best outcome, I would like to make some practical proposals.\nFirst, we should invite an acclaimed local painter who specializes in contemporary watercolor art.\nSecond, the presentation should focus on practical painting methods and daily artistic wellbeing.\nFinally, we could dedicate the final 45 minutes to a hands-on live sketching workshop.\n\nThank you for your time and consideration. I look forward to hearing your response.\n\nBest regards,\nKato",
                  "vi": "Kính gửi Chủ tịch Câu lạc bộ,\n\nTên tôi là Kato, và tôi đã là một hội viên tích cực của câu lạc bộ chúng ta được hai năm. Trong thời gian này, tôi đã tham gia vào nhiều hoạt động ý nghĩa. Tôi viết thư này để chia sẻ góc nhìn và đưa ra một vài đề xuất mang tính xây dựng liên quan đến buổi nói chuyện công chúng sắp tới và việc mời nghệ sĩ khách mời. Tôi tin chắc rằng đây là một sáng kiến tuyệt vời giúp nâng cao vị thế câu lạc bộ.\n\nĐể giúp đạt được kết quả tốt nhất, tôi xin phép đưa ra ba đề xuất thực tế.\nThứ nhất, chúng ta nên mời một họa sĩ địa phương nổi tiếng chuyên về nghệ thuật màu nước đương đại.\nThứ hai, bài thuyết trình nên tập trung vào phương pháp vẽ thực tế và nghệ thuật thư giãn mỗi ngày.\nCuối cùng, chúng ta có thể dành 45 phút cuối cho buổi thực hành phác thảo trực tiếp.\n\nCảm ơn bạn đã dành thời gian xem xét thư. Tôi rất mong sớm nhận được phản hồi từ bạn.\n\nTrân trọng,\nKato",
                  "analysis": [
                        {
                              "label": "Mở đầu, Mục đích & Quan điểm",
                              "text": "My name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the upcoming public talk and guest artist invitation. I believe this is an excellent initiative that will elevate our club profile."
                        },
                        {
                              "label": "3 Đề xuất thực tế",
                              "text": "To help achieve the best outcome, I would like to make some practical proposals. First, we should invite an acclaimed local painter who specializes in contemporary watercolor art. Second, the presentation should focus on practical painting methods and daily artistic wellbeing. Finally, we could dedicate the final 45 minutes to a hands-on live sketching workshop."
                        },
                        {
                              "label": "Cảm ơn & Ký tên",
                              "text": "Thank you for your time and consideration. I look forward to hearing your response. Best regards, Kato"
                        }
                  ]
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
                  "wordCount": 57,
                  "en": "Dear Kim,\n\nHow is it going? I thought you would like to know that our club needs guest speakers. I was really excited about it!\n\nPersonally, I think this opportunity is fantastic because we can share recipes. Moreover, we could volunteer as speakers together. What do you think? Hope to hear from you soon.\n\nTake care,\nKato",
                  "vi": "Chào Kim,\n\nDạo này bạn thế nào? Mình nghĩ bạn sẽ thích biết tin CLB của chúng mình cần diễn giả khách mời. Mình thực sự hào hứng về tin này!\n\nCá nhân mình thấy cơ hội này thật tuyệt vời vì chúng mình có thể chia sẻ công thức nấu ăn. Hơn nữa, chúng mình có thể cùng nhau đăng ký làm diễn giả. Bạn nghĩ sao? Mong sớm nhận được tin từ bạn.\n\nBảo trọng nhé,\nKato",
                  "analysis": [
                        {
                              "label": "Chào hỏi & Tin tức",
                              "text": "Dear Kim, How is it going? I thought you would like to know that our club needs guest speakers. I was really excited about it!"
                        },
                        {
                              "label": "Quan điểm, Lý do & Đề xuất",
                              "text": "Personally, I think this opportunity is fantastic because we can share recipes. Moreover, we could volunteer as speakers together. What do you think? Hope to hear from you soon."
                        },
                        {
                              "label": "Ký tên",
                              "text": "Take care, Kato"
                        }
                  ]
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
                  "wordCount": 140,
                  "en": "Dear Club Manager,\n\nMy name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the upcoming talk show and live cooking demonstration. I believe this is an excellent initiative that will greatly inspire our members.\n\nTo help achieve the best outcome, I would like to make some practical proposals.\nFirst, I would like to volunteer as a speaker presenting nutritious family meals on a modest budget.\nSecond, we should include a 30-minute live cooking demonstration by the celebrity chef.\nFinally, we could organize a tasting corner where attendees can sample freshly cooked dishes.\n\nThank you for your time and consideration. I look forward to hearing your response.\n\nBest regards,\nKato",
                  "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Kato, và tôi đã là một hội viên tích cực của câu lạc bộ chúng ta được hai năm. Trong thời gian này, tôi đã tham gia vào nhiều hoạt động ý nghĩa. Tôi viết thư này để chia sẻ góc nhìn và đưa ra một vài đề xuất mang tính xây dựng liên quan đến buổi tọa đàm sắp tới và phần nấu ăn biểu diễn. Tôi tin chắc rằng đây là một sáng kiến tuyệt vời sẽ truyền cảm hứng lớn cho các hội viên.\n\nĐể giúp đạt được kết quả tốt nhất, tôi xin phép đưa ra ba đề xuất thực tế.\nThứ nhất, tôi xin tình nguyện làm diễn giả chia sẻ về bữa ăn gia đình đủ chất với chi phí vừa phải.\nThứ hai, chúng ta nên có phần nấu ăn biểu diễn 30 phút từ đầu bếp nổi tiếng.\nCuối cùng, chúng ta có thể tổ chức góc nếm thử để người tham dự thưởng thức các món ăn vừa chế biến.\n\nCảm ơn bạn đã dành thời gian xem xét thư. Tôi rất mong sớm nhận được phản hồi từ bạn.\n\nTrân trọng,\nKato",
                  "analysis": [
                        {
                              "label": "Mở đầu, Mục đích & Quan điểm",
                              "text": "My name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the upcoming talk show and live cooking demonstration. I believe this is an excellent initiative that will greatly inspire our members."
                        },
                        {
                              "label": "3 Đề xuất thực tế",
                              "text": "To help achieve the best outcome, I would like to make some practical proposals. First, I would like to volunteer as a speaker presenting nutritious family meals on a modest budget. Second, we should include a 30-minute live cooking demonstration by the celebrity chef. Finally, we could organize a tasting corner where attendees can sample freshly cooked dishes."
                        },
                        {
                              "label": "Cảm ơn & Ký tên",
                              "text": "Thank you for your time and consideration. I look forward to hearing your response. Best regards, Kato"
                        }
                  ]
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
                  "wordCount": 58,
                  "en": "Dear Kim,\n\nHow is it going? I thought you would like to know that our club plans monthly meetings. I was thrilled about it!\n\nPersonally, I think meeting on Saturday morning is ideal because everyone is free. Moreover, we can suggest a cozy garden cafe. What do you think? Hope to hear from you soon.\n\nTake care,\nKato",
                  "vi": "Chào Kim,\n\nDạo này bạn thế nào? Mình nghĩ bạn sẽ thích biết tin CLB của chúng mình dự định gặp nhau hàng tháng. Mình rất phấn khích về tin này!\n\nCá nhân mình thấy gặp nhau sáng thứ Bảy là lý tưởng vì mọi người đều rảnh rỗi. Hơn nữa, chúng mình có thể gợi ý một quán cà phê sân vườn ấm cúng. Bạn nghĩ sao? Mong sớm nhận được tin từ bạn.\n\nBảo trọng nhé,\nKato",
                  "analysis": [
                        {
                              "label": "Chào hỏi & Tin tức",
                              "text": "Dear Kim, How is it going? I thought you would like to know that our club plans monthly meetings. I was thrilled about it!"
                        },
                        {
                              "label": "Quan điểm, Lý do & Đề xuất",
                              "text": "Personally, I think meeting on Saturday morning is ideal because everyone is free. Moreover, we can suggest a cozy garden cafe. What do you think? Hope to hear from you soon."
                        },
                        {
                              "label": "Ký tên",
                              "text": "Take care, Kato"
                        }
                  ]
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
                  "wordCount": 138,
                  "en": "Dear Club Manager,\n\nMy name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the schedule and suitable venues for monthly gatherings. I believe this is an excellent initiative that will significantly improve member bonding.\n\nTo help achieve the best outcome, I would like to make some practical proposals.\nFirst, we should schedule regular meetings on Saturday mornings when members are most refreshed and available.\nSecond, choosing a tranquil cafe with outdoor seating will facilitate pleasant conversations.\nFinally, we could prepare interactive team icebreaker games to warmly welcome newly registered members.\n\nThank you for your time and consideration. I look forward to hearing your response.\n\nBest regards,\nKato",
                  "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Kato, và tôi đã là một hội viên tích cực của câu lạc bộ chúng ta được hai năm. Trong thời gian này, tôi đã tham gia vào nhiều hoạt động ý nghĩa. Tôi viết thư này để chia sẻ góc nhìn và đưa ra một vài đề xuất mang tính xây dựng liên quan đến lịch trình và địa điểm phù hợp cho các buổi họp mặt hàng tháng. Tôi tin chắc rằng đây là một sáng kiến tuyệt vời giúp gắn kết hội viên đáng kể.\n\nĐể giúp đạt được kết quả tốt nhất, tôi xin phép đưa ra ba đề xuất thực tế.\nThứ nhất, chúng ta nên sắp xếp lịch họp định kỳ vào sáng thứ Bảy khi hội viên thoải mái và có nhiều thời gian nhất.\nThứ hai, việc lựa chọn một quán cà phê yên tĩnh có không gian ngoài trời sẽ tạo điều kiện trò chuyện thoải mái.\nCuối cùng, chúng ta có thể chuẩn bị các trò chơi phá băng đồng đội để chào đón nồng nhiệt các thành viên mới.\n\nCảm ơn bạn đã dành thời gian xem xét thư. Tôi rất mong sớm nhận được phản hồi từ bạn.\n\nTrân trọng,\nKato",
                  "analysis": [
                        {
                              "label": "Mở đầu, Mục đích & Quan điểm",
                              "text": "My name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the schedule and suitable venues for monthly gatherings. I believe this is an excellent initiative that will significantly improve member bonding."
                        },
                        {
                              "label": "3 Đề xuất thực tế",
                              "text": "To help achieve the best outcome, I would like to make some practical proposals. First, we should schedule regular meetings on Saturday mornings when members are most refreshed and available. Second, choosing a tranquil cafe with outdoor seating will facilitate pleasant conversations. Finally, we could prepare interactive team icebreaker games to warmly welcome newly registered members."
                        },
                        {
                              "label": "Cảm ơn & Ký tên",
                              "text": "Thank you for your time and consideration. I look forward to hearing your response. Best regards, Kato"
                        }
                  ]
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
                              "en": "we should bring our younger siblings along, so they can socialize and play together",
                              "vi": "chúng mình nên rủ các em nhỏ đi cùng để chúng cùng làm quen và vui chơi"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 58,
                  "en": "Dear Kim,\n\nHow is it going? I thought you would like to know that our club plans a picnic event. I was delighted to hear it!\n\nPersonally, I think the riverside park is perfect because of fresh air. Moreover, we should bring some badminton rackets. What do you think? Hope to hear from you soon.\n\nTake care,\nKato",
                  "vi": "Chào Kim,\n\nDạo này bạn thế nào? Mình nghĩ bạn sẽ thích biết tin CLB đang lên kế hoạch dã ngoại ngoài trời. Mình rất vui khi nghe tin này!\n\nCá nhân mình thấy công viên ven sông rất lý tưởng vì không khí trong lành. Hơn nữa, chúng mình nên mang theo vài cây vợt cầu lông. Bạn nghĩ sao? Mong sớm nhận được tin từ bạn.\n\nBảo trọng nhé,\nKato",
                  "analysis": [
                        {
                              "label": "Chào hỏi & Tin tức",
                              "text": "Dear Kim, How is it going? I thought you would like to know that our club plans a picnic event. I was delighted to hear it!"
                        },
                        {
                              "label": "Quan điểm, Lý do & Đề xuất",
                              "text": "Personally, I think the riverside park is perfect because of fresh air. Moreover, we should bring some badminton rackets. What do you think? Hope to hear from you soon."
                        },
                        {
                              "label": "Ký tên",
                              "text": "Take care, Kato"
                        }
                  ]
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
                  "wordCount": 137,
                  "en": "Dear Club President,\n\nMy name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the outdoor weekend picnic and community activities. I believe this is an excellent initiative that will help members unwind and connect.\n\nTo help achieve the best outcome, I would like to make some practical proposals.\nFirst, we should pick the botanical riverside park which provides lush green shade and convenient parking.\nSecond, hosting an outdoor barbecue lunch where members contribute regional specialties will create great camaraderie.\nFinally, we could organize team-building sports like badminton and tug-of-war.\n\nThank you for your time and consideration. I look forward to hearing your response.\n\nBest regards,\nKato",
                  "vi": "Kính gửi Chủ tịch Câu lạc bộ,\n\nTên tôi là Kato, và tôi đã là một hội viên tích cực của câu lạc bộ chúng ta được hai năm. Trong thời gian này, tôi đã tham gia vào nhiều hoạt động ý nghĩa. Tôi viết thư này để chia sẻ góc nhìn và đưa ra một vài đề xuất mang tính xây dựng liên quan đến buổi dã ngoại cuối tuần ngoài trời và các hoạt động cộng đồng. Tôi tin chắc rằng đây là một sáng kiến tuyệt vời giúp hội viên thư giãn và kết nối.\n\nĐể giúp đạt được kết quả tốt nhất, tôi xin phép đưa ra ba đề xuất thực tế.\nThứ nhất, chúng ta nên chọn công viên thực vật ven sông nơi có bóng râm xanh mát và bãi đỗ xe thuận tiện.\nThứ hai, tổ chức tiệc nướng ngoài trời nơi hội viên đóng góp các món đặc sản vùng miền sẽ tạo nên sự gắn kết tuyệt vời.\nCuối cùng, chúng ta có thể tổ chức các môn thể thao tập thể như cầu lông và kéo co.\n\nCảm ơn bạn đã dành thời gian xem xét thư. Tôi rất mong sớm nhận được phản hồi từ bạn.\n\nTrân trọng,\nKato",
                  "analysis": [
                        {
                              "label": "Mở đầu, Mục đích & Quan điểm",
                              "text": "My name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the outdoor weekend picnic and community activities. I believe this is an excellent initiative that will help members unwind and connect."
                        },
                        {
                              "label": "3 Đề xuất thực tế",
                              "text": "To help achieve the best outcome, I would like to make some practical proposals. First, we should pick the botanical riverside park which provides lush green shade and convenient parking. Second, hosting an outdoor barbecue lunch where members contribute regional specialties will create great camaraderie. Finally, we could organize team-building sports like badminton and tug-of-war."
                        },
                        {
                              "label": "Cảm ơn & Ký tên",
                              "text": "Thank you for your time and consideration. I look forward to hearing your response. Best regards, Kato"
                        }
                  ]
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
                  "wordCount": 58,
                  "en": "Dear Kim,\n\nHow is it going? I thought you would like to know that our club plans a consultation session. I was thrilled about it!\n\nPersonally, I think getting expert interior advice is great for small apartments. Moreover, we should bring our living room photos. What do you think? Hope to hear from you soon.\n\nTake care,\nKato",
                  "vi": "Chào Kim,\n\nDạo này bạn thế nào? Mình nghĩ bạn sẽ thích biết tin CLB dự định tổ chức buổi tư vấn nội thất. Mình rất hào hứng về tin này!\n\nCá nhân mình thấy nhận lời khuyên từ chuyên gia rất tuyệt cho căn hộ nhỏ. Hơn nữa, chúng mình nên mang theo ảnh phòng khách. Bạn nghĩ sao? Mong sớm nhận được tin từ bạn.\n\nBảo trọng nhé,\nKato",
                  "analysis": [
                        {
                              "label": "Chào hỏi & Tin tức",
                              "text": "Dear Kim, How is it going? I thought you would like to know that our club plans a consultation session. I was thrilled about it!"
                        },
                        {
                              "label": "Quan điểm, Lý do & Đề xuất",
                              "text": "Personally, I think getting expert interior advice is great for small apartments. Moreover, we should bring our living room photos. What do you think? Hope to hear from you soon."
                        },
                        {
                              "label": "Ký tên",
                              "text": "Take care, Kato"
                        }
                  ]
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
                  "wordCount": 138,
                  "en": "Dear Club President,\n\nMy name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the upcoming home consultation seminar and workshops. I believe this is an excellent initiative that will greatly assist our members.\n\nTo help achieve the best outcome, I would like to make some practical proposals.\nFirst, we should focus on interior layout optimization specifically tailored for compact modern apartments.\nSecond, it would be beneficial to arrange 15-minute one-on-one consultation slots with certified architects.\nFinally, we could prepare a curated booklet detailing budget-friendly decor materials and reputable local suppliers.\n\nThank you for your time and consideration. I look forward to hearing your response.\n\nBest regards,\nKato",
                  "vi": "Kính gửi Chủ tịch Câu lạc bộ,\n\nTên tôi là Kato, và tôi đã là một hội viên tích cực của câu lạc bộ chúng ta được hai năm. Trong thời gian này, tôi đã tham gia vào nhiều hoạt động ý nghĩa. Tôi viết thư này để chia sẻ góc nhìn và đưa ra một vài đề xuất mang tính xây dựng liên quan đến hội thảo tư vấn nhà ở và các buổi chia sẻ sắp tới. Tôi tin chắc rằng đây là một sáng kiến tuyệt vời sẽ hỗ trợ hội viên rất nhiều.\n\nĐể giúp đạt được kết quả tốt nhất, tôi xin phép đưa ra ba đề xuất thực tế.\nThứ nhất, chúng ta nên tập trung vào việc tối ưu hóa bố cục nội thất được thiết kế riêng cho các căn hộ hiện đại diện tích nhỏ.\nThứ hai, sẽ rất có lợi nếu sắp xếp các khung tư vấn 1-1 kéo dài 15 phút với kiến trúc sư có chứng chỉ.\nCuối cùng, chúng ta có thể biên soạn cuốn cẩm nang tuyển chọn chi tiết vật liệu trang trí tiết kiệm và nhà cung cấp uy tín.\n\nCảm ơn bạn đã dành thời gian xem xét thư. Tôi rất mong sớm nhận được phản hồi từ bạn.\n\nTrân trọng,\nKato",
                  "analysis": [
                        {
                              "label": "Mở đầu, Mục đích & Quan điểm",
                              "text": "My name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the upcoming home consultation seminar and workshops. I believe this is an excellent initiative that will greatly assist our members."
                        },
                        {
                              "label": "3 Đề xuất thực tế",
                              "text": "To help achieve the best outcome, I would like to make some practical proposals. First, we should focus on interior layout optimization specifically tailored for compact modern apartments. Second, it would be beneficial to arrange 15-minute one-on-one consultation slots with certified architects. Finally, we could prepare a curated booklet detailing budget-friendly decor materials and reputable local suppliers."
                        },
                        {
                              "label": "Cảm ơn & Ký tên",
                              "text": "Thank you for your time and consideration. I look forward to hearing your response. Best regards, Kato"
                        }
                  ]
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
                  "wordCount": 56,
                  "en": "Dear Kim,\n\nHow is it going? I thought you would like to know that our club is raising monthly fees. I was concerned about it!\n\nPersonally, I think this increase is reasonable if maintenance is improved. Moreover, we should ask for a breakdown. What do you think? Hope to hear from you soon.\n\nTake care,\nKato",
                  "vi": "Chào Kim,\n\nDạo này bạn thế nào? Mình nghĩ bạn sẽ muốn biết tin CLB của chúng mình đang tăng phí tháng. Mình khá lo lắng về tin này!\n\nCá nhân mình thấy việc tăng phí là hợp lý nếu bảo trì được cải thiện. Hơn nữa, chúng mình nên yêu cầu bảng giải trình chi phí. Bạn nghĩ sao? Mong sớm nhận được tin từ bạn.\n\nBảo trọng nhé,\nKato",
                  "analysis": [
                        {
                              "label": "Chào hỏi & Tin tức",
                              "text": "Dear Kim, How is it going? I thought you would like to know that our club is raising monthly fees. I was concerned about it!"
                        },
                        {
                              "label": "Quan điểm, Lý do & Đề xuất",
                              "text": "Personally, I think this increase is reasonable if maintenance is improved. Moreover, we should ask for a breakdown. What do you think? Hope to hear from you soon."
                        },
                        {
                              "label": "Ký tên",
                              "text": "Take care, Kato"
                        }
                  ]
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
      "template": "Dear Club Manager,\nMy name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my perspective and offer constructive recommendations regarding homeownership for young adults. I think this is an important issue.\nTo support young members in making prudent housing decisions, I would like to make a few suggestions. First, our club should organize a workshop on personal financial literacy and mortgage planning, so youngsters understand long-term debt obligations. Second, it would be better to advise them to begin with smaller, affordable studio apartments rather than stretching beyond their budget for spacious houses. Finally, we could compile a legal checklist covering title deeds and contract verifications to protect first-time buyers. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\n[Tên của bạn]",
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
                  "wordCount": 141,
                  "en": "Dear Club Manager,\n\nMy name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the proposed increase in annual membership dues. I believe this is an important issue that requires careful consideration.\n\nTo help achieve the best outcome, I would like to make some practical proposals.\nFirst, the committee should disclose a detailed transparent financial breakdown explaining where extra funds will go.\nSecond, it would be fair to allow members to pay dues in quarterly installments rather than a lump sum.\nFinally, the club should commit to upgrading communal facilities and recreational equipment promptly.\n\nThank you for your time and consideration. I look forward to hearing your response.\n\nBest regards,\nKato",
                  "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Kato, và tôi đã là một hội viên tích cực của câu lạc bộ chúng ta được hai năm. Trong thời gian này, tôi đã tham gia vào nhiều hoạt động ý nghĩa. Tôi viết thư này để chia sẻ góc nhìn và đưa ra một vài đề xuất mang tính xây dựng liên quan đến việc đề xuất tăng phí niên liễm. Tôi tin chắc rằng đây là một vấn đề quan trọng cần cân nhắc cẩn trọng.\n\nĐể giúp đạt được kết quả tốt nhất, tôi xin phép đưa ra ba đề xuất thực tế.\nThứ nhất, ban điều hành nên công khai bảng kê khai tài chính chi tiết giải trình rõ nguồn quỹ gia tăng sẽ được dùng vào đâu.\nThứ hai, sẽ rất công bằng nếu cho phép hội viên đóng phí chia thành các đợt theo quý thay vì đóng một lần.\nCuối cùng, CLB nên cam kết nâng cấp cơ sở vật chất chung và trang thiết bị giải trí kịp thời.\n\nCảm ơn bạn đã dành thời gian xem xét thư. Tôi rất mong sớm nhận được phản hồi từ bạn.\n\nTrân trọng,\nKato",
                  "analysis": [
                        {
                              "label": "Mở đầu, Mục đích & Quan điểm",
                              "text": "My name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the proposed increase in annual membership dues. I believe this is an important issue that requires careful consideration."
                        },
                        {
                              "label": "3 Đề xuất thực tế",
                              "text": "To help achieve the best outcome, I would like to make some practical proposals. First, the committee should disclose a detailed transparent financial breakdown explaining where extra funds will go. Second, it would be fair to allow members to pay dues in quarterly installments rather than a lump sum. Finally, the club should commit to upgrading communal facilities and recreational equipment promptly."
                        },
                        {
                              "label": "Cảm ơn & Ký tên",
                              "text": "Thank you for your time and consideration. I look forward to hearing your response. Best regards, Kato"
                        }
                  ]
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
                              "en": "we should still attend because Mr. Jones is an excellent speaker and we can learn a lot from him",
                              "vi": "chúng mình vẫn nên đi vì ông Jones là diễn giả xuất sắc và chúng mình có thể học được nhiều điều từ ông ấy"
                        },
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
                              "en": "we should bring our notebooks to write down useful gardening tips",
                              "vi": "chúng mình nên mang theo sổ tay để ghi lại những mẹo làm vườn bổ ích"
                        },
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
                  "wordCount": 61,
                  "en": "Dear Kim,\n\nHow is it going? I thought you would like to know that Mr. Seiko's Japanese garden talk has been canceled and Mr. Jones will speak instead. I was quite disappointed about it!\n\nPersonally, I think we should still attend to support Mr. Jones. Moreover, we could bring some plant cuttings to swap. What do you think? Hope to hear from you soon.\n\nTake care,\nKato",
                  "vi": "Chào Kim,\n\nDạo này bạn thế nào? Mình nghĩ bạn sẽ muốn biết tin buổi nói chuyện về Vườn Nhật Bản của ông Seiko đã bị hủy và ông Jones sẽ nói thay. Mình khá thất vọng khi nghe tin này!\n\nCá nhân mình thấy chúng mình vẫn nên đi dự để ủng hộ ông Jones. Hơn nữa, chúng mình có thể mang theo một số cành giâm để trao đổi. Bạn nghĩ sao? Mong sớm nhận được tin từ bạn.\n\nBảo trọng nhé,\nKato",
                  "analysis": [
                        {
                              "label": "Chào hỏi & Tin tức",
                              "text": "Dear Kim, How is it going? I thought you would like to know that Mr. Seiko's Japanese garden talk has been canceled and Mr. Jones will speak instead. I was quite disappointed about it!"
                        },
                        {
                              "label": "Quan điểm, Lý do & Đề xuất",
                              "text": "Personally, I think we should still attend to support Mr. Jones. Moreover, we could bring some plant cuttings to swap. What do you think? Hope to hear from you soon."
                        },
                        {
                              "label": "Ký tên",
                              "text": "Take care, Kato"
                        }
                  ]
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
                              "en": "we should ask Mr. Jones to share new gardening tips for small home gardens",
                              "vi": "chúng ta nên đề nghị ông Jones chia sẻ những mẹo làm vườn mới cho vườn nhà diện tích nhỏ"
                        },
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
                              "en": "the club should organize a 20-minute Q&A session for members to ask gardening questions",
                              "vi": "CLB nên tổ chức phần hỏi đáp 20 phút để hội viên đặt câu hỏi về làm vườn"
                        },
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
                              "en": "the club should send flowers and a get-well card wishing Mr. Seiko a speedy recovery",
                              "vi": "CLB nên gửi hoa và thiệp chúc ông Seiko mau chóng bình phục sức khỏe"
                        },
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
                  "wordCount": 144,
                  "en": "Dear Club President,\n\nMy name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the plan to invite Mr. Jones as a replacement speaker for Mr. Seiko. I believe inviting Mr. Jones as a substitute speaker is a reasonable temporary decision.\n\nTo help achieve the best outcome, I would like to make some practical proposals.\nFirst, we should ask Mr. Jones to share new gardening tips for small home gardens.\nSecond, the club should organize a 20-minute Q&A session for members to ask gardening questions.\nFinally, the club should send flowers and a get-well card wishing Mr. Seiko a speedy recovery.\n\nThank you for your time and consideration. I look forward to hearing your response.\n\nBest regards,\nKato",
                  "vi": "Kính gửi Chủ tịch Câu lạc bộ,\n\nTên tôi là Kato, và tôi đã là một hội viên tích cực của câu lạc bộ chúng ta được hai năm. Trong thời gian này, tôi đã tham gia vào nhiều hoạt động ý nghĩa. Tôi viết thư này để chia sẻ góc nhìn và đưa ra một vài đề xuất mang tính xây dựng liên quan đến kế hoạch mời ông Jones làm diễn giả thay thế cho ông Seiko. Tôi tin rằng việc mời ông Jones làm diễn giả thay thế là một quyết định tạm thời hợp lý.\n\nĐể giúp đạt được kết quả tốt nhất, tôi xin phép đưa ra ba đề xuất thực tế.\nThứ nhất, chúng ta nên đề nghị ông Jones chia sẻ những mẹo làm vườn mới cho vườn nhà diện tích nhỏ.\nThứ hai, câu lạc bộ nên tổ chức phần hỏi đáp 20 phút để các hội viên đặt câu hỏi về làm vườn.\nCuối cùng, câu lạc bộ nên gửi hoa và thiệp chúc sức khỏe mong ông Seiko mau chóng bình phục.\n\nCảm ơn bạn đã dành thời gian xem xét thư. Tôi rất mong sớm nhận được phản hồi từ bạn.\n\nTrân trọng,\nKato",
                  "analysis": [
                        {
                              "label": "Mở đầu, Mục đích & Quan điểm",
                              "text": "My name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the plan to invite Mr. Jones as a replacement speaker for Mr. Seiko. I believe inviting Mr. Jones as a substitute speaker is a reasonable temporary decision."
                        },
                        {
                              "label": "3 Đề xuất thực tế",
                              "text": "To help achieve the best outcome, I would like to make some practical proposals. First, we should ask Mr. Jones to share new gardening tips for small home gardens. Second, the club should organize a 20-minute Q&A session for members to ask gardening questions. Finally, the club should send flowers and a get-well card wishing Mr. Seiko a speedy recovery."
                        },
                        {
                              "label": "Cảm ơn & Ký tên",
                              "text": "Thank you for your time and consideration. I look forward to hearing your response. Best regards, Kato"
                        }
                  ]
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
                              "en": "we should choose the workshop because learning gardening skills helps us grow plants at home easily",
                              "vi": "chúng mình nên chọn workshop vì học kỹ năng làm vườn giúp chúng mình tự trồng cây tại nhà dễ dàng"
                        },
                        {
                              "en": "planting trees at the park is a great choice because it makes our neighborhood greener and cleaner",
                              "vi": "trồng cây ở công viên là lựa chọn tuyệt vời vì giúp khu phố chúng mình xanh và sạch hơn"
                        },
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
                              "en": "we should wear protective gloves and comfortable clothes when planting trees",
                              "vi": "chúng mình nên đeo găng tay bảo hộ và mặc quần áo thoải mái khi tham gia trồng cây"
                        },
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
                  "wordCount": 57,
                  "en": "Dear Kim,\n\nHow is it going? I thought you would like to know that our club plans a flower festival. I was thrilled about it!\n\nPersonally, I think the rose garden is great because blooming flowers look amazing. Moreover, we should help design booths. What do you think? Hope to hear from you soon.\n\nTake care,\nKato",
                  "vi": "Chào Kim,\n\nDạo này bạn thế nào? Mình nghĩ bạn sẽ thích biết tin CLB dự định tổ chức lễ hội hoa. Mình rất phấn khởi về tin này!\n\nCá nhân mình thấy vườn hoa hồng rất tuyệt vì hoa nở rộ tuyệt đẹp. Hơn nữa, chúng mình nên giúp thiết kế gian hàng. Bạn nghĩ sao? Mong sớm nhận được tin từ bạn.\n\nBảo trọng nhé,\nKato",
                  "analysis": [
                        {
                              "label": "Chào hỏi & Tin tức",
                              "text": "Dear Kim, How is it going? I thought you would like to know that our club plans a flower festival. I was thrilled about it!"
                        },
                        {
                              "label": "Quan điểm, Lý do & Đề xuất",
                              "text": "Personally, I think the rose garden is great because blooming flowers look amazing. Moreover, we should help design booths. What do you think? Hope to hear from you soon."
                        },
                        {
                              "label": "Ký tên",
                              "text": "Take care, Kato"
                        }
                  ]
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
                              "en": "the club should organize hands-on workshops teaching members how to grow trees and vegetables at home",
                              "vi": "CLB nên tổ chức các buổi thực hành hướng dẫn hội viên cách trồng cây và rau sạch tại nhà"
                        },
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
                              "en": "the club should provide free seeds and small potted plants for all participants",
                              "vi": "CLB nên tặng hạt giống miễn phí và chậu cây nhỏ cho tất cả người tham gia"
                        },
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
                              "en": "the organizers must provide proper gardening tools and protective gloves to ensure safety for all volunteers",
                              "vi": "ban tổ chức cần trang bị đầy đủ dụng cụ làm vườn và găng tay bảo hộ để đảm bảo an toàn cho các tình nguyện viên"
                        },
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
                  "wordCount": 138,
                  "en": "Dear Club President,\n\nMy name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the annual spring flower festival and exhibition. I believe this is an excellent initiative that will celebrate horticultural beauty.\n\nTo help achieve the best outcome, I would like to make some practical proposals.\nFirst, we should hold the festival at the municipal rose pavilion to ensure spacious exhibition booths.\nSecond, establishing interactive floral arrangement competitions for amateur gardeners will stimulate community participation.\nFinally, we could sell homemade compost and organic fertilizers to fund our future gardening projects.\n\nThank you for your time and consideration. I look forward to hearing your response.\n\nBest regards,\nKato",
                  "vi": "Kính gửi Chủ tịch Câu lạc bộ,\n\nTên tôi là Kato, và tôi đã là một hội viên tích cực của câu lạc bộ chúng ta được hai năm. Trong thời gian này, tôi đã tham gia vào nhiều hoạt động ý nghĩa. Tôi viết thư này để chia sẻ góc nhìn và đưa ra một vài đề xuất mang tính xây dựng liên quan đến lễ hội hoa và triển lãm mùa xuân thường niên. Tôi tin chắc rằng đây là một sáng kiến tuyệt vời tôn vinh vẻ đẹp nghề làm vườn.\n\nĐể giúp đạt được kết quả tốt nhất, tôi xin phép đưa ra ba đề xuất thực tế.\nThứ nhất, chúng ta nên tổ chức lễ hội tại khu nhà triển lãm hoa hồng thành phố để đảm bảo các gian trưng bày rộng rãi.\nThứ hai, việc thiết lập các cuộc thi cắm hoa tương tác cho người làm vườn nghiệp dư sẽ khích lệ sự tham gia của cộng đồng.\nCuối cùng, chúng ta có thể bán phân hữu cơ tự ủ để gây quỹ cho các dự án làm vườn tương lai.\n\nCảm ơn bạn đã dành thời gian xem xét thư. Tôi rất mong sớm nhận được phản hồi từ bạn.\n\nTrân trọng,\nKato",
                  "analysis": [
                        {
                              "label": "Mở đầu, Mục đích & Quan điểm",
                              "text": "My name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the annual spring flower festival and exhibition. I believe this is an excellent initiative that will celebrate horticultural beauty."
                        },
                        {
                              "label": "3 Đề xuất thực tế",
                              "text": "To help achieve the best outcome, I would like to make some practical proposals. First, we should hold the festival at the municipal rose pavilion to ensure spacious exhibition booths. Second, establishing interactive floral arrangement competitions for amateur gardeners will stimulate community participation. Finally, we could sell homemade compost and organic fertilizers to fund our future gardening projects."
                        },
                        {
                              "label": "Cảm ơn & Ký tên",
                              "text": "Thank you for your time and consideration. I look forward to hearing your response. Best regards, Kato"
                        }
                  ]
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
                  "wordCount": 56,
                  "en": "Dear Kim,\n\nHow is it going? I thought you would like to know that our club plans a tournament. I was thrilled about it!\n\nPersonally, I think holding a badminton cup is great because it promotes team spirit. Moreover, we should practice together. What do you think? Hope to hear from you soon.\n\nTake care,\nKato",
                  "vi": "Chào Kim,\n\nDạo này bạn thế nào? Mình nghĩ bạn sẽ thích biết tin CLB dự định tổ chức giải đấu thể thao. Mình rất hào hứng về tin này!\n\nCá nhân mình thấy tổ chức giải cầu lông rất tuyệt vì nâng cao tinh thần đồng đội. Hơn nữa, chúng mình nên tập luyện cùng nhau. Bạn nghĩ sao? Mong sớm nhận được tin từ bạn.\n\nBảo trọng nhé,\nKato",
                  "analysis": [
                        {
                              "label": "Chào hỏi & Tin tức",
                              "text": "Dear Kim, How is it going? I thought you would like to know that our club plans a tournament. I was thrilled about it!"
                        },
                        {
                              "label": "Quan điểm, Lý do & Đề xuất",
                              "text": "Personally, I think holding a badminton cup is great because it promotes team spirit. Moreover, we should practice together. What do you think? Hope to hear from you soon."
                        },
                        {
                              "label": "Ký tên",
                              "text": "Take care, Kato"
                        }
                  ]
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
                              "en": "we should divide tournaments into age categories, so participants compete on equal and fair footing",
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
                  "wordCount": 141,
                  "en": "Dear Club Manager,\n\nMy name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the upcoming annual sports tournament and facility schedule. I believe this is an excellent initiative that will promote athleticism.\n\nTo help achieve the best outcome, I would like to make some practical proposals.\nFirst, we should include multi-sport categories such as badminton, table tennis, and five-a-side football to engage all members.\nSecond, partnering with local sports brands could secure subsidized equipment and attractive prizes.\nFinally, we should ensure professional medical assistance and hydration stations are available throughout each match day.\n\nThank you for your time and consideration. I look forward to hearing your response.\n\nBest regards,\nKato",
                  "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Kato, và tôi đã là một hội viên tích cực của câu lạc bộ chúng ta được hai năm. Trong thời gian này, tôi đã tham gia vào nhiều hoạt động ý nghĩa. Tôi viết thư này để chia sẻ góc nhìn và đưa ra một vài đề xuất mang tính xây dựng liên quan đến giải đấu thể thao thường niên và lịch sử dụng sân bãi. Tôi tin chắc rằng đây là một sáng kiến tuyệt vời giúp thúc đẩy tinh thần thể thao.\n\nĐể giúp đạt được kết quả tốt nhất, tôi xin phép đưa ra ba đề xuất thực tế.\nThứ nhất, chúng ta nên bao gồm nhiều bộ môn như cầu lông, bóng bàn và bóng đá mini 5 người để thu hút mọi hội viên.\nThứ hai, việc hợp tác với các nhãn hàng thể thao địa phương có thể giúp tài trợ dụng cụ và giải thưởng hấp dẫn.\nCuối cùng, chúng ta nên đảm bảo có hỗ trợ y tế chuyên nghiệp và các trạm tiếp nước suốt các ngày thi đấu.\n\nCảm ơn bạn đã dành thời gian xem xét thư. Tôi rất mong sớm nhận được phản hồi từ bạn.\n\nTrân trọng,\nKato",
                  "analysis": [
                        {
                              "label": "Mở đầu, Mục đích & Quan điểm",
                              "text": "My name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the upcoming annual sports tournament and facility schedule. I believe this is an excellent initiative that will promote athleticism."
                        },
                        {
                              "label": "3 Đề xuất thực tế",
                              "text": "To help achieve the best outcome, I would like to make some practical proposals. First, we should include multi-sport categories such as badminton, table tennis, and five-a-side football to engage all members. Second, partnering with local sports brands could secure subsidized equipment and attractive prizes. Finally, we should ensure professional medical assistance and hydration stations are available throughout each match day."
                        },
                        {
                              "label": "Cảm ơn & Ký tên",
                              "text": "Thank you for your time and consideration. I look forward to hearing your response. Best regards, Kato"
                        }
                  ]
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
                  "name": "2. [ý kiến & lý do: gợi ý chủ đề - Topic] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "the guest should talk about what makes a movie successful because this topic would be very interesting and useful for club members",
                              "vi": "khách mời nên nói về điều gì làm nên một bộ phim thành công vì chủ đề này sẽ rất thú vị và hữu ích cho các thành viên CLB"
                        },
                        {
                              "en": "he should share how to make good movies because many members love filmmaking",
                              "vi": "anh ấy nên chia sẻ cách làm phim hay vì nhiều hội viên thích làm phim"
                        },
                        {
                              "en": "he should talk about famous movies and actors because everyone loves this topic",
                              "vi": "anh ấy nên nói về các bộ phim và diễn viên nổi tiếng vì ai cũng thích chủ đề này"
                        },
                        {
                              "en": "he should talk about behind-the-scenes secrets of blockbuster movies because everyone loves film stories",
                              "vi": "anh ấy nên nói về các bí mật hậu trường của phim bom tấn vì ai cũng thích chuyện làm phim"
                        }
                  ]
            },
            {
                  "name": "3. [phát triển thêm ý] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "we could organize a short movie quiz and give small gifts to the winners",
                              "vi": "chúng mình có thể tổ chức đố vui ngắn về phim và tặng quà nhỏ cho người thắng"
                        },
                        {
                              "en": "we should reserve our seats early, so we can sit in the front rows",
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
                  "wordCount": 55,
                  "en": "Dear Kim,\n\nHow is it going? I thought you would like to know that our club plans outdoor screenings. I was thrilled about it!\n\nPersonally, I think classic films are fantastic because everyone loves nostalgia. Moreover, we should bring blankets and popcorn. What do you think? Hope to hear from you soon.\n\nTake care,\nKato",
                  "vi": "Chào Kim,\n\nDạo này bạn thế nào? Mình nghĩ bạn sẽ thích biết tin CLB dự định chiếu phim ngoài trời. Mình rất phấn khởi về tin này!\n\nCá nhân mình thấy các bộ phim kinh điển rất tuyệt vì ai cũng thích sự hoài niệm. Hơn nữa, chúng mình nên mang theo chăn ấm và bắp rang. Bạn nghĩ sao? Mong sớm nhận được tin từ bạn.\n\nBảo trọng nhé,\nKato",
                  "analysis": [
                        {
                              "label": "Chào hỏi & Tin tức",
                              "text": "Dear Kim, How is it going? I thought you would like to know that our club plans outdoor screenings. I was thrilled about it!"
                        },
                        {
                              "label": "Quan điểm, Lý do & Đề xuất",
                              "text": "Personally, I think classic films are fantastic because everyone loves nostalgia. Moreover, we should bring blankets and popcorn. What do you think? Hope to hear from you soon."
                        },
                        {
                              "label": "Ký tên",
                              "text": "Take care, Kato"
                        }
                  ]
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
                  "name": "1. Đề xuất 1: [chủ đề bài nói chuyện - Topic] (Mệnh đề hoàn chỉnh)",
                  "items": [
                        {
                              "en": "the guest should talk about what makes a movie successful because this topic would be very interesting and useful for club members",
                              "vi": "khách mời nên nói về điều gì làm nên một bộ phim thành công vì chủ đề này rất thú vị và hữu ích cho hội viên"
                        },
                        {
                              "en": "the guest speaker should focus on behind-the-scenes secrets of famous blockbuster movies",
                              "vi": "diễn giả khách mời nên tập trung vào những bí mật hậu trường của các bộ phim bom tấn nổi tiếng"
                        },
                        {
                              "en": "the lecture should center on the art of visual storytelling in modern cinema",
                              "vi": "buổi nói chuyện nên xoay quanh nghệ thuật kể chuyện bằng hình ảnh trong điện ảnh hiện đại"
                        },
                        {
                              "en": "the speaker should share practical filmmaking tips and scriptwriting techniques",
                              "vi": "diễn giả nên chia sẻ các mẹo làm phim thực tế và kỹ thuật viết kịch bản"
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
                              "en": "the club should organize a short movie quiz and give small gifts to the winners",
                              "vi": "CLB nên tổ chức một trò chơi đố vui ngắn về phim và trao quà nhỏ cho người thắng"
                        },
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
                  "wordCount": 138,
                  "en": "Dear Club President,\n\nMy name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the outdoor weekend movie screenings and film selection. I believe this is an excellent initiative that will enrich cinematic culture.\n\nTo help achieve the best outcome, I would like to make some practical proposals.\nFirst, we should feature timeless classic movies and award-winning international cinema on alternate weekends.\nSecond, investing in high-definition projection equipment and quality outdoor audio will guarantee an immersive experience.\nFinally, we could organize post-screening discussion circles where film enthusiasts critique cinematography and themes.\n\nThank you for your time and consideration. I look forward to hearing your response.\n\nBest regards,\nKato",
                  "vi": "Kính gửi Chủ tịch Câu lạc bộ,\n\nTên tôi là Kato, và tôi đã là một hội viên tích cực của câu lạc bộ chúng ta được hai năm. Trong thời gian này, tôi đã tham gia vào nhiều hoạt động ý nghĩa. Tôi viết thư này để chia sẻ góc nhìn và đưa ra một vài đề xuất mang tính xây dựng liên quan đến các buổi chiếu phim cuối tuần ngoài trời và việc lựa chọn phim. Tôi tin chắc rằng đây là một sáng kiến tuyệt vời làm phong phú văn hóa điện ảnh.\n\nĐể giúp đạt được kết quả tốt nhất, tôi xin phép đưa ra ba đề xuất thực tế.\nThứ nhất, chúng ta nên luân phiên trình chiếu các bộ phim kinh điển vượt thời gian và phim điện ảnh quốc tế đạt giải.\nThứ hai, đầu tư máy chiếu độ nét cao và âm thanh ngoài trời chất lượng sẽ đảm bảo trải nghiệm sống động.\nCuối cùng, chúng ta có thể tổ chức các vòng tròn thảo luận sau buổi chiếu để người yêu điện ảnh phân tích góc quay và chủ đề phim.\n\nCảm ơn bạn đã dành thời gian xem xét thư. Tôi rất mong sớm nhận được phản hồi từ bạn.\n\nTrân trọng,\nKato",
                  "analysis": [
                        {
                              "label": "Mở đầu, Mục đích & Quan điểm",
                              "text": "My name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the outdoor weekend movie screenings and film selection. I believe this is an excellent initiative that will enrich cinematic culture."
                        },
                        {
                              "label": "3 Đề xuất thực tế",
                              "text": "To help achieve the best outcome, I would like to make some practical proposals. First, we should feature timeless classic movies and award-winning international cinema on alternate weekends. Second, investing in high-definition projection equipment and quality outdoor audio will guarantee an immersive experience. Finally, we could organize post-screening discussion circles where film enthusiasts critique cinematography and themes."
                        },
                        {
                              "label": "Cảm ơn & Ký tên",
                              "text": "Thank you for your time and consideration. I look forward to hearing your response. Best regards, Kato"
                        }
                  ]
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
                              "en": "over the moon",
                              "vi": "vô cùng sung sướng và phấn khởi"
                        },
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
                              "en": "we should nominate Alex and David because they are both excellent and safe drivers",
                              "vi": "chúng mình nên đề cử Alex và David vì cả hai đều là những tay lái xuất sắc và an toàn"
                        },
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
                              "en": "we should check their car carefully before the long journey",
                              "vi": "chúng mình nên kiểm tra xe của họ thật cẩn thận trước chuyến đi dài"
                        },
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
                  "wordCount": 55,
                  "en": "Dear Kim,\n\nHow is it going? I thought you would like to know that our club plans a maintenance workshop. I was excited about it!\n\nPersonally, I think practical auto tips are great for beginners. Moreover, we should bring our repair tools. What do you think? Hope to hear from you soon.\n\nTake care,\nKato",
                  "vi": "Chào Kim,\n\nDạo này bạn thế nào? Mình nghĩ bạn sẽ thích biết tin CLB dự định tổ chức hội thảo bảo dưỡng xe. Mình rất hào hứng về tin này!\n\nCá nhân mình thấy các mẹo thực tế rất hữu ích cho người mới. Hơn nữa, chúng mình nên mang theo bộ dụng cụ sửa chữa. Bạn nghĩ sao? Mong sớm nhận được tin từ bạn.\n\nBảo trọng nhé,\nKato",
                  "analysis": [
                        {
                              "label": "Chào hỏi & Tin tức",
                              "text": "Dear Kim, How is it going? I thought you would like to know that our club plans a maintenance workshop. I was excited about it!"
                        },
                        {
                              "label": "Quan điểm, Lý do & Đề xuất",
                              "text": "Personally, I think practical auto tips are great for beginners. Moreover, we should bring our repair tools. What do you think? Hope to hear from you soon."
                        },
                        {
                              "label": "Ký tên",
                              "text": "Take care, Kato"
                        }
                  ]
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
                              "en": "the main driver must have an international driving license and excellent driving skills",
                              "vi": "người lái chính phải có bằng lái quốc tế và kỹ năng lái xe xuất sắc"
                        },
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
                              "en": "the accompanying passenger should be fluent in English and possess basic car repair skills",
                              "vi": "người đồng hành nên thông thạo tiếng Anh và có kỹ năng sửa xe cơ bản"
                        },
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
                              "en": "the club should provide comprehensive travel insurance and emergency repair tools for the team",
                              "vi": "CLB nên trang bị bảo hiểm du lịch toàn diện và dụng cụ sửa xe khẩn cấp cho đội"
                        },
                        {
                              "en": "we could equip the delegation with high-grade satellite tracking gear, emergency toolkits, and comprehensive medical insurance",
                              "vi": "chúng ta có thể trang bị cho phái đoàn thiết bị định vị vệ tinh, hộp đồ nghề và bảo hiểm y tế toàn diện"
                        },
                        {
                              "en": "the club should establish a daily live check-in vlog, so members back home can track their journey across Europe",
                              "vi": "CLB nên lập kênh nhật ký hành trình trực tuyến mỗi ngày để hội viên ở nhà cùng theo dõi"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 141,
                  "en": "Dear Club Manager,\n\nMy name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the upcoming automotive maintenance workshop and road safety seminars. I believe this is an excellent initiative that will enhance vehicle safety.\n\nTo help achieve the best outcome, I would like to make some practical proposals.\nFirst, the workshop should offer hands-on training for essential procedures like tire changes and brake inspections.\nSecond, partnering with certified mechanics will guarantee expert guidance and professional safety standards.\nFinally, we could organize a cross-country weekend driving tour to put members' handling skills into practice.\n\nThank you for your time and consideration. I look forward to hearing your response.\n\nBest regards,\nKato",
                  "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Kato, và tôi đã là một hội viên tích cực của câu lạc bộ chúng ta được hai năm. Trong thời gian này, tôi đã tham gia vào nhiều hoạt động ý nghĩa. Tôi viết thư này để chia sẻ góc nhìn và đưa ra một vài đề xuất mang tính xây dựng liên quan đến buổi hướng dẫn bảo dưỡng xe và hội thảo an toàn giao thông sắp tới. Tôi tin chắc rằng đây là một sáng kiến tuyệt vời giúp nâng cao an toàn xe.\n\nĐể giúp đạt được kết quả tốt nhất, tôi xin phép đưa ra ba đề xuất thực tế.\nThứ nhất, buổi hội thảo nên có phần thực hành các thao tác thiết yếu như thay lốp và kiểm tra phanh xe.\nThứ hai, hợp tác với thợ máy có chứng chỉ chuyên môn sẽ đảm bảo hướng dẫn chuẩn mực và an toàn tuyệt đối.\nCuối cùng, chúng ta có thể tổ chức một chuyến lái xe dã ngoại cuối tuần để hội viên thực hành kỹ năng xử lý tình huống.\n\nCảm ơn bạn đã dành thời gian xem xét thư. Tôi rất mong sớm nhận được phản hồi từ bạn.\n\nTrân trọng,\nKato",
                  "analysis": [
                        {
                              "label": "Mở đầu, Mục đích & Quan điểm",
                              "text": "My name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the upcoming automotive maintenance workshop and road safety seminars. I believe this is an excellent initiative that will enhance vehicle safety."
                        },
                        {
                              "label": "3 Đề xuất thực tế",
                              "text": "To help achieve the best outcome, I would like to make some practical proposals. First, the workshop should offer hands-on training for essential procedures like tire changes and brake inspections. Second, partnering with certified mechanics will guarantee expert guidance and professional safety standards. Finally, we could organize a cross-country weekend driving tour to put members' handling skills into practice."
                        },
                        {
                              "label": "Cảm ơn & Ký tên",
                              "text": "Thank you for your time and consideration. I look forward to hearing your response. Best regards, Kato"
                        }
                  ]
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
                  "wordCount": 56,
                  "en": "Dear Kim,\n\nHow is it going? I thought you would like to know that our club plans charity activities. I was delighted to hear it!\n\nPersonally, I think supporting local shelters is meaningful because it helps underprivileged children. Moreover, we should donate textbooks. What do you think? Hope to hear from you soon.\n\nTake care,\nKato",
                  "vi": "Chào Kim,\n\nDạo này bạn thế nào? Mình nghĩ bạn sẽ thích biết tin CLB dự định tổ chức các hoạt động từ thiện. Mình rất vui khi nghe tin này!\n\nCá nhân mình thấy hỗ trợ mái ấm địa phương rất ý nghĩa vì giúp đỡ trẻ em khó khăn. Hơn nữa, chúng mình nên quyên góp sách giáo khoa. Bạn nghĩ sao? Mong sớm nhận được tin từ bạn.\n\nBảo trọng nhé,\nKato",
                  "analysis": [
                        {
                              "label": "Chào hỏi & Tin tức",
                              "text": "Dear Kim, How is it going? I thought you would like to know that our club plans charity activities. I was delighted to hear it!"
                        },
                        {
                              "label": "Quan điểm, Lý do & Đề xuất",
                              "text": "Personally, I think supporting local shelters is meaningful because it helps underprivileged children. Moreover, we should donate textbooks. What do you think? Hope to hear from you soon."
                        },
                        {
                              "label": "Ký tên",
                              "text": "Take care, Kato"
                        }
                  ]
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
                  "wordCount": 143,
                  "en": "Dear Club President,\n\nMy name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the upcoming neighborhood volunteer day and community projects. I believe this is an excellent initiative that will strengthen local solidarity.\n\nTo help achieve the best outcome, I would like to make some practical proposals.\nFirst, we should initiate a book and clothing donation drive targeting disadvantaged families in our ward.\nSecond, organizing clean-up campaigns across local public parks and water canals will markedly improve our shared environment.\nFinally, we could establish weekend tutoring circles where member volunteers teach English to underprivileged youngsters.\n\nThank you for your time and consideration. I look forward to hearing your response.\n\nBest regards,\nKato",
                  "vi": "Kính gửi Chủ tịch Câu lạc bộ,\n\nTên tôi là Kato, và tôi đã là một hội viên tích cực của câu lạc bộ chúng ta được hai năm. Trong thời gian này, tôi đã tham gia vào nhiều hoạt động ý nghĩa. Tôi viết thư này để chia sẻ góc nhìn và đưa ra một vài đề xuất mang tính xây dựng liên quan đến ngày hội tình nguyện khu dân cư và các dự án cộng đồng. Tôi tin chắc rằng đây là một sáng kiến tuyệt vời giúp củng cố tinh thần đoàn kết địa phương.\n\nĐể giúp đạt được kết quả tốt nhất, tôi xin phép đưa ra ba đề xuất thực tế.\nThứ nhất, chúng ta nên phát động đợt quyên góp sách vở và quần áo hướng tới các gia đình có hoàn cảnh khó khăn trong phường.\nThứ hai, việc tổ chức các chiến dịch dọn vệ sinh công viên và kênh rạch địa phương sẽ cải thiện đáng kể môi trường chung.\nCuối cùng, chúng ta có thể thành lập các lớp gia sư cuối tuần nơi hội viên tình nguyện dạy tiếng Anh cho trẻ em nghèo.\n\nCảm ơn bạn đã dành thời gian xem xét thư. Tôi rất mong sớm nhận được phản hồi từ bạn.\n\nTrân trọng,\nKato",
                  "analysis": [
                        {
                              "label": "Mở đầu, Mục đích & Quan điểm",
                              "text": "My name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the upcoming neighborhood volunteer day and community projects. I believe this is an excellent initiative that will strengthen local solidarity."
                        },
                        {
                              "label": "3 Đề xuất thực tế",
                              "text": "To help achieve the best outcome, I would like to make some practical proposals. First, we should initiate a book and clothing donation drive targeting disadvantaged families in our ward. Second, organizing clean-up campaigns across local public parks and water canals will markedly improve our shared environment. Finally, we could establish weekend tutoring circles where member volunteers teach English to underprivileged youngsters."
                        },
                        {
                              "label": "Cảm ơn & Ký tên",
                              "text": "Thank you for your time and consideration. I look forward to hearing your response. Best regards, Kato"
                        }
                  ]
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
                  "wordCount": 56,
                  "en": "Dear Kim,\n\nHow is it going? I thought you would like to know that our club plans an acoustic concert. I was thrilled about it!\n\nPersonally, I think live acoustic shows are wonderful for intimate member bonding. Moreover, we should perform a duet. What do you think? Hope to hear from you soon.\n\nTake care,\nKato",
                  "vi": "Chào Kim,\n\nDạo này bạn thế nào? Mình nghĩ bạn sẽ thích biết tin CLB dự định tổ chức đêm nhạc mộc acoustic. Mình rất phấn khởi về tin này!\n\nCá nhân mình thấy các buổi biểu diễn acoustic rất tuyệt để hội viên gắn kết gần gũi. Hơn nữa, chúng mình nên song ca một bài. Bạn nghĩ sao? Mong sớm nhận được tin từ bạn.\n\nBảo trọng nhé,\nKato",
                  "analysis": [
                        {
                              "label": "Chào hỏi & Tin tức",
                              "text": "Dear Kim, How is it going? I thought you would like to know that our club plans an acoustic concert. I was thrilled about it!"
                        },
                        {
                              "label": "Quan điểm, Lý do & Đề xuất",
                              "text": "Personally, I think live acoustic shows are wonderful for intimate member bonding. Moreover, we should perform a duet. What do you think? Hope to hear from you soon."
                        },
                        {
                              "label": "Ký tên",
                              "text": "Take care, Kato"
                        }
                  ]
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
                  "wordCount": 142,
                  "en": "Dear Club Manager,\n\nMy name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the upcoming seasonal acoustic concert and stage performance. I believe this is an excellent initiative that will showcase members' talent.\n\nTo help achieve the best outcome, I would like to make some practical proposals.\nFirst, we should feature diverse genres encompassing acoustic folk, pop ballads, and classical instrumental performances.\nSecond, securing high-quality microphones and warm ambient acoustic lighting will significantly enhance the audience's auditory experience.\nFinally, we could record live performance videos to promote our club musical activities across social media.\n\nThank you for your time and consideration. I look forward to hearing your response.\n\nBest regards,\nKato",
                  "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Kato, và tôi đã là một hội viên tích cực của câu lạc bộ chúng ta được hai năm. Trong thời gian này, tôi đã tham gia vào nhiều hoạt động ý nghĩa. Tôi viết thư này để chia sẻ góc nhìn và đưa ra một vài đề xuất mang tính xây dựng liên quan đến đêm nhạc acoustic theo mùa và buổi biểu diễn trên sân khấu sắp tới. Tôi tin chắc rằng đây là một sáng kiến tuyệt vời để tôn vinh tài năng của hội viên.\n\nĐể giúp đạt được kết quả tốt nhất, tôi xin phép đưa ra ba đề xuất thực tế.\nThứ nhất, chúng ta nên giới thiệu các thể loại đa dạng bao gồm dân ca mộc mạc, pop ballad và độc tấu nhạc cụ cổ điển.\nThứ hai, việc trang bị micro chất lượng cao và ánh sáng sân khấu ấm cúng sẽ cải thiện đáng kể trải nghiệm nghe của khán giả.\nCuối cùng, chúng ta có thể ghi hình các video biểu diễn trực tiếp để quảng bá hoạt động âm nhạc của CLB trên mạng xã hội.\n\nCảm ơn bạn đã dành thời gian xem xét thư. Tôi rất mong sớm nhận được phản hồi từ bạn.\n\nTrân trọng,\nKato",
                  "analysis": [
                        {
                              "label": "Mở đầu, Mục đích & Quan điểm",
                              "text": "My name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the upcoming seasonal acoustic concert and stage performance. I believe this is an excellent initiative that will showcase members' talent."
                        },
                        {
                              "label": "3 Đề xuất thực tế",
                              "text": "To help achieve the best outcome, I would like to make some practical proposals. First, we should feature diverse genres encompassing acoustic folk, pop ballads, and classical instrumental performances. Second, securing high-quality microphones and warm ambient acoustic lighting will significantly enhance the audience's auditory experience. Finally, we could record live performance videos to promote our club musical activities across social media."
                        },
                        {
                              "label": "Cảm ơn & Ký tên",
                              "text": "Thank you for your time and consideration. I look forward to hearing your response. Best regards, Kato"
                        }
                  ]
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
                              "en": "I can bring some interesting conversation flashcards, so we can debate in English for two hours",
                              "vi": "mình có thể mang vài bộ thẻ câu hỏi thú vị để chúng mình cùng tranh luận bằng tiếng Anh trong 2 tiếng"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 56,
                  "en": "Dear Kim,\n\nHow is it going? I thought you would like to know that our club plans native speaker debates. I was thrilled about it!\n\nPersonally, I think debate sessions are great because they sharpen speaking fluency. Moreover, we should form a team. What do you think? Hope to hear from you soon.\n\nTake care,\nKato",
                  "vi": "Chào Kim,\n\nDạo này bạn thế nào? Mình nghĩ bạn sẽ thích biết tin CLB dự định tổ chức tranh luận cùng người bản xứ. Mình rất hào hứng về tin này!\n\nCá nhân mình thấy các buổi tranh luận rất tuyệt vì giúp tăng phản xạ nói trôi chảy. Hơn nữa, chúng mình nên lập một đội. Bạn nghĩ sao? Mong sớm nhận được tin từ bạn.\n\nBảo trọng nhé,\nKato",
                  "analysis": [
                        {
                              "label": "Chào hỏi & Tin tức",
                              "text": "Dear Kim, How is it going? I thought you would like to know that our club plans native speaker debates. I was thrilled about it!"
                        },
                        {
                              "label": "Quan điểm, Lý do & Đề xuất",
                              "text": "Personally, I think debate sessions are great because they sharpen speaking fluency. Moreover, we should form a team. What do you think? Hope to hear from you soon."
                        },
                        {
                              "label": "Ký tên",
                              "text": "Take care, Kato"
                        }
                  ]
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
                  "wordCount": 142,
                  "en": "Dear Club President,\n\nMy name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the weekly English debate workshops and discussion topics. I believe this is an excellent initiative that will boost communicative confidence.\n\nTo help achieve the best outcome, I would like to make some practical proposals.\nFirst, we should invite certified native English teachers to moderate debates and offer individualized pronunciation feedback.\nSecond, selecting contemporary global topics such as technology and environmental conservation will stimulate lively discussions.\nFinally, we could introduce mini-presentation sessions allowing novice learners to practice public speaking in small groups.\n\nThank you for your time and consideration. I look forward to hearing your response.\n\nBest regards,\nKato",
                  "vi": "Kính gửi Chủ tịch Câu lạc bộ,\n\nTên tôi là Kato, và tôi đã là một hội viên tích cực của câu lạc bộ chúng ta được hai năm. Trong thời gian này, tôi đã tham gia vào nhiều hoạt động ý nghĩa. Tôi viết thư này để chia sẻ góc nhìn và đưa ra một vài đề xuất mang tính xây dựng liên quan đến các buổi hội thảo tranh luận tiếng Anh hàng tuần và chủ đề thảo luận. Tôi tin chắc rằng đây là một sáng kiến tuyệt vời giúp nâng cao sự tự tin khi giao tiếp.\n\nĐể giúp đạt được kết quả tốt nhất, tôi xin phép đưa ra ba đề xuất thực tế.\nThứ nhất, chúng ta nên mời giáo viên bản xứ có chứng chỉ chuyên môn điều phối tranh luận và sửa phát âm cho từng cá nhân.\nThứ hai, việc lựa chọn các chủ đề toàn cầu đương đại như công nghệ và bảo vệ môi trường sẽ khơi dậy các cuộc thảo luận sôi nổi.\nCuối cùng, chúng ta có thể bổ sung các phần thuyết trình ngắn giúp các học viên mới làm quen tự tin nói trước đám đông theo nhóm nhỏ.\n\nCảm ơn bạn đã dành thời gian xem xét thư. Tôi rất mong sớm nhận được phản hồi từ bạn.\n\nTrân trọng,\nKato",
                  "analysis": [
                        {
                              "label": "Mở đầu, Mục đích & Quan điểm",
                              "text": "My name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the weekly English debate workshops and discussion topics. I believe this is an excellent initiative that will boost communicative confidence."
                        },
                        {
                              "label": "3 Đề xuất thực tế",
                              "text": "To help achieve the best outcome, I would like to make some practical proposals. First, we should invite certified native English teachers to moderate debates and offer individualized pronunciation feedback. Second, selecting contemporary global topics such as technology and environmental conservation will stimulate lively discussions. Finally, we could introduce mini-presentation sessions allowing novice learners to practice public speaking in small groups."
                        },
                        {
                              "label": "Cảm ơn & Ký tên",
                              "text": "Thank you for your time and consideration. I look forward to hearing your response. Best regards, Kato"
                        }
                  ]
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
                              "en": "we should register early, so we do not miss out on complimentary seminar seats",
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
                  "wordCount": 56,
                  "en": "Dear Kim,\n\nHow is it going? I thought you would like to know that our club plans a presentation contest. I was thrilled about it!\n\nPersonally, I think public speaking is fantastic because it builds confidence. Moreover, we should register as a duo. What do you think? Hope to hear from you soon.\n\nTake care,\nKato",
                  "vi": "Chào Kim,\n\nDạo này bạn thế nào? Mình nghĩ bạn sẽ thích biết tin CLB dự định tổ chức cuộc thi thuyết trình. Mình rất phấn khởi về tin này!\n\nCá nhân mình thấy thuyết trình trước công chúng thật tuyệt vì rèn sự tự tin. Hơn nữa, chúng mình nên đăng ký cặp đôi. Bạn nghĩ sao? Mong sớm nhận được tin từ bạn.\n\nBảo trọng nhé,\nKato",
                  "analysis": [
                        {
                              "label": "Chào hỏi & Tin tức",
                              "text": "Dear Kim, How is it going? I thought you would like to know that our club plans a presentation contest. I was thrilled about it!"
                        },
                        {
                              "label": "Quan điểm, Lý do & Đề xuất",
                              "text": "Personally, I think public speaking is fantastic because it builds confidence. Moreover, we should register as a duo. What do you think? Hope to hear from you soon."
                        },
                        {
                              "label": "Ký tên",
                              "text": "Take care, Kato"
                        }
                  ]
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
                  "wordCount": 140,
                  "en": "Dear Club Manager,\n\nMy name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the upcoming annual English speech competition. I believe this is an excellent initiative that will inspire members' oratory skills.\n\nTo help achieve the best outcome, I would like to make some practical proposals.\nFirst, we should offer mentoring workshops led by senior speakers before the final presentation round.\nSecond, providing clear evaluation rubrics covering pronunciation, body language, and slide structure will ensure fair scoring.\nFinally, we could offer book vouchers and language course scholarships as motivational prizes for winners.\n\nThank you for your time and consideration. I look forward to hearing your response.\n\nBest regards,\nKato",
                  "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Kato, và tôi đã là một hội viên tích cực của câu lạc bộ chúng ta được hai năm. Trong thời gian này, tôi đã tham gia vào nhiều hoạt động ý nghĩa. Tôi viết thư này để chia sẻ góc nhìn và đưa ra một vài đề xuất mang tính xây dựng liên quan đến cuộc thi hùng biện tiếng Anh thường niên sắp tới. Tôi tin chắc rằng đây là một sáng kiến tuyệt vời giúp khơi nguồn kỹ năng diễn thuyết của hội viên.\n\nĐể giúp đạt được kết quả tốt nhất, tôi xin phép đưa ra ba đề xuất thực tế.\nThứ nhất, chúng ta nên mở các buổi hướng dẫn kỹ năng do các diễn giả nhiều kinh nghiệm dẫn dắt trước vòng chung kết.\nThứ hai, việc ban hành tiêu chí đánh giá rõ ràng bao gồm phát âm, ngôn ngữ cơ thể và bố cục bài trình chiếu sẽ đảm bảo chấm điểm công bằng.\nCuối cùng, chúng ta có thể trao tặng các phiếu mua sách và học bổng khóa học ngoại ngữ làm phần thưởng khích lệ người chiến thắng.\n\nCảm ơn bạn đã dành thời gian xem xét thư. Tôi rất mong sớm nhận được phản hồi từ bạn.\n\nTrân trọng,\nKato",
                  "analysis": [
                        {
                              "label": "Mở đầu, Mục đích & Quan điểm",
                              "text": "My name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the upcoming annual English speech competition. I believe this is an excellent initiative that will inspire members' oratory skills."
                        },
                        {
                              "label": "3 Đề xuất thực tế",
                              "text": "To help achieve the best outcome, I would like to make some practical proposals. First, we should offer mentoring workshops led by senior speakers before the final presentation round. Second, providing clear evaluation rubrics covering pronunciation, body language, and slide structure will ensure fair scoring. Finally, we could offer book vouchers and language course scholarships as motivational prizes for winners."
                        },
                        {
                              "label": "Cảm ơn & Ký tên",
                              "text": "Thank you for your time and consideration. I look forward to hearing your response. Best regards, Kato"
                        }
                  ]
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
                              "en": "we can reread our favorite chapters beforehand, so we can share our thoughts during the Q&A",
                              "vi": "chúng mình có thể đọc lại những chương truyện hay nhất trước để chia sẻ trong phần hỏi đáp"
                        }
                  ]
            }
      ],
      "samples": [
            {
                  "title": "Bài mẫu chuẩn Band B2+",
                  "wordCount": 55,
                  "en": "Dear Kim,\n\nHow is it going? I thought you would like to know that our club plans an author exchange. I was thrilled about it!\n\nPersonally, I think meeting the author is wonderful for literary appreciation. Moreover, we should prepare questions beforehand. What do you think? Hope to hear from you soon.\n\nTake care,\nKato",
                  "vi": "Chào Kim,\n\nDạo này bạn thế nào? Mình nghĩ bạn sẽ thích biết tin CLB dự định tổ chức buổi giao lưu tác giả. Mình rất phấn khởi về tin này!\n\nCá nhân mình thấy gặp tác giả rất tuyệt để hiểu sâu thêm tác phẩm. Hơn nữa, chúng mình nên chuẩn bị câu hỏi từ trước. Bạn nghĩ sao? Mong sớm nhận được tin từ bạn.\n\nBảo trọng nhé,\nKato",
                  "analysis": [
                        {
                              "label": "Chào hỏi & Tin tức",
                              "text": "Dear Kim, How is it going? I thought you would like to know that our club plans an author exchange. I was thrilled about it!"
                        },
                        {
                              "label": "Quan điểm, Lý do & Đề xuất",
                              "text": "Personally, I think meeting the author is wonderful for literary appreciation. Moreover, we should prepare questions beforehand. What do you think? Hope to hear from you soon."
                        },
                        {
                              "label": "Ký tên",
                              "text": "Take care, Kato"
                        }
                  ]
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
                  "wordCount": 145,
                  "en": "Dear Club President,\n\nMy name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the upcoming author exchange and book signing ceremony. I believe this is an excellent initiative that will deepen our literary passion.\n\nTo help achieve the best outcome, I would like to make some practical proposals.\nFirst, we should invite a renowned novelist whose recent bestseller explores historical fiction and human emotions.\nSecond, hosting an interactive Q&A session will allow readers to directly discuss creative writing techniques with the author.\nFinally, we could organize an autograph corner accompanied by complimentary tea and snacks for attendees.\n\nThank you for your time and consideration. I look forward to hearing your response.\n\nBest regards,\nKato",
                  "vi": "Kính gửi Chủ tịch Câu lạc bộ,\n\nTên tôi là Kato, và tôi đã là một hội viên tích cực của câu lạc bộ chúng ta được hai năm. Trong thời gian này, tôi đã tham gia vào nhiều hoạt động ý nghĩa. Tôi viết thư này để chia sẻ góc nhìn và đưa ra một vài đề xuất mang tính xây dựng liên quan đến buổi giao lưu tác giả và ký tặng sách sắp tới. Tôi tin chắc rằng đây là một sáng kiến tuyệt vời giúp bồi đắp niềm đam mê văn học.\n\nĐể giúp đạt được kết quả tốt nhất, tôi xin phép đưa ra ba đề xuất thực tế.\nThứ nhất, chúng ta nên mời một tiểu thuyết gia tên tuổi có tác phẩm bán chạy gần đây khám phá về tiểu thuyết lịch sử và cảm xúc con người.\nThứ hai, việc tổ chức phần hỏi đáp tương tác sẽ giúp độc giả trực tiếp trao đổi kỹ thuật sáng tác cùng tác giả.\nCuối cùng, chúng ta có thể bố trí một góc ký tặng đi kèm trà và bánh ngọt miễn phí cho người tham dự.\n\nCảm ơn bạn đã dành thời gian xem xét thư. Tôi rất mong sớm nhận được phản hồi từ bạn.\n\nTrân trọng,\nKato",
                  "analysis": [
                        {
                              "label": "Mở đầu, Mục đích & Quan điểm",
                              "text": "My name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the upcoming author exchange and book signing ceremony. I believe this is an excellent initiative that will deepen our literary passion."
                        },
                        {
                              "label": "3 Đề xuất thực tế",
                              "text": "To help achieve the best outcome, I would like to make some practical proposals. First, we should invite a renowned novelist whose recent bestseller explores historical fiction and human emotions. Second, hosting an interactive Q&A session will allow readers to directly discuss creative writing techniques with the author. Finally, we could organize an autograph corner accompanied by complimentary tea and snacks for attendees."
                        },
                        {
                              "label": "Cảm ơn & Ký tên",
                              "text": "Thank you for your time and consideration. I look forward to hearing your response. Best regards, Kato"
                        }
                  ]
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
                  "wordCount": 55,
                  "en": "Dear Kim,\n\nHow is it going? I thought you would like to know that our club plans a reading month. I was thrilled about it!\n\nPersonally, I think a collective reading goal is great for motivation. Moreover, we should exchange favorite novels. What do you think? Hope to hear from you soon.\n\nTake care,\nKato",
                  "vi": "Chào Kim,\n\nDạo này bạn thế nào? Mình nghĩ bạn sẽ thích biết tin CLB dự định tổ chức tháng đọc sách. Mình rất phấn khởi về tin này!\n\nCá nhân mình thấy mục tiêu đọc chung rất tuyệt để tạo động lực. Hơn nữa, chúng mình nên đổi tiểu thuyết yêu thích cho nhau. Bạn nghĩ sao? Mong sớm nhận được tin từ bạn.\n\nBảo trọng nhé,\nKato",
                  "analysis": [
                        {
                              "label": "Chào hỏi & Tin tức",
                              "text": "Dear Kim, How is it going? I thought you would like to know that our club plans a reading month. I was thrilled about it!"
                        },
                        {
                              "label": "Quan điểm, Lý do & Đề xuất",
                              "text": "Personally, I think a collective reading goal is great for motivation. Moreover, we should exchange favorite novels. What do you think? Hope to hear from you soon."
                        },
                        {
                              "label": "Ký tên",
                              "text": "Take care, Kato"
                        }
                  ]
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
      "template": "Dear Club Manager,\nMy name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email regarding the municipal authority's plan to close down our public library. I believe that this decision is short-sighted and deeply regrettable.\nTo preserve and modernize this vital cultural institution, I would like to make a few suggestions. First, our club should advocate for transforming the library into a modern hybrid learning hub equipped with free Wi-Fi, computer workstations, and digital archives alongside traditional book stacks. Second, it would be better to integrate a community coffee lounge and silent study pods to attract freelance workers and students. Finally, we could organize weekly literary storytelling sessions and coding clubs for children to demonstrate high community utility. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\n[Tên của bạn]",
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
                  "wordCount": 144,
                  "en": "Dear Club Manager,\n\nMy name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the monthly book selection and discussion formats. I believe this is an excellent initiative that will encourage reading habits.\n\nTo help achieve the best outcome, I would like to make some practical proposals.\nFirst, we should select books through online voting, so members can read genres they genuinely enjoy.\nSecond, organizing small breakout discussion groups of five members will ensure everyone has the opportunity to speak.\nFinally, we could establish a mini community library where members can freely borrow and exchange popular paperbacks.\n\nThank you for your time and consideration. I look forward to hearing your response.\n\nBest regards,\nKato",
                  "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Kato, và tôi đã là một hội viên tích cực của câu lạc bộ chúng ta được hai năm. Trong thời gian này, tôi đã tham gia vào nhiều hoạt động ý nghĩa. Tôi viết thư này để chia sẻ góc nhìn và đưa ra một vài đề xuất mang tính xây dựng liên quan đến việc bình chọn sách tháng và hình thức thảo luận. Tôi tin chắc rằng đây là một sáng kiến tuyệt vời giúp hình thành thói quen đọc sách.\n\nĐể giúp đạt được kết quả tốt nhất, tôi xin phép đưa ra ba đề xuất thực tế.\nThứ nhất, chúng ta nên lựa chọn sách thông qua bình chọn trực tuyến để các hội viên được đọc những thể loại thực sự yêu thích.\nThứ hai, việc tổ chức các nhóm thảo luận nhỏ gồm 5 người sẽ đảm bảo tất cả mọi người đều có cơ hội phát biểu.\nCuối cùng, chúng ta có thể xây dựng tủ sách cộng đồng nhỏ nơi các thành viên có thể tự do mượn và trao đổi sách giấy hay.\n\nCảm ơn bạn đã dành thời gian xem xét thư. Tôi rất mong sớm nhận được phản hồi từ bạn.\n\nTrân trọng,\nKato",
                  "analysis": [
                        {
                              "label": "Mở đầu, Mục đích & Quan điểm",
                              "text": "My name is Kato, and I have been an active member of our club for two years. During this time, I have participated in many meaningful activities. I am writing to share my views and offer several practical suggestions regarding the monthly book selection and discussion formats. I believe this is an excellent initiative that will encourage reading habits."
                        },
                        {
                              "label": "3 Đề xuất thực tế",
                              "text": "To help achieve the best outcome, I would like to make some practical proposals. First, we should select books through online voting, so members can read genres they genuinely enjoy. Second, organizing small breakout discussion groups of five members will ensure everyone has the opportunity to speak. Finally, we could establish a mini community library where members can freely borrow and exchange popular paperbacks."
                        },
                        {
                              "label": "Cảm ơn & Ký tên",
                              "text": "Thank you for your time and consideration. I look forward to hearing your response. Best regards, Kato"
                        }
                  ]
            }
      ]
    }
  }
};
