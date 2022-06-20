import { Application } from "express";

const routes = (app: Application) => {
  /**
   * routes go here
   */
  app.use("/test", (req, res) => {
    res.send("hi from serve");
  });
};

export default routes;
