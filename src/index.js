import roteadorLogin from "./routes/login.js";
import roteadorUsuario from "./routes/usuarios.js";
import cors from "cors";

import dotenv from "dotenv";
import express from "express";
dotenv.config();

const app = express();                        // Instancia o Express
const port = 3000;                            // Define a porta

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());                      // Middleware para parsing JSON

app.use(roteadorUsuario);
app.use(roteadorLogin);

// Rota raiz
app.get("/", ( req, res) => {
  console.log("Rota GET/ solicitada");
  res.json({
    nome: "João Pedro Alves",                   // Substitua pelo seu nome
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Serviço escutando na porta: ${port}`);
});