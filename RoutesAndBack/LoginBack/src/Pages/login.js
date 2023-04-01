import React from "react";
import "../CSS/LoginCSS.css";
import axios from "axios";
import { HiEnvelope } from "react-icons/hi2";
import { HiLockClosed } from "react-icons/hi2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [values, setValues] = useState();
  const navigate = useNavigate();

    const handleChangeValues = (value)=>{
      setValues(prevValue=>({
        ...prevValue,
        [value.target.name]: value.target.value,
      }))
    };


  const handleClickButton = () =>{
    axios.post("http://localhost:3001/login", {
      login: values.login,
      password: values.password,
    }).then((response)=>{
      alert(response.data.msg);
      if(response.data.msg === "Usuário não encontrado"){
        alert('nao entro no site.')
      }
      if(response.data.msg === "Usuário logado com sucesso"){
        alert('logado com sucesso')
     }
    });
  }

  return (
    <div class="container">
      <div class="content first-content">
        <div class="first-column">
          <h2 class="title title-primary">Olá!</h2>
          <p class="description description-primary">
            Faça seu login completando
          </p>
          <p class="description description-primary">os campos ao lado</p>
          <p class="description description-second">Não possui uma conta?</p>
          <button id="signin" class="btn btn-primary">
            cadastre-se
          </button>
        </div>
        <div class="second-column">
          <h2 class="title title-second">Acesse</h2>

          <form className="form">
            <label className="label-input" htmlFor="">
              <i className="icon-modify">
                <HiEnvelope />
              </i>
              <input id="obg1"
                  type="login"
                  name="login"
                  className="login--input"
                  onChange={handleChangeValues}
                  placeholder="Login"
                />
            </label>

            <label className="label-input" htmlFor="">
              <i className="icon-modify">
                <HiLockClosed />
              </i>
              <input
                  id="obg5"
                  type="password"
                  name="password"
                  className="name--input"
                  onChange={handleChangeValues}
                  placeholder="Senha"
                />
            </label>

            <a class="password" href="#">
              Esqueceu sua senha?
            </a>
            <button type="button" class="btn btn-second" 
            onClick={()=>handleClickButton()} > Login </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
