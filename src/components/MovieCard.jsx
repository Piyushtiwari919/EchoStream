import { IMG_CDN } from "../utils/constants";

const MovieCard = ({posterPath,movieTitle})=>{
    return(
    <div className="w-40 rounded-lg">
        <img alt={movieTitle} src={IMG_CDN+posterPath} className="rounded-lg"/>
    </div>
)
}

export default MovieCard;