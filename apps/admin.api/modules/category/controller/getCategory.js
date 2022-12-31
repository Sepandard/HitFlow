const asyncHandler = require('../../../middlewares/async');
const client = require('../../../config/db.js');

// @desc        get all category
// @route       GET /api/category/
// @access      Private
exports.getAll = asyncHandler(async (req, res, next) => {
  await client.query(
    `
    SELECT 
      "id"
      ,"title"
    from public.category
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
// @route       GET /api/category/count
// @access      Private

exports.getCount = asyncHandler(async (req, res, next) => {
  await client.query(
    `
    SELECT 
    "id"
    ,"title"
  from public.category
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
