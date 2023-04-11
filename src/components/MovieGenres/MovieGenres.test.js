import { render, screen } from "@testing-library/react"
import { MovieGenres } from "."

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
])('MovieGenres format texts appropriately', ({genres, expectedFormat}) => {
    // Act
    render(<MovieGenres genreNames={genres} />);

    // Assert
    const genresElement = screen.getByText(expectedFormat);

    expect(genresElement).toBeInTheDocument();
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
])('MovieGenres should handle empty value scenarios', ({genres, expectedFormat}) => {
    // Act
    const { container } = render(<MovieGenres genreNames={genres} />);

    // Assert
    const genresElement = container.querySelector('.movie-title-genres');

    expect(genresElement).toBeEmptyDOMElement();
});