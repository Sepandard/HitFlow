const asyncHandler = require('../../../middlewares/async');
const client = require('../../../config/db.js');
const ResponseMessages = require('../../../contract/responseMessages');
const UpdateStatus = require('../../../contract/updateStatus');
const ErrorHandler = require('../../../utils/errorHandler');
const bcrypt = require('bcryptjs');

exports.update = asyncHandler(async (req, res, next) => {
  const { name, email, genderId, roleId, statusId, phoneNumber, password } =
    req.body;

  const hashPass = await encryptPass(password);

  if (!name || !email || !genderId || !roleId || !statusId || !password) {
    return next(new ErrorHandler(res, ResponseMessages.FIELD_REQUIRED, 400));
  }

  if (!Number(req.params.id)) {
    return next(new ErrorHandler(res, ResponseMessages.INVALID_USER_ID, 400));
  }
  await client.query(
    `UPDATE public."user" SET
      "genderId" = $2,
      "name" = $3,
      "password" = $4,
      "roleId" = $5,
      "statusId"= $6,
      email = $7,
      "phoneNumber" = $8  
      WHERE "id" = $1`,
    [
      Number(req.params.id),
      genderId,
      name,
      hashPass,
      roleId,
      statusId,
      email,
      phoneNumber,
    ],
    (err, result) => {
      if (!err) { 
        if (result) {
          res.status(200).json(UpdateStatus.Success);
        } else {
          res.status(500).json('something went wrong');
        }
      } else {
        console.log(err);
        res.status(500).json('something went wrong');
      }
    }
  );
});

encryptPass = async (password) => {
    const salt = await bcrypt.genSaltSync(10);
    const newPass = await bcrypt.hash(password, salt);
    return newPass;
  };
