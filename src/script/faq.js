const faqBlock = document.querySelector('.faq__content');

faqBlock.addEventListener('click', (e) => {
  const target = e.target.closest('.faq__item');
  if (!target) {
    return;
  }

  target.classList.toggle('active');
});
