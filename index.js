require("dotenv").config();
const http = require("http");
const process = require("process");
const { logger } = require("./util/logger");
const mongoose = require("mongoose");

const app = require("./app");

const PORT = process.env.SERVER_PORT || 4000;

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;

const httpServer = http.createServer(app);

async function startServer() {
  await mongoose.connect(
    `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/BooksDirectory?authSource=admin`
  );
  await httpServer.listen(PORT);
  logger.info(`Server is up, url: http://localhost:${PORT}`);
}

process.on("exit", async (code) => {
  console.log("bye");
});

process.on("SIGINT", () => {
  console.log("\nprocess was interrupted!");
  process.exit(0);
});

startServer();
