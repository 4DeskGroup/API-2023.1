import React, { useState, useEffect } from "react";
import './CSS/form.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { MDBCheckbox } from 'mdb-react-ui-kit';

export function ValidaToken() {

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
         "Token validado com sucesso aeeeew",
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
      
      <div className="form-body">
        <div className="cabecalho2">
          <div className="container_linha2">
            <p className="cad_titulo2">Validar token</p>
          </div>
        </div>
        <form className="form2">
          <div className="container-form">
            <p className="sub_titulo2">
              Insira abaixo o token que foi enviado ao seu email
            </p>
            <div className="row2">
              <div className="column2">
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

          <div className="botoes2">
            {/* <button onClick={()=>[navigate ('/')]}>voltar</button> */}
            <button id = 'btnReenviaToken' type="button" className="reenvia--button2" 
            onClick={()=>reenviarToken()}> reenviar token</button>
            <button id = 'btnCadastro' type="button" className="register--button2" 
            onClick={()=>handleClickButton()}> validar token </button>
          </div>
        </form>
      </div>
    );
}