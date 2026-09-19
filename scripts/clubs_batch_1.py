# Batch 1: Walking club, Fitness club, Art club, Food club, Social club

batch_1 = {}

# 1. Walking club
batch_1["Walking club"] = {
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
        "template": """Dear Kim,
How's it going? I hope you're doing well.
I thought you'd be interested to hear that [thông tin trong đề bài: our Walking Club is planning a monthly walking event]. I was quite [cảm xúc: excited / surprised] when I found out about it.
Personally, I think [ý kiến: it is a great idea] because [lý do: it encourages people to exercise together]. Moreover, [phát triển ý: we could organize some fun games after the walk].
I would love to know what you think about this. Hope to hear from you soon.
Take care,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Bày tỏ Cảm xúc (Emotions)",
                "icon": "Sparkles",
                "items": [
                    {"en": "quite excited", "vi": "khá hào hứng", "example": "I was quite excited when I heard about the monthly walking event."},
                    {"en": "absolutely thrilled", "vi": "cực kỳ phấn khích", "example": "I was absolutely thrilled to find out about this initiative."},
                    {"en": "pleasantly surprised", "vi": "ngạc nhiên một cách thích thú", "example": "I was pleasantly surprised by the club's announcement."}
                ]
            },
            {
                "name": "2. Nêu Quan điểm & Lý do (Opinion & Reasons)",
                "icon": "CheckCircle2",
                "items": [
                    {"en": "it encourages people to exercise together", "vi": "khuyến khích mọi người cùng nhau vận động thể chất", "example": "Personally, I think it is great because it encourages people to exercise together."},
                    {"en": "it helps members stay active and healthy", "vi": "giúp hội viên duy trì lối sống năng động và khỏe mạnh", "example": "Regular walking helps members stay active and healthy."},
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
My name is [tên người gửi], and I have been a member of the club for [thời gian tham gia: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding [vấn đề: the monthly walking event]. I think [quan điểm: this is a great idea].
To help [mục tiêu: attract more members and make the event more enjoyable], I would like to make a few suggestions. First, we should [đề xuất 1: choose safe and scenic walking routes]. Second, it would be better to [đề xuất 2: organize some simple team games or fitness challenges]. Finally, we could [đề xuất 3: prepare healthy drinks and snacks for everyone]. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
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
                    {"en": "choose safe and scenic walking routes", "vi": "chọn các cung đường đi bộ an toàn và cảnh quan tươi đẹp", "example": "First, we should choose safe and scenic walking routes around local lakes."},
                    {"en": "enjoy the natural surroundings", "vi": "tận hưởng khung cảnh thiên nhiên trong lành", "example": "This allows participants to enjoy the natural surroundings and breathe fresh air."},
                    {"en": "suitable for participants of all fitness levels", "vi": "phù hợp cho mọi người ở các cấp độ thể lực khác nhau", "example": "The route should be gentle and suitable for participants of all fitness levels."}
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

# 2. Fitness club
batch_1["Fitness club"] = {
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
        "template": """Dear Alex,
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Fitness Club is planning to increase the membership fee by 15% to upgrade equipment. I was quite surprised when I found out about it. Personally, I think it is reasonable because our current machines are quite outdated. Moreover, we should renew our annual pass together to get a discount.
I would love to know what you think about this. Hope to hear from you soon.
Take care,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Bày tỏ Cảm xúc (Emotions)",
                "icon": "Sparkles",
                "items": [
                    {"en": "quite surprised", "vi": "khá bất ngờ", "example": "I was quite surprised by the 15% fee increase."},
                    {"en": "a bit concerned", "vi": "hơi băn khoăn một chút", "example": "I was a bit concerned about our monthly budget."},
                    {"en": "excited about new equipment", "vi": "hào hứng với các máy tập mới", "example": "However, I am excited about testing the new cardio machines."}
                ]
            },
            {
                "name": "2. Quan điểm & Lý do (Opinion & Reasons)",
                "icon": "CheckCircle2",
                "items": [
                    {"en": "it is totally reasonable", "vi": "điều đó hoàn toàn hợp lý", "example": "Personally, I think the fee rise is totally reasonable because the old machines break down often."},
                    {"en": "worth the extra money", "vi": "rất xứng đáng với số tiền bỏ thêm", "example": "Better facilities are definitely worth the extra money."},
                    {"en": "renew our membership early for discounts", "vi": "gia hạn thẻ tập sớm để nhận chiết khấu", "example": "Moreover, we should renew our package together for a discount."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn B2-C1",
                "wordCount": 78,
                "en": """Dear Alex,
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Fitness Club is planning to increase the membership fee by 15% to upgrade workout equipment. I was quite surprised when I found out about it. Personally, I think it is reasonable because our current machines are quite outdated. Moreover, we should renew our annual pass together to get a discount.
I would love to know what you think about this. Hope to hear from you soon.
Take care,
Nam""",
                "vi": """Chào Alex,
Dạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.
Mình nghĩ bạn sẽ quan tâm khi nghe tin CLB Thể hình của chúng ta đang dự định tăng phí 15% để nâng cấp thiết bị tập luyện. Mình khá bất ngờ khi biết tin này. Cá nhân mình nghĩ mức tăng này là hợp lý vì các máy móc hiện tại đã khá cũ kỹ. Hơn nữa, chúng mình nên cùng gia hạn vé năm sớm để nhận ưu đãi giảm giá.
Mình rất muốn biết bạn nghĩ sao về việc này. Mong sớm nhận tin từ bạn nhé.
Bảo trọng,
Nam"""
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
        "template": """Dear Club Manager,
My name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding [vấn đề: the proposed 15% fee increase and equipment upgrade]. I think [quan điểm: this is an important issue].
To help [mục tiêu: maintain member satisfaction and ensure high retention], I would like to make a few suggestions. First, we should [đề xuất 1: prioritize modern cardio machines and multi-functional weight racks]. Second, it would be better to [đề xuất 2: offer loyalty discounts for existing members before applying the new rate]. Finally, we could [đề xuất 3: introduce complimentary weekend yoga or group fitness classes]. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Đề xuất về Thiết bị (Equipment)",
                "icon": "Sparkles",
                "items": [
                    {"en": "prioritize modern cardio machines", "vi": "ưu tiên sắm các máy tập tim mạch hiện đại", "example": "First, we should prioritize modern cardio machines such as smart treadmills."},
                    {"en": "replace outdated treadmills and weights", "vi": "thay thế máy chạy bộ và tạ đã quá cũ", "example": "Replacing outdated machines ensures member safety and workout efficiency."}
                ]
            },
            {
                "name": "2. Đề xuất về Chính sách Phí (Pricing Policies)",
                "icon": "CheckCircle2",
                "items": [
                    {"en": "offer loyalty discounts for long-term members", "vi": "dành chiết khấu tri ân cho hội viên lâu năm", "example": "Second, it would be better to offer loyalty discounts for existing members."},
                    {"en": "implement a gradual price transition", "vi": "áp dụng lộ trình tăng giá dần dần theo từng giai đoạn", "example": "A gradual price transition helps members adjust comfortably."}
                ]
            },
            {
                "name": "3. Đề xuất về Giá trị cộng thêm (Added Value)",
                "icon": "BookOpen",
                "items": [
                    {"en": "introduce complimentary group fitness classes", "vi": "bổ sung các lớp tập nhóm miễn phí (Yoga, Zumba)", "example": "Finally, we could introduce complimentary group classes every weekend."},
                    {"en": "provide free body composition assessments", "vi": "cung cấp dịch vụ đo chỉ số cơ thể định kỳ miễn phí", "example": "Providing free body composition assessments creates immense added value."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn B2-C1",
                "wordCount": 184,
                "en": """Dear Club Manager,
My name is Nam, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding the proposed fee adjustment and facility renovation. I think this is an important issue.
To help maintain member satisfaction and ensure high retention, I would like to make a few suggestions. First, we should prioritize replacing outdated cardio equipment with smart treadmills and rowing machines. Second, it would be better to provide existing members with a special loyalty discount before applying the new pricing. Finally, we could organize complimentary weekend yoga and spinning classes to add value to our memberships. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
Nam Nguyen""",
                "vi": """Kính gửi Quản lý Câu lạc bộ,
Tên tôi là Nam, và tôi đã là hội viên của câu lạc bộ được hai năm. Trong suốt thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự rèn luyện thể chất của bản thân rất nhiều.
Tôi viết thư này nhằm phản hồi thông báo của câu lạc bộ để chia sẻ góc nhìn và đề xuất một số giải pháp thực tế liên quan đến việc điều chỉnh học phí và nâng cấp cơ sở vật chất. Tôi cho rằng đây là một vấn đề rất đáng quan tâm.
Để duy trì sự hài lòng của hội viên và giữ chân khách hàng gắn bó, tôi xin phép đưa ra một vài kiến nghị. Thứ nhất, chúng ta nên ưu tiên thay thế các thiết bị cardio đã cũ bằng máy chạy bộ thông minh và máy chèo thuyền. Thứ hai, câu lạc bộ nên dành mức giá ưu đãi tri ân cho các thành viên hiện tại trước khi áp dụng biểu phí mới. Cuối cùng, chúng ta có thể bổ sung các lớp yoga và đạp xe nhóm miễn phí vào cuối tuần để gia tăng giá trị thẻ tập. Nhìn chung, tôi tin rằng những giải pháp này sẽ tạo nên sự thay đổi tích cực và giúp câu lạc bộ hoàn thành mục tiêu.
Cảm ơn bạn đã dành thời gian xem xét thư. Tôi rất hy vọng các đóng góp này sẽ được cân nhắc và mong sớm nhận được phản hồi.
Trân trọng,
Nam Nguyen"""
            }
        ]
    }
}

# 3. Art club
batch_1["Art club"] = {
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
        "template": """Dear [Tên bạn],
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Art Club is organizing a public talk with a guest artist. I was quite excited when I found out about it. Personally, I think we should invite painter Minh to talk about watercolor painting because his art appeals to all ages. Moreover, let's attend the talk together next weekend.
I would love to know what you think about this. Hope to hear from you soon.
Take care,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Bày tỏ Cảm xúc (Emotions)",
                "icon": "Sparkles",
                "items": [
                    {"en": "quite excited", "vi": "khá hào hứng", "example": "I was quite excited when I heard about the upcoming public art talk."},
                    {"en": "delighted", "vi": "rất vui mừng", "example": "I am delighted that our club is inviting a guest artist."},
                    {"en": "truly inspired", "vi": "thực sự được truyền cảm hứng", "example": "I feel truly inspired by this creative initiative."}
                ]
            },
            {
                "name": "2. Gợi ý Nghệ sĩ & Chủ đề (Artist & Topic)",
                "icon": "CheckCircle2",
                "items": [
                    {"en": "watercolor and oil painting", "vi": "tranh màu nước và sơn dầu", "example": "He could share his techniques in watercolor and oil painting."},
                    {"en": "bridge the gap between traditional and modern art", "vi": "thu hẹp khoảng cách giữa nghệ thuật truyền thống và hiện đại", "example": "The talk can bridge the gap between traditional and contemporary art."},
                    {"en": "appeal to both youngsters and seniors", "vi": "thu hút cả giới trẻ và người lớn tuổi", "example": "Watercolor landscapes easily appeal to both youngsters and seniors."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 79,
                "en": """Dear Kim,
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Art Club is organizing a public talk with a guest artist. I was quite excited when I found out about it. Personally, I think we should invite painter Minh to discuss watercolor landscapes because his work appeals to both young and elderly people. Moreover, we should reserve our seats together early.
I would love to know what you think about this. Hope to hear from you soon.
Take care,
Nam""",
                "vi": """Chào Kim,
Dạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.
Mình nghĩ bạn sẽ thích nghe rằng Câu lạc bộ Nghệ thuật của chúng ta đang tổ chức một buổi nói chuyện công chúng với nghệ sĩ khách mời. Mình khá hào hứng khi biết tin này. Cá nhân mình nghĩ chúng ta nên mời họa sĩ Minh chia sẻ về tranh phong cảnh màu nước vì các tác phẩm của chú ấy thu hút cả người trẻ lẫn người lớn tuổi. Hơn nữa, chúng mình nên cùng đặt chỗ sớm nhé.
Mình rất muốn biết bạn nghĩ sao. Mong sớm nhận được tin từ bạn.
Bảo trọng,
Nam"""
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
        "template": """Dear Club President,
My name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding the public talk and guest artist invitation. I think this is a great idea.
To help attract both young and elderly members to the talk, I would like to make a few suggestions. First, we should invite a renowned local artist who specializes in blending traditional techniques with contemporary styles. Second, it would be better to focus the discussion on "Art for Everyday Wellbeing", which resonates across all generations. Finally, we could set up a 30-minute hands-on sketching session so attendees can practice alongside the speaker. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Đề xuất 1: Nghệ sĩ khách mời (Guest Artist)",
                "icon": "Sparkles",
                "items": [
                    {"en": "invite a renowned local artist", "vi": "mời một nghệ sĩ địa phương danh tiếng", "example": "First, we should invite a renowned local artist with great public charisma."},
                    {"en": "blend traditional techniques with contemporary styles", "vi": "kết hợp kỹ thuật truyền thống với phong cách đương đại", "example": "Blending traditional methods with modern themes attracts both generations."}
                ]
            },
            {
                "name": "2. Đề xuất 2: Chủ đề nói chuyện (Topic Selection)",
                "icon": "CheckCircle2",
                "items": [
                    {"en": "focus on Art for Everyday Wellbeing", "vi": "tập trung vào chủ đề Nghệ thuật cho Sức khỏe Tinh thần Hàng ngày", "example": "Second, it would be better to focus on Art for Everyday Wellbeing."},
                    {"en": "resonate across all generations", "vi": "tạo được sự đồng cảm sâu sắc ở mọi lứa tuổi", "example": "Mental relaxation through painting resonates strongly across all age groups."}
                ]
            },
            {
                "name": "3. Đề xuất 3: Trải nghiệm thực tế (Interactive Workshop)",
                "icon": "BookOpen",
                "items": [
                    {"en": "set up a hands-on sketching session", "vi": "tổ chức một phần thực hành phác thảo trực tiếp", "example": "Finally, we could set up a hands-on sketching session for participants."},
                    {"en": "encourage active creative participation", "vi": "khuyến khích sự tham gia sáng tạo tích cực", "example": "Hands-on activities turn passive listeners into active participants."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 182,
                "en": """Dear Club President,
My name is Nam, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding the public talk and guest artist invitation. I think this is a great idea.
To help attract both young and elderly participants, I would like to make a few suggestions. First, we should invite a renowned local painter who skillfully combines traditional folk motifs with contemporary art. Second, it would be better to choose the topic "Art as Therapy for Daily Stress", which appeals widely to students and retirees alike. Finally, we could include an interactive live drawing demonstration where attendees can create a small painting to take home. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
Nam Nguyen""",
                "vi": """Kính gửi Chủ tịch Câu lạc bộ,
Tên tôi là Nam, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.
Tôi viết email này để hồi đáp email của bạn nhằm chia sẻ suy nghĩ và đưa ra một vài đề xuất thực tế liên quan đến buổi nói chuyện trước công chúng và việc mời nghệ sĩ khách mời. Tôi nghĩ đây là một ý tưởng tuyệt vời.
Để giúp thu hút cả người tham gia trẻ tuổi lẫn người lớn tuổi, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, chúng ta nên mời một họa sĩ địa phương nổi tiếng, người có sở trường kết hợp khéo léo họa tiết dân gian truyền thống với nghệ thuật đương đại. Thứ hai, sẽ tốt hơn nếu lựa chọn chủ đề "Nghệ thuật như liệu pháp giải tỏa căng thẳng hàng ngày", vốn thu hút đông đảo từ học sinh sinh viên đến người nghỉ hưu. Cuối cùng, chúng ta có thể bổ sung buổi hướng dẫn vẽ trực tiếp để người tham dự có thể tự tay sáng tạo một bức tranh nhỏ mang về. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo ra sự khác biệt tích cực và giúp câu lạc bộ đạt được mục tiêu của mình.
Cảm ơn bạn đã dành thời gian xem xét các đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.
Trân trọng,
Nam Nguyen"""
            }
        ]
    }
}

# 4. Food club
batch_1["Food club"] = {
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
        "template": """Dear [Tên bạn],
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Food Club needs volunteer speakers for a talk show with a famous chef. I was quite excited when I found out about it. Personally, I think I will volunteer to talk about quick healthy home-cooked meals because students need practical nutrition tips. Moreover, could you help me prepare my presentation slides?
I would love to know what you think about this. Hope to hear from you soon.
Take care,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Bày tỏ Cảm xúc (Emotions)",
                "icon": "Sparkles",
                "items": [
                    {"en": "quite excited", "vi": "khá hào hứng", "example": "I was quite excited to hear about the chef talk show."},
                    {"en": "eager to participate", "vi": "rất háo hức được tham gia", "example": "I am extremely eager to volunteer as a speaker."}
                ]
            },
            {
                "name": "2. Chủ đề Ẩm thực đề xuất (Cooking Topics)",
                "icon": "CheckCircle2",
                "items": [
                    {"en": "quick healthy home-cooked meals", "vi": "bữa ăn gia đình nấu nhanh và lành mạnh", "example": "I plan to share tips on quick healthy home-cooked meals."},
                    {"en": "practical nutrition on a tight budget", "vi": "dinh dưỡng thực tế với chi phí tiết kiệm", "example": "Students appreciate practical nutrition on a tight budget."},
                    {"en": "traditional family recipes with a modern twist", "vi": "công thức gia truyền biến tấu theo phong cách hiện đại", "example": "We can cook traditional family recipes with a modern twist."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 81,
                "en": """Dear Lan,
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Food Club is seeking volunteer speakers for an upcoming talk show with a celebrity chef. I was quite excited when I found out about it. Personally, I think I will volunteer to share practical recipes for healthy weekday meals because so many members struggle with balanced diets. Moreover, let's practice cooking together this Sunday!
I would love to know what you think about this. Hope to hear from you soon.
Take care,
Minh""",
                "vi": """Chào Lan,
Dạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.
Mình nghĩ bạn sẽ thích nghe tin CLB Ẩm thực đang tìm tình nguyện viên làm diễn giả cho buổi tọa đàm sắp tới cùng đầu bếp nổi tiếng. Mình khá hào hứng khi biết tin này. Cá nhân mình nghĩ mình sẽ đăng ký chia sẻ công thức các món ăn thường ngày lành mạnh vì rất nhiều hội viên đang gặp khó khăn trong việc ăn uống cân bằng. Hơn nữa, chủ nhật này chúng mình cùng nhau tập nấu thử nhé!
Mình rất muốn biết bạn nghĩ sao. Mong sớm nhận tin từ bạn.
Bảo trọng,
Minh"""
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
        "template": """Dear Club Manager,
My name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to express my enthusiasm to volunteer as a guest speaker alongside the guest chef. I think this is a great idea.
To help make the talk show informative and engaging, I would like to make a few suggestions. First, I would love to present on "Nutritious Family Meals on a Modest Budget", which directly addresses our members' everyday needs. Second, it would be better to include a short 15-minute live cooking challenge where the chef and I prepare a dish using identical seasonal ingredients. Finally, we could organize a small tasting corner for the audience to evaluate the dishes. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Đề xuất 1: Đăng ký chủ đề thuyết trình (Topic)",
                "icon": "Sparkles",
                "items": [
                    {"en": "Nutritious Family Meals on a Modest Budget", "vi": "Bữa cơm gia đình giàu dinh dưỡng với ngân sách tiết kiệm", "example": "First, I would love to present on Nutritious Family Meals on a Modest Budget."},
                    {"en": "address members' everyday culinary challenges", "vi": "giải quyết những khó khăn nấu nướng hàng ngày của hội viên", "example": "This topic directly addresses our members' everyday culinary challenges."}
                ]
            },
            {
                "name": "2. Đề xuất 2: Nấu ăn biểu diễn trực tiếp (Live Demo)",
                "icon": "CheckCircle2",
                "items": [
                    {"en": "include a live cooking demonstration", "vi": "kết hợp phần biểu diễn nấu nướng trực tiếp", "example": "Second, it would be better to include a 15-minute live cooking demonstration."},
                    {"en": "prepare a signature dish with seasonal ingredients", "vi": "chế biến món ăn đặc trưng bằng nguyên liệu theo mùa", "example": "Using seasonal ingredients highlights freshness and affordability."}
                ]
            },
            {
                "name": "3. Đề xuất 3: Hoạt động nếm thử (Tasting Session)",
                "icon": "BookOpen",
                "items": [
                    {"en": "organize a tasting corner for the audience", "vi": "bố trí góc nếm thử thức ăn cho khán giả", "example": "Finally, we could organize a tasting corner for the audience to sample dishes."},
                    {"en": "create an interactive culinary experience", "vi": "tạo nên trải nghiệm ẩm thực tương tác sinh động", "example": "Tasting sessions always generate enthusiastic feedback."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 185,
                "en": """Dear Club Manager,
My name is Nam, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to express my strong desire to volunteer as a guest speaker for the talk show with the famous chef. I think this is a great idea.
To help make the event both inspiring and practical, I would like to make a few suggestions. First, I propose delivering a presentation entitled "Healthy Weekday Dinners on a Student Budget", providing accessible culinary solutions for busy individuals. Second, it would be better to arrange a collaborative cooking demonstration where the guest chef and I prepare a dish together while sharing culinary tips. Finally, we could offer recipe cards and a tasting session for all attendees. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
Nam Nguyen""",
                "vi": """Kính gửi Quản lý Câu lạc bộ,
Tên tôi là Nam, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.
Tôi viết email này để bày tỏ mong muốn được làm diễn giả khách mời cho buổi talk show cùng vị đầu bếp nổi tiếng. Tôi nghĩ đây là một ý tưởng tuyệt vời.
Để giúp sự kiện vừa truyền cảm hứng vừa mang tính ứng dụng thực tế, tôi xin đưa ra một số đề xuất. Thứ nhất, tôi đề xuất chia sẻ bài thuyết trình có tựa đề "Bữa tối ngày thường lành mạnh với ngân sách sinh viên", mang đến những giải pháp nấu nướng dễ dàng cho người bận rộn. Thứ hai, sẽ tốt hơn nếu tổ chức một màn nấu ăn kết hợp trực tiếp, nơi đầu bếp khách mời và tôi cùng nhau chuẩn bị món ăn và chia sẻ mẹo làm bếp. Cuối cùng, chúng ta có thể phát thẻ công thức nấu ăn và tổ chức một buổi nếm thử cho tất cả người tham dự. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ hoàn thành mục tiêu.
Cảm ơn bạn đã dành thời gian xem xét các đề xuất. Tôi rất mong nhận được phản hồi từ bạn.
Trân trọng,
Nam Nguyen"""
            }
        ]
    }
}

# 5. Social club (Monthly Meetings for All Ages)
batch_1["Social club"] = {
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
        "template": """Dear [Tên bạn],
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Social Club is planning monthly face-to-face meetings for all ages. I was quite excited when I found out about it. Personally, I think Saturday mornings at a spacious garden café would be ideal because it is peaceful and accessible. Moreover, let's attend the first meetup together!
I would love to know what you think about this. Hope to hear from you soon.
Take care,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Bày tỏ Cảm xúc (Emotions)",
                "icon": "Sparkles",
                "items": [
                    {"en": "quite excited", "vi": "khá hào hứng", "example": "I was quite excited about meeting everyone in person."},
                    {"en": "delighted", "vi": "rất vui mừng", "example": "I am delighted that we can finally meet face-to-face."}
                ]
            },
            {
                "name": "2. Thời gian & Địa điểm (Time & Venue)",
                "icon": "CheckCircle2",
                "items": [
                    {"en": "Saturday morning at a garden cafe", "vi": "sáng thứ Bảy tại quán cà phê sân vườn", "example": "Saturday mornings at a garden cafe offer plenty of natural light and fresh air."},
                    {"en": "convenient transport links and parking", "vi": "giao thông thuận tiện và chỗ đỗ xe thoải mái", "example": "The venue should have convenient transport links and ample parking."},
                    {"en": "relaxing atmosphere for all generations", "vi": "bầu không khí thư giãn cho mọi thế hệ", "example": "It provides a relaxing atmosphere for both students and retirees."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 81,
                "en": """Dear Huong,
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Social Club is going to organize monthly in-person gatherings. I was quite excited when I found out about it. Personally, I think Saturday morning at the city central community hall is the best choice because it is accessible for both young students and older members. Moreover, we could organize light board games during the break.
I would love to know what you think about this. Hope to hear from you soon.
Take care,
Lan""",
                "vi": """Chào Hương,
Dạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.
Mình nghĩ bạn sẽ thích nghe rằng CLB Xã hội của chúng ta sắp tổ chức các buổi gặp mặt trực tiếp hàng tháng. Mình khá hào hứng khi biết tin này. Cá nhân mình thấy sáng thứ Bảy tại nhà văn hóa trung tâm thành phố là lựa chọn tốt nhất vì rất thuận tiện đi lại cho cả sinh viên trẻ lẫn các cô chú lớn tuổi. Hơn nữa, chúng mình có thể tổ chức chơi board game nhẹ nhàng trong giờ giải lao.
Mình rất muốn biết bạn nghĩ gì về điều này. Hy vọng sớm nhận được hồi âm từ bạn.
Bảo trọng,
Lan"""
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
        "template": """Dear Club President,
My name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding the monthly face-to-face meetings. I think this is a great idea.
To help make these meetings enjoyable and inclusive for both young and older members, I would like to make a few suggestions. First, we should schedule the gatherings on Saturday mornings from 9:00 AM to 11:00 AM, avoiding late hours. Second, it would be better to book the local community cultural center, as it features comfortable seating, wheelchair ramps, and spacious gardens. Finally, we could organize an intergenerational storytelling circle accompanied by tea and light refreshments. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Đề xuất 1: Thời gian lý tưởng (Optimal Timing)",
                "icon": "Sparkles",
                "items": [
                    {"en": "schedule gatherings on Saturday mornings", "vi": "xếp lịch sinh hoạt vào sáng thứ Bảy", "example": "First, we should schedule gatherings on Saturday mornings between 9:00 and 11:00 AM."},
                    {"en": "avoid late evening hours", "vi": "tránh khung giờ muộn buổi tối", "example": "Morning slots are convenient for families and older participants."}
                ]
            },
            {
                "name": "2. Đề xuất 2: Địa điểm hòa nhập (Inclusive Venue)",
                "icon": "CheckCircle2",
                "items": [
                    {"en": "local community cultural center", "vi": "nhà văn hóa cộng đồng địa phương", "example": "Second, it would be better to rent a hall at the local community cultural center."},
                    {"en": "wheelchair ramps and peaceful garden seating", "vi": "đường dốc cho xe lăn và chỗ ngồi sân vườn yên bình", "example": "This venue provides accessibility ramps and peaceful garden seating."}
                ]
            },
            {
                "name": "3. Đề xuất 3: Hoạt động gắn kết (Intergenerational Activities)",
                "icon": "BookOpen",
                "items": [
                    {"en": "intergenerational storytelling circle", "vi": "vòng tròn sẻ chia kể chuyện kết nối hai thế hệ", "example": "Finally, we could organize an intergenerational storytelling circle over tea."},
                    {"en": "foster mutual understanding and genuine companionship", "vi": "thúc đẩy sự thấu hiểu lẫn nhau và tình bạn chân thành", "example": "Shared activities foster mutual understanding and genuine companionship."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 183,
                "en": """Dear Club President,
My name is Nam, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding our monthly face-to-face meetings. I think this is a great idea.
To ensure the meetings are convenient and comfortable for all age groups, I would like to make a few suggestions. First, we should hold our meetings on Saturday mornings from 9:00 AM to 11:00 AM, allowing attendees to spend the rest of the weekend with family. Second, it would be better to select the municipal cultural house because it provides ample parking, ground-floor accessibility, and a serene atmosphere. Finally, we could organize a tea-break session combined with fun ice-breaking quizzes to stimulate lively discussions. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
Nam Nguyen""",
                "vi": """Kính gửi Chủ tịch Câu lạc bộ,
Tên tôi là Nam, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.
Tôi viết email này để hồi đáp email của bạn nhằm chia sẻ suy nghĩ và đưa ra một vài đề xuất thực tế liên quan đến các buổi gặp mặt trực tiếp hàng tháng. Tôi nghĩ đây là một ý tưởng tuyệt vời.
Để đảm bảo các buổi gặp mặt thuận tiện và thoải mái cho mọi lứa tuổi, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, chúng ta nên tổ chức sinh hoạt vào sáng thứ Bảy từ 9:00 đến 11:00, giúp người tham dự có thể dành thời gian còn lại của cuối tuần cho gia đình. Thứ hai, sẽ tốt hơn nếu chọn nhà văn hóa thành phố vì nơi đây có bãi đỗ xe rộng rãi, lối đi bằng phẳng ở tầng trệt và không gian thanh tĩnh. Cuối cùng, chúng ta có thể tổ chức tiệc trà kết hợp các câu đố vui khởi động để khuấy động không khí giao lưu sôi nổi. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ hoàn thành mục tiêu.
Cảm ơn bạn đã dành thời gian xem xét các đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.
Trân trọng,
Nam Nguyen"""
            }
        ]
    }
}

print("Batch 1 generated successfully!")
