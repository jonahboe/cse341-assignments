const express = require('express');

const authController = require('../../controllers/E-Commerce/auth');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignUp);

router.get('/logout', authController.getLogout);

router.post('/login', authController.postLogin);

router.post('/signup', authController.postSignUp);

module.exports = router;
