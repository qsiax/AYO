const swiperCatalog = new Swiper('.catalog__item-wrapper', {
    speed: 600,
    spaceBetween: 50,
    grabCursor: true,
    slidesPerView: 5,
    navigation: {
      nextEl: '.catalog__button-next',
      prevEl: '.catalog__button-prev',
    },
});
const swiperHome = new Swiper('.home-slide', {
  speed: 800,
  spaceBetween: 0,
  grabCursor: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.home__arrow-next',
    prevEl: '.home__arrow-prev',
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});
