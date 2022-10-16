import { useNavigate } from 'react-router-dom'
import imgFrequency from '../assets/vibration.png'
import { Button } from '../components/Button'
import { Logo } from '../components/Logo'

export function Subscribe(){
  const navigate = useNavigate()

  function handleStart(){
    navigate('/player')
  }

  return(
    <div className="min-h-screen bg-galaxy bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="flex flex-col text-center gap-10 w-[100%] p-[2%] items-center justify-between lg:flex-row lg:text-left">
          <div className="max-w-[640px] flex flex-col items-center lg:items-start">
            <Logo />

            <h1 className="mt-8 text-[2.5rem] leading-tight">
              Vibrational <strong className="text-blue-400">frequency</strong> 
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Personal development and transformation
            </p>
          </div>

          <div className="p-8 bg-gray-700 border border-gray-500 rounded">
              <Button 
                color='blue'
                onOptionChange={handleStart}
                className="w-40 h-12 uppercase rounded font-bold text-sm opacity-100 hover:bg-blue-400"
              >
                Get Started
              </Button> 
          </div>
        </div>

      </div>
      <img src={imgFrequency} className="mt-20" />
     
    </div>
  )
}