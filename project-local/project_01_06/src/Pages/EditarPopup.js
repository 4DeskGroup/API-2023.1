import React, { useEffect, useState } from "react";
import "./CSS/pop-up-css.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
//Swal = require('sweetalert2')

export function EditarPopup() {
  // combobox
  const tableDataJson = localStorage.getItem("tableUser");
  const tableData = JSON.parse(tableDataJson);
  const [selectedOption, setSelectedOption] = useState(tableData.tableTipo); // estado para armazenar a opção selecionada

  const handleChangeOption = (event) => {
    setSelectedOption(event.target.value); // atualiza o estado com a opção selecionada
    console.log(event.target.value);
  };
  
  // popular campos
  useEffect(() => {
    const tableDataJson = localStorage.getItem("tableUser");
    const tableData = JSON.parse(tableDataJson);
    console.log(tableData);

    document.getElementById("obg1").value = tableData.tableLogin;
    document.getElementById("obg2").value = tableData.tableNome;
    document.getElementById("obg4").value = tableData.tableEmail;
    document.getElementById("obg9").value = tableData.tableTipo;
    console.log("tip: ", document.getElementById("obg9").value);

  }, []);
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

  // function senhasIncompativeis(){
  //   if(document.getElementById('obg5').value !== document.getElementById('obg6').value){
  //     console.log('senhas incompativeis');
  //     document.getElementById('obg6').style.borderColor = 'red'
  //     document.getElementById('obg5').style.borderColor = 'red'
  //   }
  //   else{
  //     console.log('senhas compativeis');
  //     document.getElementById('obg6').style.borderColor = 'green'
  //     document.getElementById('obg5').style.borderColor = 'green'
  //   }
  // }

  function desabilitaCadastro() {
    if (validaVazio() === true) {
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
    // if(document.getElementById('obg3').value === ''){
    //   isVazio = true
    //   return isVazio
    // }
    if (document.getElementById("obg4").value === "") {
      isVazio = true;
      return isVazio;
    }
    // if (document.getElementById("obg5").value === "") {
    //   isVazio = true;
    //   return isVazio;
    // }
    // if(document.getElementById('obg6').value === ''){
    //   isVazio = true
    //   return isVazio
    // }
  };

  // const limpaCampos = ()=>{
  //   document.getElementById('obg1').value = ''
  //   document.getElementById('obg2').value = ''
  //   // document.getElementById('obg3').value = ''
  //   document.getElementById('obg4').value = ''
  //   document.getElementById('obg5').value = ''
  //   // document.getElementById('obg6').value = ''
  //   // document.getElementById('obg6').style.borderColor = 'orange'
  //   document.getElementById('obg5').style.borderColor = 'orange'
  // }

  // const validaSenha = ()=>{
  //   if (document.getElementById('obg5').value !== document.getElementById('obg6').value){
  //     let isIgual = false
  //     return isIgual
  //   }else{
  //     let isIgual = true
  //     return isIgual
  //   }

  // }

  const handleClickButton = () => {
    const tableDataJson = localStorage.getItem("tableUser");
    const tableData = JSON.parse(tableDataJson);
    desabilitaCadastro();
    axios
      .post("http://localhost:3001/confirmarEditar", {
        login: document.getElementById("obg1").value,
        firstname: document.getElementById("obg2").value,
        userId: tableData.tableId,
        email: document.getElementById("obg4").value,
        tipo: document.getElementById("obg9").value
      })
      .then((response) => {
        if (response.data.msg === "") {
          Swal.fire({
            icon: "error",
            title: "Erro",
            text: response.data.msg,
          });
        }
        if (response.data.msg === "Usuário atualizado com sucesso.") {
          Swal.fire("Sucesso!", response.data.msg, "success").then(function() {
            navigate("/welcome");
          });
        }
      });
  };

  return (
    <form className="form-pop-up">
      <div className="container-pop">
        <p className="sub_titulo-edit">
          Edite as informações do usuário selecionado:
        </p>
        <div className="row2">
          <div className="column2">
            <label for="nome" class="input-labelp0">
              Login:
            </label>
            <input
              id="obg1"
              type="login"
              name="login"
              className="login--input"
              onChange={handleChangeValues}
              placeholder="Login"
            />
            <label for="nome" class="input-labelp1">
              Nome:
            </label>
            <input
              id="obg2"
              type="firstname"
              name="firstname"
              className="fname--input"
              onChange={handleChangeValues}
              placeholder="Nome"
            />
            {/* <input id="obg3"
                  type="lastname"
                  name="lastname"
                  className="lname--input"
                  onChange={handleChangeValues}
                  placeholder="Sobrenome"
                /> */}
          </div>
          <div className="column2">
            <label for="nome" class="input-labelp2">
              E-mail:
            </label>
            <input
              id="obg4"
              type="email"
              name="email"
              className="email--input"
              onChange={handleChangeValues}
              placeholder="E-mail"
            />
            <label for="nome" class="input-labelp3">
              Tipo:
            </label>
            <select className="cbx"
              id="obg9"
              value={selectedOption}
              onChange={handleChangeOption}
            >
              <option value="ADM">ADM</option>
              <option value="NORMAL">NORMAL</option>
            </select>
            {/* <input  id="obg6"
                  type="password"
                  name="confirmpassword"
                  className="confirmpassword--input"
                  onChange={(event) => {
                    handleChangeValues(event);
                    senhasIncompativeis(event);
                  }}
                  
                  placeholder="Confirmar Senha"
                /> */}
          </div>
          {/* <div className="conteiner_termo2">
                <div className="termosAcesso2">
                  <input type="checkbox" className="checkbox2" id="checkbox"/>
                  <label for="checkbox" className="acesso_txt2">
                    Li e aceito os termos de acesso
                  </label>
                </div>
              </div> */}
        </div>
      </div>

      <div className="botoes2-edit" onLoad="desabilitaCadastro()">
        <button onClick={() => [navigate("/tabela")]}>voltar</button>
        <button
          id="btnCadastro"
          type="button"
          className="register--button2"
          onClick={() => handleClickButton()}
        >
          {" "}
          editar{" "}
        </button>
      </div>
    </form>
  );
}
