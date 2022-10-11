
import { DiscordLogo } from "phosphor-react";

export function Video() {


  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
    
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
            <div className="flex-1">
              <h1 className="text-2xl font-bold ">
              Video 1
              </h1>
              <p className="mt-4 text-gray-200 leading-relaxed">
              Descrição
              </p>
          
            </div>

            <div className="flex flex-col gap-4">
              <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"> 
              <DiscordLogo size={24}/>
                Comunidade do dircord
              </a>

            </div>
        </div>
      </div>
    </div>
  )
}