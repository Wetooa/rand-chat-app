import express, { Application } from "express";
import http, { Server } from "http";

const app: Application = express();
const server: Server = http.createServer(app);

app.get();
