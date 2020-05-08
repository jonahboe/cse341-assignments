//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();

const jsonParser = require('../../../public/scripts/jsonParser');

router.get('/',(req, res, next) => {
    const content = jsonParser.getJSON('https://byui-cse.github.io/cse341-course/lesson03/items.json');
    res.render('pages/team/week03/ta03', {
        title: 'Team Activity 03',
        path: '/ta03', // For pug, EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        content: content,
    });
});

router.post('/', (req, res, next) => {
    search = req.body.input;
    const products = jsonParser.getJSON('https://byui-cse.github.io/cse341-course/lesson03/items.json');
    const content = [];
    for (const item of products) {
        for (const tag of item.tags)
            if (tag === search)
                content.push(item);
    }
    res.render('pages/team/week03/ta03', {
        title: 'Team Activity 03',
        path: '/ta03', // For pug, EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        content: content,
    });
});

module.exports = router;