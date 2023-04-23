import { Link, generatePath, useParams, useSearchParams } from "react-router-dom"

function MovieDetailsPage() {
    const [searchParams] = useSearchParams();
    const { movieId } = useParams();

    return (
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
    )
}

export { MovieDetailsPage }