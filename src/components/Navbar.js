import React, { Component } from "react";
import logo from "./logo.jpg";
import './NavbarStyles.css'
import { NavLink } from "react-router-dom";
class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav>
          <a href="index.js">
            <img src={logo} className="logo_visiona" alt="logo"></img>
          </a>
          <div>
            <ul id="navbar">
              <li>
              <NavLink className="link_nav" to="/welcome">home</NavLink>
              </li>
              <li>
              <NavLink className="link_nav" to="/welcome">dashboard</NavLink>
              </li>
              <li>
                <NavLink className="link_nav" to="/tabela">usuários</NavLink>
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
            <li>
              <a href="/index.js">Editar conta</a>
            </li>
            <li>
            <NavLink className="link_nav" to="/">Log out</NavLink>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
export default Navbar;
