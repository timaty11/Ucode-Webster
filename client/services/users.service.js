import $api from '../utils/api.js';
import clientRoutes from '../src/routes/api/apiClientRoutes.js';
import adminRoutes from '../src/routes/api/apiAdminRoutes.js';

const UsersService = {
  getAll() {
    return $api.get(adminRoutes.usersGetPath());
  },
  getById(id) {
    return $api.get(adminRoutes.userIdGetPath(id));
  },
  getInfoUser() {
    return $api.get(clientRoutes.usersGetInfoPath());
  },
  updateInfoUser({ id, ...data }) {
    return $api.patch(clientRoutes.changeUserInfo(id), data);
  },
  getUserTickets(id) {
    return $api.get(clientRoutes.userTickets(id));
  },
  getFavoriteEvent() {
    return $api.get(clientRoutes.userFavoriteEvent());
  }
};

export { UsersService };
