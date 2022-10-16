document.addEventListener('DOMContentLoaded', () => {
  const accordion = document?.querySelectorAll('.questions__item');

  accordion.forEach((elem) => {
    elem?.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const top = self?.querySelector('.accordion__top');
      const dropdown = self?.querySelector('.dropdown');

      self.classList.toggle('accordion__item--active');

      if (self.classList.contains('accordion__item--active')) {
        top.setAttribute('aria-label', 'Закрыть ответ');
        top.setAttribute('aria-expanded', true);
				dropdown.setAttribute('aria-hidden', false);
        dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
      } else {
        top.setAttribute('aria-label', 'Открыть ответ');
        top.setAttribute('aria-expanded', false);
				dropdown.setAttribute('aria-hidden', true);
        dropdown.style.maxHeight = null;
      }
    })
  })
})
