const express = require('express');
const router = express.Router();
const connectApiController = require('./controllers/connectApiController');

// post /connect-to-other-api
router.post('/connect-to-other-api', connectApiController.getConnection);

module.exports = router;