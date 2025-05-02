const mongoose = require("mongoose");

const fileUploadSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  fileName: String,
  uploadedAt: { type: Date, default: Date.now },
  data: Array,
});

module.exports = mongoose.model("FileUpload", fileUploadSchema);
