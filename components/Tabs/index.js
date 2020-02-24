// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics').
    then(topics => {

        let createTopic = (topic) => {
            let newTab = document.createElement('div');
            newTab.setAttribute('class', 'tab');
            newTab.textContent = topic;

            return newTab;
        }

        let topicsContainer = document.querySelector('.topics');

        topics.data.topics.forEach(topic => {
            topicsContainer.appendChild(createTopic(topic));
        })
        console.log(topics.data.topics);
    }).
    catch(err => {
        console.log(err);
    })

    