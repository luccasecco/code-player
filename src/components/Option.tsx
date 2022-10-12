import { Link } from "react-router-dom";

interface IOption {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
        width: number;
        height: number;
      }
    };
  }
}

export function Option(props : IOption){
  return(
    <Link to={`/player/option/${props.id}`}>
      <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors `}>
          <header className="flex items-center justify-between">
            <img src={props.snippet.thumbnails.medium.url} alt="" />
          </header>
            
          <strong className={`mt-5 block text-gray-200`}>
            {props.snippet.title}
          </strong>
        </div>
    </Link>
  )
}