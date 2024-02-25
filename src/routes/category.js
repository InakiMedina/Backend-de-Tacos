const router = require('express').Router();
const controller = require('../controllers/category_controller.js') 


/**
 * @swagger
 * tags: 
 *   name: Category
 *   description: The Category API
 * /category:
 *  get:
 *    summary: Fetches all categories
 *    tags: [Category]
 *    description: Retrieves a list of all categories from the database.
 *    responses:
 *      200:
 *        description: A list of categories.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  _id:
 *                    type: string
 *                    description: The category ID.
 *                  name:
 *                    type: string
 *                    description: The name of the category.
 *              example:
 *                - _id: "123"
 *                  name: "Electronics"
 *                - _id: "456"
 *                  name: "Books"
 */
router.get('/', controller.getAllCategories);

/**
 * @swagger
 * /category:
 *  post:
 *    tags:
 *      - Category
 *    summary: Creates a new category
 *    description: Adds a new category with the provided name to the database.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                description: The name of the category to be created.
 *            required:
 *              - name
 *            example:
 *              name: "Gardening"
 *    responses:
 *      201:
 *        description: The created category object.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                _id:
 *                  type: string
 *                name:
 *                  type: string
 *              example:
 *                _id: "789"
 *                name: "Gardening"
 */
router.post('/', controller.createCategory);

/**
 * @swagger
 * /category/{id}:
 *  get:
 *    tags:
 *      - Category
 *    summary: Fetches a category by ID
 *    description: Retrieves a single category by its unique ID from the database.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: A single category object.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                _id:
 *                  type: string
 *                name:
 *                  type: string
 *              example:
 *                _id: "123"
 *                name: "Electronics"
 */
router.get('/:id', controller.getCategoryById);

/**
 * @swagger
 * /category/{id}:
 *  put:
 *    tags:
 *      - Category
 *    summary: Updates a category
 *    description: Modifies an existing category identified by its unique ID with the provided data.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                description: The new name of the category.
 *            example:
 *              name: "Tech Gadgets"
 *    responses:
 *      200:
 *        description: The updated category object.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                _id:
 *                  type: string
 *                name:
 *                  type: string
 *              example:
 *                _id: "123"
 *                name: "Tech Gadgets"
 */
router.put('/:id', controller.updateCategory);

/**
 * @swagger
 * /category/{id}:
 *  delete:
 *    tags:
 *      - Category
 *    summary: Deletes a category
 *    description: Removes a category from the database by its unique ID.
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: A message confirming the deletion.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "Category deleted"
 */
router.delete('/:id', controller.deleteCategory);

module.exports = router;