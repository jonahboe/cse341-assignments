//PA01 PLACEHOLDER
const express = require('express');
const controller = require('../../../controllers/prove/week01/controller');
const router = express.Router();

router.get('/', controller.getPage);

module.exports = router;