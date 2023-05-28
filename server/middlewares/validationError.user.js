import ApiError from '../exceptions/api-error.js';
import { validationResult } from 'express-validator';
import User from '../models/User.js';
import tokenService from '../services/token-service.js';

export default async (req, _res, next) => {
  const errors = validationResult(req);
  const { login } = req.body;
  const token = req.headers['authorization']?.split(' ')[1];
  const userData = tokenService.validateAccessToken(token);
  if ((await User.isEqualLogin(login)) && login !== userData.login) {
    errors.errors.push({
      value: login,
      msg: 'Already exist',
      param: 'login',
      location: 'body',
    });
  }
  if (!errors.isEmpty()) {
    return next(ApiError.BadRequest('Validation error', errors.array()));
  }
  next();
};
