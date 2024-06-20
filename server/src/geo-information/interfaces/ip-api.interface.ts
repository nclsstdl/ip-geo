import { GeoInformationResponse } from "../../geo-information/interfaces/geo-information-response.interface";

export interface IpApi {
  getGeoInformationByIp(ip: string): Promise<GeoInformationResponse>;
}
