import styled from 'styled-components';
import stadiumimg from '../Images/groupstadium-image.png';

// Logo
export const LogoContainer = styled.div`
    display: flex;
    p {
        color: #08FDEE
    }
`;

// Navbar
export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: #211620;

    a {
        text-decoration: none;
        color: white;
        margin: 1% 2%;
    }
`;

// Suggestor
export const SearchContainer = styled.div`
    text-align: center;
    background-image: url(${stadiumimg});
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 100% 100%;
    padding: 5%;
    
    h2, button {
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
        box-shadow: 0 4px 2px -2px #08FDEE;
    }

    button {
        background-color: #FC1980;
        width: 15%;
        padding: 0.3%;
        margin-bottom: 2%;
        border-radius: 5px;
        border-style: none;
        box-shadow: 0 4px 2px -2px #08FDEE;
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