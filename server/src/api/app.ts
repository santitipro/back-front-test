import bodyParser from "body-parser";
import express, { Application } from "express";
import { registerRoutes } from "./routes";

const app: Application = express();

app.set("port", process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

registerRoutes(app);

export default app;
