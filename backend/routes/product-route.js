const express = require('express');
const productController = require('../controllers/product-controller');
const router = express();

router.get('/', productController.getProduct);
router.delete('/:pid', productController.deleteProduct);

module.exports = router;
