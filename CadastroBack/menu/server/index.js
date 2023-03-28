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

function setUsuario(login, nome, senha, email, status, usuariotipo, datacadastro){
    cliente.query(('insert into usuarios ("login", "nome", "senha", "email", "status", "usuariotipo", "datacadastro") values ('+"'"+login+"', '"+nome+"', '"+ senha+ "', '"+email+"', '"+status+"', '"+usuariotipo+"', '" +datacadastro+"');"), (err, result)=> {
        console.log(err);
    })
}

app.use(cors());
app.use(express.json());


app.post("/cadastro", (req, res)=>{
    const {firstname} = req.body;
    const {lastname} = req.body
    const {login} = req.body;
    const {email} = req.body;
    const {password} = req.body;
    const {date} = req.body;
    const status = "ativo"
    const usuarioTipo = "NORMAL"

    setUsuario(login, firstname +" "+ lastname, password, email, status, usuarioTipo, date )
    
})

app.listen(3001, () => {
    console.log("rodando servidor");
});