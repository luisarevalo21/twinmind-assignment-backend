const express = require("express");
const audioController = require("../controller/audio");

const router = express.Router();

// //new audio file
router.post("/new-audio", audioController.newAudio);
router.post("/new-summary", audioController.newSummary);

module.exports = router;
