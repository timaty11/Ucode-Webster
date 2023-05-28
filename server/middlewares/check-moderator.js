import TokenService from '../services/token-service.js';
import ApiError from '../exceptions/api-error.js';
import User from '../models/User.js';

const validRoles = ['admin', 'moderator'];

export default async (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1];
    const { id: userId } = TokenService.validateAccessToken(token);
    const [{ role }] = await User.getRole(userId);
    if (!validRoles.includes(role)) {
      throw ApiError.AccessDenied('ti ne admin i ne moderator');
    }
    next();
  } catch (err) {
    next(err);
  }
};
