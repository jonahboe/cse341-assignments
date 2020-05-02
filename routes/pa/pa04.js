//PA04 PLACEHOLDER
const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/pa/pa04', {
        title: 'Prove Activity 04',
        path: '/pa04', // For pug, EJS
        activePA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

module.exports = router;