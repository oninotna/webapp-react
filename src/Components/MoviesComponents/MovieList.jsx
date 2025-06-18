import { useMovie } from "../../Contexts/MovieContext";
import MovieCard from "./MovieCard";

export default function MovieList () {
    const {moviesData} = useMovie();

    return (
      
        <div className="row flex-wrap g-3 py-3">
          {moviesData.map((movie) => (
            <div className="col-3" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      
    );
    
}