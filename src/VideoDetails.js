import React,{useState,useEffect} from 'react'
import './Videodetails.css'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import {Posts} from './Posts'
import Avatar from 'react-avatar';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import DownloadIcon from '@mui/icons-material/Download';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Videocard from './Videocard'
import Videocardd from './Videocardd'
function VideoDetails(props) {
    const params=useParams();
    const itemToShow = params.itemToShow
    
    const elementArray = Posts.filter(item => item.id ==itemToShow)
    const [ itemFound ] = elementArray
    // const [nextVideo,setVideos]=useState('');
    
    // useEffect(() => {
    //     setVideos();
    //   });

    //   const [fruits, setFruits] = useState([]);

    //   const removeElement = (id) => {
    //     const newFruits = Posts.filter(
    //       (fruit) => fruit.id !== id
    //     );
    //     setFruits(newFruits);
    //   };


  return (
    <div className='details'>
       <div className='exactvideo'>
       <ReactPlayer height="50%" width="95%"  controls url={itemFound.video} />
       <p>{itemFound.description}</p> 
       <div className='main'> 
                 <div className='main-left'>
                 <Avatar src={itemFound.peronal}  googleId="118096717852922241760" size="100" round={true} />
                 <p>{itemFound.title}</p>
                 <div className='subscribe'>
                 <h3>Subscribe</h3>
                </div>
                 </div>
          <div className='main-right'>
          <ThumbUpOffAltIcon className='up' />
          <ThumbDownOffAltIcon className='down' />
          <ScreenShareIcon className='share' />
           <DownloadIcon className='download' />
           <MoreHorizIcon className='more' />
          </div>

    </div>
    <p>{itemFound.content} views</p>
    </div>
    <div className='othervideo'>
    {Posts.map((value=>
        <Videocardd  key={value.id}
        id={value.id}
        themp={value.themp}
        peronal={value.peronal}
        title={value.title}
        description={value.description}
        video={value.video} 
        content={value.content} />    
        ))}
       </div>
        </div>
  )
}
export default VideoDetails