import { HttpStatusCode } from "axios";
import type { Request, Response, NextFunction } from "express";

export function validateIpAddress({ params }: Request, res: Response, next: NextFunction) {
  if (!params.ip) {
    return res.status(HttpStatusCode.BadRequest).json("must provide an ip address");
  }

  const regex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;

  const isValidIpAddress = regex.test(params.ip);

  if (!isValidIpAddress) {
    return res.status(HttpStatusCode.BadRequest).json("provided ip address has invalid format");
  }

  next();
}
