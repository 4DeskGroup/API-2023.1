import React from 'react';
import {
    MDBIcon,
    MDBPagination,
    MDBPaginationItem,
    MDBPaginationLink,
    MDBTable,
    MDBTableHead,
    MDBTableBody
} from 'mdb-react-ui-kit';
import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";

function UserControl() {
    return (
        <>
            <Navbar/>
            <div className='mx-5' style={{paddingTop: '5rem', paddingBottom: '10rem'}}>
                <div className='d-flex text-left mt-5 text-primary'>
                    <h3 className='title-auto-size' style={{color: '#FF6B00'}}>Controle de usuários</h3>
                    <hr className="flex-grow-1 mx-4" style={{color: '#FF6B00', border: '2px solid FF6B00'}}/>
                </div>

                <div className='square rounded-9 visiona-bg-white px-4 text-center overflow-auto'
                     style={{borderRadius: '8px', border: '1px solid #72787A'}}>
                    <MDBTable>
                        <MDBTableHead className='visiona-text-primary'>
                            <tr>
                                <th scope='col'></th>
                                <th scope='col'>usuário</th>
                                <th scope='col'>cadastro</th>
                                <th scope='col'>status</th>
                                <th scope='col'>adm</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            <tr>
                                <th scope='row'><a aria-current='page' style={{cursor: 'pointer'}}><MDBIcon fas
                                                                                                            icon="align-justify"/></a>
                                </th>
                                <td>carlos@mail.com</td>
                                <td>19/04/2023</td>
                                <td>ativo</td>
                                <td>adm</td>
                            </tr>
                            <tr>
                                <th scope='row'><a aria-current='page' style={{cursor: 'pointer'}}><MDBIcon fas
                                                                                                            icon="align-justify"/></a>
                                </th>
                                <td>diane@mail.com</td>
                                <td>19/04/2023</td>
                                <td>ativo</td>
                                <td>adm</td>
                            </tr>
                            <tr>
                                <th scope='row'><a aria-current='page' style={{cursor: 'pointer'}}><MDBIcon fas
                                                                                                            icon="align-justify"/></a>
                                </th>
                                <td>emili@mail.com</td>
                                <td>19/04/2023</td>
                                <td>ativo</td>
                                <td>adm</td>
                            </tr>
                            <tr>
                                <th scope='row'><a aria-current='page' style={{cursor: 'pointer'}}><MDBIcon fas
                                                                                                            icon="align-justify"/></a>
                                </th>
                                <td>laiza@mail.com</td>
                                <td>19/04/2023</td>
                                <td>ativo</td>
                                <td>adm</td>
                            </tr>
                            <tr>
                                <th scope='row'><a aria-current='page' style={{cursor: 'pointer'}}><MDBIcon fas
                                                                                                            icon="align-justify"/></a>
                                </th>
                                <td>raynara@mail.com</td>
                                <td>19/04/2023</td>
                                <td>ativo</td>
                                <td>adm</td>
                            </tr>
                            <tr>
                                <th scope='row'><a aria-current='page' style={{cursor: 'pointer'}}><MDBIcon fas
                                                                                                            icon="align-justify"/></a>
                                </th>
                                <td>rita@mail.com</td>
                                <td>19/04/2023</td>
                                <td>ativo</td>
                                <td>adm</td>
                            </tr>
                            <tr>
                                <th scope='row'><a aria-current='page' style={{cursor: 'pointer'}}><MDBIcon fas
                                                                                                            icon="align-justify"/></a>
                                </th>
                                <td>stefanie@mail.com</td>
                                <td>19/04/2023</td>
                                <td>ativo</td>
                                <td>adm</td>
                            </tr>
                            <br></br>
                        </MDBTableBody>
                    </MDBTable>
                </div>

                <MDBPagination className='d-flex align-items-center justify-content-center mt-3'>
                    <MDBPaginationItem disabled>
                        <MDBPaginationLink href='#' tabIndex={-1} aria-disabled='true'>
                            <MDBIcon className='visiona-text-primary' fas icon="angle-left"/>
                        </MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBPaginationLink className='visiona-text-primary' href='#'>1</MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem active aria-current='page'>
                        <MDBPaginationLink className='visiona-text-primary' href='#'>
                            2 <span className='visually-hidden'>(current)</span>
                        </MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBPaginationLink className='visiona-text-primary' href='#'>3</MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBPaginationLink className='visiona-text-primary' href='#'><MDBIcon fas
                                                                                              icon="angle-right"/></MDBPaginationLink>
                    </MDBPaginationItem>
                </MDBPagination>
            </div>
            <BottomNavbar/>
        </>
    )
}

export default UserControl;