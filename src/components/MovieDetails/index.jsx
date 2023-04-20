import PropTypes from 'prop-types';
import { Poster } from "../Poster";
import { MovieGenres } from '../MovieGenres';

import './MovieDetails.css';
import { formatDuration } from '../../formatters';

function MovieDetails({ movieData }) {
    const {
        imageUrl,
        movieName,
        releaseYear,
        relevantGenres,
        durationInMinutes,
        description,
        rating,
    } = movieData;

    return (
        <div className="movie-details d-flex">

            <Poster imageUrl={imageUrl} movieName={movieName} />

            <div className="ms-4">
                <div className='d-flex mb-30p'>
                    <div>
                        <h1>{movieName}</h1>
                        <MovieGenres genreNames={relevantGenres} />
                    </div>
                    <div className='movie-rating'>
                        <span>
                            {rating}
                        </span>
                    </div>
                </div>

                <div className="text-primary mb-30p">
                    <span>{releaseYear}</span>
                    <span className="ms-4">{formatDuration(durationInMinutes)}</span>
                </div>

                <p className='text-secondary'>
                    {description}
                </p>
            </div>
        </div>
    )
}

MovieDetails.propTypes = {
    movieData: PropTypes.shape({
        imageUrl: PropTypes.string,
        movieName: PropTypes.string,
        releaseYear: PropTypes.number,
        relevantGenres: PropTypes.arrayOf(PropTypes.string),
        rating: PropTypes.number,
        durationInMinutes: PropTypes.number,
        description: PropTypes.string,
    }).isRequired,
};

export { MovieDetails, formatDuration }