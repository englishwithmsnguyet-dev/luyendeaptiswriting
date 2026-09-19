# Batch 4: English club 1, English club 2, Book club 1, Book club 2

batch_4 = {}

# 16. English club 1 (Talk Show Canceled)
batch_4["English club 1"] = {
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
        "template": """Dear [Tên bạn],
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our English Club's talk show has been canceled because the speakers are busy, and there's no meeting this week. I was quite disappointed when I found out about it. Personally, I think we should meet at our favorite coffee shop to practice English conversation together anyway. Moreover, let's invite two other club members!
I would love to know what you think about this. Hope to hear from you soon.
Take care,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Cảm xúc & Kế hoạch tự luyện",
                "icon": "Sparkles",
                "items": [
                    {"en": "quite disappointed", "vi": "khá thất vọng", "example": "I was quite disappointed when the talk show was called off."},
                    {"en": "meet at a coffee shop for conversation", "vi": "gặp nhau ở quán cà phê để luyện hội thoại", "example": "Let's meet at a cozy cafe to practice speaking."},
                    {"en": "keep our study momentum alive", "vi": "giữ vững động lực học tập liên tục", "example": "Practicing regularly keeps our study momentum alive."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 81,
                "en": """Dear Sarah,
How's it going? I hope you're doing well.
I thought you'd be interested to hear that this week's English talk show was abruptly canceled due to busy guests. I was quite disappointed when I found out about it as I had prepared several questions. Personally, I think we shouldn't waste our Saturday and should practice IELTS speaking together at Starbucks instead. Moreover, I can bring some topic flashcards!
I would love to know what you think about this. Hope to hear from you soon.
Take care,
Nam""",
                "vi": """Chào Sarah,
Dạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.
Mình nghĩ bạn sẽ muốn biết tin buổi talk show tiếng Anh tuần này vừa bị hủy đột xuất vì các khách mời bận việc. Mình khá hụt hẫng khi biết tin vì mình đã chuẩn bị sẵn một số câu hỏi thú vị. Cá nhân mình nghĩ chúng mình không nên lãng phí buổi sáng thứ Bảy mà hãy cùng nhau ra Starbucks luyện nói IELTS nhé. Hơn nữa, mình có thể mang theo một số thẻ chủ đề flashcard!
Mình rất muốn biết bạn nghĩ gì. Mong sớm nhận được tin từ bạn.
Bảo trọng,
Nam"""
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
        "template": """Dear Club Manager,
My name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email regarding the sudden cancellation of this week's Talk Show. While I understand that unexpected scheduling conflicts arise, I believe that canceling the entire meeting is regrettable.
To prevent similar disruptions in the future and maintain active club participation, I would like to make a few suggestions. First, our management team should always maintain a roster of backup speakers from our senior alumni or university lecturers. Second, it would be better to organize peer-led English debates or vocabulary games whenever a guest speaker cancels, ensuring members still benefit from practice. Finally, the club should establish a prompt SMS or instant-messaging notification channel to alert members well in advance. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Đề xuất 1: Danh sách diễn giả dự bị (Backup Roster)",
                "icon": "Sparkles",
                "items": [
                    {"en": "maintain a roster of standby guest speakers", "vi": "duy trì một danh sách các diễn giả dự phòng", "example": "First, the club should maintain a roster of standby guest speakers."},
                    {"en": "invite competent senior club alumni", "vi": "mời các cựu hội viên xuất sắc có năng lực", "example": "Senior alumni are always ready to share practical experiences."}
                ]
            },
            {
                "name": "2. Đề xuất 2: Hoạt động thay thế (Alternative Sessions)",
                "icon": "CheckCircle2",
                "items": [
                    {"en": "organize peer-led debates and language games", "vi": "tổ chức các buổi tranh biện và trò chơi ngôn ngữ do thành viên chủ trì", "example": "Second, it would be better to run peer-led debates instead of canceling."},
                    {"en": "prevent wasting members' scheduled weekend time", "vi": "tránh lãng phí thời gian cuối tuần đã lên lịch của hội viên", "example": "Alternative activities ensure members continue speaking English."}
                ]
            },
            {
                "name": "3. Đề xuất 3: Quy trình thông báo khẩn (Communication Protocol)",
                "icon": "BookOpen",
                "items": [
                    {"en": "establish a dedicated instant notification channel", "vi": "thiết lập kênh thông báo khẩn tức thì", "example": "Finally, we need an instant notification channel for urgent news."},
                    {"en": "apologize professionally and offer compensation credits", "vi": "xin lỗi chuyên nghiệp và có chính sách bù đắp phù hợp", "example": "Timely updates demonstrate professional event management."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 186,
                "en": """Dear Club Manager,
My name is Nam, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email regarding the last-minute cancellation of our scheduled Talk Show. While I understand that prominent guests can face sudden emergencies, I believe calling off the weekly session damages member enthusiasm.
To avoid complete session cancellations in future occurrences, I would like to make a few suggestions. First, the organizing committee should formulate a contingency roster of experienced club seniors or local teachers who can step in on short notice. Second, it would be highly effective to replace canceled lectures with structured group debates or interactive English board games. Finally, the club should implement a dedicated chat group to deliver timely updates and gather member feedback. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
Nam Nguyen""",
                "vi": """Kính gửi Quản lý Câu lạc bộ,
Tên tôi là Nam, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.
Tôi viết email này để hồi đáp thông báo liên quan đến việc hủy buổi Talk Show vào phút chót. Mặc dù tôi thấu hiểu rằng các khách mời nổi tiếng có thể gặp phải lịch trình khẩn cấp, nhưng tôi tin rằng việc hủy bỏ toàn bộ buổi sinh hoạt tuần này sẽ làm giảm sút sự hào hứng của các hội viên.
Để tránh việc phải hủy bỏ hoàn toàn các buổi sinh hoạt trong tương lai, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, ban tổ chức nên xây dựng danh sách các diễn giả dự phòng gồm các cựu thành viên kỳ cựu hoặc giáo viên địa phương, những người có thể sẵn sàng hỗ trợ khi nhận thông báo gấp. Thứ hai, sẽ rất hiệu quả nếu thay thế buổi thuyết trình bị hủy bằng các phiên tranh biện theo nhóm hoặc trò chơi cờ bàn tiếng Anh tương tác. Cuối cùng, câu lạc bộ nên vận hành một kênh tin nhắn tức thì để cập nhật thông tin kịp thời và lắng nghe phản hồi của hội viên. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ hoàn thành mục tiêu.
Cảm ơn bạn đã dành thời gian xem xét đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.
Trân trọng,
Nam Nguyen"""
            }
        ]
    }
}

