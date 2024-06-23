import dotenv from "dotenv";
import express, { type Request, type Response } from "express";
import cors from "cors";
import { GeoInformationController } from "./geo-information/controllers/geo-information.controller";
import { GeoInformationService } from "./geo-information/services/geo-information.service";
import { validateIpAddress } from "./geo-information/validators/ip-address.validator";
import { IpApiService } from "./ip-api/services/ip-api.service";

dotenv.config();

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

const geoInformationController = new GeoInformationController(new GeoInformationService(new IpApiService()));

app.get("/ip/:ip/geo", validateIpAddress, (req: Request, res: Response) =>
  geoInformationController.getGeoInformationByIp(req, res)
);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
