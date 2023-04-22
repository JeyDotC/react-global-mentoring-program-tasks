import './Poster.css';
import { string } from 'prop-types';

function Poster({ imageUrl, movieName, fallbackImageUrl }) {
    const handleImageLoadError = (e) => {
        if (e.target.src !== fallbackImageUrl) {
            e.target.src = fallbackImageUrl
        }
    };

    return (
        <img
            className="d-block movie-poster size-normal"
            src={imageUrl}
            title={movieName}
            alt={movieName}
            onError={handleImageLoadError}
        />
    );
}

Poster.propTypes = {
    imageUrl: string, 
    movieName: string, 
    fallbackImageUrl: string,
};

Poster.defaultProps = {
    fallbackImageUrl: "/Poster-Not-Found.png",
}

export { Poster }