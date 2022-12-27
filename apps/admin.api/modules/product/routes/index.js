const { protect } = require('../../../middlewares/auth');
const express = require('express');
const router = express.Router();
const { getAll, getCount } = require('../controller/getProductAll');
const { postProduct } = require('../controller/postProduct');


router.route('/').get(protect, getAll);
router.route('/').post(protect, postProduct);
router.route('/count').get(protect, getCount);


module.exports = router;
