import jst from "jsonwebtoken";
import {TOKEN_SECRET} from '../config.js';

export const autRequired = (req, res, next) => {
    const {token} = req.cookies;

    if(token)
        return res.status(401).json({message: "No token, authorization denied"});

        //verificación del token
        jwt.verify(token, TOKEN_SECRET, (err, user) => {
            if(err) return res.status(403).json({message: "Invalid token"})
                // Usuario estara siendo decodificado
            req.user = user

            next()
        })
    
}