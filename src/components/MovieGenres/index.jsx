import PropTypes from 'prop-types';
import { genresText } from '../../formatters';

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