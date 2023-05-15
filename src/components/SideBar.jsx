import {MdHomeFilled} from "react-icons/md";
import {MdFavorite} from "react-icons/md";
import {MdMusicNote} from "react-icons/md";
import {MdSettings} from "react-icons/md";
import  './SideBar.css'

const SideBar = ()=>{
    return(
        <div> 
            
            <div className="sidebar">
                <button className="sidebar-item">
                    <MdHomeFilled className="icon" />
                </button>
                <button className="sidebar-item">
                    <MdFavorite className="icon" />
                </button>
                <button className="sidebar-item">
                    <MdMusicNote className="icon" />
                </button>
                <button className="sidebar-item">
                    <MdSettings className="icon" />
                </button>
            </div>
            <svg width="0" height="0">
                <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#e16df5" offset="0%" />
                    <stop stopColor="#4ef8e7" offset="100%" />
                </linearGradient>
            </svg>
        </div>
    )
}
export default SideBar;