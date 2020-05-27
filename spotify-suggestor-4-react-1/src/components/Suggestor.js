import React from "react";
import { SearchContainer, SuggestedSongsContainer } from "./Styles";
import axiosWithAuth from "../utils/axiosWithAuth";
import SongCard from "./SongCard";
import Button3 from "./Styles2/Button3";

// just some ideas for filtering songs. still need backend data
// const initialState = {
//   songs: {
//     song_name: '',
//     song_artist: ''
//   }
// }

const Suggestor = () => {
  // recommend a song (probably change post and add filter, )
  // const recommendSong = e => {
  //   e.preventdefault()
  //   axiosWithAuth()
  //   .post(`/api/songs`, {track_id})
  //   .then(res => {

  //   })
  // }

  // delete song (might go into different component for onClick with button)
  // const deleteSongs = (e, item) => {
  //   e.preventDefault();
  //   axiosWithAuth()
  //   .delete(`/api/songs/${item.id}`)
  //   .then(res => {
  //     console.log(res)
  //   })
  //   .catch(err => console.log(err))
  // }

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
