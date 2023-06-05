import React, { useEffect } from "react";
import "./CSS/LoginCSS.css";

import axios from "axios";
import { HiEnvelope } from "react-icons/hi2";
import { HiLockClosed } from "react-icons/hi2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { ErrorMessage, Formik, Form, Field } from "formik";

function EnviaEmail() {
  useEffect(()=>{
    localStorage.clear()
  })

  const [values, setValues] = useState();
  const navigate = useNavigate();

    const handleChangeValues = (value)=>{
      setValues(prevValue=>({
        ...prevValue,
        [value.target.name]: value.target.value,
      }))
    };
//a
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
    }
    

  const handleClickButton = () =>{
    axios.post('http://localhost:3001/enviar-token',{
      email: values.email
    }).then((response)=>{
      localStorage.setItem('token', response.data.token)
      Swal.fire(
        'Sucesso!',
        response.data.msg,
        'success'
      )
    })
  }

  return (
    <body className="body1">
    <div class="container1">
      <div class="content1 first-content1">
        <div class="first-column1">
          <h2 class="title1 title-primary1">Olá!</h2>
          <p class="description1 description-primary1">
            Faça seu login completando
          </p>
          <p class="description1 description-primary1">os campos ao lado</p>
          <p class="description1 description-second1">Não possui uma conta?</p>
          <button id="signin" class="btn1 btn-primary1" onClick={()=>[navigate ('/form')]}>
            cadastre-se
          </button>
        </div>
        <div class="second-column1">
          <h2 class="title1 title-second1">Acesse</h2>

          <form className="form1">
            <label className="label-input1" htmlFor="">
              <i className="icon-modify1">
                <HiEnvelope />
              </i>
              <input id="obg1"
                  type="email"
                  name="email"
                  className="email--input1"
                  onChange={handleChangeValues}
                  placeholder="email"
                />
            </label>

            <label className="label-input1" htmlFor="">
              <i className="icon-modify1">
                <HiLockClosed />
              </i>
              <input
                  id="obg2"
                  type="password"
                  name="password"
                  className="name--input1"
                  onChange={handleChangeValues}
                  placeholder="Senha"
                />
            </label>

            {/* <a class="password" href="#">
              Esqueceu sua senha?
            </a> */}
            <button type="button" class="btn1 btn-second1" 
            onClick={()=>[handleClickButton()]} > Enviar email </button>
          </form>
        </div>
      </div>
    </div>
    </body>
  );
}

export default EnviaEmail;