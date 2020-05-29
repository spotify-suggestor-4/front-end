import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import LoginPageContainer from "./Styles2/LoginPageContainer";
import LoginFormContainer from "./Styles2/LoginFormContainer";
import Button2 from "./Styles2/Button2";
const Login = (props) => {
  //set user
  const [user, setUser] = useState({ username: "", password: "" });
  console.log(props);
  //handle change
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  //login submit
  const handleLoginSubmit = (event) => {
    //prevent default browser actions
    event.preventDefault();
    //user status and push to new
    // props.login(user, (status) =>
    //   status
    //     ? props.history.push(props.location.state?.url || "/")
    //     : props.history.push("/login")
    // );
    axiosWithAuth()
      .post("/api/auth/login", user)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res);
        window.location.href = "/";
      })
      .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //   if (localStorage.getItem("token")) props.history.push("/");
  //   return () => props.clearErrorMessages();
  // }, []);
  // console.log({ isLoading: props.isLoading });

  return (
    <LoginPageContainer>
      <div className='image-card-3'></div>

      <LoginFormContainer>
        <form className='login-form' onSubmit={handleLoginSubmit}>
          <span>
            <h1>Log in</h1>
          </span>
          <div>Please log in using the form below.</div>
          <label>Username:</label>
          <input
            type='text'
            name='username'
            id='name'
            onChange={(event) => handleChange(event)}
            value={user.username}
          />
          <label>Password:</label>
          <input
            type='password'
            name='password'
            id='password'
            onChange={(event) => handleChange(event)}
            value={user.password}
          />
          <Link to='/'>
            <Button2 className='btn-3'>Log In</Button2>
          </Link>
          <div className='register_link'>
            <p>
              {" "}
              Don't have an account? <Link to='/signup'> Sign up here</Link>.
            </p>
          </div>
        </form>
        {/* //CLOSE FORM */}
      </LoginFormContainer>
      {/* //CLOSE LOGIN CONTAINER */}
    </LoginPageContainer>
    //CLOSE LOGIN PAGE
  );
};

// };

export default Login;
