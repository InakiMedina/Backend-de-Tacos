const router = require('express').Router();
const {getTables, getTable, createTable, updateTable, deleteTable, getTableWaiter, assignWaiter} = require('../controllers/table.controller.js')

/**
 * @swagger
 * tags:
 *   name: Table
 *   description: API endpoints for managing tables
 */

/**
 * @swagger
 * /tables:
 *   get:
 *     tags:
 *       - Table
 *     summary: Get all tables
 *     description: Retrieve a list of all tables
 *     responses:
 *       '200':
 *         description: Successful response
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               tableNumber:
 *                 type: integer
 *                 description: Table number
 *               status:
 *                 type: string
 *                 description: Table status (e.g., available, occupied)
 *               waiter:
 *                 type: string
 *                 description: ID of the assigned waiter (reference to Waiter model)
 *       '404':
 *         description: Table not found
 */

router.get('', getTables);


/**
 * @swagger
 * /tables/{id}:
 *   get:
 *     tags:
 *       - Table
 *     summary: Get table by ID
 *     description: Retrieve a specific table by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *         schema:
 *           type: object
 *           properties:
 *             tableNumber:
 *               type: integer
 *               description: Table number
 *             status:
 *               type: string
 *               description: Table status (e.g., available, occupied)
 *             waiter:
 *               type: string
 *               description: ID of the assigned waiter (reference to Waiter model)
 *       '404':
 *         description: Table not found
 *   put:
 *     tags:
 *       - Table
 *     summary: Update table by ID
 *     description: Update a specific table by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *     responses:
 *       '200':
 *         description: Table updated successfully
 *       '404':
 *         description: Table not found
 *   delete:
 *     tags:
 *       - Table
 *     summary: Delete table by ID
 *     description: Delete a specific table by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *     responses:
 *       '200':
 *         description: Table deleted successfully
 *       '404':
 *         description: Table not found
 */
router.get('/:id', getTable);
router.post('/', createTable);
router.put('/:id', updateTable);
router.delete('/:id', deleteTable);

/**
*  @swagger
*  /table/{id}/waiter:
*    get:
*      tags:
*        - Tables
*      summary: gets waiter from table
*      description: get waiter information for a specific table referenced by id
*      parameters:
*        - in: path
*          name: id
*          required: true
*          type: string
*      responses:
*        '200':
*          description: waiter information
*          content:
*            application/json:
*              schema:
*                type: object
*                properties:
*                  _waiterid:
*                    type: string
*                    description: id of the waiter
*                  user:
*                    type: object
*                    properties:
*                      firstname:
*                        type: string
*                        description: first name of the user
*                      lastname:
*                        type: string
*                        description: last name of the user
*                      email:
*                        type: string
*                        description: email address of the user
*                      password:
*                        type: string
*                        description: user's password
*                      type:
*                        type: string
*                        description: type of user (e.g., admin, regular)
*        '404':
*          description: waiter in table not found
*/
router.get('/:id/waiter', getTableWaiter);
router.put('/waiter/:id', assignWaiter);

module.exports = router