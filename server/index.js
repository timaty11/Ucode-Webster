import Express from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';
import authRouter from './router/auth-router.js';
import adminRouter from './router/admin-router.js';
import errorMiddleware from './middlewares/error-middleware.js';
import ApiError from './exceptions/api-error.js';
import SendMail from './services/send-mail.js';

export default () => {
  const corsConfig = {
    origin: 'http://localhost:5173',
    credentials: true,
  };

  dotenv.config();

  const app = new Express({ logger: true });
  app.use(cookieParser());

  app.use(cors(corsConfig));

  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use('/api/auth', authRouter);
  app.use('/api/user', adminRouter);
  app.post('/api/text', async (req, res) => {
    const { email } = req.body;
    const massage = new SendMail();
    const response = await massage.send(email, {}, 'ticket');
    res.json({ response });
  });

  app.use('*', () => {
    throw ApiError.NotFound();
  });

  app.use(errorMiddleware);

  return app;
};
