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
  leftButton.addEventListener('click', () => {
    navigate(-1);
  });

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
  rightButton.addEventListener('click', () => {
    navigate(1);
  });

  carousel.appendChild(leftButton);
  carousel.appendChild(imgOne);
  carousel.appendChild(imgTwo);
  carousel.appendChild(imgThree);
  carousel.appendChild(imgFour);
  carousel.appendChild(rightButton);

  let carouselImages = [imgOne, imgTwo, imgThree, imgFour];
  let index = 0;
  let amount = carouselImages.length;
  let current = carouselImages[index];
  
  current.style.display = 'inline-block';

  function navigate(direction) {
    current.style.display = 'none';
    index += direction;

    if (direction === -1 && index < 0) {
      index = amount -1;
    }
    if (direction === 1 && !carouselImages[index]) {
      index = 0;
    }

    current = carouselImages[index];
    current.style.display = 'inline-block';
  }

  return carousel;
}

document.querySelector('.carousel-container').appendChild(createCarousel());
