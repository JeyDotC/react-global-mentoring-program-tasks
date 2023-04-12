import { fireEvent, render, screen } from "@testing-library/react";
import { MovieForm } from ".";

test("MovieForm renders", () => {
    // Act
    render(<MovieForm />);

    // Asssert
    const allInputs = screen.getAllByRole("textbox").map(el => el.id);
    const genreOptions = screen.getAllByRole("checkbox").map(el => el.value);

    expect(allInputs).toStrictEqual([
        'movieName',
        'releaseYear',
        'imageUrl',
        'rating',
        'durationInMinutes',
        'description'
    ]);
    expect(genreOptions).toStrictEqual(['Crime', 'Documentary', 'Horror', 'Comedy']);
});

test("MovieForm renders with default values", () => {
    // Arrange
    const imageUrl = "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/pulpfiction.2436_500x749.jpg?v=1620048742";
    const movieName = "Pulp Fiction";
    const releaseYear = 2004;
    const relevantGenres = ["Crime", "Horror"];
    const durationInMinutes = 154;
    const description = "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.";
    const rating = 8.9;

    // Act
    render(
        <MovieForm
            initialData={{
                imageUrl,
                movieName,
                releaseYear,
                relevantGenres,
                durationInMinutes,
                description,
                rating,
            }}
        />
    );

    // Asssert
    const allInputs = screen.getAllByRole("textbox").map(el => el.value);
    const genreOptions = screen.getAllByRole("checkbox").filter(el => el.checked).map(el => el.value);

    expect(allInputs).toStrictEqual([
        movieName,
        releaseYear.toString(),
        imageUrl,
        rating.toString(),
        durationInMinutes.toString(),
        description,
    ]);
    expect(genreOptions).toStrictEqual(relevantGenres);
});

test("MovieForm handles submit", () => {
    // Arrange
    const handleSubmit = jest.fn();
    render(<MovieForm onSubmit={handleSubmit} />);
    const submitButton = screen.getByText('Submit');

    // Act
    fireEvent.click(submitButton);

    // Assert
    expect(handleSubmit).toBeCalledTimes(1);
});