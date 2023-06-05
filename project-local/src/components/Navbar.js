import React, { Component } from "react";
import logo from "./logo.jpg";
import './NavbarStyles.css'
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  componentDidMount(){
    this.validaUser();
  }
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  validaUser(){
    const tipoUser = localStorage.getItem('tipoUser')
    if(tipoUser !== 'ADM'){
      document.getElementById('btnTabela').style.display = 'none'
      document.getElementById('btnDashboard').style.display = 'none'
      document.getElementById('btnCadastrar').style.display = 'none'
    }else{
      document.getElementById('btnEditar').style.display = 'none'
    }
  }


  render() {
    return (
      <>
        <nav>
          <a href="welcome">
            <img src={logo} className="logo_visiona" alt="logo"></img>
          </a>

          <div>
            <ul id="navbar">
              <li>
              <NavLink className="link_nav" to="/welcome">home</NavLink>
              </li>
              <li>
              <NavLink id = 'btnDashboard' className="link_nav" to="/dashboard">dashboard</NavLink>
              </li>
              <li>
                <NavLink id='btnTabela' className="link_nav" to="/tabela">usuários</NavLink>
              </li>
              <li>
                <NavLink id='btnCadastrar' className="link_nav" to="/cadastrousuarioadm">cadastrar usuário</NavLink>
              </li>
              <li>
                <NavLink id='btnEditar' className="link_nav" to="/editar">editar</NavLink>
              </li>
            </ul>
          </div>
          
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fa fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
        <div>
          <ul
            id="config"
            className={this.state.clicked ? "#config active" : "#config"}
          >
            {/* <li>
              <a href="/index.js">Editar conta</a>
            </li> */}
            <li>
            <NavLink className="link_nav" to="/" >Log out</NavLink>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
export default Navbar;
