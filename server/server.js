const connect = require('connect');
const serveStatic = require('serve-static');

const PORT = 8080;

connect().use(serveStatic(__dirname)).listen(PORT, _ => {
  console.log(`Server listening on port ${PORT}`);
});
