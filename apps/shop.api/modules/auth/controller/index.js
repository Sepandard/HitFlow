const { login } = require("../controller/login/login.js");
const { signup } = require("../controller/signup/signup");

const authController = {};

authController.login = login;
authController.signup = signup;


module.exports = authController;