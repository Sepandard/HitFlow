const asyncHandler = require('../../../middlewares/async');
const bcrypt = require('bcryptjs');
const client = require('../../../config/db.js');
const ResponseMessages = require('../../../contract/responseMessages');
const ErrorHandler = require('../../../utils/errorHandler');

exports.getAll = asyncHandler(async (req, res, next) => {
  const { orderId } = req.query;
  await client.query(
    `SELECT orditem."id",
    orditem."orderId",
    TO_CHAR(orditem."creationTime"::DATE, 'dd-mm-yyyy HH:MI:SS') as "creationTime",
    orditem."productId",
    prd.name as "productName",
    prd.cost as "productCost",
    SUM(prd.cost) as "total"
    from public."orderItem" orditem
    INNER JOIN public."product" prd  on orditem."productId" = prd."id"
    WHERE orditem."orderId" = $1
	GROUP BY orditem."id",
	orditem."orderId",
	orditem."creationTime",
	orditem."productId",
	prd.name,
	prd.cost
    ORDER BY id ASC
    `,
    [orderId],
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

exports.getCount = asyncHandler(async (req, res, next) => {
  const { orderId } = req.query;

  await client.query(
    `SELECT "id",
    "orderId",
    TO_CHAR("creationTime"::DATE, 'dd-mm-yyyy HH:MI:SS') as "creationTime",
    "productId"
    from public."orderItem" 
    WHERE "orderId" = $1
    ORDER BY id ASC`,
    [orderId],
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
