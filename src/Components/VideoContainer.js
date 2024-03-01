import React, { useEffect } from 'react';
import { API_URL } from '../utils/constants';

const VideoContainer = () => {

    useEffect(()=>{
        getYoutubeVideos()
    },[])

    const getYoutubeVideos = async ()=>{
        console.log('hiiiii',API_URL);
        const data = await fetch(API_URL);
        const json = await data.json();
        console.log(json,'hiiiii');
    }

  return (
    <div>VideoContainer</div>
  )
}

export default VideoContainer