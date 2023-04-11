import { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';

function SearchForm({ initialSearchText, onSearch }) {

    const [searchText, setSearchText] = useState(initialSearchText);

    const handleSearchInputChange = (event) => setSearchText(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Do not search on empty string.
        if(searchText && searchText.length > 0 && onSearch){
            onSearch(searchText);
        }
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input 
                className="form-input" 
                type="text" 
                placeholder="What do you want to watch?"
                value={searchText}
                onChange={handleSearchInputChange}
            />
            <button className="btn bg-primary" type="submit">
                Search
            </button>
        </form>
    );
}

SearchForm.propTypes = {
    initialSearchText: PropTypes.string,
    onSearch: PropTypes.func
};

SearchForm.defaultProps = {
    initialSearchText: ''
};

export { SearchForm };