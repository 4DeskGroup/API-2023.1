import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AppRoutes from './AppRoutes';
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './styles/styles.scss'

ReactDOM.render(
    <BrowserRouter>
        <div className="font-poppins vh-100 w-100">
            <AppRoutes/>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);

reportWebVitals();