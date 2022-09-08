import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.trainers__slider', {
  loop: true,
  slidesPerView: '1',
  // spaceBetween: 60,
  navigation: {
    nextEl: '.trainers-btn-next',
    prevEl: '.trainers-btn-prev'
  }
});
