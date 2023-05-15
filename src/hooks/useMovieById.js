import { useContext } from "react";
import { fetchMovieById } from "../api";
import { useFetch } from "./useFetch";
import { InitialStateContext } from "../contexts/InitialState";

function useMovieById(movieId) {
    const { currentMovie } = useContext(InitialStateContext);

    return useFetch(fetchMovieById, currentMovie, movieId, [movieId]);
}

export { useMovieById };