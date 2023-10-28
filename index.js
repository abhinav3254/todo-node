const express = require('express');
const { MongoClient } = require('mongodb');
require('./database/mongoDB'); // Make sure this file contains the MongoDB connection setup
const TODO = require('./database/schema');
const PORT = 8080;

const app = express();

app.use(express.json());

app.get('/', async (request, response) => {
    response.status(200).send('oki');
});

// POST endpoint handling the creation of a new TODO item
app.post('/add', async (request, response) => {
    const Todo = {
        title: request.body.title,
        description: request.body.description,
        dueDate: request.body.dueDate,
        priority: request.body.priority,
        completed: request.body.completed,
        created_at: Date.now()
    }
    response.status(201).send(Todo);
});

// to parse the created date
function parseTimestamp(timestamp) {
    const date = new Date(timestamp);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${year}-${formattedMonth}-${formattedDay} ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}


// port response
app.listen(PORT, () => {
    console.log(`App is up and running on port ${PORT}!`);
});
