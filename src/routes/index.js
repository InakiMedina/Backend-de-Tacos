const express = require('express');
const router = express.Router();

const category = require('./category')
const products = require('./products')
// const path = require('path');  //NOt installed yet, maybe will use?



// router.get('', (req,res) => {
//     const url = path.join(__dirname, '..', '..', 'public', 'index.html')
//    res.sendFile(url);
// });

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

module.exports = router;