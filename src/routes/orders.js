const router = require('express').Router();
const orderController = require('./../controllers/orders') // Controller

router.get('', orderController.getOrders);
router.get('/:id', orderController.getOrder);
router.put('/:id', orderController.updateOrder);
router.put('/:id/splitcount', orderController.splitCount);
router.put('/:id/cancelproductorder/:productId', orderController.cancelOrderProduct);
router.post('', orderController.createOrder);
router.post('/:id/pay', orderController.payOrder);
router.delete('/:id', orderController.deleteOrder);

module.exports = router;