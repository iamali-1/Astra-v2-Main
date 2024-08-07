const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const _categorySchema = mongoose.model("Category", categorySchema);

module.exports = _categorySchema;
