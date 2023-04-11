import PropTypes from 'prop-types';
import { Poster } from '../Poster';
import './MovieTitle.css';
import { MovieGenres } from '../MovieGenres';

function MovieTitle({ movieData, onClick }) {
    const { imageUrl, movieName, releaseYear, relevantGenres } = movieData;

    const handleClick = () => onClick && onClick(movieData);

    return (
        <div className="movie-title" onClick={handleClick}>
            <Poster imageUrl={imageUrl} movieName={movieName} />
            <div className="d-flex movie-title-name">
                <h3>{movieName}</h3>
                <span className='movie-title-release-year border border-secondary border-rounded'>{releaseYear}</span>
            </div>
            
            <MovieGenres genreNames={relevantGenres} />
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