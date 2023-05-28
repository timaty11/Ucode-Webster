import ApiError from '../exceptions/api-error.js';
import Event from '../models/Event.js';
import TokenService from '../services/token-service.js';

export default async (req, _res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const { id } = TokenService.validateAccessToken(token);
    const eventId = req.params.id;
    const dataEvent = await Event.findOne(eventId);
    if (dataEvent.user_id !== id) {
      next(ApiError.AccessDenied('ne tvoi post, sasi'));
    }
    next();
  } catch (err) {
    next(err);
  }
};
