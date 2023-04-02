import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Form } from "../Pages/Form";
import Login from "../Pages/login";
import Welcome from "../Pages/Welcome";
import Table from "../Pages/Tabela/Table";

export const Rotas = () => {
    return (
        //Rotas da aplicação
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/form" element={<Form />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/tabela" element={<Table />} />
            </Routes>
        </BrowserRouter>
    )
}