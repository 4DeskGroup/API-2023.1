import React, {useState} from 'react';

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';

export default function Navbar() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand className='mx-4' href='#'><img
                        src='../media/pictures/logo-visiona.svg'
                        className='img-fluid'
                        width={40}
                        alt=''
                    /></MDBNavbarBrand>
                    <MDBNavbarToggler
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowBasic(!showBasic)}
                        >
                        <MDBIcon icon='bars' fas/>
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showBasic}>
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 d-flex justify-content-center'>
                            <MDBNavbarItem className='mx-4'>
                                <MDBNavbarLink active aria-current='page' href='#'
                                    style={{color: '#FF6B00'}}>home</MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem className='mx-4'>
                                <MDBNavbarLink href='#' style={{color: '#FF6B00'}}>dashboard</MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem className='mx-4'>
                                <MDBNavbarLink href='#' style={{color: '#FF6B00'}}>usuários</MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem className='mx-4'>
                                <MDBNavbarLink href='#' style={{color: '#FF6B00'}}>cadastro usuário</MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>

                        <form className='d-flex input-group w-auto'>
                            <MDBDropdown className='mx-2'>
                                <MDBDropdownToggle tag='a' className='' role='button' style={{color: '#FF6B00'}}>
                                    <MDBIcon fas icon="user"/>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className='mt-3 text-center'>
                                    <MDBDropdownItem link>editar perfil</MDBDropdownItem>
                                    <hr className='mx-3 my-1'/>
                                    <MDBDropdownItem link href='/login'>sair</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </form>
                    </MDBCollapse>
                </MDBContainer>
        </MDBNavbar>
    );
}