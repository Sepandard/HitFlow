const authController = require('../controller/index');
const express = require("express");
const router = express.Router();;

router.post("/login", authController.login);
router.post("/signup", authController.signup);

module.exports = router;
