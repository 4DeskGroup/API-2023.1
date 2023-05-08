import React, { useEffect, useState } from "react";
import './CSS/edicao.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { MDBCheckbox } from 'mdb-react-ui-kit';
import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";

export function Edicao() {

    var userId = localStorage.getItem('user')
    var carrega = true
    useEffect(()=>{
        axios.post("http://localhost:3001/editar",{
            userId: userId
        }).then((response)=>{
          console.log(response);
            document.getElementById('obg1').value = response.data.login
            document.getElementById('obg2').value = response.data.nome
            document.getElementById('obg4').value = response.data.email
            document.getElementById('obg5').value = response.data.tipoUser 
            document.getElementById('obg5').disabled = true
            document.getElementById('obg5').style.background = '#d0cece'
           
            const loginUserData =  response.data.login
            const nomeUserData = response.data.nome
            const emailUserData = response.data.email
            const tipoUserData = response.data.tipoUser

            console.log(loginUserData);
            const dataUser = {loginData:loginUserData, nomeData: nomeUserData, emailData:emailUserData, tipoData: tipoUserData}
            localStorage.setItem('userData', JSON.stringify(dataUser))
            console.log(tipoUserData);
        }).then(function(){

        })
        desabilitaCadastro()
    }, []);


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

 

    function dataIgual(){
      const dataUserJson = localStorage.getItem('userData')
      const dataUser = (dataUserJson);
      const dataLogin = dataUser.loginData
      const dataNome = dataUser.nomeData
      const dataEmail = dataUser.emailData
      console.log(dataLogin);
      console.log(dataNome);
      console.log(dataEmail);
      if(document.getElementById('obg1').value !== dataLogin || document.getElementById('obg2').value !== dataNome || document.getElementById('obg3').value !== dataEmail){
        return false
      }
      return true
    }

    function desabilitaCadastro(){
      if(validaVazio() === true || dataIgual() === true ){
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
      if(document.getElementById('obg4').value === ''){
        isVazio = true
        return isVazio
      }
    }

    const handleClickButton = () =>{
      
        desabilitaCadastro()
        const date = new Date().toLocaleString();
        axios.post("http://localhost:3001/confirmarEditar", {
          login: document.getElementById('obg1').value,
          firstname: document.getElementById('obg2').value,
          userId : userId,
          email: document.getElementById('obg4').value,
          date: date,
          tipo: document.getElementById('obg5').value
        }).then((response)=>{
          if (response.data.msg === ''){
            Swal.fire({
              icon: 'error',
              title: 'Erro',
              text: response.data.msg,
            })
          }
          if (response.data.msg === 'Usuário atualizado com sucesso.'){
          Swal.fire(
            'Sucesso!',
            response.data.msg,
            'success'
          ).then(function(){
            navigate ('/welcome')
          })
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Erro',
              text: response.data.msg,
            })
          }
        });
    }

    return (
      
      <div className="fundo">
      <Navbar/>
      
        <div className="cabecalho2Editar">
          <div className="container_linha2Editar">
            <h1>Editar informações</h1>
            <hr className='title-hrEditar'></hr>
          </div>
        </div>
        <form className="form2">
          <div className="container2">
            <p className="sub_titulo2Editar">
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
                <label className="label2">Tipo</label>
                <input id="obg5"
                  type="input"
                  name="tipoUsuario"
                  className="TipoUsuario--input"
                  onChange={handleChangeValues}
                  placeholder="Tipo do Usuário"
                />
                </div>
              </div>
          </div>

          <div className="botoes2Editar" onLoad='desabilitaCadastro()'>
            <button onClick={()=>[navigate ('/welcome')]}>voltar</button>
            <button id = 'btnCadastro' type="button" className="register--button2" 
            onClick={()=>handleClickButton()}> Confirmar </button>
          </div>
        </form>
        
        <BottomNavbar/>
        </div>
       
      
    );
}

