const client = require('../../../config/db.js');
const ResponseMessages = require('../../../contract/responseMessages');
const ErrorHandler = require('../../../utils/errorHandler');
const asyncHandler = require('../../../middlewares/async');
const CommentStatus = require('../../../contract/commentStatus.js');


exports.confirmed = asyncHandler(async (req, res, next) => {
    if (!Number(req.params.id)) {
      return next(new ErrorHandler(res, ResponseMessages.INVALID_ID, 400));

    }
  
    await client.query(
      `UPDATE public.comment
      SET  "isConfirmed"=$1
      WHERE id = $2
      RETURNING *;`,
      [
        CommentStatus.Confirmed,
        Number(req.params.id)
      ],
      (err, result) => {
        if (!err) {
          if (result) {
            res.status(200).json(result.rows);
          } else {
            res.status(500).json(ResponseMessages.UNKNOW_ERROR);
          }
        } else {
          console.log(err);
          res.status(500).json(ResponseMessages.UNKNOW_ERROR);
        }
      }
    );
  });