const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

const BookModel = mongoose.model("Book", BookSchema);

module.exports = {
  BookModel,
};