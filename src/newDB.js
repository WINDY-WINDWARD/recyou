//create a new database for video ids

//import sqlite3
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./Videos.sqlite');

//create a table for video id with vid as primary key

db.run(`CREATE TABLE IF NOT EXISTS videos (video_id TEXT PRIMARY KEY)`, (err) => {
    if (err) {
        console.log(err);
    }
}
);