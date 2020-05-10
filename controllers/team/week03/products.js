const jsonParser = require('../../../public/scripts/jsonParser');

exports.getProducts = (req, res, next) => {
    const content = jsonParser.getJSON('https://byui-cse.github.io/cse341-course/lesson03/items.json');
    res.render('pages/team/week03/ta03', {
        title: 'Team Activity 03',
        path: '/ta03', // For pug, EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        content: content,
    });
};

exports.postSearchProducts = (req, res, next) => {
    search = req.body.input;

    let content = [];
    if (search === "")
        content = jsonParser.getJSON('https://byui-cse.github.io/cse341-course/lesson03/items.json');
    else {
        const products = jsonParser.getJSON('https://byui-cse.github.io/cse341-course/lesson03/items.json');
        for (const item of products) {
            for (const tag of item.tags)
                if (tag === search)
                    content.push(item);
        }
    }

    res.render('pages/team/week03/ta03', {
        title: 'Team Activity 03',
        path: '/ta03', // For pug, EJS
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        content: content,
    });
};