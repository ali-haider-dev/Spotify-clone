import React from 'react'
import "./style.css"
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import { PlaylistPlay, VolumeDown } from '@material-ui/icons';
function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC-CRaFPlmkC234PYij3tfP0J2xqgQ6HfUuQ&usqp=CAU" alt="" className="footer__albumLogo" />
                <div className="footer_songInfo">
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlay />
                    </Grid>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continous-slide" />
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}

export default Footer
