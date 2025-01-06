import { Request, Response } from "express";
import { friends as model } from "../models/friends-model";

export const getFriends = (req: Request, res: Response) => {
  res.json(model);
};

export const getFriend = (req: Request, res: Response) => {
  const friendId = Number(req.params.friendId);
  const friend = model[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ error: "Friend does not exist" });
  }
};

export const postFriend = (req: Request, res: Response) => {
  if (!req.body.name) {
    res.status(400).json({ error: "Missing friend name " });
    return;
  }
  const newFriend = {
    id: model.length,
    name: req.body.name,
  };
  model.push(newFriend);

  res.json(newFriend);
};
