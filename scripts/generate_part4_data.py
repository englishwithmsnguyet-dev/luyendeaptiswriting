import json

clubs = {}

# 1. Walking club
clubs["Walking club"] = {
    "title": "Walking club (Monthly walking event)",
    "badge": "Đề thi mẫu chuẩn Cô Nguyệt",
    "notice": "Dear members,\nOur Walking Club is planning to organize a monthly walking event to attract more members. We would like to know what you think about this idea and what activities we should include to make the event more enjoyable.",
    "noticeVi": "Kính gửi các thành viên,\nCâu lạc bộ Đi bộ của chúng ta đang lên kế hoạch tổ chức một sự kiện đi bộ hàng tháng để thu hút thêm thành viên mới. Chúng tôi muốn biết bạn nghĩ gì về ý tưởng này và chúng ta nên đưa vào những hoạt động nào để sự kiện thêm phần thú vị.",
    "promptAnalysis": {
        "topic": "Tổ chức sự kiện đi bộ định kỳ hàng tháng nhằm thu hút hội viên mới và tăng tính gắn kết",
        "task1": "Viết email thân mật cho bạn (Kim): Bày tỏ sự hào hứng, nêu quan điểm tích cực và rủ bạn cùng tham gia / gợi ý trò chơi sau buổi đi bộ (~50 từ)",
        "task2": "Viết email trang trọng cho Quản lý CLB: Bày tỏ sự ủng hộ và đề xuất 3 giải pháp thực tế (chọn cung đường an toàn, tổ chức hoạt động đồng đội, chuẩn bị nước uống & quà lưu niệm) (120 - 150 từ)"
    },
    "email1": {
        "title": "Email 1: Gửi bạn bè (Kim)",
        "instruction": "Write a short email to your friend (about 50 words). Tell your friend your feelings about this and what you plan to do.",
        "instructionVi": "Viết một email ngắn cho bạn của bạn (khoảng 50 từ). Cho bạn ấy biết cảm xúc của bạn về việc này và bạn dự định sẽ làm gì.",
        "wordTarget": "Khoảng 50 từ (45 - 60 từ)",
        "minWords": 45,
        "maxWords": 65,
        "template": """Dear Kim,
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Walking Club is planning a monthly walking event. I was quite excited when I found out about it. Personally, I think it's a great idea because it encourages people to exercise together. Moreover, we could organize some fun games after the walk.
I would love to know what you think about this. Hope to hear from you soon.
Take care,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Bày tỏ Cảm xúc (Emotions)",
                "icon": "Sparkles",
                "items": [
                    {"en": "quite excited", "vi": "khá hào hứng", "example": "I was quite excited when I heard about the monthly walking event."},
                    {"en": "absolutely thrilled", "vi": "cực kỳ phấn khích", "example": "I was absolutely thrilled to find out about this new plan."},
                    {"en": "pleasantly surprised", "vi": "ngạc nhiên một cách thích thú", "example": "I was pleasantly surprised by the wonderful news."},
                    {"en": "delighted", "vi": "rất vui mừng", "example": "I am delighted that our club is expanding its outdoor activities."}
                ]
            },
            {
                "name": "2. Nêu Quan điểm & Lý do (Opinion & Reasons)",
                "icon": "CheckCircle2",
                "items": [
                    {"en": "it encourages people to exercise together", "vi": "khuyến khích mọi người cùng nhau vận động thể chất", "example": "Personally, I think it is great because it encourages people to exercise together."},
                    {"en": "it helps members stay active and healthy", "vi": "giúp hội viên duy trì lối sống năng động và khỏe mạnh", "example": "Regular walking helps members stay active and maintain good health."},
                    {"en": "it creates a great opportunity to make new friends", "vi": "tạo cơ hội tuyệt vời để kết thêm bạn bè mới", "example": "It creates a great opportunity to socialize and make new friends."}
                ]
            },
            {
                "name": "3. Hoạt động đề xuất vui nhộn (Fun Activities)",
                "icon": "BookOpen",
                "items": [
                    {"en": "organize some fun games after the walk", "vi": "tổ chức một số trò chơi vui nhộn sau khi đi bộ", "example": "Moreover, we could organize some fun games after the walk."},
                    {"en": "have a small picnic in the park", "vi": "cùng dã ngoại nhẹ trong công viên", "example": "We could bring some light snacks and have a picnic together."},
                    {"en": "take group photos at scenic viewpoints", "vi": "chụp ảnh lưu niệm tại những điểm ngắm cảnh đẹp", "example": "We could take lots of beautiful photos along the route."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn (Giáo trình Cô Nguyệt)",
                "wordCount": 78,
                "en": """Dear Kim,
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Walking Club is planning a monthly walking event. I was quite excited when I found out about it. Personally, I think it's a great idea because it encourages people to exercise together. Moreover, we could organize some fun games after the walk.
I would love to know what you think about this. Hope to hear from you soon.
Take care,
Kato""",
                "vi": """Chào Kim,
Dạo này bạn thế nào? Mình hy vọng bạn vẫn khỏe.
Mình nghĩ bạn sẽ thích nghe rằng Câu lạc bộ Đi bộ của chúng ta đang lên kế hoạch tổ chức sự kiện đi bộ hàng tháng. Mình khá hào hứng khi biết tin này. Cá nhân mình thấy đây là ý tưởng tuyệt vời vì nó khuyến khích mọi người cùng nhau tập thể dục. Hơn nữa, chúng ta có thể tổ chức một số trò chơi vui nhộn sau khi đi bộ.
Mình rất muốn biết bạn nghĩ gì về điều này. Hy vọng sớm nhận được tin từ bạn.
Bảo trọng nhé,
Kato""",
                "analysis": [
                    {"label": "Lời chào & Thăm hỏi", "text": "Dear Kim, How's it going? I hope you're doing well."},
                    {"label": "Nhắc tin tức & Cảm xúc", "text": "I thought you'd be interested to hear that our Walking Club is planning a monthly walking event. I was quite excited when I found out about it."},
                    {"label": "Nêu quan điểm & Lý do", "text": "Personally, I think it's a great idea because it encourages people to exercise together."},
                    {"label": "Đề xuất hoạt động", "text": "Moreover, we could organize some fun games after the walk."},
                    {"label": "Kết thư & Ký tên", "text": "I would love to know what you think about this. Hope to hear from you soon. Take care, Kato"}
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
        "template": """Dear Club Manager,
My name is [tên người gửi], and I have been a member of the club for [thời gian tham gia]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding the monthly walking event. I think this is a great idea.
To help attract more members and make the event more enjoyable, I would like to make a few suggestions. First, we should [đề xuất 1: chọn tuyến đường an toàn, cảnh đẹp]. Second, it would be better to [đề xuất 2: tổ chức trò chơi đồng đội/thử thách]. Finally, we could [đề xuất 3: đồ uống lành mạnh/quà tặng động viên]. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Giới thiệu bản thân & Gắn bó",
                "icon": "ShieldCheck",
                "items": [
                    {"en": "I have been a member of the club for two years", "vi": "tôi đã là thành viên CLB được hai năm", "example": "My name is Nam, and I have been a member of the club for two years."},
                    {"en": "a wide range of meaningful activities", "vi": "nhiều hoạt động ý nghĩa phong phú", "example": "I have had the opportunity to participate in a wide range of meaningful activities."},
                    {"en": "greatly enriched my experience and personal development", "vi": "làm phong phú rất nhiều trải nghiệm và sự phát triển bản thân", "example": "These events have greatly enriched my experience and personal development."}
                ]
            },
            {
                "name": "2. Đề xuất 1: Tuyến đường an toàn (Route Selection)",
                "icon": "Sparkles",
                "items": [
                    {"en": "choose safe and scenic walking routes", "vi": "chọn các cung đường đi bộ an toàn và nhiều cây xanh, cảnh đẹp", "example": "First, we should choose safe and scenic walking routes around the city lake."},
                    {"en": "enjoy the natural surroundings", "vi": "tận hưởng khung cảnh thiên nhiên trong lành", "example": "This allows participants to enjoy the natural surroundings and breathe fresh air."},
                    {"en": "suitable for participants of all fitness levels", "vi": "phù hợp cho mọi người ở các cấp độ thể lực", "example": "The route should be gentle and suitable for participants of all fitness levels."}
                ]
            },
            {
                "name": "3. Đề xuất 2: Hoạt động gắn kết (Interactive Activities)",
                "icon": "CheckCircle2",
                "items": [
                    {"en": "organize some simple team games or fitness challenges", "vi": "tổ chức các trò chơi đồng đội đơn giản hoặc thử thách thể lực", "example": "Second, it would be better to organize some simple team games after the walk."},
                    {"en": "encourage interaction among members", "vi": "khuyến khích tương tác giao lưu giữa các hội viên", "example": "Team challenges encourage interaction and friendly conversation."},
                    {"en": "pair newcomers with experienced members", "vi": "ghép cặp người mới với các thành viên kỳ cựu", "example": "We could pair newcomers with experienced members to create a welcoming vibe."}
                ]
            },
            {
                "name": "4. Đề xuất 3: Hậu cần & Khích lệ (Logistics & Incentives)",
                "icon": "BookOpen",
                "items": [
                    {"en": "prepare healthy drinks and snacks for everyone", "vi": "chuẩn bị đồ uống tốt cho sức khỏe và đồ ăn nhẹ bồi dưỡng", "example": "Finally, we could prepare healthy drinks and fresh fruit for everyone."},
                    {"en": "award certificates or small souvenir badges", "vi": "trao chứng nhận hoặc huy hiệu kỷ niệm lưu niệm", "example": "We could award completion badges to members who join consistently."},
                    {"en": "make a positive difference and help the club achieve its objectives", "vi": "tạo nên sự khác biệt tích cực và giúp CLB đạt được mục tiêu", "example": "Overall, I am confident that these measures will make a positive difference."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn (Giáo trình Cô Nguyệt)",
                "wordCount": 189,
                "en": """Dear Club Manager,
My name is Nam, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding the monthly walking event. I think this is a great idea.
To help attract more members and make the event more enjoyable, I would like to make a few suggestions. First, we should choose safe and scenic walking routes so participants can enjoy the natural surroundings. Second, it would be better to organize some simple team games or fitness challenges after the walk to encourage interaction among members. Finally, we could prepare healthy drinks and snacks for everyone. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
Kato""",
                "vi": """Kính gửi Quản lý Câu lạc bộ,
Tên tôi là Nam, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.
Tôi viết email này để hồi đáp email của bạn nhằm chia sẻ suy nghĩ và đưa ra một vài đề xuất thực tế liên quan đến sự kiện đi bộ hàng tháng. Tôi nghĩ đây là một ý tưởng tuyệt vời.
Để giúp thu hút thêm thành viên và làm cho sự kiện thú vị hơn, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, chúng ta nên chọn các tuyến đường đi bộ an toàn và có cảnh quan đẹp để người tham gia có thể tận hưởng khung cảnh thiên nhiên xung quanh. Thứ hai, sẽ tốt hơn nếu tổ chức một số trò chơi đồng đội đơn giản hoặc thử thách rèn luyện thể lực sau buổi đi bộ để khuyến khích sự tương tác giữa các thành viên. Cuối cùng, chúng ta có thể chuẩn bị đồ uống lành mạnh và đồ ăn nhẹ cho mọi người. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo ra sự khác biệt tích cực và giúp câu lạc bộ đạt được các mục tiêu của mình.
Cảm ơn bạn đã dành thời gian xem xét các đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.
Trân trọng,
Kato""",
                "analysis": [
                    {"label": "Mở đầu & Giới thiệu bản thân", "text": "My name is Nam, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development."},
                    {"label": "Mục đích viết thư & Nêu quan điểm", "text": "I am writing in response to your email to share my thoughts and offer several practical suggestions regarding the monthly walking event. I think this is a great idea."},
                    {"label": "Đề xuất 1: Tuyến đường", "text": "First, we should choose safe and scenic walking routes so participants can enjoy the natural surroundings."},
                    {"label": "Đề xuất 2: Hoạt động gắn kết", "text": "Second, it would be better to organize some simple team games or fitness challenges after the walk to encourage interaction among members."},
                    {"label": "Đề xuất 3 & Đánh giá chung", "text": "Finally, we could prepare healthy drinks and snacks for everyone. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives."},
                    {"label": "Cảm ơn & Ký tên", "text": "Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response. Best regards, Kato"}
                ]
            }
        ]
    }
}

print("Walking club defined successfully")
