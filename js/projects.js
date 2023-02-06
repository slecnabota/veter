const projects = new Swiper('.projects-swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    navigation: {
      nextEl: '.projects-swiper-button-next',
      prevEl: '.projects-swiper-button-prev',
    },
  });