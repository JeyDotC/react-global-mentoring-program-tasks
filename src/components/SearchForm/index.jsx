import './SearchForm.css';

function SearchForm() {

    return (
        <div className="search-form">
            <input className="form-input" type="text" placeholder='What do you want to watch?' />
            <button className="btn bg-primary">
                Search
            </button>
        </div>
    );
}

export { SearchForm };