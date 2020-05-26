import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

import Button2 from "./Styles2/Button2";

const Form = () => {
  const [formState, setFormState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    terms: "",
  });

  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    terms: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState("");

  const [post, setPost] = useState([]);

  const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    email: yup.string().email("Must be a valid email").required(),
    password: yup
      .string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),

    role: yup.string(),

    terms: yup.boolean().oneOf([true], "Please agree to terms of use"),
  });

  useEffect(() => {
    console.log("form state change");
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  });

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
    validateChange(e);
    setFormState(newFormData);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://spotify-song-suggestor-api.herokuapp.com/api/auth/register", formState)
      .then((res) => {
        setPost(res.data);
        console.log("success", post);
        setFormState({
          user_name: "",
          email: "",
          password: "",
          terms: "",
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    //   sign up form container
    <div
      className='form-di
    v'
    >
      {/* //signup form */}
      <form className='form' onSubmit={formSubmit}>
        {/* //create user name input */}
        <label htmlFor='user_name'>
          First Name
          <input
            className='input'
            type='text'
            id='first_name'
            name='name'
            onChange={inputChange}
            value={formState.user_name}
          />
          {errors.first_name.length > 0 ? (
            <p className='error'>{errors.user_name}</p>
          ) : null}
        </label>
        <label htmlFor='user_name'>
          Last Name
          <input
            className='input'
            type='text'
            id='last_name'
            name='name'
            onChange={inputChange}
            value={formState.user_name}
          />
          {errors.last_name.length > 0 ? (
            <p className='error'>{errors.user_name}</p>
          ) : null}
        </label>
        {/* //email input */}
        <label htmlFor='email'>
          Email
          <input
            className='input'
            type='email'
            id='email'
            name='email'
            onChange={inputChange}
            value={formState.email}
          />
          {errors.email.length > 0 ? (
            <p className='error'>{errors.email}</p>
          ) : null}
        </label>

        {/* //password input */}
        <label htmlFor='password'>
          Password
          <input
            className='input'
            type='password'
            id='password'
            name='password'
            onChange={inputChange}
            value={formState.password}
          />
          {errors.password.length > 0 ? (
            <p className='error'>{errors.password}</p>
          ) : null}
        </label>

        {/* //accept terms input */}
        <label htmlFor='terms' className='terms'>
          <input
            type='checkbox'
            id='terms'
            name='terms'
            checked={formState.terms}
            onChange={inputChange}
          />
          I accept the Terms & Conditions
        </label>
        {/* //submit button */}
        <Button2 className='button' disabled={buttonDisabled} type='submit'>
          Finish
        </Button2>
      </form>
    </div>
  );
};

export default Form;

// ***** PREVIOUS CODE

//const SignUp = () => {
//   return (
//     <form>
//       <h2>Sign Up</h2>
//       <label>
//         {" "}
//         Username:
//         <input />
//       </label>
//       <label>
//         {" "}
//         Password:
//         <input />
//       </label>
//     </form>
//   );
// };

// export default SignUp;
