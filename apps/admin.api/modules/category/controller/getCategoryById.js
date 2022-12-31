const asyncHandler = require('../../../middlewares/async');
const client = require('../../../config/db.js');
const ResponseMessages = require('../../../contract/responseMessages');
const ErrorHandler = require('../../../utils/errorHandler');

// @desc        get category by id
// @route       GET /api/category:id
// @access      Private
exports.getById = asyncHandler(async (req, res, next) => {
  if (!Number(req.params.id)) {
    return next(new ErrorHandler(res, ResponseMessages.INVALID_USER_ID, 400));
  }
  await client.query(
    `
    SELECT 
      "id",
      "title"
    from public.category 
    WHERE "id" = $1`,
    [Number(req.params.id)],
    (err, result) => {
      if (!err) {
        if (result) {
          res.status(200).json(result.rows[0]);
        } else {
          res.status(500).json('something went wrong');
        }
      } else {
        res.status(500).json(err);
      }
    }
  );
});
