const apiPath = 'http://localhost:8080/api';

export default {
  loginPath: () => [apiPath, 'auth', 'login'].join('/'),
  registerPath: () => [apiPath, 'auth', 'register'].join('/'),
  logoutPath: () => [apiPath, 'auth', 'logout'].join('/'),
  sendMailResetPassword: () => [apiPath, 'auth', 'password-reset'].join('/'),
  resetPassword: (token) => [apiPath, 'auth', 'password-reset', token].join('/'),
  confirmEmail: (token) => [apiPath, 'auth', 'active', token].join('/'),
  changeUserInfo: (id) => [apiPath, 'user', id, 'update'].join('/'),
  userIdGetPath: (userId) => [apiPath, 'user', userId].join('/'),
  
  getAllEvent: () => [apiPath, 'event'].join('/'),
  getEventById: (id) => [apiPath, 'event', id].join('/'),
  getTicketsEvent: (id) => [apiPath, 'event', id, 'tickets'].join('/'),
  getSearchEvent: (search) => [apiPath, 'event', `search?query=${search}`].join('/'),
  getEventRecommend: (id) => [apiPath, 'event', id, 'recommend'].join('/'),
  getAllCommentsByEventId: (id) => [apiPath, 'event', id, 'comments'].join('/'),
  createComment: (id) => [apiPath, 'event', id, 'create', 'comment'].join('/'),
  createFavoriteEvent: (id) => ['event', id, 'favorite'].join('/'),

  changeComment: (id) => [apiPath, 'comment', id, 'update'].join('/'),
  deleteComment: (id) => [apiPath, 'comment', id, 'delete'].join('/'),
  getReactionComment: (id) => [apiPath, 'comment', id, 'reaction'].join('/'),
  deleteCommentReaction: (id) => [apiPath, 'comment', id, 'delete', 'reaction'].join('/'),
  createCommentReaction: (id, type) => [apiPath, 'comment', id, type].join('/'),

  usersGetInfoPath: () => [apiPath, 'user', 'profile'].join('/'),
  userChangeEmail: () => [apiPath, 'user', id, 'update', 'password'].join('/'),
  userChangePasswordPath: (id) =>
  [apiPath, 'user', id, 'update', 'password'].join('/'),
  userTickets: (id) => [apiPath, 'user', id, 'ticket'].join('/'),
  userFavoriteEvent: () =>[apiPath, 'user', 'favorite', 'events'].join('/'),

  payPath: () => [apiPath, 'pay', 'create-session-intent'].join('/'),

  getPathAvatar: (name) => [apiPath, 'avatars', name].join('/'),

  getCities: () => [apiPath, 'city'].join('/'),

  getStepComplete: () => [apiPath, 'organization', 'steps'].join('/'),
  createOrganization: (step) => [apiPath, 'organization', 'create', step].join('/'),
};
