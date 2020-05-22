exports.getPage = (req, res, next) => {
    if (req.session.count === undefined)
        req.session.count = 0;
    res.render('pages/team/week05/ta05', {
        title: 'Team Activity 05',
        path: '/ta05', // For pug, EJS
        activeTA05: true, // For HBS
        contentCSS: true, // For HBS
        theme: Number(req.session.selectedTheme),
        count: req.session.count,
    });
};

exports.postChangeTheme = (req, res, next) => {
    req.session.selectedTheme = req.body.theme;
    res.redirect('/ta05');
};

exports.postCounter = (req, res, next) => {
    req.session.count += Number(req.body.countValue);
    res.redirect('/ta05');
};

exports.postReset = (req, res, next) => {
    req.session.destroy();
    res.redirect('/ta05');
};

