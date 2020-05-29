exports.getPage = (req, res, next) => {
    var cookies = req.get('Cookie').split("; ");
    var highScore = 0;
    cookies.forEach(cookie => {
        if (cookie.search("highScore") > -1) {
            highScore = Math.round(cookie.split("=")[1]);
        }
    });
    res.render('pages/team/week06/ta06', {
        title: 'Team Activity 06',
        path: '/ta06', // For pug, EJS
        activeTA06: true, // For HBS
        contentCSS: true, // For HBS
        highScore: highScore
    });
};


