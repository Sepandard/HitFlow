const asyncHandler = require('../../../../admin.api/middlewares/async');
const client = require('../../../../admin.api/config/db.js');

// @desc        get all user
// @route       GET /api/user
// @access      Private
exports.search = asyncHandler(async (req, res, next) => {

  await client.query(
    `
    SELECT 
      prod."id"
      ,prod."categoryId"
      ,prod."name"
      ,prod.image
      ,prod.description
      ,prod.amount
	  ,cat.title as "categoryTitle"
    from public.product prod
	INNER JOIN public.category cat  on prod."categoryId" = cat."id"
    WHERE "isDeleted" = 0 AND prod."name" LIKE '%%'
    ORDER BY id ASC
  `,
    [req.query.productName],
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


