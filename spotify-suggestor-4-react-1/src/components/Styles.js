import styled from "styled-components";
import stadiumimg from "../Images/groupstadium-image.png";

// Logo
export const LogoContainer = styled.div`
  display: flex;
  margin: 0px 10px;
  p {
    color: #08fdee;
    margin: 16px 10px;
  }
  img {
    margin-top: 4px;
  }
`;

// Navbar
export const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #211620;
  align-items: center;
  border-bottom: 1px solid #fe28e0;
  a {
    text-decoration: none;
    color: white;
    @media only screen and (max-device-width: 480px) {
      margin: 8px;
    }
  }

  @media only screen and (max-device-width: 480px) {
    flex-direction: column;
    justify-content: space-around;
    align-content: space-between;
    font-size: 1.6rem;
  }
`;

// Suggestor
export const SearchContainer = styled.section`
  text-align: center;
  background-image: url(${stadiumimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 100% 100%;
  padding: 7%;

  h1 {
    margin: 0;
    font-size: 3.2rem;
    text-shadow: 0 4px 2px -2px #fc1980;
    box-shadow: 0 4px 4px -2px #08fdee;

    @media only screen and (max-device-width: 480px) {
      font-size: 2rem;
    }
  }

  h3 {
    margin-top: 5%;
    font-size: 2rem;

    @media only screen and (max-device-width: 480px) {
      font-size: 1.6rem;
    }
  }

  input {
    border-radius: 5px;
    border-style: none;
    text-align: left;
    padding: 0.3%;
    width: 30%;

    /* Top, Right, Bottom, Left */
    margin: 5%;
    box-shadow: 0 4px 2px -2px #08fdee;

    @media only screen and (max-device-width: 480px) {
      display: flex;
      width: 300px;
      height: 52px;
    }
  }

  button {
    background-color: #fc1980;
    width: 25%;
    margin-top: 36px;
    padding: 0.7%;
    border-radius: 8px;
    border-style: none;
    box-shadow: 0 3px 2px -2px #08fdee;

    @media only screen and (max-device-width: 480px) {
      width: 300px;
    }
  }
`;

// Suggested Songs
export const SuggestedSongsContainer = styled.section`
  background-color: #211620;
  padding: 5% 5% 5% 5%;
`;

export const SongCardContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  text-align: center;
  padding: 2% 2% 2% 2%;
`;
