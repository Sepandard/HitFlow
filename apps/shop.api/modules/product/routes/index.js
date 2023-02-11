const express = require('express');
const router = express.Router();
const { getAll } = require('../controller/getProductAll');
const { getById } = require('../controller/getProductById');
const { search } = require('../controller/searchProduct');

// GET
router.route('/').get(getAll);
router.route('/:id').get(getById);
router.route('/search').get(search);

// POST

// PUT 

// DELETE



module.exports = router;
