# Batch 2: Social club 2, Beautiful homes club, Living home club, Garden club 1, Garden club 2

batch_2 = {}

# 6. Social club 2 (Indoor vs Outdoor Activities)
batch_2["Social club 2"] = {
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
        "template": """Dear [Tên bạn],
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Social Club is planning face-to-face meetings for both kids and adults next month. I was quite excited when I found out about it. Personally, I think combining indoor and outdoor activities at an eco-park is the best choice because children can run around while adults chat comfortably inside. Moreover, let's bring our families along!
I would love to know what you think about this. Hope to hear from you soon.
Take care,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Bày tỏ Cảm xúc & Quan điểm",
                "icon": "Sparkles",
                "items": [
                    {"en": "quite excited", "vi": "khá hào hứng", "example": "I was quite excited about bringing the whole family."},
                    {"en": "combining both indoor and outdoor activities", "vi": "kết hợp cả hoạt động trong nhà lẫn ngoài trời", "example": "Combining both indoor and outdoor activities satisfies diverse preferences."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 81,
                "en": """Dear Sarah,
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Social Club is organizing in-person gatherings for adults and kids next month. I was quite excited when I found out about it. Personally, I think combining indoor and outdoor activities at the municipal park is ideal because energetic children can play sports outside while adults relax indoors. Moreover, we could organize a fun potluck picnic.
I would love to know what you think about this. Hope to hear from you soon.
Take care,
Mai""",
                "vi": """Chào Sarah,
Dạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.
Mình nghĩ bạn sẽ thích nghe rằng CLB Xã hội của chúng ta đang tổ chức các buổi họp mặt trực tiếp cho cả người lớn và trẻ em vào tháng tới. Mình khá hào hứng khi biết tin này. Cá nhân mình thấy việc kết hợp cả hoạt động trong nhà và ngoài trời tại công viên thành phố là lý tưởng nhất vì trẻ em hiếu động có thể chơi thể thao ngoài trời trong khi người lớn thư giãn trò chuyện trong nhà. Hơn nữa, chúng mình có thể tổ chức một buổi dã ngoại góp đồ ăn chung thật vui.
Mình rất muốn biết bạn nghĩ gì. Mong sớm nhận được tin từ bạn.
Bảo trọng,
Mai"""
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
        "template": """Dear Club Manager,
My name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding our upcoming face-to-face gatherings. I believe that organizing both indoor and outdoor activities would be a much better choice.
To help make these events successful and inclusive for both children and adults, I would like to make a few suggestions. First, we should reserve a municipal botanical garden pavilion that offers both expansive lawns and a weather-proof indoor hall. Second, it would be better to divide the schedule: outdoor team games and sports for children and youth, alongside indoor discussions and workshops for adults. Finally, we could arrange healthy buffet refreshments and have a contingency plan for unexpected rain. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Đề xuất 1: Địa điểm tích hợp (Hybrid Venue)",
                "icon": "Sparkles",
                "items": [
                    {"en": "reserve a botanical garden pavilion", "vi": "đặt trước một khu nhà chòi tại vườn bách thảo", "example": "First, we should reserve a botanical garden pavilion with indoor and outdoor access."},
                    {"en": "offer expansive lawns and weather-proof indoor halls", "vi": "có bãi cỏ rộng rãi và hội trường trong nhà tránh mưa nắng", "example": "This venue offers expansive lawns and a weather-proof indoor hall."}
                ]
            },
            {
                "name": "2. Đề xuất 2: Phân chia hoạt động theo lứa tuổi (Age-tailored Activities)",
                "icon": "CheckCircle2",
                "items": [
                    {"en": "outdoor team games and sports for children", "vi": "trò chơi đồng đội và thể thao ngoài trời cho trẻ em", "example": "Second, it would be better to schedule outdoor team games for children."},
                    {"en": "indoor workshops and networking for adults", "vi": "hội thảo và giao lưu trong nhà cho người lớn", "example": "Meanwhile, adults can participate in indoor workshops and calm discussions."}
                ]
            },
            {
                "name": "3. Đề xuất 3: Hậu cần & Kế hoạch dự phòng (Logistics & Contingency)",
                "icon": "BookOpen",
                "items": [
                    {"en": "prepare contingency plans for adverse weather", "vi": "chuẩn bị kế hoạch dự phòng khi thời tiết bất lợi", "example": "Finally, we must prepare contingency plans for adverse weather."},
                    {"en": "cater healthy finger food and refreshments", "vi": "phục vụ đồ ăn nhẹ lành mạnh và nước giải khát", "example": "Catering healthy finger foods keeps both youngsters and seniors energized."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 184,
                "en": """Dear Club Manager,
My name is Nam, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding our upcoming face-to-face gatherings. I believe that organizing both indoor and outdoor activities would be a much better choice.
To ensure the event satisfies participants of all generations, I would like to make a few suggestions. First, we should rent the community center at West Lake Park, which features both large outdoor gardens and an air-conditioned function room. Second, it would be better to run parallel sessions: supervised treasure hunts and games for children outside, while adults enjoy coffee and cultural presentations indoors. Finally, we could conclude the day with a joint group photo and prize ceremony. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
Nam Nguyen""",
                "vi": """Kính gửi Quản lý Câu lạc bộ,
Tên tôi là Nam, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.
Tôi viết email này để hồi đáp email của bạn nhằm chia sẻ suy nghĩ và đưa ra một vài đề xuất thực tế liên quan đến các buổi gặp mặt trực tiếp sắp tới. Tôi tin rằng việc tổ chức kết hợp cả hoạt động trong nhà và ngoài trời sẽ là một sự lựa chọn tốt hơn nhiều.
Để đảm bảo sự kiện làm hài lòng người tham dự ở mọi thế hệ, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, chúng ta nên thuê nhà văn hóa cộng đồng tại công viên Hồ Tây, nơi có cả khu vườn ngoài trời rộng rãi lẫn phòng sinh hoạt có máy lạnh. Thứ hai, sẽ tốt hơn nếu tổ chức các phiên hoạt động song song: trò chơi truy tìm kho báu ngoài trời có người giám sát cho trẻ em, trong khi người lớn thưởng thức cà phê và nghe thuyết trình văn hóa trong nhà. Cuối cùng, chúng ta có thể khép lại ngày hội bằng buổi chụp hình kỷ niệm chung và lễ trao giải. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ đạt được mục tiêu của mình.
Cảm ơn bạn đã dành thời gian xem xét các đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.
Trân trọng,
Nam Nguyen"""
            }
        ]
    }
}

