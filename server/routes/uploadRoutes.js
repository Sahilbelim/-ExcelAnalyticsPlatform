
const express = require("express");
const multer = require("multer");
const parseExcel = require("../utils/parseExcel");
const auth = require("../middleware/authMiddleware");
const FileUpload = require("../models/FileUpload");
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });


router.post("/", auth, upload.single("file"), async (req, res) => {
  try {
    const allowedExtensions = ["csv", "xlsx", "xls"];
    const extension = req.file.originalname.split(".").pop().toLowerCase();

    if (!allowedExtensions.includes(extension)) {
      return res
        .status(400)
        .json({ error: "Only .csv, .xlsx, and .xls files are supported" });
    }

    const data = parseExcel(req.file.buffer, req.file.originalname);

    const newUpload = await FileUpload.create({
      user: req.user._id,
      fileName: req.file.originalname,
      data,
    });

    res
      .status(201)
      .json({ message: "File uploaded & saved!", upload: newUpload });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Invalid file format or parsing failed" });
  }
});

router.get("/history", auth, async (req, res) => {
  try {
    const uploads = await FileUpload.find({ user: req.user._id }).sort({
      uploadedAt: -1,
    });
    res.json({ uploads });
  } catch (err) {
    res.status(500).json({ error: "Could not fetch history" });
  }
});


module.exports = router;
