import express from "express";
import mongoose from "mongoose";

import { router } from "./src/Routes/routes.js";

mongoose.connect("mongodb://localhost:27017/fireforest");

import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

app.listen(3000);