# 17. English club 2 (Benefits of English Talk Show)
batch_4["English club 2"] = {
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
        "template": """Dear [Tên bạn],
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our English Club is sponsoring a talk show about the benefits of English to attract new members. I was quite excited when I found out about it. Personally, I think the speaker should focus on global job opportunities and overseas study scholarships. Moreover, let's invite our classmates to attend together!
I would love to know what you think about this. Hope to hear from you soon.
Take care,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Lợi ích tiếng Anh & Cơ hội",
                "icon": "Sparkles",
                "items": [
                    {"en": "global career opportunities and scholarships", "vi": "cơ hội việc làm toàn cầu và học bổng du học", "example": "English unlocks global career opportunities and scholarships."},
                    {"en": "overcome communication hesitation", "vi": "vượt qua sự e ngại, rụt rè trong giao tiếp", "example": "A good talk show helps beginners overcome communication hesitation."},
                    {"en": "gain competitive edge in job market", "vi": "có được lợi thế cạnh tranh trên thị trường tuyển dụng", "example": "Fluency gives graduates a competitive edge."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 81,
                "en": """Dear Lisa,
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our English Club is hosting a sponsored seminar discussing the benefits of English proficiency. I was quite excited when I found out about it. Personally, I think the talk should highlight multinational employment and remote work opportunities because that directly interests university students. Moreover, let's register early to secure seats!
I would love to know what you think about this. Hope to hear from you soon.
Take care,
Nam""",
                "vi": """Chào Lisa,
Dạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.
Mình nghĩ bạn sẽ rất quan tâm khi nghe tin CLB Tiếng Anh sắp tổ chức một buổi tọa đàm về lợi ích của việc thành thạo tiếng Anh. Mình khá hào hứng khi biết tin này. Cá nhân mình thấy bài thuyết trình nên nhấn mạnh cơ hội làm việc tại các tập đoàn đa quốc gia và làm việc từ xa vì điều đó trực tiếp thu hút sinh viên. Hơn nữa, chúng mình cùng đăng ký sớm để giữ chỗ nhé!
Mình rất muốn biết bạn nghĩ gì. Mong sớm nhận được tin từ bạn.
Bảo trọng,
Nam"""
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
        "template": """Dear Club Manager,
My name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my perspective regarding the upcoming talk show on the benefits of mastering English. I think this is an excellent initiative to recruit new members.
To ensure the event achieves outstanding engagement, I would like to make a few suggestions. First, I propose the lecture topic "English as a Passport to Global Careers and Academic Excellence", focusing on tangible career advantages. Second, it would be better to invite a dynamic bilingual guest speaker who possesses proven international experience and engaging storytelling abilities rather than pure academic theory. Finally, we could incorporate an interactive networking segment where attendees test their pronunciation with AI tools and win trial club memberships. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Đề xuất 1: Chủ đề bài nói (Practical Lecture Theme)",
                "icon": "Sparkles",
                "items": [
                    {"en": "English as a Passport to Global Careers", "vi": "Tiếng Anh như tấm hộ chiếu đến với sự nghiệp toàn cầu", "example": "First, the lecture should explore English as a Passport to Global Careers."},
                    {"en": "focus on tangible professional and financial advantages", "vi": "tập trung vào lợi ích cụ thể về sự nghiệp và thu nhập", "example": "Highlighting tangible benefits persuades young people to invest in learning."}
                ]
            },
            {
                "name": "2. Đề xuất 2: Tiêu chí chọn diễn giả (Speaker Criteria)",
                "icon": "CheckCircle2",
                "items": [
                    {"en": "dynamic bilingual professional with engaging storytelling", "vi": "chuyên gia song ngữ năng động với khả năng kể chuyện cuốn hút", "example": "Second, the guest speaker should be a dynamic bilingual professional."},
                    {"en": "inspire confidence and authentic personal anecdotes", "vi": "truyền cảm hứng tự tin và chia sẻ câu chuyện người thật việc thật", "example": "Relatable stories break down language barriers."}
                ]
            },
            {
                "name": "3. Đề xuất 3: Tương tác & Khuyến khích (Interactive Engagement)",
                "icon": "BookOpen",
                "items": [
                    {"en": "incorporate interactive pronunciation games and prizes", "vi": "kết hợp trò chơi phát âm tương tác và trao quà", "example": "Finally, we could feature pronunciation mini-games with free club passes."},
                    {"en": "convert casual attendees into committed members", "vi": "chuyển đổi người tham dự vãng lai thành hội viên gắn bó", "example": "Engaging activities convert casual listeners into regular members."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 185,
                "en": """Dear Club Manager,
My name is Nam, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding the sponsored seminar on the multifaceted benefits of English. I think this is a timely initiative.
To maximize the seminar's impact and appeal, I would like to make a few suggestions. First, the presentation should center on "Unlocking International Horizons: English for Workplace Mobility", providing concrete evidence of salary growth and study-abroad prospects. Second, our ideal guest speaker should be an energetic professional who successfully transitioned from a beginner to an executive at a multinational firm. Finally, the event should feature a lively Q&A session where participants receive personalized speaking roadmaps and complimentary club passes. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
Nam Nguyen""",
                "vi": """Kính gửi Quản lý Câu lạc bộ,
Tên tôi là Nam, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.
Tôi viết email này để chia sẻ suy nghĩ và đưa ra một vài đề xuất thực tế liên quan đến buổi tọa đàm được tài trợ về những lợi ích đa dạng của tiếng Anh. Tôi nghĩ đây là một sáng kiến hết sức kịp thời.
Để tối đa hóa sức hút và tác động của buổi hội thảo, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, bài thuyết trình nên tập trung vào chủ đề "Mở khóa những chân trời quốc tế: Tiếng Anh cho sự thăng tiến nơi công sở", đưa ra các minh chứng cụ thể về gia tăng thu nhập và triển vọng du học. Thứ hai, diễn giả lý tưởng nên là một người đi làm năng động từng tự mình vượt khó từ mất gốc tiếng Anh để trở thành quản lý cấp cao tại tập đoàn đa quốc gia. Cuối cùng, sự kiện nên có phần hỏi đáp sôi nổi, nơi người tham dự được tư vấn lộ trình luyện nói cá nhân hóa và nhận thẻ sinh hoạt câu lạc bộ miễn phí. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ hoàn thành mục tiêu.
Cảm ơn bạn đã dành thời gian xem xét các đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.
Trân trọng,
Nam Nguyen"""
            }
        ]
    }
}

