import { useState, useEffect } from "react";
import { useMovie } from "../../Contexts/MovieContext";
import { useParams } from "react-router-dom";
import ReviewsCard from "../../Components/ReviewsComponents/ReviewsCard";

export default function MoviePage() {
  const { fetchMovie, loading } = useMovie();

  const [movieData, setMovieData] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovie(movieId, setMovieData);
  }, []);

  const reviews = movieData.reviews;

  if (loading) return <h1>Caricamento</h1>;
  else
    return (
      <div className="movie-container">
        <div className="container mt-3 d-flex">
          <div className="movie-image me-5">
            <img src={movieData.image} alt={movieData.title} />
          </div>
          <div className="movie-info">
            <h1>
              <strong>Titolo: </strong>
              {movieData.title}
            </h1>
            <h4>
              <strong>Regista: </strong>
              {movieData.director}
            </h4>
            <h4>
              <strong>Genere: </strong>
              {movieData.genre}
            </h4>
            <h4>
              <strong>Anno di uscita: </strong>
              {movieData.release_year}
            </h4>
            <h4>
              <strong className="d-block">Descrizione: </strong>
              {movieData.abstract}
            </h4>
            <h4>
              <strong>Voto: </strong>
              {movieData.average_vote}
            </h4>
          </div>
        </div>
        <div className="container mb-3">
          <h1 className="my-3">Recensioni</h1>
          <div className="row justify-content-center">
            {reviews &&
              reviews.map((review) => (
                <ReviewsCard review={review} key={review.id} />
              ))}
          </div>
        </div>
      </div>
    );
}
