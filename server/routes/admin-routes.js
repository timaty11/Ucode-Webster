const apiPath = '';

// Admin DB data access points
export default {
  // Users
  usersGetPath: () => [apiPath].join('/'),
  usersGetMyInfoPath: () => [apiPath, 'profile'].join('/'),
  userIdGetPath: () => [apiPath, ':id'].join('/'),
  userPostPath: () => [apiPath, 'create'].join('/'),
  userIdUpdatePath: () => [apiPath, ':id', 'update'].join('/'),
  userChangeEmailPath: () => [apiPath, ':id', 'update', 'email'].join('/'),
  userSendEmailPath: () =>
    [apiPath, ':id', 'send', 'update', 'email'].join('/'),
  userChangePasswordPath: () =>
    [apiPath, ':id', 'update', 'password'].join('/'),
  userIdDeletePath: () => [apiPath, 'delete'].join('/'),
  userHiddenPath: () => [apiPath, 'hidden'].join('/'),
  userGetTicketsById: () => [apiPath, ':id', 'ticket'].join('/'),
  userUploadAvatar: () => [apiPath, 'avatar'].join('/'),
  userGetFavoriteEvent: () => [apiPath, 'favorite', 'events'].join('/'),
  // Roles
  rolesGetPath: () => [apiPath].join('/'),
  roleIdGetPath: (roleId) => [apiPath, 'get', roleId].join('/'),
  rolePostPath: () => [apiPath, 'create'].join('/'),
  roleIdUpdatePath: (roleId) => [apiPath, 'update', roleId].join('/'),
  roleIdDeletePath: (roleId) => [apiPath, 'delete', roleId].join('/'),

  // Events
  eventsGetPath: () => [apiPath].join('/'),
  eventSearch: () => [apiPath, 'search'].join('/'),
  eventIdGetPath: () => [apiPath, ':id'].join('/'),
  eventGetRecommendEvent: () => [apiPath, ':id', 'recommend'].join('/'),
  eventPostPath: () => [apiPath, 'create'].join('/'),
  eventCategoriesGetPath: () => [apiPath, ':id', 'categories'].join('/'),
  eventTicketsGetPath: () => [apiPath, ':id', 'tickets'].join('/'),
  eventGetAllComments: () => [apiPath, ':id', 'comments'].join('/'),
  eventSellTicketPath: () => [apiPath, ':id', 'ticket', 'sell'].join('/'),
  eventIdUpdatePath: () => [apiPath, ':id', 'update'].join('/'),
  eventIdDeletePath: () => [apiPath, ':id', 'delete'].join('/'),
  eventCreateCommentPath: () => [apiPath, ':id', 'create', 'comment'].join('/'),
  eventAllUsersSellTicketByEventId: () =>
    [apiPath, ':id', 'ticket', 'users'].join('/'),
    eventCreateFavorite: () => [apiPath, ':id', 'favorite'].join('/'),
    eventEploadFile: () => [apiPath, ':id', 'upload'].join('/'),
  // Categories
  categoriesGetPath: () => [apiPath].join('/'),
  categoryIdGetPath: () => [apiPath, ':id'].join('/'),
  categoryIdGetAllEventPath: () => [apiPath, ':id', 'posts'].join('/'),
  categoryPostPath: () => [apiPath, 'create'].join('/'),
  categoryIdUpdatePath: () => [apiPath, ':id', 'update'].join('/'),
  categoryIdDeletePath: () => [apiPath, ':id', 'delete'].join('/'),

  // Tickets
  ticketsGetPath: () => [apiPath].join('/'),
  ticketIdGetPath: (ticketId) => [apiPath, 'get', ticketId].join('/'),
  ticketPostPath: () => [apiPath, 'create'].join('/'),
  ticketReturnPath: () => [apiPath, ':id', 'return'].join('/'),
  ticketIdUpdatePath: (ticketId) => [apiPath, 'update', ticketId].join('/'),
  ticketIdDeletePath: (ticketId) => [apiPath, 'delete', ticketId].join('/'),

  // Comments
  commentsGetPath: () => [apiPath].join('/'),
  commentsIdGetPath: () => [apiPath, ':id'].join('/'),
  commentIdReactionGetPath: () => [apiPath, ':id', 'reaction'].join('/'),
  commentsIdUpdatePath: () => [apiPath, ':id', 'update'].join('/'),
  commentsIdDeletePath: () => [apiPath, ':id', 'delete'].join('/'),

  commentIdReactionPath: () => [apiPath, ':id', ':type'].join('/'),
  commentIdDeleteReactionPath: () => [apiPath, ':id', 'delete', 'reaction'].join('/'),
};
