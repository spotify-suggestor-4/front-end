import React from "react";
import { Route, Link, Switch } from "react-router-dom";
// Components
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import About from './components/About';
import PrivateRoute from './components/PrivateRoute';
import Suggestor from './components/Suggestor';
// Styles
import { Navbar, LogoContainer } from './components/Styles';
// Logo
import logo from './Images/favicon2.png';
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
        <Link to='/about'>About</Link>
      </Navbar>

      <Switch>
        <Route exact path='/signup' ><SignUp /></Route>
        {/* Change Suggestor to PrivateRoute once back-end is up */}
        <PrivateRoute exact path='/suggestor' >
          <Suggestor />
        </PrivateRoute>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        {/* Home should probably take use to the suggestor??  and not sure we need as many Nav items considering*/}
        <Route exact path='/'>
          <GettingStarted />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
