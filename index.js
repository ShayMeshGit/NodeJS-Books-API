require("dotenv").config();
const http = require("http");
const { logger } = require("./util/logger");
const mongoose = require("mongoose");

const app = require("./app");

const PORT = process.env.SERVER_PORT || 4000;

const ATLAS_URL = process.env.ATLAS_URL;

function startServer() {
  const httpServer = http.createServer(app);
  mongoose.connect(ATLAS_URL, () => {
    httpServer.listen(PORT, () => {
      logger.info(`Server is up, url: http://localhost:${PORT}`);
    });
  });
}

process.on("exit", async (code) => {
  console.log("bye");
});

startServer();
