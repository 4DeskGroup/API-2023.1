import React, { useEffect, useState } from "react";
import './CSS/alterar-senha.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

export function AlterarSenha() {
  const [values, setValues] = useState();
  const navigate = useNavigate();

  const handleChangeValues = (value) => {
    document.getElementById('btnCadastro').disabled = true

    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
    desabilitaCadastro()
  };

  useEffect(() => {
    desabilitaCadastro()
    document.getElementById("column9").style.alignItems = 'center'
    document.getElementById("column9").style.alignContent = 'center'
    document.getElementById("column9").style.marginLeft = '50%'

    document.getElementById("sub_titulo9").style.alignItems = 'center'
    document.getElementById("sub_titulo9").style.alignContent = 'center'
    document.getElementById("sub_titulo9").style.marginLeft = '0%'
  })

  function senhasIncompativeis() {
    if (document.getElementById('obg5').value !== document.getElementById('obg6').value) {
      console.log("senhas incompativeis");
      document.getElementById("obg6").style.borderColor = "red";
      document.getElementById("obg5").style.borderColor = "red";
      document.getElementById("password-warning").style.display = "block"
      document.getElementById("password-warning1").style.display = "block"
    }
    else {
      console.log("senhas compativeis");
      document.getElementById("obg6").style.borderColor = "green";
      document.getElementById("obg5").style.borderColor = "green";
      document.getElementById("password-warning").style.display = "none"
      document.getElementById("password-warning1").style.display = "none"
    }
  }

  function desabilitaCadastro() {
    if (validaVazio() === true || validaSenha() === false) {
      document.getElementById('btnCadastro').disabled = true
      document.getElementById('btnCadastro').style.background = 'rgb(250, 186, 75)'
      document.getElementById('btnCadastro').style.cursor = 'not-allowed'
    } else {
      document.getElementById('btnCadastro').disabled = false
      document.getElementById('btnCadastro').style.background = 'rgb(255, 165, 0)'
      document.getElementById('btnCadastro').style.cursor = 'pointer'
    }
  }

  const validaVazio = () => {
    let isVazio = false
    if (document.getElementById('obg5').value === '') {
      isVazio = true
      return isVazio
    }
    if (document.getElementById('obg6').value === '') {
      isVazio = true
      return isVazio
    }
  }

  const limpaCampos = () => {
    document.getElementById('obg6').style.borderColor = 'orange'
    document.getElementById('obg5').style.borderColor = 'orange'
  }

  const validaSenha = () => {
    if (document.getElementById('obg5').value !== document.getElementById('obg6').value) {
      let isIgual = false
      return isIgual
    } else {
      let isIgual = true
      return isIgual
    }
  }

  const handleClickButton = () => {
    axios.post("http://localhost:3001/alterarSenha", {
      email: localStorage.getItem('userEmail'),
      password: values.password
    }).then((response) => {
      if (response.data.msg === 'ERRO NA ALTERAÇÃO DA SENHA.') {
        Swal.fire({
          icon: 'error',
          title: 'Erro',
          text: response.data.msg,
        })
      }
      if (response.data.msg === 'Senha alterada com sucesso!') {
        Swal.fire(
          'Sucesso!',
          response.data.msg,
          'success'
        ).then(function () {
          navigate('/')
        })
      }
    });
  }

  return (
    <div className="form-body">
      
      <div className="cabecalho9">
        <div className="container_linha9">
          <p className="cad_titulo9">Trocar senha</p>
        </div>
      </div>

      <form className="form9">
        <div className="container-form9">
          <p className="sub_titulo9" id='sub_titulo9'>
            Preencha os campos abaixo com sua nova senha
          </p>
          <div className="row9">
            <div className="column9" id='column9'>
              <input
                id="obg5"
                type="password"
                name="password"
                className="name--input"
                onChange={handleChangeValues}
                placeholder="Senha"
              />

              <div
                id="password-warning1"
                style={{ display: "none", position: "absolute", marginLeft: "70px", marginTop: "110px", fontSize: "13px" }}
              >
                Senhas incompativeis
              </div>

              <input id="obg6"
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
                style={{ display: "none", position: "absolute", marginLeft: "365px", marginTop: "110px", fontSize: "13px" }}
              >
                Senhas incompativeis
              </div>
            </div>
          </div>
        </div>
        <div className="botoes9" onLoad='desabilitaCadastro()'>
          <button onClick={() => [navigate('/')]}>voltar</button>
          <button id='btnCadastro' type="button" className="register--button9"
            onClick={() => handleClickButton()}> cadastrar </button>
        </div>
      </form>
    </div>
  );
}