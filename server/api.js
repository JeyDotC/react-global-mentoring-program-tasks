const { fetchMovies, fetchMovieById } = require('../src/api');

/**
 * 
 * @param {import("express").Request} request 
 */
async function fetchMoviesFromRequest(request) {
    const { query: searchQuery, orderBy: sortCriterion, genre: activeGenre } = request.query;
    const [promise] = fetchMovies({ searchQuery, sortCriterion, activeGenre });
    const response = await promise;

    if (response.ok) {
        return await response.json();
    }

    return undefined;
}

/**
 * 
 * @param {import("express").Request} request 
 */
async function fetchMovieByIdFromRequest(request) {
    const { 0: idString } = request.params;
    const match = (/^\/([0-9]+)$/).exec(idString);
    if (match === null) {
        return undefined;
    }

    const [,movieId] = match;

    const [promise] = fetchMovieById(movieId);
    const response = await promise;

    if (response.ok) {
        return await response.json();
    }

    return undefined;
}

module.exports = { fetchMoviesFromRequest, fetchMovieByIdFromRequest };