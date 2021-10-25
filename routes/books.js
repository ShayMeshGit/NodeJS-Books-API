const express = require("express");
const booksController = require("../controllers/books.controller");

const booksRouter = express.Router();

// The path is /books
booksRouter
  .route("/")
  .get(booksController.getBooks)
  .post(booksController.postBook)
  .put(booksController.putUpdateBook)
  .delete(booksController.deleteBook);

module.exports = booksRouter;
