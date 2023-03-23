import { fireEvent, render, screen } from "@testing-library/react";
import { GenreSelect } from ".";

test("GenreSelect renders the list of provided genres", () => {
    // Arrange
    const genreNames = ["All", "Comedy", "Action"];
    
    // Act
    render(
        <GenreSelect genreNames={genreNames} />
    );

    // Assert
    const resultGenreNames = screen.getAllByRole('button').map(el => el.textContent);

    expect(resultGenreNames).toEqual(genreNames);
});

test("GenreSelect highlights the selected genre", () => {
    // Arrange
    const genreNames = ["All", "Comedy", "Action"];
    const currentGenre = "Comedy";
    
    // Act
    render(
        <GenreSelect genreNames={genreNames} currentGenre={currentGenre} />
    );

    // Assert
    const [allButton, comedyButton, actionButton] = screen.getAllByRole('button');

    expect(comedyButton).toHaveClass('active');

    expect(allButton).not.toHaveClass('active');
    expect(actionButton).not.toHaveClass('active');
});

test.each(["All", "Comedy", "Action"])("GenreSelect calls onSelect when '%s' genre is clicked", (selectedGenre) => {
    // Arrange
    const genreNames = ["All", "Comedy", "Action"];
    const onSelect = jest.fn();
    render(
        <GenreSelect genreNames={genreNames} onSelect={onSelect} />
    );
    const genreToClick = screen.getByText(selectedGenre);

    // Act
    fireEvent.click(genreToClick);

    // Assert
    expect(onSelect).toBeCalledTimes(1);
    expect(onSelect).toBeCalledWith(selectedGenre);
});