# 7. Beautiful homes club (Old vs Modern Buildings)
batch_2["Beautiful homes club"] = {
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
        "template": """Dear [Tên bạn],
How's it going? I hope you're doing well.
I thought you'd be interested to hear that the government is proposing to demolish historic buildings for modern blocks. I was quite disappointed when I found out about it. Personally, I think old buildings give our city unique soul and cultural heritage that modern concrete blocks cannot replace. Moreover, we should start a petition to preserve them.
I would love to know what you think about this. Hope to hear from you soon.
Take care,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Cảm xúc & Di sản văn hóa",
                "icon": "Sparkles",
                "items": [
                    {"en": "quite disappointed", "vi": "khá thất vọng", "example": "I was quite disappointed by the demolition plan."},
                    {"en": "unique soul and cultural heritage", "vi": "cái hồn độc đáo và di sản văn hóa", "example": "Old buildings give our city its unique soul and cultural heritage."},
                    {"en": "modern concrete blocks", "vi": "những khối bê tông hiện đại", "example": "Modern concrete blocks lack character and charm."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 81,
                "en": """Dear John,
How's it going? I hope you're doing well.
I thought you'd be interested to hear that the government plans to knock down ancient buildings to construct modern blocks. I was quite shocked when I found out about it. Personally, I think historic buildings represent our irreplaceable cultural heritage and architectural identity. Moreover, we should renovate them instead of destroying them completely.
I would love to know what you think about this. Hope to hear from you soon.
Take care,
Nam""",
                "vi": """Chào John,
Dạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.
Mình nghĩ bạn sẽ quan tâm khi nghe rằng chính phủ đang lên kế hoạch phá dỡ các tòa nhà cổ để xây dựng các khối nhà hiện đại. Mình khá sốc khi biết tin này. Cá nhân mình thấy các tòa nhà lịch sử đại diện cho di sản văn hóa và bản sắc kiến trúc không thể thay thế của chúng ta. Hơn nữa, chúng ta nên cải tạo chúng thay vì phá hủy hoàn toàn.
Mình rất muốn biết bạn nghĩ gì về điều này. Hy vọng sớm nhận được tin từ bạn.
Bảo trọng,
Nam"""
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
        "template": """Dear Club President,
My name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my perspective regarding the government's proposal to replace old buildings with modern high-rises. I think this is an important issue.
To help balance urban development with heritage conservation, I would like to make a few suggestions. First, we should conduct a thorough architectural assessment to preserve buildings with significant historical and artistic value. Second, it would be better to advocate for adaptive reuse, upgrading old interiors with modern energy-efficient amenities while retaining vintage facades. Finally, we could advise the authorities to direct large modern apartment projects toward designated suburban zones. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Đề xuất 1: Đánh giá phân loại di sản (Assessment)",
                "icon": "Sparkles",
                "items": [
                    {"en": "conduct a thorough architectural assessment", "vi": "tiến hành đánh giá kiến trúc kỹ lưỡng", "example": "First, we should conduct a thorough architectural assessment before any demolition."},
                    {"en": "preserve buildings with significant historical value", "vi": "bảo tồn các công trình có giá trị lịch sử quan trọng", "example": "Preserving historical landmarks protects the cultural soul of the city."}
                ]
            },
            {
                "name": "2. Đề xuất 2: Cải tạo thích ứng (Adaptive Reuse)",
                "icon": "CheckCircle2",
                "items": [
                    {"en": "advocate for adaptive reuse and interior renovation", "vi": "vận động cải tạo thích ứng và làm mới nội thất", "example": "Second, it would be better to advocate for adaptive reuse rather than total destruction."},
                    {"en": "retain vintage facades while upgrading amenities", "vi": "giữ lại mặt tiền cổ kính trong khi nâng cấp tiện nghi hiện đại", "example": "Retaining vintage facades preserves aesthetic charm while ensuring safety."}
                ]
            },
            {
                "name": "3. Đề xuất 3: Quy hoạch phát triển (Zoning Policy)",
                "icon": "BookOpen",
                "items": [
                    {"en": "direct high-density modern blocks toward suburban zones", "vi": "hướng các khối chung cư hiện đại mật độ cao về vùng ngoại ô", "example": "Finally, modern high-rises should be built in designated expansion zones."},
                    {"en": "balance urban modernization with cultural conservation", "vi": "cân bằng giữa hiện đại hóa đô thị với bảo tồn văn hóa", "example": "We must strike a balance between modernization and conservation."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 185,
                "en": """Dear Club President,
My name is Nam, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding the proposal to demolish older structures for modern housing blocks. I think this is an important issue.
To protect our city's architectural legacy while accommodating growth, I would like to make a few suggestions. First, the club should submit an official petition to evaluate and protect buildings that hold distinctive historic value. Second, it would be better to promote adaptive reuse, which modernizes plumbing and insulation while safeguarding historic exterior facades. Finally, we could suggest that high-density residential towers be prioritized in newly developing suburban districts. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
Nam Nguyen""",
                "vi": """Kính gửi Chủ tịch Câu lạc bộ,
Tên tôi là Nam, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.
Tôi viết email này để chia sẻ suy nghĩ và đưa ra một vài đề xuất thực tế liên quan đến đề xuất phá dỡ các công trình cũ để xây dựng các khu chung cư hiện đại. Tôi nghĩ đây là một vấn đề vô cùng quan trọng.
Để bảo vệ di sản kiến trúc của thành phố trong khi vẫn đáp ứng nhu cầu phát triển, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, câu lạc bộ nên gửi một kiến nghị chính thức nhằm đánh giá và bảo vệ các tòa nhà mang giá trị lịch sử đặc sắc. Thứ hai, sẽ tốt hơn nếu đẩy mạnh phương án cải tạo thích ứng, nâng cấp hệ thống đường ống và cách nhiệt bên trong trong khi vẫn giữ gìn nguyên vẹn mặt tiền cổ kính bên ngoài. Cuối cùng, chúng ta có thể đề xuất ưu tiên xây dựng các tòa tháp chung cư mật độ cao tại các khu đô thị mới ven đô. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ hoàn thành mục tiêu.
Cảm ơn bạn đã dành thời gian xem xét đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc và rất mong nhận được phản hồi từ bạn.
Trân trọng,
Nam Nguyen"""
            }
        ]
    }
}

