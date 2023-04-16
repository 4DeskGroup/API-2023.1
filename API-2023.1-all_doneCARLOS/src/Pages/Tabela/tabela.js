
import "./tabela.css";
import Navbar from ".././../components/Navbar";
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Lista({users}) {
  
  function statusValida(item){
  if (item.status === "ativo") {
    return 'success'
  } else {
    return 'danger'
  }}



  
  return (
    <>
    <Navbar/>
    <div className="container3">
      <div className="titulo3">
        <div className="title-container3">
          <h1>Controle de usuários</h1>
          <hr className="title-hr3"></hr>
        </div>
        <div></div>
      </div>

      <div className="fundo3">
      <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col' className='fw-bold mb-1'>ㅤLogin</th>
          <th scope='col' className='fw-bold mb-1'>ㅤㅤㅤCadstro</th>
          <th scope='col' className='fw-bold mb-1'>Status</th>
          <th scope='col' className='fw-bold mb-1'>ㅤTipo</th>
          <th scope='col' className='fw-bold mb-1'>ㅤㅤㅤAções</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody >{users.map((item, i )=>(
        <tr key={i}>
          <td >
            <div className='d-flex align-items-center'>
              <div className='ms-3'>
                <p className='fw-normal mb-1'>{item.login}</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{item.datacadastro}</p>
          </td>
          <td>
            <MDBBadge color={statusValida(item)} pill>
            {item.status}
            </MDBBadge>
          </td>
          <td>{item.usuariotipo}</td>
          <td>
            <MDBBtn color='link' rounded size='sm' >
              Editar
            </MDBBtn>
            <MDBBtn  color="link" rounded size="sm">
            Desativar                     
            </MDBBtn>
              
          </td>
        </tr>
       ))}
      </MDBTableBody> 
    </MDBTable>

          
              {/* {users.map((item, i )=>(
                  <tr key = {i} className="tr4">
                    <td className="td4Login"> {item.login} </td>
                    <td className="td4Data"> {item.datacadastro} </td>
                    <td className="td4Status"> {item.status} </td>
                    <td className="td4Tipo"> {item.usuariotipo} </td>
                  </tr>
              ))} */}

            
        
      </div>
    </div>
    </>
  );
}

export default Lista;
