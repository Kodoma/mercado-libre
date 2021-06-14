import { NextFunction, Request, Response } from 'express';
import { logger } from '../utils/logger';
import { AxiosError } from 'axios';
import HttpError from '../errors/HttpError';

function errorStatusCode(error: AxiosError | Error | HttpError) {
  if (error instanceof HttpError) {
    return error.httpStatusCode;
  }
  if ((error as AxiosError).isAxiosError) {
    return (error as AxiosError).response.status;
  }
  return undefined;
}

const errorMiddleware = (error: AxiosError | Error | HttpError, req: Request, res: Response, next: NextFunction) => {
  try {
    const status: number = errorStatusCode(error) || 500;
    const message: string = error.message || 'Something went wrong';

    logger.error(`StatusCode : ${status}, Message : ${message}`);
    res.status(status).json({ message });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
