const asyncHandler = require('../../../middlewares/async');
const bcrypt = require('bcryptjs');
const client = require('../../../config/db.js');
const ResponseMessages = require('../../../contract/responseMessages');
const ErrorHandler = require('../../../utils/errorHandler');

// @desc        get user by id
// @route       GET /api/user:id
// @access      Private
exports.getById = asyncHandler(async (req, res, next) => {
  if (!Number(req.params.id)) {
    return next(new ErrorHandler(res, ResponseMessages.INVALID_USER_ID, 400));
  }
  await client.query(
    `
    SELECT 
	ord.id, 
	ord."userId" as "userId",
	ord.code,
	ord.status,
	ord."creationTime",
	ord."lastChange",
	usr."genderId" as "userGender",
	usr."phoneNumber" as "userPhoneNumber",
	usr.email as "userEmail",
	usr."name" as "username"
	FROM public."order" ord
		INNER JOIN public."user" usr  on ord."userId" = usr."id"
    WHERE ord."isDeleted" = 0 AND "id" = $1
    ORDER BY id ASC
    `,
    [Number(req.params.id)],
    (err, result) => {
      if (!err) {
        if (result) {
          res.status(200).json(result.rows[0]);
        } else {
          res.status(500).json('something went wrong');
        }
      } else {
        res.status(500).json(err);
      }
    }
  );
});


