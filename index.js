if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

const express = require('express'); // Import express
const app = express(); // Instantiate express as an object called 'app'
const port = 3000;
const fetch = require('node-fetch');
const api_key = process.env.API_KEY;

app.use(express.static('public'));


// app.get('/', (req, res) => {
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// This creates a GET route for /dinoname
app.get('/dinoname', async (request, response) => {
    // run code stuff
    const fetchApi = await fetch("https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=2&format=json", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "alexnormand-dino-ipsum.p.rapidapi.com",
            "x-rapidapi-key": api_key
        }
    });

    const dinoNameResponse = await fetchApi.json();

    console.log(dinoNameResponse);
    response.json(dinoNameResponse);

});

app.get('/dinoimage', async (request, response) => {
    // run code stuff when GET is called to this link
    const fetchApi = await fetch("https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=20", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
            "x-rapidapi-key": api_key
        }
    })

    const dinoImageResponse = await fetchApi.json();

    response.json(dinoImageResponse);

});