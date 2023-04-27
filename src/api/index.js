const baseUrl = 'http://localhost:4000';

// http://localhost:4000/movies?sortBy=title&sortOrder=asc&search=La&searchBy=title&filter=Thriller&limit=6
function sortParameter(sortCriterion) {
    switch (sortCriterion) {
        case "Release Date": return "&sortBy=release_date&sortOrder=desc";
        case "Title": return "&sortBy=title&sortOrder=asc";
        default: return "";
    }
}

function searchQueryParameter(searchQuery) {
    if (searchQuery && searchQuery.length > 0) {
        return `&search=${searchQuery}&searchBy=title`;
    }

    return "";
}

function activeGenreParameter(activeGenre) {
    if (activeGenre && activeGenre.length > 0 && activeGenre !== "All") {
        return `&filter=${activeGenre}`;
    }

    return "";
}

/**
 * @param {RequestInfo|URL} input 
 * @param {RequestInit|undefined} init 
 * @returns {[Promise, () => void]}
 */
function doFetch(input, init) {
    const controller = new AbortController();

    const promise = fetch(
        input,
        { ...init, signal: controller.signal }
    );

    return [promise, () => controller.abort()];
}

function fetchMovies({
    searchQuery,
    sortCriterion,
    activeGenre,
}) {
    return doFetch(
        `${baseUrl}/movies?limit=6${sortParameter(sortCriterion)}${searchQueryParameter(searchQuery)}${activeGenreParameter(activeGenre)}`
    );
}

function fetchMovieById(movieId) {
    return doFetch(
        `${baseUrl}/movies/${movieId}`
    );
}

function addMovie({
    title,
    tagline,
    vote_average,
    vote_count,
    release_date,
    poster_path,
    overview,
    budget,
    revenue,
    runtime,
    genres,
}) {
    return doFetch(`${baseUrl}/movies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title,
            tagline,
            vote_average,
            vote_count,
            release_date,
            poster_path,
            overview,
            budget,
            revenue,
            runtime,
            genres,
        })
    });
}

export { fetchMovies, fetchMovieById, addMovie }