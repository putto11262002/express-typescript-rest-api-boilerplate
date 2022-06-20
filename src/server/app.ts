import express from "express";
import middlewares from "./middlewares";
import routes from "./routes";

const app = express();
/**
 * Apply middlewares
 */
middlewares(app);

/**
 * Apply routes
 */
routes(app);

export default app;
