import styled from "styled-components";

//brand black #211620
//turqouise #08FDEE
//Main pink #FE28E0
//Red pink #FC1980

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 5%;
  margin-left: 8%;
  margin-right: 5%;
  width: 90%;

  /* //done */

  @media only screen and (max-device-width: 480px) {
    width: 80%;
    flex-direction: column;
    font-size: 1.6rem;
    margin-left: 10%;
  }
`;

export default LoginPageContainer;
