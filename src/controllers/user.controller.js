import { createAccessToken } from "../libs/jwt.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const registro = async(req, res) => {
    const {username, email, password} = req.body;

    try {
        const usurioEncontrado = await User.findOne({email})
        if(usurioEncontrado)
            return res.status(400).json(["El email ya esta en uso"])

        const passwordHash = await bcrypt.hash(password, 10)

        const nuevoUsuario = new User ({
            username, email, password: passwordHash
        })

        //Logica es para guardar este documentos en la base de datos
        const usuarioGuardado = await nuevoUsuario.save();
        //utilizamos en token
        const token = await createAccessToken({id: usuarioGuardado._id});
        //Crear una cookie en el navegador o el cliente con express
        res.coolie("token", token)
        //respuesta al cliente
        res.json({
            email: usuarioGuardado.email,
            username: usuarioGuardado.username,
            id: usuarioGuardado.id
        })
    } catch (error) {
        res.status(500).jsonn([error.message])
    }
}

export const loguear = async(req, res) => {
    
}