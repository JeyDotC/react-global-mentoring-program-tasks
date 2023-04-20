const baseUrl = 'http://localhost:4000';

// http://localhost:4000/movies?sortBy=title&sortOrder=asc&search=La&searchBy=title&filter=Thriller&limit=6
function sortParameter(sortCriterion) {
    switch(sortCriterion) {
        case "Release Date": return "&sortBy=release_date&sortOrder=desc";
        case "Title": return "&sortBy=title&sortOrder=asc";
        default: return "";
    }
}

function searchQueryParameter(searchQuery) {
    if(searchQuery !== undefined && searchQuery.length > 0){
        return `&search=${searchQuery}&searchBy=title`;
    }

    return "";
}

function activeGenreParameter(activeGenre) {
    if(activeGenre !== undefined && activeGenre.length > 0 && activeGenre !== "All"){
        return `&filter=${activeGenre}`;
    }

    return "";
}

function fetchMovies({
    searchQuery,
    sortCriterion,
    activeGenre,
}) {
    const controller = new AbortController();

    const promise = fetch(
        `${baseUrl}/movies?limit=6${sortParameter(sortCriterion)}${searchQueryParameter(searchQuery)}${activeGenreParameter(activeGenre)}`, 
        { signal: controller.signal }
    );

    return [promise, () => controller.abort()];
}

export { fetchMovies }