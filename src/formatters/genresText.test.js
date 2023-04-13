import { genresText } from "./genresText";

test.each([
    {
        genres: ["Action"],
        expectedFormat: "Action",
    },
    {
        genres: ["Action", "Drama"],
        expectedFormat: "Action & Drama",
    },
    {
        genres: ["Action", "Drama", "Comedy"],
        expectedFormat: "Action, Drama, Comedy",
    },
    {
        genres: ["Action", "Drama", "Comedy", "Horror"],
        expectedFormat: "Action, Drama, Comedy, Horror",
    },
])('genresText to format genres properly', ({genres, expectedFormat}) => {
    // Act
    const result = genresText(genres);

    // Assert
    expect(result).toBe(expectedFormat);
});

test.each([
    {
        genres: null,
        expectedFormat: "",
    },
    {
        genres: undefined,
        expectedFormat: "",
    },
    {
        genres: [],
        expectedFormat: "",
    },
])('genresText should handle empty value scenarios', ({genres, expectedFormat}) => {
    // Act
    const result = genresText(genres);

    // Assert
    expect(result).toBe(expectedFormat);
});