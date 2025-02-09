const express = require('express');
const router = express.Router();
const urlController = require('../controllers/url-controller')

router.route('/shorten').post(urlController.createShortUrl);

module.exports = router;