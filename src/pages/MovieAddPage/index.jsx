import { useNavigate, useSearchParams } from "react-router-dom";
import { Dialog } from "../../components/Dialog";
import { MovieForm } from "../../components/MovieForm";
import { addMovie } from "../../api";
import { toApiData } from "../../formatters/toApiData";

function MovieAddPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const handleCloseButtonClicked = () => navigate({
        pathname: "/",
        search: searchParams.toString()
    });

    const handleSubmit = async (data) => {
        await addMovie(
            toApiData(data)
        );
        navigate(
            { pathname: "/success", search: searchParams.toString(), },
            {
                state: {
                    title: "Congratulations!",
                    message: "The movie has been added to database successfully"
                }
            });
    }

    return (
        <Dialog
            show={true}
            title={<h1 className='mb-30p'>Add Movie</h1>}
            onCloseButtonClicked={handleCloseButtonClicked}
        >
            <MovieForm onSubmit={handleSubmit} />
        </Dialog>
    );
}

export { MovieAddPage };