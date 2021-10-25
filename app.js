const express = require("express");
const app = express();
const cors = require("cors");

const bookRouter = require("./routes/books");

app.use(express.json());
app.use(cors());

app.use("/books", bookRouter);

app.use("/", (req, res) => {
  res.status(301).redirect("/books");
});

module.exports = app;
