const client = require("../../../config/db");
const asyncHandler = require("../../../middlewares/async");
const ResponseMessages = require("../../../contract/responseMessages");


exports.update = asyncHandler(async (req, res, next) => {
    const { status } = req.body;
  
    //check REQUIRED fields
    if (!status) {
      // return 400 (BAD REQUEST) STATUS
      return next(new ErrorHandler(res, ResponseMessages.FIELD_REQUIRED, 400));
    }
  
    if (!Number(req.params.id)) {
        return next(new ErrorHandler(res, ResponseMessages.INVALID_ID, 400));
    }
  
    await client.query(
      `UPDATE public."order" SET
         status = $2,
         "lastChange" = NOW()
        WHERE "id" = $1
        RETURNING 
        id, 
        "userId",
        code,
        status,
        TO_CHAR("creationTime"::DATE, 'dd-mm-yyyy HH:MI:SS') as "creationTime",
        TO_CHAR("lastChange"::DATE, 'dd-mm-yyyy HH:MI:SS') as "lastChange"`,
      [Number(req.params.id), status],
      (err, result) => {
        console.log(err);
        console.log(result);

        if (!err) {
            res.status(200).json(result.rows[0]);
          
        } else {
          console.log(err);
          res.status(500).json(ResponseMessages.UNKNOWN_ERROR);
        }
      }
    );
  });
  