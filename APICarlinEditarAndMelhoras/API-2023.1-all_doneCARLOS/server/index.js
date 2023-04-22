const express = require("express");
const app = express();
const { Pool } = require("pg");
const cors = require("cors");
const bcrypt = require("bcrypt");

const cliente = new Pool({
  host: "localhost",
  user: "postgres",
  password: "1234",
  database: "visiona",
});

function buscaUsuario(login, senha, res) {
  cliente.query(
    "SELECT * FROM usuarios WHERE login = '" + login + "';",
    (err, result) => {
      if (err) {
        console.log("erro query:", err);
      }
      if (result.rows.length === 1) {
        const senhaUser = result.rows.values().next().value.senha;
        const tipoUser = result.rows.values().next().value.usuariotipo;
        const statusUser = result.rows.values().next().value.status;
        const idUser    = result.rows.values().next().value.id;
        bcrypt.compare(senha, senhaUser, function(err, result) {
          if (result && statusUser === 'ativo') {
            const mensagem = 'Usuário logado com sucesso'
            const data = {msg:mensagem, tipoUser:tipoUser, id:idUser}
            res.send(data);
          } else {
            res.send({ msg: "Usuário não encontrado" });
          }
        });
      } else {
        res.send({ msg: "Usuário não encontrado" });
      }
    }
  );
}

async function existeUser(login) {
  return new Promise((resolve, reject) => {
    cliente.query(
      "SELECT * FROM usuarios WHERE login = '" + login + "';",
      (err, result) => {
        if (err) {
          console.log("erro query:", err);
          reject(err);
        } else {
          resolve(result.rowCount > 0);
        }
      }
    );
  });
}

function setUsuario(
  login,
  nome,
  senha,
  email,
  status,
  usuariotipo,
  datacadastro,
  res
) {
  bcrypt.hash(senha, 10, (err, hash) => {
    if (err) {
      res.send(err);
    } else {
      cliente.query(
        'insert into usuarios ("login", "nome", "senha", "email", "status", "usuariotipo", "datacadastro") values (' +
          "'" +
          login +
          "', '" +
          nome +
          "', '" +
          hash +
          "', '" +
          email +
          "', '" +
          status +
          "', '" +
          usuariotipo +
          "', '" +
          datacadastro +
          "');",
        (err, result) => {
          if (err) {
            console.log("erro SQL", err);
          } //else{
          //    //res.send({msg: "Usuário cadastrado com sucesso"})
          // };
        }
      );
    }
  });
}


function userAtivo(res) {
  cliente.query(
    "select * from usuarios where status = 'ativo';",
    (err, result) => {
      if (err) {
        console.log("erro query:", err);
      }
      var statusAtivo
      if (result.rows.length > 0) {
        statusAtivo = result.rows.length
        //console.log(statusAtivo+ 'ativo')
        //const data = {ativo: statusAtivo}
        //localStorage.setItem('userAtivo', statusAtivo)
        const userStatus= {userStatus:statusAtivo}
        res.send(userStatus)
      }else{
        userStatus= {userStatus:0}
        res.send(userStatus)
      }
    }
  );
}

function userInativo(res) {
  cliente.query("select * from usuarios where status = 'inativo';",
    (err, result) => {
      if (err) {
        console.log("erro query:", err);
      }
      var statusInativo
      if (result.rows.length > 0) {
        statusInativo = result.rows.length
        //console.log(statusInativo + 'inativo')
        //localStorage.setItem('userInativo', statusInativo)
        const userStatus = {userStatus:statusInativo}
        res.send(userStatus)
      }else{
        userStatus = {userStatus:0}
        res.send(userStatus)
      }
    }
  );
}


function populaUser(userId, res) {
  cliente.query(
    "SELECT * FROM usuarios WHERE id = " + userId + ";",
    (err, result) => {
      if (err) {
        console.log("erro query:", err);
      }
      if (result.rows.length === 1) {
        const senhaUser = result.rows.values().next().value.senha;
        const tipoUser = result.rows.values().next().value.usuariotipo;
        //const statusUser = result.rows.values().next().value.status;
        const nomeUser =  result.rows.values().next().value.nome;
        const loginUser = result.rows.values().next().value.login;
        const emailUser = result.rows.values().next().value.email;
        //const idUser    = result.rows.values().next().value.id;
        const mensagem = 'Usuário logado com sucesso'
        const data = {msg:mensagem, tipoUser:tipoUser, senha:senhaUser, nome:nomeUser, login:loginUser, email:emailUser }
            res.send(data);
          }else {
            res.send({ msg: "Usuário não encontrado" });
        }
    }
  );
}


