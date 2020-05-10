//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const usersController = require('../../../controllers/team/week02/users');
const router = express.Router();

let userList = [{name: 'John'}, {name: 'Milly'}, {name: 'Tyler'}];
let message = '';

router.get('/', usersController.getUsers);

// Add user POST
router.post('/addUser', usersController.postAddUser);

// Remove user POST
router.post('/removeUser', usersController.postRemoveUser);

module.exports = router;