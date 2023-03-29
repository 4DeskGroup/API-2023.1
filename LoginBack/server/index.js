const express = require("express");
const app = express();
const { Pool } = require("pg");
const cors = require("cors")

const cliente = new Pool({
    host: "localhost",
    user: "postgres",
    password: "1234",
    database: "visiona"
})

function buscaUsuario(login, senha, res){
    cliente.query("SELECT * FROM usuarios WHERE login = '"+login+"' AND  senha = '"+senha+"' ;", (err, result) => {
        var usuarioEncontrado=true
        if(err){
            console.log('erro query:',err);
        }
        if(result.rows.length > 0){
           res.send({msg: "Usuário logado com sucesso"})
        } else{
            res.send({msg: "Usuário não encontrado"})
        }
})
}

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
    const login  = req.body.login
    const password  = req.body.password

    buscaUsuario(login, password, res)
    
    })




app.listen(3001, 'localhost', () => {
    console.log("rodando servidor");
});