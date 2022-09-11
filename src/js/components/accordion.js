document.addEventListener('DOMContentLoaded', () => {
  const accordion = document?.querySelectorAll('.questions__item');

  accordion.forEach((elem) => {
    elem?.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const dropdown = self?.querySelector('.dropdown')

      self.classList.toggle('accordion__item--active');

      if (self.classList.contains('accordion__item--active')) {
        dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
      } else {
        dropdown.style.maxHeight = null;
      }
    })
  })
})
