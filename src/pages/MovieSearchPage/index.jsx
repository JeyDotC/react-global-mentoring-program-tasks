import { SearchForm } from "../../components/SearchForm";
import { useMoviesSearchParams } from "../../hooks/useMoviesSearchParams";

function MovieSearchPage() {
    const [searchParams, setSearchParams] = useMoviesSearchParams();

    const { searchQuery, } = searchParams;

    const handleSearch = (s) => setSearchParams({ s });
    const handleSearchClear = () => setSearchParams({ s: "" });

    return (
        <SearchForm
            initialSearchText={searchQuery}
            onSearch={handleSearch}
            onClear={handleSearchClear}
        />
    )
}

export { MovieSearchPage }