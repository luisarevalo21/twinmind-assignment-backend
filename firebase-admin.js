// firebaseAdmin.js
const admin = require("firebase-admin");
const { cert } = require("firebase-admin/app");
const { initializeApp } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");
const serviceAccountKey = require("./serviceAccountKey.json");

const app = initializeApp({
  credential: cert(serviceAccountKey),
});

const db = admin.firestore();
const auth = getAuth(app);

module.exports = { auth, db, FieledValue: admin.firestore.FieldValue };
