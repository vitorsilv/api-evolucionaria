require('dotenv').config();
const express = require("express")
const app = express();

const mongodb = require('./database/mongobd')

mongodb.conectar();

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"));
app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req,res) =>{
    res.send('Bem vindo de volta Vitor, veio atualizar ou pegar uma base?')
});

app.use("/api", require('./routes'));