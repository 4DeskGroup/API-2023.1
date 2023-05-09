import React, { useState, useEffect } from "react";
import './CSS/token.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { MDBCheckbox } from 'mdb-react-ui-kit';

export function Token(){

    return (
        <form className="form3">
          <div className="container-form3">
            <p className="sub_titulo3">
              Token de Autenticação
            </p>
            <p className="sub_titulo4">
            Enviamos um código Token para seu email
            </p>
            <p className="sub_titulo5">
            Insira o Token para :
            </p>
            <div className="row3">
              <div className="column3">
              <input id="obg3"
                  type="login"
                  name="login"
                  className="login--input"
                  placeholder="Token"
                />
              </div>
            </div>
          </div>
          <div className="botoes3">
            <button id = 'btnReenviaToken' type="button" className="reenvia--button3"> reenviar token</button>
            <button id = 'btnCadastro' type="button" className="register--button3"> validar token </button>
          </div>
        </form>
      
    );
}

  