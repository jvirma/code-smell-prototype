import React from 'react';
import {Route} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import logo from './logo.png';
import Home from './components';

import './App.css';

function App() {
  return (
    <>
    <CssBaseline/>
      <Route exact path={"/"} component={Home}/>
    </>
  );
}

export default App;
