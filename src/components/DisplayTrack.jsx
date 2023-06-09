import BigPicture from './BigPicture';
import Author from './Author';
import SearchBar from './SearchBar';
import './DisplayTrack.css';
const DisplayTrack = (props)=>{
    const thumbnail = `/thumbnail/${props.playing.id}.jpg`;

    const onLoadedMetadata = () => {
        const seconds = props.audioRef.current.duration;
        props.setDuration(seconds);
        props.progressBarRef.current.max = seconds;
      };
    const handleTimeUpdate = (event) =>{
        const { currentTime} = event.target;
        props.setCurrentTime(currentTime)

    }
    return(
        <div className='display'>
            <audio src={`/music/${props.playing.id}.mp3`} 
                ref={props.audioRef} 
                autoPlay 
                onEnded={props.skipForward}
                onLoadedMetadata={onLoadedMetadata}
                onTimeUpdate={handleTimeUpdate}
            />
            <section className='display-main'>
                <div className='search'>
                    <SearchBar/>
                </div>
                <Author playing={props.playing} 
                setPlaying={props.setPlaying} 
                setPlayingIndex={props.setPlayingIndex}
                setIsPlaying={props.setIsPlaying}
                audioRef={props.audioRef}
                />
            </section>
            
        </div>
    )
};
export default DisplayTrack;