import { useContext } from "react";
import { fetchMovies } from "../api";
import { useFetch } from "./useFetch";
import { InitialStateContext } from "../contexts/InitialState";

function useMovieListQuery({
    searchQuery,
    sortCriterion,
    activeGenre,
    key
}) {
    const { movieList } = useContext(InitialStateContext);

    return useFetch(
        fetchMovies,
        movieList,
        {
            searchQuery,
            sortCriterion,
            activeGenre,
        },
        [
            searchQuery,
            sortCriterion,
            activeGenre,
            key,
        ]);
}

export { useMovieListQuery }