/**
 * 
 * @param {string[]} genres
 * 
 * @returns {string}
 */
function genresText(genres) {
    if(!genres) {
        return '';
    }
    switch (genres.length) {
        case 0: return '';
        case 1: return genres[0];
        case 2: return genres.join(' & ');
        default: return genres.join(', ');
    }
}

export { genresText }