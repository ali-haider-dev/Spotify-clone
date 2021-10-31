import React from 'react'
import SideBarOption from './sideBarOption'
import "./style.css"
import HomeIcon from '@material-ui/icons/Home';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SearchIcon from '@material-ui/icons/Search';
import { useDataLayerValue } from '../../Context/DataLayer';
function SideBar() {
    const [{ playlists }, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol-500x152.jpg" className="sidebar__logo" alt="" />
            <SideBarOption Icon={HomeIcon} title="Home" />
            <SideBarOption Icon={SearchIcon} title="Search" />
            <SideBarOption Icon={LibraryMusicIcon} title="Library" />
            <br />
            <strong className="sidebar__Playlist" >PLAYLIST</strong>
            <hr />
            {playlists?.items?.map(playlist => (
                <SideBarOption title={playlist.name} />
            ))}
        </div>
    )
}

export default SideBar
