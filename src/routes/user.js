const router = require('express').Router();
const userController = require('../controllers/user.js') // Controller

router.get('', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/create', userController.createUser);


module.exports = router;