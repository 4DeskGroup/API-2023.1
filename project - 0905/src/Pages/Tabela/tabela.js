import "./tabela.css";
import Navbar from ".././../components/Navbar";
import { EditarPopup } from "../EditarPopup";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";
import ReactModal from "react-modal";
import { Component, useState } from "react";
import { useEffect } from "react";

function Lista({ users }) {
  // paginação
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
  }
  // pop-up
  const [isOpen, setIsOpen] = useState(false);

  // pesquisa e filtro
  // opção selecionada na cbx
  const [selectedOption, setSelectedOption] = useState();
  var filtroSelecionado = selectedOption;

  // set opção selecionada na cbx
  const handleChangeOption = (event) => {
    setSelectedOption(event.target.value);
    setCurrentPage(1);
  };

  // pega o valor pesquisado no input
  const [searchValue, setSearchValue] = useState("");

  // filtra a pesquisa de acordo com a opção selecionada na combobox
  var filteredUsers;
  switch (filtroSelecionado) {
    case "email":
      filteredUsers = users.filter((item) =>
        item.email.toLowerCase().includes(searchValue.toLowerCase())
      );
      break;
    case "status":
      filteredUsers = users.filter(
        (item) =>
          typeof item.status === "string" &&
          item.status.toLowerCase().startsWith(searchValue.toLowerCase())
      );
      break;
    case "data":
      filteredUsers = users.filter(
        (item) =>
          typeof item.datacadastro === "string" &&
          item.datacadastro.toLowerCase().includes(searchValue.toLowerCase())
      );
      break;
    case "tipo":
      filteredUsers = users.filter(
        (item) =>
          typeof item.usuariotipo === "string" &&
          item.usuariotipo.toLowerCase().startsWith(searchValue.toLowerCase())
      );
      break;
    default:
      filteredUsers = users.filter(
        (item) =>
          typeof item.login === "string" &&
          item.login.toLowerCase().includes(searchValue.toLowerCase())
      );
      break;
  }
  // atualiza p/ primeira pag ao pesquisar
  useEffect(() => {
    setCurrentPage(1);
  }, [searchValue, filtroSelecionado]);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  async function editUsers(item) {
    const tableLogin = item.login;
    const tableNome = item.nome;
    const tableSenha = item.senha;
    const tableEmail = item.email;
    const tableTipo = item.usuariotipo;
    const tableId = item.id;
    const tableData = {
      tableLogin: tableLogin,
      tableNome: tableNome,
      tableSenha: tableSenha,
      tableEmail: tableEmail,
      tableTipo: tableTipo,
      tableId: tableId,
    };
    console.log(tableData);
    localStorage.setItem("tableUser", JSON.stringify(tableData));
  }

  async function modifyStatus(item) {
    fetch(`http://localhost:3001/usuarios/${item.login}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    window.location.reload(false);
  }

  function statusValida(item) {
    if (item.status === "ativo") {
      return "success";
    } else {
      return "danger";
    }
  }

  return (
    <>
      <Navbar />
      <div className="container3">
        <div className="titulo3">
          <div className="title-container3">
            <h1>Controle de usuários</h1>
            <hr className="title-hr3" />
          </div>
          <div />
        </div>

        <div className="fundo3">
          <div className="popupdiv">
            <ReactModal
              className="popup"
              isOpen={isOpen}
              onRequestClose={toggleModal}
            >
              <EditarPopup />
            </ReactModal>
          </div>
          <input
            className="pesquisa"
            type="text"
            placeholder="Pesquisar usuário"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <select
            className="cbx-filtro"
            id="obg5"
            value={selectedOption}
            onChange={handleChangeOption}
          >
            <option value="login">Login</option>
            <option value="email">E-mail</option>
            <option value="status">Satuts</option>
            <option value="data">Data</option>
            <option value="tipo">Tipo</option>
          </select>
          <MDBTable align="middle">
            <MDBTableHead>
              <tr>
                <th scope="col" className="fw-bold mb-1">
                  ㅤLogin
                </th>
                <th scope="col" className="fw-bold mb-1">
                  ㅤㅤㅤCadastro
                </th>
                <th scope="col" className="fw-bold mb-1">
                  Status
                </th>
                <th scope="col" className="fw-bold mb-1">
                  ㅤTipo
                </th>
                <th scope="col" className="fw-bold mb-1">
                  ㅤㅤㅤAções
                </th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {paginate(filteredUsers, currentPage, itemsPerPage).map(
                (item, i) => (
                  <tr key={i}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="ms-3">
                          <p className="fw-normal mb-1">{item.login}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">{item.datacadastro}</p>
                    </td>
                    <td>
                      <MDBBadge color={statusValida(item)} pill>
                        {item.status}
                      </MDBBadge>
                    </td>
                    <td>{item.usuariotipo}</td>
                    <td>
                      <MDBBtn
                        color="link"
                        rounded
                        size="sm"
                        onClick={() => {
                          toggleModal();
                          editUsers(item);
                        }}
                      >
                        Editar
                      </MDBBtn>
                      <MDBBtn
                        color="link"
                        rounded
                        size="sm"
                        onClick={() => modifyStatus(item)}
                      >
                        {item.status === "ativo" ? "Desativar" : "Ativar"}
                      </MDBBtn>
                    </td>
                  </tr>
                )
              )}
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
          <MDBPagination className="pagination" circle center>
            <MDBPaginationItem disabled={currentPage === 1}>
              <MDBPaginationLink
                onClick={() => setCurrentPage(currentPage - 1)}
                aria-label="Previous"
              >
                <span aria-hidden="true">«</span>
              </MDBPaginationLink>
            </MDBPaginationItem>

            {Array.from({
              length: Math.ceil(filteredUsers.length / itemsPerPage),
            }).map((item, i) => (
              <MDBPaginationItem
                key={i}
                active={i + 1 === currentPage}
                onClick={() => setCurrentPage(i + 1)}
              >
                <MDBPaginationLink href="#">{i + 1}</MDBPaginationLink>
              </MDBPaginationItem>
            ))}

            <MDBPaginationItem
              disabled={currentPage === Math.ceil(users.length / itemsPerPage)}
            >
              <MDBPaginationLink
                onClick={() => setCurrentPage(currentPage + 1)}
                aria-label="Next"
              >
                <span aria-hidden="true">»</span>
              </MDBPaginationLink>
            </MDBPaginationItem>
          </MDBPagination>
          <div style={{ color: "white" }}>ㅤ</div>
        </div>
      </div>
    </>
  );
}

export default Lista;
