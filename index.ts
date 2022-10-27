import express, { Application, Request, Response, urlencoded } from "express";
import http, { Server as HttpServer } from "http";
import { Server, Socket } from "socket.io";

import "colors";
import "express-async-errors";
import "dotenv/config";

import cors from "cors";
import morgan from "morgan";
import router from "./routes/routes";
import notFound from "./middleware/not-found";
import connectDB from "./database/db";

const app: Application = express();
const server: HttpServer = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1", router);
app.use(notFound);

// socket io
io.on("connection", (socket: Socket) => {
  io.emit("user connected", socket.id);

  io.on("finding stranger", () => {
    console.log("herererer");
  });
});

const start = async () => {
  try {
    // connect to mongodb
    // const url = process.env.MONGO_URI;
    // connectDB(url);

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
