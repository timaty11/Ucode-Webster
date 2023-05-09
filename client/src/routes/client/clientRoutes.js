const clientPath = 'http://localhost:5173';

export default {
  fullMainPagePath: () => clientPath,
  mainPagePath: () => '/',

  // Auth
  fullLoginPagePath: () => [clientPath, 'login'].join('/'),
  loginPagePath: () => '/login',

  fullRegisterPagePath: () => [clientPath, 'register'].join('/'),
  registerPagePath: () => '/register',

  fullPassResetPagePath: () => [clientPath, 'pass-reset'].join('/'),
  passResetPagePath: () => '/pass-reset',

  fullRulesPagePath: () => [clientPath, 'rules-user'].join('/'),
  rulesPagePath: () => '/rules-user',

  fullConfirmEmailPagePath: () => [clientPath, 'comfirm-email'].join('/'),
  confirmEmailPagePath: () => '/comfirm-email',
  // Auth

  // Additional info
  fullAboutUsPagePath: () => [clientPath, 'about-us'].join('/'),
  aboutUsPagePath: () => '/about-us',

  fullContactInfoPagePath: () => [clientPath, 'contact-us'].join('/'),
  contactInfoPagePath: () => '/contact-us',
  // Additional info

  // Profile
  fullProfilePagePath: (userId) => [clientPath, 'user', userId].join('/'),
  profilePagePath: () => '/user/',
  // Profile
}