import tracks from '../data/tracks';
import { useState } from 'react';
import './Author.css';
import {MdFavoriteBorder} from 'react-icons/md'
import {MdFavorite} from 'react-icons/md'
const Author = (props)=>{
    const [likes, setLikes] = useState(
        tracks.map((track) => track.like=false)
      );

      const trackClicked = (index)=>{
        props.setPlayingIndex(index);
        props.setPlaying(tracks[index]);
        props.setIsPlaying(true);
      }

      const imageshow= ()=>{
        const image =document.querySelector('.png-image')
        image.classList.remove('hidden')
      }
      setTimeout(imageshow, 500)
      const toggleLike = (id) => {
        const index = tracks.findIndex((track) => track.id === id);
        setLikes([
          ...likes.slice(0, index),
          {
            id: likes[index].id,
            author: likes[index].author,
            title: likes[index].title,
            like: !likes[index].like
          },
          ...likes.slice(index + 1)
        ]);
      };
    return(
        <div className='Author-container'>
            <div className='tracks-container' >
                {tracks.map((track, index)=>
                    <div className='tracks-item' key={track.id} >
                      <div className='clickable-area' onClick={()=>trackClicked(index)}>
                        <img className='spin-tiny' src={`/src/thumbnail/${track.id}.jpg`} alt="" height={100} width={100} />
                        <div className='track-text'>
                            <span className='track-text-title'>{track.title}</span>
                            <span className='track-text-author'>{track.author}</span>
                        </div>
                      </div>
                        <button className='like-container' onClick={()=>toggleLike(track.id)}>
                            {!likes[tracks.findIndex((e) => e.id === track.id)].like
                             ? <MdFavoriteBorder className='like-icon' />
                              : <MdFavorite className='like-icon' /> }
                        </button>
                        
                    </div>
                )}
            </div>
            <div className='author-img'>
              
              <div className='image-background'></div>
                <img className='png-image hidden' 
                src={`/src/backimg/${(props.playing.author).toLowerCase()}.png`} 
                alt="" />
              </div>
        </div>
    )
}
export default Author