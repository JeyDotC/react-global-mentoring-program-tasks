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
        if(headingRef.current) {
            headingRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
        }
    }, [movieId]);

    return (
        <>
            <div id="heading-content-tools" className="mb-30p" ref={headingRef}>
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
            {movie && <MovieDetails movieData={toMovieData(movie)} />}
            {!movie && error && <>An error Occurred.</>}
            {!movie && !error && <>Loading...</>}
        </>
    )
}

export { MovieDetailsPage }