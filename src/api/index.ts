import { Router } from "express";
import { ipRouter } from "./ip/ip.router";

export const apiRouter: Router = (() => {
  const router = Router();

  router.use("/ip", ipRouter);

  return router;
})();
