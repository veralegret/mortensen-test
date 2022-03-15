/**
 * Import dependencies from node_modules
 * see commented examples below
 */

const swiper = new Swiper('.mySwiper', {
  speed: 400,
  spaceBetween: 500,
  loop: true,
  //autoHeight: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