// function atualizaUser(
//   login,
//   nome,
//   email,
//   datacadastro,
//   userId,
//   res
// ) {
//         cliente.query(
//           "UPDATE usuarios SET login = ?, nome = ?, email = ?, datacadastro = ? WHERE id = ?",
//           [login, nome, email, datacadastro, userId],
//         (err, result) => {
//           if (err) {
//             console.log("erro SQL", err);
//           } else{
//              res.send({msg: "Usuário cadastrado com sucesso"})
//            };
//         }
//       );
//   }

function atualizaUser(login, nome, email, datacadastro, userId, res) {
  cliente.query(
    "UPDATE usuarios SET login = '" + login + "', nome = '" + nome + "', email = '" + email + "', datacadastro = '" + datacadastro + "' WHERE id = " + userId + ";",
    (err, result) => {
      if (err) {
        console.log("erro SQL", err);
      } else{
         res.send({msg: "Usuário atualizado com sucesso."})
       };
    }
  );
}




app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  const login = req.body.login;
  const password = req.body.password;

  buscaUsuario(login, password, res);
});

app.post("/cadastro", async (req, res) => {
  const { firstname } = req.body;
  const { lastname } = req.body;
  const { login } = req.body;
  const { email } = req.body;
  const { password } = req.body;
  const { date } = req.body;
  const status = "ativo";
  const usuarioTipo = "NORMAL";

  const existee = await existeUser(login);

  if (existee === false) {
    setUsuario(
      login,
      firstname + " " + lastname,
      password,
      email,
      status,
      usuarioTipo,
      date,
      res
    );
    res.send({ msg: "Usuário cadastrado com sucesso." });
  } else {
    res.send({ msg: "Usuário ja cadastrado." });
  }
});

app.get("/getInfo", (req, res) => {
  cliente.query(
    "select * from usuarios ORDER BY dataCadastro DESC",
    (err, result) => {
      if (err) console.log(err);
      else res.json(result.rows);
    }
  );
});

// ativar/desativar usuário
app.delete("/usuarios/:login", (req, res) => {
  const login = req.params.login;
  cliente.query(
    `SELECT status FROM usuarios WHERE login = $1`,
    [login],
    (err, result) => {
      if (err) {
        console.log("erro query:", err);
        res.status(500).send({ msg: "Erro ao buscar usuário" });
      } else {
        if (result.rowCount === 0) {
          res.status(404).send({ msg: "Usuário não encontrado" });
        } else {
          const status = result.rows[0].status;
          if (status === "ativo") {
            cliente.query(
              `UPDATE usuarios SET status = 'inativo' WHERE login = $1`,
              [login],
              (err, result) => {
                if (err) {
                  console.log("erro query:", err);
                  res.status(500).send({ msg: "Erro ao desativar usuário" });
                } else {
                  res.send({ msg: "Usuário desativado com sucesso" });
                }
              }
            );
          } else {
            cliente.query(
              `UPDATE usuarios SET status = 'ativo' WHERE login = $1`,
              [login],
              (err, result) => {
                if (err) {
                  console.log("erro query:", err);
                  res.status(500).send({ msg: "Erro ao ativar usuário" });
                } else {
                  res.send({ msg: "Usuário ativado com sucesso" });
                }
              }
            );
          }
        }
      }
    }
  );
});

app.post('/editar', (req,res) => {
  const { userId } = req.body//localStorage.getItem('user');

  populaUser(userId, res)
})

app.post("/confirmarEditar", async(req, res) => {
  const { firstname } = req.body;
  const { userId } = req.body
  const { login } = req.body;
  const { email } = req.body;
  const  date = new Date().toLocaleString();

  const existee = await existeUser(login);

  if (existee === false) {

  atualizaUser(
    login,
    firstname, //+ " " + lastname,
    email,
    date,
    userId,
    res
  );
  }else{
    res.send({ msg: "Já existe um usuário com este login." });
  }});

app.get("/userAtivo", (req, res) => {

  userAtivo(res)
});
app.get("/userInativo", (req, res) => {

  userInativo(res)
});


app.listen(3001, () => {
  console.log("rodando servidor");
});
