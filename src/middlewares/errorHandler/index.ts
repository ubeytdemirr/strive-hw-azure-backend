import { NextFunction, Request, Response } from 'express';

import ApiError from '../../classes/ApiError/ApiError';

const errorHandler = (error:Error|ApiError, _req:Request, res:Response, _next:NextFunction) => {
  if (error && !res.headersSent) {
    const errorResponse =
      error instanceof ApiError
        ? error
        : new ApiError(500, error.message, true);
    res.status(errorResponse.code).send(errorResponse);
  }
};

export default errorHandler;
