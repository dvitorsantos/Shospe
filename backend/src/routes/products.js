var express = require('express');

const ProductsController = require('../controllers/ProductsController');

var router = express.Router();

router.get('/:product_id?', ProductsController.index)
router.post('/', ProductsController.store)

module.exports = router;
