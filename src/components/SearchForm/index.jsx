import PropTypes from 'prop-types';
import './SearchForm.css';
import { useRef } from 'react';

function SearchForm({ initialSearchText, onSearch, onClear }) {

    const inputRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const searchText = inputRef.current?.value;

        // Do not search on empty string.
        if (searchText && searchText.length > 0 && onSearch) {
            onSearch(searchText);
        }

        if((!searchText || searchText.length === 0) && onClear){
            onClear();
        }
    }

    return (
        <>
            <h1 className='mb-30p'>
                Find Your Movie
            </h1>
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    className="form-input"
                    type="text"
                    placeholder="What do you want to watch?"
                    name="searchInput"
                    defaultValue={initialSearchText}
                    ref={inputRef}
                />
                <button className="btn bg-primary" type="submit">
                    Search
                </button>
            </form>
        </>
    );
}

SearchForm.propTypes = {
    initialSearchText: PropTypes.string,
    onSearch: PropTypes.func,
    onClear: PropTypes.func,
};

SearchForm.defaultProps = {
    initialSearchText: ''
};

export { SearchForm };