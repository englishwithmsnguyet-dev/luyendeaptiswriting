# Batch 3: Sports club, Film club, Car club, Community club, Music club

batch_3 = {}

# 11. Sports club (Youth Competition)
batch_3["Sports club"] = {
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
        "template": """Dear [Tên bạn],
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Sports Club is planning a sports competition for young members. I was quite excited when I found out about it. Personally, I think we should include 5-a-side football and badminton because they are popular and thrilling. Moreover, let's form a team together and start practicing!
I would love to know what you think about this. Hope to hear from you soon.
Take care,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Môn thể thao & Tinh thần đồng đội",
                "icon": "Sparkles",
                "items": [
                    {"en": "5-a-side football and badminton", "vi": "bóng đá 5 người và cầu lông", "example": "We could organize 5-a-side football and badminton matches."},
                    {"en": "form a competitive team together", "vi": "cùng nhau lập một đội thi đấu", "example": "Let's form a competitive team together and register early."},
                    {"en": "boost physical health and team spirit", "vi": "nâng cao thể lực và tinh thần đồng đội", "example": "The tournament will boost physical health and team spirit."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 81,
                "en": """Dear Tom,
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Sports Club is planning an upcoming tournament for young members. I was quite excited when I found out about it. Personally, I think badminton and relay running would be ideal because they are dynamic and fun. Moreover, we should team up for the doubles competition!
I would love to know what you think about this. Hope to hear from you soon.
Take care,
Huy""",
                "vi": """Chào Tom,
Dạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.
Mình nghĩ bạn sẽ thích nghe tin CLB Thể thao của chúng ta đang lên kế hoạch tổ chức một giải đấu sắp tới cho các thành viên trẻ. Mình khá hào hứng khi biết tin này. Cá nhân mình nghĩ cầu lông và chạy tiếp sức sẽ rất lý tưởng vì chúng vừa sôi động vừa vui nhộn. Hơn nữa, chúng mình nên lập đội đôi để thi đấu cùng nhau nhé!
Mình rất muốn biết bạn nghĩ gì về việc này. Mong sớm nhận tin từ bạn.
Bảo trọng,
Huy"""
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
        "template": """Dear Club Manager,
My name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding the organization of the sports competition for youth members. I think this is a great idea.
To help make this competition vibrant and safe, I would like to make a few suggestions. First, we should select accessible and popular sports such as badminton, table tennis, and 5-a-side football. Second, it would be better to invite qualified physical education teachers to referee matches and ensure a dedicated medical team is on standby. Finally, we could award medals and certificates to all participants, along with fair-play trophies to encourage sportsmanship. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Đề xuất 1: Lựa chọn môn thi đấu (Sports Selection)",
                "icon": "Sparkles",
                "items": [
                    {"en": "select accessible sports like badminton and mini football", "vi": "chọn các môn dễ tiếp cận như cầu lông và bóng đá mini", "example": "First, we should feature accessible sports like badminton and mini football."},
                    {"en": "cater to various athletic abilities", "vi": "đáp ứng nhiều trình độ thể lực khác nhau", "example": "Offering diverse sports caters to various athletic abilities."}
                ]
            },
            {
                "name": "2. Đề xuất 2: An toàn y tế & Trọng tài (Safety & Refereeing)",
                "icon": "CheckCircle2",
                "items": [
                    {"en": "have a dedicated first-aid station and trained referee", "vi": "bố trí trạm sơ cứu chuyên dụng và trọng tài đào tạo bài bản", "example": "Second, it would be better to have a dedicated first-aid station on site."},
                    {"en": "ensure fair competition and participant safety", "vi": "đảm bảo tính công bằng và sự an toàn cho người thi đấu", "example": "Certified referees ensure fair play and reduce injury risks."}
                ]
            },
            {
                "name": "3. Đề xuất 3: Khen thưởng & Cổ vũ (Awards & Fair Play)",
                "icon": "BookOpen",
                "items": [
                    {"en": "award medals, certificates, and fair-play trophies", "vi": "trao huy chương, giấy khen và cúp phong cách fair-play", "example": "Finally, we could award medals and fair-play trophies to all teams."},
                    {"en": "instill values of sportsmanship and perseverance", "vi": "bồi dưỡng tinh thần thể thao cao thượng và sự kiên trì", "example": "Recognizing all participants instills true sportsmanship."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 184,
                "en": """Dear Club Manager,
My name is Nam, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding the sports tournament for our young members. I think this is a fantastic initiative.
To ensure the event runs smoothly and leaves a lasting impression, I would like to make a few suggestions. First, we should focus on high-participation sports such as 3-on-3 basketball, badminton doubles, and tug-of-war. Second, it would be highly beneficial to arrange a certified first-aid team with proper hydration stations to ensure athlete safety throughout the competition. Finally, the club should present commemorative medals, sports vouchers, and fair-play accolades to motivate every participant. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
Nam Nguyen""",
                "vi": """Kính gửi Quản lý Câu lạc bộ,
Tên tôi là Nam, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.
Tôi viết email này để chia sẻ suy nghĩ và đưa ra một vài đề xuất thực tế liên quan đến giải đấu thể thao dành cho các thành viên trẻ tuổi. Tôi nghĩ đây là một sáng kiến tuyệt vời.
Để đảm bảo sự kiện diễn ra suôn sẻ và để lại ấn tượng sâu sắc, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, chúng ta nên tập trung vào các môn thể thao thu hút đông đảo người chơi như bóng rổ 3 đấu 3, đôi cầu lông và kéo co. Thứ hai, sẽ rất bổ ích nếu bố trí một đội sơ cứu được cấp chứng chỉ cùng các trạm cấp nước uống đầy đủ để bảo vệ an toàn sức khỏe cho vận động viên trong suốt giải đấu. Cuối cùng, câu lạc bộ nên trao huy chương kỷ niệm, phiếu mua đồ thể thao và giải phong cách để khích lệ mọi người tham gia. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ đạt được mục tiêu của mình.
Cảm ơn bạn đã dành thời gian xem xét các đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.
Trân trọng,
Nam Nguyen"""
            }
        ]
    }
}

