import { toMovieData } from "./toMovieData";

test('toMovieData should convert server returned data into component valid object', () => {
    // Arrange
    const serverData = {
        "id": 353616,
        "title": "Pitch Perfect 3",
        "tagline": "Last Call Pitches",
        "vote_average": 6.4,
        "vote_count": 727,
        "release_date": "2017-12-21",
        "poster_path": "https://image.tmdb.org/t/p/w500/fchHLsLjFvzAFSQykiMwdF1051.jpg",
        "overview": "After the highs of winning the world championships, the Bellas find themselves split apart and discovering there aren't job prospects for making music with your mouth. But when they get the chance to reunite for an overseas USO tour, this group of awesome nerds will come together to make some music, and some questionable decisions, one last time.",
        "budget": 45000000,
        "revenue": 183600000,
        "genres": [
            "Comedy",
            "Music"
        ],
        "runtime": 93
    }

    // Act
    const result = toMovieData(serverData);

    // Assert
    expect(result).toEqual({
        id: 353616,
        imageUrl: "https://image.tmdb.org/t/p/w500/fchHLsLjFvzAFSQykiMwdF1051.jpg",
        movieName: "Pitch Perfect 3",
        releaseYear: 2017,
        relevantGenres: [
            "Comedy",
            "Music"
        ],
        rating: 6.4,
        durationInMinutes: 93,
        description: "After the highs of winning the world championships, the Bellas find themselves split apart and discovering there aren't job prospects for making music with your mouth. But when they get the chance to reunite for an overseas USO tour, this group of awesome nerds will come together to make some music, and some questionable decisions, one last time.",
    });
});