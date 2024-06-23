import { Router } from "express";
import IpController from "./ip.controller";
import { validateIpAddress } from "./validators/ip-address.validator";

export const ipRouter: Router = (() => {
  const router = Router();

  router.get("/:ip/geo", validateIpAddress, IpController.getGeoInformationByIp);

  return router;
})();
