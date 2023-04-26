import { useNavigate, useSearchParams } from "react-router-dom";
import { Dialog } from "../../components/Dialog";
import { MovieForm } from "../../components/MovieForm";

function MovieAddPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const handleCloseButtonClicked = () => navigate({
        pathname: "/",
        search: searchParams.toString()
    })

    return (
        <Dialog 
            show={true}
            title={<h1 className='mb-30p'>Add Movie</h1>}
            onCloseButtonClicked={handleCloseButtonClicked}
        >
            <MovieForm  />
        </Dialog>
    );
}

export { MovieAddPage };