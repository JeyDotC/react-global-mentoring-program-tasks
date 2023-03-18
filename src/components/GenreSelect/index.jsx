import './GenreSelect.css';

// This component is totally managed by the parent component, hence, has no
// state on its own. I'm open to suggestions though, if there's a better approach
// I'd like to learn about it :)
function GenreSelect({ genreNames, currentGenre, onSelect }){

    const handleGenreButtonClick = (genreName) => onSelect(genreName);

    return (
        <div className="genre-select">
            {genreNames?.map(genreName => (
                <button 
                    key={genreName}
                    className={`btn ${currentGenre === genreName ? 'active' : ''}`}
                    type="button"
                    onClick={() => handleGenreButtonClick(genreName)}
                >
                    {genreName}
                </button>
            ))}
        </div>
    )
}

export { GenreSelect };