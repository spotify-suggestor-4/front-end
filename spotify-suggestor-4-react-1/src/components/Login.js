import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

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
        window.location.href = "/suggestor";
      })
      .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //   if (localStorage.getItem("token")) props.history.push("/");
  //   return () => props.clearErrorMessages();
  // }, []);
  // console.log({ isLoading: props.isLoading });

  return (
    <div className='login-page-container'>
      <header></header>
      <div className='login-form-container'>
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
          <Button2>Log In</Button2>
          <div className='register_link'>
            If you do not have an account with us,{" "}
            <Link to='/signup'> Sign up here</Link>.
          </div>
        </form>
        {/* //CLOSE FORM */}
      </div>
      {/* //CLOSE LOGIN CONTAINER */}
    </div>
    //CLOSE LOGIN PAGE
  );
};

// };

export default Login;
