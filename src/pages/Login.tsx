import React from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import axios from "axios";
import {FaKey} from 'react-icons/fa';
import {useState} from 'react';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn
} from 'mdb-react-ui-kit';

//const [values, setValues] = useState();
//
//function handleChangeValues(value) {
//    setValues(prevValue=>({
//        ...prevValue,
//        [value.target.name]: value.target.value,
//    }))
//};


//function handleClickButton() {
//    axios.post("http://localhost:3001/login", {
//        login: values.login,
//        password: values.password,
//
//    }).then((response)=>{
//        alert(response.data.msg);
//    });
//}

export default function Login() {
    return (
        <>
            {/* Quadro principal */}
            <div className='align-items-center container d-flex justify-content-center h-100'>
                {/* Quadro central dos elementos de login */}
                <div className='row rounded-7'>

                    {/* Coluna esquerda */}
                    <div className='col-4 p-5'
                         style={{
                             backgroundColor: '#FFB657',
                             borderRadius: '1rem 0rem 0rem 1rem'
                         }}>
                        <div className='row'>
                            <p style={{textTransform: 'uppercase'}}>4desk&nbsp;company</p>
                        </div>
                        <div className='row'>
                            <h3>Olá!</h3>
                        </div>
                        <div className='row'>
                            <h6>Faça seu login completando<br/>os campos ao lado.</h6>
                        </div>
                        <div className='row'>
                            <h6>Não possuí uma conta?</h6>
                            <MDBBtn rounded>Primary</MDBBtn>
                        </div>
                    </div>

                    {/* Coluna direita */}
                    <div className='col-8 p-5' style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: '0rem 1rem 1rem 0rem'
                    }}>
                        <form>
                            <MDBInput className='mb-4' type='email' id='form1Example1' label='Email address'/>
                            <MDBInput className='mb-4' type='password' id='form1Example2' label='Password'/>

                            <MDBRow className='mb-4'>
                                <MDBCol>
                                    <a href='#!'>Forgot password?</a>
                                </MDBCol>
                            </MDBRow>

                            <MDBBtn rounded type='submit' block>
                                Sign in
                            </MDBBtn>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}