import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from ".";

test('Counter Should Render With No Initial Value', () => {
    // Act
    render(<Counter />);

    // Assert
    const valueElement = screen.getByText('0');
    expect(valueElement).toBeInTheDocument();
});

test('Counter Should Render With Undefined Initial Value', () => {
    // Act
    render(<Counter count={undefined} />);

    // Assert
    const valueElement = screen.getByText('0');
    expect(valueElement).toBeInTheDocument();
});

test.each([0, 1, -1, 12, 400])('Counter should render the initial value', (initialValue) => {
    // Act
    render(<Counter count={initialValue} />);

    // Assert
    const valueElement = screen.getByText(initialValue);
    expect(valueElement).toBeInTheDocument();
});

test('Counter should increment its value when increment button is clicked', () => {
    // Arrange
    render(<Counter count={0} />);

    // Act
    fireEvent.click(screen.getByTitle(/increment by/i));

    // Assert
    const valueElement = screen.getByText('1');
    expect(valueElement).toBeInTheDocument();
});

test('Counter should increment its value when increment button is clicked multiple times', () => {
    // Arrange
    render(<Counter count={-2} />);
    const incrementButton = screen.getByTitle(/increment by/i);

    // Act
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    // Assert
    const valueElement = screen.getByText('3');
    expect(valueElement).toBeInTheDocument();
});

test('Counter should decrement its value when decrement button is clicked', () => {
    // Arrange
    render(<Counter count={0} />);

    // Act
    fireEvent.click(screen.getByTitle(/decrement by/i));

    // Assert
    const valueElement = screen.getByText('-1');
    expect(valueElement).toBeInTheDocument();
});

test('Counter should decrement its value when decrement button is clicked multiple times', () => {
    // Arrange
    render(<Counter count={2} />);
    const decrementButton = screen.getByTitle(/decrement by/i);

    // Act
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);

    // Assert
    const valueElement = screen.getByText('-3');
    expect(valueElement).toBeInTheDocument();
});