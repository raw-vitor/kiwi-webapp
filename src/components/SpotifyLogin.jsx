import React from "react";
import { useEffect, useState } from "react";
import { If } from "./If";

export const SpotifyLogin = (props) => {
    const CLIENT_ID = "49828fe57f664743bc224643841b36d0";
    const REDIRECT_URI = "http://localhost:3000/SpotifyQueue";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";

    const [token, setToken] = useState("");
    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem("token");
        if(!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
            window.location.hash = "";
            window.localStorage.setItem("token", token);
            setToken(token)
        }
    }, [])

    const logout = () => {
        setToken("");
        window.localStorage.removeItem("token")
    }

    return (
        <>
            <h1>Login as host</h1>
                <If test={!token}>
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
                        Authenticate to spotify
                    </a>
                </If>
                <If test={token}>
                    <button onClick={logout}>Logout</button>
                </If>
               
        </>
    )
}