var express = require('express');

// Create a new Express application
var app = express();

// Add a basic route – index page
app.get('/', function (req, res) {
  res.send('Hello from Server');
});

// Bind to a port
app.listen(3000);