const { protect } = require('../../../middlewares/auth');
const express = require('express');
const router = express.Router();
const { getAll, getCount } = require('../controller/getOrder');
const { create } = require('../controller/postOrder');
const { update } = require('../controller/updateStatusOrder');
const { getById } = require('../controller/getOrderById');

// GET
router.route('/').get(protect, getAll);
router.route('/count').get(protect, getCount);
router.route('/:id').get(getById);

// POST
router.route('/').post(protect,  create);

// PUT
router.route('/status-change/:id').put( update);




module.exports = router;
