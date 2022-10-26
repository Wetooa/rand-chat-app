import express from "express";
import { sendMessage } from "../controllers/messages";

const router = express.Router();

router.route("/messages/:id").post(sendMessage);

export default router;
