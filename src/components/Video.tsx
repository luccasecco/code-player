import { useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

import bgImg from '../assets/vibration.png'

export function Video() {
  const { videoId } = useParams<{videoId: string}>()

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
        <ReactPlayer 
          url={videoId ? `https://www.youtube.com/watch?v=${videoId}` 
          : 'https://www.youtube.com/watch?v=4YPkYFiz2IU&t=6s'}  
          width="100%" 
          height="100%"
          controls={true}
        />
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto hidden md:block">
        <div className="flex items-center justify-center">
            <div className="mt-10 ">
              <img src={bgImg} className="w-96"/> 
            </div>
        </div>
      </div>
    </div>
  )
}