const fs = require('fs');

function getGrammarTemplates(question, clubName) {
  const q = question.toLowerCase();
  
  if (clubName === "Car club") {
     return [
       "Yes, I usually [hoạt động / sự vật] to [địa điểm] every [thời điểm]. It is a good way to [lợi ích 1 - Vo] and [lợi ích 2 - Vo].",
       "Because I am quite busy, I tend to [hoạt động / sự vật] to [địa điểm]. It is very [tính từ] and helps me [lợi ích 1 - Vo] effectively.",
       "I really enjoy [hoạt động / sự vật] every [thời điểm]. It not only [lợi ích 1 - Vo] but also makes me feel [tính từ]."
     ];
  }

  if (q.includes('last time')) {
    return [
      "The last time I [hoạt động - V2/ed] was about [thời gian] ago. It was a very [tính từ] experience because I had the chance to [lợi ích 1 - Vo].",
      "I clearly remember [hoạt động - Ving] at [địa điểm] last [thời gian]. It was incredibly [tính từ] and helped me [lợi ích 1 - Vo] a lot.",
      "A few [thời gian] ago, I decided to [hoạt động - Vo] with my friends. It turned out to be a [tính từ] day that allowed us to [lợi ích 1 - Vo]."
    ];
  }
  if (q.includes('why did you') || q.includes('why do you') || q.includes('why are you')) {
    return [
      "I decided to join this club because I am passionate about [sở thích - Ving]. It allows me to [lợi ích 1 - Vo] and [lợi ích 2 - Vo].",
      "My main reason for joining is my strong interest in [lĩnh vực]. Being here helps me to [lợi ích 1 - Vo] and [lợi ích 2 - Vo] with other members.",
      "I have always been interested in [lĩnh vực]. Therefore, joining this club gives me a great opportunity to [lợi ích 1 - Vo] and [lợi ích 2 - Vo]."
    ];
  }
  if (q.includes('usually') || q.includes('often') || q.includes('when') || q.includes('where') || q.includes('what time') || q.includes('how often')) {
    return [
      "I usually [hoạt động - Vo] at [địa điểm] during [thời điểm]. It is a good way to [lợi ích 1 - Vo] and [lợi ích 2 - Vo] after a busy day.",
      "Because I am quite busy, I tend to [hoạt động - Vo] at [địa điểm]. It is very [tính từ] and helps me [lợi ích 1 - Vo] effectively.",
      "I really enjoy [hoạt động - Ving] at [địa điểm] every [thời điểm]. It not only [lợi ích 1 - Vo] but also makes me feel [tính từ]."
    ];
  }
  if (q.includes('favorite') || q.includes('favourite') || q.match(/\blike\b/) || q.includes('hobbies') || q.includes('interests')) {
    return [
      "I am really keen on [hoạt động / sự vật] because it is very [tính từ]. Enjoying it helps me [lợi ích 1 - Vo] and [lợi ích 2 - Vo].",
      "My favorite is [sự vật], which has a [danh từ]. It is incredibly [tính từ] and allows me to [lợi ích 1 - Vo] easily.",
      "I have always liked [hoạt động / sự vật]. It is quite [tính từ] and gives me a good chance to [lợi ích 1 - Vo] and [lợi ích 2 - Vo]."
    ];
  }
  if (q.includes('describe') || q.includes('tell me') || q.includes('live')) {
    return [
      "I would like to tell you about [đối tượng / địa điểm], which is very [tính từ 1] and [tính từ 2]. It helps me [lợi ích 1 - Vo] and [lợi ích 2 - Vo].",
      "Let me talk about [đối tượng / địa điểm], an important part of my life. It always makes me feel [cảm xúc] and helps me [lợi ích - Vo].",
      "One of the best things I can share is [đối tượng / địa điểm]. It is really [tính từ] and provides a chance for me to [lợi ích 1 - Vo] and [lợi ích 2 - Vo]."
    ];
  }
  return [
    "I am really fond of [hoạt động - Ving / sự vật] because it is very [tính từ]. It helps me [lợi ích 1 - Vo] and [lợi ích 2 - Vo] daily.",
    "What I like most about this is [sự vật], which is very [tính từ]. It gives me an opportunity to [lợi ích 1 - Vo] and [lợi ích 2 - Vo].",
    "I often [hoạt động - Vo] in my free time because it is [tính từ]. It allows me to [lợi ích 1 - Vo] and [lợi ích 2 - Vo] effectively."
  ];
}

