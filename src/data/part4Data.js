// APTIS WRITING PART 04 DATA

export const part4CommonTemplates = {
  informal: {
    title: "EMAIL GỬI BẠN (Informal Email)",
    target: "Khoảng 50 từ (45 - 55 từ)",
    structure: [
      "1. Lời chào thân mật: Dear [tên bạn],",
      "2. Hỏi thăm: How’s it going? I hope you're doing well.",
      "3. Nhắc đến tin tức & Bày tỏ cảm xúc: I thought you'd be interested to hear that [thông tin trong đề bài]. I was quite surprised/ excited/ disappointed when I found out about it.",
      "4. Nêu ý kiến & Đề xuất: Personally, I think [ý kiến/câu trả lời cho yêu cầu 1] because [lý do]. Moreover, [phát triển thêm ý/trả lời yêu cầu 2].",
      "5. Kết thư: I would love to know what you think about this. Hope to hear from you soon.",
      "6. Ký tên: Take care, / [tên người gửi]"
    ],
    templateText: `Dear [tên người nhận],
How’s it going? I hope you're doing well.
I thought you'd be interested to hear that [thông tin trong đề bài]. I was quite surprised/ excited/ disappointed when I found out about it.
Personally, I think [ý kiến hoặc câu trả lời cho yêu cầu đầu tiên của đề] because [lý do]. Moreover, [phát triển thêm ý hoặc trả lời yêu cầu thứ hai của đề].
I would love to know what you think about this. Hope to hear from you soon.
Take care,
[tên người gửi]`
  },
  formal: {
    title: "EMAIL GỬI QUẢN LÝ CÂU LẠC BỘ (Formal Email)",
    target: "120 - 150 từ",
    structure: [
      "1. Lời chào trang trọng: Dear Club Manager,",
      "2. Giới thiệu bản thân & Thời gian tham gia: My name is [tên người gửi], and I have been a member of the club for [thời gian tham gia]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.",
      "3. Mục đích viết thư & Quan điểm tổng quan: I am writing in response to your email to share my thoughts and offer several practical suggestions regarding [vấn đề / sự kiện / hoạt động]. I think this is a great idea / an important issue / an interesting topic / (nếu có lựa chọn: [lựa chọn] would be a better choice).",
      "4. Các đề xuất cụ thể (3 đề xuất): To help [mục tiêu], I would like to make a few suggestions. First, we should [đề xuất 1]. Second, it would be better to [đề xuất 2]. Finally, we could [đề xuất 3]. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.",
      "5. Lời cảm ơn & Kết thư trang trọng: Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.",
      "6. Ký tên: Best regards, / [tên người gửi]"
    ],
    templateText: `Dear Club Manager,
My name is [tên người gửi], and I have been a member of the club for [thời gian tham gia câu lạc bộ]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding [vấn đề / sự kiện / hoạt động được đề cập trong email]. I think this is a great idea / an important issue / an interesting topic / (nếu đề đưa ra lựa chọn thì trả lời [lựa chọn] would be a better choice]).
To help [mục tiêu], I would like to make a few suggestions. First, we should [đề xuất 1]. Second, it would be better to [đề xuất 2]. Finally, we could [đề xuất 3]. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
[tên người gửi]`
  }
};

