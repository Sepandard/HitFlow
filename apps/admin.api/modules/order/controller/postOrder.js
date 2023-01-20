const asyncHandler = require('../../../middlewares/async');
const client = require('../../../config/db.js');
const ResponseMessages = require('../../../contract/responseMessages');

exports.create = asyncHandler(async (req, res, next) => {
  const { userId, code, status, creationTime, lastChange } = req.body;

  //check REQUIRED fields
  if (!userId || !code || !status || !creationTime || !lastChange) {
    // return 400 (BAD REQUEST) STATUS
    return next(new ErrorHandler(res, ResponseMessages.FIELD_REQUIRED, 400));
  }

  //execute insert query....
  await client.query(
    `
    INSERT INTO public."order"(
         "userId", code, status, "creationTime", "lastChange")
        VALUES ( $1, $2, $3, $4, $5);
        
    `,
    [userId, code, status, Date.now(), Date.now()],
    (err, result) => {
      // return response
      if (!err) {
        res.status(200).json(result.fields);
        console.log(ResponseMessages.CREATE_SUCCESS);
      } else {
        res.status(500).json(ResponseMessages.UNKNOW_ERROR);
        console.log(err);
      }
    }
  );
});
