const asyncHandler = require('../../../middlewares/async');
const client = require('../../../config/db.js');
const ResponseMessages = require('../../../contract/responseMessages');
const CommentStatus = require('../../../contract/commentStatus');
const jwt = require('jsonwebtoken');

exports.create = asyncHandler(async (req, res, next) => {
  const { productId, content } = req.body;
  const token = req.headers.authorization.split(' ')[1];
  console.log(jwt.decode(token));
  const userId = jwt.decode(token).id;

  //check REQUIRED fields
  if (!productId || !content) {
    // return 400 (BAD REQUEST) STATUS
    return next(
      new ErrorHandler(
        res,
        ResponseMessages.FIELD_REQUIRED,
        400
      )
    );
  }

  //Field must number
  if (!Number(productId)) {
    return res
      .status(400)
      .json(ResponseMessages.INVALID_DATA);
  }

  //execute insert query....
  await client.query(
    `
    INSERT INTO public.comment(
        "userId", "productId", "isConfirmed", "creationTime",content)
        VALUES ($1, $2, $3, NOW(),$4)
        RETURNING *; `,
    [userId, productId, CommentStatus.Pending, content],
    (err, result) => {
      console.log(result.fields);
      if (!err) {
        res.status(200).json(result.fields);
        console.log(ResponseMessages.CREATE_SUCCESS);
      } else {
        res.status(500).json(ResponseMessages.UNKNOW_ERROR);
        console.log(err);
      }
    }
  );
});
