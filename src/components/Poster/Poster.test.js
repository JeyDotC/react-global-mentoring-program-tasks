import { fireEvent, render, screen } from "@testing-library/react"
import { Poster } from "."

test('Poster should render image with the given URL and description', () => {
    // Act
    render(<Poster imageUrl="https://images.com/the-movie.png" movieName="The Movie" />);

    // Assert
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', "https://images.com/the-movie.png");
    expect(img).toHaveAttribute('alt', "The Movie");
    expect(img).toHaveAttribute('title', "The Movie");
});

test('Poster should render fallback image on error', () => {
    // Arrange
    render(<Poster imageUrl="https://images.com/the-movie.png" movieName="The Movie" />);
    const img = screen.getByRole('img');

    // Act
    fireEvent.error(img);

    // Assert
    expect(img.getAttribute("src")).toBe("/Poster-Not-Found.png");
});