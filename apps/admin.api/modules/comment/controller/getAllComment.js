const asyncHandler = require('../../../middlewares/async');
const client = require('../../../config/db.js');

exports.getAll = asyncHandler(async (req, res, next) => {

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
		  ORDER BY id ASC
		  
		
    `,
    [],
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
