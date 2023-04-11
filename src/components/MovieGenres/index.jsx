import PropTypes from 'prop-types';

/**
 * 
 * @param {string[]} genres
 * 
 * @returns {string}
 */
function genresText(genres) {
    if(!genres) {
        return '';
    }
    switch (genres.length) {
        case 0: return '';
        case 1: return genres[0];
        case 2: return genres.join(' & ');
        default: return genres.join(', ');
    }
}

function MovieGenres({ genreNames }) {
    const genres = genresText(genreNames);

    return (
        <div className="movie-title-genres text-secondary">
            {genres}
        </div>
    );
}

MovieGenres.propTypes = {
    genreNames: PropTypes.arrayOf(PropTypes.string)
};

export { MovieGenres }