export const part4Data = {
  "Walking club": {
    "title": "Walking Club",
    "notice": "Dear members,\nOur Walking Club is planning to organize a monthly walking event to attract more members. We would like to know what you think about this idea and what activities we should include to make the event more enjoyable.",
    "noticeVi": "Kính gửi các thành viên,\nCâu lạc bộ Đi bộ của chúng ta đang lên kế hoạch tổ chức một sự kiện đi bộ hàng tháng để thu hút thêm thành viên. Chúng tôi muốn biết bạn nghĩ gì về ý tưởng này và chúng ta nên đưa vào những hoạt động nào để sự kiện thêm phần thú vị.",
    "email1": {
      "title": "Email 1: Gửi một người bạn",
      "instruction": "Viết một email cho bạn của bạn (Kim). Cho bạn ấy biết cảm nghĩ của bạn về thông báo này và đề xuất một số hoạt động thú vị.",
      "wordTarget": "Khoảng 50 từ (khuyên dùng 45 - 60 từ)",
      "minWords": 45,
      "maxWords": 65,
      "template": `Dear Kim,
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Walking Club is planning [thông tin sự kiện]. I was quite [cảm xúc: excited / surprised] when I found out about it.
Personally, I think it's a great idea because [lý do ủng hộ]. Moreover, we could [đề xuất hoạt động vui nhộn].
I would love to know what you think about this. Hope to hear from you soon.
Take care,
[Tên của bạn]`,
      "vocab": [
        "✨ [thông tin sự kiện]: <strong>a monthly walking event</strong> (một sự kiện đi bộ hàng tháng), <strong>regular weekend walking trips</strong> (các chuyến đi bộ cuối tuần định kỳ), <strong>an outdoor walking challenge</strong> (thử thách đi bộ ngoài trời)",
        "✨ [cảm xúc]: <strong>quite excited</strong> (khá hào hứng), <strong>thrilled</strong> (rất phấn khích), <strong>very delighted</strong> (rất vui mừng), <strong>pleasantly surprised</strong> (ngạc nhiên một cách thích thú)",
        "✨ [lý do ủng hộ]: <strong>it encourages people to exercise together</strong> (nó khuyến khích mọi người cùng nhau tập thể dục), <strong>it promotes a healthy lifestyle</strong> (nó thúc đẩy lối sống lành mạnh), <strong>it helps members bond with each other</strong> (nó giúp các thành viên gắn kết với nhau)",
        "✨ [hoạt động đề xuất]: <strong>organize some fun games after the walk</strong> (tổ chức một số trò chơi vui nhộn sau buổi đi bộ), <strong>have a small picnic together</strong> (cùng nhau ăn dã ngoại nhẹ), <strong>take group photos at scenic viewpoints</strong> (chụp ảnh tập thể tại các điểm ngắm cảnh đẹp)"
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn (Giáo trình)",
          "en": `Dear Kim,
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Walking Club is planning a monthly walking event. I was quite excited when I found out about it. Personally, I think it's a great idea because it encourages people to exercise together. Moreover, we could organize some fun games after the walk.
I would love to know what you think about this. Hope to hear from you soon.
Take care,
Kato`,
          "vi": `Chào Kim,
Dạo này bạn thế nào? Mình hy vọng bạn vẫn khỏe.
Mình nghĩ bạn sẽ thích nghe rằng Câu lạc bộ Đi bộ của chúng ta đang lên kế hoạch tổ chức một sự kiện đi bộ hàng tháng. Mình khá hào hứng khi biết tin này. Cá nhân mình thấy đây là một ý tưởng tuyệt vời vì nó khuyến khích mọi người cùng nhau tập thể dục. Hơn nữa, chúng ta có thể tổ chức một số trò chơi vui nhộn sau khi đi bộ.
Mình rất muốn biết bạn nghĩ gì về điều này. Hy vọng sớm nhận được tin từ bạn.
Bảo trọng nhé,
Kato`
        }
      ]
    },
    "email2": {
      "title": "Email 2: Gửi Quản lý Câu lạc bộ",
      "instruction": "Viết một email cho Quản lý CLB để chia sẻ suy nghĩ và đề xuất các giải pháp cụ thể giúp sự kiện thành công và thu hút nhiều thành viên.",
      "wordTarget": "120 - 150 từ",
      "minWords": 120,
      "maxWords": 165,
      "template": `Dear Club Manager,
My name is [tên người gửi], and I have been a member of the club for [thời gian tham gia]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding [vấn đề / sự kiện]. I think this is a great idea.
To help [mục tiêu], I would like to make a few suggestions. First, we should [đề xuất 1]. Second, it would be better to [đề xuất 2]. Finally, we could [đề xuất 3]. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
[tên người gửi]`,
      "vocab": [
        "✨ [thời gian tham gia]: <strong>two years</strong> (hai năm), <strong>over six months</strong> (hơn sáu tháng), <strong>nearly a year</strong> (gần một năm), <strong>three years</strong> (ba năm)",
        "✨ [vấn đề / sự kiện]: <strong>the monthly walking event</strong> (sự kiện đi bộ hàng tháng), <strong>the proposal for regular walking activities</strong> (đề xuất cho các hoạt động đi bộ định kỳ)",
        "✨ [mục tiêu]: <strong>attract more members and make the event more enjoyable</strong> (thu hút thêm thành viên và làm cho sự kiện thú vị hơn), <strong>ensure maximum participation and enjoyment</strong> (đảm bảo sự tham gia và trải nghiệm tối đa)",
        "✨ [đề xuất 1]: <strong>choose safe and scenic walking routes so participants can enjoy the natural surroundings</strong> (chọn các tuyến đường đi bộ an toàn và có cảnh quan đẹp để người tham gia tận hưởng khung cảnh thiên nhiên xung quanh)",
        "✨ [đề xuất 2]: <strong>organize some simple team games or fitness challenges after the walk to encourage interaction among members</strong> (tổ chức các trò chơi đồng đội đơn giản hoặc thử thách thể lực sau buổi đi bộ để khuyến khích tương tác giữa các thành viên)",
        "✨ [đề xuất 3]: <strong>prepare healthy drinks and snacks for everyone</strong> (chuẩn bị đồ uống lành mạnh và đồ ăn nhẹ cho mọi người), <strong>create a small award or certificate for regular attendees</strong> (trao phần thưởng nhỏ hoặc giấy chứng nhận cho người tham gia tích cực)"
      ],
      "samples": [
        {
          "title": "Bài mẫu chuẩn (Giáo trình)",
          "en": `Dear Club Manager,
My name is Nam, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding the monthly walking event. I think this is a great idea.
To help attract more members and make the event more enjoyable, I would like to make a few suggestions. First, we should choose safe and scenic walking routes so participants can enjoy the natural surroundings. Second, it would be better to organize some simple team games or fitness challenges after the walk to encourage interaction among members. Finally, we could prepare healthy drinks and snacks for everyone. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
Kato`,
          "vi": `Kính gửi Quản lý Câu lạc bộ,
Tên tôi là Nam, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.
Tôi viết email này để hồi đáp email của bạn nhằm chia sẻ suy nghĩ và đưa ra một vài đề xuất thực tế liên quan đến sự kiện đi bộ hàng tháng. Tôi nghĩ đây là một ý tưởng tuyệt vời.
Để giúp thu hút thêm thành viên và làm cho sự kiện thú vị hơn, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, chúng ta nên chọn các tuyến đường đi bộ an toàn và có cảnh quan đẹp để người tham gia có thể tận hưởng khung cảnh thiên nhiên xung quanh. Thứ hai, sẽ tốt hơn nếu tổ chức một số trò chơi đồng đội đơn giản hoặc thử thách rèn luyện thể lực sau buổi đi bộ để khuyến khích sự tương tác giữa các thành viên. Cuối cùng, chúng ta có thể chuẩn bị đồ uống lành mạnh và đồ ăn nhẹ cho mọi người. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo ra sự khác biệt tích cực và giúp câu lạc bộ đạt được các mục tiêu của mình.
Cảm ơn bạn đã dành thời gian xem xét các đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.
Trân trọng,
Kato`
        }
      ]
    }
  }
};
