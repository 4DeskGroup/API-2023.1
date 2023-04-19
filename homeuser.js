import React from 'react';
import {MDBBtn, MDBContainer} from "mdb-react-ui-kit";
import { redirect } from 'react-router-dom';
import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { useNavigate } from "react-router-dom";


export default function Homeuser() {
    const navigate = useNavigate();

    return (
            <>
            <Navbar/>
        <div className='mx-5'>
            <div className='row text-center mt-5 text-primary'>
                <h3 style={{ color: '#FF6B00'}}>Bem-vindo!</h3>
            </div>

            <div className='row text-center mt-5'>
                <h6>Selecione a ferramenta abaixo para ser redirecionado<br/>à sua página de destino</h6>
            </div>

                <div className='w-25 mx-auto d-flex justify-content-center align-items-center row text-center mt-5'>
                    <h5>Editar informações</h5>
                    <MDBBtn className='shadow-5' color='light'>
                        <figure className='figure'>
                            <img
                                src='images/edicao.png'
                                className='figure-img rounded mx-n1 my-1' height={150} 
                                alt='...'
                            />
                        </figure>
                    </MDBBtn>
                </div>
            </div>
        
<BottomNavbar/>
            </>
    );
}

