const asyncHandler = require('../../../middlewares/async');
const client = require('../../../config/db.js');
const ResponseMessages = require('../../../contract/responseMessages');

exports.create = asyncHandler(async (req, res, next) => {
  const { categoryId, name, image, cost, description, amount } = req.body;

  //check REQUIRED fields
  if (!name || !categoryId || !cost || !description || !amount) {
    // return 400 (BAD REQUEST) STATUS
    return next(new ErrorHandler(res, ResponseMessages.FIELD_REQUIRED, 400));

  }

  //Field must number
  if (!Number(cost) || !Number(amount)) {
    return res.status(400).json(ResponseMessages.INVALID_DATA);
  }

  //execute insert query....
  await client.query(
    `
      INSERT INTO public.product(
        "categoryId",
        "name",
        image,
        cost,
        description,
        amount
      ) VALUES (
          $1,
          $2,
          $6,
          $3,
          $4,
          $5
      ); `,
    [categoryId, name, cost, description, amount, "/public"],
    (err, result) => {
      // return response
      if (!err) {
        res.status(200).json(result.fields);
        console.log(ResponseMessages.POST_PRODUCT_SUCCESS);
      } else {
        res.status(500).json(ResponseMessages.UNKNOW_ERROR);
        console.log(err);
      }
    }
  );
});

