import React, { useState, useEffect } from "react";
import './CSS/token.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { MDBCheckbox } from 'mdb-react-ui-kit';

export function Token(){
  const [values, setValues] = useState();
  const navigate = useNavigate();

  const handleChangeValues = (value)=>{
    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
    desabilitaCadastro()
  };

  useEffect(()=>{
    desabilitaCadastro()
    })

  function desabilitaCadastro(){
    if(validaVazio() === true){
      document.getElementById('btnCadastro').disabled = true
      document.getElementById('btnCadastro').style.background = 'rgb(250, 186, 75)'
      document.getElementById('btnCadastro').style.cursor = 'not-allowed'
    }else{
      document.getElementById('btnCadastro').disabled = false
      document.getElementById('btnCadastro').style.background = 'rgb(255, 165, 0)'
      document.getElementById('btnCadastro').style.cursor = 'pointer'
    }
  }
  
  const validaVazio = () => {
    let isVazio = false
    if(document.getElementById('obg1').value === ''){
      isVazio = true
      return isVazio
    }
  }

  const reenviarToken = ()=>{
        axios.post('http://localhost:3001/enviar-token',{
            email: localStorage.getItem('userEmail')
          }).then((response)=>{
            localStorage.setItem('token', response.data.token)
            Swal.fire(
                'Sucesso!',
                `email enviado para ${localStorage.getItem('userEmail')}`,
                'success'
              ).then(function(){
                navigate ('/validaToken')
              })
          })
  }

  var token = localStorage.getItem('token')
  const handleClickButton = () =>{
    let loginEscrevido = values.login
    if (loginEscrevido === token){
      Swal.fire(
        'Sucesso!',
       "Token validado com sucesso.",
        'success'
      ).then(function(){
        navigate('/alterarSenha')
      })
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: "Token invalido",
      })
    }
      
  }
    return (
        <form className="form3">
          <div className="container-form3">
            <p className="sub_titulo3">
              Token de Autenticação
            </p>
            <p className="sub_titulo4">
            Enviamos um código Token para seu email
            </p>
            <p className="sub_titulo5">
            Insira o Token para :
            </p>
            <div className="row3">
              <div className="column3">
              <input id="obg1"
                  type="login"
                  name="login"
                  className="login--input"
                  onChange={handleChangeValues}
                  placeholder="Token"
                />
              </div>
            </div>
          </div>
          <div className="botoes3">
            <button id = 'btnReenviaToken' type="button" className="reenvia--button3"  onClick={()=>reenviarToken()}> reenviar token</button>
            <button id = 'btnCadastro' type="button" className="register--button3"  onClick={()=>handleClickButton()}> validar token </button>
          </div>
        </form>
      
    );
}

  