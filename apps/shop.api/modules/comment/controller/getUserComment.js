const asyncHandler = require('../../../middlewares/async');
const client = require('../../../config/db.js');
const ResponseMessages = require('../../../contract/responseMessages');
const jwt = require('jsonwebtoken');

exports.getCommentByUser = asyncHandler(async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const userId = jwt.decode(token).id;
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
		  WHERE usr."id" = $1
		  ORDER BY id ASC
    `,
    [Number(userId)],
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
