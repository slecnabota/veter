const partners = new Swiper('.partners-swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.partners-swiper-button-next',
      prevEl: '.partners-swiper-button-prev',
    },
    breakpoints:{
      320:{
        slidesPerView: 2,
      },
      992:{
        slidesPerView: 3,
      }
    }
  });