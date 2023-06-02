import React, { useState } from "react";
import './CSS/enviar_login.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


export function EnviarLogin(){

  const [values, setValues] = useState();
  const navigate = useNavigate();

  const handleChangeValues = (value)=>{
    
    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  };

  const handleClickButton = () =>{

      axios.post("http://localhost:3001/procuraEmail", {
        login: values.login
      }).then((response)=>{
        localStorage.setItem('userEmail', response.data.emailUser)
        if(response.data.msg === 'Email pego com sucesso.'){
          Swal.fire({
            icon: 'Sucesso',
            title: 'Sucesso',
            text: response.data.msg,
          })
      }
        }).then(()=>{
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
      })
      var loginToken = values.login
      localStorage.setItem('loginToken', loginToken)
  }

    return (
        <form className="form4-login-senha">
          <div className="container-form4-login-senha">
            <p className="sub_titulo4-login-senha">
              Enviar Token
            </p>
            <p className="sub_titulo5-login-senha">
            Para recuperar sua senha, informe seu login
            </p>
            <p className="sub_titulo6-login-senha">
            Insira o Login:
            </p>
            <div className="row4-login-senha">
              <div className="column4-login-senha">
              <input id="obg1"
                  type="login"
                  name="login"
                  className="login--input-login-senha"
                  onChange={handleChangeValues}
                  placeholder="Login"
                />
              </div>
            </div>
          </div>
          <div className="botoes4-login-senha">
            <button id = 'btnReenviaToken' type="button" className="reenvia--button4-login-senha" onClick={()=>[navigate ('/')]} > voltar</button>
            <button id = 'btnCadastro' type="button" className="register--button4-login-senha" onClick={()=>handleClickButton()}> enviar token </button>
          </div>
        </form>
      
    );
}

  