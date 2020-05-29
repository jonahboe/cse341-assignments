exports.getPage = (req, res, next) => {
    res.render('pages/team/week06/ta06', {
        title: 'Team Activity 06',
        path: '/ta06', // For pug, EJS
        activeTA06: true, // For HBS
        contentCSS: true, // For HBS
        theme: Number(req.session.selectedTheme)
    });
};


