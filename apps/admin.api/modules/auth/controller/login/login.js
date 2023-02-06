const asyncHandler = require('../../../../middlewares/async');
const bcrypt = require('bcryptjs');
const client = require('../../../../config/db.js');
const ResponseMessages = require('../../../../contract/responseMessages');
const LoginStatus = require('../../../../contract/loginStatus');
const ErrorHandler = require('../../../../utils/errorHandler');
const jwt = require('jsonwebtoken');

// @desc        login in user
// @route       POST /api/auth/login
// @access      Public
exports.login = asyncHandler(async (req, res, next) => {
  console.log('asd');
  const { email, password: enterPassword } = req.body;

  if (!email) {
    return next(new ErrorHandler(res, ResponseMessages.EMAIL_REQUIRED, 400));
  }

  if (!enterPassword) {
    return next(new ErrorHandler(res, ResponseMessages.PASSWORD_REQUIRED, 400));
  }

  await client.query(
    `select id , password from public.user where "email" = $1 and "roleId" = 1;`,
    [email],
    (err, result) => {
      console.log(result);
      if(result)
      if (result.rowCount !== 0) {
        if (!err) {
          const { id, password } = result.rows[0];
          bcryptPass(enterPassword, password).then((result) => {
            console.log(result);
            if (result) {
              genToken(id).then((token) => {
                res.status(200).json({
                  token: token,
                  loginStatus: LoginStatus.Success,
                });
                updateLoginDate(id);
              });
            } else {
              res
                .status(200)
                .json({ loginStatus: LoginStatus.InvalidCredential });
            }
          });
        }
      }else{
        res
        .status(200)
        .json({ loginStatus: LoginStatus.InvalidCredential, message : ResponseMessages.USERAME_NOT_AVAILABLE});
      }
    }
  );
});

updateLoginDate = async (id) => {
  await client.query(
    `UPDATE public."user" SET "lastLogin"=NOW() where "id" = $1 ;`,
    [id],
    (err, result) => {
      if (!err) {
        console.log(`update user id = ${id} lastLogin`);
      } else {
        console.error(err);
      }
    }
  );
};

bcryptPass = async (enterdPass, password) => {
  const result = await bcrypt.compare(enterdPass, password);
  return result;
};

encryptPass = async (password) => {
  const salt = await bcrypt.genSaltSync(10);
  const newPass = await bcrypt.hash(password, salt);
  return newPass;
};

genToken = async (id) => {
  return await jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};
