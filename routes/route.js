const express = require("express");
const router = express.Router();


const dataValidationMiddleware = require("../middleware/dataValidationMiddleware");
const {User} = require("../controller/User");




router.post("/signup",dataValidationMiddleware, User);

module.exports = router; 