import { useState } from 'react';
import './ProgressBar.css';
import {MdVolumeOff} from 'react-icons/md'
import {MdVolumeUp} from 'react-icons/md'

const ProgressBar = (props)=>{
    const [volume, setVolume] = useState(1);
    const [prevVolume, setPrevVolume] = useState(1);
    
    

    /* ----- Formating time ----- */
         //total Time
    const durationSeconds = Math.floor(props.duration);
    const minutes = Math.floor(durationSeconds/60);
    const seconds = durationSeconds - (minutes*60);
    const timeMinutes = minutes < 10 ? `0${minutes}` : `${minutes}` ;
    const timeSeconds = seconds < 10 ? `0${seconds}` : `${seconds}` ;

     
        //actual Time
    const actualTime = Math.floor(props.currentTime);
    const actualMin = Math.floor(actualTime/60);
    const actualSeconds = actualTime - (actualMin*60);
    const actualFormatMin = actualMin < 10 ? `0${actualMin}` : `${actualMin}` ;
    const actualFormatSec =  actualSeconds < 10 ? `0${actualSeconds}` : `${actualSeconds}` ;

    /* ------------------------- */

    /* -----Bar Filling----- */
    const barFilling = ()=>{
        if(props.currentTime > 0){
            const bar = document.querySelector('.progress-bar')
            bar.style.backgroundSize = `${(props.currentTime/props.duration)*100}% 100%`
        }
    }
    barFilling();
    /* --------------- */
    
    const volumeHandler= ()=>{
        const volumeInput = document.querySelector('.volume-bar');
        props.audioRef.current.volume = volumeInput.value/100;
        setVolume(volumeInput.value/100)
    }


    const timeChangeHandler = () => {
        props.audioRef.current.currentTime = props.progressBarRef.current.value;
      };

    const muteHandler = () =>{
        setPrevVolume(props.audioRef.current.volume);
       
        if(volume===0){
            setVolume(prevVolume);
            props.audioRef.current.volume = prevVolume;            
        }else{
            setVolume(0);
            props.audioRef.current.volume = 0;
            
        }
    }
    

    return(
        
        <div className='progress'>
            
            <div className='progressPlusTime'>
                <span>{`${actualFormatMin}:${actualFormatSec}`}</span>
                <input value={props.currentTime} 
                onChange={timeChangeHandler} 
                type="range" 
                className='progress-bar' 
                ref={props.progressBarRef} 
                min="0" max={props.duration} />
                <span>{`${timeMinutes}:${timeSeconds}`}</span>
            </div>
            <div className='volume-container'>
                <button className='volume-button' onClick={muteHandler} >
                    {volume===0 ? 
                    <MdVolumeOff className='volumeIcon'/> :
                     <MdVolumeUp className='volumeIcon'/>}
                </button>
 
                <input type="range" 
                value={volume*100} 
                onChange={volumeHandler} 
                className="volume-bar" 
                min="0" max="100"/>

            </div>
            
        </div>
    )
};
export default ProgressBar;