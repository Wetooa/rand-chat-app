import express, { Application, Request, Response } from "express";
import http, { Server as HttpServer } from "http";
import { Server, Socket } from "socket.io";
import "dotenv/config";
import "colors";

const app: Application = express();
const server: HttpServer = http.createServer(app);
const io = new Server(server);

app.get("/", (req: Request, res: Response) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/test", (req, res) => {
  res.send("hello");
});

io.on("connection", (socket: Socket) => {
  io.emit("user connected");

  socket.on("disconnect", () => {
    io.emit("user disconnected");
  });

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  socket.on("typing", () => {
    io.emit("typing");
  });

  socket.on("no longer typing", () => {
    io.emit("no longer typing");
  });
});

const start = () => {
  try {
    const port = process.env.PORT;
    server.listen(port, () => {
      console.log(
        `[server]: Server listening on port ${port}`.yellow.underline
      );
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
start();
