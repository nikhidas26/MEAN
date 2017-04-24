// This is the main server entry file
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);

//DB Connection
mongoose.connection.on('connected',  () => {
    console.log('Connected to database');
});

//DB Error
mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
});

const app = express();

const users = require('./routes/users');

// Port Number
const port = 3000;

// With cors we say we want to allow access from any domain
// https://enable-cors.org/server_expressjs.html
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Body parser middle ware - parses incoming request data
app.use(bodyParser.json());

//app.route('/users');
app.use('/users', users);

// Index route
app.get('/', (req, res) => {
    res.send("Invalid endpoint");
});

// Start server
app.listen(port, () => {
    console.log("Server started on port: " + port);
})