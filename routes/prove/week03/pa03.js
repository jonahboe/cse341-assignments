//PA03 PLACEHOLDER
const express = require('express');
const productsController = require('../../../controllers/prove/week03/products');
const router = express.Router();

router.get('/', productsController.getProducts);

router.get('/:productId', productsController.getProduct);

router.post('/', productsController.postSearchProducts);

module.exports = router;