import { useEffect, useState } from "react";
import { Option } from "./Option";

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://youtube.googleapis.com/youtube/v3/playlistItems'

interface IVdeos {
  id?: string;
  snippet: {
    title: string;
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

  console.log(videos)

  useEffect(() => {
    async function getVideos(){
      const response = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLZCjSAnJZ-axfUgzAZlKYRQqsOPTm1TPZ&maxResults=50&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)
      const data = await response.json()

      setVideos(data.items)
    }

    getVideos()

  }, [])
  return(
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Vídeos
      </span>

      <div className="flex flex-col gap-8">
        {videos.map(video => {
          return (
            <Option 
              key={video.id}
              snippet={video.snippet}
              
              />

          )
        })}
     
      </div>
    </aside>
  )
}