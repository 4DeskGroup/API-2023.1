import React, { Component } from 'react';
import Login from './components/login';
import './components/LoginCSS.css'


 export default class App extends Component {
  render() {
    return(
      <div className="App">
        <Login />
     </div>
    );
  }
}


