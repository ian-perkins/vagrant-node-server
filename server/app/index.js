const express = require('express');
const path = require('path');
const router = require('./router');

// Create the Express server
const app = express();

// Establish where the static files are served from
app.use('/static', express.static(path.join(__dirname, 'public')));

// Declare all valid URL routing in middleware
app.use(router);

// Error handler - catch any thrown error
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ data: { msg: err.message } });
});

module.exports = app;
