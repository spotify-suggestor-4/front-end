import React from "react";
import { Route, Link, Switch } from "react-router-dom";
//temporary placeholder
import logo from "./Images/logo.png";

//components import
import Header from "./Components/Header";
import Home from "./Components/Home";
import Form from "./Components/Form";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

//style imports
import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
    </div>
  );
}

export default App;
