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

// Error handler
app.use((err, req, res, next) => {
  console.log('An error has happened');
  console.log(err);
  res.status(500).end();
});

app.listen(PORT, _ => {
  console.log(`App is listening on port ${PORT}`);
});
