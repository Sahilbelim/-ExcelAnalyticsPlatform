const express = require("express");
const User = require("../models/User");
const FileUpload = require("../models/FileUpload");
const auth = require("../middleware/authMiddleware");
const isAdmin = require("../middleware/adminMiddleware");
const router = express.Router();

// Get all users
router.get("/users", auth, isAdmin, async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

// Get all uploads
router.get("/uploads", auth, isAdmin, async (req, res) => {
  const uploads = await FileUpload.find().populate("user", "email");
  res.json(uploads);
});

module.exports = router;
