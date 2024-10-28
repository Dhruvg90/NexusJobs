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

  setInterval(nextSlide, 3000);

  showSlides();
});

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.querySelector(".hero").classList.add("hero-blur");
  }, 300); // 5 seconds delay
});
(function() {
    const originalText = "Designed By Dhruv Gupta"; // The expected text

    function checkSignature() {
        const footer = document.getElementById('footer-content');
        if (footer && footer.textContent.trim() === originalText) {
            // Signature is present
            return true;
        } else {
            // Signature is missing or altered
            alert("Signature removed or altered. The website cannot run.");
            document.body.innerHTML = ""; // Clear the page content
            document.body.style.backgroundColor = "#000"; // Optionally, change background color
            return false; // Prevent further interaction
        }
    }

    // Check signature on page load
    checkSignature();
})();


document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.testimonials-container');
    const slides = document.querySelectorAll('.slideh');
    let index = 0;
  
    function moveToNextSlide() {
      index++;
      if (index >= slides.length) {
        index = 0;
      }
      container.style.transform = `translateX(-${index * 100}%)`;
    }
  
    setInterval(moveToNextSlide, 8000); // dhruv text :Changes slide every 5 seconds
  });
  
  
  
  







