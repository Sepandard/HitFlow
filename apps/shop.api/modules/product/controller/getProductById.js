const asyncHandler = require('../../../middlewares/async');
const client = require('../../../config/db.js');
const ResponseMessages = require('../../../contract/responseMessages');

exports.getById = asyncHandler(async (req, res, next) => {
  if (!Number(req.params.id)) {
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
      SELECT 
      prod."id"
      ,prod."categoryId"
      ,prod."name"
      ,prod.image
      ,prod.description
      ,prod.amount
      ,prod.cost  
	  ,cat.title as categoryTitle
        from public.product prod
	    INNER JOIN public.category cat  on prod."categoryId" = cat."id"
	    INNER JOIN public.comment com  on prod."categoryId" = cat."id"
        WHERE "isDeleted" = 0 AND prod."id" = $1
        ORDER BY id ASC
    `,
    [Number(req.params.id)],
    (err, result) => {
      if (!err) {
        if (result) {
          console.log(result.rows);
          const data = result.rows.map((item) => {
            return {
              ...item,
              image: `http://localhost:5020/${item.image}`
            };
          });
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
