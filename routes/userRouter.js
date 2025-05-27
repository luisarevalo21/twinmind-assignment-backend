const express = require("express");
const userController = require("../controller/user");

const router = express.Router();

// Example controller functions (replace with your own)

// // Get all users
router.get("/", userController.getUser);

// // Get a single user by ID
// router.get("/:id", userController.getUserById);

// Create a new user
router.post("/newUser", userController.newUser);

// // Update a user by ID
// router.put("/:id", userController.updateUser);

// // Delete a user by ID
// router.delete("/:id", userController.deleteUser);

module.exports = router;
