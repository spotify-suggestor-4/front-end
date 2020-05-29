import React from "react";
import { Route, Link, Switch } from "react-router-dom";
// Components
import Login from "./components/Login";
import GettingStarted from "./components/GettingStarted";
import SignUp from "./components/SignUp";
import About from "./components/About";
import PrivateRoute from "./components/PrivateRoute";
import Suggestor from "./components/Suggestor";

// Styles
import { Navbar, LogoContainer } from "./components/Styles";
// Logo
import logo from "./Images/favicon2.png";
// testing changes

function App() {
  return (
    <div>
      <Navbar>
        <LogoContainer>
          <img src={logo} height='40px' alt='music notes logo' />
          <p>Song Suggestor</p>
        </LogoContainer>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>SignUp</Link>
        <a
          target='_blank'
          href='https://frosty-curran-67a339.netlify.app/about.html'
        >
          {" "}
          About
        </a>
      </Navbar>

      <Switch>
        <Route exact path='/signup'>
          <SignUp />
        </Route>
        {/* Change Suggestor to PrivateRoute once back-end is up */}
        <PrivateRoute exact path='/'>
          <Suggestor />
        </PrivateRoute>
        <Route exact path='/login'>
          <Login />
        </Route>

        {/* <Route exact path='/about'>
          <GettingStarted />
        </Route> */}
        {/* Home should probably take use to the suggestor??  and not sure we need as many Nav items considering*/}
        <Route exact path='/gettingstarted'>
          <GettingStarted />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
