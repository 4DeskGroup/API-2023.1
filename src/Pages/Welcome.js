import React from 'react';
import {MDBBtn, MDBContainer} from "mdb-react-ui-kit";
import { redirect } from 'react-router-dom';
import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function Welcome() {
    return (
            <>
            <Navbar/>
        <div className='mx-5'>
            <div className='row text-center mt-5 text-primary'>
                <h3 style={{ color: '#FF6B00'}}>Bem-vindo!</h3>
            </div>

            <div className='row text-center mt-5'>
                <h6>Selecione uma das ferramentas abaixo para ser redirecionado<br/>à sua página de destino</h6>
            </div>

            <div className='row text-center mt-5' style={{ color: '#FF6B00'}}>
                <div className='col col-sm-12 col-md-6 align-items-center justify-content-center'>
                    <h5>controle de usuários</h5>
                    <MDBBtn className='shadow-5' color='light'>
                        <figure className='figure'>
                            <img
                                src='images/people.svg'
                                className='figure-img rounded mx-5 my-5'
                                alt='...'
                            />
                        </figure>
                    </MDBBtn>
                </div>

                <div className='col col-sm-12 col-md-6 align-items-center justify-content-center'>
                    <h5>dashboard</h5>
                    <MDBBtn className='shadow-5' color='light'>
                        <figure className='figure'>
                            <img
                                src='images/charts.svg'
                                className='figure-img rounded mx-n1 my-1'
                                alt='...'
                            />
                        </figure>
                    </MDBBtn>
                </div>
            </div>
        </div>
<BottomNavbar/>
            </>
    );
}

export default Welcome;