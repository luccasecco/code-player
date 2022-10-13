import { useNavigate } from 'react-router-dom'
import imgFrequency from '../assets/vibration.png'
import { Logo } from '../components/Logo'

export function Subscribe(){
  const navigate = useNavigate()

  function handleStart(){
    navigate('/player')
  }

  return(
    <div className="min-h-screen bg-galaxy bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Vibrational <strong className="text-blue-400">frequency</strong> 
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Personal development and transformation
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
            <button 
              type="submit"
              className="block w-40 bg-blue-500 uppercase py-4 rounded font-bold text-sm hover:bg-blue-700 transition-colors disabled:opacity-50 text-black"
              onClick={handleStart}
            >
              Get Started
            </button>
        
        </div>

      </div>
      <img src={imgFrequency} className="mt-20" />
     
    </div>
  )
}