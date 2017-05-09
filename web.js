// Get dependencies
const express = require('express');
router = express.Router();
var morgan = require("morgan")
const path = require('path');
var mongoose = require('mongoose');
var bodyParser = require("body-parser")
var cors = require('cors')
const http = require('http');

const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

app.use(forceSSL());

const app = express();

// Point static path to dist - Public folder
app.use(express.static(path.join(__dirname, 'dist')));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
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
