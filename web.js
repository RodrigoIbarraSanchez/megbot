// Get dependencies
const express = require('express');
router = express.Router();
var morgan = require("morgan")
const path = require('path');
var mongoose = require('mongoose');
var bodyParser = require("body-parser")
var cors = require('cors')
const http = require('http');
var User = require('./models/user');

// Get our API routes
var apiRouter = require('./routes/apiRouter');

const app = express();

//Mongo DB
mongoose.connect('mongodb://heroku_vn3fwm62:illgmblsvfqod5lrk4j1cap1la@ds149800.mlab.com:49800/heroku_vn3fwm62');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Conectado a la BD')
});

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist - Public folder
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', apiRouter);

// Catch all other routes and return the index file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3200';
app.set('port', port);

/**
 * Create HTTP server.
 */
app.get('/horario', function (req, res) {
  User.find({}, function(err, users) {
    if (err) throw err;
    console.log(res + users);
  });
})


const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
