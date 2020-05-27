import React from "react";
import { SearchContainer, SuggestedSongsContainer } from "./Styles";

import SongCard from "./SongCard";
import Button3 from "./Styles2/Button3";

const Suggestor = () => {
  return (
    <>
      <SearchContainer>
        <h1>What would you like to discover today?</h1>
        <h3>Search by:</h3>
        <input placeholder='  Enter song title' />
        <input placeholder='  Enter artist name' /> <br />
        <Button3>Search</Button3>
      </SearchContainer>
      <SuggestedSongsContainer>
        <SongCard />
      </SuggestedSongsContainer>
    </>
  );
};

export default Suggestor;
