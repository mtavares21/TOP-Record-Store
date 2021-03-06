import React from 'react'
import spotifyLogo from '../spotifylogowhite.png'

function Login () {
const originUrl = window.location.href;
const redirectUrl = encodeURIComponent(originUrl+'callback')
console.log(redirectUrl)
const authUrl = `https://accounts.spotify.com/authorize?client_id=68c3e415374845b885e86cf8f1cff7d0&redirect_uri=${redirectUrl}&response_type=token`
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