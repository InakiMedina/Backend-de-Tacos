const router = require('express').Router();
const orderController = require('./../controllers/orders') // Controller

/**
 * @swagger
 * tags: 
 *   name: Orders
 *   description: The Products API
 * /orders:
 *   get:
 *     summary: Retrieves a list of orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: A list of orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   waiter:
 *                     type: string
 *                     description: The waiter's ID
 *                   table:
 *                     type: string
 *                     description: The table's ID
 *                   date:
 *                     type: string
 *                     format: date-time
 *                     description: The date of the order
 *                   customerCount:
 *                     type: integer
 *                     description: The number of customers
 *                   orderProducts:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         productId:
 *                           type: string
 *                         quantity:
 *                           type: integer
 *                   total:
 *                     type: integer
 *                     description: Total amount of the order
 *                   type:
 *                     type: string
 *                     description: Type of the order
 *                   status:
 *                     type: string
 *                     description: Status of the order
 */
router.get('', orderController.getOrders);

/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Retrieves a specific order by ID
 *     tags: [Orders] 
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the order to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: An order object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 waiter:
 *                   type: string
 *                 table:
 *                   type: string
 *                 date:
 *                   type: string
 *                   format: date-time
 *                 customerCount:
 *                   type: integer
 *                 orderProducts:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       productId:
 *                         type: string
 *                       quantity:
 *                         type: integer
 *                 total:
 *                   type: integer
 *                 type:
 *                   type: string
 *                 status:
 *                   type: string
 *       404:
 *         description: Order not found
 */
router.get('/:id', orderController.getOrder);

/**
 * @swagger
 * /orders/{id}:
 *   put:
 *     summary: Updates an order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               waiter:
 *                 type: string
 *               table:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date-time
 *               customerCount:
 *                 type: integer
 *               orderProducts:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: string
 *                     quantity:
 *                       type: integer
 *               total:
 *                 type: integer
 *               type:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Order updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Order not found
 */
router.put('/:id', orderController.updateOrder);

/**
 * @swagger
 * /orders/{id}/splitcount:
 *   put:
 *     summary: Split count of an order (This endpoint's functionality is not fully described in your request)
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Split count updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Order not found
 */
router.put('/:id/splitcount', orderController.splitCount);

/**
 * @swagger
 * /orders/{id}/cancelproductorder/{productId}:
 *   put:
 *     summary: Cancel a product in an order
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product cancelled successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Order or product not found
 */
router.put('/:id/cancelproductorder/:productId', orderController.cancelOrderProduct);
/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               waiter:
 *                 type: string
 *               table:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date-time
 *               customerCount:
 *                 type: integer
 *               orderProducts:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: string
 *                     quantity:
 *                       type: integer
 *               total:
 *                 type: integer
 *               type:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Order created successfully
 *       400:
 *         description: Bad request
 */
router.post('', orderController.createOrder);

/**
 * @swagger
 * /orders/{id}/pay:
 *   post:
 *     summary: Pay for an order (This endpoint's functionality is not fully described in your request)
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order paid successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Order not found
 */
router.post('/:id/pay', orderController.payOrder);

/**
 * @swagger
 * /orders/{id}:
 *   delete:
 *     summary: Deletes an order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order deleted successfully
 *       404:
 *         description: Order not found
 */
router.delete('/:id', orderController.cancelOrderProduct);

module.exports = router;