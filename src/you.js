const express = require('express');
const axios = require('axios');
const app = express();
//get api key from .env file
let ap = require('dotenv').config();
const API_KEY = ap.parsed.API_KEY;
const base_url = "https://www.googleapis.com/youtube/v3";
const port = 3001;

const sqlite3 = require('sqlite3');

app.get('/', (req, res) => res.send('Hello World!'));



let now = 0;

app.get('/updateDB', async (req, res) => {
    // get random sentence from random sentence api
    if (req.query.key != "1234567890") {
        res.send("Invalid key");

    }
    for (let index = 0; index < 100 ; index++) 
    {
    //calculate percentage
    now = Math.round((index/100)*100);

    //sleep for 1 second
    await setTimeout(() => {
        console.log("sleeping");
    }, 1000);


    try{
    const randomSentence = await axios.get('https://random-word-api.herokuapp.com/word?number=1');
    // get random video from youtube api
    const randomVideo = await axios.get(`${base_url}/search?part=snippet&maxResults=1&q=${randomSentence.data[0]}&type=video&key=${apikey}`);

    const random_number = Math.floor(Math.random() * randomVideo.data.items.length);
    const video_id = randomVideo.data.items[random_number].id.videoId;
    data = {"vid": video_id};

    //store data in sqlite db
    const db = new sqlite3.Database('./Videos.sqlite');
    db.run(`INSERT INTO videos (video_id) VALUES ('${video_id}')`, (err) => {
        if (err) {
            console.log(err);
        }
    });}
    catch (error) {}

    console.log(data);
}

});

app.get('/updateProgress', (req, res) => {
    res.send(now.toString());
});

let count = 0

app.get('/search', (req, res) => {
    //get random video from sqlite db
    const db = new sqlite3.Database('./Videos.sqlite');
    db.all(`SELECT * FROM videos`, (err, rows) => {
        if (err) {
            console.log(err);
        }
        else {
            const random_number = Math.floor(Math.random() * rows.length);
            const video_id = rows[random_number].video_id;
            data = {"vid": video_id};
            console.log(data);
            res.json(data);
        }
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));