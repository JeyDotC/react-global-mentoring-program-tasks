import { fetchMovieById } from "../api";
import { useFetch } from "./useFetch";

function useMovieById(movieId) {
    return useFetch(fetchMovieById, undefined, movieId, [movieId]);
}

export { useMovieById };