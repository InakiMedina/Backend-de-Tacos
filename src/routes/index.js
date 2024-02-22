const express = require('express');
const router = express.Router();

const category = require('./category')
const products = require('./products')
const user = require('./user')
// const path = require('path');  //NOt installed yet, maybe will use?



// router.get('', (req,res) => {
//     const url = path.join(__dirname, '..', '..', 'public', 'index.html')
//    res.sendFile(url);
// });

router.get('/', (req, res) => {
    res.send('Hello from the root route!');
});

router.use('', express.json());
router.use('/category', category);
router.use('/products', products);
router.use('/user', user);

module.exports = router;