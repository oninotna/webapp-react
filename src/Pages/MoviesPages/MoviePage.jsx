import { useParams } from "react-router-dom";

export default function MoviePage () {
    const {id} = useParams();
    return (
        <div className="container">
            <h1>Movie {id}</h1>
        </div>
    );
};