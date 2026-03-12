const express = require('express');
const route = express.Router(); // Create a router instance

route.get('/', (req, res) => {
    res.status(200); // Set the response status to 200
    res.send('Hello, World! In GET'); // Send a response
});

route.post('/', (req, res) => {
    res.status(201); // Set the response status to 201
    res.send('Hello, World! In POST'); // Send a response
});

module.exports = route; // Export the router