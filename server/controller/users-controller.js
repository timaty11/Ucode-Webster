import userService from '../services/user.service.js';

class Users {
  async getAllUsers(_req, _res) {
    return await userService.getAllUser();
  }

  async getInfoUser(req, _res) {
    return await userService.getInfoUser(req.headers['authorization']);
  }

  async getUserTicketById(req, _res) {
    return await userService.getUserTicketById(req.params);
  }

  async getFavoriteEvent(req, _res) {
    return await userService.favoriteEvent(req.headers['authorization']);
  }

  async getUserById(req, _res) {
    return await userService.getUserById(req.params);
  }
  async createUser(req, _res) {
    return await userService.createUser(req.body);
  }

  async hiddenUser(req, _res) {
    return userService.hiddenUser(req.headers['authorization']);
  }

  async updateUserData(req, _res) {
    return await userService.updateUserData(req);
  }

  async changePassword(req, _res) {
    return await userService.changePassword(req);
  }

  async changeEmail(req, _res) {
    return await userService.changeEmail(req);
  }

  async deleteUser(req, _res) {
    return userService.deleteUser(req.headers['authorization']);
  }
  async sendCodeUpdateEmail(req, _res) {
    return userService.sendCodeEmail(req);
  }
  async uploadAvatar(req, _res) {
    return userService.uploadAvatar(req);
  }
}

export default new Users();
