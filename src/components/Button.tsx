interface ButtonProps{
  children: string;
  onOptionChange: () => void;
  color: 'yellow' | 'blue' | 'green' | 'violet';
  className?: string;
}

export function Button({children, onOptionChange, color, className}: ButtonProps){
  return(
    <button 
      className={`w-28 h-8 rounded ${color === 'yellow' ? 'bg-yellow-300' : color === 'blue' ? 'bg-blue-300' : color === 'green' ? 'bg-green-300' : 'bg-violet-400'} text-stone-900 text-base ${color === 'yellow' ? 'hover:bg-yellow-500' : color === 'blue' ? 'hover:bg-blue-500' : color === 'green' ? 'hover:bg-green-400' : 'hover:bg-violet-500'} transition-colors focus:border-2 border-pink-600 ${className}`}
      onClick={onOptionChange}
    >
      {children}
    </button>
  )
}