# 12. Film club (Famous Film Critic Talk)
batch_3["Film club"] = {
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
        "template": """Dear [Tên bạn],
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Film Club is inviting a famous film critic next week. I was quite excited when I found out about it. Personally, I think he should talk about behind-the-scenes secrets of blockbuster movies because everyone loves film production stories. Moreover, we must reserve front-row seats together early!
I would love to know what you think about this. Hope to hear from you soon.
Take care,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Điện ảnh & Sự kiện",
                "icon": "Sparkles",
                "items": [
                    {"en": "behind-the-scenes secrets of blockbuster movies", "vi": "những bí mật hậu trường của các bộ phim bom tấn", "example": "He could reveal behind-the-scenes secrets of blockbuster movies."},
                    {"en": "cinematic storytelling and directing tips", "vi": "nghệ thuật kể chuyện bằng hình ảnh và mẹo đạo diễn", "example": "I want to learn more about cinematic storytelling."},
                    {"en": "reserve front-row seats together", "vi": "cùng nhau đặt sớm những ghế hàng đầu", "example": "Let's reserve front-row seats before tickets run out."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 80,
                "en": """Dear Mark,
How's it going? I hope you're doing well.
I thought you'd be interested to hear that a renowned film critic is speaking at our Film Club next week. I was quite thrilled when I found out about it. Personally, I think he should discuss visual storytelling and screenwriting tips because aspiring filmmakers would love that. Moreover, let's grab dinner beforehand and attend together!
I would love to know what you think about this. Hope to hear from you soon.
Take care,
Nam""",
                "vi": """Chào Mark,
Dạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.
Mình nghĩ bạn sẽ thích nghe rằng một nhà phê bình phim nổi tiếng sẽ đến chia sẻ tại CLB Điện ảnh vào tuần tới. Mình cực kỳ phấn khích khi biết tin này. Cá nhân mình thấy anh ấy nên thảo luận về nghệ thuật kể chuyện bằng hình ảnh và mẹo viết kịch bản vì những bạn trẻ đam mê làm phim sẽ rất thích. Hơn nữa, chúng mình cùng đi ăn tối trước rồi cùng đi nhé!
Mình rất muốn biết bạn nghĩ gì. Mong sớm nhận tin từ bạn.
Bảo trọng,
Nam"""
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
        "template": """Dear Club Manager,
My name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding the upcoming talk by the famous film critic. I think this is a great idea.
To help attract a large and diverse audience, I would like to make a few suggestions. First, we should select the topic "The Secret Art of Visual Storytelling in Modern Cinema", which appeals to both casual moviegoers and film students. Second, it would be better to promote the event via short video teasers on university student fanpages and social media groups. Finally, we could organize an interactive Q&A session with free cinema vouchers awarded for the most thought-provoking questions. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Đề xuất 1: Chủ đề hấp dẫn (Captivating Topic)",
                "icon": "Sparkles",
                "items": [
                    {"en": "The Secret Art of Visual Storytelling in Modern Cinema", "vi": "Nghệ thuật Kể chuyện bằng Hình ảnh trong Điện ảnh Hiện đại", "example": "First, the critic should explore Visual Storytelling in Modern Cinema."},
                    {"en": "appeal to casual moviegoers and film students alike", "vi": "thu hút cả người xem phim đại chúng lẫn sinh viên điện ảnh", "example": "This theme bridges entertainment and academic insight."}
                ]
            },
            {
                "name": "2. Đề xuất 2: Truyền thông đa kênh (Multi-channel Promotion)",
                "icon": "CheckCircle2",
                "items": [
                    {"en": "promote the event via short video teasers on social media", "vi": "quảng bá sự kiện bằng các đoạn video ngắn trên mạng xã hội", "example": "Second, it would be better to share short video teasers on youth forums."},
                    {"en": "partner with local university media clubs", "vi": "liên kết với câu lạc bộ truyền thông các trường đại học", "example": "Campus outreach ensures high student attendance."}
                ]
            },
            {
                "name": "3. Đề xuất 3: Giao lưu & Quà tặng (Interactive Incentives)",
                "icon": "BookOpen",
                "items": [
                    {"en": "organize an interactive Q&A session with cinema vouchers", "vi": "tổ chức phần hỏi đáp tương tác kèm voucher vé xem phim", "example": "Finally, we could award cinema vouchers for insightful questions."},
                    {"en": "encourage spirited critical debate", "vi": "khuyến khích các cuộc tranh luận phản biện sôi nổi", "example": "Live interaction creates a memorable experience."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 184,
                "en": """Dear Club Manager,
My name is Nam, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding the special appearance by the acclaimed film critic next week. I think this is an exceptional opportunity.
To maximize attendance and enthusiasm, I would like to make a few suggestions. First, I propose the discussion focus on "Deciphering Hidden Cinematic Symbols in Oscar-Winning Films", which naturally sparks curiosity. Second, it would be better to launch targeted social media advertisements and collaborate with local university cinema societies to widen our reach. Finally, we could hold a movie quiz during the intermission, gifting classic film posters and cinema tickets to winners. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
Nam Nguyen""",
                "vi": """Kính gửi Quản lý Câu lạc bộ,
Tên tôi là Nam, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.
Tôi viết email này để chia sẻ góc nhìn và đưa ra một vài đề xuất thực tế liên quan đến buổi giao lưu với nhà phê bình phim danh tiếng vào tuần tới. Tôi nghĩ đây là một cơ hội vô cùng đặc biệt.
Để tối đa hóa số lượng người tham dự và sự hào hứng, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, tôi đề xuất chủ đề nói chuyện tập trung vào "Giải mã các biểu tượng điện ảnh ẩn giấu trong các bộ phim đoạt giải Oscar", một đề tài dễ khơi gợi trí tò mò của khán giả. Thứ hai, sẽ tốt hơn nếu chạy các bài quảng bá hướng đối tượng trên mạng xã hội và liên kết với các hội nhóm điện ảnh sinh viên để mở rộng tầm tiếp cận. Cuối cùng, chúng ta có thể tổ chức một trò chơi đố vui về phim ảnh trong giờ nghỉ giải lao, tặng áp phích phim kinh điển và vé xem phim cho những người thắng cuộc. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ hoàn thành mục tiêu.
Cảm ơn bạn đã dành thời gian xem xét các đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.
Trân trọng,
Nam Nguyen"""
            }
        ]
    }
}

