const asyncHandler = require('../../../middlewares/async');
const client = require('../../../config/db.js');
const jwt = require('jsonwebtoken');
const ErrorHandler = require('../../../utils/errorHandler');
const { log } = require('console');

exports.getAll = asyncHandler(async (req, res, next) => {
  const { status } = req.query;
  if (!status) {
    // return 400 (BAD REQUEST) STATUS
    return next(
      new ErrorHandler(
        res,
        'Status is null',
        400
      )
    );
  }
  const token = req.headers.authorization.split(' ')[1];
  const userId = jwt.decode(token).id;
  await client.query(
    `
    SELECT orditem."id",
        orditem."orderId",
        TO_CHAR(orditem."creationTime"::DATE, 'dd-mm-yyyy HH:MI:SS') as "creationTime",
        orditem."productId",
        prd.name as "productName",
	    ord."userId",
        prd.cost as "productCost",
        SUM(prd.cost) as "total",
	    prd.image,
	    prd."off",
	    ord.status as "orderStatus"
        from public."orderItem" orditem
        INNER JOIN public."product" prd  on orditem."productId" = prd."id"
        LEFT JOIN public."order" ord  on orditem."orderId" = ord."id"
	    WHERE ord."userId" = $1 AND ord.status = $2
	    GROUP BY orditem."id",
	    orditem."orderId",
	    orditem."creationTime",
	    orditem."productId",
	    prd.name,
	    prd.cost,
	    ord."userId",
	    ord.status,
	    prd."categoryId",
	    prd.image,
	    prd."off"
    ORDER BY id ASC
    `,
    [userId, status],
    (err, result) => {
      if (!err) {
        if (result) {
          const data = result.rows.map((item) => {
            return {
              ...item,
              image: `http://localhost:5020/${item.image}`
            };
          });
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

exports.total = asyncHandler(async (req, res, next) => {
  const { status } = req.query;
  if (!status) {
    // return 400 (BAD REQUEST) STATUS
    return next(
      new ErrorHandler(
        res,
        'Status is null',
        400
      )
    );
  }
  const token = req.headers.authorization.split(' ')[1];
  const userId = jwt.decode(token).id;
  await client.query(
    ` SELECT
 
    SUM(prd.cost) as "total"
    from public."orderItem" orditem
    INNER JOIN public."product" prd  on orditem."productId" = prd."id"
    LEFT JOIN public."order" ord  on orditem."orderId" = ord."id"
		    WHERE ord."userId" = $1 AND ord.status = $2`,
    [userId, status],
    (err, result) => {
      console.log(result.rows);
      if (!err) {
        if (result) {
          res.status(200).json(result.rows[0].total);
        } else {
          res.status(500).json('something went wrong');
        }
      } else {
        res.status(500).json(err);
      }
    }
  );
});
