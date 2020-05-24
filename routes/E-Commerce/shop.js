const express = require('express');

const shopController = require('../../controllers/E-Commerce/shop');

const isAuth = require('../../middleware/E-Commerce/is-auth');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', isAuth, shopController.getCart);

router.post('/cart', isAuth, shopController.postCart);

router.post('/cart-delete-item', isAuth, shopController.postCartDeleteProduct);

router.post('/create-order', isAuth, shopController.postOrder);

router.get('/orders', isAuth, shopController.getOrders);

module.exports = router;
