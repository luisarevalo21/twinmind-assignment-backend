const express = require("express");
const router = express.Router();
const VerifyToken = require("../verify-token");
const { db } = require("../firebase-admin");

const getUser = async (req, res) => {
  const { userId } = req.body;
  try {
    // Check if user already exists
    const user = await db.collection("users").doc(userId).get();
    if (!user.exists) {
      return res.status(400).json({ message: "User does not exist" });
    }
    res.status(200).json(user.data());
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const newUser = async (req, res) => {
  const { name, email, userId } = req.body;
  try {
    const userRef = db.collection("users");
    // Check if user already exists
    const user = await userRef.doc(userId).get();
    if (user.exists) {
      return res.status(200).json(user.data());
    }

    // Create a new user in Firebase Authentication
    await userRef.doc(userId).set({
      name: name,
      email: email,
      userId: userId,
    });

    const savedDoc = await userRef.doc(userId).get();

    if (savedDoc.exists) {
      res.status(200).json(savedDoc.data());
    } else {
      return res.status(400).json({ message: "User not created" });
    }

    // Create a new user
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getUser,
  newUser,
};
