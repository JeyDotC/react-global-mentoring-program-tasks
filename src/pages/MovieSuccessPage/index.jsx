import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Dialog } from "../../components/Dialog";

function MovieSuccessPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { state } = useLocation();
    const { title, message } = state ?? {};

    const handleCloseButtonClicked = () => navigate({
        pathname: "/",
        search: searchParams.toString()
    });

    return (
        <Dialog show={true} onCloseButtonClicked={handleCloseButtonClicked}>
            <h1>{title}</h1>
            <p>
                {message}
            </p>
        </Dialog>
    );
}

export { MovieSuccessPage }