import PropTypes from 'prop-types';
import './MovieTitle.css';

/**
 * 
 * @param {string[]} genres 
 */
function GenresText({ genres }) {
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

function MovieTitle({ movieData, onClick }) {
    const { imageUrl, movieName, releaseYear, relevantGenres } = movieData;

    const handleClick = () => onClick && onClick(movieData);

    return (
        <div className="movie-title" onClick={handleClick}>
            <img className="d-block movie-title-image" src={imageUrl} title={movieName} alt={movieName} />
            <div className="d-flex movie-title-name">
                <h3>{movieName}</h3>
                <span className='movie-title-release-year border border-secondary border-rounded'>{releaseYear}</span>
            </div>
            <div className="movie-title-genres text-secondary">
                <GenresText genres={relevantGenres} />
            </div>
        </div>
    );
}

MovieTitle.propTypes = {
    movieData: PropTypes.shape({
        imageUrl: PropTypes.string, 
        movieName: PropTypes.string,
        releaseYear: PropTypes.number,
        relevantGenres: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    onClick: PropTypes.func,
};

export { MovieTitle }