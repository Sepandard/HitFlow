const asyncHandler = require('../../../middlewares/async');
const client = require('../../../config/db.js');

// @desc        get all user
// @route       GET /api/user
// @access      Private
exports.getAll = asyncHandler(async (req, res, next) => {
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
    WHERE "isDeleted" = 0
    ORDER BY id ASC
  `,
    [],
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

// @desc        get all user row count
// @route       GET /api/user
// @access      Private

exports.getCount = asyncHandler(async (req, res, next) => {
  await client.query(
    `
    SELECT 
      "id"
      ,"categoryId"
      ,"name"
      ,image
      ,description
      ,amount
    from public.product
    WHERE "isDeleted" = 0
    ORDER BY id ASC
    
    `,
    [],
    (err, result) => {
      if (!err) {
        if (result) {
          res.status(200).json(result.rowCount);
        } else {
          res.status(500).json('something went wrong');
        }
      } else {
        res.status(500).json(err);
      }
    }
  );
});
