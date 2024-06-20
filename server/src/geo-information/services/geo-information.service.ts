import { GeoInformationResponse } from "../interfaces/geo-information-response.interface";
import { IpApi } from "../interfaces/ip-api.interface";

export class GeoInformationService {
  constructor(private readonly ipApiService: IpApi) {}

  public getGeoInformationByIp(ip: string): Promise<GeoInformationResponse> {
    return this.ipApiService.getGeoInformationByIp(ip);
  }
}
