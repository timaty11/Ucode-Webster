import ApiError from '../exceptions/api-error.js';
import { validationResult } from 'express-validator';

export default async (req, _res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(ApiError.BadRequest('Validation error', errors.array()));
  }
  next();
};
