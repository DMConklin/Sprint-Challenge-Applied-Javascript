// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

let createHeader = () => {

    let header = document.createElement('div');
    header.setAttribute('class', 'header');

    let date = document.createElement('span');
    date.setAttribute('class', 'date');
    date.textContent = 'MARCH 28, 2019';

    let header1 = document.createElement('h1');
    header1.textContent = 'Lambda Times';

    let temp = document.createElement('span');
    temp.setAttribute('class', 'temp');
    temp.textContent = '98°';

    header.appendChild(date);
    header.appendChild(header1);
    header.appendChild(temp);

    return header;
}

let headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(createHeader());