# 13. Car club (European Road Trip)
batch_3["Car club"] = {
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
        "template": """Dear [Tên bạn],
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Car Club is invited to send two skilled representatives on a European cross-country road trip. I was quite thrilled when I found out about it. Personally, I think we should nominate Alex and David because they both have over ten years of driving experience and mechanical expertise. Moreover, let's attend the club meeting to vote for them!
I would love to know what you think about this. Hope to hear from you soon.
Take care,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Kỹ năng lái xe & Đề cử",
                "icon": "Sparkles",
                "items": [
                    {"en": "European cross-country road trip", "vi": "chuyến đi phượt xuyên Châu Âu bằng xe hơi", "example": "Participating in a European road trip is a dream experience."},
                    {"en": "extensive long-distance driving experience", "vi": "kinh nghiệm lái xe đường trường dày dạn", "example": "Both drivers have extensive long-distance driving experience."},
                    {"en": "basic mechanical troubleshooting skills", "vi": "kỹ năng xử lý sự cố máy móc cơ bản", "example": "Mechanical troubleshooting skills are crucial on remote highways."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 81,
                "en": """Dear Leo,
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Car Club has been invited to send two representatives on a road trip across Europe. I was quite excited when I found out about it. Personally, I think we should nominate Mike as driver and Sarah as co-pilot because both possess international driving permits and great navigation skills. Moreover, we should help them prepare!
I would love to know what you think about this. Hope to hear from you soon.
Take care,
Nam""",
                "vi": """Chào Leo,
Dạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.
Mình nghĩ bạn sẽ thấy hào hứng khi nghe rằng CLB Xe hơi của chúng ta được mời cử 2 đại diện tham gia chuyến hành trình lái xe xuyên Châu Âu. Mình rất phấn khích khi biết tin này. Cá nhân mình nghĩ chúng ta nên đề cử anh Mike làm lái chính và chị Sarah làm hoa tiêu vì cả hai đều có bằng lái quốc tế và kỹ năng định vị tuyệt vời. Hơn nữa, chúng mình nên hỗ trợ họ chuẩn bị nhé!
Mình rất muốn biết bạn nghĩ gì về việc này. Mong sớm nhận tin từ bạn.
Bảo trọng,
Nam"""
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
        "template": """Dear Club Manager,
My name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my nominations and practical suggestions regarding the European road tour representatives. I think this is a prestigious honor for our club.
To ensure our club is represented safely and successfully, I would like to make a few suggestions. First, I strongly recommend Mr. Michael as the primary driver, given his fifteen years of cross-border driving and valid international license. Second, it would be better to select Ms. Sarah as the co-pilot because she is fluent in European languages and possesses sound mechanical troubleshooting knowledge. Finally, we should arrange comprehensive travel insurance, vehicle diagnostics, and emergency satellite equipment prior to departure. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Đề xuất 1: Đề cử lái chính (Lead Driver)",
                "icon": "Sparkles",
                "items": [
                    {"en": "possess fifteen years of cross-border driving experience", "vi": "có 15 năm kinh nghiệm lái xe đường trường xuyên biên giới", "example": "First, Michael possesses fifteen years of cross-border driving experience."},
                    {"en": "hold a valid international driving permit", "vi": "sở hữu giấy phép lái xe quốc tế còn thời hạn", "example": "He holds a clean record and valid international driving credentials."}
                ]
            },
            {
                "name": "2. Đề xuất 2: Đề cử hoa tiêu (Co-pilot / Passenger)",
                "icon": "CheckCircle2",
                "items": [
                    {"en": "fluent in languages and expert in route navigation", "vi": "thông thạo ngoại ngữ và chuyên gia dẫn đường", "example": "Second, Sarah is fluent in French and German and expert in navigation."},
                    {"en": "sound mechanical troubleshooting skills", "vi": "kỹ năng chẩn đoán sự cố cơ khí thành thạo", "example": "Her mechanical knowledge allows immediate roadside repairs if necessary."}
                ]
            },
            {
                "name": "3. Đề xuất 3: An toàn & Hậu cần (Safety & Logistics)",
                "icon": "BookOpen",
                "items": [
                    {"en": "arrange comprehensive insurance and satellite GPS", "vi": "thu xếp bảo hiểm toàn diện và thiết bị định vị vệ tinh", "example": "Finally, we must secure comprehensive travel insurance and satellite GPS."},
                    {"en": "conduct full vehicle inspection before departure", "vi": "kiểm tra kỹ thuật xe hơi toàn diện trước ngày khởi hành", "example": "A rigorous vehicle check guarantees flawless reliability."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 184,
                "en": """Dear Club Manager,
My name is Nam, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your announcement regarding the European cross-country expedition. I think sending a two-person delegation is a magnificent showcase for our club.
To ensure peak safety and outstanding performance throughout the journey, I would like to make a few suggestions. First, I nominate Mr. Robert as the lead driver because he holds an international driving license and has completed numerous alpine road rallies. Second, it would be ideal to appoint Ms. Elena as his co-pilot, as she is a certified automotive technician with fluent multilingual communication skills. Finally, the club should provide them with high-grade navigation tools, emergency toolkits, and comprehensive medical coverage. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
Nam Nguyen""",
                "vi": """Kính gửi Quản lý Câu lạc bộ,
Tên tôi là Nam, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.
Tôi viết email này để hồi đáp thông báo của bạn liên quan đến chuyến hành trình lái xe xuyên Châu Âu. Tôi nghĩ việc cử một phái đoàn 2 thành viên là cơ hội tuyệt vời để khẳng định vị thế của câu lạc bộ chúng ta.
Để đảm bảo an toàn tối đa và đạt thành tích xuất sắc trong suốt hành trình, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, tôi xin đề cử anh Robert làm người lái chính vì anh có bằng lái quốc tế và đã từng hoàn thành nhiều chặng đua đường đèo hiểm trở. Thứ hai, sẽ rất lý tưởng nếu cử chị Elena làm bạn đồng hành/hoa tiêu, bởi chị là chuyên viên kỹ thuật ô tô và giao tiếp đa ngôn ngữ rất lưu loát. Cuối cùng, câu lạc bộ nên trang bị cho họ các thiết bị định vị cao cấp, bộ dụng cụ sửa chữa khẩn cấp và gói bảo hiểm y tế toàn diện. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ hoàn thành mục tiêu.
Cảm ơn bạn đã dành thời gian xem xét đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.
Trân trọng,
Nam Nguyen"""
            }
        ]
    }
}

