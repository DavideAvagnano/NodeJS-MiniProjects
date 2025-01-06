import { Request, Response } from "express";

export const renderHome = (req: Request, res: Response) => {
  res.render("index", {
    title: "My Friends Are VERYY Clever",
    caption: "Let's go skiing!",
  });
};
