import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';
import SmallImage from './SmallImage';
import SideBar from './SideBar'

import tracks from '../data/tracks'
import { useRef, useState } from 'react';
import autoPlaySkipForward from './Controls';
import './AudioPlayer.css';


 const AudioPlayer = ()=>{
    const [playingIndex, setPlayingIndex] = useState(0);
    const [playing, setPlaying]= useState(tracks[playingIndex]);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);



    const audioRef = useRef();
    const progressBarRef = useRef();
    
    const skipForward = ()=>{
        
        if(playingIndex >= tracks.length-1){
            setPlayingIndex(0);
            setPlaying(tracks[0]);
        }else{
            setPlayingIndex((prev)=> prev + 1);
            setPlaying(tracks[playingIndex+1])
        }
        
    };
    const skipBack = ()=>{
        if(playingIndex <= 0){
            setPlayingIndex(tracks.length-1);
            setPlaying(tracks[tracks.length-1]);
        }else{
            setPlayingIndex((prev)=> prev - 1);
            setPlaying(tracks[playingIndex-1])
        }
    }

    return(
    <div className='audioPlayer'>
        <div className='interface'>
            <SideBar/>
            <DisplayTrack audioRef={audioRef} progressBarRef={progressBarRef} 
            playing={playing} skipForward={skipForward}
            setDuration={setDuration} 
            setCurrentTime={setCurrentTime}
            setPlaying={setPlaying}
            playingIndex={playingIndex} 
            setPlayingIndex={setPlayingIndex}
            isPlaying={isPlaying} 
            setIsPlaying={setIsPlaying}            
            /> 
        </div>
        
        <div className='bottombar'>
            <SmallImage playing={playing}/>
            <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} skipBack={skipBack} skipForward={skipForward} />
            <ProgressBar progressBarRef={progressBarRef} duration={duration} audioRef={audioRef}  
            setCurrentTime={setCurrentTime} currentTime={currentTime} />
        </div>
        
    </div>
    )
}
export default AudioPlayer