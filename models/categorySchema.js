const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: String,
  subCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subCategoryTbl",
  },
});

const categoryModel = mongoose.model("categoryTbl", categorySchema);

module.exports = categoryModel;
