const router = require('express').Router();

// Declare routes available and map to a response
router.get('/', (req, res) => {
  res.status(200).json({
    data: { msg: 'Welcome to your Express powered API server - now with extra routing!' },
  });
});

// Getting here means the URL didn't match any route defined above
router.use((req, res, next) => {
  let err = new Error(`URL ${req.path} not found`);
  err.status = 404;
  next(err);
});

module.exports = router;
