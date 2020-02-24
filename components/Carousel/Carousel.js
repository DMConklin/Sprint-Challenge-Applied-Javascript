/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let createCarousel = () => {

  let carousel = document.createElement('div');
  carousel.setAttribute('class', 'carousel');

  let leftButton = document.createElement('div');
  leftButton.setAttribute('class', 'left-button');
  leftButton.textContent = ' < ';

  let imgOne = document.createElement('img');
  imgOne.setAttribute('src', './assets/carousel/mountains.jpeg');

  let imgTwo = document.createElement('img');
  imgTwo.setAttribute('src', './assets/carousel/computer.jpeg');

  let imgThree = document.createElement('img');
  imgThree.setAttribute('src', './assets/carousel/trees.jpeg');

  let imgFour = document.createElement('img');
  imgFour.setAttribute('src', './assets/carousel/turntable.jpeg');

  let rightButton = document.createElement('div');
  rightButton.setAttribute('class', 'right-button');
  rightButton.textContent = ' > ';

  carousel.appendChild(leftButton);
  carousel.appendChild(imgOne);
  carousel.appendChild(imgTwo);
  carousel.appendChild(imgThree);
  carousel.appendChild(imgFour);
  carousel.appendChild(rightButton);

  return carousel;
}

let carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild(createCarousel());

let next = document.querySelector('.carousel div:nth-child(1)');
let prev = document.querySelector('.carousel div:nth-child(6)');

let carouselImages = document.querySelectorAll('.carousel img');

let counter = 0;

let amount = carouselImages.length;

let current = carouselImages[0];

current.style.display = 'block';

function navigate(direction) {
  current.style.display = 'none';
  counter += direction;

  if (direction === -1 && counter < 0) {
    counter = amount -1;
  }
  if (direction === 1 && !items[counter]) {
    counter = 0;
  }

  current = carouselImages[counter];
  current.style.display = 'block';
}

next.addEventListener('click', () => {
  navigate(1);
});
prev.addEventListener('click', () => {
  navigate(-1);
});

