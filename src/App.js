import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from "react-router-dom";

import Home from './Routes/Home/Home.jsx';
import Login from './Routes/Login/Login.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
