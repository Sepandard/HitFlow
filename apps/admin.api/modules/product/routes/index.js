const { protect } = require('../../../middlewares/auth');
const express = require('express');
const router = express.Router();
const { getAll, getCount } = require('../controller/getProductAll');
const { create } = require('../controller/postProduct');
const { update } = require('../controller/updateProduct');
const { remove } = require('../controller/deleteProduct');

// GET
router.route('/').get(protect, getAll);
router.route('/count').get(protect, getCount);

// POST
router.route('/').post(protect, create);

// PUT
router.route('/:id').put(protect, update);

// DELETE
router.route('/:id').delete(protect, remove);



module.exports = router;
