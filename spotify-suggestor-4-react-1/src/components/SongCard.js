import React, { useState, useEffect } from 'react';
import { SongCardContainer } from './Styles';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Song = () => {

    const [songs, setSongs] = useState();

    // fetch songs 
    // useEffect(() => {
    //     axiosWithAuth()
    //     .get('/api/songs')
    //     .then(res => {
    //         console.log(res)
    //         setSongs(res.data)
    //     })
    //     .catch(err => console.log(err))
    // },[])

    // add song (probably won't be in finished project but for MVP)
    // const addSong = e => {
    //     e.preventDefault();
    //     axiosWithAuth()
    //     .post('/api/songs', songs)
    //     .then(res => {
    //         console.log(res)

    //     })
    //     .catch(err => console.log(err))
    // }

    // update song (maybe only the details of the song for MVP)
    // const updateSong = e => {
    //     e.preventDefault();
    //     axiosWithAuth()
    //     .put(`/api/songs/${id}`, item)
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .err(err => console.log(err))
    // }

    return (
    <SongCardContainer>
        {/* Come back and map over the song data maybe create seperate component
        for each song */}
        {/* {songs.map(song => {
            return (
                <div>
                    <p>Album cover <img></img></p>
                    <p>Song Name</p>
                    <p>Artist</p>
                    <p>Description</p>
                </div>
            )
        })} */}
        <p>Song Data</p>
    </SongCardContainer>
    )
}

export default Song;