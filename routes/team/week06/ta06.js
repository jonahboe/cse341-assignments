//TA05 PLACEHOLDER
const express = require('express');
const controller = require('../../../controllers/team/week06/controller');
const router = express.Router();

router.get('/', controller.getPage);

module.exports = router;