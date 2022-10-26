import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const notFound = (req: Request, res: Response) => {
  res.status(StatusCodes.NOT_FOUND).send("PAGE NOT FOUND");
};

export default notFound;
