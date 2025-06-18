import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';

const movieApiUrl = import.meta.env.VITE_API_MOVIES;

const MovieContext = createContext();

function MovieProvider ({children}) {
    const [moviesData, setMoviesData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchMovies = () => {
        setLoading(true);
        axios.get(movieApiUrl)
        .then((res) => {
            setMoviesData(res.data);
            setLoading(false);
        })
        .catch((err) => {
            console.error(err);
        });
    };

    const fetchMovie = (id, setState) => {
        setLoading(true);
        axios.get(`${movieApiUrl}/${id}`)
        .then((res) => {
            setState(res.data);            
            setLoading(false);
        });
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const dataContext = {moviesData, loading, fetchMovies, fetchMovie};

    return (
        <MovieContext value={dataContext}>{children}</MovieContext>
    );
};

function useMovie() {
    return useContext(MovieContext);
};

export {MovieProvider, useMovie};