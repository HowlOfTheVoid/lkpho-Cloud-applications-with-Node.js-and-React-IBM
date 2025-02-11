 // Import the HTTP module
const http = require('http');

// Import the 'today' module
const today = require('./today');

// Define the request listener function
const requestListener = function (req, res) {
    res.writeHead(200); // Set the status code to 200 (OK)
    let dateVal = today.getDate();
    // Send the response with the current date from the 'today' module
    let greeting = "It is still not morning.";
    if(dateVal.getHours() > 6 && dateVal.getHours() < 12) {
        greeting = "Good Morning!"
    } else if(dateVal.getHours() > 12 && dateVal.getHours() < 18){
        greeting = "Good Afternoon!"
    } else if(dateVal.getHours() > 18 && dateVal.getHours() < 21) {
        greeting = "Good Evening!"
    } else if(dateVal.getHours() > 21 && dateVal.getHours() < 24) {
        greeting = "Good Night!"
    }
    res.end(`${greeting} \n Hello, World! The date today is ${today.getDate()}`);
};

// Define the port number
const port = 8080;

// Create an HTTP server using the request listener function
const server = http.createServer(requestListener);

// Start the server and listen on the specified port
server.listen(port);
console.log('Server listening on port: ' + port);
