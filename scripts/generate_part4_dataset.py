import json

# Common Templates
common_templates_code = '''// APTIS WRITING PART 04 - COMPREHENSIVE DATA & TEMPLATES

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
      { label: "7. Ký tên", fixedPrefix: "Take care,\\n", slot: "[Tên của bạn]" }
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
      { label: "8. Ký tên trang trọng", fixedPrefix: "Best regards,\\n", slot: "[Họ và tên của bạn]" }
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
'''

print("Base header ready")
