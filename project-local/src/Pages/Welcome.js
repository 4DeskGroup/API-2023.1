import React, { useEffect } from 'react';
import { MDBBtn} from "mdb-react-ui-kit";
import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { useNavigate } from "react-router-dom";

function Welcome() {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('contador', 0)
        const tipoUser = localStorage.getItem('tipoUser')
        if (tipoUser !== 'ADM') {
            document.getElementById("div1").style.display = 'none'
            document.getElementById("div2").style.display = 'none'
            document.getElementById("div2").style.alignItems = 'center'
            document.getElementById("div2").style.alignContent = 'center'
            document.getElementById("div3").style.display = 'none'
            document.getElementById("div3").style.alignItems = 'center'
            document.getElementById("div3").style.alignContent = 'center'

            document.getElementById("divCentral").style.alignItems = 'center'
            document.getElementById("divCentral").style.alignContent = 'center'
            document.getElementById("divCentral").style.marginLeft = '33%'

        } else {
            document.getElementById("div4").style.display = 'none'
        }

    })

    return (
        <>
            <Navbar />
            <div className='mx-5'>
                <div className='row text-center mt-5 text-primary'>
                    <h3 style={{ color: '#FF6B00' }}>Bem-vindo!</h3>
                </div>

                <div className='row text-center mt-5'>
                    <h6>Selecione uma das ferramentas abaixo para ser redirecionado<br />à sua página de destino</h6>
                </div>

                <div id='divCentral' className='row text-center mt-5' style={{ color: '#FF6B00' }}>
                    <div id='div1' className='col col-sm-12 col-md-4 align-items-center justify-content-center'>
                        <h5>controle de usuários</h5>
                        <MDBBtn className='shadow-5' color='light'>
                            <figure className='figure'>
                                <img
                                    src='images/people.svg'
                                    className='figure-img rounded mx-5 my-5'
                                    alt='...'
                                    onClick={() => [navigate('/tabela')]}
                                />
                            </figure>
                        </MDBBtn>
                    </div>

                    <div id='div2' className='col col-sm-12 col-md-4 align-items-center justify-content-center'>
                        <h5>dashboard</h5>
                        <MDBBtn className='shadow-5' color='light'>
                            <figure className='figure'>
                                <img
                                    src='images/charts.svg'
                                    className='figure-img rounded mx-1 my-1'
                                    alt='...'
                                    onClick={() => [navigate('/dashboard')]}
                                />
                            </figure>
                        </MDBBtn>
                    </div>

                    <div id='div3' className='col col-sm-12 col-md-4 align-items-center justify-content-center'>
                        <h5>Cadastrar Usuário</h5>
                        <MDBBtn className='shadow-5' color='light'>
                            <figure className='figure'>
                                <img
                                    src='images/people.svg'
                                    className='figure-img rounded mx-5 my-5'
                                    alt='...'
                                    onClick={() => [navigate('/cadastrousuarioadm')]}
                                />
                            </figure>
                        </MDBBtn>
                    </div>

                    <div id='div4' className='col col-sm-12 col-md-4 align-items-center justify-content-center'>
                        <h5>Edição</h5>
                        <MDBBtn className='shadow-5' color='light'>
                            <figure className='figure'>
                                <img
                                    src='images/people.svg'
                                    className='figure-img rounded mx-5 my-5'
                                    alt='...'
                                    onClick={() => [navigate('/edicao')]}
                                />
                            </figure>
                        </MDBBtn>
                    </div>


                </div>
            </div>
            <BottomNavbar />
        </>
    );
}

export default Welcome;