# 8. Living home club (Advice for Young Homebuyers)
batch_2["Living home club"] = {
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
        "template": """Dear [Tên bạn],
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Living Home Club is discussing advice for young homebuyers. I was quite interested when I found out about it. Personally, I think youngsters should avoid heavy mortgage debt and build a stable emergency fund before buying. Moreover, renting first allows them greater flexibility to explore careers.
I would love to know what you think about this. Hope to hear from you soon.
Take care,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Lời khuyên tài chính cho người trẻ",
                "icon": "Sparkles",
                "items": [
                    {"en": "avoid heavy mortgage debt", "vi": "tránh gánh nặng nợ vay mua nhà quá lớn", "example": "Youngsters should avoid heavy mortgage debt early in their careers."},
                    {"en": "build a stable emergency fund", "vi": "xây dựng quỹ dự phòng tài chính ổn định", "example": "It is essential to build an emergency fund before making large purchases."},
                    {"en": "career and geographic flexibility", "vi": "sự linh hoạt trong sự nghiệp và địa điểm sinh sống", "example": "Renting offers valuable career and geographic flexibility."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 79,
                "en": """Dear Peter,
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Living Home Club is discussing advice for young people buying homes early. I was quite intrigued when I found out about it. Personally, I think young professionals should avoid excessive bank debt and ensure financial stability first. Moreover, renting allows them valuable flexibility to relocate for better jobs.
I would love to know what you think about this. Hope to hear from you soon.
Take care,
Nam""",
                "vi": """Chào Peter,
Dạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.
Mình nghĩ bạn sẽ thấy thú vị khi nghe rằng CLB Living Home đang thảo luận lời khuyên cho các bạn trẻ muốn mua nhà sớm. Mình khá ấn tượng khi biết tin này. Cá nhân mình nghĩ các bạn trẻ đi làm nên tránh vay nợ ngân hàng quá mức và phải đảm bảo ổn định tài chính trước. Hơn nữa, thuê nhà giúp họ có sự linh hoạt quý giá để dễ dàng chuyển nơi ở khi có công việc tốt hơn.
Mình rất muốn biết bạn nghĩ gì về điều này. Mong sớm nhận được hồi âm từ bạn.
Bảo trọng,
Nam"""
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
        "template": """Dear Club Manager,
My name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my perspective and offer constructive recommendations regarding homeownership for young adults. I think this is an important issue.
To support young members in making prudent housing decisions, I would like to make a few suggestions. First, our club should organize a workshop on personal financial literacy and mortgage planning so youngsters understand long-term debt obligations. Second, it would be better to advise them to begin with smaller, affordable studio apartments rather than stretching beyond their budget for spacious houses. Finally, we could compile a legal checklist covering title deeds and contract verifications to protect first-time buyers. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Đề xuất 1: Hội thảo quản lý tài chính (Financial Literacy)",
                "icon": "Sparkles",
                "items": [
                    {"en": "organize a workshop on personal financial literacy", "vi": "tổ chức hội thảo về quản lý tài chính cá nhân", "example": "First, our club should organize a workshop on personal financial literacy."},
                    {"en": "understand long-term mortgage obligations", "vi": "hiểu rõ nghĩa vụ trả nợ vay mua nhà dài hạn", "example": "Youngsters must understand long-term mortgage obligations before signing contracts."}
                ]
            },
            {
                "name": "2. Đề xuất 2: Bắt đầu vừa sức (Affordable Starter Homes)",
                "icon": "CheckCircle2",
                "items": [
                    {"en": "start with smaller, affordable studio apartments", "vi": "bắt đầu với căn hộ studio nhỏ, vừa túi tiền", "example": "Second, it would be better to advise them to start with affordable starter homes."},
                    {"en": "avoid stretching financial limits", "vi": "tránh kéo căng giới hạn tài chính quá mức", "example": "Stretching beyond budget leads to chronic financial stress."}
                ]
            },
            {
                "name": "3. Đề xuất 3: Cẩm nang pháp lý (Legal Guidance)",
                "icon": "BookOpen",
                "items": [
                    {"en": "compile a legal checklist for first-time buyers", "vi": "biên soạn bảng kiểm tra pháp lý cho người mua nhà lần đầu", "example": "Finally, we could compile a legal checklist covering property ownership rights."},
                    {"en": "protect buyers from hidden property risks", "vi": "bảo vệ người mua khỏi các rủi ro pháp lý tiềm ẩn", "example": "Legal advice prevents costly disputes in real estate transactions."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 186,
                "en": """Dear Club Manager,
My name is Nam, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding young adults aspiring to own homes early in life. I think this is an important issue.
To help our young members make sound, sustainable housing choices, I would like to make a few suggestions. First, we should invite a financial advisor to conduct a seminar on managing monthly cash flow and calculating mortgage interest rates. Second, it would be better to encourage youngsters to focus on modest starter apartments rather than taking out excessive loans for luxury properties. Finally, we could publish a practical guidebook outlining legal documentation and contract essentials for first-time buyers. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
Nam Nguyen""",
                "vi": """Kính gửi Quản lý Câu lạc bộ,
Tên tôi là Nam, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.
Tôi viết email này để chia sẻ góc nhìn và đưa ra một vài đề xuất thực tế liên quan đến nguyện vọng sở hữu nhà sớm của các bạn trẻ. Tôi nghĩ đây là một chủ đề rất thiết thực.
Để giúp các hội viên trẻ đưa ra những quyết định mua nhà đúng đắn và bền vững, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, chúng ta nên mời một chuyên gia tài chính tổ chức buổi tọa đàm về quản lý dòng tiền hàng tháng và tính toán lãi suất vay mua nhà. Thứ hai, sẽ tốt hơn nếu khuyến khích các bạn trẻ tập trung vào những căn hộ khởi điểm vừa sức thay vì gánh các khoản vay quá lớn cho những bất động sản xa xỉ. Cuối cùng, câu lạc bộ có thể xuất bản một cuốn cẩm nang thực tế nêu rõ các hồ sơ pháp lý và điều khoản hợp đồng cốt lõi cho người mua nhà lần đầu. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ hoàn thành mục tiêu.
Cảm ơn bạn đã dành thời gian xem xét các đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.
Trân trọng,
Nam Nguyen"""
            }
        ]
    }
}

