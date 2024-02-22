const router = require('express').Router();
const userController = require('../controllers/user.js') // Controller

router.post('/create', userController.createUser);

module.exports = router;