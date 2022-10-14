interface ButtonProps{
  children: string;
  onOptionChange: () => void;
  color: 'yellow' | 'blue';
  className?: string;
}

export function Button({children, onOptionChange, color, className}: ButtonProps){
  return(
    <button 
      className={`w-28 h-8 rounded ${color === 'yellow' ? 'bg-yellow-300' : 'bg-blue-300'} text-stone-900 text-base ${color === 'yellow' ? 'hover:bg-yellow-500' : 'hover:bg-blue-500'} transition-colors ${className}`}
      onClick={onOptionChange}
    >
      {children}
    </button>
  )
}