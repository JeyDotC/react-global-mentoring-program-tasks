import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchForm } from ".";

test('SearchForm should Render with the given initial Text', () => {
    // Act
    render(<SearchForm initialSearchText={"Hello"} />);

    // Assert
    const searchInput = screen.getByRole('textbox');

    expect(searchInput).toHaveValue('Hello');
});

test('SearchForm should Render When no initial Text is given', () => {
    // Act
    render(<SearchForm />);

    // Assert
    const searchInput = screen.getByRole('textbox');

    expect(searchInput).toHaveValue('');
});

test('SearchForm should call the onSearchEvent when submit button is clicked.', () => {
    // Arrange
    const handleSearch = jest.fn();

    render(<SearchForm initialSearchText={""} onSearch={handleSearch} />);
    const searchInput = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button');

    // Act
    act(() => {
        userEvent.type(searchInput, "Zenon's Farm");
        fireEvent.click(submitButton);
    });

    // Assert
    expect(handleSearch).toBeCalledTimes(1);
    expect(handleSearch).toBeCalledWith("Zenon's Farm"); 
});

test('SearchForm should not call the onSearchEvent when submit button is clicked and search text is empty.', () => {
    // Arrange
    const handleSearch = jest.fn();

    render(<SearchForm initialSearchText={""} onSearch={handleSearch} />);
    const submitButton = screen.getByRole('button');

    // Act
    act(() => {
        fireEvent.click(submitButton);
    });

    // Assert
    expect(handleSearch).toBeCalledTimes(0);
});

test('SearchForm should call the onSearchEvent when user hits Enter.', () => {
    // Arrange
    const handleSearch = jest.fn();

    render(<SearchForm initialSearchText={""} onSearch={handleSearch} />);
    const searchInput = screen.getByRole('textbox');

    // Act
    act(() => {
        userEvent.type(searchInput, "Zenon's Farm{Enter}");
    });

    // Assert
    expect(handleSearch).toBeCalledTimes(1);
    expect(handleSearch).toBeCalledWith("Zenon's Farm"); 
});

test('SearchForm should not call the onSearchEvent when user hits Enter and search text is empty.', () => {
    // Arrange
    const handleSearch = jest.fn();

    render(<SearchForm initialSearchText={""} onSearch={handleSearch} />);
    const searchInput = screen.getByRole('textbox');

    // Act
    act(() => {
        userEvent.type(searchInput, "{Enter}");
    });

    // Assert
    expect(handleSearch).toBeCalledTimes(0);
});