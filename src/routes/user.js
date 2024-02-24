const router = require('express').Router();
const userController = require('../controllers/user_controller.js') // Controller

router.get('', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/create', userController.createUser);
router.put('/:id/update', userController.updateUser); 
router.delete('/:id/delete', userController.deleteUser); 


module.exports = router;