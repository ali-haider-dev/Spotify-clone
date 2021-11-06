import React, { useEffect, useState } from 'react';
import './App.css';
import Login from "./Components/login"
import Player from "./Components/Player"
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js"
import { useDataLayerValue } from './Components/Context/DataLayer';
const spotify = new SpotifyWebApi()

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue()

  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = " "
    const _token = hash.access_token
    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token
      })
      spotify.setAccessToken(_token)
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      })
      spotify.getPlaylist('37i9dQZF1DX7V3MgTiyyqp').then(response =>
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      )
    }
  }, [])


  spotify.getUserPlaylists().then((playlists) => {
    dispatch({
      type: "SET_PLAYLISTS",
      playlists: playlists,
    });
  }, []);
  console.log("spotify user", user)
  console.log("spotify token", token)
  return (
    <div className="app">

      {token ? <Player spotify={spotify} /> : (<Login />)}
    </div>
  );
}

export default App;