# 18. Book club 1 (Invite Famous Author)
batch_4["Book club 1"] = {
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
        "template": """Dear [Tên bạn],
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Book Club is inviting a famous author to host an event for both youth and seniors. I was quite excited when I found out about it. Personally, I think we should invite author Nguyen Nhat Anh to talk about childhood memories and family bonds because his heartwarming books touch all generations. Moreover, let's bring our copies to get them signed!
I would love to know what you think about this. Hope to hear from you soon.
Take care,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Sách & Gắn kết thế hệ",
                "icon": "Sparkles",
                "items": [
                    {"en": "heartwarming books touching all generations", "vi": "những cuốn sách ấm áp chạm đến trái tim của mọi thế hệ", "example": "His heartwarming stories touch readers of all ages."},
                    {"en": "childhood memories and family nostalgia", "vi": "ký ức tuổi thơ và tình cảm gia đình hoài niệm", "example": "Childhood memories resonate strongly across generations."},
                    {"en": "get our favorite copies personally signed", "vi": "được tác giả ký tặng trực tiếp vào cuốn sách yêu thích", "example": "We can bring our books to get them personally signed."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 81,
                "en": """Dear Trang,
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our Book Club plans to host a meet-and-greet with a celebrated author for readers of all ages. I was quite thrilled when I found out about it. Personally, I think inviting writer Nguyen Nhat Anh to discuss nostalgic youth memories would be wonderful. Moreover, let's bring our books early to get author autographs!
I would love to know what you think about this. Hope to hear from you soon.
Take care,
Nam""",
                "vi": """Chào Trang,
Dạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.
Mình nghĩ bạn sẽ thích nghe tin CLB Sách đang dự định tổ chức buổi giao lưu với một nhà văn nổi tiếng dành cho độc giả mọi lứa tuổi. Mình khá hào hứng khi biết tin này. Cá nhân mình thấy việc mời nhà văn Nguyễn Nhật Ánh chia sẻ về những ký ức thanh xuân hoài niệm sẽ vô cùng tuyệt vời. Hơn nữa, chúng mình cùng mang sách đến sớm để xin chữ ký tác giả nhé!
Mình rất muốn biết bạn nghĩ gì về việc này. Mong sớm nhận tin từ bạn.
Bảo trọng,
Nam"""
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
        "template": """Dear Club Manager,
My name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my recommendations regarding the author invitation event designed for both young and senior readers. I think this is a great idea.
To foster deep intergenerational engagement, I would like to make a few suggestions. First, we should invite an acclaimed author known for emotional life memoirs and coming-of-age literature, which naturally appeal to adolescents and grandparents alike. Second, it would be better to select the topic "The Timeless Joy of Reading and Bridging Generational Divides". Finally, we could organize an exclusive book-signing session alongside an informal tea circle where attendees share favorite excerpts. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Đề xuất 1: Đề cử tác giả (Beloved Author)",
                "icon": "Sparkles",
                "items": [
                    {"en": "invite an acclaimed author of life memoirs", "vi": "mời một nhà văn danh tiếng chuyên viết hồi ký cuộc đời", "example": "First, we should invite an author celebrated for touching life memoirs."},
                    {"en": "appeal to adolescents and grandparents alike", "vi": "thu hút từ thanh thiếu niên đến ông bà lớn tuổi", "example": "Memoir literature effortlessly connects diverse age demographics."}
                ]
            },
            {
                "name": "2. Đề xuất 2: Chủ đề kết nối (Intergenerational Topic)",
                "icon": "CheckCircle2",
                "items": [
                    {"en": "The Timeless Joy of Reading across Generations", "vi": "Niềm vui bất tận của việc đọc sách qua các thế hệ", "example": "Second, the topic should explore reading as a bridge across generations."},
                    {"en": "bridge generational divides through storytelling", "vi": "xóa nhòa khoảng cách thế hệ thông qua nghệ thuật kể chuyện", "example": "Storytelling fosters empathy between parents and teenagers."}
                ]
            },
            {
                "name": "3. Đề xuất 3: Ký tặng & Trà đàm (Book-signing & Tea)",
                "icon": "BookOpen",
                "items": [
                    {"en": "organize a book-signing session and tea circle", "vi": "tổ chức buổi ký tặng sách và vòng tròn trà đàm giao lưu", "example": "Finally, we could host an intimate book-signing and tea circle."},
                    {"en": "share memorable excerpts and personal life lessons", "vi": "chia sẻ những trích đoạn đáng nhớ và bài học cuộc sống", "example": "Sharing excerpts deepens reader connection with the author."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 185,
                "en": """Dear Club Manager,
My name is Nam, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email to share my thoughts and offer several practical suggestions regarding our upcoming literary event featuring a celebrated guest author. I think this is a fantastic initiative.
To bridge our club's diverse age demographics, I would like to make a few suggestions. First, I propose inviting a beloved national novelist whose works depict nostalgic family memories and coming-of-age struggles, captivating both teenagers and retirees. Second, it would be ideal to explore the theme "Reading as an Emotional Anchor in Fast-Paced Modern Times". Finally, the event could conclude with an interactive author Q&A and a communal book exchange corner. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
Nam Nguyen""",
                "vi": """Kính gửi Quản lý Câu lạc bộ,
Tên tôi là Nam, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.
Tôi viết email này để chia sẻ suy nghĩ và đưa ra một vài đề xuất thực tế liên quan đến sự kiện văn học sắp tới cùng tác giả khách mời nổi tiếng. Tôi nghĩ đây là một sáng kiến vô cùng tuyệt vời.
Để kết nối các nhóm độ tuổi đa dạng trong câu lạc bộ, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, tôi đề xuất mời một tiểu thuyết gia quốc dân được yêu mến, người có các tác phẩm khắc họa ký ức gia đình và hành trình trưởng thành, vốn thu hút cả giới trẻ lẫn người lớn tuổi. Thứ hai, sẽ rất lý tưởng nếu chủ đề buổi nói chuyện xoay quanh "Đọc sách như điểm tựa tinh thần giữa nhịp sống hiện đại hối hả". Cuối cùng, sự kiện có thể khép lại bằng phần giao lưu hỏi đáp với tác giả và một góc trao đổi sách cũ cộng đồng. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ hoàn thành mục tiêu.
Cảm ơn bạn đã dành thời gian xem xét các đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.
Trân trọng,
Nam Nguyen"""
            }
        ]
    }
}

