const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const router = express.Router();

router.route("/").get(userController.getAllUsers);
router.route("/signup").post(authController.signUp);
module.exports = router;
