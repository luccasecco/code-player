import { GithubLogo } from "phosphor-react";

export function Footer() {
  return (
    <div className="flex-1">
      <div className="flex items-center justify-between h-8 w-full m-auto py-10 border-t-2 border-gray-600">
        <div className="flex items-center justify-between ml-8">
          <span className="ml-5 text-xs text-gray-200">Lucca Secco - Todos os direitos reservados</span>
        </div>
        <div className="mr-8">
          <a href="https://github.com/luccasecco" target="_blank" className="hover:text-yellow-400 transition-colors">
            <GithubLogo size={25}/>
          </a>
        </div>
      </div>


    </div>

  )
}