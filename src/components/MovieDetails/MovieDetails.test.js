import { render, screen } from "@testing-library/react";
import { MovieDetails } from ".";

const testData = {
    imageUrl: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/pulpfiction.2436_500x749.jpg?v=1620048742",
    movieName: "Pulp Fiction",
    releaseYear: 2004,
    relevantGenres: ["Action", "Adventure"],
    durationInMinutes: 154,
    description: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    rating: 8.9
};

test('MovieDetails render with the given data', () => {
    // Arrange
    const {
        imageUrl,
        movieName,
        description,
    } = testData;

    // Act
    const { container } = render(<MovieDetails movieData={testData} />);

    // Assert
    const poster = screen.getByRole('img');
    const title = screen.getByRole('heading');
    const genres = container.querySelector('.movie-title-genres');
    const ratingSpan = screen.getByText('8.9');
    const year = screen.getByText('2004');
    const duration = screen.getByText('2h 34min');
    const descriptionParagraph = container.querySelector('p');

    expect(poster).toHaveAttribute('src', imageUrl);
    expect(poster).toHaveAttribute('alt', movieName);
    expect(poster).toHaveAttribute('title', movieName);

    expect(title).toHaveTextContent(movieName);

    expect(genres).toHaveTextContent("Action & Adventure");

    expect(ratingSpan).toBeInTheDocument();
    expect(year).toBeInTheDocument();
    expect(duration).toBeInTheDocument();

    expect(descriptionParagraph).toHaveTextContent(description);
});