document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
      item.querySelector('.faq-question').addEventListener('click', () => {
          item.classList.toggle('active');

          const answer = item.querySelector('.faq-answer');
          const icon = item.querySelector('.faq-icon');

          if (item.classList.contains('active')) {
              answer.style.maxHeight = answer.scrollHeight + "px";
          } else {
              answer.style.maxHeight = 0;
          }

          icon.textContent = item.classList.contains('active') ? '-' : '+';
      });
  });
});


/* nav js */
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });
  