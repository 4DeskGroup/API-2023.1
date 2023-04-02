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
app.get("/getInfo", (req, res)=>{

    cliente.query('select login, status, usuarioTipo, dataCadastro from usuarios', (err, result)=>{
        if(err) console.log(err);
        else res.json(result.rows);
    })

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
            res.send({userFound : 'false'})
        }
})
}

function setUsuario(login, nome, senha, email, status, usuariotipo, datacadastro, res){
    cliente.query(('insert into usuarios ("login", "nome", "senha", "email", "status", "usuariotipo", "datacadastro") values ('+"'"+login+"', '"+nome+"', '"+ senha+ "', '"+email+"', '"+status+"', '"+usuariotipo+"', '" +datacadastro+"');"), (err, result)=> {
        if(err){
            console.log('erro SQL', err);
        }else{
            res.send({msg: "Usuário cadastrado com sucesso"})
        };

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

    setUsuario(login, firstname +" "+ lastname, password, email, status, usuarioTipo, date, res )
    
})

app.post("/login", (req, res) => {
    const login  = req.body.login
    const password  = req.body.password

    buscaUsuario(login, password, res)
    
    })







app.listen(3001, 'localhost', () => {
    console.log("rodando servidor");
});