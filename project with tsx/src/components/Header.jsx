import React, {useState} from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';

interface
Props
{
    title: string;
}

function Header<Props>({title}) {
    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid className='mx-4 my-2'>
                <MDBNavbarBrand>
                    <h1 className='visiona-text-primary'>{title}</h1>
                </MDBNavbarBrand>
            </MDBContainer>
        </MDBNavbar>
    );
}

export default Header;