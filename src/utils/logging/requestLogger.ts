import morgan, { StreamOptions } from "morgan";
import logger from "./logger";

const stream: StreamOptions = {
  write: (message) => {
    logger.http(message);
  },
};

export default morgan("combined", { stream });
