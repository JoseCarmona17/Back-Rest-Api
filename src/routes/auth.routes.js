import { Router } from 'express';
import { logout, loguear, profile, registro } from '../controllers/user.controller.js';
import { autRequired } from "../middlewares/validateToken.js";

const router = Router();

//peticiones
router.post('./register', registro)
router.post('./login', loguear)
router.post('./logout', logout)
router.post('/perfil', autRequired ,profile)

export default router;