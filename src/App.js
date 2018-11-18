import React, { Component } from 'react';
import {Route} from "react-router-dom";
import ReduxToastr from 'react-redux-toastr'

import Home from './Routes/Home/Home.jsx';
import Signin from './Routes/Signin/Signin.jsx';
import Search from './Routes/Search/Search.jsx';
import GlobalLoader from "./Components/Loader/GlobalLoader.jsx";

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/search" component={Search} />
        <ReduxToastr
          timeOut={4000}
          newestOnTop={true}
          preventDuplicates
          position="top-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
        />
        <GlobalLoader />
      </div>
    );
  }
}

export default App;
