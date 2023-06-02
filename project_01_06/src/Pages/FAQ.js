import React, { useEffect } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBAccordion,
  MDBAccordionItem
} from "mdb-react-ui-kit";
import { redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { useNavigate } from "react-router-dom";

function FAQ() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("contador", 0);
    const tipoUser = localStorage.getItem("tipoUser");
  });

  return (
    <>
      
      <div className="mx-5">
        <div className="row text-center mt-5 text-primary">
          <h3 style={{ color: "#FF6B00" }}>Perguntas Frequêntes!</h3>
        </div>

        <div
          id="divCentral"
          className="d-flex align-content-center justify-content-center mt-5"
          style={{ color: "#FF6B00" }}
        >
          <MDBAccordion className="w-75" initialActive={1}>
            <MDBAccordionItem
              collapseId={1}
              headerTitle="Como utilizar o sistema?"
            >
              O sistema apresenta controles diferentes para{" "}
              <strong>usuários</strong> e <strong>administradores</strong>. As
              credênciais de usuário dão acesso apenas a visualização padrão do
              sistema com opção de modificar dados do próprio usuário enquanto
              as credênciais de administração dão acesso ao dashboard onde é
              possível ter uma visão geral dos usuários do sistema e à tabela de
              usuários onde é possível edita-los.
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={2}
              headerTitle="Como se cadastrar no sistema?"
            >
              Você pode se cadastrar através deste{" "}
              <a href="/form">formulário</a>. Preencha com atenção o formulário
              e se tudo estiver correto basta aceitar os termos de acesso e
              clicar em cadastrar. Logo após você já poderá utilizar o sistema
              com os dados utilizados no cadastro.
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={3}
              headerTitle="Como entrar no sistema?"
            >
              Através da <a href="/">página de login</a> você pode utilizar suas
              credênciais previamente cadastradas para acessar o sistema.
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={4}
              headerTitle="Como recuperar senha?"
            >
              A recuperação de senha funciona de forma simples. Para acessar o
              recurso você pode clicar em{" "}
              <a href="/procuraEmail">esqueceu sua senha?</a> na página de login
              e será direcionado(a) para o processo de recuperação onde deve
              informar o e-mail da conta para receber um token que será válidado
              para a conclusão do processo.
            </MDBAccordionItem>
          </MDBAccordion>
        </div>
      </div>
      <BottomNavbar />
    </>
  );
}

export default FAQ;
