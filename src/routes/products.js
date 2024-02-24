const router = require('express').Router();
const controller = require('../controllers/products_controller.js'); // Controller
/**
 * @swagger
 * tags: 
 *   name: Products
 *   description: The Products API
 * /products:
 *   get:
 *     summary: Retrieve all products
 *     tags: [Products]
 *     description: Fetch a list of all products from the database.
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The auto-generated id of the product.
 *                   name:
 *                     type: string
 *                     description: Name of the product.
 *                   unitPrice:
 *                     type: string
 *                     description: Price per unit of the product, stored as a Decimal128 in MongoDB.
 *                   category:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: The auto-generated id of the category.
 *                       name:
 *                         type: string
 *                         description: Category of the product.
 */
router.get('', controller.GetProducts);
/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Retrieve a single product by ID
 *     tags: [Products]
 *     description: Fetch a single product from the database by its unique ID.
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: Unique identifier of the product to retrieve.
 *     responses:
 *       200:
 *         description: A single product.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The auto-generated id of the product.
 *                 name:
 *                   type: string
 *                   description: Name of the product.
 *                 unitPrice:
 *                   type: string
 *                   description: Price per unit of the product, stored as a Decimal128 in MongoDB.
 *                 category:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The auto-generated id of the category.
 *                     name:
 *                       type: string
 *                       description: Category of the product.
 */
router.get('/:id', controller.GetProduct);
/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Products]
 *     description: Deletes a single product from the database by its unique ID.
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: Unique identifier of the product to delete.
 *     responses:
 *       200:
 *         description: Product deleted successfully.
 *       404:
 *         description: Product not found.
 */
router.delete('/:id', controller.DeleteProduct);
/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     description: Adds a new product to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the product.
 *               img:
 *                  type: string
 *                  description: URL of a product image.
 *               unitPrice:
 *                 type: number
 *                 description: Price per unit of the product, stored as a Decimal128 in MongoDB.
 *               category:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     description: Category of the product.
 *     responses:
 *       201:
 *         description: Product created successfully.
 *       404:
 *         description: Product not found.
 */
router.post('', controller.createProduct);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Update an existing product
 *     tags: [Products]
 *     description: Updates details of an existing product by its ID.
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: Unique identifier of the product to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the product.
 *               unitPrice:
 *                 type: number
 *                 description: Price per unit of the product, stored as a Decimal128 in MongoDB.
 *               img:
 *                  type: string
 *                  description: Product image URL
 *               category:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     description: Category of the product.
 *     responses:
 *       200:
 *         description: Product updated successfully.
 *       404:
 *         description: Product not found.
 */

router.put('/:id', controller.updateProduct);

module.exports = router;