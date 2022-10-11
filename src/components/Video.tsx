
import { CaretRight, DiscordLogo, FileArrowDown, FileImage, Lightning } from "phosphor-react";

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
        <div className="gap-8 mt-20 grid grid-cols-2">
              <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                    <div className="bg-green-700 h-full p-6 flex items-center">
                      <FileArrowDown size={40}/>

                    </div>
                    <div className="py-6 leading-relaxed">
                      <strong className="text-2xl">
                        Material complementar
                      </strong>
                      <p className="text-sm text-gray-200 mt-2">
                        Acesse o material complementar para acelerar o seu desenvolvimento
                      </p>
                    </div>
                    <div className="h-full p-6 flex items-center">
                      <CaretRight size={24}/>
                    </div>

              </a>


              <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                    <div className="bg-green-700 h-full p-6 flex items-center">
                      <FileImage size={40}/>

                    </div>
                    <div className="py-6 leading-relaxed">
                      <strong className="text-2xl">
                        Wallpapers exclusivos
                      </strong>
                      <p className="text-sm text-gray-200 mt-2">
                        Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                      </p>
                    </div>
                    <div className="h-full p-6 flex items-center">
                      <CaretRight size={24}/>
                    </div>

              </a>
        </div>

      </div>
    </div>
  )
}