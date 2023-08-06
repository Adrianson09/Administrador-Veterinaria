import express from "express";
import dotenv from 'dotenv';
import conectarDB from "./config/db.js";


const app = express();
dotenv.config();
conectarDB();
app.use('/', (req, res) => {
    res.send('Hola Mundo!');
});

app.listen(4000, ()=> {
    console.log("Servidor funcionando en el puerto 4000");
});
