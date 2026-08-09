const fs = require('fs');

function getB2Data(question) {
  const q = question.toLowerCase();
  
  // 1. PAST EVENT (Last time)
  if (q.includes('last time')) {
    return {
      templates: [
        "The last time I [hoạt động - V2/ed] was about [thời gian] ago. It was a very [tính từ] experience because I had the chance to [lợi ích 1 - Vo].",
        "I clearly remember [hoạt động - Ving] at [địa điểm] last [thời gian]. It was incredibly [tính từ] and helped me [lợi ích 1 - Vo] a lot.",
        "A few [thời gian] ago, I decided to [hoạt động - Vo] with my friends. It turned out to be a [tính từ] day that allowed us to [lợi ích 1 - Vo]."
      ],
      vocabulary: [
        "✨ [thời gian]: <strong>two weeks</strong> (hai tuần), <strong>a few months</strong> (vài tháng), <strong>summer</strong> (mùa hè), <strong>weekend</strong> (cuối tuần)",
        "✨ [tính từ]: <strong>memorable</strong> (đáng nhớ), <strong>unforgettable</strong> (không thể quên), <strong>amazing</strong> (tuyệt vời), <strong>meaningful</strong> (ý nghĩa)",
        "✨ [lợi ích - Vo]: <strong>learn new things</strong> (học điều mới), <strong>relax my mind</strong> (thư giãn tâm trí), <strong>bond with my friends</strong> (gắn kết với bạn bè), <strong>discover myself</strong> (khám phá bản thân)"
      ],
      samples: [
        { en: "The last time I visited a museum was about two weeks ago. It was a very memorable experience because I had the chance to learn new things.", vi: "Lần cuối cùng tôi tham quan bảo tàng là khoảng hai tuần trước. Đó là một trải nghiệm rất đáng nhớ vì tôi có cơ hội học hỏi những điều mới." },
        { en: "I clearly remember taking a long walk at the park last weekend. It was incredibly amazing and helped me relax my mind a lot.", vi: "Tôi nhớ rất rõ việc đi dạo dài ở công viên vào cuối tuần trước. Nó thực sự tuyệt vời và giúp tôi thư giãn tâm trí rất nhiều." },
        { en: "A few months ago, I decided to join an outdoor event with my friends. It turned out to be a meaningful day that allowed us to bond with each other.", vi: "Vài tháng trước, tôi quyết định tham gia một sự kiện ngoài trời cùng bạn bè. Hóa ra đó là một ngày ý nghĩa cho phép chúng tôi gắn kết với nhau." }
      ]
    };
  }

  // 2. WHY JOIN / REASON
  if (q.includes('why did you') || q.includes('why do you') || q.includes('why are you')) {
    return {
      templates: [
        "I decided to join this club because I am passionate about [sở thích - Ving]. It allows me to [lợi ích 1 - Vo] and [lợi ích 2 - Vo].",
        "My main reason for joining is my strong interest in [lĩnh vực]. Being here helps me to [lợi ích 1 - Vo] and [lợi ích 2 - Vo] with other members.",
        "I have always been interested in [lĩnh vực]. Therefore, joining this club gives me a great opportunity to [lợi ích 1 - Vo] and [lợi ích 2 - Vo]."
      ],
      vocabulary: [
        "✨ [sở thích / lĩnh vực]: <strong>learning new skills</strong> (học kỹ năng mới), <strong>meeting people</strong> (gặp gỡ mọi người), <strong>staying active</strong> (giữ năng động), <strong>exploring art</strong> (khám phá nghệ thuật)",
        "✨ [lợi ích - Vo]: <strong>improve my skills</strong> (cải thiện kỹ năng), <strong>make friends</strong> (kết bạn), <strong>share my passion</strong> (chia sẻ đam mê), <strong>broaden my knowledge</strong> (mở rộng kiến thức), <strong>build confidence</strong> (xây dựng sự tự tin)"
      ],
      samples: [
        { en: "I decided to join this club because I am passionate about learning new skills. It allows me to improve my skills and make friends.", vi: "Tôi quyết định tham gia câu lạc bộ này vì tôi đam mê học hỏi kỹ năng mới. Nó cho phép tôi cải thiện kỹ năng của mình và kết bạn." },
        { en: "My main reason for joining is my strong interest in meeting people. Being here helps me to share my passion and make friends with other members.", vi: "Lý do chính tôi tham gia là sở thích mãnh liệt trong việc gặp gỡ mọi người. Ở đây giúp tôi chia sẻ đam mê và kết bạn với các thành viên khác." },
        { en: "I have always been interested in staying active. Therefore, joining this club gives me a great opportunity to improve my skills and broaden my knowledge.", vi: "Tôi luôn quan tâm đến việc giữ năng động. Vì vậy, tham gia câu lạc bộ này cho tôi một cơ hội lớn để cải thiện kỹ năng và mở rộng kiến thức." }
      ]
    };
  }

  // 3. ROUTINE / THÓI QUEN
  if (q.includes('usually') || q.includes('often') || q.includes('when') || q.includes('where') || q.includes('what time') || q.includes('how often')) {
    return {
      templates: [
        "I usually [hoạt động - Vo] at [địa điểm] during [thời điểm]. It is a good way to [lợi ích 1 - Vo] and [lợi ích 2 - Vo] after a busy day.",
        "Because I am quite busy, I tend to [hoạt động - Vo] at [địa điểm]. It is very [tính từ] and helps me [lợi ích 1 - Vo] effectively.",
        "I really enjoy [hoạt động - Ving] at [địa điểm] every [thời điểm]. It not only [lợi ích 1 - Vo] but also makes me feel [tính từ]."
      ],
      vocabulary: [
        "✨ [tính từ]: <strong>convenient</strong> (tiện lợi), <strong>peaceful</strong> (yên bình), <strong>comfortable</strong> (thoải mái), <strong>happy</strong> (vui vẻ), <strong>energetic</strong> (tràn đầy năng lượng), <strong>focused</strong> (tập trung)",
        "✨ [lợi ích - Vo]: <strong>save time</strong> (tiết kiệm thời gian), <strong>stay healthy</strong> (giữ sức khỏe), <strong>relax</strong> (thư giãn), <strong>recharge my energy</strong> (nạp lại năng lượng), <strong>boost my mood</strong> (cải thiện tâm trạng)"
      ],
      samples: [
        { en: "I usually do this activity at a local park during the weekend. It is a good way to stay healthy and relax after a busy day.", vi: "Tôi thường làm hoạt động này ở công viên địa phương vào cuối tuần. Đây là một cách tốt để giữ sức khỏe và thư giãn sau một ngày bận rộn." },
        { en: "Because I am quite busy, I tend to do this at home. It is very convenient and helps me save time effectively.", vi: "Vì tôi khá bận rộn, tôi có xu hướng làm việc này ở nhà. Nó rất tiện lợi và giúp tôi tiết kiệm thời gian hiệu quả." },
        { en: "I really enjoy doing this at my favorite coffee shop every Sunday morning. It not only helps me relax but also makes me feel peaceful.", vi: "Tôi thực sự thích làm điều này ở quán cà phê yêu thích của tôi vào mỗi sáng Chủ nhật. Nó không chỉ giúp tôi thư giãn mà còn làm tôi cảm thấy bình yên." }
      ]
    };
  }

  // 4. FAVORITE / LIKE
  if (q.includes('favorite') || q.includes('favourite') || q.match(/\blike\b/) || q.includes('hobbies') || q.includes('interests')) {
    return {
      templates: [
        "I am really keen on [hoạt động / sự vật] because it is very [tính từ]. Enjoying it helps me [lợi ích 1 - Vo] and [lợi ích 2 - Vo].",
        "My favorite is [sự vật], which has a [danh từ]. It is incredibly [tính từ] and allows me to [lợi ích 1 - Vo] easily.",
        "I have always liked [hoạt động / sự vật]. It is quite [tính từ] and gives me a good chance to [lợi ích 1 - Vo] and [lợi ích 2 - Vo]."
      ],
      vocabulary: [
        "✨ [tính từ]: <strong>interesting</strong> (thú vị), <strong>relaxing</strong> (thư giãn), <strong>exciting</strong> (hào hứng), <strong>attractive</strong> (cuốn hút), <strong>inspiring</strong> (truyền cảm hứng), <strong>creative</strong> (sáng tạo)",
        "✨ [danh từ]: <strong>great story</strong> (câu chuyện hay), <strong>beautiful view</strong> (cảnh đẹp), <strong>deep meaning</strong> (ý nghĩa sâu sắc), <strong>unique style</strong> (phong cách độc đáo)",
        "✨ [lợi ích - Vo]: <strong>learn new things</strong> (học điều mới), <strong>reduce stress</strong> (giảm căng thẳng), <strong>clear my mind</strong> (giải tỏa tâm trí), <strong>broaden my horizons</strong> (mở rộng hiểu biết)"
      ],
      samples: [
        { en: "I am really keen on reading books because it is very relaxing. Enjoying it helps me learn new things and reduce stress.", vi: "Tôi rất thích đọc sách vì nó rất thư giãn. Thưởng thức nó giúp tôi học điều mới và giảm căng thẳng." },
        { en: "My favorite is a picture of my family, which has a beautiful view. It is incredibly attractive and allows me to clear my mind easily.", vi: "Yêu thích nhất của tôi là bức ảnh gia đình, nó có một khung cảnh đẹp. Nó cực kỳ cuốn hút và cho phép tôi giải tỏa tâm trí dễ dàng." },
        { en: "I have always liked watching films. It is quite interesting and gives me a good chance to learn new things and broaden my horizons.", vi: "Tôi luôn thích xem phim. Nó khá thú vị và cho tôi một cơ hội tốt để học điều mới và mở rộng hiểu biết." }
      ]
    };
  }

  // 5. DESCRIBE / TELL ME ABOUT
  if (q.includes('describe') || q.includes('tell me')) {
    return {
      templates: [
        "I would like to tell you about [đối tượng], which is very [tính từ 1] and [tính từ 2]. It helps me [lợi ích 1 - Vo] and [lợi ích 2 - Vo].",
        "Let me talk about [đối tượng], an important part of my life. It always makes me feel [cảm xúc] and helps me [lợi ích - Vo].",
        "One of the best things I can share is [đối tượng]. It is really [tính từ] and provides a chance for me to [lợi ích 1 - Vo] and [lợi ích 2 - Vo]."
      ],
      vocabulary: [
        "✨ [tính từ]: <strong>special</strong> (đặc biệt), <strong>attractive</strong> (cuốn hút), <strong>amazing</strong> (tuyệt vời), <strong>memorable</strong> (đáng nhớ), <strong>fascinating</strong> (hấp dẫn), <strong>peaceful</strong> (yên bình)",
        "✨ [cảm xúc]: <strong>happy</strong> (hạnh phúc), <strong>relaxed</strong> (thư giãn), <strong>energetic</strong> (tràn đầy năng lượng), <strong>motivated</strong> (có động lực), <strong>proud</strong> (tự hào)",
        "✨ [lợi ích - Vo]: <strong>become better</strong> (trở nên tốt hơn), <strong>enjoy life</strong> (tận hưởng cuộc sống), <strong>overcome difficulties</strong> (vượt qua khó khăn), <strong>discover myself</strong> (khám phá bản thân)"
      ],
      samples: [
        { en: "I would like to tell you about this place, which is very special and attractive. It helps me enjoy life and overcome difficulties.", vi: "Tôi muốn kể cho bạn nghe về nơi này, nơi rất đặc biệt và cuốn hút. Nó giúp tôi tận hưởng cuộc sống và vượt qua những khó khăn." },
        { en: "Let me talk about this activity, an important part of my life. It always makes me feel relaxed and helps me become better.", vi: "Hãy để tôi nói về hoạt động này, một phần quan trọng trong cuộc sống của tôi. Nó luôn làm tôi cảm thấy thư giãn và giúp tôi trở nên tốt hơn." },
        { en: "One of the best things I can share is this experience. It is really amazing and provides a chance for me to enjoy life and discover myself.", vi: "Một trong những điều tuyệt vời nhất tôi có thể chia sẻ là trải nghiệm này. Nó thực sự tuyệt vời và mang đến cơ hội để tôi tận hưởng cuộc sống và khám phá bản thân." }
      ]
    };
  }

  // Generic B2 fallback
  return {
    templates: [
      "I am really fond of [hoạt động - Ving / sự vật] because it is very [tính từ]. It helps me [lợi ích 1 - Vo] and [lợi ích 2 - Vo] daily.",
      "What I like most about this is [sự vật], which is very [tính từ]. It gives me an opportunity to [lợi ích 1 - Vo] and [lợi ích 2 - Vo].",
      "I often [hoạt động - Vo] in my free time because it is [tính từ]. It allows me to [lợi ích 1 - Vo] and [lợi ích 2 - Vo] effectively."
    ],
    vocabulary: [
      "✨ [tính từ]: <strong>great</strong> (tuyệt vời), <strong>useful</strong> (hữu ích), <strong>attractive</strong> (cuốn hút), <strong>essential</strong> (cần thiết), <strong>beneficial</strong> (có lợi)",
      "✨ [lợi ích - Vo]: <strong>stay healthy</strong> (giữ sức khỏe), <strong>clear my mind</strong> (giải tỏa tâm trí), <strong>learn something new</strong> (học điều mới mẻ), <strong>connect with others</strong> (kết nối với người khác)"
    ],
    samples: [
      { en: "I am really fond of doing this activity because it is very great. It helps me stay healthy and clear my mind daily.", vi: "Tôi rất thích thực hiện hoạt động này vì nó rất tuyệt vời. Nó giúp tôi giữ sức khỏe và giải tỏa tâm trí hàng ngày." },
      { en: "What I like most about this is the experience, which is very attractive. It gives me an opportunity to learn something new and connect with others.", vi: "Điều tôi thích nhất ở điều này là trải nghiệm, điều rất hấp dẫn. Nó mang đến cho tôi cơ hội học hỏi điều mới và kết nối với người khác." },
      { en: "I often do this in my free time because it is useful. It allows me to stay healthy and clear my mind effectively.", vi: "Tôi thường làm việc này trong thời gian rảnh vì nó hữu ích. Nó cho phép tôi giữ sức khỏe và giải tỏa tâm trí hiệu quả." }
    ]
  };
}

// Read old Part 2
const content2 = fs.readFileSync('src/data/part2Data.js', 'utf8');
const match2 = content2.match(/export const part2Data = ([\s\S]*);/);
let data2;
eval('data2 = ' + match2[1]);

for (let club in data2) {
  const b2Data = getB2Data(data2[club].text);
  data2[club].templates = b2Data.templates;
  data2[club].vocabulary = b2Data.vocabulary;
  data2[club].samples = b2Data.samples;
}

fs.writeFileSync('src/data/part2Data.js', 'export const part2Data = ' + JSON.stringify(data2, null, 2) + ';');
console.log('Fixed logical matching error based on structural question words');
