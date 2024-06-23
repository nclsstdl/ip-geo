import type { Request, Response } from "express";
import { GeoInformationService } from "../services/geo-information.service";
import { HttpStatusCode } from "axios";

export class GeoInformationController {
  constructor(private readonly geoInformationService: GeoInformationService) {}

  public async getGeoInformationByIp(req: Request, res: Response): Promise<void> {
    try {
      const geoInformation = await this.geoInformationService.getGeoInformationByIp(req.params.ip);

      res.send(geoInformation);
    } catch (error) {
      res.status(HttpStatusCode.BadRequest).json(error);
    }
  }
}
