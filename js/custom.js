// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
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
/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


/* Javascript for prompt message*/
document.addEventListener('DOMContentLoaded', () => {
    const promptOverlay = document.getElementById('userPrompt');
    const closeBtn = document.querySelector('.close-btn');
  
    // Close the prompt when the close button is clicked
    closeBtn.addEventListener('click', () => {
        promptOverlay.style.display = 'none';
    });
  
    // Close the prompt when any category button is clicked (you can add specific redirection logic here)
    document.querySelectorAll('.prompt-btn').forEach(button => {
        button.addEventListener('click', () => {
            promptOverlay.style.display = 'none';
            // Add logic to redirect or handle user selection
        });
    });
  });




  let currentIndex = 0;
  const slides = document.querySelectorAll('.slider');
  const totalSlides = slides.length;
  const slidesToShow = 4; 
  const containerWidth = document.querySelector('.sliderr-container').offsetWidth;
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



