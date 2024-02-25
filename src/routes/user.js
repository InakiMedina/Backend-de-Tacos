const router = require('express').Router();
const userController = require('../controllers/user_controller.js') // Controller

/**
 * @swagger
 * tags: 
 *   name: Users
 *   description: The Users API
 * /user:
 *  get:
 *    tags: [Users]
 *    summary: Retrieves a list of all users.
 *    responses:
 *      200:
 *        description: A list of users.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  firstName:
 *                    type: string
 *                  lastName:
 *                    type: string
 *                  email:
 *                    type: string
 *                  type:
 *                    type: string
 *      500:
 *        description: Error message
 */
router.get('', userController.getUsers);

/**
 * @swagger
 * /user/{id}:
 *  get:
 *    tags: [Users]
 *    summary: Retrieves a user by ID.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Unique identifier of the user.
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: A single user object.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                firstName:
 *                  type: string
 *                lastName:
 *                  type: string
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *                type:
 *                  type: string
 *      500:
 *        description: Error message
 */
router.get('/:id', userController.getUser);


/**
 * @swagger
 * /user/create:
 *  post:
 *    tags: [Users]
 *    summary: Creates a new user.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - firstName
 *              - lastName
 *              - email
 *              - password
 *              - type
 *            properties:
 *              firstName:
 *                type: string
 *              lastName:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *              type:
 *                type: string
 *    responses:
 *      200:
 *        description: User created successfully.
 *      500:
 *        description: Error message
 */
router.post('/create', userController.createUser);

/**
 * @swagger
 * /user/{id}/update:
 *  put:
 *    tags: [Users]
 *    summary: Updates an existing user.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Unique identifier of the user to update.
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              firstName:
 *                type: string
 *              lastName:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *              type:
 *                type: string
 *    responses:
 *      200:
 *        description: User updated successfully.
 *      500:
 *        description: Error message
 */
router.put('/:id/update', userController.updateUser);

/**
 * @swagger
 * /user/{id}/delete:
 *  delete:
 *    tags: [Users]
 *    summary: Deletes a user by ID.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Unique identifier of the user to delete.
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: User deleted successfully.
 *      500:
 *        description: Error message
 */
router.delete('/:id/delete', userController.deleteUser); 


module.exports = router;