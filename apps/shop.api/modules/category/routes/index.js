const { protect } = require('../../../middlewares/auth');
const express = require('express');
const router = express.Router();
const { getAll, getCount } = require('../controller/getCategory');
const { getById } = require('../controller/getCategoryById');
const { create } = require('../controller/postCategory');
const { update } = require('../controller/updateCategory');

router.route('/').get(protect, getAll);
router.route('/count').get(protect, getCount);
router.route('/:id').get(protect, getById);
router.route('/').post(protect, create);
router.route('/:id').put(protect, update);

module.exports = router;
