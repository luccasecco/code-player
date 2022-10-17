import { GithubLogo } from "phosphor-react";

export function Footer() {
  return (
    <div className="flex-1">
      <div className="flex items-center justify-between h-8 w-full m-auto py-10 border-t-2 border-gray-600">
        <div className="flex items-center justify-between ml-8">
          <span className="ml-5 text-xs text-gray-200">Lucca Secco | all rights reserved</span>
        </div>
        <div className="mr-8">
          <a href="https://github.com/luccasecco/code-player" target="_blank" className="flex items-center justify-between text-xs gap-2 text-gray-200 hover:text-yellow-400 transition-colors">
            Source code available
            <GithubLogo size={25} />
          </a>
        </div>
      </div>
    </div>

  )
}