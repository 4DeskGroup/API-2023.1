import React, { useState, useEffect } from "react";
import './CSS/enviar_login.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { MDBCheckbox } from 'mdb-react-ui-kit';

export function Enviar_login(){

    return (
        <form className="form4">
          <div className="container-form4">
            <p className="sub_titulo4">
              Enviar Token
            </p>
            <p className="sub_titulo5">
            Para recuperar sua senha, informe seu login
            </p>
            <p className="sub_titulo6">
            Insira o Login:
            </p>
            <div className="row4">
              <div className="column4">
              <input id="obg4"
                  type="login"
                  name="login"
                  className="login--input"
                  placeholder="Login"
                />
              </div>
            </div>
          </div>
          <div className="botoes4">
            <button id = 'btnReenviaToken' type="button" className="reenvia--button4"> voltar</button>
            <button id = 'btnCadastro' type="button" className="register--button4"> enviar token </button>
          </div>
        </form>
      
    );
}

  