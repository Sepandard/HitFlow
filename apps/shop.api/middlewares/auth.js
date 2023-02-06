const asyncHandler = require('../middlewares/async');

exports.protect = asyncHandler(async (req, res, next) => {
  let token;
  console.log(req.headers.authorization);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else {
    return res.status(401).json();
  }

  if (!token) {
    return res.status(401).json();
  }
  next();
});


