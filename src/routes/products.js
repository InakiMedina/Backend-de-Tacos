const router = require('express').Router();
const controller = require('../controllers/index.js') // Controller

router.get('', controller.find);

module.exports = router;