const asyncHandler = require('../../../middlewares/async');
const client = require('../../../config/db.js');
const ResponseMessages = require('../../../contract/responseMessages');
const UpdateStatus = require('../../../contract/updateStatus');
const ErrorHandler = require('../../../utils/errorHandler');

exports.update = asyncHandler(async (req, res, next) => {
  const { title } = req.body;


  if (!title) {
    return next(new ErrorHandler(res, ResponseMessages.FIELD_REQUIRED, 400));
  }

  if (!Number(req.params.id)) {
    return next(new ErrorHandler(res, ResponseMessages.INVALID_USER_ID, 400));
  }
  await client.query(
    `UPDATE public.category SET
      title = $2
      WHERE "id" = $1`,
    [Number(req.params.id), title],
    (err, result) => {
      if (!err) {
        if (result) {
            console.log(result);
          res.status(200).json(UpdateStatus.Success);
        } else {
          res.status(500).json('something went wrong');
        }
      } else {
        console.log(err);
        res.status(500).json('something went wrong');
      }
    }
  );
});
