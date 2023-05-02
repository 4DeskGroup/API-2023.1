import React from 'react';
import { FaKey } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
function handleChangeValues() {
}

function handleClickButton() {
}

function login() {
    return (
        <div className="container">
            <div className="content first-content">
                <div className="first-column">
                    <h2 className="title title-primary">Olá!</h2>
                    <p className="description description-primary">
                        Faça seu login completando
                    </p>
                    <p className="description description-primary">os campos ao lado</p>
                    <p className="description description-second">Não possui uma conta?</p>
                    <button id="signin" className="btn btn-primary">
                        cadastre-se
                    </button>
                </div>
                <div className="second-column">
                    <h2 className="title title-second">Acesse</h2>

                    <form className="form">
                        <label className="label-input" htmlFor="">
                            <i className="icon-modify">
                                <AiOutlineMail/>
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
                                <FaKey/>
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

                        <a className="password" href="#">
                            Esqueceu sua senha?
                        </a>
                        <button type="button" className="btn btn-second"
                                onClick={() => handleClickButton()}> Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default login;