import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Form } from "../Pages/Form";
import Login from "../Pages/login";
import Welcome from "../Pages/Welcome";
import Table from "../Pages/Tabela/Table";
import Dashboard from "../Pages/Dashboard";
import { Edicao } from "../Pages/edicao";
import { AlterarSenha } from "../Pages/AlterarSenha";
import { RotaPrivada, RotaPrivadaAdm, RotaPrivadaToken } from "./validacao";
import { EnviarLogin } from "../Pages/enviar_login";
import { Token } from "../Pages/token";
import FAQ from "../Pages/FAQ";
import CadastroUsuarioADM from "../Pages/CadastroUsuarioADM"



export const Rotas = () => {
  return (
    //Rotas da aplicação
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/form" element={<Form />} />

        <Route
          path="/welcome"
          element={
            <RotaPrivada>
              <Welcome />
            </RotaPrivada>
          }
        />
        <Route path="/FAQ" element={<FAQ />} />

        <Route
          path="/tabela"
          element={
            <RotaPrivadaAdm>
              <Table />
            </RotaPrivadaAdm>
          }
        />

        <Route
          path="/dashboard"
          element={
            <RotaPrivadaAdm>
              <Dashboard />
            </RotaPrivadaAdm>
          }
        />

        <Route
          path="/cadastrousuarioadm"
          element={
            <RotaPrivada>
              <CadastroUsuarioADM />
            </RotaPrivada>
          }
        />

        <Route
          path="/editar"
          element={
            <RotaPrivada>
              <Edicao />
            </RotaPrivada>
          }
        />

        <Route path="/procuraEmail" element={<EnviarLogin />} />

        <Route
          path="/validaToken"
          element={
            <RotaPrivadaToken>
              <Token />
            </RotaPrivadaToken>
          }
        />
        <Route
          path="/alterarSenha"
          element={
            <RotaPrivadaToken>
              <AlterarSenha />
            </RotaPrivadaToken>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
