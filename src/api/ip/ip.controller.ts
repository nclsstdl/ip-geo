import type { Request, Response } from "express";
import { GeoInformationService } from "./services/geo-information.service";
import { HttpStatusCode } from "axios";
import { IpApiService } from "./providers/ip-api/services/ip-api.service";

class IpController {
  private geoInformationService: GeoInformationService;

  constructor() {
    this.geoInformationService = new GeoInformationService(new IpApiService());
  }

  public getGeoInformationByIp = async (req: Request, res: Response): Promise<void> => {
    try {
      const geoInformation = await this.geoInformationService.getGeoInformationByIp(req.params.ip);

      res.send(geoInformation);
    } catch (error) {
      res.status(HttpStatusCode.BadRequest).json(error);
    }
  };
}

export default new IpController();