# 14. Community club (Recruit Members & Activities)
batch_3["Community club"] = {
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
        "template": """Dear [Tên bạn],
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Community Club is recruiting new members and seeking creative project ideas. I was quite excited when I found out about it. Personally, I think we should organize a neighborhood recycling drive and charity garage sale because they directly help vulnerable families. Moreover, would you like to join the club with me?
I would love to know what you think about this. Hope to hear from you soon.
Take care,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Hoạt động tình nguyện & Ý tưởng",
                "icon": "Sparkles",
                "items": [
                    {"en": "neighborhood recycling drive and garage sale", "vi": "ngày hội thu gom rác tái chế và bán đồ cũ từ thiện", "example": "A recycling drive and garage sale raises funds quickly."},
                    {"en": "support disadvantaged children and elderly residents", "vi": "hỗ trợ trẻ em có hoàn cảnh khó khăn và người già neo đơn", "example": "These projects support disadvantaged local residents."},
                    {"en": "meaningful community impact", "vi": "tác động cộng đồng đầy ý nghĩa", "example": "Volunteering brings meaningful community impact."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 81,
                "en": """Dear Chloe,
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Community Club is launching a membership drive and seeking fresh activity ideas. I was quite thrilled when I found out about it. Personally, I think we should organize weekly free tutoring for disadvantaged children because education brings lasting change. Moreover, let's register as volunteer mentors together!
I would love to know what you think about this. Hope to hear from you soon.
Take care,
Nam""",
                "vi": """Chào Chloe,
Dạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.
Mình nghĩ bạn sẽ quan tâm khi nghe tin CLB Cộng đồng đang phát động chiến dịch tuyển thành viên và tìm kiếm ý tưởng hoạt động mới mẻ. Mình khá hào hứng khi biết tin này. Cá nhân mình nghĩ chúng ta nên tổ chức các lớp dạy kèm miễn phí hàng tuần cho trẻ em có hoàn cảnh khó khăn vì giáo dục mang lại sự thay đổi lâu dài. Hơn nữa, chúng mình cùng nhau đăng ký làm gia sư tình nguyện nhé!
Mình rất muốn biết bạn nghĩ sao về việc này. Mong sớm nhận tin từ bạn.
Bảo trọng,
Nam"""
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
        "template": """Dear Club Manager,
My name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding member recruitment and innovative community initiatives. I think this is an essential step forward.
To help expand our membership and enhance our community impact, I would like to make a few suggestions. First, we should partner with local high schools and universities to establish youth volunteer chapters, offering certificates of recognition. Second, it would be better to launch an "Eco-Exchange" program where citizens trade recyclable plastics and paper for potted plants. Finally, we could organize monthly family community dinners to connect residents and raise charitable funds. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Đề xuất 1: Liên kết trường học (Youth Outreach)",
                "icon": "Sparkles",
                "items": [
                    {"en": "partner with local schools and universities", "vi": "hợp tác với các trường phổ thông và đại học địa phương", "example": "First, we should partner with universities to recruit energetic youth."},
                    {"en": "award official certificates of community service", "vi": "trao giấy chứng nhận hoạt động cộng đồng chính thức", "example": "Certificates help students boost their university and job applications."}
                ]
            },
            {
                "name": "2. Đề xuất 2: Đổi rác lấy cây (Eco-Exchange Initiative)",
                "icon": "CheckCircle2",
                "items": [
                    {"en": "launch an Eco-Exchange program trading waste for plants", "vi": "phát động chương trình đổi phế liệu lấy cây xanh", "example": "Second, it would be better to launch an Eco-Exchange program."},
                    {"en": "raise environmental awareness among citizens", "vi": "nâng cao nhận thức bảo vệ môi trường trong cộng đồng", "example": "Trading plastic for plants engages thousands of residents."}
                ]
            },
            {
                "name": "3. Đề xuất 3: Bữa tối thiện nguyện gia đình (Charity Dinners)",
                "icon": "BookOpen",
                "items": [
                    {"en": "organize monthly community charity banquets", "vi": "tổ chức tiệc tối cộng đồng gây quỹ từ thiện hàng tháng", "example": "Finally, we could organize monthly charity banquets."},
                    {"en": "foster strong neighborhood solidarity and funding", "vi": "thúc đẩy tình đoàn kết xóm giềng và nguồn quỹ dồi dào", "example": "Shared meals build lasting neighborhood solidarity."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 185,
                "en": """Dear Club Manager,
My name is Nam, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding member recruitment and activity development. I think this is an essential initiative.
To attract enthusiastic newcomers and strengthen our social impact, I would like to make a few suggestions. First, we should establish a digital outreach campaign across university portals, emphasizing verified community service hours for student volunteers. Second, it would be highly effective to launch a "Green Saturday" clean-up campaign coupled with an eco-craft fair to showcase our club's vitality. Finally, we could create mentoring circles where experienced members guide junior volunteers in organizing grassroots charity drives. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
Nam Nguyen""",
                "vi": """Kính gửi Quản lý Câu lạc bộ,
Tên tôi là Nam, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.
Tôi viết email này để hồi đáp thông báo của bạn nhằm chia sẻ suy nghĩ và đưa ra một vài đề xuất thực tế liên quan đến việc tuyển thêm hội viên và phát triển các hoạt động. Tôi nghĩ đây là một sáng kiến hết sức cần thiết.
Để thu hút những gương mặt mới nhiệt huyết và nâng cao tác động xã hội của chúng ta, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, chúng ta nên triển khai một chiến dịch truyền thông trực tuyến qua các diễn đàn sinh viên đại học, nhấn mạnh việc cấp chứng nhận giờ tình nguyện cộng đồng chính quy. Thứ hai, sẽ rất hiệu quả nếu tổ chức chương trình dọn dẹp vệ sinh "Thứ Bảy Xanh" kết hợp hội chợ đồ tái chế thủ công để lan tỏa sức sống của câu lạc bộ. Cuối cùng, chúng ta có thể thành lập các nhóm hướng dẫn, nơi các hội viên kỳ cựu đồng hành cùng các tình nguyện viên trẻ tổ chức các dự án từ thiện thiết thực. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ hoàn thành mục tiêu.
Cảm ơn bạn đã dành thời gian xem xét các đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.
Trân trọng,
Nam Nguyen"""
            }
        ]
    }
}

