import MovieCard from "./MovieCard.jsx";

const MovieList = ({title, movies})=>{
    console.log(movies);
    if(!movies || movies.length===0) return;
    return(
        <div>
            <h1>{title}</h1>
            <div>
                <MovieCard posterPath={movies[0]?.poster_path} movieTitle={movies[0]?.original_title}/>
            </div>
        </div>
    )
}

export default MovieList;