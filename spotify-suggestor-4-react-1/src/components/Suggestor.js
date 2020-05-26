import React, { useState } from 'react';
import { SearchContainer, SuggestedSongsContainer } from './Styles';
import SongCard from './SongCard';

const Suggestor = () => {

    // const [searchTitle, setSearchTitle] = useState('');
    // const [searchArtist, setSearchArtist] = useState('');

    // useEffect(() => {

    // })

    return (
    <>
        <SearchContainer>
            <h2>What would you like to discover today?</h2>
            <input 
            placeholder='Search by song'
            
            /> 
            <input 
            placeholder='Search by artist'
            
            /> <br />
            <button>Search</button>
        </SearchContainer>
        <SuggestedSongsContainer>
            <SongCard />
        </SuggestedSongsContainer>
    </>
    )
}

export default Suggestor;