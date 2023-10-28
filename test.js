// const express = require('express');
// const app = express();
// const port = 8080;


// app.get('/', (req, res) => {
//     res.send('Hello World, from express');
// });

// app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

const mongoose = require('mongoose');

// MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/your_database_name'; // Replace 'your_database_name' with your actual database name

// Attempt to connect to the database
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

