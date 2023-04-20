import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";
import React, { useState } from "react";
import './CSS/edicao.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
//Swal = require('sweetalert2')


export function Edicao() {
    const [values, setValues] = useState();
    const navigate = useNavigate();
    const handleChangeValues = (value)=>{
      document.getElementById('btnCadastro').disabled = true
      
      setValues(prevValue=>({
        ...prevValue,
        [value.target.name]: value.target.value,
      }))
      desabilitaCadastro()
      
    };

    function senhasIncompativeis(){
      if(document.getElementById('obg5').value !== document.getElementById('obg6').value){
        console.log('senhas incompativeis');
        document.getElementById('obg6').style.borderColor = 'red'
        document.getElementById('obg5').style.borderColor = 'red'
      }
      else{
        console.log('senhas compativeis');
        document.getElementById('obg6').style.borderColor = 'green'
        document.getElementById('obg5').style.borderColor = 'green'
      }
    }

    function desabilitaCadastro(){
      if(validaVazio() === true || validaSenha() === false){
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
      if(document.getElementById('obg2').value === ''){
        isVazio = true
        return isVazio
      }
      if(document.getElementById('obg3').value === ''){
        isVazio = true
        return isVazio
      }
      if(document.getElementById('obg4').value === ''){
        isVazio = true
        return isVazio
      }
      if(document.getElementById('obg5').value === ''){
        isVazio = true
        return isVazio
      }
      if(document.getElementById('obg6').value === ''){
        isVazio = true
        return isVazio
      }
    }

    const limpaCampos = ()=>{
      document.getElementById('obg1').value = ''
      document.getElementById('obg2').value = ''
      document.getElementById('obg3').value = ''
      document.getElementById('obg4').value = ''
      document.getElementById('obg5').value = ''
      document.getElementById('obg6').value = ''
      document.getElementById('obg6').style.borderColor = 'orange'
      document.getElementById('obg5').style.borderColor = 'orange'
    }

    const validaSenha = ()=>{
      if (document.getElementById('obg5').value !== document.getElementById('obg6').value){
        let isIgual = false
        return isIgual
      }else{
        let isIgual = true
        return isIgual
      }

    }

    const handleClickButton = () =>{
      
        desabilitaCadastro()
        const date = new Date().toLocaleString();
        axios.post("http://localhost:3001/cadastro", {
          login: values.login,
          firstname: values.firstname,
          lastname: values.lastname,
          email: values.email,
          password: values.password,
          date: date
        }).then((response)=>{
          if (response.data.msg === 'Usuario ja cadastrado.'){
            Swal.fire({
              icon: 'error',
              title: 'Erro',
              text: response.data.msg,
            })
          }
          if (response.data.msg === 'Usuário cadastrado com sucesso.'){
          limpaCampos()
          Swal.fire(
            'Sucesso!',
            response.data.msg,
            'success'
          )
          }
        });
        }

    return (
      
      <div className="fundo">
      <Navbar/>
      
        <div className="cabecalho2">
          <div className="container_linha2">
            <h1>Editar informações</h1>
            <hr className='title-hr'></hr>
          </div>
        </div>
        <form className="form2">
          <div className="container2">
            <p className="sub_titulo2">
              Verifique os dados, caso necessário corrija-os.
            </p>
            <div className="row2">
              <div className="column2">
                <label className="label1">Login</label>
              <input id="obg1"
                  type="login"
                  name="login"
                  className="login--input"
                  onChange={handleChangeValues}
                  placeholder="Login"
                />
                <label className="label1">Nome</label>
                <input id="obg2"
                  type="firstname"
                  name="firstname"
                  className="fname--input"
                  onChange={handleChangeValues}
                  placeholder="Nome"
                />
                
              </div>
              <div className="column2">
                <label className="label2">E-mail</label>
                <input
                  id="obg4"
                  type="email"
                  name="email"
                  className="email--input"
                  onChange={handleChangeValues}
                  placeholder="E-mail"
                />
                <label className="label2">Data de cadastro</label>
                <input id="obg3"
                  type="date"
                  name="date"
                  className="ldate--input"
                  onChange={handleChangeValues}
                  placeholder="Data de cadastro"
                />
              {/*}  <input
                  id="obg5"
                  type="password"
                  name="password"
                  className="name--input"
                  onChange={handleChangeValues}
                  placeholder="Senha"
                />
                <input  id="obg6"
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

          <div className="botoes2" onLoad='desabilitaCadastro()'>
            <button onClick={()=>[navigate ('/')]}>voltar</button>
            <button id = 'btnCadastro' type="button" className="register--button2" 
            onClick={()=>handleClickButton()}> confirmar </button>
          </div>
        </form>
        
        <BottomNavbar/>
        </div>
       
      
    );
}
