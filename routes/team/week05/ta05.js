//TA05 PLACEHOLDER
const express = require('express');
const controller = require('../../../controllers/team/week05/controller');
const router = express.Router();

router.post('/change-theme', controller.postChangeTheme);

router.post('/counter', controller.postCounter);

router.post('/reset', controller.postReset);

router.get('/', controller.getPage);

module.exports = router;