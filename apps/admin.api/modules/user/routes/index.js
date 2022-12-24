const { protect } = require('../../../middlewares/auth');
const express = require('express');
const router = express.Router();

const { getAll, getCount } = require('../controller/getUserAll');
const { getById } = require('../controller/getUserById');

router.route('/').get(protect, getAll);
router.route('/count').get(protect, getCount);
router.route('/:id').get(protect, getById);

module.exports = router;
