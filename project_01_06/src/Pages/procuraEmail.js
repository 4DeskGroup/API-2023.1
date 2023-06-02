import React, { useState } from "react";
import './CSS/form.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { MDBCheckbox } from 'mdb-react-ui-kit';

export function ProcuraLogin() {

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
      
      <div className="form-body">
        <div className="cabecalho2">
          <div className="container_linha2">
            <p className="cad_titulo2">Enviar token</p>
          </div>
        </div>
        <form className="form2">
          <div className="container-form">
            <p className="sub_titulo2">
              Insira abaixo o seu login para enviar o token
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

              </div>

            </div>
          </div>

          <div className="botoes2">
          <div className="conteiner_termo2">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Li e aceito os termos de acesso'/></div>
        
               
            <button onClick={()=>[navigate ('/')]}>voltar</button>
            <button id = 'btnCadastro' type="button" className="register--button2" 
            onClick={()=>handleClickButton()}> enviar token </button>
          </div>
        </form>
      </div>
    );
}