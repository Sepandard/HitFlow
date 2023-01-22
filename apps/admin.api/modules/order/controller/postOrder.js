const asyncHandler = require('../../../middlewares/async');
const client = require('../../../config/db.js');
const ResponseMessages = require('../../../contract/responseMessages');
const { codeGenerator } = require('../../../utils/codeGenerator');
const OrderStatus = require('../../../contract/orderStatus');
const ErrorHandler = require('../../../utils/errorHandler');

exports.create = asyncHandler(async (req, res, next) => {
  const { userId, productId } = req.body;

  //check REQUIRED fields
  if (!userId || !productId) {
    // return 400 (BAD REQUEST) STATUS
    return next(new ErrorHandler(res, ResponseMessages.FIELD_REQUIRED, 400));
  }

  await client.query(
    ` 
    SELECT id, "userId", code, status, "creationTime", "lastChange", "isDeleted"
    FROM public."order" WHERE "userId" = $1 AND status = 1;
        
    `,
    [userId],
    (err, result) => {
      if (!err) {
        console.log(result.rowCount);
        if (result.rowCount === 0) {
          client.query(
            `
                  INSERT INTO public."order"(
                       "userId", code, status, "creationTime", "lastChange")
                      VALUES ( $1, $2, $3, NOW(), NOW())
                      RETURNING *;
                     
            `,
            [userId, codeGenerator(5), OrderStatus.Cart],
            (err, result) => {
              // return response
              if (!err) {
                console.log(result.rows[0].id);
                const orderId = result.rows[0].id;
                client.query(
                  `
                  INSERT INTO public."orderItem"(
                     "orderId", "productId", "creationTime")
                    VALUES ($1, $2, NOW());
                           
                  `,
                  [orderId, productId],
                  (err, result) => {
                    if (!err) {
                      res
                        .status(200)
                        .json(ResponseMessages.POST_PRODUCT_SUCCESS_CART);
                    } else {
                      res.status(500).json(ResponseMessages.UNKNOW_ERROR);
                    }
                  }
                );
              } else {
                res.status(500).json(ResponseMessages.UNKNOW_ERROR);
                console.log(err);
              }
            }
          );
        } else {
          console.log(result.rows[0]);
          const orderId = result.rows[0].id;

          client.query(
            `
            INSERT INTO public."orderItem"(
               "orderId", "productId", "creationTime")
              VALUES ($1, $2, NOW());
                     
            `,
            [orderId, productId],
            (err, result) => {
              if (!err) {
                res
                  .status(200)
                  .json(ResponseMessages.POST_PRODUCT_SUCCESS_CART);
              } else {
                res.status(500).json(ResponseMessages.UNKNOW_ERROR);
              }
            }
          );
        }
      }
    }
  );
});
