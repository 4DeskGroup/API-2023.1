import React, { useEffect, useState } from "react";
<<<<<<< HEAD:projeto/src/Pages/edicao.js
import './CSS/edicao.css'
=======
import './CSS/form.css'
>>>>>>> aa6dc178888ac20dd628c1784dad6c159453e4f3:API-2023.1-all_doneCARLOS/src/Pages/edicao.js
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { MDBCheckbox } from 'mdb-react-ui-kit';
<<<<<<< HEAD:projeto/src/Pages/edicao.js
import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";

export function Edicao() {

=======

export function Edicao() {

  
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


>>>>>>> aa6dc178888ac20dd628c1784dad6c159453e4f3:API-2023.1-all_doneCARLOS/src/Pages/edicao.js
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
<<<<<<< HEAD:projeto/src/Pages/edicao.js

        })
        desabilitaCadastro()
=======
          //desabilitaCadastro()
          // const logUserDataJson = localStorage.getItem('userData')
          // const logUserData = JSON.parse(logUserDataJson);
          // console.log(logUserData);
        })
        desabilitaCadastro()
        
        //console.log(JSON.parse(dataUserJson));
>>>>>>> aa6dc178888ac20dd628c1784dad6c159453e4f3:API-2023.1-all_doneCARLOS/src/Pages/edicao.js
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

<<<<<<< HEAD:projeto/src/Pages/edicao.js
=======
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
>>>>>>> aa6dc178888ac20dd628c1784dad6c159453e4f3:API-2023.1-all_doneCARLOS/src/Pages/edicao.js
 

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
<<<<<<< HEAD:projeto/src/Pages/edicao.js
=======
    //   if(document.getElementById('obg3').value === ''){
    //     isVazio = true
    //     return isVazio
    //   }
>>>>>>> aa6dc178888ac20dd628c1784dad6c159453e4f3:API-2023.1-all_doneCARLOS/src/Pages/edicao.js
      if(document.getElementById('obg4').value === ''){
        isVazio = true
        return isVazio
      }
<<<<<<< HEAD:projeto/src/Pages/edicao.js
    }

=======
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

>>>>>>> aa6dc178888ac20dd628c1784dad6c159453e4f3:API-2023.1-all_doneCARLOS/src/Pages/edicao.js
    const handleClickButton = () =>{
      
        desabilitaCadastro()
        const date = new Date().toLocaleString();
        axios.post("http://localhost:3001/confirmarEditar", {
          login: document.getElementById('obg1').value,
          firstname: document.getElementById('obg2').value,
          userId : userId,
          email: document.getElementById('obg4').value,
<<<<<<< HEAD:projeto/src/Pages/edicao.js
          date: date,
=======
>>>>>>> aa6dc178888ac20dd628c1784dad6c159453e4f3:API-2023.1-all_doneCARLOS/src/Pages/edicao.js
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
<<<<<<< HEAD:projeto/src/Pages/edicao.js
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Erro',
              text: response.data.msg,
            })
=======
>>>>>>> aa6dc178888ac20dd628c1784dad6c159453e4f3:API-2023.1-all_doneCARLOS/src/Pages/edicao.js
          }
        });
    }

    return (
      
<<<<<<< HEAD:projeto/src/Pages/edicao.js
      <div className="fundo">
      <Navbar/>
      
        <div className="cabecalho2Editar">
          <div className="container_linha2Editar">
            <h1>Editar informações</h1>
            <hr className='title-hrEditar'></hr>
=======
      <div>
        <div className="cabecalho2">
          <div className="container_linha2">
            <p className="cad_titulo2">Edite suas informações</p>
>>>>>>> aa6dc178888ac20dd628c1784dad6c159453e4f3:API-2023.1-all_doneCARLOS/src/Pages/edicao.js
          </div>
        </div>
        <form className="form2">
          <div className="container2">
<<<<<<< HEAD:projeto/src/Pages/edicao.js
            <p className="sub_titulo2Editar">
              Verifique os dados, caso necessário corrija-os.
            </p>
            <div className="row2">
              <div className="column2">
                <label className="label1">Login</label>
=======
            <p className="sub_titulo2">
              Preencha os campos abaixo com seus dados:
            </p>
            <div className="row2">
              <div className="column2">
>>>>>>> aa6dc178888ac20dd628c1784dad6c159453e4f3:API-2023.1-all_doneCARLOS/src/Pages/edicao.js
              <input id="obg1"
                  type="login"
                  name="login"
                  className="login--input"
                  onChange={handleChangeValues}
                  placeholder="Login"
                />
<<<<<<< HEAD:projeto/src/Pages/edicao.js
                <label className="label1">Nome</label>
=======
>>>>>>> aa6dc178888ac20dd628c1784dad6c159453e4f3:API-2023.1-all_doneCARLOS/src/Pages/edicao.js
                <input id="obg2"
                  type="firstname"
                  name="firstname"
                  className="fname--input"
                  onChange={handleChangeValues}
                  placeholder="Nome"
                />
<<<<<<< HEAD:projeto/src/Pages/edicao.js
                
              </div>
              <div className="column2">
                <label className="label2">E-mail</label>
=======
                {/* <input id="obg3"
                  type="lastname"
                  name="lastname"
                  className="lname--input"
                  onChange={handleChangeValues}
                  placeholder="Sobrenome"
                /> */}
              </div>
              <div className="column2">
>>>>>>> aa6dc178888ac20dd628c1784dad6c159453e4f3:API-2023.1-all_doneCARLOS/src/Pages/edicao.js
                <input
                  id="obg4"
                  type="email"
                  name="email"
                  className="email--input"
                  onChange={handleChangeValues}
                  placeholder="E-mail"
                />
<<<<<<< HEAD:projeto/src/Pages/edicao.js
                <label className="label2">Data de cadastro</label>
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
=======
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
>>>>>>> aa6dc178888ac20dd628c1784dad6c159453e4f3:API-2023.1-all_doneCARLOS/src/Pages/edicao.js
            <button onClick={()=>[navigate ('/welcome')]}>voltar</button>
            <button id = 'btnCadastro' type="button" className="register--button2" 
            onClick={()=>handleClickButton()}> Confirmar </button>
          </div>
        </form>
<<<<<<< HEAD:projeto/src/Pages/edicao.js
        
        <BottomNavbar/>
        </div>
       
      
    );
}

=======
      </div>
    );
}
>>>>>>> aa6dc178888ac20dd628c1784dad6c159453e4f3:API-2023.1-all_doneCARLOS/src/Pages/edicao.js
