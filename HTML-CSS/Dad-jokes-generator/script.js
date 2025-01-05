const btnEle = document.getElementById("btn");
const jokeEle = document.getElementById("joke")

const apiKey = "l2irEKVTMsD3itPf8rAH4w==XUIpacCoCOSedTt5";

const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey, 
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes"

async function getJoke() {

    try {
        jokeEle.innerText = 'Loading...';
        btnEle.disabled = true;
        btnEle.innerText = 'Loading...'
        const response = await fetch(apiURL, options);
        const data = await response.json();

        btnEle.disabled = false;
        btnEle.innerText = 'Tell me a joke'

        jokeEle.innerText = data[0]['joke'];
    } catch(error) {
        jokeEle.innerText = 'An error happened. Try again later...';
        btnEle.disabled = false;
        btnEle.innerText = 'Tell me a joke'
    }
}

btnEle.addEventListener("click", getJoke);