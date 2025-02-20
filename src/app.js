import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logStream = fs.createWriteStream(path.join(__dirname, "server.log"), {
  flags: "a",
});

morgan.token("server-time", () => new Date().toLocaleString());
const app = express();
app.use(
  morgan(
    ":server-time :date[iso] :method :url :status :response-time ms - :res[content-length] :user-agent",
    { stream: logStream }
  )
);

app.use(cors());
app.use(express.json());
app.use("/api", router);

export default app;
