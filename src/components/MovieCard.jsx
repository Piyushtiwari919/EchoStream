import { IMG_CDN } from "../utils/constants";

const MovieCard = ({posterPath,movieTitle})=>{
    return(
    <div className="inline-block flex-none h-40 rounded-lg overflow-hidden shadow-md mr-4 bg-gray-100 snap-start">
        <img alt={movieTitle} src={IMG_CDN+posterPath} className="rounded-lg h-full cursor-pointer"/>
    </div>
)
}

export default MovieCard;