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

// Carousel functionality

let next = document.querySelector('.carousel div:nth-child(1)');
let prev = document.querySelector('.carousel div:nth-child(6)');

// Grabbed a list of all the images
let carouselImages = document.querySelectorAll('.carousel img');

// starting list index
let index = 0;

// number of images
let amount = carouselImages.length;

// the current image
let current = carouselImages[0];

// display the current image
current.style.display = 'block';

// function to change current image
function navigate(direction) {
  // hide current image
  current.style.display = 'none';
  //change the index
  index += direction;

  // make sure the index isn't negative when using prev
  if (direction === -1 && index < 0) {
    index = amount -1;
  }
  // when the index gets too high and it can't be found set it to 0
  if (direction === 1 && !items[index]) {
    index = 0;
  }

  //set set the current image to the current index
  current = carouselImages[index];
  // display the current image
  current.style.display = 'block';
}

// event listeners

// adds 1 to index to select the next image
next.addEventListener('click', () => {
  navigate(1);
});
// subtracts 1 from the index to grab the previous image
prev.addEventListener('click', () => {
  navigate(-1);
});

