const express = require('express');
const path = require('path');

const PORT = 8081;

// Create the Express server
const app = express(); 

// Establish where the static files are served from
app.use('/static', express.static(path.join(__dirname, 'public')));

// Declare routes available and map to a response
app.get('/', (req, res) => {
  res.status(200).json({ data: { msg: 'Welcome to your Express powered API server' } });
});

// Getting here means the URL didn't match any defined route
app.use((req, res, next) => {
  let err = new Error(`URL ${req.path} not found`);
  err.status = 404;
  next(err);
});

// Error handler - catch any thrown error
app.use((err, req, res, next) => {
  res.status(err.status).json({ data: { msg: err.message } });
});

// Let's get started...
app.listen(PORT, _ => {
  console.log(`App is listening on port ${PORT}`);
});
