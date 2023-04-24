import { Link, useParams, useSearchParams } from "react-router-dom"
import { useMovieById } from "../../hooks/useMovieById";
import { MovieDetails } from "../../components/MovieDetails";
import { toMovieData } from "../../formatters";
import { useEffect, useRef } from "react";

function MovieDetailsPage() {
    const [searchParams] = useSearchParams();
    const { movieId } = useParams();
    const headingRef = useRef(null);

    const { result: movie, error } = useMovieById(movieId);

    useEffect(() => {
        const { current } = headingRef;
        if(current) {
            current.scrollIntoView({ behavior: "smooth", block: "end" });
        }
    }, [movieId]);

    const backToSearchUrl = {
        pathname: '/',
        search: searchParams.toString()
    };

    return (
        <>
            <div id="heading-content-tools" className="mb-30p" ref={headingRef}>
                <Link
                    id="back-to-search"
                    to={backToSearchUrl}
                    className="icon-button text-primary"
                    title="Return to search">
                    <i>&#9906;</i>
                </Link>
            </div>
            {movie && <MovieDetails movieData={toMovieData(movie)} />}
            {!movie && error && <>An error Occurred. <Link to={backToSearchUrl}>Back to search</Link></>}
            {!movie && !error && <>Loading...</>}
        </>
    )
}

export { MovieDetailsPage }