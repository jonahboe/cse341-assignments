//TA04 PLACEHOLDER
const express = require('express');
const controller = require('../../../controllers/team/week04/controller');
const router = express.Router();

router.get('/', controller.getPage);

module.exports = router;