import { useSearchParams } from "react-router-dom";

function useMoviesSearchParams() {
    const [searchParams, doSetSearchParams] = useSearchParams({
        s: "",
        orderBy: "",
        genre: "All",
    });

    const searchParamsData = [...searchParams.entries()].reduce(
        (accumulate, [k, v]) => ({ ...accumulate, [k]: v }),
        {}
    );

    const { s: searchQuery, orderBy: sortCriterion, genre: activeGenre } = searchParamsData;

    const setSearchParams = (partialObject) => doSetSearchParams(prev => {
        Object.entries(partialObject).forEach(([k, v]) => prev.set(k, v));
        return prev;
    });

    return [
        { searchQuery, sortCriterion, activeGenre },
        setSearchParams,
    ]
}

export { useMoviesSearchParams }