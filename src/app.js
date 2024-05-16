import express from "express";
import cookieParser from 'cookie-parser';
import cors from "cors";

//Iniciando el servidor
const app = express();

//middleware para convertir los req body o que el  back lo pueda entender conm express
app.use(express.json())
app.use(cors())
app.use(cookieParser())

export default app;