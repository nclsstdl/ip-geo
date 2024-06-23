import { IpApiResponseStatus } from "../enums/ip-api-response-status.enum";

interface IpApiBaseResponse {
  status: IpApiResponseStatus;

  query: string;
}

export interface IpApiSuccessResponse extends IpApiBaseResponse {
  status: IpApiResponseStatus.SUCCESS;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
}

export interface IpApiErrorResponse extends IpApiBaseResponse {
  status: IpApiResponseStatus.FAIL;
  message: string;
}

export type IpApiResponse = IpApiSuccessResponse | IpApiErrorResponse;
