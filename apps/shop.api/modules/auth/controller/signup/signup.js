const asyncHandler = require('../../../../middlewares/async');
const bcrypt = require('bcryptjs');
const client = require('../../../../config/db');
const ResponseMessages = require('../../../../contract/signupStatus')
const RoleUser = require('../../../../contract/roleUser')
const StatusUser  = require('../../../../contract/statusUser');
const SignupStatus = require('../../../../contract/signupStatus');

exports.signup = asyncHandler(async (req, res, next) => {
  const { email, phoneNumber, password, name, genderId } = req.body;

  //check REQUIRED fields
  if (!name || !email || !genderId || !password) {
    // return 400 (BAD REQUEST) STATUS
    return res.status(400).json(ResponseMessages.FIELD_REQUIRED);
  }
  //hashing password with salt
  const hashPass = await encryptPass(password);

  //execute insert query....
  await client.query(
    `
      INSERT INTO public.user(
          email,
          "statusId",
          "roleId",
          "phoneNumber",
          "password",
          "name",
          "lastLogin",
          "genderId"
          ) VALUES (
          $1,
          $2,
          $3,
          $4,
          $5,
          $6,
          NOW(),
          $7
      ); `,
    [
      email,
      StatusUser.ACTIVE,
      RoleUser.USER,
      phoneNumber,
      hashPass,
      name,
      genderId,
    ],
    (err, result) => {
      // return response
      if (!err) {
        res.status(201).json({SignupStatus:SignupStatus.Success});
        console.log(ResponseMessages.SIGNUP_SUCCESS);
      } else {
        res.status(201).json({SignupStatus:SignupStatus.UserExist});
   
      }
    }
  );
});

encryptPass = async (password) => {
  const salt = await bcrypt.genSaltSync(10);
  const newPass = await bcrypt.hash(password, salt);
  return newPass;
};
