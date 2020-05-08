//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/team/week03/ta03', {
        title: 'Team Activity 03', 
        path: '/ta03', // For pug, EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });

    const content = JSON.parse('https://byui-cse.github.io/cse341-course/lesson03/items.json');
    console.log(content); // this will show the info it in firebug console
});

module.exports = router;