# 9. Garden club 1 (Japan Garden Talk Canceled)
batch_2["Garden club"] = {
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
        "template": """Dear [Tên bạn],
How's it going? I hope you're doing well.
I thought you'd be interested to hear that Mr. Seiko's talk on Japanese gardens has been canceled due to illness, and Mr. Jones will present English gardens again. I was quite disappointed when I found out about it because I was eager to learn about bonsai. Personally, I think we should still attend to support Mr. Jones. Moreover, let's bring some garden seeds to swap!
I would love to know what you think about this. Hope to hear from you soon.
Take care,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Cảm xúc & Sự thay đổi kế hoạch",
                "icon": "Sparkles",
                "items": [
                    {"en": "quite disappointed", "vi": "khá thất vọng", "example": "I was quite disappointed that the Japanese garden talk was canceled."},
                    {"en": "still attend to show support", "vi": "vẫn tham dự để thể hiện sự ủng hộ", "example": "We should still attend to show support for Mr. Jones."},
                    {"en": "swap flower seeds and plant cuttings", "vi": "trao đổi hạt giống hoa và cành giâm cây", "example": "We could swap plant cuttings and seeds after the presentation."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 81,
                "en": """Dear Emma,
How's it going? I hope you're doing well.
I thought you'd be interested to hear that Mr. Seiko's Japanese garden talk is canceled because he is unwell, so Mr. Jones will present English gardens again. I was quite disappointed when I found out about it as I love Japanese landscapes. Personally, I think we should still attend because Mr. Jones is an excellent speaker. Moreover, we could bring plant cuttings to share!
I would love to know what you think about this. Hope to hear from you soon.
Take care,
Mai""",
                "vi": """Chào Emma,
Dạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.
Mình nghĩ bạn sẽ muốn biết tin buổi nói chuyện về vườn Nhật Bản của ông Seiko đã bị hủy vì ông ấy bị ốm, nên ông Jones sẽ nói lại về vườn nước Anh. Mình khá thất vọng khi biết tin này vì mình rất mê phong cảnh vườn Nhật. Cá nhân mình nghĩ chúng ta vẫn nên tham dự vì ông Jones là một diễn giả rất tuyệt vời. Hơn nữa, chúng mình có thể mang cành cây giống đến chia sẻ cho nhau!
Mình rất muốn biết bạn nghĩ gì. Mong sớm nhận tin từ bạn.
Bảo trọng,
Mai"""
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
        "template": """Dear Club President,
My name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email regarding the cancellation of Mr. Seiko's lecture and the substitute talk by Mr. Jones. I think this is an appropriate temporary solution.
To help make Mr. Jones's presentation engaging for members who have attended his previous session, I would like to make a few suggestions. First, we could kindly ask Mr. Jones to focus on new practical tips for modern urban gardening and English cottage plants. Second, it would be better to dedicate 20 minutes for an open gardening Q&A and a seed exchange among members. Finally, the club should prepare a warm get-well card for Mr. Seiko wishing him a rapid recovery. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Đề xuất 1: Cập nhật nội dung mới (Fresh Practical Content)",
                "icon": "Sparkles",
                "items": [
                    {"en": "focus on practical tips for modern urban gardens", "vi": "tập trung vào mẹo thực tế cho vườn đô thị hiện đại", "example": "First, Mr. Jones could focus on practical tips for small urban spaces."},
                    {"en": "introduce new slide photographs and seasonal techniques", "vi": "bổ sung thêm hình ảnh mới và kỹ thuật chăm sóc theo mùa", "example": "New slide photographs will keep the presentation fresh and engaging."}
                ]
            },
            {
                "name": "2. Đề xuất 2: Trao đổi cây giống & Hỏi đáp (Interactive Exchange)",
                "icon": "CheckCircle2",
                "items": [
                    {"en": "host a plant and seed swap session", "vi": "tổ chức buổi trao đổi cây giống và hạt hoa", "example": "Second, it would be better to host a plant and seed swap session."},
                    {"en": "allot time for interactive member inquiries", "vi": "dành thời lượng giải đáp thắc mắc tương tác của hội viên", "example": "Allocating time for live Q&A fosters rich community interaction."}
                ]
            },
            {
                "name": "3. Đề xuất 3: Thăm hỏi diễn giả ốm (Get-well Wishes)",
                "icon": "BookOpen",
                "items": [
                    {"en": "prepare a warm get-well card for Mr. Seiko", "vi": "chuẩn bị một tấm thiệp chúc mau khỏe gửi ông Seiko", "example": "Finally, the club should send a heartfelt get-well card to Mr. Seiko."},
                    {"en": "reschedule the Japanese garden talk in the future", "vi": "sắp xếp lại buổi nói chuyện vườn Nhật trong tương lai", "example": "We look forward to rescheduling the lecture when he has fully recovered."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 185,
                "en": """Dear Club President,
My name is Nam, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email regarding the unfortunate cancellation of Mr. Seiko's presentation and Mr. Jones's kind offer to step in. I think this is a sensible backup plan.
To ensure the session remains captivating for returning attendees, I would like to make a few suggestions. First, we could invite Mr. Jones to highlight practical pruning methods and organic pest control alongside his English garden slides. Second, it would be highly beneficial to organize an informal plant-cutting exchange table where members can trade greenery. Finally, our club could send a get-well gift basket to Mr. Seiko wishing him a swift recovery. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
Nam Nguyen""",
                "vi": """Kính gửi Chủ tịch Câu lạc bộ,
Tên tôi là Nam, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.
Tôi viết email này để hồi đáp thông báo của bạn liên quan đến việc buổi thuyết trình của ông Seiko không may bị hủy và lời đề nghị chia sẻ thay thế đầy nhiệt tình của ông Jones. Tôi nghĩ đây là một kế hoạch dự phòng rất hợp lý.
Để đảm bảo buổi sinh hoạt vẫn hấp dẫn đối với các hội viên đã từng nghe trước đây, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, chúng ta có thể mời ông Jones nhấn mạnh thêm các phương pháp cắt tỉa cành thực tế và kiểm soát sâu bệnh hữu cơ bên cạnh các slide về vườn nước Anh. Thứ hai, sẽ rất bổ ích nếu tổ chức một bàn giao lưu trao đổi cành giâm và cây giống, nơi các hội viên có thể chia sẻ cây xanh cùng nhau. Cuối cùng, câu lạc bộ chúng ta có thể gửi một giỏ quà thăm hỏi đến ông Seiko để chúc ông mau chóng hồi phục sức khỏe. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ hoàn thành mục tiêu.
Cảm ơn bạn đã dành thời gian xem xét các đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.
Trân trọng,
Nam Nguyen"""
            }
        ]
    }
}

