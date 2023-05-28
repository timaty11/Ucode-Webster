import Express from 'express';
import tryCatch from '../utils/try-catch.event.js';
import User from '../controller/users-controller.js';
import { body } from 'express-validator';
import checkValidation from '../middlewares/auth-validation.js';
import adminRoutes from '../routes/admin-routes.js';
import accessDenied from '../middlewares/user.access-enied.js';
import validationErrorUser from '../middlewares/validationError.user.js';
import { uploadAvatar } from '../middlewares/upload-file.js'


const router = Express.Router();

// User
// console.log(adminRoutes.usersGetPath());
router.get(adminRoutes.usersGetPath(), tryCatch(User.getAllUsers));
router.get(adminRoutes.usersGetMyInfoPath(), tryCatch(User.getInfoUser));

router.get(adminRoutes.userGetFavoriteEvent(), tryCatch(User.getFavoriteEvent))

router.get(adminRoutes.userIdGetPath(), tryCatch(User.getUserById));
router.get(adminRoutes.userGetTicketsById(), tryCatch(User.getUserTicketById)); // <----- Access denied add!!!!!!!!

router.post(
  adminRoutes.userPostPath(),
  checkValidation,
  tryCatch(User.createUser)
);

router.post(adminRoutes.userHiddenPath(), tryCatch(User.hiddenUser));

router.patch(
  adminRoutes.userIdUpdatePath(),
  body('login').isLength({ min: 3, max: 30 }).trim(),
  body('first_name').notEmpty().trim(),
  body('second_name').notEmpty().trim(),
  body('last_name').notEmpty().trim(),
  // body('phone_number').isLength({ min: 4, max: 13 }).trim(),
  accessDenied,
  validationErrorUser,
  tryCatch(User.updateUserData)
);

router.patch(
  adminRoutes.userChangePasswordPath(),
  accessDenied,
  tryCatch(User.changePassword)
);

router.patch(
  adminRoutes.userChangeEmailPath(),
  accessDenied,
  tryCatch(User.changeEmail)
);

router.post(
  adminRoutes.userSendEmailPath(),
  body('email').isEmail().normalizeEmail().trim(),
  accessDenied,
  tryCatch(User.sendCodeUpdateEmail)
);

router.patch(
  adminRoutes.userUploadAvatar(),
  uploadAvatar.single('image'),
  tryCatch(User.uploadAvatar)
);

router.delete(adminRoutes.userIdDeletePath(), tryCatch(User.deleteUser));

export default router;
