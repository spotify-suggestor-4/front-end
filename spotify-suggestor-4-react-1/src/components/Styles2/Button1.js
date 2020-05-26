import styled from "styled-components";

//brand black #211620
//turqouise #08FDEE
//Main pink #FE28E0
//Red pink #FC1980

const Button1 = styled.button`
  width: 200px;
  height: 52px;
  background-color: #211620;
  color: #08fdee;
  padding: 4px;
  font-size: 20px;
  border-radius: 8px;
  &:hover {
    background-color: #08fdee;
    color: #211620;
    font-weight: bolder;
  }
  a {
    color: #ffffff;
  }
`;

export default Button1;
