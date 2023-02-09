const { protect } = require('../../../middlewares/auth');
const express = require('express');
const router = express.Router();

const { getAll } = require('../controller/getOrderItemAll');

router.route('/').get(protect, getAll);


module.exports = router;
