import React, {useState} from 'react';
import BottomNavbar from "../components/BottomNavbar";
import Header from "../components/Header";
import {useNavigate} from 'react-router-dom';
import {
    MDBValidation,
    MDBValidationItem,
    MDBInput,
    MDBInputGroup,
    MDBBtn,
    MDBCheckbox
} from 'mdb-react-ui-kit';

function SignUp() {
    const navigate = useNavigate();

    const [formValue, setFormValue] = useState({
        fName: '',
        lName: '',
        birthDate: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleLogin = () => {
        // implemente aqui a lógica para fazer login
        navigate('/entrar')
    }

    const handleHome = () => {
        navigate('/')
    }

    const onChange = (e: any) => {
        setFormValue({...formValue, [e.target.name]: e.target.value});
    };

    return (
        <>
            <Header title='Cadastre-se'/>
            <div className='d-flex align-items-center justify-content-center w-100'
                 style={{paddingTop: '10rem', paddingBottom: '8rem', paddingLeft: '1.5rem'}}>
                <div className='row text-center'
                     style={{borderRadius: '15px', height: '10%', width: '50rem'}}>
                    <div className='row mb-3'>
                        <h6 style={{fontWeight: "lighter"}}>Preencha os campos abaixo com seus dados</h6>
                    </div>
                    <MDBValidation className='row p-5 visiona-bg-light visiona-text-light visiona-box-shadow'
                                   style={{borderRadius: '15px'}}>
                        <div className="col-12 col-md-6">
                            <MDBValidationItem feedback='insira um email válido.' invalid>
                                <MDBInput
                                    className='visiona-default-input'
                                    value={formValue.fName}
                                    name='fname'
                                    onChange={onChange}
                                    id='validationCustom01'
                                    required
                                    label='Nome'
                                />
                            </MDBValidationItem>
                            <MDBValidationItem className='my-5' feedback='insira um email válido.' invalid>
                                <MDBInput
                                    value={formValue.lName}
                                    name='lname'
                                    onChange={onChange}
                                    id='validationCustom01'
                                    required
                                    label='Sobrenome'
                                />
                            </MDBValidationItem>
                            <MDBValidationItem className='my-5' feedback='insira uma senha válida.' invalid>
                                <MDBInput
                                    value={formValue.birthDate}
                                    name='password'
                                    onChange={onChange}
                                    id='validationCustom02'
                                    required
                                    label='data de nascimento'
                                    type='date'
                                />
                            </MDBValidationItem>
                        </div>
                        <div className="col-12 col-md-6">
                            <MDBValidationItem feedback='insira uma senha válida.' invalid>
                                <MDBInput
                                    value={formValue.email}
                                    name='password'
                                    onChange={onChange}
                                    id='validationCustom02'
                                    required
                                    label='e-mail'
                                    type='datetime'
                                />
                            </MDBValidationItem>
                            <MDBValidationItem className='my-5' feedback='insira uma senha válida.' invalid>
                                <MDBInput
                                    value={formValue.password}
                                    name='password'
                                    onChange={onChange}
                                    id='validationCustom02'
                                    required
                                    label='Senha'
                                    type='password'
                                />
                            </MDBValidationItem>
                            <MDBValidationItem className='my-5' feedback='insira uma senha válida.' invalid>
                                <MDBInput
                                    value={formValue.confirmPassword}
                                    name='password'
                                    onChange={onChange}
                                    id='validationCustom02'
                                    required
                                    label='confirmar senha'
                                    type='password'
                                />
                            </MDBValidationItem>
                        </div>
                        <div
                            className="col-12 d-flex align-items-center justify-content-center visiona-checkbox-primary">
                            <MDBCheckbox label='Li e aceito os termos de acesso' name='flexCheck' value=''
                                         id='flexCheckDefault'/>
                        </div>
                    </MDBValidation>
                    <div className='row pt-5'>
                        <div className='col-12 col-md-6 p-2'>
                            <MDBBtn rounded className='visiona-btn-secondary px-5' onClick={handleLogin}>
                                voltar
                            </MDBBtn>
                        </div>
                        <div className='col-12 col-md-6 p-2'>
                            <MDBBtn rounded className='visiona-btn-primary px-5' onClick={handleHome}>
                                confirmar
                            </MDBBtn>
                        </div>
                    </div>
                </div>
            </div>
            <BottomNavbar/>
        </>
    );
}

export default SignUp;