import http from "http";
import { createTerminus } from "@godaddy/terminus";
import config from "../config/config";
import app from "./app";
import logger from "../utils/logging/logger";

/**
 * Clear up resources when server shutting down
 */
function onSignal() {
  logger.error("server shutting down gracefully");
  return Promise.all([]);
}

/**
 * check recourse status
 * this is called when the /healthcheck route is hit
 */
async function onHealthCheck() {
  return Promise.all([]);
}

const server = http.createServer(app);

createTerminus(server, {
  signal: "SIGINT",
  healthChecks: { "/healthcheck": onHealthCheck },
  onSignal,
});

server.on("listening", () => {
  logger.info(`server running on port ${config.PORT}`);
});

export default server;
