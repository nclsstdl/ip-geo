import axios from "axios";
import { IpApiResponse, IpApiSuccessResponse } from "../interfaces/ip-api-response.interface";
import { IpApi } from "../../../interfaces/ip-api.interface";
import { GeoInformationResponse } from "../../../interfaces/geo-information-response.interface";
import { IpApiResponseStatus } from "../enums/ip-api-response-status.enum";

export class IpApiService implements IpApi {
  private static apiUrl = "http://ip-api.com/json";

  private static mapIpApiResponseToGeoInformationResponse(response: IpApiResponse): GeoInformationResponse {
    if (response.status === IpApiResponseStatus.FAIL) {
      throw new Error(response.message);
    }

    return this.mapIpApiSuccessResponseToGeoInformationResponse(response);
  }

  private static mapIpApiSuccessResponseToGeoInformationResponse(
    response: IpApiSuccessResponse
  ): GeoInformationResponse {
    const { query, country, countryCode, region, regionName, city, zip, lat, lon } = response;

    return {
      ip: query,
      country,
      countryCode,
      region,
      regionName,
      city,
      zip,
      lat,
      lon,
    } satisfies GeoInformationResponse;
  }

  public getGeoInformationByIp(ip: string): Promise<GeoInformationResponse> {
    return axios
      .get<IpApiResponse>(`${IpApiService.apiUrl}/${ip}`)
      .then((response) => IpApiService.mapIpApiResponseToGeoInformationResponse(response.data));
  }
}
