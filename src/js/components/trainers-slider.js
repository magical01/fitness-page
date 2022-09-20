import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.trainers__slider', {
  loop: true,
  slidesPerView: '3',
  // spaceBetween: 60,
  navigation: {
    nextEl: '.trainers-btn-next',
    prevEl: '.trainers-btn-prev'
  },
  speed: 600,
  breakpoints: {
    1025: {
      slidesPerView: '3'
    },

    320: {
      slidesPerView: '1'
    }
  }

});
