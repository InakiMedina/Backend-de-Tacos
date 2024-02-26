const router = require('express').Router();
const {getTables, getTable, createTable, updateTable, deleteTable, assignWaiter} = require('../controllers/table.controller')

/**
 * @swagger
 * tags: 
 *   name: Table
 *   description: The Table API
 * /table:
 *   get:
 *     summary: Get a list of all tables
 *     tags: [Table]
 *     responses:
 *       200:
 *         description: A list of tables
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   tableNumber:
 *                     type: number
 *                     description: Unique number of the table
 *                   status:
 *                     type: string
 *                     description: The status of the table (e.g., available, occupied)
 *                   waiter:
 *                     type: string
 *                     description: ID of the waiter assigned to the table
 */
router.get('/', getTables);

/**
 * @swagger
 * /table/{id}:
 *   get:
 *     summary: Get a specific table by its ID
 *     tags: [Table]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Details of a specific table
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 tableNumber:
 *                   type: number
 *                 status:
 *                   type: string
 *                 waiter:
 *                   type: string
 *       404:
 *         description: Table not found
 */
router.get('/:id', getTable);

/**
 * @swagger
 * /table:
 *   post:
 *     summary: Create a new table
 *     tags: [Table]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tableNumber:
 *                 type: number
 *                 description: Unique number for the table
 *               status:
 *                 type: string
 *                 description: Status of the table
 *               waiter:
 *                 type: string
 *                 description: ID of the waiter assigned to the table
 *     responses:
 *       200:
 *         description: Table created successfully
 *       404:
 *         description: Error creating table
 */
router.post('/', createTable);

/**
 * @swagger
 * /table/{id}:
 *   put:
 *     summary: Update a table's details
 *     tags: [Table]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tableNumber:
 *                 type: number
 *               status:
 *                 type: string
 *               waiter:
 *                 type: string
 *     responses:
 *       200:
 *         description: Table updated successfully
 *       404:
 *         description: Table not found
 */
router.put('/:id', updateTable);

/**
 * @swagger
 * /table/{id}:
 *   delete:
 *     summary: Delete a table
 *     tags: [Table]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Table deleted successfully
 *       404:
 *         description: Table not found
 */
router.delete('/:id', deleteTable);

/**
 * @swagger
 * /table/waiter/{id}:
 *   put:
 *     summary: Assign a waiter to a table
 *     tags: [Table]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               waiterId:
 *                 type: string
 *                 description: ID of the waiter to assign to the table
 *     responses:
 *       200:
 *         description: Waiter assigned to table successfully
 *       404:
 *         description: Table not found
 */
router.put('/waiter/:id', assignWaiter);

module.exports = router