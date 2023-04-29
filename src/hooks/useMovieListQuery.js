import { fetchMovies } from "../api";
import { useFetch } from "./useFetch";

function useMovieListQuery({
    searchQuery,
    sortCriterion,
    activeGenre,
    key
}) {
    return useFetch(
        fetchMovies,
        {
            totalAmount: 0,
            data: [],
            offset: 0,
            limit: 6
        },
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