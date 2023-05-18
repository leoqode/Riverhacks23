// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

module.exports = session({
  secret: "keyboardcat",
  saveUninitialized: true,
  cookie: { maxAge: null },
  resave: false 
})
// Create Express app
const app = express();

// Parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});