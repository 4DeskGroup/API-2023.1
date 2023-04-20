import React, {useState} from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBFooter,
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
        <MDBFooter bgColor='light' className='text-center text-lg-left'>
            <MDBContainer className='text-center text-md-start mt-5'>

              <MDBNavbar className='fixed-bottom' expand='lg' light bgColor='light'>

                    <div className='text-center p-3' style={{ color: '#FF6B00' }}>
                     &copy; {new Date().getFullYear()} Copyright:{' '}
                 <a className='text-warning' href='#' style={{color: '#FF6B00'}}>4DESK
                    </a>
                        </div>
                </MDBNavbar>     
                </MDBContainer>
                </MDBFooter>
    );
}