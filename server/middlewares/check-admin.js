import TokenService from '../services/token-service.js';
import ApiError from '../exceptions/api-error.js';
import User from '../models/User.js';

const validRoles = ['admin'];

export default async (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1];
    const { id: userId } = TokenService.validateAccessToken(token);
    const [{ role }] = await User.getRole(userId);
    if (!validRoles.includes(role)) {
      throw ApiError.AccessDenied('ti ne admin');
    }
    next();
  } catch (err) {
    next(err);
  }
};
