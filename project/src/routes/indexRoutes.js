import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Form } from "../Pages/Form";
import Login from "../Pages/login";
import Welcome from "../Pages/Welcome";
import Table from "../Pages/Tabela/Table";
import Dashboard from "../Pages/Dashboard";
import { Edicao } from "../Pages/edicao";
import { ProcuraLogin } from "../Pages/procuraEmail";
import EnviaEmail from "../Pages/enviaEmail";
import { ValidaToken } from "../Pages/validaToken";
import { AlterarSenha } from "../Pages/AlterarSenha";
export const Rotas = () => {
    return (
        //Rotas da aplicação
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/form" element={<Form />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/tabela" element={<Table />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/edicao" element={<Edicao />} />
                <Route path="/procuraEmail" element={<ProcuraLogin/>} />
                <Route path="/enviaEmail" element={<EnviaEmail />} />
                <Route path="/validaToken" element={<ValidaToken />} />
                <Route path="/alterarSenha" element={<AlterarSenha />} />
            </Routes>
        </BrowserRouter>
    )
}