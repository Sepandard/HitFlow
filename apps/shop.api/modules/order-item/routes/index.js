const { protect } = require('../../../middlewares/auth');
const express = require('express');
const router = express.Router();

const { getAll, total } = require('../controller/getOrderItemAll');

router.route('/').get(protect, getAll);
router.route('/total').get(protect, total);


module.exports = router;
