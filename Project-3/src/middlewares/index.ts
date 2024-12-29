import { NextFunction, Request, Response } from "express";

export const timingMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
};

export const ipAddressMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("ip address:", req.ip);
  next();
};
