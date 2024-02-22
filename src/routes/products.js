const router = require('express').Router();
const controller = require('../controllers/products_controller.js'); // Controller

// Existing route
router.get('', controller.find);

/**
 * @swagger
 * /products/product:
 *   post:
 *     summary: Create a new product
 *     description: Adds a new product to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Product created successfully.
 */
router.post('/product', controller.createProduct);

// Route for updating an existing product
// Assuming product ID is passed as a URL parameter
router.put('/product/:id', controller.updateProduct);

module.exports = router;
