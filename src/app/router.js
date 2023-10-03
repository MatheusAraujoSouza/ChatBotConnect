const express = require('express');
const router = express.Router();
const connectApiController = require('./controllers/connectApiController');

// GET /connect-to-other-api
router.get('/connect-to-other-api/:url', connectApiController.getConnection);

module.exports = router;