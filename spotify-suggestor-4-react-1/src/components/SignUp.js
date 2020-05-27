import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Button2 from "./Styles2/Button2";

const Form = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    // terms: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    // terms: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState("");

  const [post, setPost] = useState([]);

  const formSchema = yup.object().shape({
    username: yup.string().required("Username is a required field"),
    email: yup.string().email("Must be a valid email").required(),
    password: yup
      .string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),

    role: yup.string(),

    // terms: yup.boolean().oneOf([true], "Please agree to terms of use"),
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
    axiosWithAuth()
      .post("/api/auth/register", formState)
      .then((res) => {
        setPost(res.data);
        console.log(res.data);
        console.log("success", post);
        window.location.href = "/login";
        setFormState({
          username: "",
          email: "",
          password: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    //   sign up form container
    // <div className='form-div'>
    //   <div className='image-card-2'></div>
    <div className='signup-page-container'>
      <div className='image-card-2'></div>

      {/* //signup form */}
      <div className='signup-form-container'>
        <form className='form' onSubmit={formSubmit}>
          <h2>Please create...</h2>
          {/* //create user name input */}
          <label htmlFor='username'>
            User Name
            <input
              className='input'
              type='text'
              id='username'
              name='username'
              onChange={inputChange}
              value={formState.username}
            />
            {errors.username.length > 0 ? (
              <p className='error'>{errors.username}</p>
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
          {/* <label htmlFor='terms' className='terms'>
          <input
            type='checkbox'
            id='terms'
            name='terms'
            checked={formState.terms}
            onChange={inputChange}
          />
          I accept the Terms & Conditions
        </label> */}
          {/* //submit button */}
          <Button2 className='btn-3' disabled={buttonDisabled} type='submit'>
            Finish
          </Button2>
        </form>
      </div>
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
