document.addEventListener('DOMContentLoaded', () => {
  const scrollLinks = document.querySelectorAll('.scroll-down');
  const serviceItems = document.querySelectorAll('.service');
  const fadeInElements = document.querySelectorAll('.fade-in');

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

  // Fade-in on Scroll
  const handleScroll = () => {
      fadeInElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
              el.classList.add('visible');
          }
      });

      serviceItems.forEach((item, index) => {
          const rect = item.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
              setTimeout(() => {
                  item.classList.add('visible');
              }, index * 100);
          }
      });
  };

  window.addEventListener('scroll', handleScroll);

  // Initial Check for elements in viewport
  handleScroll();
});






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





document.querySelector('form[name="submit-to-google-sheet"]').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  const spinner = document.querySelector('.spinner');
  const submitButton = document.querySelector('.submit');

  // Show spinner and hide submit button
  spinner.style.display = 'block';
  submitButton.style.display = 'none';

  // Submit the form data
  fetch(this.action, {
      method: 'POST',
      body: new FormData(this),
  }).then(response => response.text()).then((responseText) => {
      alert('Your data has been saved successfully! We will reach out to you soon!');
      window.location.href = 'index.html'; // Redirect to home page
  }).catch(() => {
      alert('There was an error, please try again or contact us.');
  }).finally(() => {
      // Hide the spinner and show the submit button (in case of an error)
      spinner.style.display = 'none';
      submitButton.style.display = 'block';
  });
});


