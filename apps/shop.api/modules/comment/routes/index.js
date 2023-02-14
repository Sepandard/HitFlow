const { protect } = require('../../../middlewares/auth');
const express = require('express');
const { reject } = require('../controller/rejectComment');
const {
  confirmed
} = require('../controller/confirmedComment');
const { create } = require('../controller/postAllComment');
const { getById } = require('../controller/getByIdComment');
const { getCommentByUser } = require('../controller/getUserComment');
const router = express.Router();

// GET
router.route('/').get(getById);
router.route('/user').get(getCommentByUser);

// POST
router.route('/').post(protect, create);
router.route('/:id/confirmed').post(protect, confirmed);
router.route('/:id/reject').post(protect, reject);

module.exports = router;
