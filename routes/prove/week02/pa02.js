//PA02 PLACEHOLDER
const express = require('express');
const router = express.Router();

let bookTitle = '';
let bookSummary = '';
let displaySummary = false;

router.get('/',(req, res, next) => {
    res.render('pages/prove/week02/pa02', {
        title: 'Prove Activity 02',
        path: '/pa02', // For pug, EJS
        activePA02: true, // For HBS
        contentCSS: true, // For HBS
        bookTitle: bookTitle,
        bookSummary: bookSummary,
        displaySummary: displaySummary
    });
    displaySummary = false;
});

// Add user POST
router.post('/submitSummary', (req, res, next) => {
    bookTitle = req.body.title;
    bookSummary = req.body.summary;
    displaySummary = true;
    res.redirect('/pa02');
});

module.exports = router;