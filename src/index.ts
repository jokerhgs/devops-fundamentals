import express from "express";
import type { Express } from "express";

const app: Express = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

console.log("App is running");

export default app;
