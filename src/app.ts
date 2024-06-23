import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { apiRouter } from "./api";

dotenv.config();

export const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use("/api", apiRouter);
