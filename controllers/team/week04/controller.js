exports.getPage = (req, res, next) => {
    res.render('pages/team/week04/ta04', {
        title: 'Team Activity 04',
        path: '/ta04', // For pug, EJS
        activeTA04: true, // For HBS
        contentCSS: true, // For HBS
    });
};