# 10. Garden club 2 (Tree Planting vs Workshop)
batch_2["Garden club 2"] = {
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
        "template": """Dear [Tên bạn],
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our city is encouraging tree planting, and our Garden Club has two proposals. I was quite excited when I found out about it. Personally, I think the gardening skills workshop is the better choice because teaching people how to grow plants creates long-lasting green spaces at home. Moreover, let's attend the workshop together this weekend!
I would love to know what you think about this. Hope to hear from you soon.
Take care,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Lựa chọn & Lý do bền vững",
                "icon": "Sparkles",
                "items": [
                    {"en": "the gardening skills workshop", "vi": "buổi workshop dạy kỹ năng làm vườn", "example": "I believe the gardening skills workshop yields greater benefits."},
                    {"en": "creates long-lasting green spaces", "vi": "tạo ra những không gian xanh lâu dài bền vững", "example": "Teaching skills empowers citizens to create sustainable green areas."},
                    {"en": "green balcony and rooftop gardens", "vi": "vườn ban công và vườn sân thượng xanh mát", "example": "Members can easily grow balcony herbs and flowers."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 81,
                "en": """Dear Anna,
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Garden Club is deciding between planting 50 park trees and hosting a gardening workshop. I was quite excited when I found out about it. Personally, I think the gardening skills workshop is much better because it empowers people to green their own balconies sustainably. Moreover, we could register together to learn how to prune bonsai!
I would love to know what you think about this. Hope to hear from you soon.
Take care,
Linh""",
                "vi": """Chào Anna,
Dạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.
Mình nghĩ bạn sẽ thích nghe tin CLB Làm vườn đang cân nhắc giữa việc trồng 50 cây ở công viên và mở lớp dạy kỹ năng làm vườn. Mình khá hào hứng khi biết tin này. Cá nhân mình thấy việc tổ chức workshop dạy kỹ năng tốt hơn nhiều vì nó giúp người dân tự phủ xanh ban công nhà mình một cách bền vững. Hơn nữa, chúng mình có thể cùng đăng ký học cách cắt tỉa cây cảnh nhé!
Mình rất muốn biết bạn nghĩ gì về việc này. Mong sớm nhận tin từ bạn.
Bảo trọng,
Linh"""
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
        "template": """Dear Club Manager,
My name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email regarding the city's green initiative and the two proposed projects. In my view, organizing a gardening skills workshop would be a far more impactful choice.
To maximize the benefits of this educational campaign, I would like to make a few suggestions. First, we should design hands-on training sessions focused on cultivating balcony gardens and caring for indoor purifying plants. Second, it would be better to distribute free starter seed kits and nutrient soil packets to all attendees. Finally, the club could initiate an online "Green Living Challenge" where participants share weekly progress photos of their homegrown plants. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Đề xuất 1: Khóa đào tạo thực hành (Hands-on Training)",
                "icon": "Sparkles",
                "items": [
                    {"en": "design hands-on training sessions", "vi": "thiết kế các buổi đào tạo thực hành trực quan", "example": "First, we should design hands-on training sessions for beginners."},
                    {"en": "cultivating balcony gardens and purifying plants", "vi": "trồng vườn ban công và các loại cây lọc không khí", "example": "Focusing on purifying plants is ideal for city apartments."}
                ]
            },
            {
                "name": "2. Đề xuất 2: Bộ quà tặng cây giống (Starter Seed Kits)",
                "icon": "CheckCircle2",
                "items": [
                    {"en": "distribute free starter seed kits and soil packets", "vi": "phát tặng miễn phí bộ hạt giống khởi đầu và gói đất dinh dưỡng", "example": "Second, it would be better to distribute free starter seed kits."},
                    {"en": "encourage immediate gardening at home", "vi": "khuyến khích việc bắt tay làm vườn ngay tại nhà", "example": "Starter kits motivate participants to apply their knowledge right away."}
                ]
            },
            {
                "name": "3. Đề xuất 3: Thử thách sống xanh trên mạng (Online Challenge)",
                "icon": "BookOpen",
                "items": [
                    {"en": "initiate an online Green Living Challenge", "vi": "khởi xướng thử thách Sống Xanh trực tuyến", "example": "Finally, the club could initiate an online Green Living Challenge."},
                    {"en": "share weekly growth milestones and tips", "vi": "chia sẻ hình ảnh quá trình lớn lên của cây và mẹo chăm sóc hàng tuần", "example": "Weekly milestones keep participants deeply connected and motivated."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 184,
                "en": """Dear Club Manager,
My name is Nam, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email regarding the tree-planting proposals encouraged by our municipal authorities. I firmly believe that organizing gardening skills workshops represents the more sustainable alternative.
To ensure the campaign achieves enduring environmental success, I would like to make a few suggestions. First, our club should organize interactive weekend seminars guiding residents on composting and cultivating vertical herb gardens. Second, it would be highly beneficial to provide each participant with complementary organic seedlings and potting instructions. Finally, we could launch a social media showcase encouraging members to document their greening progress and exchange gardening advice. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
Nam Nguyen""",
                "vi": """Kính gửi Quản lý Câu lạc bộ,
Tên tôi là Nam, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.
Tôi viết email này để hồi đáp thông báo của bạn liên quan đến các đề xuất trồng cây do chính quyền thành phố khuyến khích. Tôi tin chắc rằng việc tổ chức các buổi workshop dạy kỹ năng làm vườn là phương án bền vững và ý nghĩa hơn nhiều.
Để đảm bảo chiến dịch mang lại hiệu quả bảo vệ môi trường lâu dài, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, câu lạc bộ nên tổ chức các buổi hội thảo thực hành vào cuối tuần nhằm hướng dẫn người dân cách ủ phân hữu cơ và trồng vườn rau gia vị dạng thẳng đứng. Thứ hai, sẽ rất hữu ích nếu tặng cho mỗi người tham gia các cây giống hữu cơ miễn phí kèm bảng hướng dẫn trồng cây vào chậu. Cuối cùng, chúng ta có thể phát động một diễn đàn trên mạng xã hội khuyến khích mọi người ghi lại hành trình phủ xanh ngôi nhà của mình và trao đổi kinh nghiệm. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ hoàn thành mục tiêu.
Cảm ơn bạn đã dành thời gian xem xét đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.
Trân trọng,
Nam Nguyen"""
            }
        ]
    }
}

print("Batch 2 generated successfully!")
