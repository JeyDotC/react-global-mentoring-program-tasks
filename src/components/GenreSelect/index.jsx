import classNames from 'classnames';
import PropTypes from 'prop-types';

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
                    className={classNames('btn', { active: currentGenre === genreName})}
                    type="button"
                    onClick={() => handleGenreButtonClick(genreName)}
                >
                    {genreName}
                </button>
            ))}
        </div>
    )
}

GenreSelect.propTypes = {
    genreNames: PropTypes.arrayOf(PropTypes.string), 
    currentGenre: PropTypes.string, 
    onSelect: PropTypes.func
}

GenreSelect.defaultProps = {
    genreNames: []
}

export { GenreSelect };