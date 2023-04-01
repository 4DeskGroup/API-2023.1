import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { Form } from "../Pages/Form";
import Login from "../Pages/login";

export const Rotas = () => {
    return (
        //Rotas da aplicação
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/form" element={<Form />} />
            </Routes>
        </BrowserRouter>
    )
}