# 15. Music club (Concert Noise Complaints)
batch_3["Music club"] = {
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
        "template": """Dear [Tên bạn],
How's it going? I hope you're doing well.
I thought you'd be interested to hear that neighbors have complained about noise from our evening concerts, and they might be canceled. I was quite concerned when I found out about it. Personally, I think we should switch to acoustic unplugged music and wrap up by 9:00 PM to respect local residents. Moreover, let's attend the emergency club meeting together!
I would love to know what you think about this. Hope to hear from you soon.
Take care,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Tiếng ồn & Giải pháp âm nhạc",
                "icon": "Sparkles",
                "items": [
                    {"en": "switch to acoustic unplugged music", "vi": "chuyển sang biểu diễn nhạc mộc không cắm điện công suất lớn", "example": "Switching to acoustic music significantly lowers volume levels."},
                    {"en": "wrap up performances before 9:00 PM", "vi": "kết thúc các màn biểu diễn trước 9:00 tối", "example": "Finishing early avoids disturbing residents' sleep."},
                    {"en": "respect neighbors and avoid noise pollution", "vi": "tôn trọng cư dân láng giềng và tránh ô nhiễm tiếng ồn", "example": "We must respect neighbors and minimize sound leakage."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 81,
                "en": """Dear Jack,
How's it going? I hope you're doing well.
I thought you'd be interested to hear that local residents have complained about noise during our evening concerts, putting future gigs at risk. I was quite worried when I found out about it. Personally, I think we should lower the amplification volume and transition to soothing acoustic sets. Moreover, we could invite our neighbors to a free friendly concert!
I would love to know what you think about this. Hope to hear from you soon.
Take care,
Nam""",
                "vi": """Chào Jack,
Dạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.
Mình nghĩ bạn sẽ lo lắng khi nghe tin người dân địa phương đã phàn nàn về tiếng ồn trong các buổi hòa nhạc buổi tối, khiến các đêm diễn tương lai có nguy cơ bị hủy bỏ. Mình khá lo lắng khi biết tin này. Cá nhân mình thấy chúng ta nên giảm âm lượng loa và chuyển hướng sang các tiết mục acoustic nhẹ nhàng. Hơn nữa, chúng mình có thể mời cư dân xung quanh đến xem một buổi diễn tri ân miễn phí!
Mình rất muốn biết bạn nghĩ gì về việc này. Mong sớm nhận tin từ bạn.
Bảo trọng,
Nam"""
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
        "template": """Dear Club Manager,
My name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email regarding the recent noise complaints from nearby residents. I fully acknowledge that this is a critical issue that requires prompt remediation.
To preserve our musical performances while maintaining harmonious neighborhood relations, I would like to make a few suggestions. First, we should install soundproofing acoustic curtains and foam panels around our performance hall to prevent sound leakage. Second, it would be better to reschedule all live performances to conclude no later than 9:30 PM on weekdays. Finally, we could introduce unplugged acoustic genres and invite neighboring residents to complimentary coffee recitals. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Đề xuất 1: Cách âm phòng hòa nhạc (Soundproofing)",
                "icon": "Sparkles",
                "items": [
                    {"en": "install soundproofing acoustic foam and heavy curtains", "vi": "lắp đặt mút tiêu âm và rèm dày cản tiếng ồn", "example": "First, we should install acoustic foam and heavy soundproof curtains."},
                    {"en": "prevent severe sound leakage through walls", "vi": "ngăn chặn tình trạng rò rỉ âm thanh qua các bức tường", "example": "Proper insulation drastically reduces decibel levels outside."}
                ]
            },
            {
                "name": "2. Đề xuất 2: Giờ giấc hợp lý (Adjust Showtime)",
                "icon": "CheckCircle2",
                "items": [
                    {"en": "conclude all performances before 9:30 PM", "vi": "kết thúc tất cả các buổi biểu diễn trước 9:30 tối", "example": "Second, it would be better to conclude all concerts before 9:30 PM."},
                    {"en": "respect residents' rest and nighttime tranquility", "vi": "tôn trọng thời gian nghỉ ngơi và sự yên tĩnh về đêm của cư dân", "example": "Ending early shows our consideration for families with small children."}
                ]
            },
            {
                "name": "3. Đề xuất 3: Nhạc mộc & Hòa giải (Acoustic Sets & Outreach)",
                "icon": "BookOpen",
                "items": [
                    {"en": "transition to acoustic and classical unplugged sets", "vi": "chuyển sang các bài diễn nhạc mộc acoustic và cổ điển", "example": "Finally, we could feature softer acoustic and jazz sets."},
                    {"en": "invite neighbors to complimentary tea concerts", "vi": "mời người dân hàng xóm đến thưởng thức các buổi hòa nhạc tiệc trà miễn phí", "example": "Goodwill gestures transform dissatisfied neighbors into loyal club supporters."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 185,
                "en": """Dear Club Manager,
My name is Nam, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email regarding the noise disturbances reported by nearby residents. I fully recognize that resolving this grievance is paramount to ensuring our club's continuous operation.
To mitigate noise concerns while preserving our vibrant musical culture, I would like to make a few suggestions. First, our club should invest in acoustic wall insulation and double-glazed windows to effectively contain excessive sound. Second, it would be beneficial to enforce strict volume limits on electric amplifiers and ensure concerts finish promptly by 9:15 PM. Finally, we could host an informal community appreciation matinée on Sunday afternoons to foster goodwill with local homeowners. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
Nam Nguyen""",
                "vi": """Kính gửi Quản lý Câu lạc bộ,
Tên tôi là Nam, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.
Tôi viết email này để hồi đáp phản ánh của bạn liên quan đến các khiếu nại về tiếng ồn từ cư dân xung quanh. Tôi hoàn toàn nhận thức được rằng việc giải quyết dứt điểm vấn đề này là tối quan trọng để duy trì hoạt động lâu dài của câu lạc bộ.
Để giảm thiểu tiếng ồn trong khi vẫn gìn giữ không gian âm nhạc sôi động, tôi xin phép đưa ra một vài đề xuất. Thứ nhất, câu lạc bộ nên đầu tư vật liệu cách âm trên tường và cửa kính hai lớp để ngăn chặn hiệu quả việc phát tán âm thanh ra ngoài. Thứ hai, sẽ rất hữu ích nếu thiết lập mức giới hạn âm lượng nghiêm ngặt đối với loa ampli và đảm bảo các buổi diễn kết thúc đúng 9:15 tối. Cuối cùng, chúng ta có thể tổ chức buổi hòa nhạc tri ân cộng đồng nhẹ nhàng vào chiều Chủ Nhật để tạo dựng mối quan hệ hòa nhã với các gia đình lân cận. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ hoàn thành mục tiêu.
Cảm ơn bạn đã dành thời gian xem xét đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.
Trân trọng,
Nam Nguyen"""
            }
        ]
    }
}

print("Batch 3 generated successfully!")
