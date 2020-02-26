// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let createArticle = (article) => {

    let card = document.createElement('div');
    card.setAttribute('class', 'card');

    let headline = document.createElement('div');
    headline.setAttribute('class', 'headline');
    headline.textContent = article.headline;

    let author = document.createElement('div');
    author.setAttribute('class', 'author');

    let imgContain = document.createElement('div');
    imgContain.setAttribute('class', 'img-container');

    let image = document.createElement('img');
    image.setAttribute('src', article.authorPhoto);

    let byAuthor = document.createElement('span');
    byAuthor.textContent = article.authorName;

    card.appendChild(headline);
    card.appendChild(author);

    author.appendChild(imgContain);
    author.appendChild(byAuthor)

    imgContain.appendChild(image);

    return card;
}

cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles').
            then(articles => {
                for (const articleTopic in articles.data.articles) {
                    articles.data.articles[articleTopic].forEach(article => {
                        cardsContainer.appendChild(createArticle(article));
                    })
                }
            }).
            catch(err => {
                console.log(err);
            })