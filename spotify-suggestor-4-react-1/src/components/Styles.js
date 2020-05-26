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
<<<<<<< HEAD
  display: flex;
  justify-content: space-between;
  background-color: #211620;
  padding: 5px;
  a {
    text-decoration: none;
    color: white;
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

  h2,
  button {
    margin: 0;
  }

  input {
    border-radius: 5px;
    border-style: none;
    text-align: center;
    padding: 0.3%;
    width: 13%;
    /* Top, Right, Bottom, Left */
    margin: 1.5% 3% 2% 0;
    box-shadow: 0 4px 2px -2px #08fdee;
  }

  button {
    background-color: #fc1980;
    width: 15%;
    padding: 0.7%;
    border-radius: 5px;
    border-style: none;
    box-shadow: 0 4px 2px -2px #08fdee;
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
