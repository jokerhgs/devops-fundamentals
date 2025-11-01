import express from "express";
import type { Express } from "express";
import routes from "./routes.ts";

const app: Express = express();

app.use(express.json());
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

export default app;
