import React from "react";
import {
  SearchContainer,
  SuggestedSongsContainer,
} from "./Styles";

import SongCard from "./SongCard";
import Button3 from "./Styles2/Button3";


const Suggestor = () => {


  return (
    <>
      <SearchContainer>
        <h2>What would you like to discover today?</h2>
        <input placeholder='Search by song' />
        <input placeholder='Search by artist' /> <br />
        <Button3>Search</Button3>
      </SearchContainer>
      <SuggestedSongsContainer>
        <SongCard />
      </SuggestedSongsContainer>
    </>
  );
};

export default Suggestor;
