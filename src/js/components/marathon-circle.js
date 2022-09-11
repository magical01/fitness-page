document.addEventListener('DOMContentLoaded', () => {
  const circle = document?.querySelectorAll('.marathon__number');
  const text = document?.querySelectorAll('.marathon__text');

  circle.forEach((elem, i) => {
    elem?.addEventListener('mouseover', () => {
      if (document.querySelector('.marathon__number--active')) {
        document.querySelector('.marathon__number--active').classList.remove('marathon__number--active')
      }

      if (document.querySelector('.marathon__text--active')) {
        document.querySelector('.marathon__text--active').classList.remove('marathon__text--active')
      }

      elem.classList.add('marathon__number--active');
      text[i].classList.add('marathon__text--active');
    })
  });

  circle.forEach((elem, i) => {
    elem?.addEventListener('mouseleave', () => {
      elem.classList.remove('marathon__number--active');
      text[i].classList.remove('marathon__text--active');
    })
  });

})
