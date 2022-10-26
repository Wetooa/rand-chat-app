import express, { Application, Request, Response } from "express";
import http, { Server as HttpServer } from "http";
import { Server, Socket } from "socket.io";
import morgan from "morgan";
import "colors";

const app: Application = express();
const server: HttpServer = http.createServer(app);
const io = new Server(server);

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

io.on("connection", (socket: Socket) => {
  io.emit("user connected");
});

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
