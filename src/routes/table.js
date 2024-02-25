const router = require('express').Router();
const {getTables, getTable, createTable, updateTable, deleteTable, assignWaiter} = require('../controllers/table.controller')

router.get('/', getTables);
router.get('/:id', getTable);
router.post('/', createTable);
router.put('/:id', updateTable);
router.delete('/:id', deleteTable);
router.put('/waiter/:id', assignWaiter);

module.exports = router