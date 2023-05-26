import React, { useState, useEffect } from "react";
import "./CSS/form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MDBCheckbox } from "mdb-react-ui-kit";

export function Form() {
  useEffect(() => {
    desabilitaCadastro();
  });
  const [values, setValues] = useState();
  const navigate = useNavigate();
  const handleChangeValues = (value) => {
    document.getElementById("btnCadastro").disabled = true;

    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
    desabilitaCadastro();
  };

  function senhasIncompativeis() {
    if(document.getElementById("obg6").value !== ''){

    if (
      document.getElementById("obg5").value !==
      document.getElementById("obg6").value
    ) {
      console.log("senhas incompativeis");
      document.getElementById("obg6").style.borderColor = "red";
      document.getElementById("obg5").style.borderColor = "red";
      document.getElementById("password-warning").style.display = "block"
      document.getElementById("password-warning1").style.display = "block"
    }
    if (document.getElementById("obg5").value ===
    document.getElementById("obg6").value){
      console.log("senhas compativeis");
      document.getElementById("obg6").style.borderColor = "green";
      document.getElementById("obg5").style.borderColor = "green";
      document.getElementById("password-warning").style.display = "none"
      document.getElementById("password-warning1").style.display = "none"
    }
  } else {
    document.getElementById("obg6").style.borderColor = "orange";
      document.getElementById("obg5").style.borderColor = "orange";
      document.getElementById("password-warning").style.display = "none"
      document.getElementById("password-warning1").style.display = "none"
  }

  }

  function desabilitaCadastro() {
    if (validaVazio() === true || validaSenha() === false) {
      document.getElementById("btnCadastro").disabled = true;
      document.getElementById("btnCadastro").style.background =
        "rgb(250, 186, 75)";
      document.getElementById("btnCadastro").style.cursor = "not-allowed";
    } else {
      document.getElementById("btnCadastro").disabled = false;
      document.getElementById("btnCadastro").style.background =
        "rgb(255, 165, 0)";
      document.getElementById("btnCadastro").style.cursor = "pointer";
    }
  }

  const validaVazio = () => {
    let isVazio = false;
    if (document.getElementById("obg1").value === "") {
      isVazio = true;
      return isVazio;
    }
    if (document.getElementById("obg2").value === "") {
      isVazio = true;
      return isVazio;
    }
    if (document.getElementById("obg3").value === "") {
      isVazio = true;
      return isVazio;
    }
    if (document.getElementById("obg4").value === "") {
      isVazio = true;
      return isVazio;
    }
    if (document.getElementById("obg5").value === "") {
      isVazio = true;
      return isVazio;
    }
    if (document.getElementById("obg6").value === "") {
      isVazio = true;
      return isVazio;
    }
  };

  const limpaCampos = () => {
    document.getElementById("obg1").value = "";
    document.getElementById("obg2").value = "";
    document.getElementById("obg3").value = "";
    document.getElementById("obg4").value = "";
    document.getElementById("obg5").value = "";
    document.getElementById("obg6").value = "";
    document.getElementById("obg6").style.borderColor = "orange";
    document.getElementById("obg5").style.borderColor = "orange";
  };

  const validaSenha = () => {
    if (
      document.getElementById("obg5").value !==
      document.getElementById("obg6").value
    ) {
      let isIgual = false;
      return isIgual;
    } else {
      let isIgual = true;
      return isIgual;
    }
  };

  const validaEmail = async () => {
    try {
      const response = await axios.post("http://localhost:3001/validaEmail", {
        email: values.email,
        login: values.login
      });
  
      if (response.data.msg === 'Usuário ja cadastrado.') {
        Swal.fire({
          icon: "error",
          title: "Erro",
          text: 'Usuário já cadastrado.',
        });
        limpaCampos();
        return false;
      }
  
      if (response.data.msg === "E-mail enviado.") {
        localStorage.setItem('TokenValidaEmail', response.data.token);
  
        return new Promise((resolve, reject) => {
          Swal.fire({
            icon: "success",
            title: "Um token foi enviado ao seu email, insira-o abaixo",
            html: `<input type="text" id="token" class="swal2-input" placeholder="Token">`,
            preConfirm: () => {
              var tokenEscrito = Swal.getPopup().querySelector('#token').value;
              return { tokenEscrito: tokenEscrito };
            }
          }).then((result) => {
            if (result.value.tokenEscrito === localStorage.getItem('TokenValidaEmail')) {
              resolve(true);
            } else {
              Swal.fire({
                icon: "error",
                title: "Erro",
                text: 'Token inválido.',
              });
              limpaCampos();
              resolve(false);
            }
          }).catch((error) => {
            reject(error);
          });
        });
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  
  const handleClickButton = async () => {
    desabilitaCadastro();
    const date = new Date().toLocaleString();
    if (await validaEmail()) {
      // console.log('Ta vindo aqui');
      axios.post("http://localhost:3001/cadastro", {
          login: values.login,
          firstname: values.firstname,
          lastname: values.lastname,
          email: values.email,
          password: values.password,
          date: date,
        })
        .then((response) => {
          console.log('response.data.msg');
          if (response.data.msg === "Usuário ja cadastrado.") {
            Swal.fire({
              icon: "error",
              title: "Erro",
              text: response.data.msg,
            });
          }
          if (response.data.msg === "Usuário cadastrado com sucesso.") {
            limpaCampos();
            Swal.fire("Sucesso!", response.data.msg, "success");
          }
        });
    }
  };
  

  return (
    <div className="form-body">
      <div className="cabecalho2">
        <div className="container_linha2">
          <p className="cad_titulo2">Cadastre-se</p>
        </div>
      </div>
      <form className="form2">
        <div className="container-form">
          <p className="sub_titulo2">
            Preencha os campos abaixo com seus dados:
          </p>
          <div className="row2">
            <div className="column2">
              <input
                id="obg1"
                type="login"
                name="login"
                className="login--input"
                onChange={handleChangeValues}
                placeholder="Login"
              />
              <input
                id="obg2"
                type="firstname"
                name="firstname"
                className="fname--input"
                onChange={handleChangeValues}
                placeholder="Nome"
              />
              <input
                id="obg3"
                type="lastname"
                name="lastname"
                className="lname--input"
                onChange={handleChangeValues}
                placeholder="Sobrenome"
              />
            </div>
            <div className="column2">
              <input
                id="obg4"
                type="email"
                name="email"
                className="email--input"
                onChange={handleChangeValues}
                placeholder="E-mail"
              />
              <input
                id="obg5"
                type="password"
                name="password"
                className="name--input"
                onChange={(event) => {
                  handleChangeValues(event);
                  senhasIncompativeis(event);
                }}
                placeholder="Senha"
              />
              <div
                id="password-warning1"
                style={{ display: "none", position: "absolute", marginLeft: "100px", marginTop: "110px", fontSize: "13px"}}
              >
                Senhas incompativeis
              </div>
              <input
                id="obg6"
                type="password"
                name="confirmpassword"
                className="confirmpassword--input"
                onChange={(event) => {
                  handleChangeValues(event);
                  senhasIncompativeis(event);
                }}
                placeholder="Confirmar Senha"
              />
              <div
                id="password-warning"
                style={{ display: "none", position: "absolute", marginLeft: "100px", marginTop: "180px", fontSize: "13px"}}
              >
                Senhas incompativeis
              </div>
            </div>
          </div>
        </div>

        <div className="botoes2" onLoad="desabilitaCadastro()">
          <div className="conteiner_termo2">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Li e aceito os termos de acesso"
            />
          </div>
          {/* 
                <div className="termosAcesso2">
                  <input type="checkbox" className="checkbox2" id="checkbox"/>
                  <label for="checkbox" className="acesso_txt2">
                    Li e aceito os termos de acesso
                  </label>
                </div>
               */}

          <button onClick={() => [navigate("/")]}>voltar</button>
          <button
            id="btnCadastro"
            type="button"
            className="register--button2"
            onClick={() => handleClickButton()}
          >
            {" "}
            cadastrar{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
