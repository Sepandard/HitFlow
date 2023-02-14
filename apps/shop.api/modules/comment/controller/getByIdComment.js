const asyncHandler = require('../../../middlewares/async');
const client = require('../../../config/db.js');
const ResponseMessages = require('../../../contract/responseMessages');

exports.getById = asyncHandler(async (req, res, next) => {
  if (!Number(req.query.productId)) {
    return next(
      new ErrorHandler(
        res,
        ResponseMessages.INVALID_ID,
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
	      com."creationTime",
	      usr."name" as "username"
	      FROM public.comment com
	      INNER JOIN public."user" usr  on com."userId" = usr."id"
		  LEFT JOIN public.product prd  on com."userId" = prd."id"
		  WHERE com."productId" = $1 AND com."isConfirmed" = 2
		  ORDER BY id ASC
		  
		
    `,
    [Number(req.query.productId)],
    (err, result) => {
      if (!err) {
        if (result) {
          const data = result.rows;
          res.status(200).json(data);
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
