import MovieList from "../../Components/MoviesComponents/MovieList";

export default function MoviesPage () {
    return (
        <div className="container movies-container">
            <h1 className="my-3">Film</h1>
            <MovieList />
        </div>
    );
};