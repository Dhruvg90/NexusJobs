const scrollRevealOption ={

  distance :"50px",
  origin:"bottom",
  duration:1000,
}

ScrollReveal().reveal(".container .letter-s",{
  duration:1000,
  delay:1000,
});


ScrollReveal().reveal(".container img",{
  duration:1000,
  delay:2000,
});

ScrollReveal().reveal(".container .text_left",{
  ...scrollRevealOption,
  origin:"right",
  delay: 2000,
})

ScrollReveal().reveal(".container .text_right",{
  ...scrollRevealOption,
  origin:"left",
  delay: 2000,
})


ScrollReveal().reveal(".container .explore",{
  duration:1000,
  delay:3000,
});

ScrollReveal().reveal(".container .catalog",{
  duration:1000,
  delay:2000,
});


ScrollReveal().reveal(".container .print",{
  duration:1000,
  delay:4000,
});


ScrollReveal().reveal(".container h5",{
  duration:1000,
  interval:500,
  delay:4000,
});



ScrollReveal().reveal(".container .footer",{
  duration:1000,
  delay:5000,
});




//  animation of testimonials

// var copy = document.querySelector(".logo-slide").cloneNode(true);
// document.querySelector('logos').appendChild(copy);