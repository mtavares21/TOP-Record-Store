import React from 'react'
import spotifyLogo from '../spotifylogowhite.png'

function Login () {
const authUrl = 'https://accounts.spotify.com/authorize?client_id=68c3e415374845b885e86cf8f1cff7d0&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&response_type=token'
return(
    <div className='login'>
        <div className= 'loginCard'>
        <h3> Login to your Spotify. </h3>
        <img src={spotifyLogo} alt='Spotify Logo'/>
        <button><a href={authUrl}>Spotify Login</a></button>
        </div>
    </div>
    )
}

export default Login