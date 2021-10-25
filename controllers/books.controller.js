const { BookModel } = require("../database/models/book.model");

const getBooks = async (req, res) => {
  try {
    const books = await BookModel.find({});
    res.status(200).json(books);
  } catch (error) {
    res.status(404).json({ message: "An Error occurred!", error });
  }
};

const postBook = async (req, res) => {
  const data = req.body;
  const newBook = new BookModel(data);
  try {
    const createdBook = await newBook.save();
    res.status(201).json(createdBook);
  } catch (error) {
    res.status(404).json({ message: "An Error occurred!", error });
  }
};

const putUpdateBook = async (req, res) => {
  const { bookId, title: newTitle } = req.body;
  try {
    const bookToUpdate = await BookModel.findById(bookId);

    if (!bookToUpdate) {
      return res
        .status(404)
        .json({ message: "Could not update a book with the given id" });
    }

    bookToUpdate.title = newTitle;
    await bookToUpdate.save();

    res
      .status(203)
      .json({ message: `The book was updated with the title: ${newTitle}` });
  } catch (error) {
    res.status(404).json({ message: "An Error occurred!", error });
  }
};

const deleteBook = async (req, res) => {
  const { bookId } = req.body;
  try {
    const result = await BookModel.findByIdAndRemove(bookId);
    if (!result) {
      return res
        .status(404)
        .json({ message: "Could Not delete the book with the given id!" });
    }
    res.status(203).json({ message: "The book was deleted!" });
  } catch (error) {
    res.status(404).json({ message: "An Error occurred!", error });
  }
};

module.exports = {
  getBooks,
  postBook,
  putUpdateBook,
  deleteBook,
};
