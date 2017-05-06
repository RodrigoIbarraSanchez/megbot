// Get dependencies
const express = require('express');
router = express.Router();
var morgan = require("morgan")
const path = require('path');
var mongoose = require('mongoose');
var bodyParser = require("body-parser")
var cors = require('cors')
const http = require('http');

const app = express();

// Point static path to dist - Public folder
app.use(express.static(path.join(__dirname, 'dist')));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-type, Authorization, x-access-token');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3200';
app.set('port', port);

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`Dashboard cargando en: ${port}`));
