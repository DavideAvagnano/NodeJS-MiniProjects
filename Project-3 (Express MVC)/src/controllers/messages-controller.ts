import { Request, Response } from "express";

export const getMessages = (req: Request, res: Response) => {
  res.render("messages", {
    title: "Messages to my Friends!",
    friend: "Elon Musk",
  });
  // const filePath = path.join(
  //   __dirname,
  //   "..",
  //   "public",
  //   "images",
  //   "skimountain.jpg"
  // );
  // res.sendFile(filePath);
};

export const postMessage = (req: Request, res: Response) => {
  console.log("Updating messages...");
};
