import ApiError from '../exceptions/api-error.js';
import Comment from '../models/Comment.js';
import TokenService from '../services/token-service.js';

export default async (req, _res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const { id } = TokenService.validateAccessToken(token);
    const commentId = req.params.id;
    const dataComment = await Comment.findId(commentId);
    if (dataComment.user_id !== id) {
      next(ApiError.AccessDenied('ne tvoi post, sasi'));
    }
    next();
  } catch (err) {
    next(err);
  }
};
