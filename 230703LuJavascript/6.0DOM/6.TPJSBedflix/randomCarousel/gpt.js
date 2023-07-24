// window.addEventListener('load', function() {
//     var carousel = document.querySelector('.carousel');
//     var slides = Array.from(carousel.getElementsByClassName('slide'));
//     var currentIndex = 0;
  
//     function showSlide(index) {
//       slides.forEach(function(slide) {
//         slide.classList.remove('active');
//       });
//       slides[index].classList.add('active');
//     }
  
//     function randomizeCarousel() {
//       var randomIndex = Math.floor(Math.random() * slides.length);
//       showSlide(randomIndex);
//     }
  
//     randomizeCarousel(); // Show a random slide initially
  
//     setInterval(randomizeCarousel, 3000); // Randomize the carousel every 3 seconds
//   });
  
window.addEventListener('load', function() {
    var carousel = document.querySelector('.carousel');
    var slides = Array.from(carousel.getElementsByClassName('slide'));
    var currentIndex = 0;
  
    function showSlide(index) {
      slides.forEach(function(slide) {
        slide.classList.remove('active');
      });
      slides[index].classList.add('active');
    }
  
    function randomizeCarousel() {
      var randomIndex = Math.floor(Math.random() * slides.length);
      showSlide(randomIndex);
    }
  
    randomizeCarousel();
  });
  