import { HttpStatusCode } from "axios";
import type { Request, Response, NextFunction } from "express";
import z from "zod";

const schema = z.object({
  params: z.object({
    ip: z.string().ip(),
  }),
});

export function validateIpAddress(request: Request, res: Response, next: NextFunction) {
  try {
    schema.parse(request);

    next();
  } catch (error) {
    res
      .status(HttpStatusCode.BadRequest)
      .json("Die eingegebene IP-Adresse ist ungültig! Überprüfe deine Eingabe und versuche es erneut.");
  }
}
