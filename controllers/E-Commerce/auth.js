const bcrypt = require('bcryptjs');

const User = require('../../models/E-Commerce/user');

exports.getLogin = (req, res, next) => {
    res.render('pages/E-Commerce/auth/login', {
        title: 'Log In',
        path: '/eCommerce/login',
        eCommerce: true,
        isLoggedIn: req.session.isLoggedIn,
    });
};

exports.getSignUp = (req, res, next) => {
    res.render('pages/E-Commerce/auth/signup', {
        title: 'Sign Up',
        path: '/eCommerce/login',
        eCommerce: true,
        isLoggedIn: req.session.isLoggedIn,
    });
};

exports.getLogout = (req, res, next) => {
    req.session.destroy();
    res.redirect('/eCommerce/authenticate/login');
};

exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.redirect('/eCommerce/authenticate/signup');
            }
            bcrypt
                .compare(password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        req.session.isLoggedIn = true;
                        req.session.user = user;
                        console.log(user);
                        return req.session.save(err => {
                            console.log(err);
                            res.redirect('/eCommerce');
                        });
                    }
                    res.redirect('/eCommerce');
                })
                .catch(err => {
                    console.log(err);
                    res.redirect('/eCommerce/authenticate/login');
                });
        })
        .catch(err => console.log(err));
};

exports.postSignUp = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const confPassword = req.body.confPassword;
    User.findOne({ email: email })
        .then(userDoc => {
            if (userDoc) {
                return res.redirect('/eCommerce/authenticate/login');
            }
            return bcrypt
                .hash(password, 12)
                .then(hashedPassword => {
                    const user = new User({
                        email: email,
                        password: hashedPassword,
                        cart: { items: [] }
                    });
                    return user.save();
                })
                .then(result => {
                    res.redirect('/eCommerce/');
                });
        })
        .then(result => {
            return res.redirect('/eCommerce');
        })
        .catch(err => {
            console.log(err);
        })
};