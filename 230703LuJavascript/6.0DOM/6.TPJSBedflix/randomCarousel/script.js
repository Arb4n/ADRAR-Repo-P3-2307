// const API_KEY = 'Clé API : 7e358fd2b4b6';
// const IMAGES_COUNT = 5; // Number of random images to fetch

// fetch(`https://api.unsplash.com/photos/random?client_id=${API_KEY}&count=${IMAGES_COUNT}`)
//   .then(response => response.json())
//   .then(data => {
//     // Handle the received image data
//     const carouselInner = document.querySelector('.carousel-inner');
    
//     data.forEach((image, index) => {
//       const itemClass = (index === 0) ? 'carousel-item active' : 'carousel-item';
//       const imageElement = `<div class="${itemClass}"><img src="${image.urls.regular}" alt="${image.alt_description}" class="d-block w-100"></div>`;
      
//       carouselInner.innerHTML += imageElement;
//     });
//   })
//   .catch(error => console.log(error));


//   window.addEventListener('DOMContentLoaded', () => {
//     $('.carousel').carousel();
//   });







const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
 