import { Request, Response } from "express";

export const welcomeController = (req: Request, res: Response) => {
  res.status(200).json({ ok: "ok" });
};
