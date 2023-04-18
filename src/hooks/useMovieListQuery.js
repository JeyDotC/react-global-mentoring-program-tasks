import { useEffect, useRef, useState } from "react";
import { fetchMovies } from "../api";

function useMovieListQuery({
    searchQuery,
    sortCriterion,
    activeGenre,
}) {
    const [result, setResult] = useState({
        "totalAmount": 0,
        "data": [],
        "offset": 0,
        "limit": 6
    });

    const cancelationTokenRef = useRef(null);

    useEffect(() => {
        if (cancelationTokenRef.current !== null) {
            cancelationTokenRef.current();
        }

        async function doFetchMovies() {
            try {
                const [promise, cancel] = fetchMovies({ searchQuery, sortCriterion, activeGenre });
                cancelationTokenRef.current = cancel;
                const response = await promise;
                const result = await response.json();
                setResult(result);
            } catch (e) {
                if(e.name !== "AbortError") {
                    console.error(e);
                }
            }
        }

        doFetchMovies();

        return () => cancelationTokenRef.current && cancelationTokenRef.current();
    }, [
        searchQuery,
        sortCriterion,
        activeGenre,
    ]);

    return { result };
}

export { useMovieListQuery }