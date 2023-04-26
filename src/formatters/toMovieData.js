function toMovieData({
    id,
    poster_path: imageUrl,
    title: movieName,
    release_date,
    genres: relevantGenres,
    vote_average: rating,
    runtime: durationInMinutes,
    overview: description,
}) {
    return {
        id,
        imageUrl,
        movieName,
        releaseYear: Number(release_date.split('-')[0]),
        relevantGenres,
        rating,
        durationInMinutes,
        description,
    }
}

export { toMovieData }