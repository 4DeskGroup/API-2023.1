import React, { useEffect, useState } from "react";
import './CSS/form.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { MDBCheckbox } from 'mdb-react-ui-kit';

export function EdicaoInutil() {

  
    // window.onload = function(){
    //     axios.post("http://localhost:3001/editar",{
    //         userId: userId

    //     }).then((response)=>{
    //         document.getElementById('obg1').value = response.data.login
    //         document.getElementById('obg2').value = response.data.nome
    //         //document.getElementById('obg3').value = 
    //         document.getElementById('obg4').value = response.data.email
    //         //document.getElementById('obg5').value = response.data.senha
            
    //     })
    // }


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
          //desabilitaCadastro()
          // const logUserDataJson = localStorage.getItem('userData')
          // const logUserData = JSON.parse(logUserDataJson);
          // console.log(logUserData);
        })
        desabilitaCadastro()
        
        //console.log(JSON.parse(dataUserJson));
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
    //   if(document.getElementById('obg3').value === ''){
    //     isVazio = true
    //     return isVazio
    //   }
      if(document.getElementById('obg4').value === ''){
        isVazio = true
        return isVazio
      }
    //   if(document.getElementById('obg5').value === ''){
    //     isVazio = true
    //     return isVazio
    //   }
    //   if(document.getElementById('obg6').value === ''){
    //     isVazio = true
    //     return isVazio
    //   }
    }

    // const limpaCampos = ()=>{
    //   document.getElementById('obg1').value = ''
    //   document.getElementById('obg2').value = ''
    //   document.getElementById('obg3').value = ''
    //   document.getElementById('obg4').value = ''
    //   document.getElementById('obg5').value = ''
    //   document.getElementById('obg6').value = ''
    //   document.getElementById('obg6').style.borderColor = 'orange'
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

    const handleClickButton = () =>{
      
        desabilitaCadastro()
        const date = new Date().toLocaleString();
        axios.post("http://localhost:3001/confirmarEditar", {
          login: document.getElementById('obg1').value,
          firstname: document.getElementById('obg2').value,
          userId : userId,
          email: document.getElementById('obg4').value,
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
          }
        });
    }

    return (
      
      <div>
        <div className="cabecalho2">
          <div className="container_linha2">
            <p className="cad_titulo2">Edite suas informações</p>
          </div>
        </div>
        <form className="form2">
          <div className="container2">
            <p className="sub_titulo2">
              Preencha os campos abaixo com seus dados:
            </p>
            <div className="row2">
              <div className="column2">
              <input id="obg1"
                  type="login"
                  name="login"
                  className="login--input"
                  onChange={handleChangeValues}
                  placeholder="Login"
                />
                <input id="obg2"
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
                  name="tipo"
                  className="name--input"
                  onChange={handleChangeValues}
                  placeholder="Tipo"
                />{/*
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
              <div className="conteiner_termo2">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Li e aceito os termos de acesso'/>
              {/* 
                <div className="termosAcesso2">
                  <input type="checkbox" className="checkbox2" id="checkbox"/>
                  <label for="checkbox" className="acesso_txt2">
                    Li e aceito os termos de acesso
                  </label>
                </div>
               */}
               </div>
            </div>
          </div>

          <div className="botoes2" onLoad='desabilitaCadastro()'>
            <button onClick={()=>[navigate ('/welcome')]}>voltar</button>
            <button id = 'btnCadastro' type="button" className="register--button2" 
            onClick={()=>handleClickButton()}> Confirmar </button>
          </div>
        </form>
      </div>
    );
}
