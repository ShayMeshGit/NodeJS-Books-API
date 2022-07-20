const express = require("express");
const app = express();
const cors = require("cors");

const bookRouter = require("./routes/books");
const { logger } = require("./util/logger");

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.path}`);
  next();
});

app.use("/books", bookRouter);

app.use("/", (req, res) => {
  res.status(301).redirect("/books");
});

module.exports = app;
