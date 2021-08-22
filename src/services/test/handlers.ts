import { NextFunction, Request, Response } from "express";

export const getHandler = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send({ params: req.params, query: req.query });
  } catch (error) {
    next(error);
  }
};

const handlers = {
  get: getHandler,
};

export default handlers;
