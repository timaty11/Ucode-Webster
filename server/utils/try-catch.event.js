import ApiError from '../exceptions/api-error.js';

const tryCatch = (controller) => async (req, res, next) => {
  try {
    const result = await controller(req, res);
      res.status(200).json({ values: result || 'Ok' });
  } catch (error) {
    if (error.code === 11000)
      return res.json(ApiError.BadRequest('Validation error', error.array()));
    return next(error);
  }
};

export default tryCatch;
