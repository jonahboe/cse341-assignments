//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();

let userList = [{name: 'John'}, {name: 'Milly'}, {name: 'Tyler'}];
let message = '';

router.get('/',(req, res, next) => {
    const msg = message;
    message = '';
    res.render('pages/ta/ta02', {
        title: 'Team Activity 02', 
        path: '/ta02', // For pug, EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        users: userList,
        message: msg
    });
});

// Add user POST
router.post('/addUser', (req, res, next) => {
    if (userList.find(user => user.name === req.body.name) === undefined)
        userList.push({name: req.body.name});
    else
        message = `User ${req.body.name} already exists!`;
    res.redirect('/ta02');
});

// Remove user POST
router.post('/removeUser', (req, res, next) => {
    if (userList.find(user => user.name === req.body.name) === undefined)
        message = `Could not find user ${req.body.name}!`;
    else
        userList = userList.filter(item => item.name !== req.body.name);
    res.redirect('/ta02')
});

module.exports = router;