const express = require('express');

const PORT = 8081;

// Create the Express server
const app = express();

// Establish where the static files are served from
app.use('/', express.static(__dirname));

// Error handler
app.use((err, req, res, next) => {
  console.log('An error has happened');
  console.log(err);
  res.status(500).end();
});

app.listen(PORT, _ => {
  console.log(`App is listening on port ${PORT}`);
});
