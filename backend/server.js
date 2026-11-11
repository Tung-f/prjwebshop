require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API kiểm tra server
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Fashion Store API is running!",
    timestamp: new Date(),
  });
});

// Port
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Fashion Store Backend is running!");
});

// Khởi chạy server
app.listen(PORT, () => {
  console.log(`Fashion Store server running at http://localhost:${PORT}`);
});
