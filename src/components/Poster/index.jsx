import './Poster.css';

const fallbackImageUrl = "/Poster-Not-Found.png";

function Poster({ imageUrl, movieName }) {
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

export { Poster }