import { Link, useParams, useSearchParams } from "react-router-dom"
import { useMovieById } from "../../hooks/useMovieById";
import { MovieDetails } from "../../components/MovieDetails";
import { toMovieData } from "../../formatters";

function MovieDetailsPage() {
    const [searchParams] = useSearchParams();
    const { movieId } = useParams();

    const { result: movie } = useMovieById(movieId);

    return (
        <>
            <div id="heading-content-tools" className="mb-30p">
                <Link
                    id="back-to-search"
                    to={{
                        pathname: '/',
                        search: searchParams.toString()
                    }}
                    className="icon-button text-primary"
                    title="Return to search">
                    <i>&#9906;</i>
                </Link>
            </div>
            {movie !== undefined
                ? <MovieDetails movieData={toMovieData(movie)} />
                : <>Loading...</>}
        </>
    )
}

export { MovieDetailsPage }