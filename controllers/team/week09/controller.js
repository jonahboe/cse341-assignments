const jsonParser = require('../../../public/scripts/jsonParser');

exports.getPage = (req, res, next) => {
    const content = jsonParser.getJSON('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10');
    res.render('pages/team/week09/ta09', {
        title: 'Team Activity 09',
        path: '/ta09', // For pug, EJS
        activeTA08: true, // For HBS
        contentCSS: true, // For HBS
        content: content,
    });
};