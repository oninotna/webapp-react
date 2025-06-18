import { Link } from "react-router-dom";

export default function MovieCard ({movie}) {
    return (
      <div className="h-100">
        <div className="card my-card h-100">
          <img src={movie.image} className="card-img-top" alt={movie.title} />
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">
                {movie.abstract}
            </p>
            <Link to={`/movies/${movie.id}`} className="btn btn-secondary w-75 mx-auto">
              Vai alle recensioni
            </Link>
          </div>
        </div>
      </div>
    );
}