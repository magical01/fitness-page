document.addEventListener('DOMContentLoaded', () => {
  const scrollTop = document?.querySelector('.scroll-top');
  const offset = document?.querySelector('.header').offsetHeight + document?.querySelector('.hero').offsetHeight;

  function getTop() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  window.addEventListener('scroll', () => {
    if (getTop() > offset)  {
      scrollTop.classList.add('scroll-top--active');
    } else {
      scrollTop.classList.remove('scroll-top--active');
    }
  });

  scrollTop?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

