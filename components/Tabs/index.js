// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let createTopic = (topic) => {
    let newTab = document.createElement('div');
    if (topic === 'node.js') {
        newTab.setAttribute('class', `tab node`);
    } else {
        newTab.setAttribute('class', `tab ${topic}`);
    }
    newTab.textContent = topic;

    return newTab;
}

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

let topicsContainer = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics').
    then(topics => {
        topics.data.topics.forEach(topic => {
            topicsContainer.appendChild(createTopic(topic));
        })
        axios.get('https://lambda-times-backend.herokuapp.com/articles').
            then(articles => {
                console.log(articles);
                Object.keys(articles.data.articles).forEach(articleTopic => {
                    articles.data.articles[articleTopic].forEach(value => {
                        document.querySelector(`.${articleTopic}`).appendChild(createArticle(value));
                    })
                })
            }).
            catch(err => {
                console.log(err);
            })
    }).
    catch(err => {
        console.log(err);
    })

    