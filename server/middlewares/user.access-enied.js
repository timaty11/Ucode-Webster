import ApiError from '../exceptions/api-error.js';
import User from '../models/User.js';
import TokenService from '../services/token-service.js';

export default async (req, _res, next) => {
  try {
    const { id } = req.params;
    const token = req.headers['authorization']?.split(' ')[1];
    const { id: userId } = TokenService.validateAccessToken(token);
    const userData = await User.findUserId(userId);
    const [{ role }] = await User.getRole(userId);
    const userDataId = userData.id;
    if (userDataId !== id && role !== 'admin') {
      throw ApiError.AccessDenied('ne tvoi account');
    }
    next();
  } catch (err) {
    next(err);
  }
};
