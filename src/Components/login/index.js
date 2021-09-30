import React from 'react'
import "./style.css"
import { loginUrl } from '../../spotify'
function Login() {
    return (
        <div className="login">
            <h1>I am A login Page</h1>

            <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol-500x152.jpg" alt="" />


            <a href={loginUrl}>
                LogIn with Spotify
            </a>

        </div>
    )
}

export default Login
