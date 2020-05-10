//PA02 PLACEHOLDER
const express = require('express');
const bookController = require('../../../controllers/prove/week02/book');
const router = express.Router();

router.get('/', bookController.getBookSummary);

router.post('/submitSummary', bookController.postBookSummary);

module.exports = router;