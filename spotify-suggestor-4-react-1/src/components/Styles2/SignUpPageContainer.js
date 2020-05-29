import styled from "styled-components";

//brand black #211620
//turqouise #08FDEE
//Main pink #FE28E0
//Red pink #FC1980

const SignUpPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10%;
  width: 100%;

  @media only screen and (max-device-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-left: 15%;
    width: 80%;
  }
  @media only screen and (max-device-width: 650px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 15%;
    width: 80%;
  }

  @media only screen and (max-device-width: 480px) {
    width: 90%;
    margin-left: 5%;
    justify-content: center;
    align-content: center;
    justify-items: left;
  }
`;

export default SignUpPageContainer;
