//TA03 PLACEHOLDER
const express = require('express');
const productsController = require('../../../controllers/team/week03/products');
const router = express.Router();

router.get('/', productsController.getProducts);

router.post('/', productsController.postSearchProducts);

module.exports = router;