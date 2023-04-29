import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Dialog } from "../../components/Dialog"
import { MovieForm } from "../../components/MovieForm";
import { useMovieById } from "../../hooks/useMovieById";
import { toMovieData } from "../../formatters";
import { updateMovie } from "../../api";
import { toApiData } from "../../formatters/toApiData";

function MovieEditPage() {
    const [searchParams] = useSearchParams();
    const { movieId } = useParams();
    const navigate = useNavigate();

    const { result: movie, error } = useMovieById(movieId);

    const handleCloseButton = () => navigate({
        pathname: "/",
        search: searchParams.toString(),
    });

    const handleSubmit = async (movieData) => {
        await updateMovie(
            toApiData(movieData)
        );
        navigate({
            pathname: "/success",
            search: searchParams.toString(),
        }, {
            state: {
                title: "Congratulations!",
                message: "The movie has been updated successfully"
            }
        })
    };

    return (
        <Dialog
            show={true}
            title={<h1>Edit Movie</h1>}
            onCloseButtonClicked={handleCloseButton}
        >
            {!movie && !error && <>Loading...</>}
            {!movie && error && <p className="text-primary">An error Occurred</p>}
            {movie && <MovieForm initialData={toMovieData(movie)} onSubmit={handleSubmit} />}
        </Dialog>
    )
}

export { MovieEditPage }