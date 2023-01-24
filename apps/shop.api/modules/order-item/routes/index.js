const { protect } = require('../../../middlewares/auth');
const express = require('express');
const router = express.Router();

const { getAll, getCount } = require('../controller/getOrderItemAll');

router.route('/').get(protect, getAll);
router.route('/count').get(protect, getCount);


module.exports = router;
