// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

// Create Express app
const app = express();

// Parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS
app.use(cors({origin: 'http://localhost:5173', credentials: true,}));

// Session
app.use(session({
  secret: "keyboardcat",
  saveUninitialized: true,
  cookie: { maxAge: null },
  resave: false 
}))

// Define routes
require("./routes")(app);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});