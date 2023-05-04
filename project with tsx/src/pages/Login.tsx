import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {
    MDBValidation,
    MDBValidationItem,
    MDBInput,
    MDBInputGroup,
    MDBBtn,
    MDBCheckbox
} from 'mdb-react-ui-kit';

function Login() {
    const navigate = useNavigate();

    const [formValue, setFormValue] = useState({
        username: '',
        password: '',
    });

    const handleHome = () => {
        // implemente aqui a lógica para fazer login
        navigate('/')
    }

    const handleSignUp = () => {
        // implemente aqui a lógica para fazer login
        navigate('/cadastre-se')
    }

    const onChange = (e: any) => {
        setFormValue({...formValue, [e.target.name]: e.target.value});
    };

    return (
        <>
            <div className='d-flex align-items-center justify-content-center vh-100 w-100'
                 style={{paddingTop: '5rem', paddingBottom: '10rem'}}>
                <div className='row visiona-bg-light'  style={{borderRadius: '15px'}}>
                    <div className='col-12 col-md-5 text-center p-5 visiona-bg-primary visiona-text-light'
                         style={{borderRadius: '15px'}}>
                        <h5 className='my-5'>4DESK COMPANY</h5>
                        <h2 className='mt-5'>Olá!</h2>
                        <h6 className='mt-2 mb-5'>Faça seu login completando<br/>os campos ao lado.</h6>
                        <h6 className='mt-5' style={{fontWeight: "lighter"}}>Não possui uma conta?</h6>
                        <MDBBtn className='mt-2 mb-5 visiona-btn-light' onClick={handleSignUp} rounded
                                style={{textTransform: "lowercase"}}>
                            cadastre-se
                        </MDBBtn>
                    </div>
                    <div className='col-12 col-md-7 p-5'>
                        <div className='d-flex justify-content-between mt-5'>
                            <h1>ACESSE</h1>
                            <img
                                src='../media/pictures/logo-visiona.svg'
                                className='img-fluid'
                                width={40}
                                alt=''
                            />
                        </div>
                        <MDBValidation>
                            <MDBValidationItem className='my-5' feedback='insira um email válido.' invalid>
                                <MDBInput
                                    value={formValue.username}
                                    name='username'
                                    onChange={onChange}
                                    id='validationCustom01'
                                    required
                                    label='e-mail'
                                    type='email'
                                    placeholder='usuario@mail.com'
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
                            <div className='d-grid text-center'>
                                <MDBBtn className='mx-2' color='secondary' onClick={handleHome} rounded
                                        type='submit'>login</MDBBtn>
                                <a className='visiona-link-primary'>esqueci minha senha</a>
                            </div>
                        </MDBValidation>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;