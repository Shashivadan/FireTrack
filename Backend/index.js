import express from "express";
import mongoose from "mongoose";


// import { PythonShell } from "python-shell";

// import { spawn } from "child_process";

import { router } from "./src/Routes/routes.js";

mongoose.connect("mongodb://localhost:27017/fireforest");

import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send("djshk");
// });

app.use("/", router);

// console.log(process.env.PORT);

app.listen(3000);
