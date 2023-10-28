// Import necessary module
const { MongoClient } = require('mongodb');

// MongoDB connection URL and database name
const url = 'mongodb://localhost:27017';
const database_name = 'todo';

// Create a new MongoClient instance
const client = new MongoClient(url);

// Async function to connect to the database and return a collection
async function dbConnect() {
    // Connect to the MongoDB server
    let result = await client.connect();

    // Access the specified database
    let db = result.db(database_name);

    // Return the collection 'students' from the connected database
    return db.collection('students');
}

// Export the dbConnect function to be used in other modules
module.exports = dbConnect;
