const router = require('express').Router();
const controller = require('../controllers/category.js') // Controller
const express = require('express');

// Rutas
router.get('/', controller.getAllCategories);
router.post('/', controller.createCategory);
router.get('/:id', controller.getCategoryById);
router.put('/:id', controller.updateCategory);
router.delete('/:id', controller.deleteCategory);

module.exports = router;
