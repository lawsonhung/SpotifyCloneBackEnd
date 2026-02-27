import type { ErrorRequestHandler, RequestHandler } from "express";

export const logReq: RequestHandler = (req, _res, next) => {
  console.log(`${req.method} -- ${req.url} == ${new Date().toLocaleTimeString()}`);
  next();
}

export const globalErr: ErrorRequestHandler = (err, _req, res, _next) => {
  res.status(err.status || 500).json({error:`❌ Error: ${err.message}`});
}