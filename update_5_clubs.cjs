const fs = require('fs');
const path = require('path');

const part3Data = {
  "Art club": {
    "q1": {
      "member": "Member A",
      "question": "I kept a painting for a long time. Tell me a thing that you have had for a long time.",
      "vi": "Tôi đã giữ một bức tranh trong một thời gian dài. Kể cho tôi nghe một món đồ mà bạn đã có từ rất lâu.",
      "vocab": [
        "✨ [Đồ vật ý nghĩa]: <strong>a vintage camera</strong> (chiếc máy ảnh cổ), <strong>a childhood diary</strong> (cuốn nhật ký thời thơ ấu), <strong>a family heirloom</strong> (vật gia truyền), <strong>a traditional musical instrument</strong> (nhạc cụ truyền thống)",
        "✨ [Cảm xúc]: <strong>hold immense sentimental value</strong> (mang giá trị tinh thần to lớn), <strong>bring back fond memories</strong> (gợi lại những kỷ niệm đẹp), <strong>cherish deeply</strong> (vô cùng trân trọng), <strong>feel deeply attached to</strong> (cảm thấy vô cùng gắn bó với)",
        "✨ [Bảo quản]: <strong>keep it in pristine condition</strong> (giữ nó trong tình trạng nguyên vẹn), <strong>pass down through generations</strong> (truyền lại qua nhiều thế hệ), <strong>preserve carefully</strong> (bảo quản cẩn thận), <strong>stand the test of time</strong> (chống lại thử thách của thời gian)"
      ],
      "templates": [
        "Regarding your question, a treasured item I have kept for ages is...",
        "One thing that holds immense sentimental value to me is...",
        "To be honest, the oldest thing I own is..."
      ],
      "samples": [
        { "en": "Regarding your question, a treasured item I have kept for ages is a vintage film camera given by my grandfather. It holds immense sentimental value and constantly reminds me of my beautiful childhood memories with him.", "vi": "Về câu hỏi của bạn, một món đồ quý giá mà tôi đã giữ từ rất lâu là chiếc máy ảnh phim cổ do ông tôi tặng. Nó mang giá trị tinh thần to lớn và không ngừng nhắc nhở tôi về những kỷ niệm tuổi thơ tươi đẹp với ông." },
        { "en": "One thing that holds immense sentimental value to me is a traditional musical instrument passed down through generations. I always preserve it carefully because it beautifully represents my family's rich cultural heritage.", "vi": "Một thứ mang giá trị tinh thần to lớn đối với tôi là một nhạc cụ truyền thống được truyền lại qua nhiều thế hệ. Tôi luôn bảo quản nó cẩn thận vì nó đại diện một cách tuyệt vời cho di sản văn hóa phong phú của gia đình tôi." },
        { "en": "To be honest, the oldest thing I own is my childhood diary. Reading those pages always brings back fond memories, and I feel deeply attached to it as a witness to my personal growth over the years.", "vi": "Thành thật mà nói, thứ cũ nhất mà tôi sở hữu là cuốn nhật ký thời thơ ấu. Đọc những trang viết đó luôn gợi lại những kỷ niệm đẹp, và tôi cảm thấy vô cùng gắn bó với nó như một nhân chứng cho sự trưởng thành của tôi qua bao năm tháng." }
      ]
    },
    "q2": {
      "member": "Member B",
      "question": "People now throw away things more often than in the past. What do you think about this?",
      "vi": "Mọi người bây giờ vứt bỏ đồ đạc thường xuyên hơn so với quá khứ. Bạn nghĩ gì về điều này?",
      "vocab": [
        "✨ [Thực trạng]: <strong>throwaway culture</strong> (văn hóa vứt bỏ), <strong>consumerism</strong> (chủ nghĩa tiêu dùng), <strong>mass production</strong> (sản xuất hàng loạt), <strong>constantly upgrade</strong> (liên tục nâng cấp)",
        "✨ [Nguyên nhân]: <strong>poor durability</strong> (độ bền kém), <strong>affordable prices</strong> (giá cả phải chăng), <strong>planned obsolescence</strong> (sự lỗi thời có kế hoạch), <strong>seek convenience</strong> (tìm kiếm sự tiện lợi)",
        "✨ [Hậu quả]: <strong>environmental degradation</strong> (sự suy thoái môi trường), <strong>excessive waste</strong> (rác thải quá mức), <strong>deplete natural resources</strong> (làm cạn kiệt tài nguyên thiên nhiên), <strong>carbon footprint</strong> (lượng khí thải carbon)"
      ],
      "templates": [
        "I believe this throwaway culture is primarily caused by...",
        "In my opinion, this concerning trend happens because...",
        "It is undeniable that this habit leads to..."
      ],
      "samples": [
        { "en": "I believe this throwaway culture is primarily caused by mass production and affordable prices. Nowadays, it is often cheaper and much more convenient to buy new products than to repair broken ones.", "vi": "Tôi tin rằng văn hóa vứt bỏ này chủ yếu là do sản xuất hàng loạt và giá cả phải chăng. Ngày nay, việc mua các sản phẩm mới thường rẻ hơn và tiện lợi hơn nhiều so với việc sửa chữa những đồ đã hỏng." },
        { "en": "In my opinion, this concerning trend happens because modern items generally have poor durability. Unfortunately, this excessive consumerism inevitably leads to severe environmental degradation and completely depletes our precious natural resources.", "vi": "Theo tôi, xu hướng đáng lo ngại này xảy ra vì các mặt hàng hiện đại nhìn chung có độ bền kém. Đáng tiếc là, chủ nghĩa tiêu dùng quá mức này tất yếu dẫn đến suy thoái môi trường nghiêm trọng và làm cạn kiệt hoàn toàn các nguồn tài nguyên thiên nhiên quý giá của chúng ta." },
        { "en": "It is undeniable that people constantly upgrade their belongings to follow the latest trends. While it brings temporary satisfaction, this dangerous habit generates excessive waste and significantly increases our global carbon footprint.", "vi": "Không thể phủ nhận rằng mọi người liên tục nâng cấp đồ đạc của họ để theo kịp các xu hướng mới nhất. Mặc dù nó mang lại sự thỏa mãn tạm thời, thói quen nguy hiểm này tạo ra lượng rác thải quá mức và làm tăng đáng kể lượng khí thải carbon toàn cầu của chúng ta." }
      ]
    },
    "q3": {
      "member": "Member C",
      "question": "The club is going to have an exhibition. We want to show things that people kept for a long time. Do you have any ideas on how to organize this?",
      "vi": "Câu lạc bộ sắp tổ chức một buổi triển lãm. Chúng tôi muốn trưng bày những thứ mà mọi người đã giữ trong một thời gian dài. Bạn có ý tưởng nào về cách tổ chức không?",
      "vocab": [
        "✨ [Hoạt động trưng bày]: <strong>curate a nostalgic gallery</strong> (tổ chức một phòng trưng bày hoài niệm), <strong>display personal heirlooms</strong> (trưng bày kỷ vật cá nhân), <strong>arrange items chronologically</strong> (sắp xếp các đồ vật theo trình tự thời gian), <strong>set up interactive booths</strong> (thiết lập các gian hàng tương tác)",
        "✨ [Kể chuyện]: <strong>share captivating stories</strong> (chia sẻ những câu chuyện hấp dẫn), <strong>attach brief descriptions</strong> (đính kèm mô tả ngắn gọn), <strong>explain the historical context</strong> (giải thích bối cảnh lịch sử), <strong>highlight sentimental value</strong> (nhấn mạnh giá trị tinh thần)",
        "✨ [Kết quả]: <strong>evoke strong emotions</strong> (gợi lên những cảm xúc mạnh mẽ), <strong>foster community connection</strong> (thúc đẩy sự gắn kết cộng đồng), <strong>attract diverse audiences</strong> (thu hút lượng khán giả đa dạng), <strong>create a memorable experience</strong> (tạo ra một trải nghiệm đáng nhớ)"
      ],
      "templates": [
        "I highly recommend that we curate a gallery where...",
        "One fantastic idea is to encourage members to...",
        "To make the exhibition truly engaging, we should..."
      ],
      "samples": [
        { "en": "I highly recommend that we curate a nostalgic gallery where members can display personal heirlooms. Attaching brief descriptions to highlight the sentimental value of each item will undoubtedly evoke strong emotions from visitors.", "vi": "Tôi thực sự đề xuất chúng ta tổ chức một phòng trưng bày hoài niệm, nơi các thành viên có thể trưng bày kỷ vật cá nhân. Việc đính kèm những mô tả ngắn gọn để nhấn mạnh giá trị tinh thần của mỗi món đồ chắc chắn sẽ gợi lên những cảm xúc mạnh mẽ từ du khách." },
        { "en": "One fantastic idea is to encourage members to share captivating stories behind their oldest possessions. We can arrange items chronologically to show how things have evolved, creating a truly memorable experience for everyone.", "vi": "Một ý tưởng tuyệt vời là khuyến khích các thành viên chia sẻ những câu chuyện hấp dẫn đằng sau những tài sản lâu đời nhất của họ. Chúng ta có thể sắp xếp các đồ vật theo trình tự thời gian để cho thấy mọi thứ đã phát triển như thế nào, tạo ra một trải nghiệm thực sự đáng nhớ cho tất cả mọi người." },
        { "en": "To make the exhibition truly engaging, we should set up interactive booths. Here, owners can verbally explain the historical context of their items. This approach will successfully foster community connection and attract diverse audiences.", "vi": "Để làm cho triển lãm thực sự hấp dẫn, chúng ta nên thiết lập các gian hàng tương tác. Tại đây, chủ sở hữu có thể giải thích bằng lời về bối cảnh lịch sử của các món đồ của họ. Cách tiếp cận này sẽ thúc đẩy thành công sự kết nối cộng đồng và thu hút nhiều khán giả đa dạng." }
      ]
    }
  },
  "Food club": {
    "q1": {
      "member": "Member A",
      "question": "What is the weirdest food you have ever eaten?",
      "vi": "Món ăn kỳ lạ nhất bạn từng ăn là gì?",
      "vocab": [
        "✨ [Món ăn]: <strong>exotic delicacies</strong> (đặc sản kỳ lạ), <strong>unconventional ingredients</strong> (nguyên liệu độc lạ), <strong>bizarre textures</strong> (kết cấu kỳ lạ), <strong>pungent smell</strong> (mùi nồng)",
        "✨ [Trải nghiệm]: <strong>step out of my culinary comfort zone</strong> (bước ra khỏi vùng an toàn ẩm thực), <strong>a memorable tasting experience</strong> (một trải nghiệm nếm thử đáng nhớ), <strong>surprisingly delicious</strong> (ngon đến bất ngờ), <strong>hard to swallow</strong> (khó nuốt)",
        "✨ [Văn hóa]: <strong>local specialties</strong> (đặc sản địa phương), <strong>cultural authenticity</strong> (sự chân thực văn hóa), <strong>traditional cuisine</strong> (ẩm thực truyền thống), <strong>adventurous eater</strong> (người thích khám phá ẩm thực)"
      ],
      "templates": [
        "The most bizarre dish I have ever tried is...",
        "During a recent trip, I bravely tasted...",
        "To my absolute surprise, the weirdest food I ate was..."
      ],
      "samples": [
        { "en": "The most bizarre dish I have ever tried is fermented tofu. Despite its incredibly pungent smell and unusual texture, it was surprisingly delicious and offered a very memorable tasting experience.", "vi": "Món ăn kỳ lạ nhất mà tôi từng thử là đậu phụ lên men. Mặc dù có mùi cực kỳ nồng và kết cấu bất thường, nó lại ngon đến bất ngờ và mang đến một trải nghiệm nếm thử rất đáng nhớ." },
        { "en": "During a recent trip, I bravely tasted a local specialty made from unconventional ingredients like edible insects. It completely forced me to step out of my culinary comfort zone but tasted wonderfully crunchy.", "vi": "Trong một chuyến đi gần đây, tôi đã dũng cảm nếm thử một đặc sản địa phương làm từ những nguyên liệu độc lạ như côn trùng ăn được. Nó hoàn toàn buộc tôi phải bước ra khỏi vùng an toàn ẩm thực của mình nhưng lại có vị giòn tuyệt vời." },
        { "en": "To my absolute surprise, the weirdest food I ate was an exotic delicacy with a very bizarre texture. As an adventurous eater, I deeply appreciated the cultural authenticity behind this traditional cuisine.", "vi": "Trước sự ngạc nhiên tột độ của tôi, món ăn kỳ lạ nhất tôi từng ăn là một món đặc sản kỳ lạ với kết cấu rất kỳ lạ. Là một người thích khám phá ẩm thực, tôi vô cùng trân trọng tính chân thực văn hóa đằng sau nền ẩm thực truyền thống này." }
      ]
    },
    "q2": {
      "member": "Member B",
      "question": "Nowadays, people are trying weird foods and drinks. Do you think it is a good or a bad thing?",
      "vi": "Ngày nay, mọi người đang thử những món ăn và đồ uống kỳ lạ. Bạn nghĩ đây là một điều tốt hay xấu?",
      "vocab": [
        "✨ [Tích cực]: <strong>embrace culinary diversity</strong> (đón nhận sự đa dạng ẩm thực), <strong>broaden one's palate</strong> (mở rộng khẩu vị), <strong>promote cultural exchange</strong> (thúc đẩy giao lưu văn hóa), <strong>boost the local economy</strong> (thúc đẩy kinh tế địa phương)",
        "✨ [Tiêu cực]: <strong>health risks</strong> (rủi ro sức khỏe), <strong>digestive issues</strong> (vấn đề tiêu hóa), <strong>food safety concerns</strong> (lo ngại về an toàn thực phẩm), <strong>unethical sourcing</strong> (nguồn gốc không hợp đạo đức)",
        "✨ [Đánh giá]: <strong>a double-edged sword</strong> (con dao hai lưỡi), <strong>strike a balance</strong> (đạt được sự cân bằng), <strong>exercise caution</strong> (thận trọng), <strong>informed choices</strong> (lựa chọn sáng suốt)"
      ],
      "templates": [
        "In my view, this trend is a double-edged sword because...",
        "I firmly believe it is a positive development since it...",
        "While it promotes cultural exchange, we must also consider..."
      ],
      "samples": [
        { "en": "I firmly believe it is a positive development since it encourages people to embrace culinary diversity. Trying unconventional ingredients significantly broadens one's palate and promotes meaningful cultural exchange globally.", "vi": "Tôi tin chắc rằng đây là một sự phát triển tích cực vì nó khuyến khích mọi người đón nhận sự đa dạng ẩm thực. Việc thử những nguyên liệu độc lạ giúp mở rộng đáng kể khẩu vị và thúc đẩy giao lưu văn hóa ý nghĩa trên toàn cầu." },
        { "en": "In my view, this trend is a double-edged sword. While exploring exotic delicacies effectively boosts the local economy, it also carries potential health risks and serious food safety concerns.", "vi": "Theo quan điểm của tôi, xu hướng này là một con dao hai lưỡi. Trong khi việc khám phá các đặc sản kỳ lạ thúc đẩy nền kinh tế địa phương một cách hiệu quả, nó cũng tiềm ẩn rủi ro sức khỏe và những lo ngại nghiêm trọng về an toàn thực phẩm." },
        { "en": "While it promotes cultural exchange, we must also consider potential digestive issues. It is crucial to exercise caution, make informed choices, and ensure that these weird foods come from ethical and safe sources.", "vi": "Mặc dù nó thúc đẩy giao lưu văn hóa, chúng ta cũng phải xem xét các vấn đề tiêu hóa tiềm ẩn. Điều quan trọng là phải thận trọng, đưa ra những lựa chọn sáng suốt và đảm bảo rằng những món ăn kỳ lạ này đến từ các nguồn đạo đức và an toàn." }
      ]
    },
    "q3": {
      "member": "Member C",
      "question": "We are going to organize an unusual food fair next week to attract more people to our club. Can you suggest some ideas for the fair?",
      "vi": "Chúng tôi dự định tổ chức một hội chợ ẩm thực khác thường vào tuần tới để thu hút thêm người tham gia câu lạc bộ. Bạn có thể gợi ý một vài ý tưởng cho hội chợ không?",
      "vocab": [
        "✨ [Hoạt động]: <strong>host a blind tasting challenge</strong> (tổ chức thử thách nếm giấu mặt), <strong>set up live cooking demonstrations</strong> (thiết lập các buổi trình diễn nấu ăn trực tiếp), <strong>organize a fusion food contest</strong> (tổ chức cuộc thi ẩm thực kết hợp), <strong>invite adventurous chefs</strong> (mời các đầu bếp ưa khám phá)",
        "✨ [Trải nghiệm]: <strong>create an immersive atmosphere</strong> (tạo bầu không khí đắm chìm), <strong>spark curiosity</strong> (khơi gợi sự tò mò), <strong>interactive food stalls</strong> (các quầy ẩm thực tương tác), <strong>a sensory journey</strong> (một hành trình giác quan)",
        "✨ [Mục tiêu]: <strong>attract food enthusiasts</strong> (thu hút những người đam mê ẩm thực), <strong>generate widespread buzz</strong> (tạo ra tiếng vang rộng rãi), <strong>maximize engagement</strong> (tối đa hóa sự tương tác), <strong>boost club membership</strong> (tăng số lượng thành viên câu lạc bộ)"
      ],
      "templates": [
        "I strongly recommend that we organize a...",
        "One fantastic approach is to set up...",
        "To maximize engagement, we could host..."
      ],
      "samples": [
        { "en": "I strongly recommend that we organize a blind tasting challenge featuring various exotic delicacies. This fun activity will definitely spark curiosity, create an immersive atmosphere, and attract adventurous food enthusiasts to our club.", "vi": "Tôi thực sự đề xuất chúng ta nên tổ chức một thử thách nếm giấu mặt với nhiều đặc sản kỳ lạ khác nhau. Hoạt động thú vị này chắc chắn sẽ khơi gợi sự tò mò, tạo ra một bầu không khí đắm chìm và thu hút những người đam mê ẩm thực thích khám phá đến câu lạc bộ của chúng ta." },
        { "en": "One fantastic approach is to set up live cooking demonstrations with unconventional ingredients. By inviting local adventurous chefs, we can provide a unique sensory journey that will generate widespread buzz and boost membership.", "vi": "Một cách tiếp cận tuyệt vời là thiết lập các buổi trình diễn nấu ăn trực tiếp với các nguyên liệu độc lạ. Bằng cách mời các đầu bếp địa phương ưa khám phá, chúng ta có thể mang đến một hành trình giác quan độc đáo, điều này sẽ tạo ra tiếng vang rộng rãi và tăng số lượng thành viên." },
        { "en": "To maximize engagement, we could host a fusion food contest where members combine traditional recipes with weird ingredients. These interactive food stalls will be incredibly entertaining and leave a lasting impression on all visitors.", "vi": "Để tối đa hóa sự tương tác, chúng ta có thể tổ chức một cuộc thi ẩm thực kết hợp, nơi các thành viên kết hợp các công thức nấu ăn truyền thống với các nguyên liệu kỳ lạ. Những quầy ẩm thực tương tác này sẽ vô cùng giải trí và để lại ấn tượng sâu sắc cho tất cả du khách." }
      ]
    }
  },
  "Social club": {
    "q1": {
      "member": "Member A",
      "question": "Hi, tell me how often you hang out with friends and what you normally do with them?",
      "vi": "Chào bạn, hãy kể cho tôi nghe bạn thường xuyên đi chơi với bạn bè như thế nào và bạn thường làm gì với họ?",
      "vocab": [
        "✨ [Tần suất]: <strong>on a weekly basis</strong> (hàng tuần), <strong>whenever time permits</strong> (bất cứ khi nào có thời gian), <strong>catch up regularly</strong> (cập nhật tình hình thường xuyên), <strong>every other weekend</strong> (cách tuần vào cuối tuần)",
        "✨ [Hoạt động]: <strong>grab a cup of coffee</strong> (đi uống cà phê), <strong>dine out at local eateries</strong> (ăn ngoài tại các quán ăn địa phương), <strong>go window shopping</strong> (đi ngắm đồ ngoài tủ kính), <strong>enjoy outdoor picnics</strong> (tận hưởng các buổi dã ngoại ngoài trời)",
        "✨ [Lợi ích]: <strong>unwind after a hectic week</strong> (thư giãn sau một tuần bận rộn), <strong>strengthen our bond</strong> (củng cố mối quan hệ), <strong>share our latest updates</strong> (chia sẻ những thông tin mới nhất), <strong>relieve daily stress</strong> (giảm căng thẳng hàng ngày)"
      ],
      "templates": [
        "I usually hang out with my close friends on a...",
        "Whenever time permits, we love to gather and...",
        "My friends and I catch up regularly to..."
      ],
      "samples": [
        { "en": "I usually hang out with my close friends on a weekly basis. We typically grab a cup of coffee at a cozy café to share our latest updates and unwind after a hectic week.", "vi": "Tôi thường đi chơi với những người bạn thân của mình hàng tuần. Chúng tôi thường đi uống cà phê tại một quán cà phê ấm cúng để chia sẻ những thông tin mới nhất và thư giãn sau một tuần bận rộn." },
        { "en": "Whenever time permits, we love to gather and dine out at various local eateries. It is a fantastic way to relieve daily stress, enjoy delicious meals, and significantly strengthen our bond.", "vi": "Bất cứ khi nào có thời gian, chúng tôi thích tụ tập và ăn ngoài tại nhiều quán ăn địa phương khác nhau. Đó là một cách tuyệt vời để giảm căng thẳng hàng ngày, thưởng thức những bữa ăn ngon và củng cố đáng kể mối quan hệ của chúng tôi." },
        { "en": "My friends and I catch up regularly every other weekend. We normally organize outdoor picnics or go window shopping, which keeps us physically active and brings immense joy to our busy lives.", "vi": "Tôi và bạn bè thường xuyên gặp nhau vào mỗi cuối tuần cách tuần. Chúng tôi thường tổ chức các buổi dã ngoại ngoài trời hoặc đi ngắm đồ, điều này giúp chúng tôi vận động thể chất và mang lại niềm vui to lớn cho cuộc sống bận rộn của chúng tôi." }
      ]
    },
    "q2": {
      "member": "Member B",
      "question": "Many teenagers like interacting with friends via social media than face-to-face. What do you think about this?",
      "vi": "Nhiều thanh thiếu niên thích tương tác với bạn bè qua mạng xã hội hơn là gặp mặt trực tiếp. Bạn nghĩ gì về điều này?",
      "vocab": [
        "✨ [Giao tiếp ảo]: <strong>virtual interactions</strong> (tương tác ảo), <strong>instant messaging</strong> (nhắn tin tức thời), <strong>digital platforms</strong> (nền tảng kỹ thuật số), <strong>convenient and accessible</strong> (tiện lợi và dễ tiếp cận)",
        "✨ [Hạn chế]: <strong>lack genuine connections</strong> (thiếu các kết nối chân thật), <strong>diminish social skills</strong> (làm giảm các kỹ năng xã hội), <strong>cause misunderstandings</strong> (gây ra sự hiểu lầm), <strong>feel isolated</strong> (cảm thấy bị cô lập)",
        "✨ [Tầm quan trọng thực tế]: <strong>read body language</strong> (đọc ngôn ngữ cơ thể), <strong>convey real emotions</strong> (truyền tải cảm xúc thật), <strong>build profound relationships</strong> (xây dựng các mối quan hệ sâu sắc), <strong>foster empathy</strong> (thúc đẩy sự thấu cảm)"
      ],
      "templates": [
        "While virtual interactions are highly convenient, I believe...",
        "It is concerning because relying too heavily on digital platforms can...",
        "Although social media allows instant messaging, it completely lacks..."
      ],
      "samples": [
        { "en": "While virtual interactions are highly convenient and accessible, I believe they often lack genuine connections. Face-to-face meetings are crucial because they allow us to read body language and convey real emotions accurately.", "vi": "Mặc dù các tương tác ảo rất thuận tiện và dễ tiếp cận, tôi tin rằng chúng thường thiếu các kết nối chân thật. Gặp gỡ trực tiếp là rất quan trọng vì chúng cho phép chúng ta đọc ngôn ngữ cơ thể và truyền tải cảm xúc thực một cách chính xác." },
        { "en": "It is concerning because relying too heavily on digital platforms can severely diminish social skills. Teenagers might struggle to navigate real-life situations and could eventually feel isolated despite having hundreds of online friends.", "vi": "Thật đáng lo ngại vì việc phụ thuộc quá nhiều vào các nền tảng kỹ thuật số có thể làm suy giảm nghiêm trọng các kỹ năng xã hội. Thanh thiếu niên có thể gặp khó khăn trong việc xoay sở các tình huống thực tế và cuối cùng có thể cảm thấy bị cô lập mặc dù có hàng trăm người bạn trực tuyến." },
        { "en": "Although social media allows instant messaging, it completely lacks the warmth of in-person communication. Without the ability to foster empathy naturally, excessive screen time can frequently cause unnecessary misunderstandings among close friends.", "vi": "Mặc dù mạng xã hội cho phép nhắn tin tức thời, nó hoàn toàn thiếu đi sự ấm áp của giao tiếp trực tiếp. Nếu không có khả năng nuôi dưỡng sự thấu cảm một cách tự nhiên, thời gian sử dụng màn hình quá nhiều thường có thể gây ra những hiểu lầm không đáng có giữa những người bạn thân." }
      ]
    },
    "q3": {
      "member": "Member C",
      "question": "Our club is organizing a charity. We need some ideas on which group of people should be sponsored, poor children or the old who live alone. What is your opinion?",
      "vi": "Câu lạc bộ của chúng ta đang tổ chức một sự kiện từ thiện. Chúng ta cần một số ý tưởng về việc nên tài trợ cho nhóm người nào, trẻ em nghèo hay người già neo đơn. Ý kiến của bạn là gì?",
      "vocab": [
        "✨ [Trẻ em nghèo]: <strong>invest in the future</strong> (đầu tư vào tương lai), <strong>provide educational opportunities</strong> (cung cấp cơ hội giáo dục), <strong>break the cycle of poverty</strong> (phá vỡ vòng luẩn quẩn của sự nghèo đói), <strong>nurture young talents</strong> (nuôi dưỡng tài năng trẻ)",
        "✨ [Người già neo đơn]: <strong>alleviate loneliness</strong> (làm giảm sự cô đơn), <strong>offer medical assistance</strong> (cung cấp hỗ trợ y tế), <strong>show deep gratitude</strong> (thể hiện lòng biết ơn sâu sắc), <strong>improve living conditions</strong> (cải thiện điều kiện sống)",
        "✨ [Hành động]: <strong>make a lasting impact</strong> (tạo ra tác động lâu dài), <strong>allocate resources wisely</strong> (phân bổ nguồn lực một cách khôn ngoan), <strong>raise funds effectively</strong> (gây quỹ hiệu quả), <strong>distribute essential supplies</strong> (phân phát các nhu yếu phẩm thiết yếu)"
      ],
      "templates": [
        "I strongly suggest that we sponsor poor children because...",
        "In my opinion, supporting the elderly who live alone is...",
        "While both groups need help, focusing on poor children will..."
      ],
      "samples": [
        { "en": "I strongly suggest that we sponsor poor children because it is an investment in our future. By providing educational opportunities and essential supplies, we can help them completely break the vicious cycle of poverty.", "vi": "Tôi chân thành đề nghị chúng ta nên tài trợ cho trẻ em nghèo vì đó là một khoản đầu tư vào tương lai của chúng ta. Bằng cách cung cấp các cơ hội giáo dục và vật dụng thiết yếu, chúng ta có thể giúp các em hoàn toàn phá vỡ vòng luẩn quẩn độc ác của sự nghèo đói." },
        { "en": "In my opinion, supporting the elderly who live alone is highly crucial. Many of them lack adequate care, so offering medical assistance and companionship will significantly alleviate their loneliness and improve their living conditions.", "vi": "Theo tôi, việc hỗ trợ người già neo đơn là vô cùng quan trọng. Nhiều người trong số họ thiếu sự chăm sóc đầy đủ, vì vậy việc cung cấp hỗ trợ y tế và sự bầu bạn sẽ làm giảm đáng kể sự cô đơn và cải thiện điều kiện sống của họ." },
        { "en": "While both groups need help, focusing on poor children will make a lasting impact. If we raise funds effectively to nurture these young talents, they will eventually grow up to give back to society.", "vi": "Mặc dù cả hai nhóm đều cần sự giúp đỡ, việc tập trung vào trẻ em nghèo sẽ tạo ra tác động lâu dài. Nếu chúng ta gây quỹ hiệu quả để nuôi dưỡng những tài năng trẻ này, cuối cùng các em sẽ lớn lên và cống hiến lại cho xã hội." }
      ]
    }
  },
  "Beautiful homes club": {
    "q1": {
      "member": "Member A",
      "question": "What makes a home beautiful?",
      "vi": "Điều gì làm cho một ngôi nhà trở nên xinh đẹp?",
      "vocab": [
        "✨ [Kiến trúc & Nội thất]: <strong>harmonious color schemes</strong> (tông màu hài hòa), <strong>minimalist design</strong> (thiết kế tối giản), <strong>abundant natural light</strong> (ánh sáng tự nhiên dồi dào), <strong>elegant furniture</strong> (nội thất thanh lịch)",
        "✨ [Không khí]: <strong>a cozy and welcoming atmosphere</strong> (một bầu không khí ấm cúng và chào đón), <strong>reflect personal taste</strong> (phản ánh gu thẩm mỹ cá nhân), <strong>a sense of tranquility</strong> (cảm giác thanh bình), <strong>decluttered spaces</strong> (không gian gọn gàng)",
        "✨ [Kết nối]: <strong>filled with love and laughter</strong> (tràn ngập tình yêu và tiếng cười), <strong>a safe haven</strong> (một nơi trú ẩn an toàn), <strong>cherished family moments</strong> (những khoảnh khắc gia đình đáng trân trọng), <strong>warm interactions</strong> (những tương tác ấm áp)"
      ],
      "templates": [
        "In my opinion, a beautiful home is primarily defined by...",
        "Beyond just elegant furniture, what truly makes a home beautiful is...",
        "I strongly believe that abundant natural light and..."
      ],
      "samples": [
        { "en": "In my opinion, a beautiful home is primarily defined by harmonious color schemes and abundant natural light. These elements instantly create a cozy and welcoming atmosphere that makes everyone feel completely relaxed.", "vi": "Theo tôi, một ngôi nhà đẹp chủ yếu được định hình bởi tông màu hài hòa và ánh sáng tự nhiên dồi dào. Những yếu tố này ngay lập tức tạo ra một bầu không khí ấm cúng và thân thiện khiến mọi người cảm thấy hoàn toàn thư giãn." },
        { "en": "Beyond just elegant furniture, what truly makes a home beautiful is the sense of tranquility it provides. Decluttered spaces that reflect your personal taste can easily turn a simple house into a safe haven.", "vi": "Vượt ra ngoài nội thất thanh lịch, điều thực sự làm cho một ngôi nhà trở nên xinh đẹp là cảm giác thanh bình mà nó mang lại. Không gian gọn gàng phản ánh gu thẩm mỹ cá nhân của bạn có thể dễ dàng biến một ngôi nhà đơn giản thành một nơi trú ẩn an toàn." },
        { "en": "I strongly believe that a beautiful home must be filled with love and laughter. Even with minimalist design, the warm interactions and cherished family moments are what genuinely make any living space incredibly stunning.", "vi": "Tôi thực sự tin rằng một ngôi nhà đẹp phải tràn ngập tình yêu và tiếng cười. Ngay cả với thiết kế tối giản, những tương tác ấm áp và những khoảnh khắc gia đình đáng trân trọng mới là điều thực sự làm cho bất kỳ không gian sống nào trở nên vô cùng tuyệt đẹp." }
      ]
    },
    "q2": {
      "member": "Member B",
      "question": "Someone says: A beautiful home must have expensive furniture. How do you think?",
      "vi": "Có người nói: Một ngôi nhà đẹp phải có đồ nội thất đắt tiền. Bạn nghĩ sao?",
      "vocab": [
        "✨ [Bác bỏ]: <strong>a complete misconception</strong> (một quan niệm hoàn toàn sai lầm), <strong>price does not equal taste</strong> (giá cả không đồng nghĩa với gu thẩm mỹ), <strong>not a determining factor</strong> (không phải là yếu tố quyết định), <strong>highly superficial</strong> (rất hời hợt)",
        "✨ [Giá trị thực sự]: <strong>thoughtful arrangement</strong> (sự sắp xếp chu đáo), <strong>creativity and personalization</strong> (sự sáng tạo và cá nhân hóa), <strong>emotional comfort</strong> (sự thoải mái về cảm xúc), <strong>neat and tidy</strong> (gọn gàng và ngăn nắp)",
        "✨ [Giải pháp thay thế]: <strong>DIY projects</strong> (các dự án tự làm), <strong>repurpose old items</strong> (tái sử dụng đồ cũ), <strong>affordable decor</strong> (đồ trang trí giá cả phải chăng), <strong>smart spatial planning</strong> (quy hoạch không gian thông minh)"
      ],
      "templates": [
        "I completely disagree because that is a complete misconception...",
        "Price does not equal taste, so I believe...",
        "While expensive items are nice, the most important thing is..."
      ],
      "samples": [
        { "en": "I completely disagree because that is a complete misconception. Price does not equal taste, and a home can look incredibly gorgeous just through thoughtful arrangement and smart spatial planning without spending a fortune.", "vi": "Tôi hoàn toàn không đồng ý vì đó là một quan niệm hoàn toàn sai lầm. Giá cả không đồng nghĩa với gu thẩm mỹ, và một ngôi nhà có thể trông vô cùng lộng lẫy chỉ qua sự sắp xếp chu đáo và quy hoạch không gian thông minh mà không tốn một gia tài." },
        { "en": "While expensive items are nice, they are definitely not a determining factor. The true beauty of a home stems from creativity and personalization, such as utilizing affordable decor or engaging in fun DIY projects.", "vi": "Mặc dù đồ đắt tiền thì đẹp, chúng chắc chắn không phải là yếu tố quyết định. Vẻ đẹp thực sự của một ngôi nhà bắt nguồn từ sự sáng tạo và cá nhân hóa, chẳng hạn như sử dụng đồ trang trí giá cả phải chăng hoặc tham gia vào các dự án tự làm thú vị." },
        { "en": "That statement is highly superficial. Emotional comfort and keeping the space neat and tidy matter much more. A well-organized room with repurposed old items will always feel much warmer than a cold, luxurious mansion.", "vi": "Phát biểu đó rất hời hợt. Sự thoải mái về cảm xúc và việc giữ cho không gian gọn gàng và ngăn nắp quan trọng hơn nhiều. Một căn phòng được tổ chức tốt với những đồ cũ được tái sử dụng sẽ luôn mang lại cảm giác ấm áp hơn nhiều so với một biệt thự sang trọng, lạnh lẽo." }
      ]
    },
    "q3": {
      "member": "Member C",
      "question": "The club expects to create a television show about our club. This show will be a helpful guide for audiences to make their homes beautiful. What is your opinion?",
      "vi": "Câu lạc bộ dự kiến sẽ sản xuất một chương trình truyền hình về câu lạc bộ của chúng ta. Chương trình này sẽ là một hướng dẫn hữu ích cho khán giả để làm đẹp ngôi nhà của họ. Ý kiến của bạn là gì?",
      "vocab": [
        "✨ [Nội dung chương trình]: <strong>practical decorating tips</strong> (các mẹo trang trí thực tế), <strong>budget-friendly makeovers</strong> (cải tạo nhà tiết kiệm ngân sách), <strong>step-by-step tutorials</strong> (hướng dẫn từng bước), <strong>before-and-after transformations</strong> (những màn biến đổi trước và sau)",
        "✨ [Tác động]: <strong>inspire viewers immensely</strong> (truyền cảm hứng mạnh mẽ cho người xem), <strong>provide actionable advice</strong> (cung cấp lời khuyên có thể áp dụng ngay), <strong>boost our club's reputation</strong> (nâng cao danh tiếng của câu lạc bộ), <strong>reach a wider demographic</strong> (tiếp cận tệp nhân khẩu học rộng hơn)",
        "✨ [Sản xuất]: <strong>feature guest experts</strong> (mời các chuyên gia khách mời), <strong>showcase real members' homes</strong> (trưng bày ngôi nhà của các thành viên thực tế), <strong>ensure high production quality</strong> (đảm bảo chất lượng sản xuất cao), <strong>engage the audience interactively</strong> (tương tác hai chiều với khán giả)"
      ],
      "templates": [
        "I strongly support this brilliant idea because...",
        "This television show would be a fantastic opportunity to...",
        "To make the show successful, I highly suggest that we..."
      ],
      "samples": [
        { "en": "I strongly support this brilliant idea because it will undoubtedly boost our club's reputation. By providing practical decorating tips and budget-friendly makeovers, we can easily inspire viewers immensely to upgrade their own living spaces.", "vi": "Tôi cực kỳ ủng hộ ý tưởng tuyệt vời này vì nó chắc chắn sẽ nâng cao danh tiếng của câu lạc bộ. Bằng cách cung cấp các mẹo trang trí thực tế và cải tạo nhà tiết kiệm, chúng ta có thể dễ dàng truyền cảm hứng mạnh mẽ cho người xem nâng cấp không gian sống của họ." },
        { "en": "This television show would be a fantastic opportunity to reach a wider demographic. We should definitely feature amazing before-and-after transformations of real members' homes to offer highly relatable and visually stunning content.", "vi": "Chương trình truyền hình này sẽ là một cơ hội tuyệt vời để tiếp cận tệp nhân khẩu học rộng hơn. Chúng ta chắc chắn nên trình chiếu những màn biến đổi trước và sau đáng kinh ngạc của những ngôi nhà thành viên thực tế để cung cấp nội dung rất gần gũi và đẹp mắt." },
        { "en": "To make the show successful, I highly suggest that we include step-by-step tutorials and feature guest experts. Ensuring high production quality will make our actionable advice appear much more professional and trustworthy to audiences.", "vi": "Để làm cho chương trình thành công, tôi thực sự đề nghị chúng ta nên đưa vào các hướng dẫn từng bước và mời các chuyên gia khách mời. Việc đảm bảo chất lượng sản xuất cao sẽ làm cho những lời khuyên có thể áp dụng của chúng ta trông chuyên nghiệp và đáng tin cậy hơn nhiều đối với khán giả." }
      ]
    }
  },
  "Garden club": {
    "q1": {
      "member": "Member A",
      "question": "What is your favorite flower? Tell me about it.",
      "vi": "Loài hoa yêu thích của bạn là gì? Kể cho tôi nghe về nó.",
      "vocab": [
        "✨ [Đặc điểm]: <strong>vibrant petals</strong> (những cánh hoa rực rỡ), <strong>enchanting fragrance</strong> (hương thơm quyến rũ), <strong>bloom gracefully</strong> (nở một cách duyên dáng), <strong>resilient nature</strong> (bản chất kiên cường)",
        "✨ [Ý nghĩa]: <strong>symbolize purity</strong> (tượng trưng cho sự thuần khiết), <strong>represent undying love</strong> (đại diện cho tình yêu bất diệt), <strong>evoke positive feelings</strong> (gợi lên những cảm xúc tích cực), <strong>cultural significance</strong> (ý nghĩa văn hóa)",
        "✨ [Chăm sóc]: <strong>require minimal maintenance</strong> (yêu cầu bảo dưỡng tối thiểu), <strong>thrive in sunlight</strong> (phát triển mạnh dưới ánh nắng mặt trời), <strong>water regularly</strong> (tưới nước thường xuyên), <strong>flourish in spring</strong> (nở rộ vào mùa xuân)"
      ],
      "templates": [
        "My absolute favorite flower is the...",
        "I have a deep affection for...",
        "The flower I admire the most is the..."
      ],
      "samples": [
        { "en": "My absolute favorite flower is the sunflower. Its vibrant yellow petals and resilient nature, always turning towards the sun, instantly evoke incredibly positive feelings and constantly inspire me to stay optimistic.", "vi": "Loài hoa tôi yêu thích nhất là hoa hướng dương. Những cánh hoa màu vàng rực rỡ và bản chất kiên cường của nó, luôn hướng về phía mặt trời, ngay lập tức gợi lên những cảm xúc vô cùng tích cực và không ngừng truyền cảm hứng cho tôi sống lạc quan." },
        { "en": "I have a deep affection for the lotus. It elegantly symbolizes purity and strength because it blooms gracefully from the mud. Moreover, it holds massive cultural significance in my home country.", "vi": "Tôi có một tình cảm sâu sắc đối với hoa sen. Nó tượng trưng một cách thanh lịch cho sự thuần khiết và sức mạnh vì nó vươn lên nở rộ một cách duyên dáng từ bùn lầy. Hơn nữa, nó mang ý nghĩa văn hóa to lớn ở quê hương tôi." },
        { "en": "The flower I admire the most is the lavender. Not only does it thrive beautifully in sunlight with minimal maintenance, but its enchanting fragrance also helps me completely relax after a stressful working day.", "vi": "Loài hoa tôi ngưỡng mộ nhất là hoa oải hương. Nó không chỉ phát triển tuyệt đẹp dưới ánh nắng với sự chăm sóc tối thiểu, mà hương thơm quyến rũ của nó còn giúp tôi hoàn toàn thư giãn sau một ngày làm việc căng thẳng." }
      ]
    },
    "q2": {
      "member": "Member B",
      "question": "I would like to have a garden, but my house is quite small. Do you have any suggestions?",
      "vi": "Tôi muốn có một khu vườn, nhưng nhà tôi khá nhỏ. Bạn có gợi ý nào không?",
      "vocab": [
        "✨ [Giải pháp không gian]: <strong>vertical gardening</strong> (làm vườn thẳng đứng), <strong>hanging baskets</strong> (giỏ treo), <strong>window boxes</strong> (hộp trồng cây ở cửa sổ), <strong>maximize limited space</strong> (tối đa hóa không gian hạn chế)",
        "✨ [Lựa chọn cây trồng]: <strong>potted succulents</strong> (sen đá trồng trong chậu), <strong>compact herbs</strong> (các loại thảo mộc nhỏ gọn), <strong>indoor terrariums</strong> (tiểu cảnh trong lọ thủy tinh), <strong>low-maintenance plants</strong> (cây ít cần chăm sóc)",
        "✨ [Lợi ích]: <strong>purify indoor air</strong> (thanh lọc không khí trong nhà), <strong>add a touch of greenery</strong> (thêm một chút sắc xanh), <strong>create a refreshing vibe</strong> (tạo cảm giác tươi mới), <strong>require minimal soil</strong> (yêu cầu rất ít đất trồng)"
      ],
      "templates": [
        "Since your house is small, I highly recommend...",
        "One fantastic solution for limited space is to...",
        "You should definitely consider utilizing..."
      ],
      "samples": [
        { "en": "Since your house is small, I highly recommend vertical gardening. By installing wall-mounted shelves or using hanging baskets, you can easily maximize your limited space while adding a beautiful touch of greenery indoors.", "vi": "Vì nhà bạn nhỏ, tôi thực sự khuyên bạn nên làm vườn thẳng đứng. Bằng cách lắp đặt các kệ treo tường hoặc sử dụng giỏ treo, bạn có thể dễ dàng tối đa hóa không gian hạn chế của mình trong khi thêm một chút sắc xanh tuyệt đẹp trong nhà." },
        { "en": "One fantastic solution for limited space is to grow compact herbs in window boxes. Not only do they require minimal soil and maintenance, but they also provide fresh ingredients for your daily healthy cooking.", "vi": "Một giải pháp tuyệt vời cho không gian hạn chế là trồng các loại thảo mộc nhỏ gọn trong các hộp ở cửa sổ. Chúng không chỉ cần rất ít đất và công chăm sóc, mà còn cung cấp các nguyên liệu tươi sạch cho việc nấu ăn lành mạnh hàng ngày của bạn." },
        { "en": "You should definitely consider utilizing indoor terrariums and potted succulents. These lovely low-maintenance plants fit perfectly on tiny desks, help purify the indoor air efficiently, and instantly create a wonderfully refreshing vibe.", "vi": "Bạn chắc chắn nên cân nhắc sử dụng tiểu cảnh trong lọ thủy tinh và sen đá trồng trong chậu. Những loại cây ít cần chăm sóc đáng yêu này hoàn toàn phù hợp trên những chiếc bàn nhỏ, giúp thanh lọc không khí trong nhà hiệu quả và ngay lập tức tạo ra một bầu không khí vô cùng tươi mới." }
      ]
    },
    "q3": {
      "member": "Member C",
      "question": "We are going to organize an event about gardening and planting next week to attract more people to our club. Can you suggest some ideas for the event?",
      "vi": "Chúng tôi dự định tổ chức một sự kiện về làm vườn và trồng cây vào tuần tới để thu hút thêm nhiều người tham gia câu lạc bộ. Bạn có thể gợi ý một số ý tưởng cho sự kiện này không?",
      "vocab": [
        "✨ [Hoạt động thực hành]: <strong>host a seed-planting workshop</strong> (tổ chức hội thảo gieo hạt), <strong>demonstrate composting techniques</strong> (trình diễn kỹ thuật ủ phân hữu cơ), <strong>set up a plant exchange corner</strong> (thiết lập góc trao đổi cây cảnh), <strong>DIY terrarium session</strong> (buổi tự làm tiểu cảnh thủy tinh)",
        "✨ [Chia sẻ kiến thức]: <strong>invite experienced botanists</strong> (mời các nhà thực vật học giàu kinh nghiệm), <strong>distribute gardening guides</strong> (phân phát tài liệu hướng dẫn làm vườn), <strong>share pest control tips</strong> (chia sẻ mẹo kiểm soát sâu bệnh), <strong>discuss sustainable practices</strong> (thảo luận về các phương pháp canh tác bền vững)",
        "✨ [Mục tiêu]: <strong>foster a love for nature</strong> (nuôi dưỡng tình yêu thiên nhiên), <strong>build an eco-friendly community</strong> (xây dựng một cộng đồng thân thiện với môi trường), <strong>encourage active participation</strong> (khuyến khích sự tham gia tích cực), <strong>spark immense interest</strong> (khơi dậy sự hứng thú to lớn)"
      ],
      "templates": [
        "I strongly suggest that we host a...",
        "It would be a brilliant idea to set up...",
        "To attract more members, we could organize..."
      ],
      "samples": [
        { "en": "I strongly suggest that we host a hands-on seed-planting workshop. Providing free seeds and distributing practical gardening guides will effectively encourage active participation and spark immense interest from enthusiastic local beginners.", "vi": "Tôi thực sự đề nghị chúng ta nên tổ chức một hội thảo gieo hạt thực hành. Việc cung cấp hạt giống miễn phí và phân phát các hướng dẫn làm vườn thực tế sẽ khuyến khích hiệu quả sự tham gia tích cực và khơi dậy sự hứng thú to lớn từ những người mới bắt đầu đầy nhiệt huyết ở địa phương." },
        { "en": "It would be a brilliant idea to set up a lively plant exchange corner. This exciting activity allows attendees to trade unique low-maintenance plants, effortlessly helping us build a strong, eco-friendly local community.", "vi": "Sẽ là một ý tưởng xuất sắc nếu thiết lập một góc trao đổi cây cảnh sôi động. Hoạt động thú vị này cho phép những người tham dự trao đổi những loại cây độc đáo ít cần chăm sóc, giúp chúng ta dễ dàng xây dựng một cộng đồng địa phương vững mạnh và thân thiện với môi trường." },
        { "en": "To attract more members, we could organize a fun DIY terrarium session and invite experienced botanists to speak. Discussing sustainable practices in such an engaging way will definitely foster a profound love for nature.", "vi": "Để thu hút thêm thành viên, chúng ta có thể tổ chức một buổi tự làm tiểu cảnh thủy tinh thú vị và mời các nhà thực vật học giàu kinh nghiệm đến nói chuyện. Việc thảo luận về các phương pháp bền vững theo một cách hấp dẫn như vậy chắc chắn sẽ nuôi dưỡng một tình yêu sâu sắc đối với thiên nhiên." }
      ]
    }
  }
};

let existingData = {};
try {
  const fileData = fs.readFileSync(path.join(__dirname, 'src', 'data', 'part3Data.js'), 'utf8');
  const jsonStr = fileData.replace('// This file is auto-generated\nexport const part3Data = ', '').replace(/;\n?$/, '');
  existingData = JSON.parse(jsonStr);
} catch (e) {
  console.log("Could not read existing data, using generic");
}

// Merge the high-quality 5 clubs into the existing data
const mergedData = { ...existingData, ...part3Data };

const fileContent = `// This file is auto-generated
export const part3Data = ${JSON.stringify(mergedData, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'part3Data.js'), fileContent);
console.log('Successfully updated src/data/part3Data.js with HIGH QUALITY 5 clubs!');
