const post = new Swiper('.post-swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    navigation: {
      nextEl: '.post-swiper-button-next',
      prevEl: '.post-swiper-button-prev',
    },
    autoHeight: true,
  });