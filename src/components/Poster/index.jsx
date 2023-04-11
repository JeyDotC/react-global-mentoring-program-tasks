import './Poster.css';

function Poster({ imageUrl, movieName }) {
    return <img className="d-block movie-poster size-normal" src={imageUrl} title={movieName} alt={movieName} />
}

export { Poster }