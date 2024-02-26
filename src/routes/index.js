const express = require('express');
const router = express.Router();

const messege_controller = require('./../controllers/messege_controller');



const orders = require('./orders');
const category = require('./category');
const products = require('./products');
const table = require('./table');
const user = require('./user');

// const path = require('path');  //NOt installed yet, maybe will use?


/**
 * @swagger
 * /:
 *   get:
 *     summary: HeartBeat route
 *     description: Always returns HTTP 200, it is a healthcheck for the app
 *     responses:
 *      200:
 *          description: OK
 *          content:
*/
router.get('/', (req, res) => {
    res.send({msg: 'Hello from the root route!'});
});

router.use('', express.json());
router.use('/category', category);
router.use('/products', products);
router.use('/orders', orders);
router.use('/table', table);
router.use('/user', user);
/**
 * @swagger
 * tags: 
 *   name: Chat
 *   description: The Chat API
 * /message:
 *   get:
 *     summary: Generate random lorem ipsum text
 *     tags: [Chat]
 *     description: Generates random lorem ipsum text based on the number of paragraphs and sentences per paragraph specified in the request body.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               num:
 *                 type: integer
 *                 description: Number of paragraphs and sentences per paragraph to generate.
 *             example:
 *               num: 3
 *     responses:
 *       200:
 *         description: Randomly generated lorem ipsum text
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
 *       400:
 *         description: Bad request - invalid parameters
 */
router.get('/messege', messege_controller.sendResponse);


module.exports = router;