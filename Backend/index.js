import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { router } from "./src/Routes/routes.js";
mongoose.connect(process.env.DATABASE_URL);

const port = process.env.PORT | 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

app.listen(port);
