const { login } = require("../controller/login/login.js");

const authController = {};

authController.login = login;


module.exports = authController;