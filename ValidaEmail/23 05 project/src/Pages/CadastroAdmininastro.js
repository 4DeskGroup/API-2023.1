import React, { useState, useEffect } from "react";
import "./CSS/pop-up-css.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MDBCheckbox } from "mdb-react-ui-kit";
import Navbar from "../components/Navbar";


export function CadastroAdmininastro() {


  useEffect(() => {
    desabilitaCadastro();
  });
  const [values, setValues] = useState();
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState();
  var filtroSelecionado = selectedOption;

  // set opção selecionada na cbx
  const handleChangeOption = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleChangeValues = (value) => {
    document.getElementById("btnCadastro").disabled = true;

    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
    desabilitaCadastro();
  };

  function desabilitaCadastro() {
    if (validaVazio() === true) { //|| validaSenha() === false) {
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
  };

  const limpaCampos = () => {
    document.getElementById("obg1").value = "";
    document.getElementById("obg2").value = "";
    document.getElementById("obg3").value = "";
    document.getElementById("obg4").value = "";
    document.getElementById("obg5").value = "";
  };

  const handleClickButton = () => {
    desabilitaCadastro();
    const date = new Date().toLocaleString();
    axios
      .post("http://localhost:3001/cadastroADM", {
        login: values.login,
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        password: values.password,
        usuarioTipo: document.getElementById('obg7').value,
        date: date,
      })
      .then((response) => {
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
  };

  return (
    <>
      <Navbar />
      <div className="form-body">
        <div className="container3">
          <div className="titulo3">
            <div className="title-container3">
              <h1>Cadastrar novo usuário</h1>
              <hr className="title-hr3" />
            </div>



            <div className="container-form">
              <p className="sub_titulo2">
                Preencha os campos abaixo com os dados:
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
                      // senhasIncompativeis(event);
                    }}
                    placeholder="Senha"
                  />

                  <select className="cbx"
                    id="obg7"
                    value={selectedOption}
                    onChange={handleChangeOption}
                  >
                    <option value="ADM">ADM</option>
                    <option value="NORMAL">NORMAL</option>
                  </select>
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

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CadastroAdmininastro;

