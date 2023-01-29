const asyncHandler = require('../../../middlewares/async');
const client = require('../../../config/db.js');

// @desc        get all user
// @route       GET /api/user
// @access      Private
exports.getAll = asyncHandler(async (req, res, next) => {
  await client.query(
    `
  SELECT 
	    ord.id, 
	    ord."userId",
	    ord.code,
	    ord.status,
	    TO_CHAR(ord."creationTime"::DATE, 'dd-mm-yyyy HH:MI:SS') as "creationTime",
      TO_CHAR(ord."lastChange"::DATE, 'dd-mm-yyyy HH:MI:SS') as "lastChange",
	    usr."genderId" as "userGender",
	    usr."phoneNumber" as "userPhoneNumber",
	    usr.email as "userEmail",
	    usr."name" as "username"
	FROM public."order" ord
		INNER JOIN public."user" usr  on ord."userId" = usr."id"
    WHERE ord."isDeleted" = 0
    ORDER BY id ASC
  `,
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


exports.getCount = asyncHandler(async (req, res, next) => {
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
    WHERE ord."isDeleted" = 0
    ORDER BY id ASC
      
      `,
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