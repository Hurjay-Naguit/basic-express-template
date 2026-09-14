import type { Request, Response } from "express";

export const testServer = async (_req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    message: "Server is running.",
  });
};
