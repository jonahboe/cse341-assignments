//PA02 PLACEHOLDER
const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/pa/pa02', {
        title: 'Prove Activity 02',
        path: '/pa02', // For pug, EJS
        activePA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

module.exports = router;