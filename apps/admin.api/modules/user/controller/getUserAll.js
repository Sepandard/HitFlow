const asyncHandler = require('../../../middlewares/async');
const bcrypt = require('bcryptjs');
const client = require('../../../config/db.js');
const ResponseMessages = require('../../../contract/responseMessages');
const ErrorHandler = require('../../../utils/errorHandler');

// @desc        get all user
// @route       GET /api/user
// @access      Private
exports.getAll = asyncHandler(async (req, res, next) => {
  await client.query(
    `SELECT "id","genderId",
    email,
    "name",
    "phoneNumber",
    "roleId",
    TO_CHAR("lastLogin"::DATE, 'dd-mm-yyyy HH:MI:SS') as "lastLogin",
    "statusId"
    from public."user" 
    ORDER BY id ASC`,
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
// @route       GET /api/user
// @access      Private

exports.getCount = asyncHandler(async (req, res, next) => {
  await client.query(
    `SELECT "genderId",
    email,
    "name",
    "phoneNumber",
    "roleId",
    "lastLogin",
    "statusId"
    from public."user" 
    ORDER BY id ASC`,
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
