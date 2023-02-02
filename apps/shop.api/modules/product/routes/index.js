const express = require('express');
const router = express.Router();
const { getAll } = require('../controller/getProductAll');
const { getById } = require('../controller/getProductById');

// GET
router.route('/').get(getAll);
router.route('/:id').get(getById);

// POST

// PUT 

// DELETE



module.exports = router;
