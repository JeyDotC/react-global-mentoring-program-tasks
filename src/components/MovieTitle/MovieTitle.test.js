import { fireEvent, render, screen } from "@testing-library/react";
import { MovieTitle } from ".";

test.each([
    {
        imageUrl: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/pulpfiction.2436_500x749.jpg?v=1620048742",
        movieName: "Pulp Fiction",
        releaseYear: 2004,
        expectedGenreString: "",
    },
    {
        imageUrl: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/pulpfiction.2436_500x749.jpg?v=1620048742",
        movieName: "Pulp Fiction",
        releaseYear: 2004,
        relevantGenres: ["Action"],
        expectedGenreString: "Action",
    },
    {
        imageUrl: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/pulpfiction.2436_500x749.jpg?v=1620048742",
        movieName: "Pulp Fiction",
        releaseYear: 2004,
        relevantGenres: ["Action", "Adventure"],
        expectedGenreString: "Action & Adventure",
    },
    {
        imageUrl: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/pulpfiction.2436_500x749.jpg?v=1620048742",
        movieName: "Pulp Fiction",
        releaseYear: 2004,
        relevantGenres: ["Action", "Adventure", "Drama"],
        expectedGenreString: "Action, Adventure, Drama",
    },
])("MovieTitle renders with the given data", ({
    imageUrl,
    movieName,
    releaseYear,
    relevantGenres,
    expectedGenreString,
}) => {
    // Act
    const { container } = render(
        <MovieTitle movieData={{
            imageUrl,
            movieName,
            releaseYear,
            relevantGenres,
        }}
        />
    );

    // Assert
    const img = screen.getByRole('img');
    const heading = screen.getByRole('heading');
    const releaseYearSpan = container.querySelector('.movie-title-release-year');
    const genres = container.querySelector('.movie-title-genres');

    expect(img).toHaveAttribute('src', imageUrl);
    expect(heading).toHaveTextContent(movieName);
    expect(releaseYearSpan).toHaveTextContent(releaseYear);
    expect(genres).toHaveTextContent(expectedGenreString);
});

test("MovieTitle handles empty object", () => {
    // Act
    const { container } = render(
        <MovieTitle movieData={{}} />
    );

    // Assert
    const img = screen.getByRole('img');
    const heading = screen.getByRole('heading');
    const releaseYearSpan = container.querySelector('.movie-title-release-year');
    const genres = container.querySelector('.movie-title-genres');

    expect(img).not.toHaveAttribute('src');
    expect(heading).toHaveTextContent("");
    expect(releaseYearSpan).toHaveTextContent("");
    expect(genres).toHaveTextContent("");
});

test("MovieTitle notifies on click", () => {
    // Arrange
    const handleClick = jest.fn();
    const movieData = {
        imageUrl: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/pulpfiction.2436_500x749.jpg?v=1620048742",
        movieName: "Pulp Fiction",
        releaseYear: 2004,
        relevantGenres: ["Action", "Adventure", "Drama"]
    };
    render(
        <MovieTitle movieData={movieData} onClick={handleClick} />
    );
    const img = screen.getByRole('img');

    // Act
    fireEvent.click(img);

    // Assert
    expect(handleClick).toBeCalledWith(movieData);
});