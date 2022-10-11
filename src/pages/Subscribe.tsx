import imgFrequency from '../assets/vibration.png'
import { Logo } from '../components/Logo'

export function Subscribe(){
  return(
    <div className="min-h-screen bg-galaxy bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Frequência <strong className="text-blue-400">vibracional</strong> 
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Desenvolvimento e transformação pessoal
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form  className="flex flex-col gap-2 w-full">
            <input 
              className="bg-gray-900 rounded px-5 h-14"
              type="text" 
              placeholder="Seu nome completo"
              
            />
            <input 
              className="bg-gray-900 rounded px-5 h-14"
              type="email" 
              placeholder="Digite seu e-mail" 
          
            />

            <button 
              type="submit"
              
              className="mt-4 bg-blue-500 uppercase py-4 rounded font-bold text-sm hover:bg-blue-700 transition-colors disabled:opacity-50 text-black"
            >
              Acessar
            </button>
          </form>
        </div>

      </div>
      <img src={imgFrequency} className="mt-10 " />
     
    </div>
  )
}