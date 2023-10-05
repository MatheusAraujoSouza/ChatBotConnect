const express = require('express');
const router = express.Router();
const connectApiController = require('./controllers/connectApiController');

// get /simple-communication
router.get('/simple-communication', connectApiController.simpleCommmunication);

module.exports = router;