import winston from "winston";
import path from "path";
import config from "../../config/config";

/**
 * Define servierity
 */
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

/**
 * if NODE_ENV=production: show only wraning and error
 * if NODE_ENV=test and development: show all
 */
const level = () => (config.NODE_ENV === "production" ? "http" : "debug");

/**
 * Define colours for different level
 */
const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
};

winston.addColors(colors);

/**
 * Customize logging format
 */
const format = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
);

/**
 * Defining logger transports
 */
const transports = [];
transports.push(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
      winston.format.colorize(),
      winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
    ),
  }),
);
if (config.NODE_ENV === "production") {
  transports.push(
    new winston.transports.File({
      filename: path.resolve(__dirname, "../../../logs/combined.log"),
    }),
  );
}

const logger = winston.createLogger({
  transports,
  level: level(),
  levels,
  format,
});

export default logger;
