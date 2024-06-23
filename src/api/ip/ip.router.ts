import { Router } from "express";
import IpController from "./ip.controller";

export const ipRouter: Router = (() => {
  const router = Router();

  router.get("/:ip/geo", IpController.getGeoInformationByIp);

  return router;
})();
