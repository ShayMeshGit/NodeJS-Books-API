const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pageNumber: {
    type: Number,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
});

const BookModel = mongoose.model("Book", BookSchema);

module.exports = {
  BookModel,
};
