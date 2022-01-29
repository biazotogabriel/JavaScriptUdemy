import multer from 'multer'
import multerConfig from '../config/multer.js'
import Photo from '../models/Photo.js'

const upload = multer(multerConfig).single('photo')

class PhotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        })
      }
      try {
        const { originalname, filename } = req.file
        const { aluno_id } = req.body
        const photo = await Photo.create({ originalname, filename, aluno_id })
        return res.json(photo)
      } catch (error) {
        return res.status(400).json({ errors: ['There\'s no student with this id'] })
      }
    })
  }
}

export default new PhotoController()
