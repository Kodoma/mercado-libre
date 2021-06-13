import { RequestHandler } from 'express';

export function health(): RequestHandler {
  return (_req, res, _next) => {
    res.status(200).json({
      status: "UP",
      uptime: process.uptime()
    });
  };
}
