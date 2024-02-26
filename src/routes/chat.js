const router = require('express').Router();
const controller = require('../controllers/chat_controller')

router.get('/', controller.getMessage);


module.exports = router