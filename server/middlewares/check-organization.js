import TokenService from '../services/token-service.js';
import ApiError from '../exceptions/api-error.js';
import User from '../models/User.js';

const validRoles = ['admin', 'organization'];

export default async (req, _res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1];
    const { id: userId } = TokenService.validateAccessToken(token);
    const [{ role }] = await User.getRole(userId);
    if (!validRoles.includes(role)) {
      throw ApiError.AccessDenied('ti ne admin i ne organizator');
    }
    next();
  } catch (err) {
    next(err);
  }
};
