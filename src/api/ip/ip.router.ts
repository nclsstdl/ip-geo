import { Router } from "express";
import IpController from "./ip.controller";
import { validateIpAddress } from "./validators/ip-geo-information.validator";

export const ipRouter: Router = (() => {
  const router = Router();

  router.get("/:ip/geo", validateIpAddress, IpController.getGeoInformationByIp);

  return router;
})();
