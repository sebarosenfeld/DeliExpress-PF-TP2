import express from 'express';
import {
    home,
    getUsers,
    getUsersById,
    getUsersSearch,
    CrearUsuario,
    actualizarProfilePic,
    login
} from '../controllers/alumnosController.js'
import { protegerRuta } from '../middlewares/authMiddlewares.js';
import { allowUpload } from '../middlewares/uploadMiddleware.js';

const router = express.Router()

router.post('/api/login', login)

router.get('/', home)
router.get('/api/usuario', getUsers)
router.get('/api/usuario/:id', getUsersById)
router.get('/api/search/usuarios', getUsersSearch)


router.post('/api/usuarios', protegerRuta , CrearUsuario)
router.put('/api/usuarios', protegerRuta, allowUpload.single('imagen'), actualizarProfilePic)


export default router