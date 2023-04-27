function toApiData({
    id,
    imageUrl: poster_path,
    movieName: title,
    releaseYear: release_date,
    relevantGenres: genres,
    rating: vote_average,
    durationInMinutes: runtime,
    description: overview,
}) {
    return {
        id,
        title,
        tagline: "--",
        vote_average,
        vote_count: 0,
        release_date,
        poster_path,
        overview,
        budget: 0,
        revenue: 0,
        runtime,
        genres,
    };
}

export { toApiData }