const client = require('../../../config/db.js');
const ResponseMessages = require('../../../contract/responseMessages');
const ErrorHandler = require('../../../utils/errorHandler');
const asyncHandler = require('../../../middlewares/async');


exports.getById = asyncHandler(async (req, res, next) => {
    if (!Number(req.params.id)) {
        return next(new ErrorHandler(res, ResponseMessages.INVALID_ID, 400));
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
	  ,cat.title as categoryTitle
        from public.product prod
	    INNER JOIN public.category cat  on prod."categoryId" = cat."id"
        WHERE "isDeleted" = 0 AND prod.id = $1
        ORDER BY id ASC
      
    `,
      [Number(req.params.id)],
      (err, result) => {
        if (!err) {
          if (result) {
            res.status(200).json(result.rows);
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
  