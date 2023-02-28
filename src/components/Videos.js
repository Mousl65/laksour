import React from 'react'
import ReactPlayer from 'react-player';
import video3 from '../components/videos/video3.mp4';
import video1 from '../components/videos/video1.mp4';
import video2 from '../components/videos/video2.mp4';
import video4 from '../components/videos/video4.mp4';
import video5 from '../components/videos/video5.mp4';

function Videos() {
 
  return (
    <div className='video'>
      <h1>Videos</h1>
      <ReactPlayer  
      url={video3} controls
            width='250px' height='150px'
      />
      <ReactPlayer  
      url={video1} controls
            width='250px' height='150px'
      />
      <ReactPlayer  
      url={video2} controls
            width='250px' height='150px'
      />
      <ReactPlayer  
      url={video4} controls
            width='250px' height='150px'
      />
      <ReactPlayer  
      url={video5} controls
            width='250px' height='150px'
      />
     
    </div>
  )
}

export default Videos