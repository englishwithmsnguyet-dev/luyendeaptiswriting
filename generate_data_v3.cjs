const fs = require('fs');

function getSpecificContent(clubName, question) {
  let vocab = [];
  let samples = [];
  let templates = [];

  switch (clubName) {
    case "Art club": // "Tell me a painting or a photo that you like."
      vocab = [
        "✨ [tác phẩm / phong cách]: <strong>The Starry Night</strong> (tác phẩm Đêm Đầy Sao), <strong>a family photo</strong> (bức ảnh gia đình), <strong>a picture of my hometown</strong> (bức tranh quê hương)",
        "✨ [tính từ]: <strong>captivating</strong> (cuốn hút), <strong>inspiring</strong> (truyền cảm hứng), <strong>creative</strong> (sáng tạo), <strong>breathtaking</strong> (ngoạn mục), <strong>thought-provoking</strong> (gợi suy nghĩ), <strong>meaningful</strong> (ý nghĩa), <strong>gorgeous</strong> (tuyệt đẹp)",
        "✨ [lợi ích - Vo]: <strong>enhance my creativity</strong> (nâng cao sự sáng tạo), <strong>find peace of mind</strong> (tìm sự bình yên trong tâm trí), <strong>relax after a long day</strong> (thư giãn sau một ngày dài), <strong>develop my imagination</strong> (phát triển trí tưởng tượng), <strong>recall good memories</strong> (gợi nhớ những kỷ niệm đẹp), <strong>express my feelings</strong> (thể hiện cảm xúc), <strong>boost my mood</strong> (cải thiện tâm trạng)"
      ];
      samples = [
        { en: "I am really keen on The Starry Night because it is very captivating. Enjoying it helps me enhance my creativity and relax after a long day.", vi: "Tôi rất thích tác phẩm Đêm Đầy Sao vì nó rất cuốn hút. Thưởng thức nó giúp tôi nâng cao sự sáng tạo và thư giãn sau một ngày dài." },
        { en: "My favorite is a picture of my hometown, which has a deep meaning. It is incredibly inspiring and allows me to find peace of mind easily.", vi: "Yêu thích nhất của tôi là bức ảnh quê hương, nó mang một ý nghĩa sâu sắc. Nó cực kỳ truyền cảm hứng và cho phép tôi tìm sự bình yên trong tâm trí dễ dàng." },
        { en: "I have always liked a family photo. It is quite thought-provoking and gives me a good chance to recall good memories.", vi: "Tôi luôn thích một bức ảnh gia đình. Nó khá gợi suy nghĩ và cho tôi cơ hội tốt để gợi nhớ những kỷ niệm đẹp." }
      ];
      templates = [
        "I am really keen on [tác phẩm / phong cách] because it is very [tính từ]. Enjoying it helps me [lợi ích - Vo] and relax after a long day.",
        "My favorite is [tác phẩm / phong cách], which has a deep meaning. It is incredibly [tính từ] and allows me to [lợi ích - Vo] easily.",
        "I have always liked [tác phẩm / phong cách]. It is quite [tính từ] and gives me a good chance to [lợi ích - Vo]."
      ];
      break;

    case "Food club": // "When and where do you usually have meals?"
    case "Computer club": // "When and where do you use a computer?"
    case "Technology club": // "What do you usually use your laptop for?"
      if (clubName === "Food club") {
        vocab = [
          "✨ [địa điểm]: <strong>local restaurants</strong> (nhà hàng địa phương), <strong>cozy cafes</strong> (quán cà phê ấm cúng), <strong>my home kitchen</strong> (bếp nhà tôi)",
          "✨ [tính từ]: <strong>delicious</strong> (ngon miệng), <strong>nutritious</strong> (bổ dưỡng), <strong>convenient</strong> (tiện lợi)",
          "✨ [lợi ích - Vo]: <strong>stay healthy</strong> (duy trì sức khỏe), <strong>improve my mood</strong> (cải thiện tâm trạng), <strong>save time</strong> (tiết kiệm thời gian)"
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
      } else if (clubName === "Computer club") { // "When and where do you use a computer?"
        vocab = [
          "✨ [thiết bị]: <strong>my laptop</strong> (laptop của tôi), <strong>a computer</strong> (một cái máy tính), <strong>my personal computer</strong> (máy tính cá nhân), <strong>a tablet</strong> (máy tính bảng)",
          "✨ [địa điểm]: <strong>at my office</strong> (tại văn phòng), <strong>in the library</strong> (trong thư viện), <strong>at home</strong> (ở nhà), <strong>in a coffee shop</strong> (ở quán cà phê), <strong>at my university</strong> (tại trường đại học)",
          "✨ [thời gian]: <strong>during working hours</strong> (trong giờ làm việc), <strong>in the evening</strong> (vào buổi tối), <strong>on weekends</strong> (vào cuối tuần), <strong>in my free time</strong> (trong thời gian rảnh), <strong>every morning</strong> (mỗi buổi sáng)",
          "✨ [lợi ích - Vo]: <strong>improve my digital skills</strong> (cải thiện kỹ năng công nghệ), <strong>study more effectively</strong> (học tập hiệu quả hơn), <strong>learn to work independently</strong> (học cách làm việc độc lập), <strong>finish my daily tasks</strong> (hoàn thành công việc hàng ngày), <strong>search for useful information</strong> (tìm kiếm thông tin hữu ích), <strong>connect with my friends</strong> (kết nối với bạn bè), <strong>manage my work effectively</strong> (quản lý công việc hiệu quả), <strong>increase my work productivity</strong> (tăng năng suất làm việc), <strong>expand my professional network</strong> (mở rộng mạng lưới chuyên môn), <strong>work from home comfortably</strong> (làm việc tại nhà thoải mái)"
        ];
        samples = [
          { en: "I usually use my laptop at my office during working hours. It is a good way to improve my digital skills and study more effectively.", vi: "Tôi thường dùng laptop tại văn phòng trong giờ làm việc. Đây là cách tốt để cải thiện kỹ năng công nghệ và học tập hiệu quả hơn." },
          { en: "Because I am quite busy, I tend to use a computer at home in the evening. It is very convenient and helps me learn to work independently.", vi: "Vì khá bận rộn, tôi có xu hướng dùng máy tính ở nhà vào buổi tối. Việc này rất tiện lợi và giúp tôi học cách làm việc độc lập." },
          { en: "I really enjoy working on my laptop in the library on weekends. It not only helps me study more effectively but also makes me feel focused.", vi: "Tôi rất thích làm việc trên laptop ở thư viện vào cuối tuần. Nó không chỉ giúp tôi học tập hiệu quả hơn mà còn giúp tôi tập trung." }
        ];
        templates = [
          "I usually use [thiết bị] at [địa điểm] [thời gian]. It is a good way to [lợi ích - Vo].",
          "Because I am quite busy, I tend to use [thiết bị] at [địa điểm] [thời gian]. It is very convenient and helps me [lợi ích - Vo].",
          "I really enjoy working on [thiết bị] at [địa điểm] [thời gian]. It not only helps me [lợi ích - Vo] but also makes me feel focused."
        ];
      } else { // Technology club
        vocab = [
          "✨ [thiết bị]: <strong>my laptop</strong> (laptop của tôi), <strong>my smartphone</strong> (điện thoại thông minh)",
          "✨ [địa điểm]: <strong>at my office</strong> (tại văn phòng), <strong>in the library</strong> (trong thư viện), <strong>at home</strong> (ở nhà)",
          "✨ [tính từ]: <strong>convenient</strong> (tiện lợi), <strong>fast</strong> (nhanh chóng), <strong>essential</strong> (cần thiết)",
          "✨ [lợi ích - Vo]: <strong>improve my digital skills</strong> (cải thiện kỹ năng công nghệ), <strong>study more effectively</strong> (học tập hiệu quả hơn), <strong>work independently</strong> (làm việc độc lập)"
        ];
        samples = [
          { en: "I usually use my laptop at my office during working hours. It is a good way to improve my digital skills and study more effectively.", vi: "Tôi thường dùng laptop tại văn phòng trong giờ làm việc. Đây là cách tốt để cải thiện kỹ năng công nghệ và học tập hiệu quả hơn." },
          { en: "Because I am quite busy, I tend to use my laptop at home. It is very convenient and helps me learn to work independently.", vi: "Vì khá bận rộn, tôi có xu hướng dùng laptop ở nhà. Việc này rất tiện lợi và giúp tôi học cách làm việc độc lập." },
          { en: "I really enjoy working on my laptop in the library every afternoon. It not only helps me study more effectively but also makes me feel focused.", vi: "Tôi rất thích làm việc trên laptop ở thư viện mỗi buổi chiều. Nó không chỉ giúp tôi học tập hiệu quả hơn mà còn giúp tôi tập trung." }
        ];
        templates = [
          "I usually use [thiết bị] at [địa điểm] during working hours. It is a good way to [lợi ích - Vo].",
          "Because I am quite busy, I tend to use [thiết bị] at [địa điểm]. It is very [tính từ] and helps me [lợi ích - Vo].",
          "I really enjoy working on [thiết bị] at [địa điểm] every afternoon. It not only helps me [lợi ích - Vo] but also makes me feel focused."
        ];
      }
      break;

    case "Social club": // "Tell me about your best friend."
    case "Debate club": // "What do you usually talk about with your friend?"
      vocab = [
        "✨ [chủ đề]: <strong>current events</strong> (sự kiện thời sự), <strong>controversial issues</strong> (các vấn đề gây tranh cãi), <strong>books we have read</strong> (những cuốn sách đã đọc), <strong>movies we have watched</strong> (những bộ phim đã xem), <strong>our future goals</strong> (mục tiêu tương lai của chúng tôi), <strong>social issues</strong> (các vấn đề xã hội), <strong>our daily struggles</strong> (những khó khăn hàng ngày), <strong>career opportunities</strong> (các cơ hội nghề nghiệp)",
        "✨ [tính từ]: <strong>informative</strong> (nhiều thông tin), <strong>engaging</strong> (lôi cuốn), <strong>insightful</strong> (sâu sắc), <strong>mind-blowing</strong> (gây kinh ngạc), <strong>thought-provoking</strong> (gợi suy nghĩ), <strong>fascinating</strong> (hấp dẫn)",
        "✨ [lợi ích - Vo]: <strong>widen my knowledge</strong> (mở rộng kiến thức), <strong>improve my critical thinking</strong> (cải thiện tư duy phản biện), <strong>see different perspectives</strong> (nhìn nhận các góc độ khác nhau), <strong>improve my communication skills</strong> (cải thiện kỹ năng giao tiếp), <strong>boost my confidence</strong> (nâng cao sự tự tin), <strong>learn from each other</strong> (học hỏi lẫn nhau), <strong>expand my professional network</strong> (mở rộng mạng lưới chuyên môn), <strong>improve my negotiation skills</strong> (cải thiện kỹ năng đàm phán), <strong>share my work experiences</strong> (chia sẻ kinh nghiệm làm việc), <strong>learn to listen to others</strong> (học cách lắng nghe người khác), <strong>defend my opinions logically</strong> (bảo vệ ý kiến một cách có logic), <strong>solve problems effectively</strong> (giải quyết vấn đề hiệu quả)"
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
      break;

    case "Beautiful homes club": // "Why do you want to join the Beautiful homes club?"
    case "Garden club": // "Why did you join the club?"
    case "Sports club": // "Why did you decide to join the club?"
    case "Book club": // "I am a final year student... Why did you join?"
    case "Business club": // "Where do you usually go shopping?" -> Wait! Business club is about SHOPPING!
    case "Travel club": // "Why are you interested in travel?"
    case "Movie club": // "Why did you join the club?"
    case "Community club": // "Why did you join this Community club?"
    case "Science club": // "Why do you like science?"
      // Split by specific vocab
      if (clubName === "Business club") {
        // "Where do you usually go shopping?"
        vocab = [
          "✨ [địa điểm]: <strong>fashion boutiques</strong> (cửa hàng thời trang), <strong>supermarkets</strong> (siêu thị), <strong>online stores</strong> (cửa hàng trực tuyến)",
          "✨ [tính từ]: <strong>trendy</strong> (hợp thời trang), <strong>well-organized</strong> (được sắp xếp tốt), <strong>diverse</strong> (đa dạng)",
          "✨ [lợi ích - Vo]: <strong>stay fashionable</strong> (giữ phong cách thời trang), <strong>buy essential items easily</strong> (mua vật dụng thiết yếu dễ dàng), <strong>compare prices easily</strong> (so sánh giá dễ dàng)"
        ];
        samples = [
          { en: "I usually go shopping at fashion boutiques because it is very trendy. It helps me stay fashionable and boost my confidence.", vi: "Tôi thường đi mua sắm ở cửa hàng thời trang vì nó rất hợp thời trang. Nó giúp tôi giữ phong cách và tăng tự tin." },
          { en: "I tend to go shopping at supermarkets at the weekend. It is incredibly well-organized and allows me to buy essential items easily.", vi: "Tôi có xu hướng đi mua sắm ở siêu thị vào cuối tuần. Nó vô cùng ngăn nắp và cho phép tôi mua vật dụng thiết yếu dễ dàng." },
          { en: "I have always liked buying clothes from online stores. It is quite diverse and gives me a good chance to compare prices easily.", vi: "Tôi luôn thích mua quần áo từ các cửa hàng trực tuyến. Hàng hóa khá đa dạng và cho tôi cơ hội tốt để so sánh giá dễ dàng." }
        ];
        templates = [
          "I usually go shopping at [địa điểm] because it is very [tính từ]. It helps me [lợi ích - Vo].",
          "I tend to go shopping at [địa điểm] at the weekend. It is incredibly [tính từ] and allows me to [lợi ích - Vo] easily.",
          "I have always liked buying things from [địa điểm]. It is quite [tính từ] and gives me a good chance to [lợi ích - Vo]."
        ];
      } else {
        let hobby = "my hobby";
        if (clubName === "Beautiful homes club") {
          hobby = "decorating my house";
          vocab = [
            "✨ [sở thích]: <strong>decorating my house</strong> (trang trí nhà cửa), <strong>learning about interior design</strong> (tìm hiểu về thiết kế nội thất), <strong>creating a beautiful living space</strong> (tạo không gian sống đẹp), <strong>arranging indoor plants</strong> (sắp xếp cây trồng trong nhà), <strong>upgrading old furniture</strong> (nâng cấp nội thất cũ), <strong>painting the walls</strong> (sơn tường), <strong>doing DIY projects</strong> (làm đồ thủ công), <strong>shopping for home accessories</strong> (mua sắm phụ kiện trang trí)",
            "✨ [lợi ích - Vo]: <strong>turn my house into a home</strong> (biến ngôi nhà thành tổ ấm), <strong>create a comfortable space for my family</strong> (tạo không gian thoải mái cho gia đình), <strong>express my personal style</strong> (thể hiện phong cách cá nhân), <strong>make my home look spacious</strong> (làm cho ngôi nhà trông rộng rãi), <strong>impress my guests</strong> (gây ấn tượng với khách), <strong>make my home cozy</strong> (làm cho ngôi nhà trở nên ấm cúng), <strong>create a relaxing atmosphere</strong> (tạo ra bầu không khí thư giãn), <strong>showcase my creativity</strong> (thể hiện sự sáng tạo của tôi)"
          ];
        } else if (clubName === "Garden club") {
          hobby = "gardening";
          vocab = [
            "✨ [sở thích]: <strong>gardening</strong> (làm vườn), <strong>exploring nature</strong> (khám phá thiên nhiên), <strong>doing outdoor activities</strong> (tham gia hoạt động ngoài trời), <strong>growing organic vegetables</strong> (trồng rau sạch), <strong>planting colorful flowers</strong> (trồng hoa rực rỡ), <strong>designing my own garden</strong> (thiết kế khu vườn của riêng mình)",
            "✨ [lợi ích - Vo]: <strong>reduce stress</strong> (giảm căng thẳng), <strong>find peace of mind</strong> (tìm sự bình yên trong tâm trí), <strong>protect the environment</strong> (bảo vệ môi trường), <strong>provide healthy food for my family</strong> (cung cấp thực phẩm sạch cho gia đình), <strong>connect with nature</strong> (hòa mình vào thiên nhiên), <strong>escape from city noise</strong> (thoát khỏi tiếng ồn đô thị), <strong>improve my physical health</strong> (cải thiện sức khỏe thể chất)"
          ];
        } else if (clubName === "Sports club") {
          hobby = "playing sports";
          vocab = [
            "✨ [sở thích]: <strong>playing sports</strong> (chơi thể thao), <strong>staying active</strong> (sống năng động), <strong>working out</strong> (tập thể dục), <strong>playing tennis</strong> (chơi quần vợt), <strong>joining a football team</strong> (tham gia đội bóng đá), <strong>doing yoga</strong> (tập yoga)",
            "✨ [lợi ích - Vo]: <strong>stay in good shape</strong> (giữ dáng), <strong>prevent health problems</strong> (phòng tránh vấn đề sức khỏe), <strong>strengthen cardiovascular health</strong> (tăng cường sức khỏe tim mạch), <strong>build teamwork skills</strong> (xây dựng kỹ năng làm việc nhóm), <strong>relieve work pressure</strong> (giảm áp lực công việc), <strong>boost my energy levels</strong> (tăng cường mức năng lượng), <strong>expand my social circle</strong> (mở rộng mối quan hệ xã hội)"
          ];
        } else if (clubName === "Book club") {
          hobby = "reading books";
          vocab = [
            "✨ [sở thích]: <strong>reading books</strong> (đọc sách), <strong>improving my reading speed</strong> (cải thiện tốc độ đọc), <strong>sharing my passion for books</strong> (chia sẻ đam mê sách), <strong>collecting rare books</strong> (sưu tầm sách hiếm), <strong>discussing literary works</strong> (thảo luận tác phẩm văn học), <strong>writing book reviews</strong> (viết đánh giá sách)",
            "✨ [lợi ích - Vo]: <strong>widen my knowledge</strong> (mở rộng kiến thức), <strong>expand my vocabulary</strong> (mở rộng vốn từ vựng), <strong>find useful materials for my study</strong> (tìm tài liệu hữu ích cho việc học), <strong>improve my critical thinking</strong> (cải thiện tư duy phản biện), <strong>learn from different perspectives</strong> (học hỏi từ các góc nhìn khác), <strong>reduce screen time</strong> (giảm thời gian nhìn màn hình)"
          ];
        } else if (clubName === "Travel club") {
          hobby = "traveling";
          vocab = [
            "✨ [sở thích]: <strong>traveling</strong> (du lịch), <strong>exploring new places</strong> (khám phá vùng đất mới), <strong>learning about cultures</strong> (tìm hiểu văn hóa), <strong>taking photographs</strong> (chụp ảnh), <strong>trying local cuisines</strong> (thử các món ăn địa phương), <strong>backpacking around the world</strong> (du lịch bụi vòng quanh thế giới)",
            "✨ [lợi ích - Vo]: <strong>discover new places</strong> (khám phá những nơi mới), <strong>explore different cultures</strong> (tìm hiểu các nền văn hóa khác nhau), <strong>create unforgettable memories</strong> (tạo ra những kỷ niệm khó quên), <strong>broaden my horizons</strong> (mở rộng tầm nhìn), <strong>step out of my comfort zone</strong> (bước ra khỏi vùng an toàn), <strong>meet interesting people</strong> (gặp gỡ những người thú vị), <strong>unwind after a busy month</strong> (thư giãn sau một tháng bận rộn)"
          ];
        } else if (clubName === "Movie club") {
          hobby = "watching movies";
          vocab = [
            "✨ [sở thích]: <strong>watching movies</strong> (xem phim), <strong>going to the cinema</strong> (đi xem phim), <strong>discussing movie plots</strong> (thảo luận cốt truyện phim), <strong>reviewing new releases</strong> (đánh giá các bộ phim mới ra mắt), <strong>watching independent films</strong> (xem phim độc lập), <strong>binge-watching TV series</strong> (cày phim truyền hình)",
            "✨ [lợi ích - Vo]: <strong>find peace of mind</strong> (tìm sự bình yên trong tâm trí), <strong>relax after a long day</strong> (thư giãn sau một ngày dài), <strong>expand my social circle</strong> (mở rộng mối quan hệ xã hội), <strong>experience different emotions</strong> (trải nghiệm nhiều cảm xúc khác nhau), <strong>improve my language skills</strong> (cải thiện kỹ năng ngôn ngữ), <strong>bond with my friends</strong> (gắn kết với bạn bè)"
          ];
        } else if (clubName === "Community club") {
          hobby = "doing volunteer work";
          vocab = [
            "✨ [sở thích]: <strong>doing volunteer work</strong> (làm công việc tình nguyện), <strong>organizing charity events</strong> (tổ chức sự kiện từ thiện), <strong>helping local people</strong> (giúp đỡ người dân địa phương), <strong>planting trees in the neighborhood</strong> (trồng cây trong khu phố), <strong>cleaning up public spaces</strong> (dọn dẹp không gian công cộng), <strong>teaching children for free</strong> (dạy học miễn phí cho trẻ em)",
            "✨ [lợi ích - Vo]: <strong>contribute to the society</strong> (đóng góp cho xã hội), <strong>build my confidence</strong> (xây dựng sự tự tin), <strong>expand my social circle</strong> (mở rộng mối quan hệ xã hội), <strong>make a positive impact on the community</strong> (tạo ra tác động tích cực đến cộng đồng), <strong>develop my leadership skills</strong> (phát triển kỹ năng lãnh đạo), <strong>learn to empathize with others</strong> (học cách đồng cảm với người khác)"
          ];
        } else if (clubName === "Science club") {
          hobby = "doing experiments";
          vocab = [
            "✨ [sở thích]: <strong>doing experiments</strong> (làm thí nghiệm), <strong>learning about the universe</strong> (tìm hiểu về vũ trụ), <strong>staying updated with technology</strong> (cập nhật công nghệ mới), <strong>reading scientific journals</strong> (đọc tạp chí khoa học), <strong>attending science workshops</strong> (tham gia hội thảo khoa học), <strong>building robots</strong> (chế tạo robot)",
            "✨ [lợi ích - Vo]: <strong>widen my knowledge</strong> (mở rộng kiến thức), <strong>develop my logical thinking</strong> (phát triển tư duy logic), <strong>discover new things</strong> (khám phá điều mới), <strong>satisfy my curiosity</strong> (thỏa mãn sự tò mò), <strong>apply theories into practice</strong> (áp dụng lý thuyết vào thực tế), <strong>solve complex problems</strong> (giải quyết các vấn đề phức tạp)"
          ];
        }
        
        samples = [
          { en: `I decided to join this club because I am passionate about ${hobby}. It allows me to ${vocab[1].match(/<strong>(.*?)<\/strong>/)[1]}.`, vi: `Tôi quyết định tham gia câu lạc bộ vì đam mê sở thích này. Nó cho phép tôi đạt được nhiều lợi ích thiết thực.` },
          { en: `My main reason for joining is my strong interest in ${hobby}. Being here helps me to learn and improve a lot.`, vi: `Lý do chính tôi tham gia là sự quan tâm mãnh liệt với sở thích này. Ở đây giúp tôi học hỏi và cải thiện rất nhiều.` },
          { en: `I have always been interested in ${hobby}. Therefore, joining this club gives me a great opportunity to explore more.`, vi: `Tôi luôn quan tâm đến lĩnh vực này. Vì vậy, tham gia câu lạc bộ cho tôi cơ hội tuyệt vời để khám phá thêm.` }
        ];
        templates = [
          "I decided to join this club because I am passionate about [sở thích]. It allows me to [lợi ích - Vo].",
          "My main reason for joining is my strong interest in [sở thích]. Being here helps me to [lợi ích - Vo].",
          "I have always been interested in [sở thích]. Therefore, joining this club gives me a great opportunity to [lợi ích - Vo]."
        ];
      }
      break;

    case "Healthy club": // "Tell me the classes you want to take and what times and days are suitable for you."
      vocab = [
        "✨ [lớp học]: <strong>yoga classes</strong> (lớp yoga), <strong>swimming sessions</strong> (buổi bơi lội), <strong>aerobics classes</strong> (lớp thể dục nhịp điệu), <strong>meditation workshops</strong> (hội thảo thiền định), <strong>nutrition courses</strong> (khóa học dinh dưỡng), <strong>mental health seminars</strong> (hội thảo sức khỏe tinh thần)",
        "✨ [thời gian]: <strong>every Monday evening</strong> (mỗi tối thứ Hai), <strong>on weekend mornings</strong> (vào các buổi sáng cuối tuần), <strong>after working hours</strong> (sau giờ làm việc), <strong>during my lunch break</strong> (trong giờ nghỉ trưa), <strong>early in the morning</strong> (sáng sớm)",
        "✨ [lợi ích - Vo]: <strong>stay in good shape</strong> (giữ dáng), <strong>prevent health problems</strong> (phòng tránh vấn đề sức khỏe), <strong>strengthen cardiovascular health</strong> (tăng cường sức khỏe tim mạch), <strong>maintain a balanced diet</strong> (duy trì chế độ ăn cân bằng), <strong>improve my mental well-being</strong> (cải thiện sức khỏe tinh thần), <strong>boost my immune system</strong> (tăng cường hệ miễn dịch)"
      ];
      samples = [
        { en: "I can attend classes every Monday evening and I would like to learn yoga. It helps me stay in good shape effectively.", vi: "Tôi có thể tham gia các lớp học vào mỗi tối thứ Hai và tôi muốn học yoga. Việc này giúp tôi giữ dáng hiệu quả." },
        { en: "I prefer attending classes on weekend mornings to learn swimming. It is very useful and helps me prevent health problems.", vi: "Tôi thích tham gia các lớp học vào các buổi sáng cuối tuần để học bơi. Khóa học này rất hữu ích và giúp tôi phòng tránh vấn đề sức khỏe." },
        { en: "I really enjoy learning aerobics after working hours. It not only strengthens cardiovascular health but also makes me feel productive.", vi: "Tôi rất thích học thể dục nhịp điệu sau giờ làm việc. Nó không chỉ tăng cường sức khỏe tim mạch mà còn làm tôi cảm thấy năng suất." }
      ];
      templates = [
        "I can attend classes [thời gian] and I would like to learn [lớp học]. It helps me [lợi ích - Vo] effectively.",
        "I prefer attending classes [thời gian] to learn [lớp học]. It is very useful and helps me [lợi ích - Vo].",
        "I really enjoy learning [lớp học] [thời gian]. It not only [lợi ích - Vo] but also makes me feel productive."
      ];
      break;

    case "College club": // "Please tell us about the days and times you can attend courses and what you would like to study."
      vocab = [
        "✨ [môn học]: <strong>business communication</strong> (giao tiếp kinh doanh), <strong>foreign languages</strong> (ngoại ngữ), <strong>advanced academic writing</strong> (viết học thuật nâng cao), <strong>information technology</strong> (công nghệ thông tin), <strong>marketing strategies</strong> (chiến lược tiếp thị), <strong>graphic design</strong> (thiết kế đồ họa), <strong>English classes</strong> (lớp học tiếng Anh)",
        "✨ [ngày]: <strong>on Monday and Wednesday</strong> (vào thứ Hai và thứ Tư), <strong>on Tuesday and Thursday</strong> (vào thứ Ba và thứ Năm), <strong>on weekends</strong> (vào cuối tuần), <strong>every Saturday</strong> (mỗi thứ Bảy)",
        "✨ [giờ]: <strong>at 7 PM</strong> (lúc 7 giờ tối), <strong>at 6 PM</strong> (lúc 6 giờ tối), <strong>at 9 AM</strong> (lúc 9 giờ sáng), <strong>at 10 AM</strong> (lúc 10 giờ sáng)",
        "✨ [lợi ích - Vo]: <strong>learn to adapt to new environments</strong> (học cách thích nghi môi trường mới), <strong>build my confidence</strong> (xây dựng sự tự tin), <strong>improve my communication skills</strong> (cải thiện kỹ năng giao tiếp), <strong>prepare for my future career</strong> (chuẩn bị cho sự nghiệp tương lai), <strong>widen my knowledge</strong> (mở rộng kiến thức), <strong>make new friends</strong> (kết bạn mới)"
      ];
      samples = [
        { en: "I can attend courses on Monday and Wednesday at 7 PM and I would like to study business communication. It helps me improve myself effectively.", vi: "Tôi có thể tham gia các khóa học vào thứ Hai và thứ Tư lúc 7 giờ tối và tôi muốn học giao tiếp kinh doanh. Việc này giúp tôi cải thiện bản thân hiệu quả." },
        { en: "I prefer attending classes on weekends at 9 AM to learn foreign languages. It is very useful and helps me adapt better.", vi: "Tôi thích tham gia các lớp học vào cuối tuần lúc 9 giờ sáng để học ngoại ngữ. Khóa học này rất hữu ích và giúp tôi thích nghi tốt hơn." },
        { en: "I really enjoy studying advanced academic writing on weekends. It not only builds my confidence but also makes me feel productive.", vi: "Tôi rất thích học viết học thuật nâng cao vào cuối tuần. Nó không chỉ xây dựng sự tự tin mà còn làm tôi cảm thấy năng suất." }
      ];
      templates = [
        "I can attend courses [ngày] [giờ] and I would like to study [môn học]. It helps me [lợi ích - Vo] effectively.",
        "I prefer attending classes [ngày] [giờ] to learn [môn học]. It is very useful and helps me [lợi ích - Vo].",
        "I really enjoy studying [môn học] [ngày]. It not only [lợi ích - Vo] but also makes me feel productive."
      ];
      break;

    case "Cooking club": // "Tell me about the day and time you can join the club and which food/dish you want to cook."
      vocab = [
        "✨ [món ăn]: <strong>traditional Pho</strong> (phở truyền thống), <strong>Italian pasta</strong> (mì Ý), <strong>homemade cakes</strong> (bánh tự làm), <strong>fresh seafood salads</strong> (salad hải sản tươi sống), <strong>healthy vegetarian meals</strong> (bữa ăn chay tốt cho sức khỏe), <strong>Japanese sushi</strong> (sushi Nhật Bản)",
        "✨ [ngày]: <strong>on Sundays</strong> (vào Chủ nhật), <strong>on weekends</strong> (vào cuối tuần), <strong>on weekdays</strong> (vào các ngày trong tuần), <strong>on Tuesday and Thursday</strong> (vào thứ Ba và thứ Năm), <strong>every Saturday</strong> (mỗi thứ Bảy)",
        "✨ [giờ]: <strong>at 8 AM</strong> (lúc 8 giờ sáng), <strong>at 6 PM</strong> (lúc 6 giờ tối), <strong>at 9 AM</strong> (lúc 9 giờ sáng), <strong>at 7 PM</strong> (lúc 7 giờ tối)",
        "✨ [lợi ích - Vo]: <strong>maintain a healthy lifestyle</strong> (duy trì lối sống lành mạnh), <strong>create a balanced diet</strong> (tạo chế độ ăn cân bằng), <strong>improve my cooking skills</strong> (cải thiện kỹ năng nấu nướng), <strong>take care of my family better</strong> (chăm sóc gia đình tốt hơn), <strong>reduce the risk of diseases</strong> (giảm nguy cơ mắc bệnh), <strong>relieve stress effectively</strong> (giảm căng thẳng hiệu quả), <strong>prepare quick meals for work</strong> (chuẩn bị bữa ăn nhanh cho công việc), <strong>save money on eating out</strong> (tiết kiệm tiền ăn ngoài), <strong>balance my work and life</strong> (cân bằng công việc và cuộc sống), <strong>explore new recipes</strong> (khám phá những công thức nấu ăn mới), <strong>impress my friends and colleagues</strong> (gây ấn tượng với bạn bè và đồng nghiệp), <strong>improve my physical health</strong> (cải thiện sức khỏe thể chất)"
      ];
      samples = [
        { en: "I can join the club on Sundays at 8 AM and I want to cook traditional Pho. It is a great opportunity to maintain a healthy lifestyle.", vi: "Tôi có thể tham gia câu lạc bộ vào Chủ nhật lúc 8 giờ sáng và tôi muốn nấu phở truyền thống. Đây là cơ hội tuyệt vời để duy trì lối sống lành mạnh." },
        { en: "I prefer joining the club on weekends at 6 PM to cook Italian pasta. It is very useful and helps me create a balanced diet.", vi: "Tôi thích tham gia câu lạc bộ vào cuối tuần lúc 6 giờ tối để nấu mì Ý. Nó rất hữu ích và giúp tôi tạo chế độ ăn cân bằng." },
        { en: "I really enjoy making homemade cakes on weekends. It not only improves my cooking skills but also makes me feel productive.", vi: "Tôi rất thích làm bánh tại nhà vào cuối tuần. Nó không chỉ cải thiện kỹ năng nấu nướng mà còn làm tôi cảm thấy năng suất." }
      ];
      templates = [
        "I can join the club [ngày] [giờ] and I want to cook [món ăn]. It is a great opportunity to [lợi ích - Vo].",
        "I prefer joining the club [ngày] [giờ] to cook [món ăn]. It is very useful and helps me [lợi ích - Vo].",
        "I really enjoy making [món ăn] [ngày]. It not only [lợi ích - Vo] but also makes me feel productive."
      ];
      break;

    case "Home living club": // "Describe where you live."
      vocab = [
        "✨ [địa điểm]: <strong>a cozy apartment</strong> (một căn hộ ấm cúng), <strong>a spacious house</strong> (một ngôi nhà rộng rãi), <strong>a modern flat</strong> (một căn hộ hiện đại), <strong>a suburban house</strong> (một ngôi nhà ở ngoại ô), <strong>a smart home</strong> (một ngôi nhà thông minh)",
        "✨ [tính từ]: <strong>comfortable</strong> (thoải mái), <strong>well-decorated</strong> (được trang trí đẹp), <strong>peaceful</strong> (yên bình), <strong>convenient</strong> (tiện nghi), <strong>minimalist</strong> (tối giản), <strong>energy-efficient</strong> (tiết kiệm năng lượng)",
        "✨ [lợi ích - Vo]: <strong>find peace of mind</strong> (tìm sự bình yên trong tâm trí), <strong>relax after a long day</strong> (thư giãn sau một ngày dài), <strong>enjoy my private space</strong> (tận hưởng không gian riêng tư), <strong>host gatherings with friends</strong> (tổ chức các buổi tụ tập bạn bè), <strong>work from home comfortably</strong> (làm việc tại nhà thoải mái), <strong>raise my children in a safe environment</strong> (nuôi dạy con trong môi trường an toàn)"
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
      break;

    case "Television club": // "Do you usually watch TV?"
      vocab = [
        "✨ [thể loại / hoạt động]: <strong>watching blockbusters</strong> (xem phim bom tấn), <strong>going to the cinema</strong> (đi xem phim), <strong>watching TV series</strong> (xem phim truyền hình), <strong>watching live sports</strong> (xem thể thao trực tiếp), <strong>following news channels</strong> (theo dõi các kênh tin tức), <strong>watching educational programs</strong> (xem các chương trình giáo dục)",
        "✨ [tính từ]: <strong>entertaining</strong> (mang tính giải trí), <strong>engaging</strong> (lôi cuốn), <strong>thrilling</strong> (kịch tính), <strong>informative</strong> (nhiều thông tin), <strong>thought-provoking</strong> (gợi suy nghĩ)",
        "✨ [lợi ích - Vo]: <strong>find peace of mind</strong> (tìm sự bình yên trong tâm trí), <strong>relax after a long day</strong> (thư giãn sau một ngày dài), <strong>expand my social circle</strong> (mở rộng mối quan hệ xã hội), <strong>stay informed about world events</strong> (cập nhật các sự kiện thế giới), <strong>learn new skills easily</strong> (học kỹ năng mới dễ dàng), <strong>spend quality time with family</strong> (dành thời gian chất lượng bên gia đình)"
      ];
      samples = [
        { en: "I am really fond of going to the cinema because it is very entertaining. It helps me find peace of mind and relax after a long day.", vi: "Tôi rất thích đi xem phim vì nó rất giải trí. Hoạt động này giúp tôi tìm sự bình yên trong tâm trí và thư giãn sau một ngày dài." },
        { en: "What I like most is watching TV series, which is very engaging. It gives me an opportunity to relax.", vi: "Điều tôi thích nhất là xem phim truyền hình, việc này rất lôi cuốn. Nó cho tôi cơ hội để thư giãn." },
        { en: "I often watch blockbusters in my free time because it is thrilling. It allows me to find peace of mind effectively.", vi: "Tôi thường xem phim bom tấn trong thời gian rảnh vì nó kịch tính. Việc này cho phép tôi tìm thấy sự bình yên hiệu quả." }
      ];
      templates = [
        "I am really fond of [thể loại / hoạt động] because it is very [tính từ]. It helps me [lợi ích - Vo].",
        "What I like most is [thể loại / hoạt động], which is very [tính từ]. It gives me an opportunity to [lợi ích - Vo].",
        "I usually spend my free time [thể loại / hoạt động] because it is [tính từ]. It allows me to [lợi ích - Vo]."
      ];
      break;

    case "Cinema club": // "When and how often do you watch films?"
      vocab = [
        "✨ [tần suất]: <strong>once a week</strong> (một lần một tuần), <strong>twice a month</strong> (hai lần một tháng), <strong>every day</strong> (mỗi ngày)",
        "✨ [thời gian]: <strong>in the evening</strong> (vào buổi tối), <strong>on weekends</strong> (vào cuối tuần), <strong>in my free time</strong> (trong thời gian rảnh)",
        "✨ [thể loại phim]: <strong>action movies</strong> (phim hành động), <strong>romantic comedies</strong> (phim hài lãng mạn), <strong>sci-fi films</strong> (phim khoa học viễn tưởng), <strong>horror movies</strong> (phim kinh dị), <strong>animated films</strong> (phim hoạt hình), <strong>documentaries</strong> (phim tài liệu)",
        "✨ [lợi ích - Vo]: <strong>find peace of mind</strong> (tìm sự bình yên trong tâm trí), <strong>relax after a long day</strong> (thư giãn sau một ngày dài), <strong>escape from daily stress</strong> (thoát khỏi căng thẳng hàng ngày), <strong>broaden my horizons</strong> (mở rộng tầm nhìn), <strong>learn about different cultures</strong> (tìm hiểu về các nền văn hóa khác), <strong>improve my English skills</strong> (cải thiện kỹ năng tiếng Anh), <strong>spend quality time with my friends</strong> (dành thời gian chất lượng bên bạn bè), <strong>stimulate my imagination</strong> (kích thích trí tưởng tượng), <strong>boost my creativity</strong> (nâng cao sự sáng tạo), <strong>experience different emotions</strong> (trải nghiệm nhiều cảm xúc khác nhau)"
      ];
      samples = [
        { en: "I usually watch films once a week in the evening. It is a good way to find peace of mind and relax after a long day.", vi: "Tôi thường xem phim một lần một tuần vào buổi tối. Đây là một cách tốt để tìm sự bình yên trong tâm trí và thư giãn sau một ngày dài." },
        { en: "Because I am quite busy, I tend to watch action movies twice a month on weekends. It is very entertaining and helps me escape from daily stress.", vi: "Vì khá bận, tôi thường xem phim hành động hai lần một tháng vào cuối tuần. Nó rất giải trí và giúp tôi thoát khỏi căng thẳng." },
        { en: "I really enjoy watching sci-fi films every day in my free time. It not only expands my imagination but also makes me feel relaxed.", vi: "Tôi rất thích xem phim khoa học viễn tưởng mỗi ngày trong thời gian rảnh. Việc này không chỉ mở rộng trí tưởng tượng mà còn làm tôi cảm thấy thư giãn." }
      ];
      templates = [
        "I usually watch films [tần suất] [thời gian]. It is a good way to [lợi ích - Vo] after a long day.",
        "Because I am quite busy, I tend to watch [thể loại phim] [tần suất] [thời gian]. It is very entertaining and helps me [lợi ích - Vo].",
        "I really enjoy watching [thể loại phim] [tần suất] [thời gian]. It not only expands my imagination but also makes me feel relaxed."
      ];
      break;

    case "Film club": // "Please write some of your favorite films and why you like watching them."
      vocab = [
        "✨ [thể loại phim]: <strong>action movies</strong> (phim hành động), <strong>romantic comedies</strong> (phim hài lãng mạn), <strong>sci-fi films</strong> (phim khoa học viễn tưởng), <strong>classic movies</strong> (phim kinh điển), <strong>psychological thrillers</strong> (phim kinh dị tâm lý), <strong>historical dramas</strong> (phim cổ trang / lịch sử)",
        "✨ [tính từ]: <strong>captivating</strong> (cuốn hút), <strong>thrilling</strong> (kịch tính), <strong>hilarious</strong> (hài hước), <strong>eye-opening</strong> (mở mang tầm mắt), <strong>heartwarming</strong> (cảm động), <strong>mind-bending</strong> (hại não)",
        "✨ [lợi ích - Vo]: <strong>escape from daily stress</strong> (thoát khỏi căng thẳng hàng ngày), <strong>widen my knowledge</strong> (mở rộng kiến thức), <strong>develop my imagination</strong> (phát triển trí tưởng tượng), <strong>appreciate cinematic art</strong> (thưởng thức nghệ thuật điện ảnh), <strong>improve my critical thinking</strong> (cải thiện tư duy phản biện), <strong>discuss meaningful messages</strong> (thảo luận những thông điệp ý nghĩa)"
      ];
      samples = [
        { en: "I am really keen on action movies because they are very thrilling. Enjoying them helps me escape from daily stress and relax after a long day.", vi: "Tôi rất thích phim hành động vì chúng rất kịch tính. Thưởng thức chúng giúp tôi thoát khỏi căng thẳng hàng ngày và thư giãn sau một ngày dài." },
        { en: "My favorite is romantic comedies, which have a happy ending. They are incredibly hilarious and allow me to find peace of mind easily.", vi: "Yêu thích nhất của tôi là phim hài lãng mạn, loại phim có cái kết có hậu. Chúng vô cùng hài hước và cho phép tôi tìm thấy sự bình yên trong tâm trí một cách dễ dàng." },
        { en: "I have always liked sci-fi films. They are quite captivating and give me a good chance to develop my imagination and widen my knowledge.", vi: "Tôi luôn thích phim khoa học viễn tưởng. Chúng khá cuốn hút và cho tôi cơ hội tốt để phát triển trí tưởng tượng và mở rộng kiến thức." }
      ];
      templates = [
        "I am really keen on [thể loại phim] because they are very [tính từ]. Enjoying them helps me [lợi ích - Vo].",
        "My favorite is [thể loại phim]. They are incredibly [tính từ] and allow me to [lợi ích - Vo].",
        "I have always liked [thể loại phim]. They are quite [tính từ] and give me a good chance to [lợi ích - Vo]."
      ];
      break;

    case "Car club": // "Do you usually travel by car?"
      vocab = [
        "✨ [hoạt động / lý do]: <strong>drive my car to work</strong> (lái xe ô tô đi làm), <strong>travel by public transport</strong> (đi lại bằng phương tiện công cộng), <strong>take a taxi instead</strong> (bắt taxi thay thế)",
        "✨ [tính từ]: <strong>convenient</strong> (tiện lợi), <strong>comfortable</strong> (thoải mái), <strong>time-saving</strong> (tiết kiệm thời gian)",
        "✨ [lợi ích - Vo]: <strong>save my commuting time</strong> (tiết kiệm thời gian đi lại), <strong>reduce travel fatigue</strong> (giảm mệt mỏi khi đi lại), <strong>protect myself from bad weather</strong> (bảo vệ bản thân khỏi thời tiết xấu), <strong>carry heavy luggage easily</strong> (mang hành lý nặng dễ dàng), <strong>travel long distances comfortably</strong> (đi lại khoảng cách xa một cách thoải mái), <strong>ensure my personal safety</strong> (đảm bảo an toàn cá nhân), <strong>listen to music privately</strong> (nghe nhạc riêng tư)"
      ];
      samples = [
        { en: "Yes, I usually travel by car to my workplace every morning. It is a good way to save my commuting time and reduce travel fatigue.", vi: "Vâng, tôi thường đi làm bằng ô tô mỗi buổi sáng. Đây là cách tốt để tiết kiệm thời gian đi lại và giảm mệt mỏi." },
        { en: "No, I do not travel by car often. I tend to travel by public transport because it is very convenient and helps me protect the environment.", vi: "Không, tôi không thường xuyên đi bằng ô tô. Tôi có xu hướng đi bằng phương tiện công cộng vì nó rất tiện lợi và giúp tôi bảo vệ môi trường." },
        { en: "Yes, I am a huge fan of cars, so I always choose to drive my car to work. It not only saves my commuting time but also makes me feel comfortable.", vi: "Vâng, tôi là một người rất mê ô tô, nên tôi luôn chọn lái xe đi làm. Việc này không chỉ tiết kiệm thời gian mà còn làm tôi thấy thoải mái." }
      ];
      templates = [
        "Yes, I usually travel by car to my workplace every morning. It is a good way to [lợi ích - Vo].",
        "No, I do not travel by car often. I tend to [hoạt động / lý do] because it is very [tính từ] and helps me [lợi ích - Vo].",
        "Yes, I am a huge fan of cars, so I always choose to [hoạt động / lý do]. It not only [lợi ích - Vo s/es] but also makes me feel [tính từ]."
      ];
      break;

    case "Language club": // "Tell me your free time and interests."
    case "Outdoor club": // "Which outdoor activities do you like? Why?"
    case "Nature club": // "Please tell me about your free time and hobbies."
    case "Nature club 2": // "What do you like doing when you spend time outdoors?"
      if (clubName === "Language club") {
        vocab = [
          "✨ [hoạt động]: <strong>learning English</strong> (học tiếng Anh), <strong>speaking with foreigners</strong> (nói chuyện với người nước ngoài), <strong>practicing English daily</strong> (thực hành tiếng Anh mỗi ngày), <strong>learning a second language</strong> (học ngôn ngữ thứ hai), <strong>joining language exchange events</strong> (tham gia sự kiện giao lưu ngôn ngữ), <strong>watching movies without subtitles</strong> (xem phim không cần phụ đề)",
          "✨ [tính từ]: <strong>essential</strong> (thiết yếu), <strong>practical</strong> (thực tế), <strong>helpful</strong> (hữu ích), <strong>challenging but rewarding</strong> (đầy thử thách nhưng xứng đáng), <strong>fascinating</strong> (hấp dẫn), <strong>interactive</strong> (có tính tương tác)",
          "✨ [lợi ích - Vo]: <strong>learn to adapt to new environments</strong> (học cách thích nghi môi trường mới), <strong>build my confidence</strong> (xây dựng sự tự tin), <strong>improve my communication skills</strong> (cải thiện kỹ năng giao tiếp), <strong>boost my career prospects</strong> (nâng cao triển vọng nghề nghiệp), <strong>communicate globally</strong> (giao tiếp toàn cầu), <strong>understand different cultures</strong> (hiểu các nền văn hóa khác nhau)"
        ];
      } else {
        vocab = [
          "✨ [hoạt động]: <strong>planting trees</strong> (trồng cây), <strong>hiking in the mountains</strong> (đi bộ đường dài trên núi), <strong>camping in the forest</strong> (cắm trại trong rừng)",
          "✨ [tính từ]: <strong>refreshing</strong> (sảng khoái), <strong>peaceful</strong> (yên bình), <strong>active</strong> (năng động)",
          "✨ [lợi ích - Vo]: <strong>find peace of mind</strong> (tìm sự bình yên trong tâm trí), <strong>escape from daily stress</strong> (thoát khỏi căng thẳng hàng ngày), <strong>breathe fresh air</strong> (hít thở không khí trong lành), <strong>stay in good shape</strong> (giữ dáng)"
        ];
      }
      samples = [
        { en: "I am really keen on planting trees because it is very peaceful. Enjoying it helps me escape from daily stress and breathe fresh air.", vi: "Tôi rất thích hoạt động này vì nó rất yên bình. Thưởng thức hoạt động này giúp tôi thoát khỏi căng thẳng hàng ngày và cảm thấy tốt hơn." },
        { en: "My favorite is hiking in the mountains, which has a refreshing vibe. It is incredibly active and allows me to stay in good shape easily.", vi: "Yêu thích nhất của tôi là hoạt động này, mang lại cảm giác sảng khoái. Nó vô cùng năng động và cho phép tôi giữ dáng dễ dàng." },
        { en: "I have always liked camping in the forest. It is quite relaxing and gives me a good chance to find peace of mind and connect with nature.", vi: "Tôi luôn thích hoạt động này. Nó khá thư giãn và cho tôi cơ hội tốt để tìm sự bình yên và hòa mình vào thiên nhiên." }
      ];
      templates = [
        "I am really keen on [hoạt động] because it is very [tính từ]. Enjoying it helps me [lợi ích - Vo].",
        "My favorite is [hoạt động]. It is incredibly [tính từ] and allows me to [lợi ích - Vo].",
        "I have always liked [hoạt động]. It is quite [tính từ] and gives me a good chance to [lợi ích - Vo]."
      ];
      break;

    case "Language club 2": // "In which cases do you often use foreign languages?"
    case "English club 2": // "When do you usually have to come into contact with English?"
    case "English club 3": // "When do you usually use English?"
      vocab = [
        "✨ [tình huống]: <strong>when traveling abroad</strong> (khi du lịch nước ngoài), <strong>when communicating with foreigners</strong> (khi giao tiếp với người nước ngoài), <strong>when reading international news</strong> (khi đọc tin tức quốc tế)",
        "✨ [tính từ]: <strong>essential</strong> (thiết yếu), <strong>practical</strong> (thực tế), <strong>helpful</strong> (hữu ích)",
        "✨ [lợi ích - Vo]: <strong>understand other cultures</strong> (hiểu văn hóa khác), <strong>build my confidence</strong> (xây dựng sự tự tin), <strong>expand my knowledge</strong> (mở rộng kiến thức)"
      ];
      samples = [
        { en: "I often use English when traveling abroad. It is very essential and helps me understand other cultures easily.", vi: "Tôi thường sử dụng tiếng Anh khi du lịch nước ngoài. Điều đó rất thiết yếu và giúp tôi dễ dàng hiểu các văn hóa khác." },
        { en: "I tend to use foreign languages when communicating with foreigners. It is incredibly helpful and allows me to build my confidence.", vi: "Tôi có xu hướng sử dụng ngoại ngữ khi giao tiếp với người nước ngoài. Nó vô cùng hữu ích và cho phép tôi xây dựng sự tự tin." },
        { en: "I have always used English when reading international news. It is quite practical and gives me a good chance to expand my knowledge.", vi: "Tôi luôn dùng tiếng Anh khi đọc tin tức quốc tế. Nó khá thực tế và mang lại cơ hội tốt để tôi mở rộng kiến thức." }
      ];
      templates = [
        "I often use English [tình huống]. It is very [tính từ] and helps me [lợi ích - Vo] easily.",
        "I tend to use foreign languages [tình huống]. It is incredibly [tính từ] and allows me to [lợi ích - Vo].",
        "I have always used English [tình huống]. It is quite [tính từ] and gives me a good chance to [lợi ích - Vo]."
      ];
      break;
      
    case "English club": // "What do you usually use the internet for?"
      vocab = [
        "✨ [mục đích]: <strong>to read international news</strong> (để đọc tin tức quốc tế), <strong>to watch English videos</strong> (để xem video tiếng Anh), <strong>to communicate with foreigners</strong> (để giao tiếp với người nước ngoài)",
        "✨ [tính từ]: <strong>essential</strong> (thiết yếu), <strong>convenient</strong> (tiện lợi), <strong>helpful</strong> (hữu ích)",
        "✨ [lợi ích - Vo]: <strong>widen my knowledge</strong> (mở rộng kiến thức), <strong>improve my English skills</strong> (cải thiện kỹ năng tiếng Anh), <strong>stay updated with global events</strong> (cập nhật sự kiện toàn cầu)"
      ];
      samples = [
        { en: "I often use the internet to read international news. It is very convenient and helps me widen my knowledge easily.", vi: "Tôi thường dùng internet để đọc tin tức quốc tế. Rất tiện lợi và giúp tôi mở rộng kiến thức dễ dàng." },
        { en: "I tend to use the internet to watch English videos. It is incredibly helpful and allows me to improve my English skills.", vi: "Tôi hay dùng internet để xem video tiếng Anh. Vô cùng hữu ích và giúp tôi cải thiện kỹ năng tiếng Anh." },
        { en: "I usually use the internet to communicate with foreigners. It is quite essential and gives me a good chance to stay updated with global events.", vi: "Tôi thường dùng internet để giao tiếp với người nước ngoài. Rất thiết yếu và cho cơ hội tốt để cập nhật sự kiện toàn cầu." }
      ];
      templates = [
        "I often use the internet [mục đích]. It is very [tính từ] and helps me [lợi ích - Vo] easily.",
        "I tend to use the internet [mục đích]. It is incredibly [tính từ] and allows me to [lợi ích - Vo].",
        "I usually use the internet [mục đích]. It is quite [tính từ] and gives me a good chance to [lợi ích - Vo]."
      ];
      break;

    case "Travel club 2": // "Tell me a place you often visit."
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
      break;

    case "Walking club": // "Tell me about the last time you went for a walk."
    case "Museum club": // "Tell me the last time you went to a museum."
    case "Writing club": // "Tell me about the last time you wrote something."
    case "Fashion club": // "When was the last time you went shopping for clothes?"
    case "Photography club": // "Please tell me the last time you took a picture."
    case "Reading club": // "When was the last time you read a book and how was the book?"
    case "Fitness club": // "Please talk about the last time you went for a run."
      if (clubName === "Walking club") {
        vocab = [
          "✨ [hoạt động - V2/ed]: <strong>went for a walk in the park</strong> (đi dạo trong công viên), <strong>strolled around the lake</strong> (đi dạo quanh hồ)",
          "✨ [tính từ]: <strong>refreshing</strong> (sảng khoái), <strong>peaceful</strong> (yên bình), <strong>relaxing</strong> (thư giãn)",
          "✨ [lợi ích - Vo]: <strong>clear my mind</strong> (làm cho tâm trí thanh thản), <strong>enjoy the fresh air</strong> (tận hưởng không khí trong lành)"
        ];
      } else if (clubName === "Museum club") {
        vocab = [
          "✨ [hoạt động - V2/ed]: <strong>visited an exhibition</strong> (thăm một buổi triển lãm), <strong>went to an art gallery</strong> (đến phòng tranh nghệ thuật), <strong>explored a historical museum</strong> (khám phá bảo tàng lịch sử)",
          "✨ [tính từ]: <strong>inspiring</strong> (truyền cảm hứng), <strong>eye-opening</strong> (mở mang tầm mắt), <strong>educational</strong> (mang tính giáo dục)",
          "✨ [lợi ích - Vo]: <strong>enhance my creativity</strong> (nâng cao sự sáng tạo), <strong>widen my knowledge about history</strong> (mở rộng kiến thức về lịch sử)"
        ];
      } else if (clubName === "Writing club") {
        vocab = [
          "✨ [hoạt động - V2/ed]: <strong>wrote a short story</strong> (viết một truyện ngắn), <strong>wrote a daily journal</strong> (viết nhật ký hàng ngày), <strong>composed a poem</strong> (sáng tác một bài thơ)",
          "✨ [tính từ]: <strong>inspiring</strong> (truyền cảm hứng), <strong>thought-provoking</strong> (gợi suy nghĩ), <strong>fascinating</strong> (hấp dẫn)",
          "✨ [lợi ích - Vo]: <strong>express my feelings</strong> (thể hiện cảm xúc), <strong>develop my imagination</strong> (phát triển trí tưởng tượng)"
        ];
      } else if (clubName === "Fashion club") {
        vocab = [
          "✨ [hoạt động - V2/ed]: <strong>went shopping at the mall</strong> (đi mua sắm ở trung tâm thương mại), <strong>bought a new dress</strong> (mua một chiếc váy mới), <strong>purchased some trendy clothes</strong> (mua vài bộ đồ hợp thời trang)",
          "✨ [tính từ]: <strong>exciting</strong> (thú vị), <strong>rewarding</strong> (đáng giá), <strong>fun</strong> (vui vẻ)",
          "✨ [lợi ích - Vo]: <strong>update my wardrobe</strong> (cập nhật tủ quần áo), <strong>boost my confidence</strong> (tăng sự tự tin)"
        ];
      } else if (clubName === "Photography club") {
        vocab = [
          "✨ [hoạt động - V2/ed]: <strong>took photos at the park</strong> (chụp ảnh ở công viên), <strong>captured beautiful moments</strong> (ghi lại những khoảnh khắc đẹp), <strong>took a picture of my family</strong> (chụp ảnh gia đình)",
          "✨ [tính từ]: <strong>memorable</strong> (đáng nhớ), <strong>inspiring</strong> (truyền cảm hứng), <strong>creative</strong> (sáng tạo)",
          "✨ [lợi ích - Vo]: <strong>enhance my creativity</strong> (nâng cao sự sáng tạo), <strong>create unforgettable memories</strong> (tạo ra những kỷ niệm khó quên)"
        ];
      } else if (clubName === "Reading club") {
        vocab = [
          "✨ [hoạt động - V2/ed]: <strong>read a fantastic novel</strong> (đọc một tiểu thuyết tuyệt vời), <strong>finished a science book</strong> (đọc xong một quyển sách khoa học)",
          "✨ [tính từ]: <strong>informative</strong> (nhiều thông tin), <strong>inspiring</strong> (truyền cảm hứng), <strong>fascinating</strong> (hấp dẫn)",
          "✨ [lợi ích - Vo]: <strong>widen my knowledge</strong> (mở rộng kiến thức), <strong>expand my vocabulary</strong> (mở rộng vốn từ vựng)"
        ];
      } else if (clubName === "Fitness club") {
        vocab = [
          "✨ [hoạt động - V2/ed]: <strong>went for a run in the park</strong> (đi chạy bộ trong công viên), <strong>jogged around my neighborhood</strong> (chạy bộ quanh khu phố)",
          "✨ [tính từ]: <strong>energetic</strong> (tràn đầy năng lượng), <strong>refreshing</strong> (sảng khoái), <strong>exhausting but rewarding</strong> (mệt mỏi nhưng xứng đáng)",
          "✨ [lợi ích - Vo]: <strong>burn calories</strong> (đốt cháy calo), <strong>strengthen cardiovascular health</strong> (tăng cường sức khỏe tim mạch)"
        ];
      }

      samples = [
        { en: "The last time I did this was about two weeks ago. It was a very inspiring experience because I had the chance to improve myself.", vi: "Lần cuối cùng tôi làm việc này là khoảng hai tuần trước. Đó là một trải nghiệm rất truyền cảm hứng vì tôi có cơ hội cải thiện bản thân." },
        { en: "It was a memorable day when I did this activity at the city center last weekend. It was incredibly fascinating and helped me a lot.", vi: "Đó là một ngày đáng nhớ khi tôi làm hoạt động này ở trung tâm thành phố vào cuối tuần trước. Nó vô cùng hấp dẫn và giúp tôi rất nhiều." },
        { en: "A few days ago, I did it with my friends. It turned out to be a memorable day that allowed us to have a great time.", vi: "Vài ngày trước, tôi thực hiện việc này cùng bạn bè. Hóa ra đó là một ngày đáng nhớ cho phép chúng tôi có khoảng thời gian tuyệt vời." }
      ];
      templates = [
        "The last time I [hoạt động - V2/ed] was about two weeks ago. It was a very [tính từ] experience because I had the chance to [lợi ích - Vo].",
        "It was a memorable day when I [hoạt động - V2/ed] last weekend. It was incredibly [tính từ] and helped me [lợi ích - Vo].",
        "A few days ago, I [hoạt động - V2/ed]. It turned out to be an [tính từ] day that allowed me to [lợi ích - Vo]."
      ];
      break;
      
    case "Music club": // "What do you usually do when you listen to music?"
      vocab = [
        "✨ [hoạt động]: <strong>do the housework</strong> (làm việc nhà), <strong>read a book</strong> (đọc sách), <strong>commute to work</strong> (đi làm)",
        "✨ [tính từ]: <strong>soothing</strong> (êm dịu), <strong>energetic</strong> (tràn đầy năng lượng), <strong>uplifting</strong> (nâng cao tinh thần)",
        "✨ [lợi ích - Vo]: <strong>boost my emotional well-being</strong> (nâng cao sức khỏe tinh thần), <strong>find peace of mind</strong> (tìm sự bình yên trong tâm trí), <strong>regain my energy</strong> (nạp lại năng lượng)"
      ];
      samples = [
        { en: "I usually do the housework when I listen to music. It is a good way to boost my emotional well-being and regain my energy.", vi: "Tôi thường làm việc nhà khi nghe nhạc. Đây là cách tốt để nâng cao sức khỏe tinh thần và nạp lại năng lượng." },
        { en: "Because I am quite busy, I tend to commute to work while enjoying songs. It is very soothing and helps me find peace of mind effectively.", vi: "Vì khá bận rộn, tôi có xu hướng đi làm trong khi thưởng thức các bài hát. Việc này rất êm dịu và giúp tôi tìm thấy sự bình yên hiệu quả." },
        { en: "I always love to read a book when I listen to music. It not only helps me regain my energy but also makes me feel relaxed.", vi: "Tôi luôn thích đọc sách khi nghe nhạc. Việc này không chỉ giúp tôi nạp lại năng lượng mà còn làm tôi cảm thấy thư giãn." }
      ];
      templates = [
        "I usually [hoạt động] when I listen to music. It is a good way to [lợi ích - Vo].",
        "Because I am quite busy, I tend to [hoạt động] while enjoying songs. It is very [tính từ] and helps me [lợi ích - Vo].",
        "I always love to [hoạt động] when I listen to music. It not only helps me [lợi ích - Vo] but also makes me feel relaxed."
      ];
      break;

    default:
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
        "I usually spend my free time [hoạt động] because it is [tính từ]. It allows me to [lợi ích - Vo]."
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

// Generate part2Data.js
const { clubsData } = require('./src/data/clubsData.js');
let part2DataObj = {};

Object.keys(clubsData).forEach(clubName => {
  const clubQuestions = clubsData[clubName];
  // Find Part 2 question
  const part2Q = clubQuestions.find(q => q.id === 6 || q.id.toString().includes('p2') || q.id === "p2");
  
  // Fallback find if strictly not 'p2' (though part2Data has text)
});

// Since reading from clubsData for the exact question string was messy, we read from part2Data.js directly
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
