const client = require('../../../config/db.js');
const ResponseMessages = require('../../../contract/responseMessages');
const ErrorHandler = require('../../../utils/errorHandler');
const asyncHandler = require('../../../middlewares/async');


exports.update = asyncHandler(async (req, res, next) => {
    const { categoryId, name, image, cost, description, amount,off } = req.body;
  
    //check REQUIRED fields
    if (!name || !categoryId || !cost || !description || !amount) {
      // return 400 (BAD REQUEST) STATUS
      return next(new ErrorHandler(res, ResponseMessages.FIELD_REQUIRED, 400));

    }
  
    if (!Number(req.params.id)) {
      return next(new ErrorHandler(res, ResponseMessages.INVALID_ID, 400));

    }
  
    await client.query(
      `UPDATE public.product SET
         "categoryId" = $2,
         "name" = $3,
         image = $4,
         cost = $5,
         description = $6,
         amount = $7
         off = $7
        WHERE "id" = $1`,
      [
        Number(req.params.id),
        categoryId,
        name,
        "/public",
        cost,
        description,
        amount,
        off,
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