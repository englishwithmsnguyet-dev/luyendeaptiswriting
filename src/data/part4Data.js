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
          "icon": "Sparkles",
          "items": [
            {
              "en": "quite excited",
              "vi": "khá hào hứng",
              "example": "I was quite excited when I heard about the monthly walking event."
            },
            {
              "en": "absolutely thrilled",
              "vi": "cực kỳ phấn khích",
              "example": "I was absolutely thrilled to find out about this initiative."
            },
            {
              "en": "pleasantly surprised",
              "vi": "ngạc nhiên một cách thích thú",
              "example": "I was pleasantly surprised by the club's announcement."
            }
          ]
        },
        {
          "name": "2. Nêu Quan điểm & Lý do (Opinion & Reasons)",
          "icon": "CheckCircle2",
          "items": [
            {
              "en": "it encourages people to exercise together",
              "vi": "khuyến khích mọi người cùng nhau vận động thể chất",
              "example": "Personally, I think it is great because it encourages people to exercise together."
            },
            {
              "en": "it helps members stay active and healthy",
              "vi": "giúp hội viên duy trì lối sống năng động và khỏe mạnh",
              "example": "Regular walking helps members stay active and healthy."
            },
            {
              "en": "it creates a great opportunity to make new friends",
              "vi": "tạo cơ hội tuyệt vời để kết thêm bạn bè mới",
              "example": "It creates a great opportunity to socialize and make new friends."
            }
          ]
        },
        {
          "name": "3. Hoạt động đề xuất vui nhộn (Fun Activities)",
          "icon": "BookOpen",
          "items": [
            {
              "en": "organize some fun games after the walk",
              "vi": "tổ chức một số trò chơi vui nhộn sau khi đi bộ",
              "example": "Moreover, we could organize some fun games after the walk."
            },
            {
              "en": "have a small picnic in the park",
              "vi": "cùng dã ngoại nhẹ trong công viên",
              "example": "We could bring some light snacks and have a picnic together."
            },
            {
              "en": "take group photos at scenic viewpoints",
              "vi": "chụp ảnh lưu niệm tại những điểm ngắm cảnh đẹp",
              "example": "We could take lots of beautiful photos along the route."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 50,
          "en": "Hi Kim,\nHave you heard about our club's upcoming monthly walking event? I was absolutely thrilled by the announcement! In my view, it is a brilliant opportunity to boost fitness and bond together. Why don't we register for the inaugural walk this weekend?\nLet me know your thoughts!\nBest,\nAlex",
          "vi": "Chào Kim,\nCậu đã nghe tin câu lạc bộ mình sắp tổ chức sự kiện đi bộ hàng tháng chưa? Tớ cực kỳ hào hứng khi nghe thông báo! Theo tớ, đây là cơ hội tuyệt vời để nâng cao thể lực và gắn kết cùng nhau. Hay cuối tuần này chúng mình cùng đăng ký tham gia buổi đi bộ đầu tiên nhé?\nCho tớ biết suy nghĩ của cậu nha!\nThân,\nAlex",
          "analysis": [
            {
              "label": "Lời chào & Hỏi thăm",
              "text": "Hi Kim, Have you heard about our club's upcoming monthly walking event?"
            },
            {
              "label": "Bày tỏ cảm xúc (B2+)",
              "text": "I was absolutely thrilled by the announcement!"
            },
            {
              "label": "Quan điểm & Đề xuất",
              "text": "In my view, it is a brilliant opportunity to boost fitness and bond together. Why don't we register for the inaugural walk this weekend?"
            },
            {
              "label": "Kết thư thân mật",
              "text": "Let me know your thoughts! Best, Alex"
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
          "name": "1. Giới thiệu bản thân & Gắn bó",
          "icon": "ShieldCheck",
          "items": [
            {
              "en": "I have been a member of the club for two years",
              "vi": "tôi đã là thành viên CLB được hai năm",
              "example": "My name is Nam, and I have been a member of the club for two years."
            },
            {
              "en": "a wide range of meaningful activities",
              "vi": "nhiều hoạt động ý nghĩa phong phú",
              "example": "I have had the opportunity to participate in a wide range of meaningful activities."
            },
            {
              "en": "greatly enriched my experience and personal development",
              "vi": "làm phong phú rất nhiều trải nghiệm và sự phát triển bản thân",
              "example": "These events have greatly enriched my experience and personal development."
            }
          ]
        },
        {
          "name": "2. Đề xuất 1: Tuyến đường an toàn (Route Selection)",
          "icon": "Sparkles",
          "items": [
            {
              "en": "choose safe and scenic walking routes",
              "vi": "chọn các cung đường đi bộ an toàn và cảnh quan tươi đẹp",
              "example": "First, we should choose safe and scenic walking routes around local lakes."
            },
            {
              "en": "enjoy the natural surroundings",
              "vi": "tận hưởng khung cảnh thiên nhiên trong lành",
              "example": "This allows participants to enjoy the natural surroundings and breathe fresh air."
            },
            {
              "en": "suitable for participants of all fitness levels",
              "vi": "phù hợp cho mọi người ở các cấp độ thể lực khác nhau",
              "example": "The route should be gentle and suitable for participants of all fitness levels."
            }
          ]
        },
        {
          "name": "3. Đề xuất 2: Hoạt động gắn kết (Interactive Activities)",
          "icon": "CheckCircle2",
          "items": [
            {
              "en": "organize some simple team games or fitness challenges",
              "vi": "tổ chức các trò chơi đồng đội đơn giản hoặc thử thách thể lực",
              "example": "Second, it would be better to organize some simple team games after the walk."
            },
            {
              "en": "encourage interaction among members",
              "vi": "khuyến khích tương tác giao lưu giữa các hội viên",
              "example": "Team challenges encourage interaction and friendly conversation."
            },
            {
              "en": "pair newcomers with experienced members",
              "vi": "ghép cặp người mới với các thành viên kỳ cựu",
              "example": "We could pair newcomers with experienced members to create a welcoming vibe."
            }
          ]
        },
        {
          "name": "4. Đề xuất 3: Hậu cần & Khích lệ (Logistics & Incentives)",
          "icon": "BookOpen",
          "items": [
            {
              "en": "prepare healthy drinks and snacks for everyone",
              "vi": "chuẩn bị đồ uống tốt cho sức khỏe và đồ ăn nhẹ bồi dưỡng",
              "example": "Finally, we could prepare healthy drinks and fresh fruit for everyone."
            },
            {
              "en": "award certificates or small souvenir badges",
              "vi": "trao chứng nhận hoặc huy hiệu kỷ niệm lưu niệm",
              "example": "We could award completion badges to members who join consistently."
            },
            {
              "en": "make a positive difference and help the club achieve its objectives",
              "vi": "tạo nên sự khác biệt tích cực và giúp CLB đạt được mục tiêu",
              "example": "Overall, I am confident that these measures will make a positive difference."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 130,
          "en": "Dear Club Manager,\n\nMy name is Alex, and I have been an active member of our Walking Club for over a year. I am writing to express my enthusiastic support and offer several constructive suggestions regarding the proposed monthly walking events.\n\nIn my view, this initiative is fantastic for fostering physical fitness and community spirit. To ensure its long-term success, I would like to propose three practical measures. First, we should select scenic, pedestrian-friendly trails that accommodate participants of varying fitness levels. Furthermore, organizing brief team challenges or social activities afterwards would facilitate meaningful connections among members. Finally, providing healthy refreshments and fruit at the finish line would create a welcoming atmosphere.\n\nI trust these recommendations will prove useful, and I look forward to your response.\n\nYours sincerely,\nAlex Nguyen",
          "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Alex, và tôi đã là một hội viên tích cực của Câu lạc bộ Đi bộ hơn một năm qua. Tôi viết thư này để bày tỏ sự ủng hộ nhiệt tình và đưa ra một vài đề xuất mang tính xây dựng về các sự kiện đi bộ hàng tháng sắp tới.\n\nTheo tôi, sáng kiến này rất tuyệt vời trong việc nâng cao thể chất và tinh thần gắn kết cộng đồng. Để đảm bảo thành công lâu dài, tôi xin đề xuất ba giải pháp thực tế. Thứ nhất, chúng ta nên lựa chọn những cung đường đẹp, an toàn cho người đi bộ và phù hợp với nhiều mức thể lực khác nhau. Hơn nữa, việc tổ chức các thử thách nhóm hoặc hoạt động giao lưu ngắn sau buổi đi bộ sẽ tạo điều kiện kết nối ý nghĩa giữa các hội viên. Cuối cùng, việc chuẩn bị đồ uống dinh dưỡng và hoa quả tươi tại vạch đích sẽ tạo nên bầu không khí chu đáo, ấm cúng.\n\nTôi tin rằng những khuyến nghị này sẽ hữu ích, và tôi rất mong nhận được phản hồi từ ban quản lý.\n\nTrân trọng,\nAlex Nguyen",
          "analysis": [
            {
              "label": "Chào hỏi & Giới thiệu bản thân",
              "text": "Dear Club Manager, My name is Alex, and I have been an active member of our Walking Club for over a year."
            },
            {
              "label": "Mục đích viết thư & Nêu quan điểm",
              "text": "I am writing to express my enthusiastic support and offer several constructive suggestions regarding the proposed monthly walking events. In my view, this initiative is fantastic for fostering physical fitness and community spirit."
            },
            {
              "label": "3 Đề xuất giải pháp cụ thể (B2+)",
              "text": "First, we should select scenic, pedestrian-friendly trails that accommodate participants of varying fitness levels. Furthermore, organizing brief team challenges or social activities afterwards would facilitate meaningful connections among members. Finally, providing healthy refreshments and fruit at the finish line would create a welcoming atmosphere."
            },
            {
              "label": "Lời kết trang trọng & Ký tên",
              "text": "I trust these recommendations will prove useful, and I look forward to your response. Yours sincerely, Alex Nguyen"
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
          "icon": "Sparkles",
          "items": [
            {
              "en": "quite surprised",
              "vi": "khá bất ngờ",
              "example": "I was quite surprised by the 15% fee increase."
            },
            {
              "en": "a bit concerned",
              "vi": "hơi băn khoăn một chút",
              "example": "I was a bit concerned about our monthly budget."
            },
            {
              "en": "excited about new equipment",
              "vi": "hào hứng với các máy tập mới",
              "example": "However, I am excited about testing the new cardio machines."
            }
          ]
        },
        {
          "name": "2. Quan điểm & Lý do (Opinion & Reasons)",
          "icon": "CheckCircle2",
          "items": [
            {
              "en": "it is totally reasonable",
              "vi": "điều đó hoàn toàn hợp lý",
              "example": "Personally, I think the fee rise is totally reasonable because the old machines break down often."
            },
            {
              "en": "worth the extra money",
              "vi": "rất xứng đáng với số tiền bỏ thêm",
              "example": "Better facilities are definitely worth the extra money."
            },
            {
              "en": "renew our membership early for discounts",
              "vi": "gia hạn thẻ tập sớm để nhận chiết khấu",
              "example": "Moreover, we should renew our package together for a discount."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 50,
          "en": "Hi Mark,\nDid you see the club's notice about the 15% fee increase for upgrading equipment? Although paying more is never pleasant, modernizing our gym machines is definitely worthwhile for better workouts. I really hope they install brand new treadmills soon!\nWhat is your take on this change?\nCheers,\nAlex",
          "vi": "Chào Mark,\nCậu đã xem thông báo của câu lạc bộ về việc tăng 15% phí để nâng cấp thiết bị chưa? Dù việc trả thêm tiền chẳng dễ chịu chút nào, nhưng hiện đại hóa máy móc trong phòng tập chắc chắn rất xứng đáng để tập luyện hiệu quả hơn. Tớ thực sự hy vọng họ sớm lắp thêm máy chạy bộ mới!\nCậu nghĩ sao về sự thay đổi này?\nThân,\nAlex",
          "analysis": [
            {
              "label": "Lời chào & Nhắc tin",
              "text": "Hi Mark, Did you see the club's notice about the 15% fee increase for upgrading equipment?"
            },
            {
              "label": "Cảm xúc & Đánh giá (B2+)",
              "text": "Although paying more is never pleasant, modernizing our gym machines is definitely worthwhile for better workouts."
            },
            {
              "label": "Hy vọng & Hỏi ý kiến",
              "text": "I really hope they install brand new treadmills soon! What is your take on this change? Cheers, Alex"
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
          "name": "1. Đề xuất về Thiết bị (Equipment)",
          "icon": "Sparkles",
          "items": [
            {
              "en": "prioritize modern cardio machines",
              "vi": "ưu tiên sắm các máy tập tim mạch hiện đại",
              "example": "First, we should prioritize modern cardio machines such as smart treadmills."
            },
            {
              "en": "replace outdated treadmills and weights",
              "vi": "thay thế máy chạy bộ và tạ đã quá cũ",
              "example": "Replacing outdated machines ensures member safety and workout efficiency."
            }
          ]
        },
        {
          "name": "2. Đề xuất về Chính sách Phí (Pricing Policies)",
          "icon": "CheckCircle2",
          "items": [
            {
              "en": "offer loyalty discounts for long-term members",
              "vi": "dành chiết khấu tri ân cho hội viên lâu năm",
              "example": "Second, it would be better to offer loyalty discounts for existing members."
            },
            {
              "en": "implement a gradual price transition",
              "vi": "áp dụng lộ trình tăng giá dần dần theo từng giai đoạn",
              "example": "A gradual price transition helps members adjust comfortably."
            }
          ]
        },
        {
          "name": "3. Đề xuất về Giá trị cộng thêm (Added Value)",
          "icon": "BookOpen",
          "items": [
            {
              "en": "introduce complimentary group fitness classes",
              "vi": "bổ sung các lớp tập nhóm miễn phí (Yoga, Zumba)",
              "example": "Finally, we could introduce complimentary group classes every weekend."
            },
            {
              "en": "provide free body composition assessments",
              "vi": "cung cấp dịch vụ đo chỉ số cơ thể định kỳ miễn phí",
              "example": "Providing free body composition assessments creates immense added value."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 139,
          "en": "Dear Club Manager,\n\nMy name is Alex, and I have been training regularly at our Fitness Club for the past two years. I am writing to share my perspective regarding the proposed 15% membership fee adjustment and equipment upgrade.\n\nWhile fee adjustments often raise member concerns, I understand that substantial investment is required to modernize our workout facilities. To maintain high satisfaction levels, I would like to offer three recommendations. First, prioritizing versatile cardio equipment, such as state-of-the-art treadmills and rowing machines, will directly benefit the majority of members. Additionally, introducing flexible off-peak membership packages or student discounts would accommodate budget-conscious gym-goers. Finally, offering complimentary introductory sessions with personal trainers would help everyone utilize the new machines safely and effectively.\n\nI hope these suggestions assist in smooth implementation, and I look forward to your feedback.\n\nYours sincerely,\nAlex Nguyen",
          "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Alex, và tôi đã tập luyện đều đặn tại Câu lạc bộ Thể hình của chúng ta suốt hai năm qua. Tôi viết thư này nhằm chia sẻ góc nhìn về kế hoạch điều chỉnh 15% học phí và nâng cấp cơ sở vật chất.\n\nDù việc điều chỉnh phí thường gây băn khoăn cho hội viên, tôi hiểu rằng cần nguồn đầu tư đáng kể để hiện đại hóa trang thiết bị tập luyện. Để duy trì mức độ hài lòng cao, tôi xin đề xuất ba giải pháp. Thứ nhất, việc ưu tiên các thiết bị cardio đa năng như máy chạy bộ và máy chèo thuyền hiện đại sẽ mang lại lợi ích trực tiếp cho phần lớn hội viên. Thêm vào đó, áp dụng các gói tập linh hoạt giờ thấp điểm hoặc ưu đãi sinh viên sẽ hỗ trợ những người có ngân sách hạn hẹp. Cuối cùng, việc cung cấp các buổi hướng dẫn miễn phí với huấn luyện viên cá nhân sẽ giúp mọi người sử dụng thiết bị mới một cách an toàn và tối ưu.\n\nTôi hy vọng những đóng góp này sẽ hỗ trợ quá trình triển khai thuận lợi, và rất mong nhận được hồi âm từ ban quản lý.\n\nTrân trọng,\nAlex Nguyen",
          "analysis": [
            {
              "label": "Giới thiệu & Mục đích",
              "text": "Dear Club Manager, My name is Alex, and I have been training regularly at our Fitness Club for the past two years. I am writing to share my perspective regarding the proposed 15% membership fee adjustment and equipment upgrade."
            },
            {
              "label": "Quan điểm thấu hiểu",
              "text": "While fee adjustments often raise member concerns, I understand that substantial investment is required to modernize our workout facilities."
            },
            {
              "label": "3 Đề xuất chiến lược",
              "text": "First, prioritizing versatile cardio equipment, such as state-of-the-art treadmills and rowing machines, will directly benefit the majority of members. Additionally, introducing flexible off-peak membership packages or student discounts would accommodate budget-conscious gym-goers. Finally, offering complimentary introductory sessions with personal trainers would help everyone utilize the new machines safely and effectively."
            },
            {
              "label": "Lời kết trang trọng",
              "text": "I hope these suggestions assist in smooth implementation, and I look forward to your feedback. Yours sincerely, Alex Nguyen"
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
          "icon": "Sparkles",
          "items": [
            {
              "en": "quite excited",
              "vi": "khá hào hứng",
              "example": "I was quite excited when I heard about the upcoming public art talk."
            },
            {
              "en": "delighted",
              "vi": "rất vui mừng",
              "example": "I am delighted that our club is inviting a guest artist."
            },
            {
              "en": "truly inspired",
              "vi": "thực sự được truyền cảm hứng",
              "example": "I feel truly inspired by this creative initiative."
            }
          ]
        },
        {
          "name": "2. Gợi ý Nghệ sĩ & Chủ đề (Artist & Topic)",
          "icon": "CheckCircle2",
          "items": [
            {
              "en": "watercolor and oil painting",
              "vi": "tranh màu nước và sơn dầu",
              "example": "He could share his techniques in watercolor and oil painting."
            },
            {
              "en": "bridge the gap between traditional and modern art",
              "vi": "thu hẹp khoảng cách giữa nghệ thuật truyền thống và hiện đại",
              "example": "The talk can bridge the gap between traditional and contemporary art."
            },
            {
              "en": "appeal to both youngsters and seniors",
              "vi": "thu hút cả giới trẻ và người lớn tuổi",
              "example": "Watercolor landscapes easily appeal to both youngsters and seniors."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 50,
          "en": "Hi Sarah,\nDid you hear that our Art Club is hosting a public talk to attract new members? I find this initiative incredibly exciting! Inviting a well-known local painter to demonstrate watercolor techniques would captivate both young artists and seniors.\nShall we attend together next Saturday?\nCatch up soon,\nAlex",
          "vi": "Chào Sarah,\nCậu đã nghe tin Câu lạc bộ Mỹ thuật của mình sắp tổ chức một buổi nói chuyện cộng đồng để thu hút hội viên mới chưa? Tớ thấy sáng kiến này cực kỳ thú vị! Việc mời một họa sĩ địa phương nổi tiếng đến thị phạm kỹ thuật màu nước chắc chắn sẽ cuốn hút cả những bạn trẻ lẫn người lớn tuổi.\nThứ Bảy tới chúng mình cùng đi nhé?\nGặp lại sớm,\nAlex",
          "analysis": [
            {
              "label": "Lời chào & Nhắc tin tức",
              "text": "Hi Sarah, Did you hear that our Art Club is hosting a public talk to attract new members?"
            },
            {
              "label": "Cảm xúc & Gợi ý (B2+)",
              "text": "I find this initiative incredibly exciting! Inviting a well-known local painter to demonstrate watercolor techniques would captivate both young artists and seniors."
            },
            {
              "label": "Rủ rê & Kết thư",
              "text": "Shall we attend together next Saturday? Catch up soon, Alex"
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
      "template": "Dear Club President,\nMy name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my thoughts and offer several practical suggestions regarding the public talk and guest artist invitation. I think this is a great idea.\nTo help attract both young and elderly members to the talk, I would like to make a few suggestions. First, we should invite a renowned local artist who specializes in blending traditional techniques with contemporary styles. Second, it would be better to focus the discussion on \"Art for Everyday Wellbeing\", which resonates across all generations. Finally, we could set up a 30-minute hands-on sketching session so attendees can practice alongside the speaker. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\n[Tên của bạn]",
      "vocabCategories": [
        {
          "name": "1. Đề xuất 1: Nghệ sĩ khách mời (Guest Artist)",
          "icon": "Sparkles",
          "items": [
            {
              "en": "invite a renowned local artist",
              "vi": "mời một nghệ sĩ địa phương danh tiếng",
              "example": "First, we should invite a renowned local artist with great public charisma."
            },
            {
              "en": "blend traditional techniques with contemporary styles",
              "vi": "kết hợp kỹ thuật truyền thống với phong cách đương đại",
              "example": "Blending traditional methods with modern themes attracts both generations."
            }
          ]
        },
        {
          "name": "2. Đề xuất 2: Chủ đề nói chuyện (Topic Selection)",
          "icon": "CheckCircle2",
          "items": [
            {
              "en": "focus on Art for Everyday Wellbeing",
              "vi": "tập trung vào chủ đề Nghệ thuật cho Sức khỏe Tinh thần Hàng ngày",
              "example": "Second, it would be better to focus on Art for Everyday Wellbeing."
            },
            {
              "en": "resonate across all generations",
              "vi": "tạo được sự đồng cảm sâu sắc ở mọi lứa tuổi",
              "example": "Mental relaxation through painting resonates strongly across all age groups."
            }
          ]
        },
        {
          "name": "3. Đề xuất 3: Trải nghiệm thực tế (Interactive Workshop)",
          "icon": "BookOpen",
          "items": [
            {
              "en": "set up a hands-on sketching session",
              "vi": "tổ chức một phần thực hành phác thảo trực tiếp",
              "example": "Finally, we could set up a hands-on sketching session for participants."
            },
            {
              "en": "encourage active creative participation",
              "vi": "khuyến khích sự tham gia sáng tạo tích cực",
              "example": "Hands-on activities turn passive listeners into active participants."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 135,
          "en": "Dear Club Manager,\n\nMy name is Alex, and I have been a devoted member of our Art Club for over a year. I am writing to share my recommendations regarding the upcoming public talk aimed at expanding our membership.\n\nI believe that featuring an accomplished guest speaker is an outstanding strategy to engage both younger audiences and senior art enthusiasts. First, I strongly recommend inviting Mr. David Cole, a distinguished local watercolorist who possesses remarkable communication skills. Regarding the discussion topic, focusing on practical painting fundamentals alongside personal creative journeys would resonate across generations. Furthermore, incorporating a live demonstration followed by an interactive Q&A session would make the seminar genuinely engaging and memorable.\n\nI trust these recommendations will contribute to a successful event, and I look forward to hearing your decision.\n\nYours sincerely,\nAlex Nguyen",
          "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Alex, và tôi đã là một thành viên gắn bó của Câu lạc bộ Mỹ thuật hơn một năm qua. Tôi viết email này để chia sẻ một số đề xuất về buổi nói chuyện cộng đồng sắp tới nhằm phát triển hội viên.\n\nTôi tin rằng việc mời một diễn giả khách mời tài năng là chiến lược tuyệt vời để thu hút cả giới trẻ lẫn những người cao tuổi đam mê nghệ thuật. Đầu tiên, tôi nhiệt liệt đề cử mời họa sĩ David Cole, một nghệ sĩ tranh màu nước xuất sắc tại địa phương với khả năng truyền cảm hứng tuyệt vời. Về chủ đề chia sẻ, việc tập trung vào các nguyên lý hội họa thực hành song hành cùng hành trình sáng tạo cá nhân sẽ chạm đến mọi thế hệ. Hơn nữa, việc kết hợp vẽ thị phạm trực tiếp cùng phiên hỏi đáp tương tác sẽ làm cho buổi hội thảo thực sự lôi cuốn và đáng nhớ.\n\nTôi tin tưởng những đề xuất này sẽ đóng góp vào thành công của sự kiện, và rất mong nhận được hồi âm từ ban quản lý.\n\nTrân trọng,\nAlex Nguyen",
          "analysis": [
            {
              "label": "Giới thiệu & Mục đích",
              "text": "Dear Club Manager, My name is Alex, and I have been a devoted member of our Art Club for over a year. I am writing to share my recommendations regarding the upcoming public talk aimed at expanding our membership."
            },
            {
              "label": "Đánh giá sáng kiến",
              "text": "I believe that featuring an accomplished guest speaker is an outstanding strategy to engage both younger audiences and senior art enthusiasts."
            },
            {
              "label": "3 Đề xuất chi tiết",
              "text": "First, I strongly recommend inviting Mr. David Cole, a distinguished local watercolorist who possesses remarkable communication skills. Regarding the discussion topic, focusing on practical painting fundamentals alongside personal creative journeys would resonate across generations. Furthermore, incorporating a live demonstration followed by an interactive Q&A session would make the seminar genuinely engaging and memorable."
            },
            {
              "label": "Lời kết trang trọng",
              "text": "I trust these recommendations will contribute to a successful event, and I look forward to hearing your decision. Yours sincerely, Alex Nguyen"
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
          "icon": "Sparkles",
          "items": [
            {
              "en": "quite excited",
              "vi": "khá hào hứng",
              "example": "I was quite excited to hear about the chef talk show."
            },
            {
              "en": "eager to participate",
              "vi": "rất háo hức được tham gia",
              "example": "I am extremely eager to volunteer as a speaker."
            }
          ]
        },
        {
          "name": "2. Chủ đề Ẩm thực đề xuất (Cooking Topics)",
          "icon": "CheckCircle2",
          "items": [
            {
              "en": "quick healthy home-cooked meals",
              "vi": "bữa ăn gia đình nấu nhanh và lành mạnh",
              "example": "I plan to share tips on quick healthy home-cooked meals."
            },
            {
              "en": "practical nutrition on a tight budget",
              "vi": "dinh dưỡng thực tế với chi phí tiết kiệm",
              "example": "Students appreciate practical nutrition on a tight budget."
            },
            {
              "en": "traditional family recipes with a modern twist",
              "vi": "công thức gia truyền biến tấu theo phong cách hiện đại",
              "example": "We can cook traditional family recipes with a modern twist."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 49,
          "en": "Hi Lucy,\nOur Food Club is looking for volunteer speakers for an upcoming talk show with a renowned chef! I am really eager to participate and talk about traditional street food recipes. It would be fantastic if you volunteered alongside me as well.\nWhat do you reckon?\nWarmly,\nAlex",
          "vi": "Chào Lucy,\nCâu lạc bộ Ẩm thực của chúng mình đang tìm kiếm diễn giả tình nguyện cho buổi trò chuyện sắp tới với một đầu bếp nổi tiếng đấy! Tớ thực sự hào hứng muốn tham gia và chia sẻ về các công thức ẩm thực đường phố truyền thống. Sẽ thật tuyệt nếu cậu cũng cùng đăng ký làm diễn giả với tớ.\nCậu thấy sao?\nThân mến,\nAlex",
          "analysis": [
            {
              "label": "Nhắc sự kiện",
              "text": "Hi Lucy, Our Food Club is looking for volunteer speakers for an upcoming talk show with a renowned chef!"
            },
            {
              "label": "Bày tỏ nguyện vọng & Đề xuất (B2+)",
              "text": "I am really eager to participate and talk about traditional street food recipes. It would be fantastic if you volunteered alongside me as well."
            },
            {
              "label": "Hỏi ý kiến bạn",
              "text": "What do you reckon? Warmly, Alex"
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
          "name": "1. Đề xuất 1: Đăng ký chủ đề thuyết trình (Topic)",
          "icon": "Sparkles",
          "items": [
            {
              "en": "Nutritious Family Meals on a Modest Budget",
              "vi": "Bữa cơm gia đình giàu dinh dưỡng với ngân sách tiết kiệm",
              "example": "First, I would love to present on Nutritious Family Meals on a Modest Budget."
            },
            {
              "en": "address members' everyday culinary challenges",
              "vi": "giải quyết những khó khăn nấu nướng hàng ngày của hội viên",
              "example": "This topic directly addresses our members' everyday culinary challenges."
            }
          ]
        },
        {
          "name": "2. Đề xuất 2: Nấu ăn biểu diễn trực tiếp (Live Demo)",
          "icon": "CheckCircle2",
          "items": [
            {
              "en": "include a live cooking demonstration",
              "vi": "kết hợp phần biểu diễn nấu nướng trực tiếp",
              "example": "Second, it would be better to include a 15-minute live cooking demonstration."
            },
            {
              "en": "prepare a signature dish with seasonal ingredients",
              "vi": "chế biến món ăn đặc trưng bằng nguyên liệu theo mùa",
              "example": "Using seasonal ingredients highlights freshness and affordability."
            }
          ]
        },
        {
          "name": "3. Đề xuất 3: Hoạt động nếm thử (Tasting Session)",
          "icon": "BookOpen",
          "items": [
            {
              "en": "organize a tasting corner for the audience",
              "vi": "bố trí góc nếm thử thức ăn cho khán giả",
              "example": "Finally, we could organize a tasting corner for the audience to sample dishes."
            },
            {
              "en": "create an interactive culinary experience",
              "vi": "tạo nên trải nghiệm ẩm thực tương tác sinh động",
              "example": "Tasting sessions always generate enthusiastic feedback."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 130,
          "en": "Dear Club Manager,\n\nMy name is Alex, and I have been an active enthusiast in our Food Club for nearly eighteen months. I am writing to express my eager desire to volunteer as a guest speaker alongside the visiting master chef.\n\nIf selected, I would be delighted to deliver a presentation entitled \"Sustainable Home Cooking and Flavor Balance.\" This topic highlights how ordinary home cooks can minimize food waste while creating wholesome, restaurant-quality dishes. To enhance audience engagement, I propose including an interactive tasting session where members evaluate distinct herb infusions. Additionally, providing printed recipe cards and hosting a short cooking demonstration would make the experience exceptionally practical for all attendees.\n\nThank you for considering my application, and I look forward to the opportunity to contribute.\n\nYours sincerely,\nAlex Nguyen",
          "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Alex, và tôi đã là một thành viên nhiệt huyết trong Câu lạc bộ Ẩm thực suốt gần 18 tháng qua. Tôi viết email này nhằm bày tỏ nguyện vọng thiết tha được tình nguyện làm diễn giả khách mời bên cạnh bếp trưởng khách mời.\n\nNếu được lựa chọn, tôi rất vinh dự được trình bày bài nói chuyện mang tên \"Nấu ăn Gia đình Bền vững và Cân bằng Hương vị\". Chủ đề này tập trung vào cách những người nấu ăn tại gia có thể giảm thiểu lãng phí thực phẩm trong khi vẫn tạo ra các món ăn bổ dưỡng chuẩn vị nhà hàng. Để tăng cường sự tương tác với người nghe, tôi đề xuất tổ chức một buổi nếm thử thực tế, nơi các hội viên cùng cảm nhận các hương vị thảo mộc khác nhau. Thêm vào đó, việc phát các thẻ công thức in sẵn và thị phạm nấu ăn ngắn sẽ mang lại giá trị thiết thực cho tất cả người tham dự.\n\nXin chân thành cảm ơn ban quản lý đã cân nhắc đề xuất của tôi, và tôi rất mong có cơ hội được cống hiến.\n\nTrân trọng,\nAlex Nguyen",
          "analysis": [
            {
              "label": "Giới thiệu & Nguyện vọng",
              "text": "Dear Club Manager, My name is Alex, and I have been an active enthusiast in our Food Club for nearly eighteen months. I am writing to express my eager desire to volunteer as a guest speaker alongside the visiting master chef."
            },
            {
              "label": "Chủ đề bài nói chuyện",
              "text": "If selected, I would be delighted to deliver a presentation entitled 'Sustainable Home Cooking and Flavor Balance.' This topic highlights how ordinary home cooks can minimize food waste while creating wholesome, restaurant-quality dishes."
            },
            {
              "label": "Đề xuất hoạt động bổ trợ",
              "text": "To enhance audience engagement, I propose including an interactive tasting session where members evaluate distinct herb infusions. Additionally, providing printed recipe cards and hosting a short cooking demonstration would make the experience exceptionally practical for all attendees."
            },
            {
              "label": "Lời kết trang trọng",
              "text": "Thank you for considering my application, and I look forward to the opportunity to contribute. Yours sincerely, Alex Nguyen"
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
          "icon": "Sparkles",
          "items": [
            {
              "en": "quite excited",
              "vi": "khá hào hứng",
              "example": "I was quite excited about meeting everyone in person."
            },
            {
              "en": "delighted",
              "vi": "rất vui mừng",
              "example": "I am delighted that we can finally meet face-to-face."
            }
          ]
        },
        {
          "name": "2. Thời gian & Địa điểm (Time & Venue)",
          "icon": "CheckCircle2",
          "items": [
            {
              "en": "Saturday morning at a garden cafe",
              "vi": "sáng thứ Bảy tại quán cà phê sân vườn",
              "example": "Saturday mornings at a garden cafe offer plenty of natural light and fresh air."
            },
            {
              "en": "convenient transport links and parking",
              "vi": "giao thông thuận tiện và chỗ đỗ xe thoải mái",
              "example": "The venue should have convenient transport links and ample parking."
            },
            {
              "en": "relaxing atmosphere for all generations",
              "vi": "bầu không khí thư giãn cho mọi thế hệ",
              "example": "It provides a relaxing atmosphere for both students and retirees."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 48,
          "en": "Hi Emma,\nHave you heard that our Social Club is introducing monthly face-to-face gatherings? I think it is an incredible initiative to strengthen friendships! I am definitely going to suggest hosting them on Sunday mornings in the central park.\nWould you like to come with me?\nBest,\nAlex",
          "vi": "Chào Emma,\nCậu đã nghe tin Câu lạc bộ Giao lưu của mình sắp tổ chức các buổi gặp mặt trực tiếp hàng tháng chưa? Tớ nghĩ đây là sáng kiến tuyệt vời để thắt chặt tình bạn! Tớ chắc chắn sẽ đề xuất tổ chức vào sáng Chủ nhật tại công viên trung tâm.\nCậu có muốn đi cùng tớ không?\nThân,\nAlex",
          "analysis": [
            {
              "label": "Lời chào & Nhắc tin tức",
              "text": "Hi Emma, Have you heard that our Social Club is introducing monthly face-to-face gatherings?"
            },
            {
              "label": "Cảm xúc & Gợi ý (B2+)",
              "text": "I think it is an incredible initiative to strengthen friendships! I am definitely going to suggest hosting them on Sunday mornings in the central park."
            },
            {
              "label": "Lời mời & Ký tên",
              "text": "Would you like to come with me? Best, Alex"
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
          "name": "1. Đề xuất 1: Thời gian lý tưởng (Optimal Timing)",
          "icon": "Sparkles",
          "items": [
            {
              "en": "schedule gatherings on Saturday mornings",
              "vi": "xếp lịch sinh hoạt vào sáng thứ Bảy",
              "example": "First, we should schedule gatherings on Saturday mornings between 9:00 and 11:00 AM."
            },
            {
              "en": "avoid late evening hours",
              "vi": "tránh khung giờ muộn buổi tối",
              "example": "Morning slots are convenient for families and older participants."
            }
          ]
        },
        {
          "name": "2. Đề xuất 2: Địa điểm hòa nhập (Inclusive Venue)",
          "icon": "CheckCircle2",
          "items": [
            {
              "en": "local community cultural center",
              "vi": "nhà văn hóa cộng đồng địa phương",
              "example": "Second, it would be better to rent a hall at the local community cultural center."
            },
            {
              "en": "wheelchair ramps and peaceful garden seating",
              "vi": "đường dốc cho xe lăn và chỗ ngồi sân vườn yên bình",
              "example": "This venue provides accessibility ramps and peaceful garden seating."
            }
          ]
        },
        {
          "name": "3. Đề xuất 3: Hoạt động gắn kết (Intergenerational Activities)",
          "icon": "BookOpen",
          "items": [
            {
              "en": "intergenerational storytelling circle",
              "vi": "vòng tròn sẻ chia kể chuyện kết nối hai thế hệ",
              "example": "Finally, we could organize an intergenerational storytelling circle over tea."
            },
            {
              "en": "foster mutual understanding and genuine companionship",
              "vi": "thúc đẩy sự thấu hiểu lẫn nhau và tình bạn chân thành",
              "example": "Shared activities foster mutual understanding and genuine companionship."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 138,
          "en": "Dear Club Manager,\n\nMy name is Alex, and I have been an active member of our Social Club for two years. I am writing in response to your notice to share my recommendations regarding suitable venues and schedules for our monthly face-to-face meetings.\n\nTo ensure events accommodate both younger members and senior citizens, I would like to propose three practical ideas. First, scheduling meetings on Saturday mornings or Sunday afternoons appears most convenient, as it avoids work commitments and late-night travel. Second, reserving a private lounge at the Community Cultural Center offers accessible facilities, quiet surroundings, and ample parking. Finally, incorporating interactive icebreakers such as board games or storytelling circles would effectively bridge generational gaps and foster inclusive dialogue.\n\nI hope these recommendations assist your event planning, and I look forward to your response.\n\nYours sincerely,\nAlex Nguyen",
          "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Alex, và tôi đã là một hội viên tích cực của Câu lạc bộ Giao lưu được hai năm. Tôi viết thư này để hồi đáp thông báo của ban quản lý và đóng góp một vài đề xuất về thời gian cũng như địa điểm phù hợp cho các buổi gặp mặt trực tiếp hàng tháng.\n\nĐể đảm bảo các buổi gặp gỡ thuận tiện cho cả bạn trẻ lẫn người cao tuổi, tôi xin đưa ra ba giải pháp thực tế. Thứ nhất, việc xếp lịch vào sáng thứ Bảy hoặc chiều Chủ nhật là tiện lợi nhất, giúp tránh giờ làm việc bận rộn và việc phải đi lại muộn vào ban đêm. Thứ hai, việc đặt phòng sinh hoạt riêng tại Trung tâm Văn hóa Cộng đồng sẽ mang lại không gian yên tĩnh, cơ sở vật chất thuận lợi và bãi đỗ xe rộng rãi. Cuối cùng, việc lồng ghép các trò chơi phá băng tương tác như cờ bàn hoặc vòng tròn chia sẻ câu chuyện sẽ xóa nhòa khoảng cách thế hệ và xây dựng sự gắn kết hòa đồng.\n\nTôi hy vọng những đóng góp này sẽ hỗ trợ ban quản lý trong công tác tổ chức, và rất mong nhận được hồi âm.\n\nTrân trọng,\nAlex Nguyen",
          "analysis": [
            {
              "label": "Giới thiệu & Mục đích",
              "text": "Dear Club Manager, My name is Alex, and I have been an active member of our Social Club for two years. I am writing in response to your notice to share my recommendations regarding suitable venues and schedules for our monthly face-to-face meetings."
            },
            {
              "label": "Đề xuất thời gian & Địa điểm (B2+)",
              "text": "First, scheduling meetings on Saturday mornings or Sunday afternoons appears most convenient, as it avoids work commitments and late-night travel. Second, reserving a private lounge at the Community Cultural Center offers accessible facilities, quiet surroundings, and ample parking."
            },
            {
              "label": "Đề xuất hoạt động gắn kết",
              "text": "Finally, incorporating interactive icebreakers such as board games or storytelling circles would effectively bridge generational gaps and foster inclusive dialogue."
            },
            {
              "label": "Lời kết trang trọng",
              "text": "I hope these recommendations assist your event planning, and I look forward to your response. Yours sincerely, Alex Nguyen"
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
          "name": "1. Bày tỏ Cảm xúc & Quan điểm",
          "icon": "Sparkles",
          "items": [
            {
              "en": "quite excited",
              "vi": "khá hào hứng",
              "example": "I was quite excited about bringing the whole family."
            },
            {
              "en": "combining both indoor and outdoor activities",
              "vi": "kết hợp cả hoạt động trong nhà lẫn ngoài trời",
              "example": "Combining both indoor and outdoor activities satisfies diverse preferences."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 49,
          "en": "Hi Mike,\nDid you see the club's announcement about next month's in-person meetup? I am convinced that organizing a hybrid gathering with both indoor games and outdoor sports is the best approach. It will easily engage children and parents alike!\nLet us team up for the activities!\nCheers,\nAlex",
          "vi": "Chào Mike,\nCậu đã thấy thông báo của câu lạc bộ về buổi gặp mặt trực tiếp vào tháng tới chưa? Tớ tin chắc rằng việc kết hợp cả trò chơi trong nhà lẫn thể thao ngoài trời là hướng tiếp cận tuyệt vời nhất. Làm như vậy sẽ dễ dàng thu hút cả trẻ nhỏ lẫn các bậc phụ huynh!\nChúng mình cùng lập đội tham gia nhé!\nThân,\nAlex",
          "analysis": [
            {
              "label": "Hỏi thăm & Nhắc đề",
              "text": "Hi Mike, Did you see the club's announcement about next month's in-person meetup?"
            },
            {
              "label": "Quan điểm & Lợi ích (B2+)",
              "text": "I am convinced that organizing a hybrid gathering with both indoor games and outdoor sports is the best approach. It will easily engage children and parents alike!"
            },
            {
              "label": "Lời rủ & Ký tên",
              "text": "Let us team up for the activities! Cheers, Alex"
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
          "name": "1. Đề xuất 1: Địa điểm tích hợp (Hybrid Venue)",
          "icon": "Sparkles",
          "items": [
            {
              "en": "reserve a botanical garden pavilion",
              "vi": "đặt trước một khu nhà chòi tại vườn bách thảo",
              "example": "First, we should reserve a botanical garden pavilion with indoor and outdoor access."
            },
            {
              "en": "offer expansive lawns and weather-proof indoor halls",
              "vi": "có bãi cỏ rộng rãi và hội trường trong nhà tránh mưa nắng",
              "example": "This venue offers expansive lawns and a weather-proof indoor hall."
            }
          ]
        },
        {
          "name": "2. Đề xuất 2: Phân chia hoạt động theo lứa tuổi (Age-tailored Activities)",
          "icon": "CheckCircle2",
          "items": [
            {
              "en": "outdoor team games and sports for children",
              "vi": "trò chơi đồng đội và thể thao ngoài trời cho trẻ em",
              "example": "Second, it would be better to schedule outdoor team games for children."
            },
            {
              "en": "indoor workshops and networking for adults",
              "vi": "hội thảo và giao lưu trong nhà cho người lớn",
              "example": "Meanwhile, adults can participate in indoor workshops and calm discussions."
            }
          ]
        },
        {
          "name": "3. Đề xuất 3: Hậu cần & Kế hoạch dự phòng (Logistics & Contingency)",
          "icon": "BookOpen",
          "items": [
            {
              "en": "prepare contingency plans for adverse weather",
              "vi": "chuẩn bị kế hoạch dự phòng khi thời tiết bất lợi",
              "example": "Finally, we must prepare contingency plans for adverse weather."
            },
            {
              "en": "cater healthy finger food and refreshments",
              "vi": "phục vụ đồ ăn nhẹ lành mạnh và nước giải khát",
              "example": "Catering healthy finger foods keeps both youngsters and seniors energized."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 136,
          "en": "Dear Club Manager,\n\nMy name is Alex, and I have been a member of our Social Club for over a year. I am writing to provide my perspective on the venue selection and activity format for our upcoming gatherings.\n\nIn my opinion, combining indoor and outdoor activities offers the ideal solution for entertaining diverse age groups. Therefore, I propose selecting the Riverside Community Park, which features both a modern indoor hall and spacious green lawns. Children can enjoy supervised outdoor sports, while adults can engage in workshops or relaxed discussions indoors. Furthermore, scheduling a collective picnic towards the conclusion of the event would bring everyone together harmoniously. This balanced approach guarantees broad appeal and high attendance.\n\nI trust these suggestions will assist your preparations, and I look forward to hearing your plans.\n\nYours sincerely,\nAlex Nguyen",
          "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Alex, và tôi đã là hội viên của Câu lạc bộ Giao lưu hơn một năm qua. Tôi viết email này nhằm đóng góp ý kiến về việc lựa chọn địa điểm cũng như hình thức hoạt động cho các buổi gặp mặt sắp tới.\n\nTheo quan điểm của tôi, việc kết hợp linh hoạt giữa hoạt động trong nhà và ngoài trời là giải pháp lý tưởng nhất để phục vụ đa dạng lứa tuổi. Do đó, tôi đề xuất lựa chọn Công viên Cộng đồng Ven sông, nơi sở hữu cả hội trường trong nhà hiện đại lẫn những thảm cỏ xanh rộng thoáng. Trẻ em có thể tham gia các trò chơi vận động ngoài trời dưới sự giám sát, trong khi người lớn có thể tham gia hội thảo hoặc trò chuyện thư giãn trong nhà. Hơn nữa, việc tổ chức một buổi dã ngoại chung vào cuối sự kiện sẽ gắn kết tất cả mọi người lại với nhau một cách hài hòa. Hướng tiếp cận cân bằng này đảm bảo sức hút rộng rãi và tỷ lệ tham gia cao.\n\nTôi tin rằng những khuyến nghị này sẽ hỗ trợ ban tổ chức, và rất mong nhận được thông tin kế hoạch từ bạn.\n\nTrân trọng,\nAlex Nguyen",
          "analysis": [
            {
              "label": "Giới thiệu & Lý do viết thư",
              "text": "Dear Club Manager, My name is Alex, and I have been a member of our Social Club for over a year. I am writing to provide my perspective on the venue selection and activity format for our upcoming gatherings."
            },
            {
              "label": "Quan điểm & Địa điểm đề xuất",
              "text": "In my opinion, combining indoor and outdoor activities offers the ideal solution for entertaining diverse age groups. Therefore, I propose selecting the Riverside Community Park, which features both a modern indoor hall and spacious green lawns."
            },
            {
              "label": "Phân bổ hoạt động & Lợi ích (B2+)",
              "text": "Children can enjoy supervised outdoor sports, while adults can engage in workshops or relaxed discussions indoors. Furthermore, scheduling a collective picnic towards the conclusion of the event would bring everyone together harmoniously. This balanced approach guarantees broad appeal and high attendance."
            },
            {
              "label": "Lời kết trang trọng",
              "text": "I trust these suggestions will assist your preparations, and I look forward to hearing your plans. Yours sincerely, Alex Nguyen"
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
          "name": "1. Cảm xúc & Di sản văn hóa",
          "icon": "Sparkles",
          "items": [
            {
              "en": "quite disappointed",
              "vi": "khá thất vọng",
              "example": "I was quite disappointed by the demolition plan."
            },
            {
              "en": "unique soul and cultural heritage",
              "vi": "cái hồn độc đáo và di sản văn hóa",
              "example": "Old buildings give our city its unique soul and cultural heritage."
            },
            {
              "en": "modern concrete blocks",
              "vi": "những khối bê tông hiện đại",
              "example": "Modern concrete blocks lack character and charm."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 52,
          "en": "Hi David,\nHave you heard about the government's proposal to demolish historical buildings for modern high-rises? Honestly, I feel quite concerned about this plan. Preserving our architectural heritage is crucial for cultural identity. We should definitely sign the community petition against total demolition.\nWhat are your thoughts on this matter?\nBest,\nAlex",
          "vi": "Chào David,\nCậu đã nghe về đề xuất của chính quyền phá dỡ các tòa nhà cổ để xây chung cư cao tầng hiện đại chưa? Thành thật mà nói, tớ cảm thấy khá lo ngại về kế hoạch này. Bảo tồn di sản kiến trúc là điều tối quan trọng đối với bản sắc văn hóa. Chúng mình chắc chắn nên ký đơn kiến nghị của cộng đồng để phản đối việc phá dỡ hoàn toàn.\nCậu nghĩ thế nào về vấn đề này?\nThân,\nAlex",
          "analysis": [
            {
              "label": "Nhắc sự việc & Cảm xúc",
              "text": "Hi David, Have you heard about the government's proposal to demolish historical buildings for modern high-rises? Honestly, I feel quite concerned about this plan."
            },
            {
              "label": "Nêu quan điểm & Hành động (B2+)",
              "text": "Preserving our architectural heritage is crucial for cultural identity. We should definitely sign the community petition against total demolition."
            },
            {
              "label": "Hỏi ý kiến bạn",
              "text": "What are your thoughts on this matter? Best, Alex"
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
          "name": "1. Đề xuất 1: Đánh giá phân loại di sản (Assessment)",
          "icon": "Sparkles",
          "items": [
            {
              "en": "conduct a thorough architectural assessment",
              "vi": "tiến hành đánh giá kiến trúc kỹ lưỡng",
              "example": "First, we should conduct a thorough architectural assessment before any demolition."
            },
            {
              "en": "preserve buildings with significant historical value",
              "vi": "bảo tồn các công trình có giá trị lịch sử quan trọng",
              "example": "Preserving historical landmarks protects the cultural soul of the city."
            }
          ]
        },
        {
          "name": "2. Đề xuất 2: Cải tạo thích ứng (Adaptive Reuse)",
          "icon": "CheckCircle2",
          "items": [
            {
              "en": "advocate for adaptive reuse and interior renovation",
              "vi": "vận động cải tạo thích ứng và làm mới nội thất",
              "example": "Second, it would be better to advocate for adaptive reuse rather than total destruction."
            },
            {
              "en": "retain vintage facades while upgrading amenities",
              "vi": "giữ lại mặt tiền cổ kính trong khi nâng cấp tiện nghi hiện đại",
              "example": "Retaining vintage facades preserves aesthetic charm while ensuring safety."
            }
          ]
        },
        {
          "name": "3. Đề xuất 3: Quy hoạch phát triển (Zoning Policy)",
          "icon": "BookOpen",
          "items": [
            {
              "en": "direct high-density modern blocks toward suburban zones",
              "vi": "hướng các khối chung cư hiện đại mật độ cao về vùng ngoại ô",
              "example": "Finally, modern high-rises should be built in designated expansion zones."
            },
            {
              "en": "balance urban modernization with cultural conservation",
              "vi": "cân bằng giữa hiện đại hóa đô thị với bảo tồn văn hóa",
              "example": "We must strike a balance between modernization and conservation."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 138,
          "en": "Dear Club Manager,\n\nMy name is Alex, and I have been an active member of the Beautiful Homes Club for over two years. I am writing to express my view regarding the government proposal to replace historical buildings with modern apartment blocks.\n\nWhile I acknowledge the urgent demand for urban housing and the substantial maintenance costs of older properties, I strongly advocate for selective preservation rather than wholesale demolition. Historic architecture endows our neighborhood with distinct character and cultural value. Therefore, I suggest that the club petition authorities to preserve iconic heritage facades while upgrading internal amenities to modern energy-efficient standards. Additionally, public workshops showcasing successful adaptive reuse projects would raise valuable community awareness.\n\nI trust our club will take a constructive stance on this critical issue, and I look forward to your response.\n\nYours sincerely,\nAlex Nguyen",
          "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Alex, và tôi đã là hội viên tích cực của Câu lạc bộ Nhà Đẹp hơn hai năm qua. Tôi viết thư này để bày tỏ quan điểm về đề xuất của chính quyền liên quan đến việc thay thế các công trình lịch sử bằng các khối chung cư hiện đại.\n\nMặc dù tôi thấu hiểu nhu cầu cấp bách về nhà ở đô thị cũng như chi phí bảo trì tốn kém của các tòa nhà cũ, tôi tha thiết ủng hộ giải pháp bảo tồn có chọn lọc thay vì phá hủy toàn bộ. Kiến trúc lịch sử đem lại cho khu vực chúng ta bản sắc độc đáo và giá trị văn hóa vô giá. Do đó, tôi đề xuất câu lạc bộ kiến nghị chính quyền giữ lại các mặt tiền di sản tiêu biểu, đồng thời cải tạo tiện nghi bên trong theo các tiêu chuẩn tiết kiệm năng lượng hiện đại. Ngoài ra, việc tổ chức hội thảo giới thiệu các dự án tái sử dụng công trình thành công sẽ nâng cao nhận thức cộng đồng.\n\nTôi tin rằng câu lạc bộ chúng ta sẽ có tiếng nói mang tính xây dựng về vấn đề trọng đại này, và rất mong nhận được hồi âm từ bạn.\n\nTrân trọng,\nAlex Nguyen",
          "analysis": [
            {
              "label": "Giới thiệu & Mục đích",
              "text": "Dear Club Manager, My name is Alex, and I have been an active member of the Beautiful Homes Club for over two years. I am writing to express my view regarding the government proposal to replace historical buildings with modern apartment blocks."
            },
            {
              "label": "Thừa nhận thực tế & Khẳng định lập trường (B2+)",
              "text": "While I acknowledge the urgent demand for urban housing and the substantial maintenance costs of older properties, I strongly advocate for selective preservation rather than wholesale demolition. Historic architecture endows our neighborhood with distinct character and cultural value."
            },
            {
              "label": "Đề xuất giải pháp hài hòa",
              "text": "Therefore, I suggest that the club petition authorities to preserve iconic heritage facades while upgrading internal amenities to modern energy-efficient standards. Additionally, public workshops showcasing successful adaptive reuse projects would raise valuable community awareness."
            },
            {
              "label": "Lời kết trang trọng",
              "text": "I trust our club will take a constructive stance on this critical issue, and I look forward to your response. Yours sincerely, Alex Nguyen"
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
          "name": "1. Lời khuyên tài chính cho người trẻ",
          "icon": "Sparkles",
          "items": [
            {
              "en": "avoid heavy mortgage debt",
              "vi": "tránh gánh nặng nợ vay mua nhà quá lớn",
              "example": "Youngsters should avoid heavy mortgage debt early in their careers."
            },
            {
              "en": "build a stable emergency fund",
              "vi": "xây dựng quỹ dự phòng tài chính ổn định",
              "example": "It is essential to build an emergency fund before making large purchases."
            },
            {
              "en": "career and geographic flexibility",
              "vi": "sự linh hoạt trong sự nghiệp và địa điểm sinh sống",
              "example": "Renting offers valuable career and geographic flexibility."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 52,
          "en": "Hi Jenny,\nHave you read the club's discussion on young adults purchasing homes early in life? Personally, I think it is an admirable ambition, provided they avoid excessive mortgage debt. Building disciplined savings habits and starting with modest suburban apartments is much smarter.\nHow do you view this financial trend?\nCheers,\nAlex",
          "vi": "Chào Jenny,\nCậu đã đọc chủ đề thảo luận của câu lạc bộ về việc người trẻ mua nhà sớm chưa? Cá nhân tớ thấy đây là hoài bão đáng khích lệ, miễn là họ tránh vay nợ thế chấp quá mức. Xây dựng thói quen tiết kiệm kỷ luật và bắt đầu bằng những căn hộ ngoại ô vừa phải sẽ thông minh hơn nhiều.\nCậu nhìn nhận thế nào về xu hướng tài chính này?\nThân,\nAlex",
          "analysis": [
            {
              "label": "Lời chào & Đặt vấn đề",
              "text": "Hi Jenny, Have you read the club's discussion on young adults purchasing homes early in life?"
            },
            {
              "label": "Góc nhìn & Lời khuyên (B2+)",
              "text": "Personally, I think it is an admirable ambition, provided they avoid excessive mortgage debt. Building disciplined savings habits and starting with modest suburban apartments is much smarter."
            },
            {
              "label": "Hỏi ý kiến bạn",
              "text": "How do you view this financial trend? Cheers, Alex"
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
      "template": "Dear Club Manager,\nMy name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email to share my perspective and offer constructive recommendations regarding homeownership for young adults. I think this is an important issue.\nTo support young members in making prudent housing decisions, I would like to make a few suggestions. First, our club should organize a workshop on personal financial literacy and mortgage planning so youngsters understand long-term debt obligations. Second, it would be better to advise them to begin with smaller, affordable studio apartments rather than stretching beyond their budget for spacious houses. Finally, we could compile a legal checklist covering title deeds and contract verifications to protect first-time buyers. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\n[Tên của bạn]",
      "vocabCategories": [
        {
          "name": "1. Đề xuất 1: Hội thảo quản lý tài chính (Financial Literacy)",
          "icon": "Sparkles",
          "items": [
            {
              "en": "organize a workshop on personal financial literacy",
              "vi": "tổ chức hội thảo về quản lý tài chính cá nhân",
              "example": "First, our club should organize a workshop on personal financial literacy."
            },
            {
              "en": "understand long-term mortgage obligations",
              "vi": "hiểu rõ nghĩa vụ trả nợ vay mua nhà dài hạn",
              "example": "Youngsters must understand long-term mortgage obligations before signing contracts."
            }
          ]
        },
        {
          "name": "2. Đề xuất 2: Bắt đầu vừa sức (Affordable Starter Homes)",
          "icon": "CheckCircle2",
          "items": [
            {
              "en": "start with smaller, affordable studio apartments",
              "vi": "bắt đầu với căn hộ studio nhỏ, vừa túi tiền",
              "example": "Second, it would be better to advise them to start with affordable starter homes."
            },
            {
              "en": "avoid stretching financial limits",
              "vi": "tránh kéo căng giới hạn tài chính quá mức",
              "example": "Stretching beyond budget leads to chronic financial stress."
            }
          ]
        },
        {
          "name": "3. Đề xuất 3: Cẩm nang pháp lý (Legal Guidance)",
          "icon": "BookOpen",
          "items": [
            {
              "en": "compile a legal checklist for first-time buyers",
              "vi": "biên soạn bảng kiểm tra pháp lý cho người mua nhà lần đầu",
              "example": "Finally, we could compile a legal checklist covering property ownership rights."
            },
            {
              "en": "protect buyers from hidden property risks",
              "vi": "bảo vệ người mua khỏi các rủi ro pháp lý tiềm ẩn",
              "example": "Legal advice prevents costly disputes in real estate transactions."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 133,
          "en": "Dear Club Manager,\n\nMy name is Alex, and I have been a member of the Living Home Club for eighteen months. I am writing to offer my perspective and practical advice regarding the growing trend of young adults pursuing early home ownership.\n\nWhile aspiring to own property demonstrates commendable foresight, young buyers frequently underestimate long-term mortgage obligations. Therefore, I propose three key recommendations for our upcoming housing seminar. First, members should maintain solid emergency savings and strictly limit housing repayments to thirty percent of income. Furthermore, considering affordable suburban apartments or starter studios represents a sensible first step. Finally, inviting independent financial advisors to host personal budgeting workshops would provide invaluable guidance.\n\nI trust these insights will prove beneficial to our members, and I look forward to your response.\n\nYours sincerely,\nAlex Nguyen",
          "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Alex, và tôi đã là thành viên của Câu lạc bộ Không gian Sống suốt 18 tháng qua. Tôi viết email này nhằm đóng góp góc nhìn và lời khuyên thực tế liên quan đến xu hướng người trẻ nỗ lực sở hữu nhà ở từ sớm.\n\nMặc dù khát khao sở hữu nhà riêng thể hiện tầm nhìn tài chính đáng khen ngợi, người mua trẻ tuổi thường đánh giá thấp các nghĩa vụ trả nợ vay mua nhà dài hạn. Vì vậy, tôi xin đưa ra ba khuyến nghị chính cho buổi hội thảo tư vấn sắp tới của câu lạc bộ. Thứ nhất, các hội viên cần duy trì quỹ dự phòng vững chắc và giới hạn khoản trả nợ nhà dưới 30% thu nhập. Hơn nữa, việc cân nhắc các căn hộ vừa túi tiền ở ngoại ô hoặc studio nhỏ là bước khởi đầu hợp lý. Cuối cùng, việc mời các chuyên gia tài chính độc lập tổ chức các buổi hướng dẫn lập ngân sách sẽ mang lại những chỉ dẫn vô cùng quý giá.\n\nTôi tin rằng những chia sẻ này sẽ hữu ích cho hội viên, và rất mong nhận được hồi âm từ bạn.\n\nTrân trọng,\nAlex Nguyen",
          "analysis": [
            {
              "label": "Giới thiệu & Mục đích",
              "text": "Dear Club Manager, My name is Alex, and I have been a member of the Living Home Club for eighteen months. I am writing to offer my perspective and practical advice regarding the growing trend of young adults pursuing early home ownership."
            },
            {
              "label": "Nhận định vấn đề (B2+)",
              "text": "While aspiring to own property demonstrates commendable foresight, young buyers frequently underestimate long-term mortgage obligations."
            },
            {
              "label": "3 Khuyến nghị tài chính xác đáng",
              "text": "First, members should maintain solid emergency savings and strictly limit housing repayments to thirty percent of income. Furthermore, considering affordable suburban apartments or starter studios represents a sensible first step. Finally, inviting independent financial advisors to host personal budgeting workshops would provide invaluable guidance."
            },
            {
              "label": "Lời kết trang trọng",
              "text": "I trust these insights will prove beneficial to our members, and I look forward to your response. Yours sincerely, Alex Nguyen"
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
          "name": "1. Cảm xúc & Sự thay đổi kế hoạch",
          "icon": "Sparkles",
          "items": [
            {
              "en": "quite disappointed",
              "vi": "khá thất vọng",
              "example": "I was quite disappointed that the Japanese garden talk was canceled."
            },
            {
              "en": "still attend to show support",
              "vi": "vẫn tham dự để thể hiện sự ủng hộ",
              "example": "We should still attend to show support for Mr. Jones."
            },
            {
              "en": "swap flower seeds and plant cuttings",
              "vi": "trao đổi hạt giống hoa và cành giâm cây",
              "example": "We could swap plant cuttings and seeds after the presentation."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 49,
          "en": "Hi Laura,\nDid you see the notice about Mr. Seiko's Japanese gardens talk being canceled due to illness? While I am slightly disappointed, hearing Mr. Jones discuss English gardens again is still pleasant. We should definitely suggest adding a plant-swapping session afterwards!\nWill you still come along?\nBest,\nAlex",
          "vi": "Chào Laura,\nCậu đã xem thông báo về việc bài nói chuyện về vườn Nhật của ông Seiko bị hủy do ông bị ốm chưa? Dù tớ hơi tiếc một chút, nhưng được nghe ông Jones chia sẻ lại về các khu vườn nước Anh vẫn rất thú vị. Chúng mình chắc chắn nên gợi ý câu lạc bộ tổ chức thêm buổi trao đổi cây giống sau sự kiện!\nCậu vẫn tham gia chứ?\nThân,\nAlex",
          "analysis": [
            {
              "label": "Nhắc tin hủy sự kiện",
              "text": "Hi Laura, Did you see the notice about Mr. Seiko's Japanese gardens talk being canceled due to illness?"
            },
            {
              "label": "Cảm xúc & Đề xuất mới (B2+)",
              "text": "While I am slightly disappointed, hearing Mr. Jones discuss English gardens again is still pleasant. We should definitely suggest adding a plant-swapping session afterwards!"
            },
            {
              "label": "Lời rủ & Ký tên",
              "text": "Will you still come along? Best, Alex"
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
          "name": "1. Đề xuất 1: Cập nhật nội dung mới (Fresh Practical Content)",
          "icon": "Sparkles",
          "items": [
            {
              "en": "focus on practical tips for modern urban gardens",
              "vi": "tập trung vào mẹo thực tế cho vườn đô thị hiện đại",
              "example": "First, Mr. Jones could focus on practical tips for small urban spaces."
            },
            {
              "en": "introduce new slide photographs and seasonal techniques",
              "vi": "bổ sung thêm hình ảnh mới và kỹ thuật chăm sóc theo mùa",
              "example": "New slide photographs will keep the presentation fresh and engaging."
            }
          ]
        },
        {
          "name": "2. Đề xuất 2: Trao đổi cây giống & Hỏi đáp (Interactive Exchange)",
          "icon": "CheckCircle2",
          "items": [
            {
              "en": "host a plant and seed swap session",
              "vi": "tổ chức buổi trao đổi cây giống và hạt hoa",
              "example": "Second, it would be better to host a plant and seed swap session."
            },
            {
              "en": "allot time for interactive member inquiries",
              "vi": "dành thời lượng giải đáp thắc mắc tương tác của hội viên",
              "example": "Allocating time for live Q&A fosters rich community interaction."
            }
          ]
        },
        {
          "name": "3. Đề xuất 3: Thăm hỏi diễn giả ốm (Get-well Wishes)",
          "icon": "BookOpen",
          "items": [
            {
              "en": "prepare a warm get-well card for Mr. Seiko",
              "vi": "chuẩn bị một tấm thiệp chúc mau khỏe gửi ông Seiko",
              "example": "Finally, the club should send a heartfelt get-well card to Mr. Seiko."
            },
            {
              "en": "reschedule the Japanese garden talk in the future",
              "vi": "sắp xếp lại buổi nói chuyện vườn Nhật trong tương lai",
              "example": "We look forward to rescheduling the lecture when he has fully recovered."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 136,
          "en": "Dear Club Manager,\n\nMy name is Alex, and I have been a devoted member of our Garden Club for over a year. I am writing in response to the notification regarding the cancellation of Mr. Seiko's presentation and the rescheduling of Mr. Jones's lecture.\n\nWhile I share the general regret concerning Mr. Seiko's illness, I appreciate Mr. Jones stepping in promptly. To ensure the upcoming session remains fresh and engaging for members who attended previously, I would like to propose three suggestions. First, Mr. Jones could focus specifically on climate-resilient plants and winter care techniques. Furthermore, hosting an interactive plant-pruning demonstration would add practical hands-on value. Finally, organizing a mini plant-exchange market afterwards would encourage lively member participation.\n\nI hope these recommendations are well received, and I look forward to your response.\n\nYours sincerely,\nAlex Nguyen",
          "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Alex, và tôi đã là hội viên gắn bó của Câu lạc bộ Làm vườn hơn một năm qua. Tôi viết email này nhằm hồi đáp thông báo về việc hủy buổi thuyết trình của ông Seiko và kế hoạch thay thế bằng bài nói chuyện của ông Jones.\n\nMặc dù tôi rất tiếc khi biết tin ông Seiko bị ốm, tôi cảm kích việc ông Jones đã nhiệt tình nhận lời giúp đỡ nhanh chóng. Để đảm bảo buổi chia sẻ sắp tới vẫn mới mẻ đối với những hội viên từng tham dự trước đây, tôi xin đưa ra ba đề xuất. Thứ nhất, ông Jones có thể tập trung chuyên sâu vào các loài cây thích ứng thời tiết và kỹ thuật chăm sóc cây mùa lạnh. Thêm vào đó, việc thị phạm kỹ thuật cắt tỉa cành thực tế sẽ mang lại giá trị thiết thực. Cuối cùng, việc tổ chức một phiên chợ nhỏ trao đổi cây giống sau buổi nói chuyện sẽ khích lệ sự hào hứng của các hội viên.\n\nTôi hy vọng những đề xuất này sẽ được đón nhận, và rất mong nhận được phản hồi từ ban quản lý.\n\nTrân trọng,\nAlex Nguyen",
          "analysis": [
            {
              "label": "Giới thiệu & Mục đích",
              "text": "Dear Club Manager, My name is Alex, and I have been a devoted member of our Garden Club for over a year. I am writing in response to the notification regarding the cancellation of Mr. Seiko's presentation and the rescheduling of Mr. Jones's lecture."
            },
            {
              "label": "Bày tỏ thông cảm & Đánh giá",
              "text": "While I share the general regret concerning Mr. Seiko's illness, I appreciate Mr. Jones stepping in promptly."
            },
            {
              "label": "3 Đề xuất làm mới buổi nói chuyện (B2+)",
              "text": "First, Mr. Jones could focus specifically on climate-resilient plants and winter care techniques. Furthermore, hosting an interactive plant-pruning demonstration would add practical hands-on value. Finally, organizing a mini plant-exchange market afterwards would encourage lively member participation."
            },
            {
              "label": "Lời kết trang trọng",
              "text": "I hope these recommendations are well received, and I look forward to your response. Yours sincerely, Alex Nguyen"
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
          "name": "1. Lựa chọn & Lý do bền vững",
          "icon": "Sparkles",
          "items": [
            {
              "en": "the gardening skills workshop",
              "vi": "buổi workshop dạy kỹ năng làm vườn",
              "example": "I believe the gardening skills workshop yields greater benefits."
            },
            {
              "en": "creates long-lasting green spaces",
              "vi": "tạo ra những không gian xanh lâu dài bền vững",
              "example": "Teaching skills empowers citizens to create sustainable green areas."
            },
            {
              "en": "green balcony and rooftop gardens",
              "vi": "vườn ban công và vườn sân thượng xanh mát",
              "example": "Members can easily grow balcony herbs and flowers."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 53,
          "en": "Hi Sophie,\nHave you evaluated the city's two greening proposals? Personally, I strongly favor the second option of teaching gardening skills. Equipping citizens with practical knowledge creates sustainable greenery right in our neighborhoods! Why don't we both sign up for the gardening workshop next weekend?\nLet me know what you think!\nWarmly,\nAlex",
          "vi": "Chào Sophie,\nCậu đã xem qua hai đề xuất phủ xanh thành phố chưa? Cá nhân tớ hoàn toàn ủng hộ phương án thứ hai là đào tạo kỹ năng làm vườn. Việc trang bị kiến thức thực tế cho người dân sẽ tạo ra mảng xanh bền vững ngay tại khu dân cư! Chúng mình cùng đăng ký tham gia lớp làm vườn vào cuối tuần tới nhé?\nCho tớ biết ý kiến của cậu nha!\nThân mến,\nAlex",
          "analysis": [
            {
              "label": "Nhắc sự việc",
              "text": "Hi Sophie, Have you evaluated the city's two greening proposals?"
            },
            {
              "label": "Lựa chọn phương án & Lý do (B2+)",
              "text": "Personally, I strongly favor the second option of teaching gardening skills. Equipping citizens with practical knowledge creates sustainable greenery right in our neighborhoods!"
            },
            {
              "label": "Rủ rê & Kết thư",
              "text": "Why don't we both sign up for the gardening workshop next weekend? Let me know what you think! Warmly, Alex"
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
          "name": "1. Đề xuất 1: Khóa đào tạo thực hành (Hands-on Training)",
          "icon": "Sparkles",
          "items": [
            {
              "en": "design hands-on training sessions",
              "vi": "thiết kế các buổi đào tạo thực hành trực quan",
              "example": "First, we should design hands-on training sessions for beginners."
            },
            {
              "en": "cultivating balcony gardens and purifying plants",
              "vi": "trồng vườn ban công và các loại cây lọc không khí",
              "example": "Focusing on purifying plants is ideal for city apartments."
            }
          ]
        },
        {
          "name": "2. Đề xuất 2: Bộ quà tặng cây giống (Starter Seed Kits)",
          "icon": "CheckCircle2",
          "items": [
            {
              "en": "distribute free starter seed kits and soil packets",
              "vi": "phát tặng miễn phí bộ hạt giống khởi đầu và gói đất dinh dưỡng",
              "example": "Second, it would be better to distribute free starter seed kits."
            },
            {
              "en": "encourage immediate gardening at home",
              "vi": "khuyến khích việc bắt tay làm vườn ngay tại nhà",
              "example": "Starter kits motivate participants to apply their knowledge right away."
            }
          ]
        },
        {
          "name": "3. Đề xuất 3: Thử thách sống xanh trên mạng (Online Challenge)",
          "icon": "BookOpen",
          "items": [
            {
              "en": "initiate an online Green Living Challenge",
              "vi": "khởi xướng thử thách Sống Xanh trực tuyến",
              "example": "Finally, the club could initiate an online Green Living Challenge."
            },
            {
              "en": "share weekly growth milestones and tips",
              "vi": "chia sẻ hình ảnh quá trình lớn lên của cây và mẹo chăm sóc hàng tuần",
              "example": "Weekly milestones keep participants deeply connected and motivated."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 141,
          "en": "Dear Club Manager,\n\nMy name is Alex, and I have been an active member of our Garden Club for the past two years. I am writing to provide my recommendation regarding the city council's two greening proposals.\n\nAfter careful consideration, I firmly support the second option of offering practical gardening training to local citizens. While planting trees in public parks is undoubtedly beneficial, educating residents creates sustainable, long-term environmental stewardship. To maximize the impact of this program, I would like to propose three measures. First, workshops should focus on low-maintenance balcony plants, composting, and organic pest control. Furthermore, partnering with local plant nurseries could provide participants with discounted starter gardening kits. Finally, launching an annual neighborhood greening competition would inspire ongoing community involvement.\n\nI trust these recommendations will prove constructive, and I look forward to your response.\n\nYours sincerely,\nAlex Nguyen",
          "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Alex, và tôi đã là hội viên tích cực của Câu lạc bộ Làm vườn suốt hai năm qua. Tôi viết email này nhằm đóng góp khuyến nghị về hai đề xuất phủ xanh của hội đồng thành phố.\n\nSau khi cân nhắc cẩn trọng, tôi hoàn toàn ủng hộ phương án thứ hai là tổ chức các khóa đào tạo làm vườn thực hành cho người dân. Mặc dù việc trồng cây tại các công viên công cộng chắc chắn rất hữu ích, việc giáo dục người dân sẽ tạo ra ý thức gìn giữ môi trường bền vững và dài lâu. Để tối ưu hóa hiệu quả của chương trình, tôi xin đề xuất ba giải pháp. Thứ nhất, các buổi hướng dẫn nên tập trung vào các giống cây ban công dễ chăm sóc, kỹ thuật ủ phân hữu cơ và kiểm soát sâu bọ tự nhiên. Hơn nữa, việc hợp tác với các vườn ươm địa phương có thể cung cấp các bộ dụng cụ trồng cây khởi đầu với giá ưu đãi cho học viên. Cuối cùng, việc phát động cuộc thi thường niên về không gian xanh khu dân cư sẽ khích lệ sự gắn bó lâu dài của cộng đồng.\n\nTôi tin rằng những ý kiến này sẽ mang tính xây dựng cao, và rất mong nhận được hồi âm từ ban quản lý.\n\nTrân trọng,\nAlex Nguyen",
          "analysis": [
            {
              "label": "Giới thiệu & Mục đích",
              "text": "Dear Club Manager, My name is Alex, and I have been an active member of our Garden Club for the past two years. I am writing to provide my recommendation regarding the city council's two greening proposals."
            },
            {
              "label": "Lập trường dứt khoát & Luận điểm",
              "text": "After careful consideration, I firmly support the second option of offering practical gardening training to local citizens. While planting trees in public parks is undoubtedly beneficial, educating residents creates sustainable, long-term environmental stewardship."
            },
            {
              "label": "3 Đề xuất triển khai chi tiết (B2+)",
              "text": "First, workshops should focus on low-maintenance balcony plants, composting, and organic pest control. Furthermore, partnering with local plant nurseries could provide participants with discounted starter gardening kits. Finally, launching an annual neighborhood greening competition would inspire ongoing community involvement."
            },
            {
              "label": "Lời kết trang trọng",
              "text": "I trust these recommendations will prove constructive, and I look forward to your response. Yours sincerely, Alex Nguyen"
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
          "name": "1. Môn thể thao & Tinh thần đồng đội",
          "icon": "Sparkles",
          "items": [
            {
              "en": "5-a-side football and badminton",
              "vi": "bóng đá 5 người và cầu lông",
              "example": "We could organize 5-a-side football and badminton matches."
            },
            {
              "en": "form a competitive team together",
              "vi": "cùng nhau lập một đội thi đấu",
              "example": "Let's form a competitive team together and register early."
            },
            {
              "en": "boost physical health and team spirit",
              "vi": "nâng cao thể lực và tinh thần đồng đội",
              "example": "The tournament will boost physical health and team spirit."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 50,
          "en": "Hi Kevin,\nDid you see that our Sports Club is planning a sports competition for junior members? I think it is an outstanding idea to inspire young athletes! We should certainly propose introducing 3x3 basketball and badminton tournaments.\nWhy don't we volunteer as match referees together?\nCatch up soon,\nAlex",
          "vi": "Chào Kevin,\nCậu có thấy thông báo câu lạc bộ mình đang lên kế hoạch tổ chức một giải đấu thể thao cho các thành viên trẻ tuổi không? Tớ thấy đây là ý tưởng tuyệt vời để truyền cảm hứng cho các vận động viên trẻ! Chúng mình chắc chắn nên đề xuất đưa vào thi đấu bóng rổ 3x3 và cầu lông.\nHay chúng mình cùng đăng ký làm trọng tài giải đấu nhé?\nGặp lại sớm,\nAlex",
          "analysis": [
            {
              "label": "Nhắc tin tức",
              "text": "Hi Kevin, Did you see that our Sports Club is planning a sports competition for junior members?"
            },
            {
              "label": "Cảm xúc & Đề xuất môn thi (B2+)",
              "text": "I think it is an outstanding idea to inspire young athletes! We should certainly propose introducing 3x3 basketball and badminton tournaments."
            },
            {
              "label": "Rủ rê làm tình nguyện & Kết thư",
              "text": "Why don't we volunteer as match referees together? Catch up soon, Alex"
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
          "name": "1. Đề xuất 1: Lựa chọn môn thi đấu (Sports Selection)",
          "icon": "Sparkles",
          "items": [
            {
              "en": "select accessible sports like badminton and mini football",
              "vi": "chọn các môn dễ tiếp cận như cầu lông và bóng đá mini",
              "example": "First, we should feature accessible sports like badminton and mini football."
            },
            {
              "en": "cater to various athletic abilities",
              "vi": "đáp ứng nhiều trình độ thể lực khác nhau",
              "example": "Offering diverse sports caters to various athletic abilities."
            }
          ]
        },
        {
          "name": "2. Đề xuất 2: An toàn y tế & Trọng tài (Safety & Refereeing)",
          "icon": "CheckCircle2",
          "items": [
            {
              "en": "have a dedicated first-aid station and trained referee",
              "vi": "bố trí trạm sơ cứu chuyên dụng và trọng tài đào tạo bài bản",
              "example": "Second, it would be better to have a dedicated first-aid station on site."
            },
            {
              "en": "ensure fair competition and participant safety",
              "vi": "đảm bảo tính công bằng và sự an toàn cho người thi đấu",
              "example": "Certified referees ensure fair play and reduce injury risks."
            }
          ]
        },
        {
          "name": "3. Đề xuất 3: Khen thưởng & Cổ vũ (Awards & Fair Play)",
          "icon": "BookOpen",
          "items": [
            {
              "en": "award medals, certificates, and fair-play trophies",
              "vi": "trao huy chương, giấy khen và cúp phong cách fair-play",
              "example": "Finally, we could award medals and fair-play trophies to all teams."
            },
            {
              "en": "instill values of sportsmanship and perseverance",
              "vi": "bồi dưỡng tinh thần thể thao cao thượng và sự kiên trì",
              "example": "Recognizing all participants instills true sportsmanship."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 142,
          "en": "Dear Club Manager,\n\nMy name is Alex, and I have been an active participant in our Sports Club for nearly two years. I am writing to offer my thoughts and recommendations regarding the upcoming sports tournament organized for our youth members.\n\nI firmly believe this competition will stimulate active lifestyles and foster teamwork among junior participants. To ensure a well-structured and safe tournament, I would like to propose three practical measures. First, organizing accessible sports such as mini football, badminton, and 3x3 basketball will attract broad participation. Furthermore, dividing contestants into balanced age categories and having certified trainers present will guarantee safety and fairness. Finally, awarding medals, certificates, and sports merchandise to all participants would greatly encourage continued sporting dedication.\n\nI trust these recommendations will assist in organizing an outstanding tournament, and I look forward to your feedback.\n\nYours sincerely,\nAlex Nguyen",
          "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Alex, và tôi đã là thành viên tích cực tham gia các hoạt động thể thao của câu lạc bộ suốt gần hai năm qua. Tôi viết thư này để đóng góp ý kiến và khuyến nghị cho giải đấu thể thao sắp tới dành cho các hội viên trẻ tuổi.\n\nTôi tin chắc rằng giải đấu này sẽ khuyến khích lối sống năng động và tinh thần đồng đội cho các bạn trẻ. Để đảm bảo một giải đấu bài bản và an toàn, tôi xin đề xuất ba giải pháp thực tế. Thứ nhất, việc tổ chức các môn thể thao dễ tiếp cận như bóng đá mini, cầu lông và bóng rổ 3x3 sẽ thu hút đông đảo thí sinh tham gia. Hơn nữa, việc phân chia lứa tuổi thi đấu cân bằng và bố trí các huấn luyện viên có chứng chỉ hỗ trợ sẽ đảm bảo tính công bằng và an toàn tuyệt đối. Cuối cùng, việc trao huy chương, giấy chứng nhận và quà lưu niệm thể thao cho tất cả các em tham dự sẽ khích lệ tinh thần rèn luyện lâu dài.\n\nTôi tin tưởng những đóng góp này sẽ hỗ trợ ban tổ chức tạo nên một giải đấu xuất sắc, và rất mong nhận được phản hồi từ bạn.\n\nTrân trọng,\nAlex Nguyen",
          "analysis": [
            {
              "label": "Giới thiệu & Mục đích",
              "text": "Dear Club Manager, My name is Alex, and I have been an active participant in our Sports Club for nearly two years. I am writing to offer my thoughts and recommendations regarding the upcoming sports tournament organized for our youth members."
            },
            {
              "label": "Đánh giá ý nghĩa",
              "text": "I firmly believe this competition will stimulate active lifestyles and foster teamwork among junior participants."
            },
            {
              "label": "3 Đề xuất tổ chức chuyên nghiệp (B2+)",
              "text": "First, organizing accessible sports such as mini football, badminton, and 3x3 basketball will attract broad participation. Furthermore, dividing contestants into balanced age categories and having certified trainers present will guarantee safety and fairness. Finally, awarding medals, certificates, and sports merchandise to all participants would greatly encourage continued sporting dedication."
            },
            {
              "label": "Lời kết trang trọng",
              "text": "I trust these recommendations will assist in organizing an outstanding tournament, and I look forward to your feedback. Yours sincerely, Alex Nguyen"
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
          "name": "1. Điện ảnh & Sự kiện",
          "icon": "Sparkles",
          "items": [
            {
              "en": "behind-the-scenes secrets of blockbuster movies",
              "vi": "những bí mật hậu trường của các bộ phim bom tấn",
              "example": "He could reveal behind-the-scenes secrets of blockbuster movies."
            },
            {
              "en": "cinematic storytelling and directing tips",
              "vi": "nghệ thuật kể chuyện bằng hình ảnh và mẹo đạo diễn",
              "example": "I want to learn more about cinematic storytelling."
            },
            {
              "en": "reserve front-row seats together",
              "vi": "cùng nhau đặt sớm những ghế hàng đầu",
              "example": "Let's reserve front-row seats before tickets run out."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 47,
          "en": "Hi Brian,\nOur Film Club is hosting a renowned movie critic next week! I was thrilled to hear this news because it offers rare industry insights. I will suggest focusing the discussion on how digital streaming transforms modern storytelling.\nShall we reserve front-row seats together?\nBest,\nAlex",
          "vi": "Chào Brian,\nCâu lạc bộ Điện ảnh của mình sắp đón tiếp một nhà phê bình phim nổi tiếng vào tuần tới đấy! Tớ vô cùng phấn khích khi biết tin vì đây là cơ hội hiếm có để hiểu sâu hơn về ngành phim ảnh. Tớ sẽ đề xuất tập trung thảo luận về việc các nền tảng trực tuyến đang thay đổi cách kể chuyện hiện đại ra sao.\nChúng mình cùng đặt vé hàng ghế đầu nhé?\nThân,\nAlex",
          "analysis": [
            {
              "label": "Nhắc sự kiện",
              "text": "Hi Brian, Our Film Club is hosting a renowned movie critic next week!"
            },
            {
              "label": "Cảm xúc & Đề xuất chủ đề (B2+)",
              "text": "I was thrilled to hear this news because it offers rare industry insights. I will suggest focusing the discussion on how digital streaming transforms modern storytelling."
            },
            {
              "label": "Rủ rê & Ký tên",
              "text": "Shall we reserve front-row seats together? Best, Alex"
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
          "name": "1. Đề xuất 1: Chủ đề hấp dẫn (Captivating Topic)",
          "icon": "Sparkles",
          "items": [
            {
              "en": "The Secret Art of Visual Storytelling in Modern Cinema",
              "vi": "Nghệ thuật Kể chuyện bằng Hình ảnh trong Điện ảnh Hiện đại",
              "example": "First, the critic should explore Visual Storytelling in Modern Cinema."
            },
            {
              "en": "appeal to casual moviegoers and film students alike",
              "vi": "thu hút cả người xem phim đại chúng lẫn sinh viên điện ảnh",
              "example": "This theme bridges entertainment and academic insight."
            }
          ]
        },
        {
          "name": "2. Đề xuất 2: Truyền thông đa kênh (Multi-channel Promotion)",
          "icon": "CheckCircle2",
          "items": [
            {
              "en": "promote the event via short video teasers on social media",
              "vi": "quảng bá sự kiện bằng các đoạn video ngắn trên mạng xã hội",
              "example": "Second, it would be better to share short video teasers on youth forums."
            },
            {
              "en": "partner with local university media clubs",
              "vi": "liên kết với câu lạc bộ truyền thông các trường đại học",
              "example": "Campus outreach ensures high student attendance."
            }
          ]
        },
        {
          "name": "3. Đề xuất 3: Giao lưu & Quà tặng (Interactive Incentives)",
          "icon": "BookOpen",
          "items": [
            {
              "en": "organize an interactive Q&A session with cinema vouchers",
              "vi": "tổ chức phần hỏi đáp tương tác kèm voucher vé xem phim",
              "example": "Finally, we could award cinema vouchers for insightful questions."
            },
            {
              "en": "encourage spirited critical debate",
              "vi": "khuyến khích các cuộc tranh luận phản biện sôi nổi",
              "example": "Live interaction creates a memorable experience."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 136,
          "en": "Dear Club Manager,\n\nMy name is Alex, and I have been an active member of our Film Club for over a year. I am writing to share my suggestions regarding the upcoming workshop featuring a distinguished film critic.\n\nInviting a professional critic is an extraordinary opportunity to elevate our club's profile. Regarding the talk's theme, I recommend exploring \"The Evolution of Cinematic Storytelling in the Streaming Era,\" as this topic appeals to casual moviegoers and aspiring filmmakers alike. To maximize attendance, our media team should promote teaser video clips across social channels and offer discounted tickets for cinema students. Furthermore, concluding the event with an open Q&A session alongside light snacks would ensure a vibrant atmosphere.\n\nI hope these suggestions prove helpful for event preparations, and I look forward to your response.\n\nYours sincerely,\nAlex Nguyen",
          "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Alex, và tôi đã là hội viên tích cực của Câu lạc bộ Điện ảnh hơn một năm qua. Tôi viết email này nhằm chia sẻ một số đề xuất cho buổi tọa đàm sắp tới với nhà phê bình phim nổi tiếng.\n\nViệc mời một nhà phê bình chuyên nghiệp là cơ hội đặc biệt để nâng cao vị thế câu lạc bộ. Về chủ đề tọa đàm, tôi đề xuất lựa chọn \"Sự Tiến hóa của Nghệ thuật Kể chuyện Điện ảnh trong Kỷ nguyên Số\", bởi chủ đề này hấp dẫn cả những khán giả đại chúng lẫn những bạn trẻ đam mê làm phim. Để tối ưu lượng người tham dự, ban truyền thông nên quảng bá các đoạn clip ngắn trên mạng xã hội và phát hành vé ưu đãi cho sinh viên ngành nghệ thuật. Thêm vào đó, việc khép lại chương trình bằng một buổi hỏi đáp mở cùng tiệc trà nhẹ sẽ tạo nên không khí thảo luận sôi nổi.\n\nTôi hy vọng những đề xuất này sẽ hỗ trợ ban tổ chức, và rất mong nhận được hồi âm từ bạn.\n\nTrân trọng,\nAlex Nguyen",
          "analysis": [
            {
              "label": "Giới thiệu & Mục đích",
              "text": "Dear Club Manager, My name is Alex, and I have been an active member of our Film Club for over a year. I am writing to share my suggestions regarding the upcoming workshop featuring a distinguished film critic."
            },
            {
              "label": "Đánh giá sự kiện & Chủ đề đề xuất",
              "text": "Inviting a professional critic is an extraordinary opportunity to elevate our club's profile. Regarding the talk's theme, I recommend exploring 'The Evolution of Cinematic Storytelling in the Streaming Era,' as this topic appeals to casual moviegoers and aspiring filmmakers alike."
            },
            {
              "label": "Chiến lược quảng bá & Hoạt động (B2+)",
              "text": "To maximize attendance, our media team should promote teaser video clips across social channels and offer discounted tickets for cinema students. Furthermore, concluding the event with an open Q&A session alongside light snacks would ensure a vibrant atmosphere."
            },
            {
              "label": "Lời kết trang trọng",
              "text": "I hope these suggestions prove helpful for event preparations, and I look forward to your response. Yours sincerely, Alex Nguyen"
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
          "name": "1. Kỹ năng lái xe & Đề cử",
          "icon": "Sparkles",
          "items": [
            {
              "en": "European cross-country road trip",
              "vi": "chuyến đi phượt xuyên Châu Âu bằng xe hơi",
              "example": "Participating in a European road trip is a dream experience."
            },
            {
              "en": "extensive long-distance driving experience",
              "vi": "kinh nghiệm lái xe đường trường dày dạn",
              "example": "Both drivers have extensive long-distance driving experience."
            },
            {
              "en": "basic mechanical troubleshooting skills",
              "vi": "kỹ năng xử lý sự cố máy móc cơ bản",
              "example": "Mechanical troubleshooting skills are crucial on remote highways."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 48,
          "en": "Hi Tom,\nDid you see the announcement about the upcoming cross-Europe driving tour? Two club representatives are invited to participate! I believe we should nominate Daniel as the primary driver due to his exceptional track record and mechanical expertise.\nWould you endorse my nomination as well?\nCheers,\nAlex",
          "vi": "Chào Tom,\nCậu đã xem thông báo về hành trình lái xe xuyên châu Âu sắp tới chưa? Câu lạc bộ mình được cử hai đại diện tham gia đấy! Tớ tin rằng chúng ta nên đề cử anh Daniel làm tài xế chính nhờ kinh nghiệm lái xe đường dài xuất sắc và am hiểu kỹ thuật xe cộ của anh ấy.\nCậu cũng ủng hộ đề cử này của tớ chứ?\nThân,\nAlex",
          "analysis": [
            {
              "label": "Nhắc sự kiện",
              "text": "Hi Tom, Did you see the announcement about the upcoming cross-Europe driving tour? Two club representatives are invited to participate!"
            },
            {
              "label": "Đề cử ứng viên & Lý do (B2+)",
              "text": "I believe we should nominate Daniel as the primary driver due to his exceptional track record and mechanical expertise."
            },
            {
              "label": "Hỏi ý kiến & Ký tên",
              "text": "Would you endorse my nomination as well? Cheers, Alex"
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
          "name": "1. Đề xuất 1: Đề cử lái chính (Lead Driver)",
          "icon": "Sparkles",
          "items": [
            {
              "en": "possess fifteen years of cross-border driving experience",
              "vi": "có 15 năm kinh nghiệm lái xe đường trường xuyên biên giới",
              "example": "First, Michael possesses fifteen years of cross-border driving experience."
            },
            {
              "en": "hold a valid international driving permit",
              "vi": "sở hữu giấy phép lái xe quốc tế còn thời hạn",
              "example": "He holds a clean record and valid international driving credentials."
            }
          ]
        },
        {
          "name": "2. Đề xuất 2: Đề cử hoa tiêu (Co-pilot / Passenger)",
          "icon": "CheckCircle2",
          "items": [
            {
              "en": "fluent in languages and expert in route navigation",
              "vi": "thông thạo ngoại ngữ và chuyên gia dẫn đường",
              "example": "Second, Sarah is fluent in French and German and expert in navigation."
            },
            {
              "en": "sound mechanical troubleshooting skills",
              "vi": "kỹ năng chẩn đoán sự cố cơ khí thành thạo",
              "example": "Her mechanical knowledge allows immediate roadside repairs if necessary."
            }
          ]
        },
        {
          "name": "3. Đề xuất 3: An toàn & Hậu cần (Safety & Logistics)",
          "icon": "BookOpen",
          "items": [
            {
              "en": "arrange comprehensive insurance and satellite GPS",
              "vi": "thu xếp bảo hiểm toàn diện và thiết bị định vị vệ tinh",
              "example": "Finally, we must secure comprehensive travel insurance and satellite GPS."
            },
            {
              "en": "conduct full vehicle inspection before departure",
              "vi": "kiểm tra kỹ thuật xe hơi toàn diện trước ngày khởi hành",
              "example": "A rigorous vehicle check guarantees flawless reliability."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 137,
          "en": "Dear Club Manager,\n\nMy name is Alex, and I have been a devoted member of our Car Club for two years. I am writing to nominate candidates for the two representative positions in the upcoming cross-Europe driving program.\n\nGiven the rigorous demands of long-distance continental navigation, selecting experienced and reliable representatives is essential. For the lead driver role, I enthusiastically nominate Mr. Daniel Evans. He possesses over a decade of accident-free driving experience and holds specialized advanced vehicle handling certifications. For the co-driver and navigator position, Ms. Clara Jenkins is an exemplary choice due to her fluency in multiple European languages and extensive mechanical troubleshooting background. Together, they form an exceptionally balanced team capable of representing our club with distinction.\n\nThank you for considering my recommendations, and I look forward to your decision.\n\nYours sincerely,\nAlex Nguyen",
          "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Alex, và tôi đã là thành viên gắn bó của Câu lạc bộ Xe hơi suốt hai năm qua. Tôi viết thư này để chính thức đề cử ứng viên cho hai vị trí đại diện tham gia chương trình lái xe xuyên châu Âu sắp tới.\n\nXét đến tính chất thử thách của các chặng đường dài xuyên lục địa, việc lựa chọn những đại diện dày dạn kinh nghiệm và đáng tin cậy là tối quan trọng. Đối với vị trí tài xế chính, tôi nhiệt liệt đề cử anh Daniel Evans. Anh ấy sở hữu hơn mười năm kinh nghiệm lái xe an toàn tuyệt đối và có chứng chỉ xử lý phương tiện nâng cao. Đối với vị trí hoa tiêu đồng hành, chị Clara Jenkins là sự lựa chọn mẫu mực nhờ khả năng thông thạo nhiều ngôn ngữ châu Âu và am hiểu sâu sắc về khắc phục sự cố kỹ thuật xe. Sự phối hợp của hai anh chị sẽ tạo nên một đội ngũ hoàn hảo, xứng đáng đại diện cho danh tiếng của câu lạc bộ.\n\nXin chân thành cảm ơn ban quản lý đã cân nhắc đề xuất của tôi, và tôi rất mong nhận được quyết định cuối cùng.\n\nTrân trọng,\nAlex Nguyen",
          "analysis": [
            {
              "label": "Giới thiệu & Mục đích",
              "text": "Dear Club Manager, My name is Alex, and I have been a devoted member of our Car Club for two years. I am writing to nominate candidates for the two representative positions in the upcoming cross-Europe driving program."
            },
            {
              "label": "Tiêu chí lựa chọn",
              "text": "Given the rigorous demands of long-distance continental navigation, selecting experienced and reliable representatives is essential."
            },
            {
              "label": "Đề cử chi tiết 2 nhân sự (B2+)",
              "text": "For the lead driver role, I enthusiastically nominate Mr. Daniel Evans. He possesses over a decade of accident-free driving experience and holds specialized advanced vehicle handling certifications. For the co-driver and navigator position, Ms. Clara Jenkins is an exemplary choice due to her fluency in multiple European languages and extensive mechanical troubleshooting background. Together, they form an exceptionally balanced team capable of representing our club with distinction."
            },
            {
              "label": "Lời kết trang trọng",
              "text": "Thank you for considering my recommendations, and I look forward to your decision. Yours sincerely, Alex Nguyen"
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
          "name": "1. Hoạt động tình nguyện & Ý tưởng",
          "icon": "Sparkles",
          "items": [
            {
              "en": "neighborhood recycling drive and garage sale",
              "vi": "ngày hội thu gom rác tái chế và bán đồ cũ từ thiện",
              "example": "A recycling drive and garage sale raises funds quickly."
            },
            {
              "en": "support disadvantaged children and elderly residents",
              "vi": "hỗ trợ trẻ em có hoàn cảnh khó khăn và người già neo đơn",
              "example": "These projects support disadvantaged local residents."
            },
            {
              "en": "meaningful community impact",
              "vi": "tác động cộng đồng đầy ý nghĩa",
              "example": "Volunteering brings meaningful community impact."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 47,
          "en": "Hi Hannah,\nDid you see our club's appeal for fresh ideas to recruit volunteers and expand activities? I am eager to help! I think organizing a charity weekend fair would attract enthusiastic newcomers and raise funds.\nWhy don't we draft a proposal together this evening?\nWarmly,\nAlex",
          "vi": "Chào Hannah,\nCậu có thấy lời kêu gọi của câu lạc bộ mình về các ý tưởng mới để tuyển tình nguyện viên và mở rộng hoạt động không? Tớ rất nóng lòng muốn góp sức! Tớ nghĩ việc tổ chức một hội chợ từ thiện cuối tuần sẽ thu hút nhiều người mới nhiệt tình và gây quỹ hiệu quả.\nTối nay chúng mình cùng phác thảo một bản đề xuất nhé?\nThân mến,\nAlex",
          "analysis": [
            {
              "label": "Nhắc thông báo",
              "text": "Hi Hannah, Did you see our club's appeal for fresh ideas to recruit volunteers and expand activities? I am eager to help!"
            },
            {
              "label": "Đề xuất giải pháp (B2+)",
              "text": "I think organizing a charity weekend fair would attract enthusiastic newcomers and raise funds."
            },
            {
              "label": "Rủ rê & Ký tên",
              "text": "Why don't we draft a proposal together this evening? Warmly, Alex"
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
          "name": "1. Đề xuất 1: Liên kết trường học (Youth Outreach)",
          "icon": "Sparkles",
          "items": [
            {
              "en": "partner with local schools and universities",
              "vi": "hợp tác với các trường phổ thông và đại học địa phương",
              "example": "First, we should partner with universities to recruit energetic youth."
            },
            {
              "en": "award official certificates of community service",
              "vi": "trao giấy chứng nhận hoạt động cộng đồng chính thức",
              "example": "Certificates help students boost their university and job applications."
            }
          ]
        },
        {
          "name": "2. Đề xuất 2: Đổi rác lấy cây (Eco-Exchange Initiative)",
          "icon": "CheckCircle2",
          "items": [
            {
              "en": "launch an Eco-Exchange program trading waste for plants",
              "vi": "phát động chương trình đổi phế liệu lấy cây xanh",
              "example": "Second, it would be better to launch an Eco-Exchange program."
            },
            {
              "en": "raise environmental awareness among citizens",
              "vi": "nâng cao nhận thức bảo vệ môi trường trong cộng đồng",
              "example": "Trading plastic for plants engages thousands of residents."
            }
          ]
        },
        {
          "name": "3. Đề xuất 3: Bữa tối thiện nguyện gia đình (Charity Dinners)",
          "icon": "BookOpen",
          "items": [
            {
              "en": "organize monthly community charity banquets",
              "vi": "tổ chức tiệc tối cộng đồng gây quỹ từ thiện hàng tháng",
              "example": "Finally, we could organize monthly charity banquets."
            },
            {
              "en": "foster strong neighborhood solidarity and funding",
              "vi": "thúc đẩy tình đoàn kết xóm giềng và nguồn quỹ dồi dào",
              "example": "Shared meals build lasting neighborhood solidarity."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 135,
          "en": "Dear Club Manager,\n\nMy name is Alex, and I have been an active volunteer in our Community Club for over eighteen months. I am writing to share several practical proposals aimed at boosting our membership and revitalizing club initiatives.\n\nTo attract passionate new members and broaden our community impact, I would like to suggest three key actions. First, establishing partnerships with local high schools and universities would provide students with meaningful volunteer opportunities. Furthermore, organizing a monthly community flea market and charity bake sale would generate project funding while creating a welcoming public presence. Finally, producing engaging short-form video stories on social media showcasing our volunteers' tangible achievements would significantly enhance outreach among younger demographics.\n\nI hope these suggestions assist your strategic planning, and I look forward to supporting upcoming projects.\n\nYours sincerely,\nAlex Nguyen",
          "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Alex, và tôi đã là một tình nguyện viên tích cực của Câu lạc bộ Cộng đồng hơn 18 tháng qua. Tôi viết thư này để đóng góp một số đề xuất thực tế nhằm phát triển hội viên và đổi mới các chương trình hoạt động của câu lạc bộ.\n\nĐể thu hút thêm những thành viên nhiệt huyết và lan tỏa tầm ảnh hưởng xã hội, tôi xin đề xuất ba giải pháp trọng tâm. Thứ nhất, việc thiết lập mối quan hệ hợp tác với các trường trung học và đại học tại địa phương sẽ mang đến cho học sinh, sinh viên cơ hội tình nguyện ý nghĩa. Hơn nữa, việc tổ chức hội chợ đồ cũ định kỳ và quầy bánh gây quỹ từ thiện hàng tháng sẽ vừa tạo nguồn kinh phí cho dự án, vừa giúp câu lạc bộ hiện diện thân thiện trước công chúng. Cuối cùng, việc sản xuất các video ngắn truyền cảm hứng trên mạng xã hội ghi lại những thành quả cụ thể của các tình nguyện viên sẽ nâng cao hiệu quả tiếp cận giới trẻ.\n\nTôi hy vọng những đề xuất này sẽ hỗ trợ kế hoạch chiến lược của ban quản lý, và rất mong được đồng hành trong các dự án sắp tới.\n\nTrân trọng,\nAlex Nguyen",
          "analysis": [
            {
              "label": "Giới thiệu & Mục đích",
              "text": "Dear Club Manager, My name is Alex, and I have been an active volunteer in our Community Club for over eighteen months. I am writing to share several practical proposals aimed at boosting our membership and revitalizing club initiatives."
            },
            {
              "label": "3 Giải pháp phát triển câu lạc bộ (B2+)",
              "text": "First, establishing partnerships with local high schools and universities would provide students with meaningful volunteer opportunities. Furthermore, organizing a monthly community flea market and charity bake sale would generate project funding while creating a welcoming public presence. Finally, producing engaging short-form video stories on social media showcasing our volunteers' tangible achievements would significantly enhance outreach among younger demographics."
            },
            {
              "label": "Lời kết trang trọng",
              "text": "I hope these suggestions assist your strategic planning, and I look forward to supporting upcoming projects. Yours sincerely, Alex Nguyen"
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
          "name": "1. Tiếng ồn & Giải pháp âm nhạc",
          "icon": "Sparkles",
          "items": [
            {
              "en": "switch to acoustic unplugged music",
              "vi": "chuyển sang biểu diễn nhạc mộc không cắm điện công suất lớn",
              "example": "Switching to acoustic music significantly lowers volume levels."
            },
            {
              "en": "wrap up performances before 9:00 PM",
              "vi": "kết thúc các màn biểu diễn trước 9:00 tối",
              "example": "Finishing early avoids disturbing residents' sleep."
            },
            {
              "en": "respect neighbors and avoid noise pollution",
              "vi": "tôn trọng cư dân láng giềng và tránh ô nhiễm tiếng ồn",
              "example": "We must respect neighbors and minimize sound leakage."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 48,
          "en": "Hi Oliver,\nDid you hear that neighbors have complained about the noise from our evening concerts? If we do not address this promptly, the club might cancel all performances. I will suggest shifting our gigs earlier and performing acoustic sets.\nWhat are your thoughts on this?\nBest,\nAlex",
          "vi": "Chào Oliver,\nCậu đã nghe tin hàng xóm phàn nàn về tiếng ồn từ các buổi hòa nhạc buổi tối của câu lạc bộ chưa? Nếu chúng mình không giải quyết sớm, có thể câu lạc bộ sẽ phải hủy toàn bộ các buổi biểu diễn đấy. Tớ sẽ đề xuất chuyển giờ diễn sớm hơn và chơi nhạc mộc (acoustic).\nCậu nghĩ sao về điều này?\nThân,\nAlex",
          "analysis": [
            {
              "label": "Nhắc sự cố & Mức độ nghiêm trọng",
              "text": "Hi Oliver, Did you hear that neighbors have complained about the noise from our evening concerts? If we do not address this promptly, the club might cancel all performances."
            },
            {
              "label": "Giải pháp nhanh (B2+)",
              "text": "I will suggest shifting our gigs earlier and performing acoustic sets."
            },
            {
              "label": "Hỏi ý kiến & Ký tên",
              "text": "What are your thoughts on this? Best, Alex"
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
          "name": "1. Đề xuất 1: Cách âm phòng hòa nhạc (Soundproofing)",
          "icon": "Sparkles",
          "items": [
            {
              "en": "install soundproofing acoustic foam and heavy curtains",
              "vi": "lắp đặt mút tiêu âm và rèm dày cản tiếng ồn",
              "example": "First, we should install acoustic foam and heavy soundproof curtains."
            },
            {
              "en": "prevent severe sound leakage through walls",
              "vi": "ngăn chặn tình trạng rò rỉ âm thanh qua các bức tường",
              "example": "Proper insulation drastically reduces decibel levels outside."
            }
          ]
        },
        {
          "name": "2. Đề xuất 2: Giờ giấc hợp lý (Adjust Showtime)",
          "icon": "CheckCircle2",
          "items": [
            {
              "en": "conclude all performances before 9:30 PM",
              "vi": "kết thúc tất cả các buổi biểu diễn trước 9:30 tối",
              "example": "Second, it would be better to conclude all concerts before 9:30 PM."
            },
            {
              "en": "respect residents' rest and nighttime tranquility",
              "vi": "tôn trọng thời gian nghỉ ngơi và sự yên tĩnh về đêm của cư dân",
              "example": "Ending early shows our consideration for families with small children."
            }
          ]
        },
        {
          "name": "3. Đề xuất 3: Nhạc mộc & Hòa giải (Acoustic Sets & Outreach)",
          "icon": "BookOpen",
          "items": [
            {
              "en": "transition to acoustic and classical unplugged sets",
              "vi": "chuyển sang các bài diễn nhạc mộc acoustic và cổ điển",
              "example": "Finally, we could feature softer acoustic and jazz sets."
            },
            {
              "en": "invite neighbors to complimentary tea concerts",
              "vi": "mời người dân hàng xóm đến thưởng thức các buổi hòa nhạc tiệc trà miễn phí",
              "example": "Goodwill gestures transform dissatisfied neighbors into loyal club supporters."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 142,
          "en": "Dear Club Manager,\n\nMy name is Alex, and I have been an active performing member of our Music Club for over a year. I am writing in response to the recent notice concerning neighbor complaints regarding evening concert volumes.\n\nLive performances represent the heartbeat of our club; however, maintaining amicable relations with local residents is equally vital. To resolve this matter constructively without discontinuing concerts, I would like to propose three solutions. First, rescheduling live shows to conclude before nine in the evening would respect quiet hours. Second, installing acoustic panels and utilizing volume limiters on stage amplifiers would substantially mitigate sound leakage. Finally, hosting unplugged acoustic performances on weekdays while reserving louder amplified bands for weekend afternoons would strike a sensible balance.\n\nI trust these measures will resolve community concerns, and I look forward to your response.\n\nYours sincerely,\nAlex Nguyen",
          "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Alex, và tôi đã là một thành viên biểu diễn tích cực của Câu lạc bộ Âm nhạc hơn một năm qua. Tôi viết email này nhằm hồi đáp thông báo gần đây liên quan đến những phàn nàn từ hàng xóm về âm lượng các buổi hòa nhạc buổi tối.\n\nCác buổi diễn trực tiếp chính là linh hồn của câu lạc bộ; tuy nhiên, việc duy trì mối quan hệ hòa thuận với người dân địa phương cũng quan trọng không kém. Để giải quyết vấn đề này một cách xây dựng mà không phải hủy bỏ các buổi biểu diễn, tôi xin đề xuất ba giải pháp. Thứ nhất, việc điều chỉnh lịch biểu diễn kết thúc trước chín giờ tối sẽ hoàn toàn tôn trọng giờ nghỉ ngơi của khu dân cư. Thứ hai, việc lắp đặt các tấm tiêu âm và sử dụng bộ hạn chế âm lượng cho hệ thống khuếch đại trên sân khấu sẽ giảm thiểu đáng kể tình trạng thoát âm ra ngoài. Cuối cùng, việc ưu tiên các buổi trình diễn acoustic mộc mạc vào các ngày trong tuần và chỉ chơi nhạc điện tử vào chiều cuối tuần sẽ tạo nên sự cân bằng hợp lý.\n\nTôi tin rằng những giải pháp này sẽ hóa giải được những băn khoăn của cộng đồng, và rất mong nhận được hồi âm từ bạn.\n\nTrân trọng,\nAlex Nguyen",
          "analysis": [
            {
              "label": "Giới thiệu & Thấu hiểu bối cảnh",
              "text": "Dear Club Manager, My name is Alex, and I have been an active performing member of our Music Club for over a year. I am writing in response to the recent notice concerning neighbor complaints regarding evening concert volumes. Live performances represent the heartbeat of our club; however, maintaining amicable relations with local residents is equally vital."
            },
            {
              "label": "3 Giải pháp kỹ thuật & Lịch trình (B2+)",
              "text": "First, rescheduling live shows to conclude before nine in the evening would respect quiet hours. Second, installing acoustic panels and utilizing volume limiters on stage amplifiers would substantially mitigate sound leakage. Finally, hosting unplugged acoustic performances on weekdays while reserving louder amplified bands for weekend afternoons would strike a sensible balance."
            },
            {
              "label": "Lời kết trang trọng",
              "text": "I trust these measures will resolve community concerns, and I look forward to your response. Yours sincerely, Alex Nguyen"
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
          "name": "1. Cảm xúc & Kế hoạch tự luyện",
          "icon": "Sparkles",
          "items": [
            {
              "en": "quite disappointed",
              "vi": "khá thất vọng",
              "example": "I was quite disappointed when the talk show was called off."
            },
            {
              "en": "meet at a coffee shop for conversation",
              "vi": "gặp nhau ở quán cà phê để luyện hội thoại",
              "example": "Let's meet at a cozy cafe to practice speaking."
            },
            {
              "en": "keep our study momentum alive",
              "vi": "giữ vững động lực học tập liên tục",
              "example": "Practicing regularly keeps our study momentum alive."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 49,
          "en": "Hi Emily,\nI just saw the email stating that this week's Talk Show is canceled because the guest speaker is unavailable! It is quite disappointing since there is no contingency plan. Why don't we organize an informal English speaking circle at the cafe instead?\nAre you interested?\nCheers,\nAlex",
          "vi": "Chào Emily,\nTớ vừa thấy email thông báo buổi Tọa đàm tuần này bị hủy do diễn giả khách mời bận việc đột xuất! Thật đáng tiếc khi câu lạc bộ không có phương án dự phòng nào. Hay chúng mình cùng nhau tổ chức một nhóm luyện nói tiếng Anh thân mật tại quán cà phê đi?\nCậu có hứng thú không?\nThân,\nAlex",
          "analysis": [
            {
              "label": "Nhắc sự cố",
              "text": "Hi Emily, I just saw the email stating that this week's Talk Show is canceled because the guest speaker is unavailable!"
            },
            {
              "label": "Bày tỏ thất vọng & Giải pháp thay thế (B2+)",
              "text": "It is quite disappointing since there is no contingency plan. Why don't we organize an informal English speaking circle at the cafe instead?"
            },
            {
              "label": "Lời rủ & Ký tên",
              "text": "Are you interested? Cheers, Alex"
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
          "name": "1. Đề xuất 1: Danh sách diễn giả dự bị (Backup Roster)",
          "icon": "Sparkles",
          "items": [
            {
              "en": "maintain a roster of standby guest speakers",
              "vi": "duy trì một danh sách các diễn giả dự phòng",
              "example": "First, the club should maintain a roster of standby guest speakers."
            },
            {
              "en": "invite competent senior club alumni",
              "vi": "mời các cựu hội viên xuất sắc có năng lực",
              "example": "Senior alumni are always ready to share practical experiences."
            }
          ]
        },
        {
          "name": "2. Đề xuất 2: Hoạt động thay thế (Alternative Sessions)",
          "icon": "CheckCircle2",
          "items": [
            {
              "en": "organize peer-led debates and language games",
              "vi": "tổ chức các buổi tranh biện và trò chơi ngôn ngữ do thành viên chủ trì",
              "example": "Second, it would be better to run peer-led debates instead of canceling."
            },
            {
              "en": "prevent wasting members' scheduled weekend time",
              "vi": "tránh lãng phí thời gian cuối tuần đã lên lịch của hội viên",
              "example": "Alternative activities ensure members continue speaking English."
            }
          ]
        },
        {
          "name": "3. Đề xuất 3: Quy trình thông báo khẩn (Communication Protocol)",
          "icon": "BookOpen",
          "items": [
            {
              "en": "establish a dedicated instant notification channel",
              "vi": "thiết lập kênh thông báo khẩn tức thì",
              "example": "Finally, we need an instant notification channel for urgent news."
            },
            {
              "en": "apologize professionally and offer compensation credits",
              "vi": "xin lỗi chuyên nghiệp và có chính sách bù đắp phù hợp",
              "example": "Timely updates demonstrate professional event management."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 143,
          "en": "Dear Club Manager,\n\nMy name is Alex, and I have been an active member of our English Club for over a year. I am writing regarding the unexpected cancellation of this week's Talk Show due to speaker unavailability.\n\nWhile I understand that emergencies arise, having no backup plan leaves members disappointed and disrupts our weekly learning momentum. To prevent similar disruptions in the future, I would like to offer three constructive suggestions. First, the club should establish a roster of alternate guest speakers who can step in when emergencies occur. Furthermore, maintaining pre-designed debate topics would enable members to conduct productive peer workshops even without external guests. Finally, notifying members at least twenty-four hours in advance via an instant group channel would improve communication.\n\nI hope these recommendations enhance future contingency planning, and I look forward to your response.\n\nYours sincerely,\nAlex Nguyen",
          "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Alex, và tôi đã là một hội viên tích cực của Câu lạc bộ Tiếng Anh hơn một năm qua. Tôi viết email này liên quan đến việc hủy buổi Tọa đàm tuần này do diễn giả bận việc đột xuất.\n\nDù tôi hiểu rằng các sự cố bất khả kháng đôi khi vẫn xảy ra, việc thiếu vắng phương án dự phòng khiến nhiều hội viên hụt hẫng và làm gián đoạn nhịp học tập hàng tuần. Để ngăn ngừa các tình huống gián đoạn tương tự trong tương lai, tôi xin đóng góp ba giải pháp mang tính xây dựng. Thứ nhất, câu lạc bộ nên xây dựng một danh sách diễn giả dự phòng sẵn sàng chia sẻ khi có tình huống phát sinh. Hơn nữa, việc chuẩn bị sẵn các chủ đề tranh biện sẽ giúp các hội viên vẫn có một buổi sinh hoạt hữu ích ngay cả khi không có khách mời bên ngoài. Cuối cùng, việc thông báo trước ít nhất 24 giờ qua kênh nhóm chung sẽ cải thiện hiệu quả trao đổi thông tin.\n\nTôi hy vọng những đóng góp này sẽ giúp câu lạc bộ hoàn thiện kế hoạch dự phòng, và rất mong nhận được hồi âm.\n\nTrân trọng,\nAlex Nguyen",
          "analysis": [
            {
              "label": "Giới thiệu & Lý do viết thư",
              "text": "Dear Club Manager, My name is Alex, and I have been an active member of our English Club for over a year. I am writing regarding the unexpected cancellation of this week's Talk Show due to speaker unavailability."
            },
            {
              "label": "Góp ý chân thành (B2+)",
              "text": "While I understand that emergencies arise, having no backup plan leaves members disappointed and disrupts our weekly learning momentum."
            },
            {
              "label": "3 Giải pháp dự phòng bền vững",
              "text": "First, the club should establish a roster of alternate guest speakers who can step in when emergencies occur. Furthermore, maintaining pre-designed debate topics would enable members to conduct productive peer workshops even without external guests. Finally, notifying members at least twenty-four hours in advance via an instant group channel would improve communication."
            },
            {
              "label": "Lời kết trang trọng",
              "text": "I hope these recommendations enhance future contingency planning, and I look forward to your response. Yours sincerely, Alex Nguyen"
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
          "name": "1. Lợi ích tiếng Anh & Cơ hội",
          "icon": "Sparkles",
          "items": [
            {
              "en": "global career opportunities and scholarships",
              "vi": "cơ hội việc làm toàn cầu và học bổng du học",
              "example": "English unlocks global career opportunities and scholarships."
            },
            {
              "en": "overcome communication hesitation",
              "vi": "vượt qua sự e ngại, rụt rè trong giao tiếp",
              "example": "A good talk show helps beginners overcome communication hesitation."
            },
            {
              "en": "gain competitive edge in job market",
              "vi": "có được lợi thế cạnh tranh trên thị trường tuyển dụng",
              "example": "Fluency gives graduates a competitive edge."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 49,
          "en": "Hi Lucas,\nOur English Club is organizing a sponsored talk show on the benefits of language mastery! I am genuinely thrilled about this event. In my opinion, inviting a young diplomat or international journalist would inspire newcomers tremendously.\nLet us attend together and practice our networking skills!\nBest,\nAlex",
          "vi": "Chào Lucas,\nCâu lạc bộ Tiếng Anh của chúng mình sắp tổ chức một buổi tọa đàm được tài trợ về những lợi ích của việc thông thạo ngoại ngữ đấy! Tớ thực sự hào hứng với sự kiện này. Theo tớ, việc mời một nhà ngoại giao trẻ hoặc một nhà báo quốc tế sẽ truyền cảm hứng vô cùng lớn cho các bạn mới tham gia.\nChúng mình cùng đi để rèn luyện kỹ năng giao lưu nhé!\nThân,\nAlex",
          "analysis": [
            {
              "label": "Nhắc sự kiện",
              "text": "Hi Lucas, Our English Club is organizing a sponsored talk show on the benefits of language mastery!"
            },
            {
              "label": "Cảm xúc & Gợi ý diễn giả (B2+)",
              "text": "I am genuinely thrilled about this event. In my opinion, inviting a young diplomat or international journalist would inspire newcomers tremendously."
            },
            {
              "label": "Rủ rê & Ký tên",
              "text": "Let us attend together and practice our networking skills! Best, Alex"
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
          "name": "1. Đề xuất 1: Chủ đề bài nói (Practical Lecture Theme)",
          "icon": "Sparkles",
          "items": [
            {
              "en": "English as a Passport to Global Careers",
              "vi": "Tiếng Anh như tấm hộ chiếu đến với sự nghiệp toàn cầu",
              "example": "First, the lecture should explore English as a Passport to Global Careers."
            },
            {
              "en": "focus on tangible professional and financial advantages",
              "vi": "tập trung vào lợi ích cụ thể về sự nghiệp và thu nhập",
              "example": "Highlighting tangible benefits persuades young people to invest in learning."
            }
          ]
        },
        {
          "name": "2. Đề xuất 2: Tiêu chí chọn diễn giả (Speaker Criteria)",
          "icon": "CheckCircle2",
          "items": [
            {
              "en": "dynamic bilingual professional with engaging storytelling",
              "vi": "chuyên gia song ngữ năng động với khả năng kể chuyện cuốn hút",
              "example": "Second, the guest speaker should be a dynamic bilingual professional."
            },
            {
              "en": "inspire confidence and authentic personal anecdotes",
              "vi": "truyền cảm hứng tự tin và chia sẻ câu chuyện người thật việc thật",
              "example": "Relatable stories break down language barriers."
            }
          ]
        },
        {
          "name": "3. Đề xuất 3: Tương tác & Khuyến khích (Interactive Engagement)",
          "icon": "BookOpen",
          "items": [
            {
              "en": "incorporate interactive pronunciation games and prizes",
              "vi": "kết hợp trò chơi phát âm tương tác và trao quà",
              "example": "Finally, we could feature pronunciation mini-games with free club passes."
            },
            {
              "en": "convert casual attendees into committed members",
              "vi": "chuyển đổi người tham dự vãng lai thành hội viên gắn bó",
              "example": "Engaging activities convert casual listeners into regular members."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 142,
          "en": "Dear Club Manager,\n\nMy name is Alex, and I have been an enthusiastic member of our English Club for the past two years. I am writing to share my suggestions regarding the lecture theme and guest speaker profile for our upcoming sponsored talk show.\n\nTo maximize member engagement and attract prospective learners, I propose focusing the seminar on \"Unlocking Global Career Opportunities Through English Fluency.\" This practical topic resonates strongly with university students and working professionals. Regarding the guest speaker, we should prioritize an inspiring bilingual executive or diplomat who can articulate how language competence accelerated their international achievements. Furthermore, organizing an interactive speed-networking activity following the keynote address would allow attendees to practice conversational skills in a supportive setting.\n\nI trust these ideas will assist in organizing an impactful seminar, and I look forward to your feedback.\n\nYours sincerely,\nAlex Nguyen",
          "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Alex, và tôi đã là một hội viên nhiệt huyết của Câu lạc bộ Tiếng Anh suốt hai năm qua. Tôi viết thư này để đóng góp ý kiến về chủ đề bài nói chuyện cũng như tiêu chí lựa chọn diễn giả khách mời cho buổi tọa đàm sắp tới.\n\nĐể tối đa hóa sự quan tâm của hội viên và thu hút thêm những người học tiềm năng, tôi đề xuất chủ đề tọa đàm nên là \"Mở lối Cơ hội Nghề nghiệp Toàn cầu nhờ Thông thạo Tiếng Anh\". Chủ đề mang tính ứng dụng cao này sẽ tạo được tiếng vang lớn đối với cả sinh viên lẫn người đi làm. Về diễn giả khách mời, chúng ta nên ưu tiên một nhà quản lý song ngữ hoặc một nhà ngoại giao tài năng, người có thể chia sẻ chân thực về việc năng lực ngoại ngữ đã thúc đẩy những thành tựu quốc tế của họ ra sao. Thêm vào đó, việc tổ chức hoạt động giao lưu kết nối nhanh sau bài phát biểu chính sẽ giúp người tham gia thực hành phản xạ trong môi trường cởi mở.\n\nTôi tin rằng những ý tưởng này sẽ hỗ trợ tạo nên một buổi hội thảo giàu giá trị, và rất mong nhận được phản hồi từ ban quản lý.\n\nTrân trọng,\nAlex Nguyen",
          "analysis": [
            {
              "label": "Giới thiệu & Mục đích",
              "text": "Dear Club Manager, My name is Alex, and I have been an enthusiastic member of our English Club for the past two years. I am writing to share my suggestions regarding the lecture theme and guest speaker profile for our upcoming sponsored talk show."
            },
            {
              "label": "Chủ đề đề xuất hấp dẫn",
              "text": "To maximize member engagement and attract prospective learners, I propose focusing the seminar on 'Unlocking Global Career Opportunities Through English Fluency.' This practical topic resonates strongly with university students and working professionals."
            },
            {
              "label": "Tiêu chí diễn giả & Hoạt động tương tác (B2+)",
              "text": "Regarding the guest speaker, we should prioritize an inspiring bilingual executive or diplomat who can articulate how language competence accelerated their international achievements. Furthermore, organizing an interactive speed-networking activity following the keynote address would allow attendees to practice conversational skills in a supportive setting."
            },
            {
              "label": "Lời kết trang trọng",
              "text": "I trust these ideas will assist in organizing an impactful seminar, and I look forward to your feedback. Yours sincerely, Alex Nguyen"
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
          "name": "1. Sách & Gắn kết thế hệ",
          "icon": "Sparkles",
          "items": [
            {
              "en": "heartwarming books touching all generations",
              "vi": "những cuốn sách ấm áp chạm đến trái tim của mọi thế hệ",
              "example": "His heartwarming stories touch readers of all ages."
            },
            {
              "en": "childhood memories and family nostalgia",
              "vi": "ký ức tuổi thơ và tình cảm gia đình hoài niệm",
              "example": "Childhood memories resonate strongly across generations."
            },
            {
              "en": "get our favorite copies personally signed",
              "vi": "được tác giả ký tặng trực tiếp vào cuốn sách yêu thích",
              "example": "We can bring our books to get them personally signed."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 48,
          "en": "Hi Jessica,\nDid you hear that our Book Club is inviting a famous novelist for a special event? I am thrilled about this opportunity! Discussing character development across generations will surely captivate students and elderly readers alike.\nWe should prepare some thoughtful questions together beforehand!\nBest wishes,\nAlex",
          "vi": "Chào Jessica,\nCậu đã nghe tin Câu lạc bộ Sách của mình sắp mời một tiểu thuyết gia nổi tiếng cho sự kiện đặc biệt chưa? Tớ cực kỳ hào hứng trước cơ hội này! Việc thảo luận về nghệ thuật xây dựng nhân vật qua các thế hệ chắc chắn sẽ cuốn hút cả các bạn trẻ lẫn độc giả lớn tuổi.\nChúng mình cùng chuẩn bị vài câu hỏi hay trước nhé!\nThân mến,\nAlex",
          "analysis": [
            {
              "label": "Nhắc sự kiện",
              "text": "Hi Jessica, Did you hear that our Book Club is inviting a famous novelist for a special event? I am thrilled about this opportunity!"
            },
            {
              "label": "Gợi ý chủ đề bao quát lứa tuổi (B2+)",
              "text": "Discussing character development across generations will surely captivate students and elderly readers alike."
            },
            {
              "label": "Chuẩn bị câu hỏi & Ký tên",
              "text": "We should prepare some thoughtful questions together beforehand! Best wishes, Alex"
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
          "name": "1. Đề xuất 1: Đề cử tác giả (Beloved Author)",
          "icon": "Sparkles",
          "items": [
            {
              "en": "invite an acclaimed author of life memoirs",
              "vi": "mời một nhà văn danh tiếng chuyên viết hồi ký cuộc đời",
              "example": "First, we should invite an author celebrated for touching life memoirs."
            },
            {
              "en": "appeal to adolescents and grandparents alike",
              "vi": "thu hút từ thanh thiếu niên đến ông bà lớn tuổi",
              "example": "Memoir literature effortlessly connects diverse age demographics."
            }
          ]
        },
        {
          "name": "2. Đề xuất 2: Chủ đề kết nối (Intergenerational Topic)",
          "icon": "CheckCircle2",
          "items": [
            {
              "en": "The Timeless Joy of Reading across Generations",
              "vi": "Niềm vui bất tận của việc đọc sách qua các thế hệ",
              "example": "Second, the topic should explore reading as a bridge across generations."
            },
            {
              "en": "bridge generational divides through storytelling",
              "vi": "xóa nhòa khoảng cách thế hệ thông qua nghệ thuật kể chuyện",
              "example": "Storytelling fosters empathy between parents and teenagers."
            }
          ]
        },
        {
          "name": "3. Đề xuất 3: Ký tặng & Trà đàm (Book-signing & Tea)",
          "icon": "BookOpen",
          "items": [
            {
              "en": "organize a book-signing session and tea circle",
              "vi": "tổ chức buổi ký tặng sách và vòng tròn trà đàm giao lưu",
              "example": "Finally, we could host an intimate book-signing and tea circle."
            },
            {
              "en": "share memorable excerpts and personal life lessons",
              "vi": "chia sẻ những trích đoạn đáng nhớ và bài học cuộc sống",
              "example": "Sharing excerpts deepens reader connection with the author."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 132,
          "en": "Dear Club Manager,\n\nMy name is Alex, and I have been an active member of our Book Club for nearly two years. I am writing to provide my suggestions regarding the visiting author and theme for our upcoming public seminar.\n\nTo bridge generational interests between younger students and senior members, I recommend inviting Ms. Eleanor Vance, a celebrated author acclaimed for her poignant historical fiction. As for the discussion theme, exploring \"The Art of Storytelling Across Generations\" would allow attendees of all ages to reflect on shared human values. Furthermore, including an intimate book-signing session alongside a moderated panel where youth and seniors share perspectives on her novels would enrich the experience.\n\nI trust these recommendations will assist your event preparations, and I look forward to your response.\n\nYours sincerely,\nAlex Nguyen",
          "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Alex, và tôi đã là một hội viên tích cực của Câu lạc bộ Đọc sách gần hai năm qua. Tôi viết email này nhằm đóng góp ý kiến về việc mời tác giả và xây dựng chủ đề cho buổi hội thảo sắp tới.\n\nĐể kết nối sở thích giữa các độc giả trẻ tuổi và các hội viên cao niên, tôi xin đề cử tác giả Eleanor Vance, một nhà văn tên tuổi rất được yêu thích với những tác phẩm tiểu thuyết lịch sử đầy xúc cảm. Về chủ đề tọa đàm, việc lựa chọn \"Nghệ thuật Kể chuyện qua các Thế hệ\" sẽ giúp người tham gia ở mọi lứa tuổi cùng suy ngẫm về những giá trị nhân văn chung. Thêm vào đó, việc kết hợp một buổi ký tặng sách thân mật cùng tọa đàm mở nơi các thế hệ cùng chia sẻ cảm nhận về tác phẩm sẽ làm phong phú thêm trải nghiệm của mọi người.\n\nTôi tin rằng những khuyến nghị này sẽ hỗ trợ ban tổ chức, và rất mong nhận được hồi âm từ bạn.\n\nTrân trọng,\nAlex Nguyen",
          "analysis": [
            {
              "label": "Giới thiệu & Mục đích",
              "text": "Dear Club Manager, My name is Alex, and I have been an active member of our Book Club for nearly two years. I am writing to provide my suggestions regarding the visiting author and theme for our upcoming public seminar."
            },
            {
              "label": "Đề cử tác giả & Chủ đề kết nối thế hệ",
              "text": "To bridge generational interests between younger students and senior members, I recommend inviting Ms. Eleanor Vance, a celebrated author acclaimed for her poignant historical fiction. As for the discussion theme, exploring 'The Art of Storytelling Across Generations' would allow attendees of all ages to reflect on shared human values."
            },
            {
              "label": "Hoạt động bổ trợ tương tác (B2+)",
              "text": "Furthermore, including an intimate book-signing session alongside a moderated panel where youth and seniors share perspectives on her novels would enrich the experience."
            },
            {
              "label": "Lời kết trang trọng",
              "text": "I trust these recommendations will assist your event preparations, and I look forward to your response. Yours sincerely, Alex Nguyen"
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
          "name": "1. Cảm xúc & Giá trị thư viện truyền thống",
          "icon": "Sparkles",
          "items": [
            {
              "en": "quite shocked and upset",
              "vi": "khá sốc và buồn bã",
              "example": "I was quite shocked and upset by the closure news."
            },
            {
              "en": "an irreplaceable community sanctuary",
              "vi": "một chốn tĩnh lặng vô giá của cộng đồng",
              "example": "The library is an irreplaceable quiet sanctuary."
            },
            {
              "en": "screens cannot replace physical books",
              "vi": "màn hình điện tử không thể thay thế sách in truyền thống",
              "example": "Screens cannot replace the authentic tactile joy of physical books."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 51,
          "en": "Hi Peter,\nDid you read the devastating news about the local authorities planning to close our public library? Although digital reading is prevalent, losing a physical community space would be tragic. We must rally our members to submit a collective petition against the closure!\nWill you join the campaign?\nBest,\nAlex",
          "vi": "Chào Peter,\nCậu đã đọc tin chấn động về việc chính quyền địa phương dự định đóng cửa thư viện công cộng chưa? Dù việc đọc sách điện tử đang phổ biến, việc đánh mất một không gian cộng đồng truyền thống sẽ là tổn thất khôn cùng. Chúng mình phải kêu gọi mọi người cùng ký đơn phản đối việc đóng cửa này!\nCậu sẽ tham gia chiến dịch cùng tớ chứ?\nThân,\nAlex",
          "analysis": [
            {
              "label": "Nhắc thông tin & Cảm xúc",
              "text": "Hi Peter, Did you read the devastating news about the local authorities planning to close our public library? Although digital reading is prevalent, losing a physical community space would be tragic."
            },
            {
              "label": "Kêu gọi hành động (B2+)",
              "text": "We must rally our members to submit a collective petition against the closure!"
            },
            {
              "label": "Lời mời & Ký tên",
              "text": "Will you join the campaign? Best, Alex"
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
      "template": "Dear Club Manager,\nMy name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.\nI am writing in response to your email regarding the municipal authority's plan to close down our public library. I firmly believe that this decision is short-sighted and deeply regrettable.\nTo preserve and modernize this vital cultural institution, I would like to make a few suggestions. First, our club should advocate for transforming the library into a modern hybrid learning hub equipped with free Wi-Fi, computer workstations, and digital archives alongside traditional book stacks. Second, it would be better to integrate a community coffee lounge and silent study pods to attract freelance workers and students. Finally, we could organize weekly literary storytelling sessions and coding clubs for children to demonstrate high community utility. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.\nThank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.\nBest regards,\n[Tên của bạn]",
      "vocabCategories": [
        {
          "name": "1. Đề xuất 1: Mô hình thư viện lai (Hybrid Learning Hub)",
          "icon": "Sparkles",
          "items": [
            {
              "en": "transform into a modern hybrid learning hub",
              "vi": "chuyển đổi thành không gian học tập tích hợp hiện đại",
              "example": "First, we should transform the building into a modern hybrid learning hub."
            },
            {
              "en": "integrate digital e-book databases with physical stacks",
              "vi": "kết hợp cơ sở dữ liệu sách số với kệ sách giấy truyền thống",
              "example": "Digital databases complement traditional book reading."
            }
          ]
        },
        {
          "name": "2. Đề xuất 2: Không gian cà phê & Tự học (Café & Co-working)",
          "icon": "CheckCircle2",
          "items": [
            {
              "en": "introduce a community cafe and quiet study pods",
              "vi": "bổ sung quán cà phê cộng đồng và góc tự học yên tĩnh",
              "example": "Second, it would be better to introduce a cafe and co-working study pods."
            },
            {
              "en": "attract students, remote workers, and researchers",
              "vi": "thu hút sinh viên, người làm việc từ xa và nhà nghiên cứu",
              "example": "Modern amenities rejuvenate community foot traffic."
            }
          ]
        },
        {
          "name": "3. Đề xuất 3: Sự kiện văn hóa thường kỳ (Cultural Events)",
          "icon": "BookOpen",
          "items": [
            {
              "en": "host weekly author talks and children's story hours",
              "vi": "tổ chức các buổi tác giả giao lưu và giờ đọc truyện thiếu nhi",
              "example": "Finally, we could host weekly literary workshops and story hours."
            },
            {
              "en": "prove high social utility to municipal authorities",
              "vi": "chứng minh giá trị sử dụng cộng đồng cao cho chính quyền",
              "example": "Active community engagement prevents unjustified municipal closures."
            }
          ]
        }
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn Band B2+",
          "wordCount": 144,
          "en": "Dear Club Manager,\n\nMy name is Alex, and I have been a loyal member of our Book Club for over two years. I am writing to express my grave concern regarding the local council's proposal to close the community library due to shifting digital reading habits.\n\nWhile online resources are unquestionably convenient, physical libraries remain indispensable community sanctuaries for quiet study, cultural events, and social inclusion. Instead of closure, I propose three constructive counter-measures. First, our club should petition the municipality to modernize the facility into a dynamic digital-physical learning hub. Furthermore, hosting regular author workshops, children's storytelling hours, and student book clubs would revitalize foot traffic. Finally, introducing a local digital lending platform alongside the physical archive would effectively satisfy modern reading preferences.\n\nI trust our club will champion this vital cause, and I look forward to your response.\n\nYours sincerely,\nAlex Nguyen",
          "vi": "Kính gửi Quản lý Câu lạc bộ,\n\nTên tôi là Alex, và tôi đã là hội viên trung thành của Câu lạc bộ Sách hơn hai năm qua. Tôi viết email này nhằm bày tỏ sự quan ngại sâu sắc đối với kế hoạch của hội đồng địa phương về việc đóng cửa thư viện công cộng do thói quen đọc sách trực tuyến ngày càng phổ biến.\n\nMặc dù các tài nguyên trực tuyến không thể phủ nhận là vô cùng tiện lợi, thư viện truyền thống vẫn là những không gian cộng đồng không thể thay thế cho việc học tập yên tĩnh, sinh hoạt văn hóa và kết nối xã hội. Thay vì đóng cửa, tôi xin đề xuất ba giải pháp phản hồi mang tính xây dựng. Thứ nhất, câu lạc bộ chúng ta nên kiến nghị chính quyền chuyển đổi thư viện thành một không gian học tập tích hợp giữa kỹ thuật số và thực tế. Hơn nữa, việc tổ chức định kỳ các buổi tọa đàm tác giả, giờ kể chuyện cho trẻ em và các nhóm đọc sách học đường sẽ thu hút đông đảo người dân ghé thăm trở lại. Cuối cùng, việc tích hợp nền tảng mượn sách điện tử song song với kho sách giấy hiện có sẽ đáp ứng hoàn hảo thị hiếu đọc sách hiện đại.\n\nTôi tin rằng câu lạc bộ chúng ta sẽ đi đầu trong việc bảo vệ thư viện, và rất mong nhận được hồi âm từ ban quản lý.\n\nTrân trọng,\nAlex Nguyen",
          "analysis": [
            {
              "label": "Giới thiệu & Thể hiện quan ngại",
              "text": "Dear Club Manager, My name is Alex, and I have been a loyal member of our Book Club for over two years. I am writing to express my grave concern regarding the local council's proposal to close the community library due to shifting digital reading habits."
            },
            {
              "label": "Khẳng định giá trị thư viện (B2+)",
              "text": "While online resources are unquestionably convenient, physical libraries remain indispensable community sanctuaries for quiet study, cultural events, and social inclusion."
            },
            {
              "label": "3 Giải pháp nâng cấp thay vì đóng cửa",
              "text": "First, our club should petition the municipality to modernize the facility into a dynamic digital-physical learning hub. Furthermore, hosting regular author workshops, children's storytelling hours, and student book clubs would revitalize foot traffic. Finally, introducing a local digital lending platform alongside the physical archive would effectively satisfy modern reading preferences."
            },
            {
              "label": "Lời kết trang trọng",
              "text": "I trust our club will champion this vital cause, and I look forward to your response. Yours sincerely, Alex Nguyen"
            }
          ]
        }
      ]
    }
  }
};
