import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const SignUpForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
    role: "",
  });

export default SignUpForm;

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
