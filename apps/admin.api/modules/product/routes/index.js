const { protect } = require('../../../middlewares/auth');
const express = require('express');
const router = express.Router();
const { getAll, getCount } = require('../controller/getProductAll');
const { create } = require('../controller/postProduct');
const { update } = require('../controller/updateProduct');
const { remove } = require('../controller/deleteProduct');
const { search } = require('../controller/search-elastic');
const { getById } = require('../controller/getProductById');

// GET
router.route('/').get(protect, getAll);
router.route('/:id').get(protect, getById);
router.route('/count').get(protect, getCount);

// POST
router.route('/').post(protect, create);

// PUT
router.route('/:id').put(protect, update);

// DELETE
router.route('/:id').delete(protect, remove);

router.route('/search').get(search);



module.exports = router;
