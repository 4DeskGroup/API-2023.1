import React, { Component } from "react";
import "./form.css";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      nascimento: "",
      email: "",
      senha: "",
      confirmasenha: "",
    };
  }

  handleFirstnameChange = (event) => {
    this.setState({
      firstname: event.target.value,
    });
  };

  handleLastnameChange = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };

  handleNascimentoChange = (event) => {
    this.setState({
      nascimento: event.target.value,
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleSenhaChange = (event) => {
    this.setState({
      senha: event.target.value,
    });
  };

  handleConfirmasenhaChange = (event) => {
    this.setState({
      confirmasenha: event.target.value,
    });
  };

  render() {
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
                <input
                  type="firstname"
                  value={this.state.firstname}
                  onChange={this.handleFirstnameChange}
                  placeholder="Nome"
                />
                <input
                  type="lastname"
                  value={this.state.lastname}
                  onChange={this.handleLastnameChange}
                  placeholder="Sobrenome"
                />
                <input
                  type="date"
                  value={this.state.nascimento}
                  onChange={this.handleNascimentoChange}
                  placeholder="Data de Nascimento"
                />
              </div>
              <div className="column">
                <input
                  type="email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  placeholder="E-mail"
                />
                <input
                  type="password"
                  value={this.state.senha}
                  onChange={this.handleSenhaChange}
                  placeholder="Senha"
                />
                <input
                  type="password"
                  value={this.state.confirmasenha}
                  onChange={this.handleConfirmasenhaChange}
                  placeholder="Confirmar Senha"
                />
              </div>
              <div className="conteiner_termo">
                <div className="termosAcesso">
                  <input type="checkbox" className="checkbox" />
                  <label for="termos de acesso" className="acesso_txt">
                    Li e aceito os termos de acesso
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="botoes">
            <button>voltar</button>
            <button>cadastrar</button>
          </div>
        </form>
      </div>
    );
  }
}
