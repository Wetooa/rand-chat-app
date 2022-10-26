import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Message from "../models/Message";

export const sendMessage = async (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({ msg: "success" });
};

export const getMessages = async (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({ msg: "success" });
};

export const deleteMessage = async (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({ msg: "success" });
};
