const express = require('express');
const usersController = require('../../../controllers/team/week10/controller');
const router = express.Router();

router.get('/fetchAll', usersController.getFetchAll);
router.get('/', usersController.get);

router.post('/insert', usersController.postInsert);

module.exports = router;