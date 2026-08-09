const fs = require('fs');

function getSpecificContent(clubName, question) {
  let vocab = [];
  let samples = [];
  let templates = [];
  const qType = question.toLowerCase();

  // Helper to group clubs
  const isArtMuseum = ["Art club", "Museum club"].includes(clubName);
  const isFoodCooking = ["Food club", "Cooking club"].includes(clubName);
  const isTravel = ["Travel club", "Travel club 2"].includes(clubName);
  const isLanguage = ["Language club", "Language club 2", "English club", "English club 2", "English club 3", "College club"].includes(clubName);
  const isTech = ["Technology club", "Computer club"].includes(clubName);
  const isCinema = ["Television club", "Cinema club", "Movie club", "Film club"].includes(clubName);
  const isMusic = ["Music club"].includes(clubName);
  const isBook = ["Book club", "Reading club", "Writing club"].includes(clubName);
  const isSport = ["Sports club", "Sport", "Walking club", "Fitness club", "Healthy club"].includes(clubName);
  const isBusiness = ["Business club", "Fashion club"].includes(clubName);
  const isCar = ["Car club"].includes(clubName);
  const isSocial = ["Social club", "Debate club"].includes(clubName);
  const isHome = ["Beautiful homes club", "Home living club"].includes(clubName);
  const isGarden = ["Garden club", "Nature club", "Nature club 2", "Outdoor club"].includes(clubName);
  const isPhoto = ["Photography club"].includes(clubName);
  const isScience = ["Science club"].includes(clubName);
  const isCommunity = ["Community club"].includes(clubName);

  if (isArtMuseum) {
    if (qType.includes('last time')) {
      vocab = [
        "✨ [hoạt động - V2/ed]: <strong>visited an exhibition</strong> (thăm một buổi triển lãm), <strong>went to an art gallery</strong> (đến phòng tranh nghệ thuật), <strong>explored a historical museum</strong> (khám phá bảo tàng lịch sử), <strong>attended an art workshop</strong> (tham gia một buổi hội thảo nghệ thuật)",
        "✨ [tính từ]: <strong>captivating</strong> (cuốn hút), <strong>inspiring</strong> (truyền cảm hứng), <strong>eye-opening</strong> (mở mang tầm mắt), <strong>educational</strong> (mang tính giáo dục)",
        "✨ [lợi ích - Vo]: <strong>enhance my creativity</strong> (nâng cao sự sáng tạo), <strong>widen my knowledge about history</strong> (mở rộng kiến thức về lịch sử), <strong>develop my imagination</strong> (phát triển trí tưởng tượng), <strong>take a mental break</strong> (nghỉ ngơi về mặt tinh thần)"
      ];
      samples = [
        { en: "The last time I visited a museum was about two months ago. It was a very inspiring experience because I had the chance to widen my knowledge about history.", vi: "Lần cuối cùng tôi thăm bảo tàng là khoảng hai tháng trước. Đó là một trải nghiệm rất truyền cảm hứng vì tôi có cơ hội mở rộng kiến thức về lịch sử." },
        { en: "I clearly remember exploring a historical museum at the city center last week. It was incredibly eye-opening and helped me enhance my creativity a lot.", vi: "Tôi nhớ rõ mình đã khám phá một bảo tàng lịch sử ở trung tâm thành phố vào tuần trước. Nó vô cùng mở mang tầm mắt và giúp tôi nâng cao sự sáng tạo rất nhiều." },
        { en: "A few weeks ago, I decided to go to an art gallery with my friends. It turned out to be a captivating day that allowed us to take a mental break.", vi: "Vài tuần trước, tôi quyết định đến phòng tranh nghệ thuật cùng bạn bè. Đó là một ngày cuốn hút cho phép chúng tôi nghỉ ngơi về mặt tinh thần." }
      ];
      templates = [
        "The last time I [hoạt động - V2/ed] was about [thời gian] ago. It was a very [tính từ] experience because I had the chance to [lợi ích - Vo].",
        "I clearly remember [hoạt động - V2/ed] at the city center last week. It was incredibly [tính từ] and helped me [lợi ích - Vo] a lot.",
        "A few weeks ago, I decided to [hoạt động - Vo nguyên thể] with my friends. It turned out to be a [tính từ] day that allowed us to [lợi ích - Vo]."
      ];
    } else {
      vocab = [
        "✨ [tác phẩm / phong cách]: <strong>The Starry Night</strong> (tác phẩm Đêm Đầy Sao), <strong>a picture of my hometown</strong> (bức tranh quê hương), <strong>abstract paintings</strong> (tranh trừu tượng)",
        "✨ [tính từ]: <strong>captivating</strong> (cuốn hút), <strong>inspiring</strong> (truyền cảm hứng), <strong>creative</strong> (sáng tạo), <strong>breathtaking</strong> (ngoạn mục), <strong>thought-provoking</strong> (gợi suy nghĩ)",
        "✨ [lợi ích - Vo]: <strong>enhance my creativity</strong> (nâng cao sự sáng tạo), <strong>find peace of mind</strong> (tìm sự bình yên trong tâm trí), <strong>relax after a long day</strong> (thư giãn sau một ngày dài), <strong>develop my imagination</strong> (phát triển trí tưởng tượng), <strong>take a mental break</strong> (nghỉ ngơi về mặt tinh thần)"
      ];
      samples = [
        { en: "I am really keen on The Starry Night because it is very captivating. Enjoying it helps me enhance my creativity and relax after a long day.", vi: "Tôi rất thích tác phẩm Đêm Đầy Sao vì nó rất cuốn hút. Thưởng thức nó giúp tôi nâng cao sự sáng tạo và thư giãn sau một ngày dài." },
        { en: "My favorite is a picture of my hometown, which has a deep meaning. It is incredibly inspiring and allows me to find peace of mind easily.", vi: "Yêu thích nhất của tôi là bức ảnh quê hương, nó mang một ý nghĩa sâu sắc. Nó cực kỳ truyền cảm hứng và cho phép tôi tìm sự bình yên trong tâm trí dễ dàng." },
        { en: "I have always liked abstract paintings. It is quite creative and gives me a good chance to develop my imagination and take a mental break.", vi: "Tôi luôn thích những bức tranh trừu tượng. Nó khá sáng tạo và cho tôi cơ hội tốt để phát triển trí tưởng tượng và nghỉ ngơi về mặt tinh thần." }
      ];
      templates = [
        "I am really keen on [tác phẩm / phong cách] because it is very [tính từ]. Enjoying it helps me [lợi ích - Vo] and relax after a long day.",
        "My favorite is [tác phẩm / phong cách], which has a deep meaning. It is incredibly [tính từ] and allows me to [lợi ích - Vo] easily.",
        "I have always liked [tác phẩm / phong cách]. It is quite [tính từ] and gives me a good chance to [lợi ích - Vo]."
      ];
    }
  } else if (isFoodCooking) {
    if (qType.includes('tell me') || qType.includes('describe')) {
      vocab = [
        "✨ [món ăn]: <strong>traditional Pho</strong> (phở truyền thống), <strong>Italian pasta</strong> (mì Ý), <strong>homemade salads</strong> (salad tự làm), <strong>my favorite dessert</strong> (món tráng miệng yêu thích)",
        "✨ [tính từ]: <strong>delicious</strong> (ngon miệng), <strong>nutritious</strong> (bổ dưỡng), <strong>flavorful</strong> (đậm đà), <strong>mouth-watering</strong> (chảy nước miếng)",
        "✨ [lợi ích - Vo]: <strong>maintain a healthy lifestyle</strong> (duy trì lối sống lành mạnh), <strong>promote better digestion</strong> (thúc đẩy tiêu hóa tốt hơn), <strong>create a balanced lifestyle</strong> (tạo lối sống cân bằng), <strong>forget about my worries</strong> (quên đi những lo lắng)"
      ];
      samples = [
        { en: "I would like to tell you about traditional Pho, which is very delicious and nutritious. It helps me maintain a healthy lifestyle and promote better digestion.", vi: "Tôi muốn kể về món Phở truyền thống, rất ngon miệng và bổ dưỡng. Nó giúp tôi duy trì lối sống lành mạnh và thúc đẩy tiêu hóa tốt hơn." },
        { en: "Let me talk about homemade salads, an important part of my diet. It always makes me feel happy and helps me create a balanced lifestyle.", vi: "Hãy để tôi nói về món salad tự làm, một phần quan trọng trong chế độ ăn của tôi. Nó luôn làm tôi hạnh phúc và giúp tôi tạo lối sống cân bằng." },
        { en: "One of the best things I can share is my favorite dessert. It is really flavorful and provides a chance for me to forget about my worries.", vi: "Một trong những điều tuyệt vời nhất tôi có thể chia sẻ là món tráng miệng yêu thích. Nó thực sự đậm đà và mang đến cơ hội để tôi quên đi những lo lắng." }
      ];
      templates = [
        "I would like to tell you about [món ăn], which is very [tính từ] and nutritious. It helps me [lợi ích - Vo].",
        "Let me talk about [món ăn], an important part of my diet. It always makes me feel happy and helps me [lợi ích - Vo].",
        "One of the best things I can share is [món ăn]. It is really [tính từ] and provides a chance for me to [lợi ích - Vo]."
      ];
    } else {
      vocab = [
        "✨ [địa điểm]: <strong>local restaurants</strong> (nhà hàng địa phương), <strong>cozy cafes</strong> (quán cà phê ấm cúng), <strong>my home kitchen</strong> (bếp nhà tôi), <strong>street food stalls</strong> (quầy thức ăn đường phố)",
        "✨ [tính từ]: <strong>delicious</strong> (ngon miệng), <strong>nutritious</strong> (bổ dưỡng), <strong>convenient</strong> (tiện lợi), <strong>affordable</strong> (giá cả phải chăng)",
        "✨ [lợi ích - Vo]: <strong>stay healthy</strong> (duy trì sức khỏe), <strong>prevent some health problems</strong> (phòng tránh vấn đề sức khỏe), <strong>improve my mood</strong> (cải thiện tâm trạng), <strong>save time</strong> (tiết kiệm thời gian)"
      ];
      samples = [
        { en: "I usually have meals at my home kitchen during the evening. It is a good way to stay healthy and improve my mood after a busy day.", vi: "Tôi thường dùng bữa tại bếp nhà vào buổi tối. Đây là một cách tốt để duy trì sức khỏe và cải thiện tâm trạng sau một ngày bận rộn." },
        { en: "Because I am quite busy, I tend to have meals at local restaurants. It is very convenient and helps me save time effectively.", vi: "Vì khá bận rộn, tôi có xu hướng dùng bữa ở các nhà hàng địa phương. Nó rất tiện lợi và giúp tôi tiết kiệm thời gian hiệu quả." },
        { en: "I really enjoy eating at cozy cafes every weekend. It not only provides nutritious food but also makes me feel relaxed.", vi: "Tôi rất thích ăn ở những quán cà phê ấm cúng mỗi cuối tuần. Nó không chỉ cung cấp thức ăn bổ dưỡng mà còn làm tôi cảm thấy thư giãn." }
      ];
      templates = [
        "I usually have meals at [địa điểm] during the evening. It is a good way to [lợi ích - Vo] after a busy day.",
        "Because I am quite busy, I tend to have meals at [địa điểm]. It is very [tính từ] and helps me [lợi ích - Vo] effectively.",
        "I really enjoy eating at [địa điểm] every weekend. It not only provides [tính từ] food but also makes me feel relaxed."
      ];
    }
  } else if (isTravel) {
    if (qType.includes('why')) {
      vocab = [
        "✨ [sở thích / hoạt động]: <strong>exploring new places</strong> (khám phá vùng đất mới), <strong>learning about cultures</strong> (tìm hiểu văn hóa), <strong>traveling abroad</strong> (du lịch nước ngoài), <strong>backpacking</strong> (du lịch bụi)",
        "✨ [lợi ích - Vo]: <strong>discover new places</strong> (khám phá những nơi mới), <strong>explore different cultures</strong> (tìm hiểu các nền văn hóa khác nhau), <strong>create unforgettable memories</strong> (tạo ra những kỷ niệm khó quên), <strong>expand my social circle</strong> (mở rộng mối quan hệ xã hội), <strong>have new experiences</strong> (có những trải nghiệm mới)"
      ];
      samples = [
        { en: "I decided to join this club because I am passionate about exploring new places. It allows me to discover new places and explore different cultures.", vi: "Tôi quyết định tham gia câu lạc bộ vì đam mê khám phá những vùng đất mới. Nó cho phép tôi khám phá những nơi mới và tìm hiểu các nền văn hóa khác nhau." },
        { en: "My main reason for joining is my strong interest in learning about cultures. Being here helps me to create unforgettable memories and expand my social circle.", vi: "Lý do chính tôi tham gia là thích thú tìm hiểu văn hóa. Ở đây giúp tôi tạo ra những kỷ niệm khó quên và mở rộng mối quan hệ xã hội." },
        { en: "I have always been interested in traveling abroad. Therefore, joining this club gives me a great opportunity to have new experiences and relax.", vi: "Tôi luôn thích du lịch nước ngoài. Vì vậy, tham gia câu lạc bộ này cho tôi cơ hội tuyệt vời để có những trải nghiệm mới và thư giãn." }
      ];
      templates = [
        "I decided to join this club because I am passionate about [sở thích / hoạt động]. It allows me to [lợi ích - Vo].",
        "My main reason for joining is my strong interest in [sở thích / hoạt động]. Being here helps me to [lợi ích - Vo].",
        "I have always been interested in [sở thích / hoạt động]. Therefore, joining this club gives me a great opportunity to [lợi ích - Vo] and relax."
      ];
    } else {
      vocab = [
        "✨ [địa điểm]: <strong>the coastal city</strong> (thành phố biển), <strong>the mountainous area</strong> (vùng núi), <strong>historic towns</strong> (thị trấn lịch sử), <strong>national parks</strong> (công viên quốc gia)",
        "✨ [tính từ]: <strong>breathtaking</strong> (ngoạn mục), <strong>peaceful</strong> (yên bình), <strong>stunning</strong> (tuyệt đẹp), <strong>picturesque</strong> (đẹp như tranh)",
        "✨ [lợi ích - Vo]: <strong>escape from daily stress</strong> (thoát khỏi căng thẳng hằng ngày), <strong>balance my life</strong> (cân bằng cuộc sống), <strong>boost my emotional well-being</strong> (nâng cao sức khỏe tinh thần), <strong>regain my energy</strong> (nạp lại năng lượng)"
      ];
      samples = [
        { en: "I usually visit the coastal city, which is very peaceful and breathtaking. It helps me escape from daily stress and regain my energy.", vi: "Tôi thường thăm thành phố biển, nơi rất yên bình và ngoạn mục. Nó giúp tôi thoát khỏi căng thẳng hằng ngày và nạp lại năng lượng." },
        { en: "I often travel to the mountainous area to relax. It always makes me feel peaceful and helps me balance my life effectively.", vi: "Tôi thường du lịch đến vùng núi để thư giãn. Nơi đây luôn làm tôi thấy bình yên và giúp tôi cân bằng cuộc sống hiệu quả." },
        { en: "One of the places I visit the most is historic towns. It is really stunning and provides a chance for me to boost my emotional well-being.", vi: "Một trong những nơi tôi hay đến nhất là các thị trấn lịch sử. Nó thực sự tuyệt đẹp và mang đến cơ hội để tôi nâng cao sức khỏe tinh thần." }
      ];
      templates = [
        "I usually visit [địa điểm], which is very [tính từ]. It helps me [lợi ích - Vo].",
        "I often travel to [địa điểm] to relax. It always makes me feel [tính từ] and helps me [lợi ích - Vo] effectively.",
        "One of the places I visit the most is [địa điểm]. It is really [tính từ] and provides a chance for me to [lợi ích - Vo]."
      ];
    }
  } else if (isLanguage) {
    if (qType.includes('time') || qType.includes('course')) {
      vocab = [
        "✨ [môn học / khóa học]: <strong>business communication</strong> (giao tiếp kinh doanh), <strong>foreign languages</strong> (ngoại ngữ), <strong>advanced academic writing</strong> (viết học thuật nâng cao)",
        "✨ [thời gian]: <strong>every weekday evening</strong> (mỗi tối trong tuần), <strong>on Sunday mornings</strong> (vào các sáng Chủ nhật), <strong>during my free time</strong> (trong thời gian rảnh rỗi)",
        "✨ [lợi ích - Vo]: <strong>learn to adapt to new environments</strong> (học cách thích nghi môi trường mới), <strong>build my confidence</strong> (xây dựng sự tự tin), <strong>improve my communication skills</strong> (cải thiện kỹ năng giao tiếp)"
      ];
      samples = [
        { en: "I can attend courses every weekday evening and I would like to study business communication. It helps me improve my communication skills effectively.", vi: "Tôi có thể tham gia các khóa học mỗi tối trong tuần và tôi muốn học giao tiếp kinh doanh. Việc này giúp tôi cải thiện kỹ năng giao tiếp hiệu quả." },
        { en: "I prefer attending classes on Sunday mornings to study foreign languages. It is very useful and helps me learn to adapt to new environments.", vi: "Tôi thích tham gia các lớp học vào sáng Chủ nhật để học ngoại ngữ. Khóa học này rất hữu ích và giúp tôi học cách thích nghi môi trường mới." },
        { en: "I really enjoy studying advanced academic writing during my free time. It not only builds my confidence but also makes me feel productive.", vi: "Tôi rất thích học viết học thuật nâng cao trong thời gian rảnh rỗi. Nó không chỉ xây dựng sự tự tin mà còn làm tôi cảm thấy năng suất." }
      ];
      templates = [
        "I can attend courses [thời gian] and I would like to study [môn học / khóa học]. It helps me [lợi ích - Vo] effectively.",
        "I prefer attending classes [thời gian] to study [môn học / khóa học]. It is very useful and helps me [lợi ích - Vo].",
        "I really enjoy studying [môn học / khóa học] [thời gian]. It not only [lợi ích - Vo] but also makes me feel productive."
      ];
    } else {
      vocab = [
        "✨ [đối tượng / hoạt động]: <strong>learning English</strong> (học tiếng Anh), <strong>speaking with foreigners</strong> (nói chuyện với người nước ngoài), <strong>practicing English daily</strong> (thực hành tiếng Anh mỗi ngày)",
        "✨ [tính từ]: <strong>essential</strong> (thiết yếu), <strong>practical</strong> (thực tế), <strong>helpful</strong> (hữu ích), <strong>challenging but rewarding</strong> (đầy thử thách nhưng xứng đáng)",
        "✨ [lợi ích - Vo]: <strong>learn to adapt to new environments</strong> (học cách thích nghi môi trường mới), <strong>build my confidence</strong> (xây dựng sự tự tin), <strong>improve my communication skills</strong> (cải thiện kỹ năng giao tiếp), <strong>create a favorable condition for my future career</strong> (tạo điều kiện thuận lợi cho sự nghiệp tương lai)"
      ];
      samples = [
        { en: "I would like to tell you about learning English, which is very essential and practical. It helps me learn to adapt to new environments and build my confidence.", vi: "Tôi muốn kể cho bạn về việc học tiếng Anh, rất thiết yếu và thực tế. Nó giúp tôi học cách thích nghi với môi trường mới và xây dựng sự tự tin." },
        { en: "Let me talk about speaking with foreigners, an important part of my life. It always makes me feel motivated and helps me improve my communication skills.", vi: "Hãy để tôi nói về việc giao tiếp với người nước ngoài, một phần quan trọng trong cuộc đời tôi. Việc này luôn làm tôi có động lực và giúp cải thiện kỹ năng giao tiếp." },
        { en: "One of the best things I can share is practicing English daily. It is really helpful and provides a chance for me to create a favorable condition for my future career.", vi: "Một trong những điều tuyệt vời nhất tôi có thể chia sẻ là thực hành tiếng Anh mỗi ngày. Nó thực sự hữu ích và tạo cơ hội thuận lợi cho sự nghiệp tương lai." }
      ];
      templates = [
        "I would like to tell you about [đối tượng / hoạt động], which is very [tính từ]. It helps me [lợi ích - Vo].",
        "Let me talk about [đối tượng / hoạt động], an important part of my life. It always makes me feel motivated and helps me [lợi ích - Vo].",
        "One of the best things I can share is [đối tượng / hoạt động]. It is really [tính từ] and provides a chance for me to [lợi ích - Vo]."
      ];
    }
  } else if (isTech) {
    vocab = [
      "✨ [thiết bị]: <strong>my laptop</strong> (laptop của tôi), <strong>a computer</strong> (một cái máy tính)",
      "✨ [địa điểm]: <strong>at my office</strong> (tại văn phòng), <strong>in the library</strong> (trong thư viện), <strong>at home</strong> (ở nhà)",
      "✨ [tính từ]: <strong>convenient</strong> (tiện lợi), <strong>fast</strong> (nhanh chóng), <strong>essential</strong> (cần thiết)",
      "✨ [lợi ích - Vo]: <strong>improve my digital skills</strong> (cải thiện kỹ năng công nghệ), <strong>study more effectively</strong> (học tập hiệu quả hơn), <strong>learn how to deal with real-life situations</strong> (học cách đối mặt với tình huống thực tế), <strong>learn to work independently</strong> (học cách làm việc độc lập)"
    ];
    samples = [
      { en: "I usually use my laptop at my office during working hours. It is a good way to improve my digital skills and study more effectively.", vi: "Tôi thường dùng laptop tại văn phòng trong giờ làm việc. Đây là cách tốt để cải thiện kỹ năng công nghệ và học tập hiệu quả hơn." },
      { en: "Because I am quite busy, I tend to use a computer at home. It is very convenient and helps me learn to work independently.", vi: "Vì khá bận rộn, tôi có xu hướng dùng máy tính ở nhà. Việc này rất tiện lợi và giúp tôi học cách làm việc độc lập." },
      { en: "I really enjoy working on my laptop in the library every afternoon. It not only helps me learn how to deal with real-life situations but also makes me feel focused.", vi: "Tôi rất thích làm việc trên laptop ở thư viện mỗi buổi chiều. Nó không chỉ giúp tôi học cách đối mặt với tình huống thực tế mà còn giúp tôi tập trung." }
    ];
    templates = [
      "I usually use [thiết bị] at [địa điểm] during working hours. It is a good way to [lợi ích - Vo].",
      "Because I am quite busy, I tend to use [thiết bị] at [địa điểm]. It is very [tính từ] and helps me [lợi ích - Vo].",
      "I really enjoy working on [thiết bị] at [địa điểm] every afternoon. It not only helps me [lợi ích - Vo] but also makes me feel focused."
    ];
  } else if (isCinema) {
    if (qType.includes('favorite') || qType.includes('favourite')) {
      vocab = [
        "✨ [thể loại phim]: <strong>action movies</strong> (phim hành động), <strong>romantic comedies</strong> (phim hài lãng mạn), <strong>sci-fi films</strong> (phim khoa học viễn tưởng)",
        "✨ [tính từ]: <strong>captivating</strong> (cuốn hút), <strong>thrilling</strong> (kịch tính), <strong>hilarious</strong> (hài hước), <strong>eye-opening</strong> (mở mang tầm mắt)",
        "✨ [lợi ích - Vo]: <strong>escape from daily stress</strong> (thoát khỏi căng thẳng hàng ngày), <strong>widen my knowledge</strong> (mở rộng kiến thức), <strong>develop my imagination</strong> (phát triển trí tưởng tượng)"
      ];
      samples = [
        { en: "I am really keen on action movies because they are very thrilling. Enjoying them helps me escape from daily stress and relax after a long day.", vi: "Tôi rất thích phim hành động vì chúng rất kịch tính. Thưởng thức chúng giúp tôi thoát khỏi căng thẳng hàng ngày và thư giãn sau một ngày dài." },
        { en: "My favorite is romantic comedies, which have a happy ending. They are incredibly hilarious and allow me to find peace of mind easily.", vi: "Yêu thích nhất của tôi là phim hài lãng mạn, loại phim có cái kết có hậu. Chúng vô cùng hài hước và cho phép tôi tìm thấy sự bình yên trong tâm trí một cách dễ dàng." },
        { en: "I have always liked sci-fi films. They are quite captivating and give me a good chance to develop my imagination and widen my knowledge.", vi: "Tôi luôn thích phim khoa học viễn tưởng. Chúng khá cuốn hút và cho tôi cơ hội tốt để phát triển trí tưởng tượng và mở rộng kiến thức." }
      ];
      templates = [
        "I am really keen on [thể loại phim] because they are very [tính từ]. Enjoying them helps me [lợi ích - Vo].",
        "My favorite is [thể loại phim], which have a happy ending. They are incredibly [tính từ] and allow me to [lợi ích - Vo].",
        "I have always liked [thể loại phim]. They are quite [tính từ] and give me a good chance to [lợi ích - Vo]."
      ];
    } else {
      vocab = [
        "✨ [sở thích / hoạt động]: <strong>watching blockbusters</strong> (xem phim bom tấn), <strong>going to the cinema</strong> (đi xem phim), <strong>discussing movie plots</strong> (thảo luận cốt truyện phim)",
        "✨ [tính từ]: <strong>entertaining</strong> (mang tính giải trí), <strong>engaging</strong> (lôi cuốn), <strong>thrilling</strong> (kịch tính)",
        "✨ [lợi ích - Vo]: <strong>find peace of mind</strong> (tìm sự bình yên trong tâm trí), <strong>relax after a long day</strong> (thư giãn sau một ngày dài), <strong>expand my social circle</strong> (mở rộng mối quan hệ xã hội)"
      ];
      samples = [
        { en: "I am really fond of going to the cinema because it is very entertaining. It helps me find peace of mind and relax after a long day.", vi: "Tôi rất thích đi xem phim vì nó rất giải trí. Hoạt động này giúp tôi tìm sự bình yên trong tâm trí và thư giãn sau một ngày dài." },
        { en: "What I like most about this club is discussing movie plots, which is very engaging. It gives me an opportunity to expand my social circle.", vi: "Điều tôi thích nhất ở câu lạc bộ này là thảo luận cốt truyện phim, việc này rất lôi cuốn. Nó cho tôi cơ hội để mở rộng mối quan hệ xã hội." },
        { en: "I often watch blockbusters in my free time because it is thrilling. It allows me to find peace of mind effectively.", vi: "Tôi thường xem phim bom tấn trong thời gian rảnh vì nó kịch tính. Việc này cho phép tôi tìm thấy sự bình yên hiệu quả." }
      ];
      templates = [
        "I am really fond of [sở thích / hoạt động] because it is very [tính từ]. It helps me [lợi ích - Vo].",
        "What I like most about this club is [sở thích / hoạt động], which is very [tính từ]. It gives me an opportunity to [lợi ích - Vo].",
        "I often [sở thích / hoạt động nguyên thể] in my free time because it is [tính từ]. It allows me to [lợi ích - Vo]."
      ];
    }
  } else if (isMusic) {
    vocab = [
      "✨ [địa điểm/tình huống]: <strong>on my bed</strong> (trên giường), <strong>while commuting</strong> (trong lúc đi lại), <strong>while doing housework</strong> (trong lúc làm việc nhà)",
      "✨ [tính từ]: <strong>soothing</strong> (êm dịu), <strong>energetic</strong> (tràn đầy năng lượng), <strong>uplifting</strong> (nâng cao tinh thần), <strong>melodic</strong> (giai điệu hay)",
      "✨ [lợi ích - Vo]: <strong>boost my emotional well-being</strong> (nâng cao sức khỏe tinh thần), <strong>find peace of mind</strong> (tìm sự bình yên trong tâm trí), <strong>regain my energy</strong> (nạp lại năng lượng), <strong>clear my mind</strong> (thư giãn đầu óc)"
    ];
    samples = [
      { en: "I usually listen to music while commuting during the morning. It is a good way to boost my emotional well-being and regain my energy.", vi: "Tôi thường nghe nhạc trong lúc đi lại vào buổi sáng. Đây là cách tốt để nâng cao sức khỏe tinh thần và nạp lại năng lượng." },
      { en: "Because I am quite busy, I tend to enjoy songs while doing housework. It is very soothing and helps me clear my mind effectively.", vi: "Vì khá bận rộn, tôi có xu hướng thưởng thức các bài hát trong lúc làm việc nhà. Việc này rất êm dịu và giúp tôi thư giãn đầu óc hiệu quả." },
      { en: "I really enjoy listening to pop music on my bed every night. It not only helps me find peace of mind but also makes me feel relaxed.", vi: "Tôi rất thích nghe nhạc pop trên giường mỗi tối. Việc này không chỉ giúp tôi tìm sự bình yên mà còn làm tôi cảm thấy thư giãn." }
    ];
    templates = [
      "I usually listen to music [địa điểm/tình huống]. It is a good way to [lợi ích - Vo].",
      "Because I am quite busy, I tend to enjoy songs [địa điểm/tình huống]. It is very [tính từ] and helps me [lợi ích - Vo].",
      "I really enjoy listening to music [địa điểm/tình huống]. It not only helps me [lợi ích - Vo] but also makes me feel relaxed."
    ];
  } else if (isBook) {
    if (qType.includes('last time')) {
      vocab = [
        "✨ [hoạt động - V2/ed]: <strong>read a fantastic novel</strong> (đọc một tiểu thuyết tuyệt vời), <strong>wrote a short story</strong> (viết một truyện ngắn), <strong>finished a science book</strong> (đọc xong một quyển sách khoa học)",
        "✨ [tính từ]: <strong>informative</strong> (nhiều thông tin), <strong>inspiring</strong> (truyền cảm hứng), <strong>thought-provoking</strong> (gợi suy nghĩ), <strong>fascinating</strong> (hấp dẫn)",
        "✨ [lợi ích - Vo]: <strong>widen my knowledge</strong> (mở rộng kiến thức), <strong>expand my vocabulary</strong> (mở rộng vốn từ vựng), <strong>develop my imagination</strong> (phát triển trí tưởng tượng)"
      ];
      samples = [
        { en: "The last time I read a fantastic novel was about two weeks ago. It was a very inspiring experience because I had the chance to develop my imagination.", vi: "Lần cuối cùng tôi đọc một cuốn tiểu thuyết tuyệt vời là khoảng hai tuần trước. Đó là một trải nghiệm rất truyền cảm hứng vì tôi có cơ hội phát triển trí tưởng tượng." },
        { en: "I clearly remember writing a short story at home last weekend. It was incredibly fascinating and helped me expand my vocabulary a lot.", vi: "Tôi nhớ rõ mình đã viết một truyện ngắn ở nhà vào cuối tuần trước. Nó vô cùng hấp dẫn và giúp tôi mở rộng vốn từ vựng rất nhiều." },
        { en: "A few days ago, I decided to read a science book with my friends. It turned out to be an informative day that allowed us to widen our knowledge.", vi: "Vài ngày trước, tôi quyết định đọc một cuốn sách khoa học cùng bạn bè. Hóa ra đó là một ngày nhiều thông tin cho phép chúng tôi mở rộng kiến thức." }
      ];
      templates = [
        "The last time I [hoạt động - V2/ed] was about two weeks ago. It was a very [tính từ] experience because I had the chance to [lợi ích - Vo].",
        "I clearly remember [hoạt động - V2/ed] at home last weekend. It was incredibly [tính từ] and helped me [lợi ích - Vo].",
        "A few days ago, I decided to [hoạt động - Vo nguyên thể]. It turned out to be an [tính từ] day that allowed me to [lợi ích - Vo]."
      ];
    } else {
      vocab = [
        "✨ [sở thích / lĩnh vực]: <strong>reading novels</strong> (đọc tiểu thuyết), <strong>exploring literature</strong> (khám phá văn học), <strong>collecting books</strong> (sưu tầm sách)",
        "✨ [tính từ]: <strong>informative</strong> (nhiều thông tin), <strong>relaxing</strong> (thư giãn), <strong>inspiring</strong> (truyền cảm hứng)",
        "✨ [lợi ích - Vo]: <strong>widen my knowledge</strong> (mở rộng kiến thức), <strong>expand my vocabulary</strong> (mở rộng vốn từ vựng), <strong>develop my imagination</strong> (phát triển trí tưởng tượng), <strong>escape from study pressure</strong> (thoát khỏi áp lực học tập)"
      ];
      samples = [
        { en: "I decided to join this club because I am passionate about reading novels. It allows me to widen my knowledge and expand my vocabulary.", vi: "Tôi quyết định tham gia câu lạc bộ vì đam mê đọc tiểu thuyết. Việc này cho phép tôi mở rộng kiến thức và mở rộng vốn từ vựng." },
        { en: "My main reason for joining is my strong interest in exploring literature. Being here helps me to develop my imagination and learn from other members.", vi: "Lý do chính tôi tham gia là sở thích khám phá văn học. Ở đây giúp tôi phát triển trí tưởng tượng và học hỏi từ các thành viên khác." },
        { en: "I have always been interested in collecting books. Therefore, joining this club gives me a great opportunity to escape from study pressure.", vi: "Tôi luôn thích sưu tầm sách. Vì vậy, tham gia câu lạc bộ này cho tôi cơ hội tuyệt vời để thoát khỏi áp lực học tập." }
      ];
      templates = [
        "I decided to join this club because I am passionate about [sở thích / lĩnh vực]. It allows me to [lợi ích - Vo].",
        "My main reason for joining is my strong interest in [sở thích / lĩnh vực]. Being here helps me to [lợi ích - Vo].",
        "I have always been interested in [sở thích / lĩnh vực]. Therefore, joining this club gives me a great opportunity to [lợi ích - Vo]."
      ];
    }
  } else if (isSport) {
    if (qType.includes('time') && (qType.includes('classes') || qType.includes('sessions'))) {
      vocab = [
        "✨ [lớp học / hoạt động]: <strong>yoga classes</strong> (lớp yoga), <strong>swimming sessions</strong> (buổi bơi lội), <strong>aerobics classes</strong> (lớp thể dục nhịp điệu)",
        "✨ [thời gian]: <strong>every Monday evening</strong> (mỗi tối thứ Hai), <strong>on weekend mornings</strong> (vào các buổi sáng cuối tuần), <strong>after working hours</strong> (sau giờ làm việc)",
        "✨ [lợi ích - Vo]: <strong>stay in good shape</strong> (giữ dáng), <strong>prevent health problems</strong> (phòng tránh vấn đề sức khỏe), <strong>strengthen cardiovascular health</strong> (tăng cường sức khỏe tim mạch)"
      ];
      samples = [
        { en: "I would like to take yoga classes on weekend mornings. It is a good way to stay in good shape and prevent health problems.", vi: "Tôi muốn tham gia lớp yoga vào các buổi sáng cuối tuần. Đây là một cách tốt để giữ dáng và phòng tránh vấn đề sức khỏe." },
        { en: "I prefer joining swimming sessions every Monday evening. It is very relaxing and helps me strengthen cardiovascular health effectively.", vi: "Tôi thích tham gia các buổi bơi lội mỗi tối thứ Hai. Nó rất thư giãn và giúp tôi tăng cường sức khỏe tim mạch hiệu quả." },
        { en: "I really enjoy aerobics classes after working hours. It not only improves my physical strength but also makes me feel energetic.", vi: "Tôi rất thích lớp thể dục nhịp điệu sau giờ làm việc. Nó không chỉ cải thiện sức mạnh thể chất mà còn làm tôi thấy tràn đầy năng lượng." }
      ];
      templates = [
        "I would like to take [lớp học / hoạt động] [thời gian]. It is a good way to [lợi ích - Vo].",
        "I prefer joining [lớp học / hoạt động] [thời gian]. It is very relaxing and helps me [lợi ích - Vo].",
        "I really enjoy [lớp học / hoạt động] [thời gian]. It not only [lợi ích - Vo] but also makes me feel energetic."
      ];
    } else {
      vocab = [
        "✨ [hoạt động]: <strong>playing football</strong> (chơi bóng đá), <strong>going swimming</strong> (đi bơi), <strong>jogging in the park</strong> (chạy bộ trong công viên), <strong>doing yoga</strong> (tập yoga)",
        "✨ [tính từ]: <strong>energetic</strong> (tràn đầy năng lượng), <strong>active</strong> (năng động), <strong>refreshing</strong> (sảng khoái)",
        "✨ [lợi ích - Vo]: <strong>stay in good shape</strong> (giữ dáng), <strong>prevent some health problems</strong> (phòng tránh vấn đề sức khỏe), <strong>strengthen cardiovascular health</strong> (tăng cường sức khỏe tim mạch), <strong>boost the immune system</strong> (tăng cường hệ miễn dịch)"
      ];
      samples = [
        { en: "I am really keen on playing football because it is very energetic. Enjoying it helps me stay in good shape and prevent some health problems.", vi: "Tôi rất thích chơi bóng đá vì nó rất năng động. Chơi bóng giúp tôi giữ dáng và phòng tránh vấn đề sức khỏe." },
        { en: "My favorite is doing yoga, which has a calming effect. It is incredibly refreshing and allows me to strengthen cardiovascular health easily.", vi: "Môn yêu thích của tôi là tập yoga, mang lại cảm giác bình tĩnh. Nó vô cùng sảng khoái và cho phép tôi tăng cường sức khỏe tim mạch dễ dàng." },
        { en: "I have always liked jogging in the park. It is quite active and gives me a good chance to boost the immune system.", vi: "Tôi luôn thích chạy bộ trong công viên. Nó khá năng động và cho tôi cơ hội tốt để tăng cường hệ miễn dịch." }
      ];
      templates = [
        "I am really keen on [hoạt động] because it is very [tính từ]. Enjoying it helps me [lợi ích - Vo].",
        "My favorite is [hoạt động]. It is incredibly [tính từ] and allows me to [lợi ích - Vo].",
        "I have always liked [hoạt động]. It is quite [tính từ] and gives me a good chance to [lợi ích - Vo]."
      ];
    }
  } else if (isBusiness) {
    vocab = [
      "✨ [lĩnh vực / hoạt động]: <strong>learning about startups</strong> (tìm hiểu về khởi nghiệp), <strong>following fashion trends</strong> (theo dõi xu hướng thời trang), <strong>networking with professionals</strong> (kết nối với các chuyên gia)",
      "✨ [tính từ]: <strong>professional</strong> (chuyên nghiệp), <strong>innovative</strong> (đổi mới), <strong>trendy</strong> (hợp thời trang), <strong>inspiring</strong> (truyền cảm hứng)",
      "✨ [lợi ích - Vo]: <strong>create a favorable condition for my future career</strong> (tạo điều kiện thuận lợi cho sự nghiệp tương lai), <strong>build my confidence</strong> (xây dựng sự tự tin), <strong>expand my social circle</strong> (mở rộng mối quan hệ xã hội), <strong>widen my knowledge</strong> (mở rộng kiến thức)"
    ];
    samples = [
      { en: "I decided to join this club because I am passionate about learning about startups. It allows me to create a favorable condition for my future career.", vi: "Tôi quyết định tham gia câu lạc bộ vì đam mê tìm hiểu về khởi nghiệp. Việc này cho phép tôi tạo điều kiện thuận lợi cho sự nghiệp tương lai." },
      { en: "My main reason for joining is my strong interest in following fashion trends. Being here helps me to build my confidence and expand my social circle.", vi: "Lý do chính tôi tham gia là sở thích theo dõi xu hướng thời trang. Ở đây giúp tôi xây dựng sự tự tin và mở rộng mối quan hệ xã hội." },
      { en: "I have always been interested in networking with professionals. Therefore, joining this club gives me a great opportunity to widen my knowledge.", vi: "Tôi luôn thích kết nối với các chuyên gia. Vì vậy, tham gia câu lạc bộ này cho tôi cơ hội tuyệt vời để mở rộng kiến thức." }
    ];
    templates = [
      "I decided to join this club because I am passionate about [lĩnh vực / hoạt động]. It allows me to [lợi ích - Vo].",
      "My main reason for joining is my strong interest in [lĩnh vực / hoạt động]. Being here helps me to [lợi ích - Vo].",
      "I have always been interested in [lĩnh vực / hoạt động]. Therefore, joining this club gives me a great opportunity to [lợi ích - Vo]."
    ];
  } else if (isCar) {
    vocab = [
      "✨ [hoạt động / sự vật]: <strong>driving my car</strong> (lái ô tô), <strong>traveling by car</strong> (du lịch bằng ô tô), <strong>exploring new roads</strong> (khám phá những con đường mới)",
      "✨ [tính từ]: <strong>convenient</strong> (tiện lợi), <strong>comfortable</strong> (thoải mái), <strong>safe</strong> (an toàn), <strong>time-saving</strong> (tiết kiệm thời gian)",
      "✨ [lợi ích - Vo]: <strong>save my commuting time</strong> (tiết kiệm thời gian đi lại), <strong>reduce travel fatigue</strong> (giảm mệt mỏi khi đi lại), <strong>protect myself from bad weather</strong> (bảo vệ bản thân khỏi thời tiết xấu)"
    ];
    samples = [
      { en: "Yes, I usually travel by car to my workplace every morning. It is a good way to save my commuting time and reduce travel fatigue.", vi: "Vâng, tôi thường đi làm bằng ô tô mỗi buổi sáng. Đây là cách tốt để tiết kiệm thời gian đi lại và giảm mệt mỏi." },
      { en: "Because I am quite busy, I tend to drive my car to the city center. It is very convenient and helps me protect myself from bad weather effectively.", vi: "Vì khá bận, tôi thường lái xe ô tô đến trung tâm thành phố. Nó rất tiện lợi và giúp tôi bảo vệ bản thân khỏi thời tiết xấu." },
      { en: "I really enjoy exploring new roads by car every weekend. It not only saves my commuting time but also makes me feel comfortable.", vi: "Tôi rất thích khám phá những con đường mới bằng ô tô mỗi cuối tuần. Việc này không chỉ tiết kiệm thời gian mà còn làm tôi thấy thoải mái." }
    ];
    templates = [
      "Yes, I usually [hoạt động / sự vật nguyên thể] to my workplace every morning. It is a good way to [lợi ích - Vo].",
      "Because I am quite busy, I tend to [hoạt động / sự vật nguyên thể] to the city center. It is very [tính từ] and helps me [lợi ích - Vo].",
      "I really enjoy [hoạt động / sự vật] every weekend. It not only [lợi ích - Vo s/es] but also makes me feel [tính từ]."
    ];
  } else if (isSocial) {
    if (qType.includes('talk about') || qType.includes('friend')) {
      vocab = [
        "✨ [chủ đề]: <strong>current events</strong> (sự kiện thời sự), <strong>future goals</strong> (mục tiêu tương lai), <strong>social issues</strong> (vấn đề xã hội)",
        "✨ [tính từ]: <strong>informative</strong> (nhiều thông tin), <strong>engaging</strong> (lôi cuốn), <strong>thought-provoking</strong> (gợi suy nghĩ)",
        "✨ [lợi ích - Vo]: <strong>widen my knowledge</strong> (mở rộng kiến thức), <strong>build my confidence</strong> (xây dựng sự tự tin), <strong>improve my communication skills</strong> (cải thiện kỹ năng giao tiếp)"
      ];
      samples = [
        { en: "I usually talk about current events with my best friend. It is a good way to widen my knowledge and improve my communication skills.", vi: "Tôi thường nói về các sự kiện thời sự với bạn thân. Đây là một cách tốt để mở rộng kiến thức và cải thiện kỹ năng giao tiếp." },
        { en: "Because I am quite curious, I tend to discuss future goals with my friends. It is very engaging and helps me build my confidence effectively.", vi: "Vì khá tò mò, tôi thường thảo luận mục tiêu tương lai với bạn bè. Nó rất lôi cuốn và giúp tôi xây dựng sự tự tin hiệu quả." },
        { en: "I really enjoy debating social issues with my friends every weekend. It not only improves my communication skills but also makes me feel productive.", vi: "Tôi rất thích tranh luận các vấn đề xã hội với bạn bè mỗi cuối tuần. Nó không chỉ cải thiện kỹ năng giao tiếp mà còn làm tôi cảm thấy năng suất." }
      ];
      templates = [
        "I usually talk about [chủ đề] with my best friend. It is a good way to [lợi ích - Vo].",
        "Because I am quite curious, I tend to discuss [chủ đề] with my friends. It is very [tính từ] and helps me [lợi ích - Vo].",
        "I really enjoy debating [chủ đề] with my friends every weekend. It not only [lợi ích - Vo s/es] but also makes me feel productive."
      ];
    } else {
      vocab = [
        "✨ [hoạt động]: <strong>networking with people</strong> (kết nối với mọi người), <strong>discussing ideas</strong> (thảo luận ý tưởng), <strong>sharing opinions</strong> (chia sẻ quan điểm)",
        "✨ [tính từ]: <strong>sociable</strong> (hòa đồng), <strong>confident</strong> (tự tin), <strong>open-minded</strong> (cởi mở)",
        "✨ [lợi ích - Vo]: <strong>expand my social circle</strong> (mở rộng mối quan hệ xã hội), <strong>improve my communication skills</strong> (cải thiện kỹ năng giao tiếp), <strong>build my confidence</strong> (xây dựng sự tự tin)"
      ];
      samples = [
        { en: "I decided to join this club because I am passionate about networking with people. It allows me to expand my social circle and improve my communication skills.", vi: "Tôi quyết định tham gia câu lạc bộ vì đam mê kết nối với mọi người. Nó cho phép tôi mở rộng mối quan hệ xã hội và cải thiện kỹ năng giao tiếp." },
        { en: "My main reason for joining is my strong interest in sharing opinions. Being here helps me to build my confidence and learn from other members.", vi: "Lý do chính tôi tham gia là sở thích chia sẻ quan điểm. Ở đây giúp tôi xây dựng sự tự tin và học hỏi từ các thành viên khác." },
        { en: "I have always been interested in discussing ideas. Therefore, joining this club gives me a great opportunity to widen my knowledge and be more open-minded.", vi: "Tôi luôn thích thảo luận ý tưởng. Vì vậy, tham gia câu lạc bộ này cho tôi cơ hội tuyệt vời để mở rộng kiến thức và cởi mở hơn." }
      ];
      templates = [
        "I decided to join this club because I am passionate about [hoạt động]. It allows me to [lợi ích - Vo].",
        "My main reason for joining is my strong interest in [hoạt động]. Being here helps me to [lợi ích - Vo].",
        "I have always been interested in [hoạt động]. Therefore, joining this club gives me a great opportunity to [lợi ích - Vo]."
      ];
    }
  } else if (isHome) {
    if (qType.includes('describe') || qType.includes('live')) {
      vocab = [
        "✨ [địa điểm]: <strong>a cozy apartment</strong> (một căn hộ ấm cúng), <strong>a spacious house</strong> (một ngôi nhà rộng rãi), <strong>a modern flat</strong> (một căn hộ hiện đại)",
        "✨ [tính từ]: <strong>comfortable</strong> (thoải mái), <strong>well-decorated</strong> (được trang trí đẹp), <strong>peaceful</strong> (yên bình), <strong>convenient</strong> (tiện nghi)",
        "✨ [lợi ích - Vo]: <strong>find peace of mind</strong> (tìm sự bình yên trong tâm trí), <strong>relax after a long day</strong> (thư giãn sau một ngày dài), <strong>enjoy my private space</strong> (tận hưởng không gian riêng tư)"
      ];
      samples = [
        { en: "I would like to tell you about my cozy apartment, which is very comfortable and well-decorated. It helps me find peace of mind and relax.", vi: "Tôi muốn kể cho bạn về căn hộ ấm cúng của mình, nơi rất thoải mái và được trang trí đẹp. Nó giúp tôi tìm sự bình yên và thư giãn." },
        { en: "Let me talk about my spacious house, an important part of my life. It always makes me feel peaceful and helps me enjoy my private space.", vi: "Hãy để tôi nói về ngôi nhà rộng rãi của mình, một phần quan trọng trong cuộc đời tôi. Nó luôn làm tôi thấy yên bình và giúp tôi tận hưởng không gian riêng tư." },
        { en: "One of the best things I can share is my modern flat. It is really convenient and provides a chance for me to relax and recharge my energy.", vi: "Một trong những điều tuyệt vời nhất tôi có thể chia sẻ là căn hộ hiện đại. Nó thực sự tiện nghi và mang đến cơ hội để tôi thư giãn và nạp lại năng lượng." }
      ];
      templates = [
        "I would like to tell you about [địa điểm], which is very [tính từ]. It helps me [lợi ích - Vo].",
        "Let me talk about [địa điểm], an important part of my life. It always makes me feel [tính từ] and helps me [lợi ích - Vo].",
        "One of the best things I can share is [địa điểm]. It is really [tính từ] and provides a chance for me to [lợi ích - Vo]."
      ];
    } else {
      vocab = [
        "✨ [sở thích]: <strong>decorating my house</strong> (trang trí nhà cửa), <strong>organizing furniture</strong> (sắp xếp nội thất), <strong>creating a beautiful living space</strong> (tạo không gian sống đẹp)",
        "✨ [tính từ]: <strong>creative</strong> (sáng tạo), <strong>inspiring</strong> (truyền cảm hứng), <strong>relaxing</strong> (thư giãn)",
        "✨ [lợi ích - Vo]: <strong>find peace of mind</strong> (tìm sự bình yên trong tâm trí), <strong>enhance my creativity</strong> (nâng cao sự sáng tạo), <strong>improve my mood</strong> (cải thiện tâm trạng)"
      ];
      samples = [
        { en: "I decided to join this club because I am passionate about decorating my house. It allows me to find peace of mind and enhance my creativity.", vi: "Tôi quyết định tham gia câu lạc bộ vì đam mê trang trí nhà cửa. Nó cho phép tôi tìm sự bình yên và nâng cao sự sáng tạo." },
        { en: "My main reason for joining is my strong interest in creating a beautiful living space. Being here helps me to improve my mood and learn from other members.", vi: "Lý do chính tôi tham gia là sở thích tạo không gian sống đẹp. Ở đây giúp tôi cải thiện tâm trạng và học hỏi từ các thành viên khác." },
        { en: "I have always been interested in organizing furniture. Therefore, joining this club gives me a great opportunity to relax and take a mental break.", vi: "Tôi luôn thích sắp xếp nội thất. Vì vậy, tham gia câu lạc bộ này cho tôi cơ hội tuyệt vời để thư giãn và nghỉ ngơi về mặt tinh thần." }
      ];
      templates = [
        "I decided to join this club because I am passionate about [sở thích]. It allows me to [lợi ích - Vo].",
        "My main reason for joining is my strong interest in [sở thích]. Being here helps me to [lợi ích - Vo].",
        "I have always been interested in [sở thích]. Therefore, joining this club gives me a great opportunity to [lợi ích - Vo]."
      ];
    }
  } else if (isGarden) {
    if (qType.includes('free time') || qType.includes('outdoors')) {
      vocab = [
        "✨ [hoạt động]: <strong>planting trees</strong> (trồng cây), <strong>hiking in the mountains</strong> (đi bộ đường dài trên núi), <strong>camping in the forest</strong> (cắm trại trong rừng)",
        "✨ [tính từ]: <strong>refreshing</strong> (sảng khoái), <strong>peaceful</strong> (yên bình), <strong>active</strong> (năng động)",
        "✨ [lợi ích - Vo]: <strong>find peace of mind</strong> (tìm sự bình yên trong tâm trí), <strong>escape from daily stress</strong> (thoát khỏi căng thẳng hàng ngày), <strong>breathe fresh air</strong> (hít thở không khí trong lành), <strong>stay in good shape</strong> (giữ dáng)"
      ];
      samples = [
        { en: "I am really keen on planting trees because it is very peaceful. Enjoying it helps me escape from daily stress and breathe fresh air.", vi: "Tôi rất thích trồng cây vì nó rất yên bình. Thưởng thức hoạt động này giúp tôi thoát khỏi căng thẳng hàng ngày và hít thở không khí trong lành." },
        { en: "My favorite is hiking in the mountains, which has a refreshing vibe. It is incredibly active and allows me to stay in good shape easily.", vi: "Yêu thích nhất của tôi là đi bộ đường dài trên núi, nơi có cảm giác sảng khoái. Nó vô cùng năng động và cho phép tôi giữ dáng dễ dàng." },
        { en: "I have always liked camping in the forest. It is quite relaxing and gives me a good chance to find peace of mind and connect with nature.", vi: "Tôi luôn thích cắm trại trong rừng. Nó khá thư giãn và cho tôi cơ hội tốt để tìm sự bình yên và hòa mình vào thiên nhiên." }
      ];
      templates = [
        "I am really keen on [hoạt động] because it is very [tính từ]. Enjoying it helps me [lợi ích - Vo].",
        "My favorite is [hoạt động]. It is incredibly [tính từ] and allows me to [lợi ích - Vo].",
        "I have always liked [hoạt động]. It is quite [tính từ] and gives me a good chance to [lợi ích - Vo]."
      ];
    } else {
      vocab = [
        "✨ [sở thích]: <strong>gardening</strong> (làm vườn), <strong>exploring nature</strong> (khám phá thiên nhiên), <strong>doing outdoor activities</strong> (tham gia hoạt động ngoài trời)",
        "✨ [tính từ]: <strong>rewarding</strong> (đáng giá), <strong>fascinating</strong> (hấp dẫn), <strong>eco-friendly</strong> (thân thiện với môi trường)",
        "✨ [lợi ích - Vo]: <strong>reduce stress</strong> (giảm căng thẳng), <strong>find peace of mind</strong> (tìm sự bình yên trong tâm trí), <strong>protect the environment</strong> (bảo vệ môi trường)"
      ];
      samples = [
        { en: "I decided to join this club because I am passionate about gardening. It allows me to find peace of mind and reduce stress.", vi: "Tôi quyết định tham gia câu lạc bộ vì đam mê làm vườn. Nó cho phép tôi tìm sự bình yên và giảm căng thẳng." },
        { en: "My main reason for joining is my strong interest in exploring nature. Being here helps me to breathe fresh air and learn from other members.", vi: "Lý do chính tôi tham gia là sở thích khám phá thiên nhiên. Ở đây giúp tôi hít thở không khí trong lành và học hỏi từ các thành viên khác." },
        { en: "I have always been interested in doing outdoor activities. Therefore, joining this club gives me a great opportunity to stay healthy and protect the environment.", vi: "Tôi luôn thích các hoạt động ngoài trời. Vì vậy, tham gia câu lạc bộ này cho tôi cơ hội tuyệt vời để giữ sức khỏe và bảo vệ môi trường." }
      ];
      templates = [
        "I decided to join this club because I am passionate about [sở thích]. It allows me to [lợi ích - Vo].",
        "My main reason for joining is my strong interest in [sở thích]. Being here helps me to [lợi ích - Vo].",
        "I have always been interested in [sở thích]. Therefore, joining this club gives me a great opportunity to [lợi ích - Vo]."
      ];
    }
  } else if (isPhoto) {
    vocab = [
      "✨ [hoạt động - V2/ed]: <strong>took photos at the park</strong> (chụp ảnh ở công viên), <strong>captured beautiful moments</strong> (ghi lại những khoảnh khắc đẹp), <strong>took a picture of my family</strong> (chụp ảnh gia đình)",
      "✨ [tính từ]: <strong>memorable</strong> (đáng nhớ), <strong>inspiring</strong> (truyền cảm hứng), <strong>creative</strong> (sáng tạo)",
      "✨ [lợi ích - Vo]: <strong>enhance my creativity</strong> (nâng cao sự sáng tạo), <strong>create unforgettable memories</strong> (tạo ra những kỷ niệm khó quên)"
    ];
    samples = [
      { en: "The last time I took a picture was about two days ago. It was a very inspiring experience because I had the chance to capture beautiful moments.", vi: "Lần cuối cùng tôi chụp ảnh là khoảng hai ngày trước. Đó là một trải nghiệm rất truyền cảm hứng vì tôi có cơ hội ghi lại những khoảnh khắc đẹp." },
      { en: "I clearly remember taking photos at the park last weekend. It was incredibly creative and helped me enhance my creativity a lot.", vi: "Tôi nhớ rõ mình đã chụp ảnh ở công viên vào cuối tuần trước. Nó vô cùng sáng tạo và giúp tôi nâng cao sự sáng tạo rất nhiều." },
      { en: "A few weeks ago, I decided to take a picture of my family. It turned out to be a memorable day that allowed us to create unforgettable memories.", vi: "Vài tuần trước, tôi quyết định chụp ảnh gia đình. Hóa ra đó là một ngày đáng nhớ cho phép chúng tôi tạo ra những kỷ niệm khó quên." }
    ];
    templates = [
      "The last time I took a picture was about two days ago. It was a very [tính từ] experience because I had the chance to [lợi ích - Vo].",
      "I clearly remember [hoạt động - Ving gốc nguyên thể bỏ ed thêm ing] last weekend. It was incredibly [tính từ] and helped me [lợi ích - Vo].",
      "A few weeks ago, I decided to take a picture. It turned out to be a [tính từ] day that allowed me to [lợi ích - Vo]."
    ];
  } else if (isScience) {
    vocab = [
      "✨ [sở thích / lĩnh vực]: <strong>doing experiments</strong> (làm thí nghiệm), <strong>learning about the universe</strong> (tìm hiểu về vũ trụ), <strong>staying updated with technology</strong> (cập nhật công nghệ mới)",
      "✨ [tính từ]: <strong>fascinating</strong> (hấp dẫn), <strong>mind-blowing</strong> (gây kinh ngạc), <strong>educational</strong> (mang tính giáo dục)",
      "✨ [lợi ích - Vo]: <strong>widen my knowledge</strong> (mở rộng kiến thức), <strong>develop my logical thinking</strong> (phát triển tư duy logic), <strong>discover new things</strong> (khám phá điều mới)"
    ];
    samples = [
      { en: "I decided to join this club because I am passionate about doing experiments. It allows me to widen my knowledge and discover new things.", vi: "Tôi quyết định tham gia câu lạc bộ vì đam mê làm thí nghiệm. Nó cho phép tôi mở rộng kiến thức và khám phá điều mới." },
      { en: "My main reason for joining is my strong interest in learning about the universe. Being here helps me to develop my logical thinking and learn from other members.", vi: "Lý do chính tôi tham gia là sở thích tìm hiểu về vũ trụ. Ở đây giúp tôi phát triển tư duy logic và học hỏi từ các thành viên khác." },
      { en: "I have always been interested in science. Therefore, joining this club gives me a great opportunity to widen my knowledge and stay updated with technology.", vi: "Tôi luôn thích khoa học. Vì vậy, tham gia câu lạc bộ này cho tôi cơ hội tuyệt vời để mở rộng kiến thức và cập nhật công nghệ mới." }
    ];
    templates = [
      "I decided to join this club because I am passionate about [sở thích / lĩnh vực]. It allows me to [lợi ích - Vo].",
      "My main reason for joining is my strong interest in [sở thích / lĩnh vực]. Being here helps me to [lợi ích - Vo].",
      "I have always been interested in [sở thích / lĩnh vực]. Therefore, joining this club gives me a great opportunity to [lợi ích - Vo]."
    ];
  } else if (isCommunity) {
    vocab = [
      "✨ [sở thích / lĩnh vực]: <strong>doing volunteer work</strong> (làm công việc tình nguyện), <strong>organizing charity events</strong> (tổ chức sự kiện từ thiện), <strong>helping local people</strong> (giúp đỡ người dân địa phương)",
      "✨ [tính từ]: <strong>meaningful</strong> (ý nghĩa), <strong>inspiring</strong> (truyền cảm hứng), <strong>rewarding</strong> (đáng giá)",
      "✨ [lợi ích - Vo]: <strong>contribute to the society</strong> (đóng góp cho xã hội), <strong>build my confidence</strong> (xây dựng sự tự tin), <strong>expand my social circle</strong> (mở rộng mối quan hệ xã hội)"
    ];
    samples = [
      { en: "I decided to join this club because I am passionate about doing volunteer work. It allows me to contribute to the society and help local people.", vi: "Tôi quyết định tham gia câu lạc bộ vì đam mê làm công việc tình nguyện. Nó cho phép tôi đóng góp cho xã hội và giúp đỡ người dân địa phương." },
      { en: "My main reason for joining is my strong interest in organizing charity events. Being here helps me to build my confidence and expand my social circle.", vi: "Lý do chính tôi tham gia là sở thích tổ chức sự kiện từ thiện. Ở đây giúp tôi xây dựng sự tự tin và mở rộng mối quan hệ xã hội." },
      { en: "I have always been interested in helping others. Therefore, joining this club gives me a great opportunity to do meaningful things and learn from other members.", vi: "Tôi luôn thích giúp đỡ người khác. Vì vậy, tham gia câu lạc bộ này cho tôi cơ hội tuyệt vời để làm những điều ý nghĩa và học hỏi từ các thành viên khác." }
    ];
    templates = [
      "I decided to join this club because I am passionate about [sở thích / lĩnh vực]. It allows me to [lợi ích - Vo].",
      "My main reason for joining is my strong interest in [sở thích / lĩnh vực]. Being here helps me to [lợi ích - Vo].",
      "I have always been interested in [sở thích / lĩnh vực]. Therefore, joining this club gives me a great opportunity to [lợi ích - Vo]."
    ];
  } else {
    // Fallback template just in case
    vocab = [
      "✨ [hoạt động]: <strong>participating in events</strong> (tham gia sự kiện), <strong>discussing new topics</strong> (thảo luận chủ đề mới), <strong>learning new skills</strong> (học kỹ năng mới)",
      "✨ [tính từ]: <strong>exciting</strong> (thú vị), <strong>informative</strong> (nhiều thông tin), <strong>meaningful</strong> (ý nghĩa)",
      "✨ [lợi ích - Vo]: <strong>expand my knowledge</strong> (mở rộng kiến thức), <strong>make new friends</strong> (kết bạn mới), <strong>relax after a long day</strong> (thư giãn sau một ngày dài)"
    ];
    samples = [
      { en: "I am really fond of learning new skills because it is very exciting. It helps me expand my knowledge and make new friends.", vi: "Tôi rất thích học kỹ năng mới vì nó rất thú vị. Nó giúp tôi mở rộng kiến thức và kết bạn mới." },
      { en: "What I like most about this club is discussing new topics, which is very informative. It gives me an opportunity to make new friends.", vi: "Điều tôi thích nhất ở câu lạc bộ này là thảo luận chủ đề mới, việc này có rất nhiều thông tin. Nó cho tôi cơ hội để kết bạn mới." },
      { en: "I often participate in events in my free time because it is meaningful. It allows me to relax after a long day effectively.", vi: "Tôi thường tham gia các sự kiện trong thời gian rảnh vì nó ý nghĩa. Nó cho phép tôi thư giãn sau một ngày dài một cách hiệu quả." }
    ];
    templates = [
      "I am really fond of [hoạt động] because it is very [tính từ]. It helps me [lợi ích - Vo].",
      "What I like most about this club is [hoạt động], which is very [tính từ]. It gives me an opportunity to [lợi ích - Vo].",
      "I often [hoạt động nguyên thể] in my free time because it is [tính từ]. It allows me to [lợi ích - Vo]."
    ];
  }

  return {
    text: question,
    vi: `Bản dịch gợi ý: ${question}`,
    templates,
    vocabulary: vocab,
    samples
  };
}

// Read old Part 2
const content2 = fs.readFileSync('src/data/part2Data.js', 'utf8');
const match2 = content2.match(/export const part2Data = ([\s\S]*);/);
let data2;
eval('data2 = ' + match2[1]);

for (let club in data2) {
  const specificData = getSpecificContent(club, data2[club].text);
  data2[club].templates = specificData.templates;
  data2[club].vocabulary = specificData.vocabulary;
  data2[club].samples = specificData.samples;
}

const fileContent = `export const part2Data = ${JSON.stringify(data2, null, 2)};\n`;
fs.writeFileSync('./src/data/part2Data.js', fileContent, 'utf-8');
console.log("Successfully rebuilt part2Data.js with perfectly matched templates and full translations!");
