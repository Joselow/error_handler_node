import express from 'express';
import { router } from './routes/index.js';
import morgan from 'morgan';

export const server = express()

server.use(express.json())
server.use(morgan("dev"))
server.use('/characters', router)
