import React, { Component } from 'react';
import {Route} from "react-router-dom";

import Home from './Routes/Home/Home.jsx';
import Login from './Routes/Login/Login.jsx';
import Signin from './Routes/Signin/Signin.jsx';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signin" component={Signin} />
      </div>
    );
  }
}

export default App;
