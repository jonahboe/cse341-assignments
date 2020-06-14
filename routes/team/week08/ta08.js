const express = require('express');
const usersController = require('../../../controllers/team/week08/controller');
const router = express.Router();

router.get('/', usersController.getPage);

module.exports = router;