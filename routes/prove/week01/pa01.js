//PA01 PLACEHOLDER
const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/prove/week01/pa01', {
        title: 'Prove Activity 01',
        path: '/pa01', // For pug, EJS
        activePA01: true, // For HBS
        contentCSS: true, // For HBS
    });
});

module.exports = router;