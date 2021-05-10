var express = require('express');
const authHeader = require('../middlewares/auth')

const UsersController = require('../controllers/UsersController')
const OrdersController = require('../controllers/OrdersController');

var router = express.Router();

router.post('/', UsersController.store)
router.post('/authenticate', UsersController.authenticate)

router.use(authHeader)
router.get('/:user_id?', UsersController.index)
router.get('/:user_id/orders/:order_id?', OrdersController.index)
router.post('/:user_id/orders', OrdersController.store)

module.exports = router;
