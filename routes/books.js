const express = require("express");
const booksController = require("../controllers/books.controller");

const booksRouter = express.Router();

// The path is /books
booksRouter.get("/", booksController.getBooks);
booksRouter.post("/", booksController.postBook);
booksRouter.put("/:bookId", booksController.putUpdateBook);
booksRouter.delete("/:bookId", booksController.deleteBook);

module.exports = booksRouter;
