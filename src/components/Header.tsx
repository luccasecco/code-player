import { ReactNode } from "react";
import { Logo } from "./Logo";

interface HeaderProps{
  childrenLeft?: ReactNode
  childrenRight?: ReactNode
}

export function Header({ childrenLeft, childrenRight }: HeaderProps) {
  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
      <span className="text-yellow-300 text-lg">{childrenLeft}</span>
      <Logo />
      <span className="text-blue-300 text-lg">{childrenRight}</span>
    </header>
  )
}