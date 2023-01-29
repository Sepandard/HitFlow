const asyncHandler = require('../../../middlewares/async');
const client = require('../../../config/db.js');
const ResponseMessages = require('../../../contract/responseMessages');
const ErrorHandler = require('../../../utils/errorHandler');

// @desc        insert category
// @route       POST /api/category
// @access      Private
exports.create = asyncHandler(async (req, res, next) => {
  const { title } = req.body;
  if (!title) {
    return next(new ErrorHandler(res, ResponseMessages.FIELD_REQUIRED, 400));
  }
  await client.query(
    `
    INSERT INTO public.category(title)
    VALUES ($1);
    `,
    [title],
    (err, result) => {
      if (!err) {
        if (result) {
          res.status(200).json(result.rows);
        } else {
          res.status(500).json('something went wrong');
        }
      } else {
        console.log(err);
        res.status(500).json(err);
      }
    }
  );
});
