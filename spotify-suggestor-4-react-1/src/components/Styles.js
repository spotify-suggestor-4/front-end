import styled from 'styled-components';

export const Navbar = styled.nav`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    display: flex;
    justify-content: space-between;
    background-color: #211620;
    
    a {
        text-decoration: none;
        color: white;
        font-family: 'Roboto', sans-serif;
    }
`;

// Suggestor
export const SearchContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    
    text-align: center;

    
    h2, button {
        font-family: 'Roboto', sans-serif;
    }

    input {
        border-radius: 5px;
        /* border-style: none; */
        text-align: center;
        padding: 0.3%;
        width: 10%;
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

export const SongCard = styled.div`
    background-color: white;
    text-align: center;
    padding: 2% 2% 2% 2%;
`;