const express = require("express");
const userController = require("../controller/user");

const router = express.Router();

// // Get all users
router.get("/", userController.getUser);

router.post("/newUser", userController.newUser);

module.exports = router;
