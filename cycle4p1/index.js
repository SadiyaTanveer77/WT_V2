const express = require('express'); // Import the Express framework
const app = express(); // Create an instance of the Express app

const router = require('./router'); // Import the router module

app.use('/api', router); // Use the router for all requests starting with '/api'

app.listen(3000, () => { // Start the server on port 3000
    console.log('Server started on port 3000');
});