function getSpecificContent(clubName, question) {
  let vocab = [];
  let samples = [];
  const qType = question.toLowerCase();

  switch (clubName) {
    case "Art club":
    case "Museum club":
      if (qType.includes('last time')) {
         vocab = [
            "✨ [hoạt động - V2/ed]: <strong>visited an exhibition</strong> (thăm một buổi triển lãm), <strong>went to an art gallery</strong> (đến phòng tranh nghệ thuật), <strong>explored a historical museum</strong> (khám phá bảo tàng lịch sử), <strong>attended an art workshop</strong> (tham gia một buổi hội thảo nghệ thuật)",
            "✨ [tính từ]: <strong>captivating</strong> (cuốn hút), <strong>inspiring</strong> (truyền cảm hứng), <strong>eye-opening</strong> (mở mang tầm mắt), <strong>educational</strong> (mang tính giáo dục)",
            "✨ [lợi ích - Vo]: <strong>enhance my creativity</strong> (nâng cao sự sáng tạo), <strong>widen my knowledge about history</strong> (mở rộng kiến thức về lịch sử), <strong>develop my imagination</strong> (phát triển trí tưởng tượng), <strong>take a mental break</strong> (nghỉ ngơi về mặt tinh thần)"
         ];
         samples = [
            { en: "The last time I visited a museum was about two months ago. It was a very inspiring experience because I had the chance to widen my knowledge about history.", vi: "Lần cuối cùng tôi thăm bảo tàng là khoảng hai tháng trước. Đó là một trải nghiệm rất truyền cảm hứng vì tôi có cơ hội mở rộng kiến thức về lịch sử." },
            { en: "I clearly remember exploring a historical museum at the city center last week. It was incredibly eye-opening and helped me enhance my creativity a lot.", vi: "Tôi nhớ rõ mình đã khám phá một bảo tàng lịch sử ở trung tâm thành phố vào tuần trước. Nó vô cùng mở mang tầm mắt và giúp tôi nâng cao sự sáng tạo rất nhiều." },
            { en: "A few weeks ago, I decided to go to an art gallery with my friends. It turned out to be a captivating day that allowed us to take a mental break.", vi: "Vài tuần trước, tôi quyết định đến phòng tranh nghệ thuật cùng bạn bè. Hóa ra đó là một ngày cuốn hút cho phép chúng tôi nghỉ ngơi về mặt tinh thần." }
         ];
      } else {
          vocab = [
            "✨ [tính từ]: <strong>captivating</strong> (cuốn hút), <strong>inspiring</strong> (truyền cảm hứng), <strong>creative</strong> (sáng tạo), <strong>breathtaking</strong> (ngoạn mục), <strong>thought-provoking</strong> (gợi suy nghĩ)",
            "✨ [danh từ]: <strong>unique colors</strong> (màu sắc độc đáo), <strong>deep meaning</strong> (ý nghĩa sâu sắc), <strong>artistic value</strong> (giá trị nghệ thuật), <strong>hidden message</strong> (thông điệp ẩn giấu)",
            "✨ [lợi ích - Vo]: <strong>enhance my creativity</strong> (nâng cao sự sáng tạo), <strong>find peace of mind</strong> (tìm sự bình yên trong tâm trí), <strong>relax after a long day</strong> (thư giãn sau một ngày dài), <strong>develop my imagination</strong> (phát triển trí tưởng tượng), <strong>take a mental break</strong> (nghỉ ngơi về mặt tinh thần)"
          ];
          samples = [
            { en: "I am really keen on The Starry Night because it is very captivating. Enjoying it helps me enhance my creativity and relax after a long day.", vi: "Tôi rất thích tác phẩm Đêm Đầy Sao vì nó rất cuốn hút. Thưởng thức nó giúp tôi nâng cao sự sáng tạo và thư giãn sau một ngày dài." },
            { en: "My favorite is a picture of my hometown, which has a deep meaning. It is incredibly inspiring and allows me to find peace of mind easily.", vi: "Yêu thích nhất của tôi là bức ảnh quê hương, nó mang một ý nghĩa sâu sắc. Nó cực kỳ truyền cảm hứng và cho phép tôi tìm sự bình yên trong tâm trí dễ dàng." },
            { en: "I have always liked abstract paintings. It is quite creative and gives me a good chance to develop my imagination and take a mental break.", vi: "Tôi luôn thích những bức tranh trừu tượng. Nó khá sáng tạo và cho tôi cơ hội tốt để phát triển trí tưởng tượng và nghỉ ngơi về mặt tinh thần." }
          ];
      }
      break;

    case "Food club":
    case "Cooking club":
      if (qType.includes('tell me') || qType.includes('describe')) {
         vocab = [
            "✨ [đối tượng / món ăn]: <strong>traditional Pho</strong> (phở truyền thống), <strong>Italian pasta</strong> (mì Ý), <strong>healthy salads</strong> (salad tốt cho sức khỏe), <strong>homemade cakes</strong> (bánh tự làm), <strong>seafood soup</strong> (súp hải sản)",
            "✨ [tính từ]: <strong>delicious</strong> (ngon miệng), <strong>nutritious</strong> (bổ dưỡng), <strong>flavorful</strong> (đậm đà), <strong>mouth-watering</strong> (chảy nước miếng)",
            "✨ [lợi ích - Vo]: <strong>maintain a healthy lifestyle</strong> (duy trì lối sống lành mạnh), <strong>promote better digestion</strong> (thúc đẩy tiêu hóa tốt hơn), <strong>create a balanced lifestyle</strong> (tạo lối sống cân bằng), <strong>forget about my worries</strong> (quên đi những lo lắng)"
         ];
         samples = [
            { en: "I would like to tell you about traditional Pho, which is very delicious and nutritious. It helps me maintain a healthy lifestyle and promote better digestion.", vi: "Tôi muốn kể về món Phở truyền thống, rất ngon miệng và bổ dưỡng. Nó giúp tôi duy trì lối sống lành mạnh và thúc đẩy tiêu hóa tốt hơn." },
            { en: "Let me talk about homemade salads, an important part of my diet. It always makes me feel happy and helps me create a balanced lifestyle.", vi: "Hãy để tôi nói về món salad tự làm, một phần quan trọng trong chế độ ăn của tôi. Nó luôn làm tôi hạnh phúc và giúp tôi tạo lối sống cân bằng." },
            { en: "One of the best things I can share is my favorite dessert. It is really flavorful and provides a chance for me to forget about my worries.", vi: "Một trong những điều tuyệt vời nhất tôi có thể chia sẻ là món tráng miệng yêu thích. Nó thực sự đậm đà và mang đến cơ hội để tôi quên đi những lo lắng." }
         ];
      } else {
         vocab = [
            "✨ [địa điểm]: <strong>local restaurants</strong> (nhà hàng địa phương), <strong>cozy cafes</strong> (quán cà phê ấm cúng), <strong>my home kitchen</strong> (bếp nhà tôi), <strong>street food stalls</strong> (quầy thức ăn đường phố)",
            "✨ [tính từ]: <strong>delicious</strong> (ngon miệng), <strong>nutritious</strong> (bổ dưỡng), <strong>convenient</strong> (tiện lợi), <strong>affordable</strong> (giá cả phải chăng)",
            "✨ [lợi ích - Vo]: <strong>stay healthy</strong> (duy trì sức khỏe), <strong>prevent some health problems</strong> (phòng tránh vấn đề sức khỏe), <strong>improve my mood</strong> (cải thiện tâm trạng), <strong>boost the immune system</strong> (tăng cường hệ miễn dịch)"
         ];
         samples = [
            { en: "I usually have meals at my home kitchen during the evening. It is a good way to stay healthy and improve my mood after a busy day.", vi: "Tôi thường dùng bữa tại bếp nhà vào buổi tối. Đây là một cách tốt để duy trì sức khỏe và cải thiện tâm trạng sau một ngày bận rộn." },
            { en: "Because I am quite busy, I tend to have meals at local restaurants. It is very convenient and helps me save time effectively.", vi: "Vì khá bận rộn, tôi có xu hướng dùng bữa ở các nhà hàng địa phương. Nó rất tiện lợi và giúp tôi tiết kiệm thời gian hiệu quả." },
            { en: "I really enjoy eating at cozy cafes every weekend. It not only provides nutritious food but also makes me feel relaxed.", vi: "Tôi rất thích ăn ở những quán cà phê ấm cúng mỗi cuối tuần. Nó không chỉ cung cấp thức ăn bổ dưỡng mà còn làm tôi cảm thấy thư giãn." }
         ];
      }
      break;

    case "Travel club":
    case "Travel club 2":
      if (qType.includes('why')) {
         vocab = [
            "✨ [sở thích / lĩnh vực]: <strong>exploring new places</strong> (khám phá vùng đất mới), <strong>learning about cultures</strong> (tìm hiểu văn hóa), <strong>traveling abroad</strong> (du lịch nước ngoài), <strong>backpacking</strong> (du lịch bụi)",
            "✨ [lợi ích - Vo]: <strong>discover new places</strong> (khám phá những nơi mới), <strong>explore different cultures</strong> (tìm hiểu các nền văn hóa khác nhau), <strong>create unforgettable memories</strong> (tạo ra những kỷ niệm khó quên), <strong>expand my social circle</strong> (mở rộng mối quan hệ xã hội), <strong>have new experiences</strong> (có những trải nghiệm mới)"
         ];
         samples = [
            { en: "I decided to join this club because I am passionate about exploring new places. It allows me to discover new places and explore different cultures.", vi: "Tôi quyết định tham gia câu lạc bộ vì đam mê khám phá những vùng đất mới. Nó cho phép tôi khám phá những nơi mới và tìm hiểu các nền văn hóa khác nhau." },
            { en: "My main reason for joining is my strong interest in learning about cultures. Being here helps me to create unforgettable memories and expand my social circle.", vi: "Lý do chính tôi tham gia là thích thú tìm hiểu văn hóa. Ở đây giúp tôi tạo ra những kỷ niệm khó quên và mở rộng mối quan hệ xã hội." },
            { en: "I have always been interested in traveling abroad. Therefore, joining this club gives me a great opportunity to have new experiences and relax.", vi: "Tôi luôn thích du lịch nước ngoài. Vì vậy, tham gia câu lạc bộ này cho tôi cơ hội tuyệt vời để có những trải nghiệm mới và thư giãn." }
         ];
      } else {
         vocab = [
            "✨ [đối tượng / địa điểm]: <strong>the coastal city</strong> (thành phố biển), <strong>the mountainous area</strong> (vùng núi), <strong>historic towns</strong> (thị trấn lịch sử), <strong>national parks</strong> (công viên quốc gia)",
            "✨ [tính từ]: <strong>breathtaking</strong> (ngoạn mục), <strong>peaceful</strong> (yên bình), <strong>stunning</strong> (tuyệt đẹp), <strong>picturesque</strong> (đẹp như tranh)",
            "✨ [lợi ích - Vo]: <strong>escape from daily stress</strong> (thoát khỏi căng thẳng hằng ngày), <strong>balance my life</strong> (cân bằng cuộc sống), <strong>boost my emotional well-being</strong> (nâng cao sức khỏe tinh thần), <strong>regain my energy</strong> (nạp lại năng lượng)"
         ];
         samples = [
            { en: "I would like to tell you about the coastal city, which is very peaceful and breathtaking. It helps me escape from daily stress and regain my energy.", vi: "Tôi muốn kể về thành phố biển, nơi rất yên bình và ngoạn mục. Nó giúp tôi thoát khỏi căng thẳng hằng ngày và nạp lại năng lượng." },
            { en: "Let me talk about the mountainous area, an important part of my life. It always makes me feel relaxed and helps me balance my life.", vi: "Hãy để tôi nói về vùng núi, một phần quan trọng trong cuộc đời tôi. Nó luôn làm tôi thư giãn và giúp tôi cân bằng cuộc sống." },
            { en: "One of the best things I can share is historic towns. It is really stunning and provides a chance for me to boost my emotional well-being and relax.", vi: "Một trong những điều tuyệt vời nhất tôi có thể chia sẻ là các thị trấn lịch sử. Nó thực sự tuyệt đẹp và mang đến cơ hội để tôi nâng cao sức khỏe tinh thần và thư giãn." }
         ];
      }
      break;

    case "Language club":
    case "Language club 2":
    case "English club":
    case "English club 2":
    case "English club 3":
    case "College club":
      if (qType.includes('time') && qType.includes('course')) {
         vocab = [
            "✨ [lĩnh vực]: <strong>English literature</strong> (văn học Anh), <strong>business communication</strong> (giao tiếp kinh doanh), <strong>foreign languages</strong> (ngoại ngữ), <strong>advanced academic writing</strong> (viết học thuật nâng cao)",
            "✨ [thời gian / ngày]: <strong>every weekday evening</strong> (mỗi tối trong tuần), <strong>on Sunday mornings</strong> (vào các sáng Chủ nhật), <strong>during my free time</strong> (trong thời gian rảnh rỗi)",
            "✨ [lợi ích - Vo]: <strong>learn to adapt to new environments</strong> (học cách thích nghi môi trường mới), <strong>build my confidence</strong> (xây dựng sự tự tin), <strong>improve my communication skills</strong> (cải thiện kỹ năng giao tiếp)"
         ];
         samples = [
            { en: "I can attend courses every weekday evening and I would like to study business communication. It helps me improve my communication skills effectively.", vi: "Tôi có thể tham gia các khóa học mỗi tối trong tuần và tôi muốn học giao tiếp kinh doanh." },
            { en: "I prefer attending classes on Sunday mornings to study foreign languages. It is very useful and helps me learn to adapt to new environments.", vi: "Tôi thích tham gia các lớp học vào sáng Chủ nhật để học ngoại ngữ." },
            { en: "I really enjoy studying advanced academic writing during my free time. It not only builds my confidence but also makes me feel productive.", vi: "Tôi rất thích học viết học thuật nâng cao trong thời gian rảnh rỗi." }
         ];
      } else {
          vocab = [
            "✨ [đối tượng]: <strong>learning English</strong> (học tiếng Anh), <strong>speaking with foreigners</strong> (nói chuyện với người nước ngoài), <strong>practicing grammar</strong> (thực hành ngữ pháp), <strong>reading English books</strong> (đọc sách tiếng Anh)",
            "✨ [tính từ]: <strong>essential</strong> (thiết yếu), <strong>practical</strong> (thực tế), <strong>helpful</strong> (hữu ích), <strong>challenging but rewarding</strong> (đầy thử thách nhưng xứng đáng)",
            "✨ [lợi ích - Vo]: <strong>learn to adapt to new environments</strong> (học cách thích nghi môi trường mới), <strong>build my confidence</strong> (xây dựng sự tự tin), <strong>improve my communication skills</strong> (cải thiện kỹ năng giao tiếp), <strong>create a favorable condition for my future career</strong> (tạo điều kiện thuận lợi cho sự nghiệp tương lai)"
          ];
          samples = [
            { en: "I would like to tell you about learning English, which is very essential and practical. It helps me learn to adapt to new environments and build my confidence.", vi: "Tôi muốn kể cho bạn về việc học tiếng Anh, rất thiết yếu và thực tế." },
            { en: "Let me talk about speaking with foreigners, an important part of my life. It always makes me feel motivated and helps me improve my communication skills.", vi: "Hãy để tôi nói về việc giao tiếp với người nước ngoài." },
            { en: "One of the best things I can share is practicing English daily. It is really helpful and provides a chance for me to create a favorable condition for my future career.", vi: "Một trong những điều tuyệt vời nhất tôi có thể chia sẻ là thực hành tiếng Anh mỗi ngày." }
          ];
      }
      break;

    case "Technology club":
    case "Computer club":
      vocab = [
         "✨ [địa điểm]: <strong>at my office</strong> (tại văn phòng), <strong>in the library</strong> (trong thư viện), <strong>at home</strong> (ở nhà)",
         "✨ [tính từ]: <strong>convenient</strong> (tiện lợi), <strong>fast</strong> (nhanh chóng), <strong>essential</strong> (cần thiết), <strong>advanced</strong> (tiên tiến)",
         "✨ [lợi ích - Vo]: <strong>improve my digital skills</strong> (cải thiện kỹ năng công nghệ), <strong>study more effectively</strong> (học tập hiệu quả hơn), <strong>learn how to deal with real-life situations</strong> (học cách đối mặt với tình huống thực tế), <strong>learn to work independently</strong> (học cách làm việc độc lập)"
      ];
      samples = [
         { en: "I usually use my laptop at my office during working hours. It is a good way to improve my digital skills and study more effectively after a busy day.", vi: "Tôi thường dùng laptop tại văn phòng trong giờ làm việc." },
         { en: "Because I am quite busy, I tend to use a computer at home. It is very convenient and helps me learn to work independently effectively.", vi: "Vì khá bận rộn, tôi có xu hướng dùng máy tính ở nhà." },
         { en: "I really enjoy working on my laptop in the library every afternoon. It not only helps me learn how to deal with real-life situations but also makes me feel focused.", vi: "Tôi rất thích làm việc trên laptop ở thư viện mỗi buổi chiều." }
      ];
      break;

    case "Television club":
    case "Cinema club":
    case "Movie club":
    case "Film club":
      if (qType.includes('favorite') || qType.includes('favourite')) {
         vocab = [
            "✨ [thể loại phim]: <strong>action movies</strong> (phim hành động), <strong>romantic comedies</strong> (phim hài lãng mạn), <strong>sci-fi films</strong> (phim khoa học viễn tưởng), <strong>documentaries</strong> (phim tài liệu)",
            "✨ [tính từ]: <strong>captivating</strong> (cuốn hút), <strong>thrilling</strong> (kịch tính), <strong>hilarious</strong> (hài hước), <strong>eye-opening</strong> (mở mang tầm mắt)",
            "✨ [lợi ích - Vo]: <strong>escape from daily stress</strong> (thoát khỏi căng thẳng hàng ngày), <strong>widen my knowledge</strong> (mở rộng kiến thức), <strong>develop my imagination</strong> (phát triển trí tưởng tượng)"
         ];
         samples = [
            { en: "I am really keen on action movies because they are very thrilling. Enjoying them helps me escape from daily stress and relax after a long day.", vi: "Tôi rất thích phim hành động vì chúng rất kịch tính." },
            { en: "My favorite is romantic comedies, which have a happy ending. They are incredibly hilarious and allow me to find peace of mind easily.", vi: "Yêu thích nhất của tôi là phim hài lãng mạn." },
            { en: "I have always liked sci-fi films. They are quite captivating and give me a good chance to develop my imagination and widen my knowledge.", vi: "Tôi luôn thích phim khoa học viễn tưởng." }
         ];
      } else {
          vocab = [
            "✨ [sở thích / hoạt động]: <strong>watching blockbusters</strong> (xem phim bom tấn), <strong>going to the cinema</strong> (đi xem phim), <strong>discussing movie plots</strong> (thảo luận cốt truyện phim), <strong>following TV series</strong> (theo dõi phim truyền hình dài tập)",
            "✨ [tính từ]: <strong>entertaining</strong> (mang tính giải trí), <strong>engaging</strong> (lôi cuốn), <strong>thrilling</strong> (kịch tính), <strong>relaxing</strong> (thư giãn)",
            "✨ [lợi ích - Vo]: <strong>find peace of mind</strong> (tìm sự bình yên trong tâm trí), <strong>relax after a long day</strong> (thư giãn sau một ngày dài), <strong>forget about my worries</strong> (quên đi những lo lắng), <strong>expand my social circle</strong> (mở rộng mối quan hệ xã hội)"
          ];
          samples = [
            { en: "I am really fond of going to the cinema because it is very entertaining. It helps me find peace of mind and relax after a long day.", vi: "Tôi rất thích đi xem phim vì nó rất giải trí." },
            { en: "What I like most about this is discussing movie plots, which is very engaging. It gives me an opportunity to expand my social circle and share my thoughts.", vi: "Điều tôi thích nhất ở đây là thảo luận cốt truyện phim." },
            { en: "I often watch blockbusters in my free time because it is thrilling. It allows me to forget about my worries and take a mental break effectively.", vi: "Tôi thường xem phim bom tấn trong thời gian rảnh vì nó kịch tính." }
          ];
      }
      break;
      
    case "Music club":
      vocab = [
         "✨ [địa điểm/tình huống]: <strong>on my bed</strong> (trên giường), <strong>while commuting</strong> (trong lúc đi lại), <strong>while doing housework</strong> (trong lúc làm việc nhà)",
         "✨ [tính từ]: <strong>soothing</strong> (êm dịu), <strong>energetic</strong> (tràn đầy năng lượng), <strong>uplifting</strong> (nâng cao tinh thần), <strong>melodic</strong> (giai điệu hay)",
         "✨ [lợi ích - Vo]: <strong>boost my emotional well-being</strong> (nâng cao sức khỏe tinh thần), <strong>find peace of mind</strong> (tìm sự bình yên trong tâm trí), <strong>regain my energy</strong> (nạp lại năng lượng), <strong>clear my mind</strong> (thư giãn đầu óc)"
      ];
      samples = [
         { en: "I usually listen to music while commuting during the morning. It is a good way to boost my emotional well-being and regain my energy after a busy day.", vi: "Tôi thường nghe nhạc trong lúc đi lại vào buổi sáng." },
         { en: "Because I am quite busy, I tend to enjoy songs while doing housework. It is very soothing and helps me clear my mind effectively.", vi: "Vì khá bận rộn, tôi có xu hướng thưởng thức các bài hát trong lúc làm việc nhà." },
         { en: "I really enjoy listening to pop music on my bed every night. It not only helps me find peace of mind but also makes me feel relaxed.", vi: "Tôi rất thích nghe nhạc pop trên giường mỗi tối." }
      ];
      break;

    case "Book club":
    case "Reading club":
    case "Writing club":
      if (qType.includes('last time')) {
         vocab = [
            "✨ [hoạt động - V2/ed]: <strong>read a fantastic novel</strong> (đọc một tiểu thuyết tuyệt vời), <strong>wrote a short story</strong> (viết một truyện ngắn), <strong>finished a science book</strong> (đọc xong một quyển sách khoa học), <strong>wrote a daily journal</strong> (viết nhật ký hàng ngày)",
            "✨ [tính từ]: <strong>informative</strong> (nhiều thông tin), <strong>inspiring</strong> (truyền cảm hứng), <strong>thought-provoking</strong> (gợi suy nghĩ), <strong>fascinating</strong> (hấp dẫn)",
            "✨ [lợi ích - Vo]: <strong>widen my knowledge</strong> (mở rộng kiến thức), <strong>expand my vocabulary</strong> (mở rộng vốn từ vựng), <strong>develop my imagination</strong> (phát triển trí tưởng tượng), <strong>find peace of mind</strong> (tìm sự bình yên trong tâm trí)"
         ];
         samples = [
            { en: "The last time I read a fantastic novel was about two weeks ago. It was a very inspiring experience because I had the chance to develop my imagination.", vi: "Lần cuối cùng tôi đọc một cuốn tiểu thuyết tuyệt vời là khoảng hai tuần trước." },
            { en: "I clearly remember writing a short story at home last weekend. It was incredibly fascinating and helped me expand my vocabulary a lot.", vi: "Tôi nhớ rõ mình đã viết một truyện ngắn ở nhà vào cuối tuần trước." },
            { en: "A few days ago, I decided to read a science book with my friends. It turned out to be an informative day that allowed us to widen our knowledge.", vi: "Vài ngày trước, tôi quyết định đọc một cuốn sách khoa học cùng bạn bè." }
         ];
      } else {
          vocab = [
            "✨ [sở thích / lĩnh vực]: <strong>reading novels</strong> (đọc tiểu thuyết), <strong>exploring literature</strong> (khám phá văn học), <strong>writing stories</strong> (viết truyện), <strong>collecting comic books</strong> (sưu tầm truyện tranh)",
            "✨ [tính từ]: <strong>informative</strong> (nhiều thông tin), <strong>relaxing</strong> (thư giãn), <strong>inspiring</strong> (truyền cảm hứng), <strong>fascinating</strong> (hấp dẫn)",
            "✨ [lợi ích - Vo]: <strong>widen my knowledge</strong> (mở rộng kiến thức), <strong>expand my vocabulary</strong> (mở rộng vốn từ vựng), <strong>develop my imagination</strong> (phát triển trí tưởng tượng), <strong>escape from study pressure</strong> (thoát khỏi áp lực học tập), <strong>boost my concentration</strong> (tăng khả năng tập trung)"
          ];
          samples = [
            { en: "I decided to join this club because I am passionate about reading novels. It allows me to widen my knowledge and expand my vocabulary.", vi: "Tôi quyết định tham gia câu lạc bộ vì đam mê đọc tiểu thuyết." },
            { en: "My main reason for joining is my strong interest in exploring literature. Being here helps me to develop my imagination and learn from other members.", vi: "Lý do chính tôi tham gia là sở thích khám phá văn học." },
            { en: "I have always been interested in collecting books. Therefore, joining this club gives me a great opportunity to escape from study pressure and boost my concentration.", vi: "Tôi luôn thích sưu tầm sách." }
          ];
      }
      break;
      
    case "Sports club":
    case "Sport":
    case "Walking club":
    case "Fitness club":
    case "Healthy club":
      if (qType.includes('time') && qType.includes('classes')) {
         vocab = [
            "✨ [lớp học / hoạt động]: <strong>yoga classes</strong> (lớp yoga), <strong>swimming sessions</strong> (buổi bơi lội), <strong>aerobics classes</strong> (lớp thể dục nhịp điệu), <strong>weightlifting courses</strong> (khóa tập tạ)",
            "✨ [thời gian / ngày]: <strong>every Monday evening</strong> (mỗi tối thứ Hai), <strong>on weekend mornings</strong> (vào các buổi sáng cuối tuần), <strong>after working hours</strong> (sau giờ làm việc)",
            "✨ [lợi ích - Vo]: <strong>stay in good shape</strong> (giữ dáng), <strong>prevent health problems</strong> (phòng tránh vấn đề sức khỏe), <strong>strengthen cardiovascular health</strong> (tăng cường sức khỏe tim mạch)"
         ];
         samples = [
            { en: "I would like to take yoga classes on weekend mornings. It is a good way to stay in good shape and prevent health problems.", vi: "Tôi muốn tham gia lớp yoga vào các buổi sáng cuối tuần." },
            { en: "I prefer joining swimming sessions every Monday evening. It is very relaxing and helps me strengthen cardiovascular health effectively.", vi: "Tôi thích tham gia các buổi bơi lội mỗi tối thứ Hai." },
            { en: "I really enjoy aerobics classes after working hours. It not only improves my physical strength but also makes me feel energetic.", vi: "Tôi rất thích lớp thể dục nhịp điệu sau giờ làm việc." }
         ];
      } else {
          vocab = [
            "✨ [hoạt động]: <strong>playing football</strong> (chơi bóng đá), <strong>going swimming</strong> (đi bơi), <strong>jogging in the park</strong> (chạy bộ trong công viên), <strong>doing yoga</strong> (tập yoga), <strong>working out</strong> (tập thể dục)",
            "✨ [tính từ]: <strong>energetic</strong> (tràn đầy năng lượng), <strong>active</strong> (năng động), <strong>refreshing</strong> (sảng khoái), <strong>challenging</strong> (đầy thử thách)",
            "✨ [lợi ích - Vo]: <strong>stay in good shape</strong> (giữ dáng), <strong>prevent some health problems</strong> (phòng tránh vấn đề sức khỏe), <strong>strengthen cardiovascular health</strong> (tăng cường sức khỏe tim mạch), <strong>develop physical strength</strong> (phát triển sức mạnh thể chất), <strong>boost the immune system</strong> (tăng cường hệ miễn dịch)"
          ];
          samples = [
            { en: "I am really keen on playing football because it is very energetic. Enjoying it helps me stay in good shape and prevent some health problems.", vi: "Tôi rất thích chơi bóng đá vì nó rất năng động." },
            { en: "My favorite is doing yoga, which has a calming effect. It is incredibly refreshing and allows me to strengthen cardiovascular health easily.", vi: "Môn yêu thích của tôi là tập yoga, mang lại cảm giác bình yên." },
            { en: "I have always liked jogging in the park. It is quite active and gives me a good chance to develop physical strength and boost the immune system.", vi: "Tôi luôn thích chạy bộ trong công viên." }
          ];
      }
      break;

    case "Business club":
    case "Fashion club":
      vocab = [
        "✨ [lĩnh vực / hoạt động]: <strong>learning about startups</strong> (tìm hiểu về khởi nghiệp), <strong>following fashion trends</strong> (theo dõi xu hướng thời trang), <strong>networking with professionals</strong> (kết nối với các chuyên gia), <strong>managing personal branding</strong> (quản lý thương hiệu cá nhân)",
        "✨ [tính từ]: <strong>professional</strong> (chuyên nghiệp), <strong>innovative</strong> (đổi mới), <strong>trendy</strong> (hợp thời trang), <strong>inspiring</strong> (truyền cảm hứng)",
        "✨ [lợi ích - Vo]: <strong>create a favorable condition for my future career</strong> (tạo điều kiện thuận lợi cho sự nghiệp tương lai), <strong>build my confidence</strong> (xây dựng sự tự tin), <strong>expand my social circle</strong> (mở rộng mối quan hệ xã hội), <strong>widen my knowledge</strong> (mở rộng kiến thức)"
      ];
      samples = [
        { en: "I decided to join this club because I am passionate about learning about startups. It allows me to create a favorable condition for my future career.", vi: "Tôi quyết định tham gia câu lạc bộ vì đam mê tìm hiểu về khởi nghiệp." },
        { en: "My main reason for joining is my strong interest in following fashion trends. Being here helps me to build my confidence and expand my social circle.", vi: "Lý do chính tôi tham gia là sở thích theo dõi xu hướng thời trang." },
        { en: "I have always been interested in networking with professionals. Therefore, joining this club gives me a great opportunity to widen my knowledge and learn from others.", vi: "Tôi luôn thích kết nối với các chuyên gia." }
      ];
      break;
      
    case "Car club":
      vocab = [
        "✨ [hoạt động / sự vật]: <strong>driving my car</strong> (lái ô tô), <strong>traveling by car</strong> (du lịch bằng ô tô), <strong>exploring new roads</strong> (khám phá những con đường mới)",
        "✨ [tính từ]: <strong>convenient</strong> (tiện lợi), <strong>comfortable</strong> (thoải mái), <strong>safe</strong> (an toàn), <strong>time-saving</strong> (tiết kiệm thời gian)",
        "✨ [lợi ích - Vo]: <strong>save my commuting time</strong> (tiết kiệm thời gian đi lại), <strong>reduce travel fatigue</strong> (giảm mệt mỏi khi đi lại), <strong>protect myself from bad weather</strong> (bảo vệ bản thân khỏi thời tiết xấu)"
      ];
      samples = [
        { en: "Yes, I usually travel by car to my workplace every morning. It is a good way to save my commuting time and reduce travel fatigue.", vi: "Vâng, tôi thường đi làm bằng ô tô mỗi buổi sáng." },
        { en: "Because I am quite busy, I tend to drive my car to the city center. It is very convenient and helps me protect myself from bad weather effectively.", vi: "Vì khá bận, tôi thường lái xe ô tô đến trung tâm thành phố." },
        { en: "I really enjoy exploring new roads by car every weekend. It not only saves my commuting time but also makes me feel comfortable.", vi: "Tôi rất thích khám phá những con đường mới bằng ô tô mỗi cuối tuần." }
      ];
      break;
      
    case "Social club":
    case "Debate club":
      if (qType.includes('talk about') || qType.includes('friend')) {
         vocab = [
            "✨ [chủ đề]: <strong>current events</strong> (sự kiện thời sự), <strong>future goals</strong> (mục tiêu tương lai), <strong>personal hobbies</strong> (sở thích cá nhân), <strong>social issues</strong> (vấn đề xã hội)",
            "✨ [tính từ]: <strong>informative</strong> (nhiều thông tin), <strong>engaging</strong> (lôi cuốn), <strong>thought-provoking</strong> (gợi suy nghĩ), <strong>meaningful</strong> (ý nghĩa)",
            "✨ [lợi ích - Vo]: <strong>widen my knowledge</strong> (mở rộng kiến thức), <strong>build my confidence</strong> (xây dựng sự tự tin), <strong>improve my communication skills</strong> (cải thiện kỹ năng giao tiếp)"
         ];
         samples = [
            { en: "I usually talk about current events with my best friend. It is a good way to widen my knowledge and improve my communication skills.", vi: "Tôi thường nói về các sự kiện thời sự với bạn thân." },
            { en: "Because I am quite curious, I tend to discuss future goals with my friends. It is very engaging and helps me build my confidence effectively.", vi: "Vì khá tò mò, tôi thường thảo luận mục tiêu tương lai với bạn bè." },
            { en: "I really enjoy debating social issues with my friends every weekend. It not only improves my communication skills but also makes me feel productive.", vi: "Tôi rất thích tranh luận các vấn đề xã hội với bạn bè mỗi cuối tuần." }
         ];
      } else {
          vocab = [
            "✨ [hoạt động]: <strong>networking with people</strong> (kết nối với mọi người), <strong>discussing ideas</strong> (thảo luận ý tưởng), <strong>sharing opinions</strong> (chia sẻ quan điểm)",
            "✨ [tính từ]: <strong>sociable</strong> (hòa đồng), <strong>confident</strong> (tự tin), <strong>open-minded</strong> (cởi mở)",
            "✨ [lợi ích - Vo]: <strong>expand my social circle</strong> (mở rộng mối quan hệ xã hội), <strong>improve my communication skills</strong> (cải thiện kỹ năng giao tiếp), <strong>build my confidence</strong> (xây dựng sự tự tin)"
          ];
          samples = [
            { en: "I decided to join this club because I am passionate about networking with people. It allows me to expand my social circle and improve my communication skills.", vi: "Tôi quyết định tham gia câu lạc bộ vì đam mê kết nối với mọi người." },
            { en: "My main reason for joining is my strong interest in sharing opinions. Being here helps me to build my confidence and learn from other members.", vi: "Lý do chính tôi tham gia là sở thích chia sẻ quan điểm." },
            { en: "I have always been interested in discussing ideas. Therefore, joining this club gives me a great opportunity to widen my knowledge and be more open-minded.", vi: "Tôi luôn thích thảo luận ý tưởng." }
          ];
      }
      break;

    case "Beautiful homes club":
    case "Home living club":
      if (qType.includes('describe') || qType.includes('live')) {
          vocab = [
            "✨ [địa điểm]: <strong>a cozy apartment</strong> (một căn hộ ấm cúng), <strong>a spacious house</strong> (một ngôi nhà rộng rãi), <strong>a modern flat</strong> (một căn hộ hiện đại)",
            "✨ [tính từ]: <strong>comfortable</strong> (thoải mái), <strong>well-decorated</strong> (được trang trí đẹp), <strong>peaceful</strong> (yên bình), <strong>convenient</strong> (tiện nghi)",
            "✨ [lợi ích - Vo]: <strong>find peace of mind</strong> (tìm sự bình yên trong tâm trí), <strong>relax after a long day</strong> (thư giãn sau một ngày dài), <strong>enjoy my private space</strong> (tận hưởng không gian riêng tư)"
          ];
          samples = [
            { en: "I would like to tell you about my cozy apartment, which is very comfortable and well-decorated. It helps me find peace of mind and relax after a long day.", vi: "Tôi muốn kể cho bạn về căn hộ ấm cúng của mình." },
            { en: "Let me talk about my spacious house, an important part of my life. It always makes me feel peaceful and helps me enjoy my private space.", vi: "Hãy để tôi nói về ngôi nhà rộng rãi của mình." },
            { en: "One of the best things I can share is my modern flat. It is really convenient and provides a chance for me to relax and recharge my energy.", vi: "Một trong những điều tuyệt vời nhất tôi có thể chia sẻ là căn hộ hiện đại." }
          ];
      } else {
          vocab = [
            "✨ [sở thích]: <strong>decorating my house</strong> (trang trí nhà cửa), <strong>organizing furniture</strong> (sắp xếp nội thất), <strong>creating a beautiful living space</strong> (tạo không gian sống đẹp)",
            "✨ [tính từ]: <strong>creative</strong> (sáng tạo), <strong>inspiring</strong> (truyền cảm hứng), <strong>relaxing</strong> (thư giãn)",
            "✨ [lợi ích - Vo]: <strong>find peace of mind</strong> (tìm sự bình yên trong tâm trí), <strong>enhance my creativity</strong> (nâng cao sự sáng tạo), <strong>improve my mood</strong> (cải thiện tâm trạng)"
          ];
          samples = [
            { en: "I decided to join this club because I am passionate about decorating my house. It allows me to find peace of mind and enhance my creativity.", vi: "Tôi quyết định tham gia câu lạc bộ vì đam mê trang trí nhà cửa." },
            { en: "My main reason for joining is my strong interest in creating a beautiful living space. Being here helps me to improve my mood and learn from other members.", vi: "Lý do chính tôi tham gia là sở thích tạo không gian sống đẹp." },
            { en: "I have always been interested in organizing furniture. Therefore, joining this club gives me a great opportunity to relax and take a mental break.", vi: "Tôi luôn thích sắp xếp nội thất." }
          ];
      }
      break;

    case "Garden club":
    case "Nature club":
    case "Nature club 2":
    case "Outdoor club":
      if (qType.includes('free time') || qType.includes('outdoors')) {
          vocab = [
            "✨ [hoạt động]: <strong>planting trees</strong> (trồng cây), <strong>hiking in the mountains</strong> (đi bộ đường dài trên núi), <strong>camping in the forest</strong> (cắm trại trong rừng), <strong>enjoying fresh air</strong> (tận hưởng không khí trong lành)",
            "✨ [tính từ]: <strong>refreshing</strong> (sảng khoái), <strong>peaceful</strong> (yên bình), <strong>active</strong> (năng động)",
            "✨ [lợi ích - Vo]: <strong>find peace of mind</strong> (tìm sự bình yên trong tâm trí), <strong>escape from daily stress</strong> (thoát khỏi căng thẳng hàng ngày), <strong>breathe fresh air</strong> (hít thở không khí trong lành), <strong>stay in good shape</strong> (giữ dáng)"
          ];
          samples = [
            { en: "I am really keen on planting trees because it is very peaceful. Enjoying it helps me escape from daily stress and breathe fresh air.", vi: "Tôi rất thích trồng cây vì nó rất yên bình." },
            { en: "My favorite is hiking in the mountains, which has a refreshing vibe. It is incredibly active and allows me to stay in good shape easily.", vi: "Yêu thích nhất của tôi là đi bộ đường dài trên núi." },
            { en: "I have always liked camping in the forest. It is quite relaxing and gives me a good chance to find peace of mind and connect with nature.", vi: "Tôi luôn thích cắm trại trong rừng." }
          ];
      } else {
          vocab = [
            "✨ [sở thích]: <strong>gardening</strong> (làm vườn), <strong>exploring nature</strong> (khám phá thiên nhiên), <strong>doing outdoor activities</strong> (tham gia hoạt động ngoài trời)",
            "✨ [tính từ]: <strong>relaxing</strong> (thư giãn), <strong>fascinating</strong> (hấp dẫn), <strong>healthy</strong> (lành mạnh)",
            "✨ [lợi ích - Vo]: <strong>find peace of mind</strong> (tìm sự bình yên trong tâm trí), <strong>reduce stress</strong> (giảm căng thẳng), <strong>protect the environment</strong> (bảo vệ môi trường)"
          ];
          samples = [
            { en: "I decided to join this club because I am passionate about gardening. It allows me to find peace of mind and reduce stress.", vi: "Tôi quyết định tham gia câu lạc bộ vì đam mê làm vườn." },
            { en: "My main reason for joining is my strong interest in exploring nature. Being here helps me to breathe fresh air and learn from other members.", vi: "Lý do chính tôi tham gia là sở thích khám phá thiên nhiên." },
            { en: "I have always been interested in outdoor activities. Therefore, joining this club gives me a great opportunity to stay healthy and protect the environment.", vi: "Tôi luôn thích các hoạt động ngoài trời." }
          ];
      }
      break;

    case "Photography club":
      vocab = [
        "✨ [hoạt động]: <strong>taking pictures</strong> (chụp ảnh), <strong>capturing beautiful moments</strong> (lưu giữ khoảnh khắc đẹp), <strong>editing photos</strong> (chỉnh sửa ảnh)",
        "✨ [tính từ]: <strong>creative</strong> (sáng tạo), <strong>inspiring</strong> (truyền cảm hứng), <strong>memorable</strong> (đáng nhớ)",
        "✨ [lợi ích - Vo]: <strong>enhance my creativity</strong> (nâng cao sự sáng tạo), <strong>create unforgettable memories</strong> (tạo ra những kỷ niệm khó quên), <strong>develop my imagination</strong> (phát triển trí tưởng tượng)"
      ];
      samples = [
        { en: "The last time I took a picture was about two days ago. It was a very inspiring experience because I had the chance to capture beautiful moments.", vi: "Lần cuối cùng tôi chụp ảnh là khoảng hai ngày trước." },
        { en: "I clearly remember taking photos at the park last weekend. It was incredibly creative and helped me enhance my creativity a lot.", vi: "Tôi nhớ rõ mình đã chụp ảnh ở công viên vào cuối tuần trước." },
        { en: "A few weeks ago, I decided to take a picture of my family. It turned out to be a memorable day that allowed us to create unforgettable memories.", vi: "Vài tuần trước, tôi quyết định chụp ảnh gia đình." }
      ];
      break;

    case "Science club":
      vocab = [
        "✨ [lĩnh vực]: <strong>doing experiments</strong> (làm thí nghiệm), <strong>researching technology</strong> (nghiên cứu công nghệ), <strong>learning about the universe</strong> (tìm hiểu về vũ trụ)",
        "✨ [tính từ]: <strong>informative</strong> (nhiều thông tin), <strong>fascinating</strong> (hấp dẫn), <strong>mind-blowing</strong> (gây kinh ngạc)",
        "✨ [lợi ích - Vo]: <strong>widen my knowledge</strong> (mở rộng kiến thức), <strong>discover new things</strong> (khám phá những điều mới), <strong>develop my logical thinking</strong> (phát triển tư duy logic)"
      ];
      samples = [
        { en: "I decided to join this club because I am passionate about doing experiments. It allows me to widen my knowledge and discover new things.", vi: "Tôi quyết định tham gia câu lạc bộ vì đam mê làm thí nghiệm." },
        { en: "My main reason for joining is my strong interest in learning about the universe. Being here helps me to develop my logical thinking and learn from other members.", vi: "Lý do chính tôi tham gia là sở thích tìm hiểu về vũ trụ." },
        { en: "I have always been interested in science. Therefore, joining this club gives me a great opportunity to widen my knowledge and stay updated with technology.", vi: "Tôi luôn thích khoa học." }
      ];
      break;

    case "Community club":
      vocab = [
        "✨ [hoạt động]: <strong>doing volunteer work</strong> (làm công việc tình nguyện), <strong>helping local people</strong> (giúp đỡ người dân địa phương), <strong>organizing charity events</strong> (tổ chức sự kiện từ thiện)",
        "✨ [tính từ]: <strong>meaningful</strong> (ý nghĩa), <strong>rewarding</strong> (đáng giá/xứng đáng), <strong>helpful</strong> (hữu ích)",
        "✨ [lợi ích - Vo]: <strong>expand my social circle</strong> (mở rộng mối quan hệ xã hội), <strong>build my confidence</strong> (xây dựng sự tự tin), <strong>contribute to the society</strong> (đóng góp cho xã hội)"
      ];
      samples = [
        { en: "I decided to join this club because I am passionate about doing volunteer work. It allows me to contribute to the society and help local people.", vi: "Tôi quyết định tham gia câu lạc bộ vì đam mê làm công việc tình nguyện." },
        { en: "My main reason for joining is my strong interest in organizing charity events. Being here helps me to build my confidence and expand my social circle.", vi: "Lý do chính tôi tham gia là sở thích tổ chức sự kiện từ thiện." },
        { en: "I have always been interested in helping others. Therefore, joining this club gives me a great opportunity to do meaningful things and learn from other members.", vi: "Tôi luôn thích giúp đỡ người khác." }
      ];
      break;
      
    // Default covers standard ones with generic context
    default:
      if (qType.includes('last time')) {
        vocab = [
          "✨ [thời gian]: <strong>a few weeks ago</strong> (vài tuần trước), <strong>last summer</strong> (mùa hè trước), <strong>recently</strong> (gần đây)",
          "✨ [tính từ]: <strong>memorable</strong> (đáng nhớ), <strong>unforgettable</strong> (không thể quên), <strong>meaningful</strong> (ý nghĩa)",
          "✨ [lợi ích - Vo]: <strong>gain practical experience</strong> (có thêm kinh nghiệm thực tế), <strong>create unforgettable memories</strong> (tạo ra những kỷ niệm khó quên), <strong>enjoy my free time</strong> (tận hưởng thời gian rảnh), <strong>learn new things</strong> (học những điều mới)"
        ];
        samples = [
          { en: "The last time I did this was about a few weeks ago. It was a very memorable experience because I had the chance to gain practical experience.", vi: "Lần cuối tôi làm việc này là khoảng vài tuần trước." },
          { en: "I clearly remember participating in this activity last summer. It was incredibly meaningful and helped me create unforgettable memories a lot.", vi: "Tôi nhớ rất rõ việc tham gia hoạt động này vào mùa hè năm ngoái." },
          { en: "Recently, I decided to try this out with my friends. It turned out to be an unforgettable day that allowed us to enjoy my free time.", vi: "Gần đây, tôi quyết định thử việc này cùng bạn bè." }
        ];
      } else if (qType.includes('why')) {
        vocab = [
          "✨ [sở thích / lĩnh vực]: <strong>improving myself</strong> (hoàn thiện bản thân), <strong>learning new skills</strong> (học kỹ năng mới), <strong>connecting with people</strong> (kết nối mọi người)",
          "✨ [lợi ích - Vo]: <strong>build my confidence</strong> (xây dựng sự tự tin), <strong>expand my social circle</strong> (mở rộng mối quan hệ xã hội), <strong>learn to work with others better</strong> (học cách làm việc với người khác tốt hơn), <strong>learn to solve problems effectively</strong> (học cách giải quyết vấn đề hiệu quả)"
        ];
        samples = [
          { en: "I decided to join this club because I am passionate about improving myself. It allows me to build my confidence and expand my social circle.", vi: "Tôi quyết định tham gia câu lạc bộ vì đam mê hoàn thiện bản thân." },
          { en: "My main reason for joining is my strong interest in connecting with people. Being here helps me to learn to work with others better and share my passion.", vi: "Lý do chính tôi tham gia là sở thích kết nối mọi người." },
          { en: "I have always been interested in learning new skills. Therefore, joining this club gives me a great opportunity to learn to solve problems effectively and make friends.", vi: "Tôi luôn quan tâm đến việc học kỹ năng mới." }
        ];
      } else if (qType.includes('usually') || qType.includes('often') || qType.includes('when') || qType.includes('where')) {
        vocab = [
          "✨ [tính từ]: <strong>convenient</strong> (tiện lợi), <strong>productive</strong> (hiệu quả), <strong>relaxing</strong> (thư giãn), <strong>peaceful</strong> (yên bình)",
          "✨ [lợi ích - Vo]: <strong>learn to manage my time better</strong> (học cách quản lý thời gian tốt hơn), <strong>balance my life</strong> (cân bằng cuộc sống), <strong>regain my energy</strong> (nạp lại năng lượng), <strong>work more effectively</strong> (làm việc hiệu quả hơn)"
        ];
        samples = [
          { en: "I usually do this at a quiet place during the evening. It is a good way to work more effectively and regain my energy after a busy day.", vi: "Tôi thường làm việc này ở một nơi yên tĩnh vào buổi tối." },
          { en: "Because I am quite busy, I tend to do this online. It is very convenient and helps me learn to manage my time better effectively.", vi: "Vì khá bận rộn, tôi có xu hướng làm việc này trực tuyến." },
          { en: "I really enjoy practicing this at home every weekend. It not only helps me balance my life but also makes me feel relaxed.", vi: "Tôi rất thích thực hành điều này ở nhà mỗi cuối tuần." }
        ];
      } else if (qType.includes('describe') || qType.includes('tell me')) {
        vocab = [
          "✨ [tính từ]: <strong>fascinating</strong> (hấp dẫn), <strong>unique</strong> (độc đáo), <strong>beneficial</strong> (có lợi)",
          "✨ [cảm xúc]: <strong>motivated</strong> (có động lực), <strong>proud</strong> (tự hào), <strong>happy</strong> (hạnh phúc)",
          "✨ [lợi ích - Vo]: <strong>develop useful skills</strong> (phát triển các kỹ năng hữu ích), <strong>prepare for the future</strong> (chuẩn bị cho tương lai), <strong>learn valuable life lessons</strong> (học được những bài học quý giá)"
        ];
        samples = [
          { en: "I would like to tell you about this topic, which is very fascinating and unique. It helps me develop useful skills and prepare for the future.", vi: "Tôi muốn kể về chủ đề này, nó rất hấp dẫn và độc đáo. Nó giúp tôi phát triển các kỹ năng hữu ích và chuẩn bị cho tương lai." },
          { en: "Let me talk about this passion, an important part of my life. It always makes me feel motivated and helps me learn valuable life lessons.", vi: "Hãy để tôi nói về niềm đam mê này, một phần quan trọng trong cuộc sống của tôi. Nó luôn làm tôi có động lực và giúp tôi học được những bài học quý giá." },
          { en: "One of the best things I can share is this interest. It is really beneficial and provides a chance for me to grow and succeed.", vi: "Một trong những điều tuyệt vời nhất tôi có thể chia sẻ là sở thích này. Nó thực sự có lợi và mang đến cơ hội để tôi phát triển và thành công." }
        ];
      } else {
        vocab = [
          "✨ [tính từ]: <strong>enjoyable</strong> (thú vị), <strong>practical</strong> (thực tế), <strong>essential</strong> (cần thiết)",
          "✨ [lợi ích - Vo]: <strong>improve my academic performance</strong> (cải thiện thành tích học tập), <strong>reduce stress</strong> (giảm căng thẳng), <strong>build good habits</strong> (xây dựng thói quen tốt)"
        ];
        samples = [
          { en: "I am really keen on this activity because it is very enjoyable. Enjoying it helps me reduce stress and build good habits.", vi: "Tôi rất thích hoạt động này vì nó rất thú vị. Thưởng thức nó giúp tôi giảm căng thẳng và xây dựng thói quen tốt." },
          { en: "My favorite is this hobby, which has a practical value. It is incredibly essential and allows me to improve my academic performance easily.", vi: "Yêu thích nhất của tôi là sở thích này, nó mang giá trị thực tế. Nó cực kỳ cần thiết và cho phép tôi cải thiện thành tích học tập dễ dàng." },
          { en: "I have always liked spending time on this. It is quite beneficial and gives me a good chance to relax and stay positive.", vi: "Tôi luôn thích dành thời gian cho việc này. Nó khá có lợi và cho tôi cơ hội tốt để thư giãn và giữ thái độ tích cực." }
        ];
      }
      break;
  }

  // Ensure Fallback if not populated by specific cases
  if (vocab.length === 0 || samples.length === 0) {
     return getSpecificContent("default", question);
  }

  return { 
    text: question,
    vi: `Bản dịch gợi ý: ${question}`,
    templates: getGrammarTemplates(question, clubName), 
    vocabulary: vocab, 
    samples: samples 
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

fs.writeFileSync('src/data/part2Data.js', 'export const part2Data = ' + JSON.stringify(data2, null, 2) + ';');
console.log('Successfully injected Miss Nguyet B2 Benefits Table!');
