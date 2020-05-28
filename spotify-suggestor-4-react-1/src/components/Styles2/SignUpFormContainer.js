import styled from "styled-components";

//brand black #211620
//turqouise #08FDEE
//Main pink #FE28E0
//Red pink #FC1980

const SignUpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15%;

  @media only screen and (max-device-width: 480px) {
    justify-content: center;
  }
`;

export default SignUpFormContainer;
