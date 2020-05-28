//Login Form container

import styled from "styled-components";

//brand black #211620
//turqouise #08FDEE
//Main pink #FE28E0
//Red pink #FC1980

const LoginFormContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 0;

  @media only screen and (max-device-width: 480px) {
    width: 100%;
    margin-top: 36px;
  }
`;

export default LoginFormContainer;
