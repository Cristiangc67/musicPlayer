import { useState, useEffect } from 'react';
import {
    IoPlaySkipBackSharp,
    IoPlaySkipForwardSharp,
    IoPlaySharp,
    IoPauseSharp
} from 'react-icons/io5';
import './Controls.css'

const Controls = (props)=>{
    /* const [isPlaying, setIsPlaying] = useState(false); */

const autoPlaySkipForward = () =>{
    props.skipForward(); 
    props.setIsPlaying(true);
}
const autoPlaySkipBack = () =>{
    props.skipBack();
    props.setIsPlaying(true);
}

//console.log(props.audioRef)

    const pauseHandler = () =>{
        if(props.isPlaying === false){
            props.setIsPlaying(true);
        }else{
            props.setIsPlaying(false);
        }
    }
    useEffect(() => {
        if(props.isPlaying === true) { 
            props.audioRef.current.play();
        }else{
            props.audioRef.current.pause();
        }
    }, [props.isPlaying, props.audioRef])


    return(
        <div>
            <div className='actions'>
                <button onClick={autoPlaySkipBack}>
                    <IoPlaySkipBackSharp className='playerIcon' />
                </button>
                <button className='main' onClick={pauseHandler}>
                {props.isPlaying ? <IoPauseSharp id='pause'/> : <IoPlaySharp  id='play' /> }
                </button>
                <button onClick={autoPlaySkipForward}>
                    <IoPlaySkipForwardSharp className='playerIcon' />
                </button>
            </div>
        </div>
    )
};
export default Controls;