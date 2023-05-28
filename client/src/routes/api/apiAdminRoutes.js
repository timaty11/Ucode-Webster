const apiPath = 'http://localhost:8080/api';

// Admin DB data access points
export default {
  // Users
  usersGetPath: () => [apiPath, 'user'].join('/'),
  userIdGetPath: (userId) => [apiPath, 'user', userId].join('/'),
  userPostPath: () => [apiPath, 'user', 'create'].join('/'),
  userIdUpdatePath: (userId) => [apiPath, 'user', 'update', userId].join('/'),
  userIdDeletePath: (userId) => [apiPath, 'user', 'delete', userId].join('/'),

  // Roles
  rolesGetPath: () => [apiPath, 'role'].join('/'),
  roleIdGetPath: (roleId) => [apiPath, 'role', 'get', roleId].join('/'),
  rolePostPath: () => [apiPath, 'role', 'create'].join('/'),
  roleIdUpdatePath: (roleId) => [apiPath, 'role', 'update', roleId].join('/'),
  roleIdDeletePath: (roleId) => [apiPath, 'role', 'delete', roleId].join('/'),

  // Events
  eventsGetPath: () => [apiPath, 'event'].join('/'),
  eventIdGetPath: (eventId) => [apiPath, 'event', 'get', eventId].join('/'),
  eventPostPath: () => [apiPath, 'event', 'create'].join('/'),
  eventIdUpdatePath: (eventId) => [apiPath, 'event', 'update', eventId].join('/'),
  eventIdDeletePath: (eventId) => [apiPath, 'event', 'delete', eventId].join('/'),

  // Categories
  categoriesGetPath: () => [apiPath, 'category'].join('/'),
  categoryIdGetPath: (categoryId) => [apiPath, 'category', 'get', categoryId].join('/'),
  categoryPostPath: () => [apiPath, 'category', 'create'].join('/'),
  categoryIdUpdatePath: (categoryId) => [apiPath, 'category', 'update', categoryId].join('/'),
  categoryIdDeletePath: (categoryId) => [apiPath, 'category', 'delete', categoryId].join('/'),

  // Tickets
  ticketsGetPath: () => [apiPath, 'ticket'].join('/'),
  ticketIdGetPath: (ticketId) => [apiPath, 'ticket', 'get', ticketId].join('/'),
  ticketPostPath: () => [apiPath, 'ticket', 'create'].join('/'),
  ticketIdUpdatePath: (ticketId) => [apiPath, 'ticket', 'update', ticketId].join('/'),
  ticketIdDeletePath: (ticketId) => [apiPath, 'ticket', 'delete', ticketId].join('/'),

  // Organizations
  orgaGetPath: () => [apiPath, 'organization'].join('/'),
  orgaIdGetPath: (ticketId) => [apiPath, 'organization', 'get', ticketId].join('/'),
  orgaPostPath: () => [apiPath, 'organization', 'create'].join('/'),
  orgaIdUpdatePath: (ticketId) => [apiPath, 'organization', 'update', ticketId].join('/'),
  orgaIdDeletePath: (ticketId) => [apiPath, 'organization', 'delete', ticketId].join('/'),
  // Pay
  getCoupons: () => [apiPath, 'pay', 'coupons'].join('/'),
  getPromocodes: (id) => [apiPath, 'pay', 'coupons', id, 'promo-codes'].join('/'),

};
