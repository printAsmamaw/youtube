import React,{useState} from 'react'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import "./Videocardd.css"
import {Posts} from './Posts'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HoverVideoPlayer from 'react-hover-video-player';

function Remove({id,themp,peronal,title,description,video,content}) {
  return (
    <div className='next-video'>
        <Link to={`/video-details/${id}`} style={{color:'white',textDecoration: 'none'}}>
    <div className='card'>
     
      {/* <video  controls width="100%" className='video_size'>
      <source src="http://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4" type="video/mp4"
      />
    </video> */}  
    <HoverVideoPlayer className="video_size"
      videoSrc={video}
      pausedOverlay={
        <img
          src={themp}
          alt=""
          style={{
            // Make the image expand to cover the video's dimensions
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      }
      loadingOverlay={
        <div className="loading-overlay">
          <div className="loading-spinner" />
        </div>
      }
    />


    <div className='all_desc'>
    <div className='description'>
      <h5>{title}</h5>
    <MoreVertIcon />
    </div>
    <div className='info'>
    <p>{description}</p>
    <p>{content}M views. from 7 years ago</p>
    </div>
    </div>
    </div>
    </Link>
    </div>
  )
}

export default Remove