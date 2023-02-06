const promo = new Swiper('.promo-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.promo-swiper-pagination',
    clickable: true,
  },
  speed: 1200,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,  
  },
});