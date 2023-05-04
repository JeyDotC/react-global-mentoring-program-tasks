import { Link, Outlet, useSearchParams } from "react-router-dom";
import { SearchForm } from "../../components/SearchForm";

function MovieSearchPage() {
    const [searchParams, setSearchParams] = useSearchParams();

    const searchQuery = searchParams.get('query') ?? '';

    const handleSearch = (query) => {
        searchParams.set('query', query);
        setSearchParams(searchParams);
    };
    const handleSearchClear = () => {
        searchParams.delete('query');
        setSearchParams(searchParams);
    };

    return (
        <>
            <div className="text-right">
                <Link
                    to={{
                        pathname: "/new",
                        search: searchParams.toString(),
                    }}
                    className="btn text-primary bg-secondary btn-compact"
                >
                    + Add Movie
                </Link>
            </div>
            <SearchForm
                initialSearchText={searchQuery}
                onSearch={handleSearch}
                onClear={handleSearchClear}
            />
            <Outlet />
        </>
    )
}

export { MovieSearchPage }