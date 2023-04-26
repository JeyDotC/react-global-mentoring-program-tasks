import { useSearchParams } from "react-router-dom";
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
        <SearchForm
            initialSearchText={searchQuery}
            onSearch={handleSearch}
            onClear={handleSearchClear}
        />
    )
}

export { MovieSearchPage }