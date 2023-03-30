import './SmallImage.css'
const SmallImage = (props)=>{
    const thumbnail = `thumbnail/${props.playing.id}.jpg`;
    return(
        <div className='tiny'>
            <img className='tinyImg' src={thumbnail} alt="" />
            <div className='tinySide'>
                <span className='tinyTitle'>{props.playing.title}</span>
                <span className='tinyAuthor'>{props.playing.author}</span>
            </div>
        </div>
    )
}
export default SmallImage;