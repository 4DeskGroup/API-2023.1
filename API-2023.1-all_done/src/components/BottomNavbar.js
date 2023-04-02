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
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';

export default function BottomNavbar() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar className='fixed-bottom' expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand className='mx-4' href='#' style={{ color: '#FF6B00'}}><h6>4DESK</h6></MDBNavbarBrand>

                <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 d-flex justify-content-center'>
                    <MDBNavbarItem className='mx-4' style={{ color: '#FF6B00'}}>
                        <h6>@copyright - todos os direitos reservados - 2023</h6>
                    </MDBNavbarItem>
                </MDBNavbarNav>
            </MDBContainer>
        </MDBNavbar>
    );
}