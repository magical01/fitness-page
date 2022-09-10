document.addEventListener('DOMContentLoaded', () => {
  const accordion = document?.querySelectorAll('.accordion__item');

  accordion.forEach((elem, i) => {
    elem?.addEventListener('click', (e) => {
      if (e.currentTarget.closest('.accordion__item')) {
        e.currentTarget.classList.toggle('accordion__item--active')
      }
    })
  })
})
