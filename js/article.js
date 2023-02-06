const article = new Swiper('.article-swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    navigation: {
      nextEl: '.article-swiper-button-next',
      prevEl: '.article-swiper-button-prev',
    },
    autoHeight: true,
  });