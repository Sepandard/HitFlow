const { protect } = require('../../../middlewares/auth');
const express = require('express');
const router = express.Router();
const { getAll } = require('../controller/getProductAll');

// GET
router.route('/').get(getAll);

// POST

// PUT 

// DELETE



module.exports = router;
