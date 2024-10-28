document.addEventListener('DOMContentLoaded', () => {
  const scrollLinks = document.querySelectorAll('.scroll-down');
  const fadeInElements = document.querySelectorAll('.fade-in');
  const slideInElements = document.querySelectorAll('.slide-in');
  const listItems = document.querySelectorAll('.list-animation li');
  const button = document.querySelector('.cta-button');

  // Smooth Scroll
  scrollLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Initial Check for elements in viewport
  handleScroll();

  // Button color change and animation
  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#1b262c';
  });

  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#0f4c75';
  });

  button.addEventListener('click', () => {
    button.style.transform = 'scale(0.9)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 100);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });

  let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const slidesToShow = 4; 
  const containerWidth = document.querySelector('.slider-container').offsetWidth;
  const slideWidth = containerWidth / slidesToShow;

  function showSlides() {
      slides.forEach((slide, i) => {
          slide.style.width = `${slideWidth}px`;
          slide.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
      });
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % (totalSlides - slidesToShow + 1);
      showSlides();
  }

  function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides - slidesToShow + 1) % (totalSlides - slidesToShow + 1);
      showSlides();
  }

  document.querySelector('.next').addEventListener('click', nextSlide);
  document.querySelector('.prev').addEventListener('click', prevSlide);

  setInterval(nextSlide, 900);

  showSlides();
});
