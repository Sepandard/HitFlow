const authController = require('../controller/index');
const express = require("express");
const router = express.Router();;

router.post("/login", authController.login);

module.exports = router;
