import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Option } from "./Option";

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://youtube.googleapis.com/youtube/v3/playlistItems'
interface IVdeos {
  id: string;
  snippet: {
    title: string;
    resourceId: {
      videoId: string;
    }
    thumbnails: {
      medium: {
        url: string;
        width: number;
        height: number;
      }
    };
  }
}
export function Sidebar(){
  const [videos, setVideos] = useState<IVdeos[]>([])

  async function handleHapinnesChoice(){
    const response = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLZCjSAnJZ-axfUgzAZlKYRQqsOPTm1TPZ&maxResults=50&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)
    const data = await response.json()
  
    setVideos(data.items)
  }

  async function handleHFocusChoice(){
    const response = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLnOC9rlyvdSl-XO9aNCcpiXZiRo6sKQZR&maxResults=50&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)

    const data = await response.json()
        
    setVideos(data.items)
  }

  useEffect(() => {
    async function getVideo(){
      const response = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLZCjSAnJZ-axfUgzAZlKYRQqsOPTm1TPZ&maxResults=50&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)
      const data = await response.json()
    
      setVideos(data.items)
    }

    getVideo()
  }, [])

  return(
    <aside className="w-[348px] h-screen overflow-y-scroll scrollbar-hide bg-gray-700 p-6 border-l border-gray-600">
      <div className="flex justify-between font-bold text-2xl pb-6 mb-6 border-b border-gray-500">
        <Button 
          color="yellow"
          onOptionChange={handleHapinnesChoice}
        >
          Happines
        </Button>
        <Button 
          color="blue"
          onOptionChange={handleHFocusChoice}
        >
          Focus
        </Button>
      </div>

      <div className="flex flex-col gap-8">
        {videos.map(video => {
          return (
            <Option 
              key={video.id}
              id={video.snippet.resourceId.videoId}
              snippet={video.snippet} 
              />
          )
        })}  
      </div>
    </aside>
  )
}