# 19. Book club 2 (Library Closure & E-books)
batch_4["Book club 2"] = {
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
        "template": """Dear [Tên bạn],
How's it going? I hope you're doing well.
I thought you'd be interested to hear that local authorities are planning to shut down our library next year because of online e-books. I was quite shocked and upset when I found out about it. Personally, I think the library is an irreplaceable quiet sanctuary that screens cannot replace. Moreover, let's sign the community petition to save it!
I would love to know what you think about this. Hope to hear from you soon.
Take care,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Cảm xúc & Giá trị thư viện truyền thống",
                "icon": "Sparkles",
                "items": [
                    {"en": "quite shocked and upset", "vi": "khá sốc và buồn bã", "example": "I was quite shocked and upset by the closure news."},
                    {"en": "an irreplaceable community sanctuary", "vi": "một chốn tĩnh lặng vô giá của cộng đồng", "example": "The library is an irreplaceable quiet sanctuary."},
                    {"en": "screens cannot replace physical books", "vi": "màn hình điện tử không thể thay thế sách in truyền thống", "example": "Screens cannot replace the authentic tactile joy of physical books."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 81,
                "en": """Dear David,
How's it going? I hope you're doing well.
I thought you'd be interested to hear that our public library faces closure next year as people shift to online reading. I was quite saddened when I found out about it. Personally, I think the library remains a vital intellectual sanctuary for students, seniors, and underprivileged children who lack internet access. Moreover, we must organize a book drive to revitalize it!
I would love to know what you think about this. Hope to hear from you soon.
Take care,
Nam""",
                "vi": """Chào David,
Dạo này thế nào rồi? Mình hy vọng bạn vẫn khỏe.
Mình nghĩ bạn sẽ quan tâm khi biết thư viện công cộng của chúng ta có nguy cơ đóng cửa vào năm tới do mọi người chuyển sang đọc sách trực tuyến. Mình khá buồn khi biết tin này. Cá nhân mình thấy thư viện vẫn là không gian học tập vô giá cho học sinh, người cao tuổi và trẻ em khó khăn không có điều kiện tiếp cận internet. Hơn nữa, chúng mình hãy cùng nhau quyên góp sách để làm mới thư viện nhé!
Mình rất muốn biết bạn nghĩ gì. Mong sớm nhận tin từ bạn.
Bảo trọng,
Nam"""
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
        "template": """Dear Club Manager,
My name is [tên người gửi], and I have been a member of the club for [thời gian: two years]. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email regarding the municipal authority's plan to close down our public library. I firmly believe that this decision is short-sighted and deeply regrettable.
To preserve and modernize this vital cultural institution, I would like to make a few suggestions. First, our club should advocate for transforming the library into a modern hybrid learning hub equipped with free Wi-Fi, computer workstations, and digital archives alongside traditional book stacks. Second, it would be better to integrate a community coffee lounge and silent study pods to attract freelance workers and students. Finally, we could organize weekly literary storytelling sessions and coding clubs for children to demonstrate high community utility. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
[Tên của bạn]""",
        "vocabCategories": [
            {
                "name": "1. Đề xuất 1: Mô hình thư viện lai (Hybrid Learning Hub)",
                "icon": "Sparkles",
                "items": [
                    {"en": "transform into a modern hybrid learning hub", "vi": "chuyển đổi thành không gian học tập tích hợp hiện đại", "example": "First, we should transform the building into a modern hybrid learning hub."},
                    {"en": "integrate digital e-book databases with physical stacks", "vi": "kết hợp cơ sở dữ liệu sách số với kệ sách giấy truyền thống", "example": "Digital databases complement traditional book reading."}
                ]
            },
            {
                "name": "2. Đề xuất 2: Không gian cà phê & Tự học (Café & Co-working)",
                "icon": "CheckCircle2",
                "items": [
                    {"en": "introduce a community cafe and quiet study pods", "vi": "bổ sung quán cà phê cộng đồng và góc tự học yên tĩnh", "example": "Second, it would be better to introduce a cafe and co-working study pods."},
                    {"en": "attract students, remote workers, and researchers", "vi": "thu hút sinh viên, người làm việc từ xa và nhà nghiên cứu", "example": "Modern amenities rejuvenate community foot traffic."}
                ]
            },
            {
                "name": "3. Đề xuất 3: Sự kiện văn hóa thường kỳ (Cultural Events)",
                "icon": "BookOpen",
                "items": [
                    {"en": "host weekly author talks and children's story hours", "vi": "tổ chức các buổi tác giả giao lưu và giờ đọc truyện thiếu nhi", "example": "Finally, we could host weekly literary workshops and story hours."},
                    {"en": "prove high social utility to municipal authorities", "vi": "chứng minh giá trị sử dụng cộng đồng cao cho chính quyền", "example": "Active community engagement prevents unjustified municipal closures."}
                ]
            }
        ],
        "samples": [
            {
                "title": "Bài mẫu chuẩn Band B2-C1",
                "wordCount": 186,
                "en": """Dear Club Manager,
My name is Nam, and I have been a member of the club for two years. During this time, I have had the opportunity to participate in a wide range of meaningful activities, which have greatly enriched my experience and personal development.
I am writing in response to your email regarding the proposed shutdown of our local municipal library. I strongly feel that closing this historic landmark would strip our community of an essential educational haven.
To safeguard and revitalize our library, I would like to make a few suggestions. First, the club should petition the municipal council to renovate the facility into a dynamic hybrid learning center combining e-readers, research databases, and paper collections. Second, it would be highly effective to establish a collaborative café and quiet study pods to attract university students and freelancers. Finally, we could initiate weekend literacy workshops, book launches, and children's reading clubs to increase community patronage. Overall, I am confident that these suggestions would make a positive difference and help the club achieve its objectives.
Thank you for taking the time to consider my suggestions. I sincerely hope they will be taken into consideration, and I look forward to your response.
Best regards,
Nam Nguyen""",
                "vi": """Kính gửi Quản lý Câu lạc bộ,
Tên tôi là Nam, và tôi đã là thành viên của câu lạc bộ được hai năm. Trong thời gian này, tôi đã có cơ hội tham gia nhiều hoạt động ý nghĩa, giúp làm phong phú trải nghiệm và sự phát triển cá nhân của tôi rất nhiều.
Tôi viết email này để chia sẻ suy nghĩ và đưa ra một vài đề xuất thực tế liên quan đến kế hoạch đóng cửa thư viện thành phố. Tôi thực sự cảm thấy việc đóng cửa công trình lịch sử này sẽ tước đi của cộng đồng một mái nhà tri thức vô giá.
Để bảo vệ và hồi sinh thư viện của chúng ta, tôi xin phép đưa ra một vài đề xuất. Đầu tiên, câu lạc bộ nên gửi kiến nghị lên hội đồng thành phố để cải tạo cơ sở này thành trung tâm học tập tích hợp hiện đại, kết hợp giữa máy đọc sách điện tử, cơ sở dữ liệu tra cứu và các đầu sách in truyền thống. Thứ hai, sẽ rất hiệu quả nếu xây dựng một quán cà phê kết hợp các khoang tự học yên tĩnh để thu hút sinh viên và những người làm việc tự do. Cuối cùng, chúng ta có thể phát động các buổi hội thảo văn học cuối tuần, ra mắt sách và câu lạc bộ đọc sách thiếu nhi để gia tăng lượng độc giả đến thư viện. Nhìn chung, tôi tin chắc rằng những đề xuất này sẽ tạo nên sự khác biệt tích cực và giúp câu lạc bộ hoàn thành mục tiêu.
Cảm ơn bạn đã dành thời gian xem xét các đề xuất của tôi. Tôi chân thành hy vọng chúng sẽ được cân nhắc, và tôi rất mong nhận được phản hồi từ bạn.
Trân trọng,
Nam Nguyen"""
            }
        ]
    }
}

print("Batch 4 generated successfully!")
