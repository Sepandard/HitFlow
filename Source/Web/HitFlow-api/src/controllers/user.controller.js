const asyncHandler = require("../middlewares/async");
const Logger = require("../utils/logger");
const client = require("../config/db");

// @desc        Get all user
// @route       GET /api/user
// @access      Public
exports.getUser = asyncHandler(async (req, res, next) => {
  await client.query("select * from user", (err, result) => {
    if (!err) {
      console.log(result.rowCount);
      res.status(200).json({ success: true });
      new Logger("Select all Users ... !");
    } else {
      new Logger("Error while selecting all Users ... !");
    }
  });
});
