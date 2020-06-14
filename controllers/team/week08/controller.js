const jsonParser = require('../../../public/scripts/jsonParser');

const ITEMS_PER_PAGE = 10;

exports.getPage = (req, res, next) => {
    let page = req.query.page;
    let hasBack = true;
    let hasNext = true;
    const prods = jsonParser.getJSON('https://byui-cse.github.io/cse341-course/lesson03/items.json');
    if (page === undefined || page < 2) {
        page = 1;
        hasBack = false;
    }
    let lastItem = page * ITEMS_PER_PAGE;
    if (lastItem >= prods.length)
        lastItem = prods.length - 1;
    if (lastItem === prods.length - 1)
        hasNext = false;
    const content = prods.slice((page - 1) * ITEMS_PER_PAGE, lastItem);
    res.render('pages/team/week08/ta08', {
        title: 'Team Activity 08',
        path: '/ta08', // For pug, EJS
        activeTA08: true, // For HBS
        contentCSS: true, // For HBS
        content: content,
        hasBack : hasBack,
        hasNext: hasNext,
        page: page,
        pageCount: prods.length/ITEMS_PER_PAGE,
    });
};