const express = require('express');
const router = express.Router();


const orders = require('./orders');
const category = require('./category');
const products = require('./products');
const table = require('./table');
const user = require('./user');
const chat = require('./chat');
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
    res.send({
        msg: 'Hello from the root route!'
    });
});

router.use('', express.json());
router.use('/category', category);
router.use('/products', products);
router.use('/orders', orders);
router.use('/table', table);
router.use('/user', user);
router.use('/chat', chat)
module.exports = router;