import express from 'express';
import { router } from './routes/index.js';
import morgan from 'morgan';

import { responseError } from './utils/requestResponse.js';

export const server = express()

server.use(express.json())
server.use(morgan("dev"))

server.use('/characters', router)

server.use((err, _req, res, _next) => {
  const { statusCode, message } = err
  responseError(res, statusCode, message)
})
