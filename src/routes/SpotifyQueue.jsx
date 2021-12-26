import React from "react";
import '../App.css'
import { CssBaseline } from "@mui/material";
import { Typography } from "@mui/material";
import { SpotifyLogin } from "../components/SpotifyLogin.jsx"

export const SpotifyQueue = (props) => {
    return (
    <div className="App">
      <CssBaseline/>
      <Typography>Spotify Queue</Typography>
      <SpotifyLogin></SpotifyLogin>



    </div>
    )
}