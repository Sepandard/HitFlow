const { protect } = require('../../../middlewares/auth');
const express = require('express');
const router = express.Router();

const { getAll, getCount } = require('../controller/getUserAll');
const { getById } = require('../controller/getUserById');
const { update } = require('../controller/updateUser');

router.route('/').get(protect, getAll);
router.route('/count').get(protect, getCount);
router.route('/:id').get(protect, getById);

router.route('/:id').put(protect, update);

module.exports = router;
