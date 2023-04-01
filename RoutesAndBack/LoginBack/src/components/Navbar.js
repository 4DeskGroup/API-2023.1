import React, { Component } from "react";
import logo from "./logo.jpg";

import "C:/Users/stef/Documents/coding/reactJS/menu/src/components/NavbarStyles.css";

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
                <a className="apertado" href="/index.js">
                  home
                </a>
              </li>
              <li>
                <a href="index.js">dashboard</a>
              </li>
              <li>
                <a href="index.js">usuários</a>
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
              <a href="index.js">Log out</a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
export default Navbar;
