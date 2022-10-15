interface ButtonProps{
  children: string;
  onOptionChange: () => void;
  color: 'yellow' | 'blue' | 'green' | 'violet';
  className?: string;
}

export function Button({children, onOptionChange, color, className}: ButtonProps){
  return(
    <button 
      className={`w-28 h-8 rounded ${color === 'yellow' ? 'bg-yellow-300' : color === 'blue' ? 'bg-blue-300' : color === 'green' ? 'bg-green-300' : 'bg-violet-400'} text-stone-900 text-base  transition-all opacity-50 focus:opacity-100 ${className}`}
      onClick={onOptionChange}
    >
      {children}
    </button>
  )
}