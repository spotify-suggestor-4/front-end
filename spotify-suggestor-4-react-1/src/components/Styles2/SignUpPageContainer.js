import styled from "styled-components";

//brand black #211620
//turqouise #08FDEE
//Main pink #FE28E0
//Red pink #FC1980

const SignUpPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0;

  @media only screen and (max-device-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 0;
  }

  @media only screen and (max-device-width: 480px) {
    width: 100%;
    margin-left: 5%;
    /* flex-direction: row;
    justify-content: center;
    align-items: center; */
  }
`;

export default SignUpPageContainer;
