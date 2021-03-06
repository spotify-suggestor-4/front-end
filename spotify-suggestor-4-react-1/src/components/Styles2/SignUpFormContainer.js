import styled from "styled-components";

//brand black #211620
//turqouise #08FDEE
//Main pink #FE28E0
//Red pink #FC1980

const SignUpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  width: 100%;

  @media only screen and (max-device-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 0;
  }

  @media only screen and (max-device-width: 750px) {
    margin-left: 0;
  }
  @media only screen and (max-device-width: 480px) {
    justify-content: center;
    width: 100%;
    align-content: space-around;
    align-items: baseline;
  }
`;

export default SignUpFormContainer;
