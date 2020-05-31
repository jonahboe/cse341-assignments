const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator/check');

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
        path: '/eCommerce/signup',
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
                res.render('pages/E-Commerce/auth/login', {
                    title: 'Log In',
                    path: '/eCommerce/login',
                    eCommerce: true,
                    errorMessage: "Invalid email! Please try again."
                });
            }
            bcrypt
                .compare(password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        req.session.isLoggedIn = true;
                        req.session.user = user;
                        console.log(user);
                        return req.session.save(err => {
                            res.redirect('/eCommerce');
                        });
                    }
                    else {
                        return res.render('pages/E-Commerce/auth/login', {
                            title: 'Log In',
                            path: '/eCommerce/login',
                            eCommerce: true,
                            errorMessage: "Invalid password! Please try again."
                        });
                    }
                })
                .catch(err => {
                    res.render('pages/E-Commerce/auth/login', {
                        title: 'Log In',
                        path: '/eCommerce/login',
                        eCommerce: true,
                        errorMessage: "Error occurred! Please try again."
                    });
                });
        })
        .catch(err => console.log(err));
};

exports.postSignUp = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const confPassword = req.body.confPassword;
    const errors = validationResult(req);
    console.log(errors.array());
    if (!errors.isEmpty()) {
        return res.status(442).render('pages/E-Commerce/auth/signup', {
            title: 'Sign Up',
            path: '/eCommerce/signup',
            eCommerce: true,
            errorMessage: errors.array()[0].msg
        });
    }
    User.findOne({email: email})
        .then(userDoc => {
            if (userDoc) {
                return res.status(442).render('pages/E-Commerce/auth/signup', {
                    title: 'Sign Up',
                    path: '/eCommerce/signup',
                    eCommerce: true,
                    errorMessage: "User email already exists! Please login."
                });
            }
            return bcrypt
                .hash(password, 12)
                .then(hashedPassword => {
                    const user = new User({
                        email: email,
                        password: hashedPassword,
                        cart: {items: []}
                    });
                    return user.save();
                })
                .then(result => {
                    res.render('pages/E-Commerce/auth/login', {
                        title: 'Log In',
                        path: '/eCommerce/login',
                        eCommerce: true,
                        isLoggedIn: req.session.isLoggedIn,
                        message: "Account created successfully! Please log in."
                    });
                });
        })
        .catch(err => {
            console.log(err);
        })
};