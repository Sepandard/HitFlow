const asyncHandler = require('../../../middlewares/async');
const client = require('../../../config/db.js');
const ResponseMessages = require('../../../contract/responseMessages');

exports.getById = asyncHandler(async (req, res, next) => {
  if (!Number(req.params.id)) {
    return next(
      new ErrorHandler(
        res,
        ResponseMessages.INVALID_USER_ID,
        400
      )
    );
  }
  await client.query(
    `
    SELECT com.id,
	com."userId",
	com."productId",
	com."isConfirmed",
	com."content",
  TO_CHAR(com."creationTime"::DATE, 'dd-mm-yyyy HH:MI:SS') as "creationTime",
	prd.name as "productName",
	usr."name" as "username"
	FROM public.comment com
	      INNER JOIN public."user" usr  on com."userId" = usr."id"
		  LEFT JOIN public.product prd  on com."userId" = prd."id"
          WHERE com.id = $1
		  ORDER BY id ASC
		  
		
    `,
    [Number(req.params.id)],
    (err, result) => {
      if (!err) {
        if (result) {
          const data = result.rows;
          res.status(200).json(data[0]);
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
