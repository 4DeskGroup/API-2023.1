import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Form } from "../Pages/Form";
import Login from "../Pages/login";
import Welcome from "../Pages/Welcome";
import Table from "../Pages/Tabela/Table";
import Dashboard from "../Pages/Dashboard";
import { EdicaoCarlin } from "../Pages/edicaoCarlin";
import { Edicao } from "../Pages/edicao";

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
                <Route path="/edicaoCarlin" element={<EdicaoCarlin />} />
                <Route path="/edicao" element={<Edicao />} />
            </Routes>
        </BrowserRouter>
    )
}