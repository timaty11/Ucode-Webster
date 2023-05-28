import ApiError from '../exceptions/api-error.js';
import { validationResult } from 'express-validator';
import Event from '../models/Event.js';

export default async (req, _res, next) => {
  const errors = validationResult(req);

  if (await Event.isEqualTitle(req.body.title, req.params)) {
    errors.errors.push({
      value: req.body.title,
      msg: 'Already exist',
      param: 'title',
      location: 'body',
    });
  }

  if (!errors.isEmpty()) {
    return next(ApiError.BadRequest('Validation error', errors.array()));
  }
  next();
};
