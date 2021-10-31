import React from 'react'
import "./style.css"
import SideBar from "./sidebar"
import Body from "./body"
import Footer from './footer'
function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player__body">
                <SideBar />
                <Body />
            </div>
            <Footer />
        </div>
    )
}

export default Player
