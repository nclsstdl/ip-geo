import { GeoInformationResponse } from "./geo-information-response.interface";

export interface IpApi {
  getGeoInformationByIp(ip: string): Promise<GeoInformationResponse>;
}
