import React from 'react';
import { SearchContainer, SuggestedSongsContainer } from './Styles';
import Song from './Song';

const Suggestor = () => {
    return (
    <>
        <SearchContainer>
            <h2>What would you like to discover today?</h2>
            <input 
            placeholder='Search by song title'
            maxLength='12'
            /> 
            <input 
            placeholder='Search by artist'
            maxLength='12'
            /> <br />
            <button>Search</button>
        </SearchContainer>
        <SuggestedSongsContainer>
            <Song />
        </SuggestedSongsContainer>
    </>
    )
}

export default Suggestor;