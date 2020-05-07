//PA03 PLACEHOLDER
const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/prove/week03/pa03', {
        title: 'Prove Activity 03',
        path: '/pa03', // For pug, EJS
        activePA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

module.exports = router;