import multer from 'multer';

const fileStorageEngineAvatar = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, './assets/avatars');
  },
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const fileStorageEnginePost = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, './assets/picture-post');
  },
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const uploadAvatar = multer({ storage: fileStorageEngineAvatar });
const uploadFile = multer({ storage: fileStorageEnginePost });

export { uploadAvatar, uploadFile };
