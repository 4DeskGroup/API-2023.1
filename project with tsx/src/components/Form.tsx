import React from 'react';

function handleChangeValues() {
}

function handleClickButton() {
}

function form() {
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
                            <input id="obg6"
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
                                <label htmlFor="checkbox" className="acesso_txt">
                                    Li e aceito os termos de acesso
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="botoes">
                    <button>voltar</button>
                    <button type="button" className="register--button"
                            onClick={() => handleClickButton()}> cadastrar
                    </button>
                </div>
            </form>
        </div>
    );
}


export default form;