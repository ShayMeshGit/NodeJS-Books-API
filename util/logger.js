const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf, colorize, label } = format;

const customForamt = printf(({ level, label, timestamp, message }) => {
  return `${label} (${timestamp})[${level}]:  ${message}`;
});

const logger = createLogger({
  format: combine(
    timestamp({
      format: "DD/MM/YY - HH:MM:SS",
    }),
    colorize({ all: true }),
    label({ label: "[LOGGER]-" }),
    customForamt
  ),
  transports: [new transports.Console()],
});

module.exports = { logger };
