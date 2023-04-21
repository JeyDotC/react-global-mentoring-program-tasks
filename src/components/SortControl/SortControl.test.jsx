import { render, screen } from "@testing-library/react";
import { SortControl } from ".";

test('SortControl renders with the given options', () => {
    // Arrange
    const id = "my-sort-control";
    const options = [
        "Release Date",
        "Title",
    ];
    const currentSelection = "Title";

    // Act
    render(<SortControl 
        id={id} 
        options={options} 
        currentSelection={currentSelection} 
    />);

    // Assert
    const [currentOptionDisplay, selectedOption] = screen.getAllByText('Title');

    expect(currentOptionDisplay).toBeInTheDocument();
    expect(selectedOption).toHaveClass('active');
});