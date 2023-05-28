import { v4 as uuidv4 } from 'uuid';
import ApiError from '../exceptions/api-error.js';
import encrypt from '../encrypt.js';
import User from '../models/User.js';
import tokenService from './token-service.js';
import mailService from '../services/send-mail.js';
import generationCode from '../utils/generation-code.js';

class UserService {
  async getAllUser() {
    return await User.getAllUsers();
  }

  async getInfoUser(bearerToken) {
    const token = bearerToken?.split(' ')[1];
    const { id } = tokenService.validateAccessToken(token);
    return await User.getUserInfo(id);
  }

  async getUserById({ id }) {
    return await User.findUserId(id);
  }
  async getUserTicketById({ id }) {
    return await User.getUserTicketById(id);
  }

  async favoriteEvent(bearerToken) {
    const token = bearerToken?.split(' ')[1];
    const { id } = tokenService.validateAccessToken(token);
    return await User.getFavoriteEvent(id);
  }

  async hiddenUser(bearerToken) {
    const token = bearerToken?.split(' ')[1];
    const { id } = tokenService.validateAccessToken(token);
    return await User.setHidden(id);
  }

  async updateUserData({ params: { id }, body: data }) {
    await User.updateUserDate(id, data);
  }

  async createUser(body) {
    const id = uuidv4();
    await User.createUser({ id, ...body });
    return `create category ${body.title}`;
  }
  async changePassword({
    params: { id },
    body: { oldPassword, password, passwordConfirm },
  }) {
    if (password !== passwordConfirm) {
      throw ApiError.BadRequest('password ne valid, loh');
    }
    const encryptedPassword = await encrypt(password);
    return await User.updatePassword(id, encryptedPassword, oldPassword);
  }

  async changeEmail({ params: { id }, query: { email }, body: { code } }) {
    const { event_link: codeVerification } = await User.getValue(
      id,
      'event_link'
    );
    if (codeVerification !== code) {
      throw ApiError.BadRequest('code ne sovpadaut, prover code!!!!!!');
    }
    await User.deleteLink(id);
    return await User.updateEmail(id, email);
  }

  async deleteUser(bearerToken) {
    const token = bearerToken.split(' ')[1];
    const { id } = tokenService.validateAccessToken(token);
    await User.dropUser(id);
    return `delete user ${id}`;
  }

  async sendCodeEmail({ params: { id }, body: { email } }) {
    const sendEmail = new mailService();
    if (await User.isEqualEmail(email)) {
      throw ApiError.BadRequest('email uje uzaut');
    }
    const code = generationCode();
    await sendEmail.send(email, { code }, 'code');
    await User.setLink(id, code);
    return 'send email code';
  }

  async uploadAvatar({ file, headers }) {
    const token = headers['authorization'].split(' ')[1];
    const { id } = tokenService.validateAccessToken(token);
    await User.saveAvatar(id, file['filename'])
  }
}

export default new UserService();
