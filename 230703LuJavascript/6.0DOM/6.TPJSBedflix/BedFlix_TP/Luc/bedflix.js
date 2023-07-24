let images = ["Kate.png", "lands_unevieoulautre.png", "SweetTooth2.jpg", "wednesday.jpg", "witcher.jpg", "CapcomCharacters.jpg", "WitcherWP.jpg", "DarkSouls201.jpg", "DarkSouls202.jpg"];
// images.setAttribute("class", "slide");
// let attribut = images .getAttribute("class");

// function randomImage(){
//     const imageAleatoire = Math.floor(Math.random() * images.length);
//     return images[imageAleatoire];
// }
// images = randomImage([]);
// ---------------
// Using this api : 'GET https://api.betaseries.com/shows/random' , generate random image
// 
// To generate a random image using the API GET https://api.betaseries.com/shows/random, you can make an HTTP request to the API and retrieve the image URL from the response. Here's an example of how you can achieve that using JavaScript:



// TRY: FETCH RANDOM IMAGE
function getRandomImage() {
    const apiUrl = "https://api.betaseries.com/shows/random";
    const apiKey = "7e358fd2b4b6"; 

  // Create headers object with the API key
  const headers = new Headers();
  headers.append("X-BetaSeries-Key", apiKey);

  // Make the API request with the headers
  fetch(apiUrl, { headers })
    .then(response => response.json())
    .then(data => {
      // Assuming the image URL is available in the 'poster' property of the response
      const imageUrl = data.poster;

      // Create an img element and set the src to the retrieved image URL
      let img = document.createElement("img");
      img.src = imageUrl;
      img.classList.add('thumbnail');
      img.addEventListener('mousedown', OnMouseDown);
      img.setAttribute('draggable', false);

      // Append the image to the carousel slider or any other desired location
      let carouselSlider = document.querySelector(".carousel-slider");
      carouselSlider.appendChild(img);
    })
    .catch(error => {
      console.log("An error occurred while fetching random image:", error);
    });
}

  
  // Call the function to generate a random image
  getRandomImage();

 /** // In the above code, we're using the fetch function 
  to make an HTTP GET request to the API endpoint. 
  The response is converted to JSON using the response.json() method. 
  Assuming the API response includes the image URL 
  in the poster property, we extract that URL 
  and create an img element dynamically. We then 
  set the src attribute of the img element to the retrieved image URL.
  
  // Finally, we locate the carousel slider 
  using querySelector and append the img element to it. 
  Adjust the selector (.carousel-slider) to match 
  the appropriate element in your HTML structure 
  where you want to display the random image.
  
  // Please note that you may need to include
   additional headers or handle authentication if required 
   by the API. Also, make sure to review the API documentation for any specific usage instructions or limitations.
*/


function createThumbnail(carouselSlider, image)
{
    let img = document.createElement("img");
    img.src = "images/" + image;
    img.classList.add('thumbnail');
    img.addEventListener('mousedown', OnMouseDown);
    img.setAttribute('draggable', false);
    carouselSlider.appendChild(img);
}

function createCarousel(title, elements, node)
{
    let t = document.createElement("p");
    t.innerHTML = title;
    t.classList.add('carousel-title');

    let carousel = document.createElement("div"); 
    carousel.classList.add('carousel');

    let carouselContainer = document.createElement("div");
    carouselContainer.classList.add('carousel-container');

    let carouselSlider = document.createElement("div");
    carouselSlider.classList.add('carousel-slider');
    carouselSlider.setAttribute('draggable', false);

    carousel.appendChild(t);
    carousel.appendChild(carouselContainer);
    carouselContainer.appendChild(carouselSlider);

    node.appendChild(carousel);
    
    for(let i = 0; i < elements.length; i++)
    {
        createThumbnail(carouselSlider, elements[i]);
    }
}

var isDragging = false;
var currentElement = null;
var mouseX = 0;
var elementX = 0;

function OnMouseDown(e)
{
    isDragging = true;
    currentElement = e.target.parentElement;
    mouseX = e.clientX;
    elementX = parseFloat(getComputedStyle(currentElement).left);
}

function OnMouseMove(e)
{
    if(isDragging && currentElement !== null)
    {
        var x = (e.clientX - mouseX) + elementX;
        if(x >= 0) x = 0;
        currentElement.style.left = x + "px";
    }
}

function OnMouseUp(e)
{
    isDragging = false;
    currentElement = null;
    mouseX = 0;
}


document.addEventListener('mousemove', OnMouseMove);
document.addEventListener('mouseup', OnMouseUp);

// ------------------

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
 

// ------------------
createCarousel("Films", images, document.getElementById("FilmsCarousel"));
createCarousel("Séries", images, document.getElementById("FilmsCarousel"));