import { fetchMovies } from "../api";
import { useFetch } from "./useFetch";

function useMovieListQuery({
    searchQuery,
    sortCriterion,
    activeGenre,
}) {
    return useFetch(fetchMovies, {
        totalAmount: 0,
        data: [],
        offset: 0,
        limit: 6
    }, {
        searchQuery,
        sortCriterion,
        activeGenre,
    },
    [ 
        searchQuery,
        sortCriterion,
        activeGenre,
    ]);
}

export { useMovieListQuery }