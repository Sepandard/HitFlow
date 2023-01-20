const client = require("../../../config/db");
const asyncHandler = require("../../../middlewares/async");
const ResponseMessages = require("../../../contract/responseMessages");


exports.remove = asyncHandler(async (req, res, next) => {
    const { status } = req.body;
  
    //check REQUIRED fields
    if (status) {
      // return 400 (BAD REQUEST) STATUS
      return next(new ErrorHandler(res, ResponseMessages.FIELD_REQUIRED, 400));
    }
  
    if (!Number(req.params.id)) {
        return next(new ErrorHandler(res, ResponseMessages.INVALID_ID, 400));
    }
  
    await client.query(
      `UPDATE public.product SET
      status= $2
        WHERE "id" = $1`,
      [Number(req.params.id), status],
      (err, result) => {
        if (!err) {
          if (result) {
            res.status(200).json(result.rows);
          } else {
            res.status(500).json(ResponseMessages.UNKNOWN_ERROR);
          }
        } else {
          console.log(err);
          res.status(500).json(ResponseMessages.UNKNOWN_ERROR);
        }
      }
    );
  });
  