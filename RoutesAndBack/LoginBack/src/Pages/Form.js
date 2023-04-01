import React, { useState } from "react";
import "../CSS/form.css";
import axios from "axios";

export function Form() {

    const [values, setValues] = useState();

    const handleChangeValues = (value)=>{
      setValues(prevValue=>({
        ...prevValue,
        [value.target.name]: value.target.value,
      }))
    };
  
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
    }

    const handleClickButton = () =>{
      
      if (!validaVazio()){
        const date = new Date().toLocaleString();
        axios.post("http://localhost:3001/cadastro", {
          login: values.login,
          firstname: values.firstname,
          lastname: values.lastname,
          email: values.email,
          password: values.password,
          date: date
        }).then((response)=>{
          alert(response.data.msg);
          limpaCampos()

        });}
        else {
          alert("Todos os campos devem ser preenchidos.")
        }
    }
    
    return (
      <div>
        <div className="cabecalho">
          <div className="container_linha">
            <p className="cad_titulo">Cadastre-se</p>
          </div>
        </div>
        <form>
          <div className="container">
            <p className="sub_titulo">
              Preencha os campos abaixo com seus dados:
            </p>
            <div className="row">
              <div className="column">
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
                <input id="obg3"
                  type="lastname"
                  name="lastname"
                  className="lname--input"
                  onChange={handleChangeValues}
                  placeholder="Sobrenome"
                />
              </div>
              <div className="column">
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
                  type="password"
                  name="password"
                  className="name--input"
                  onChange={handleChangeValues}
                  placeholder="Senha"
                />
                <input  id="obg6"
                  type="password"
                  name="password"
                  className="password--input"
                  onChange={handleChangeValues}
                  placeholder="Confirmar Senha"
                />
              </div>
              <div className="conteiner_termo">
                <div className="termosAcesso">
                  <input type="checkbox" className="checkbox" id="checkbox"/>
                  <label for="checkbox" className="acesso_txt">
                    Li e aceito os termos de acesso
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="botoes">
            <button>voltar</button>
            <button type="button" className="register--button" 
            onClick={()=>handleClickButton()}> cadastrar </button>
          </div>
        </form>
      </div>
    );
}
