const express = require("express");
const app = express();
const { Pool } = require("pg");
const cors = require("cors");
const bcrypt = require("bcrypt");

const cliente = new Pool({
  host: "localhost",
  user: "postgres",
  password: "123",
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
        const senhaD = result.rows.values().next().value.senha;
        bcrypt.compare(senha, senhaD, function(err, result) {
          if (result) {
            res.send({ msg: "Usuário logado com sucesso" });
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
  const usuarioTipo = "ADM";

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
    "select login, status, usuarioTipo, dataCadastro from usuarios ORDER BY dataCadastro DESC",
    (err, result) => {
      if (err) console.log(err);
      else res.json(result.rows);
    }
  );
});

//ativar/desativar usuário
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

app.listen(3001, () => {
  console.log("rodando servidor");
});
