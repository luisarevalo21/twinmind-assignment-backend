const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const multer = require("multer");
const PORT = process.env.PORT || 3000;
const userRouter = require("./routes/userRouter");
const audioRouter = require("./routes/audioRouter");
const memoryRouter = require("./routes/memoryRouter");
const path = require("path");

const VerifyToken = require("./verify-token");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//multer config
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});
const upload = multer({ storage: storage });
// app.use(VerifyToken);

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

// app.post("/api/user/newUser", (req, res) => {
//   console.log("req.body", req.body);
//   return res.status(200).json({
//     message: "User already exists",
//   }); // User already exists
// });
app.use("/api/user", userRouter);

app.use("/api/memory", memoryRouter);
app.use("/api/memories", upload.single("audio"), audioRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// Export the app for testing
module.exports = app;
// Export the server for testing
