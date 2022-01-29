import multer from 'multer'
import { dirname, extname, resolve } from 'path'
import { fileURLToPath } from 'url';

const aleatorio = () => Math.floor(Math.random() * 100000 + 10000)
const dir = dirname(fileURLToPath(import.meta.url))

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo deve ser PNG ou JPG'))
    }
    return cb(null, true)
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(dir, '..', '..', 'uploads', 'images'))
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}${aleatorio()}${extname(file.originalname)}`)
    },
  }),
}
