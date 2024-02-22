const router = require('express').Router();
const userController = require('../controllers/user.js') // Controller

router.get('', userController.getUsers);
router.get('/:id', userController.createUser);
router.post('/create', userController.createUser);
router.get('/:id', userController.createUser);

module.exports = router;