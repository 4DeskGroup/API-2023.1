import React, { Component } from 'react';
import './components/NavbarStyles.css';
import './App.css'
import './components/form.css'

import { Form } from './components/Form';
import { Rodape } from './components/Rodape';

 export default class App extends Component {
  render() {
    return(
      <div className="App">
        <Form />
        <Rodape />
        
     </div>
    );
  }
}


