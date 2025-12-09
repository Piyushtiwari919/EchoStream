import { IMG_CDN } from "../utils/constants";

const MovieCard = ({posterPath,movieTitle})=>{
    return(
    <div className="w-40 h-6">
        <img alt={movieTitle} src={IMG_CDN+posterPath}/>
    </div>
)
}

export default MovieCard;