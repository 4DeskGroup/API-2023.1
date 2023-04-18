import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { Form } from "../Pages/Form";
//import Login from "../Pages/login";
//import Welcome from "../Pages/Welcome";
import Table from "../Pages/Tabela/Table";
import Dashboard from "../Pages/Dashboard";



export const Rotas = () => {
    return (
        //Rotas da aplicação
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                {/*<Route path="/form" element={<Form />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/tabela" element={<Table />} />*/}
                <Route path="/tabela" element={<Table />}/>
            </Routes>
        </BrowserRouter>
    )
}