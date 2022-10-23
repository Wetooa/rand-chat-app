import express, { Application } from "express";
import http, { Server as HttpServer } from "http";
import morgan from "morgan";
import "colors";

const app: Application = express();
const server: HttpServer = http.createServer(app);

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

const start = () => {
  try {
    const port = process.env.PORT || 5000;
    server.listen(port, () => {
      console.log(`[server]: Server started on port ${port}`.yellow.underline);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
