import { render, screen, fireEvent } from "@testing-library/react";
import { Dialog } from ".";

test('Dialog displays properly when show is true', () => {
    // Act
    render(
        <Dialog show={true} title={<h1>Hello World</h1>}>
            <p role="paragraph" >This is a paragraph</p>
        </Dialog>
    );

    // Assert
    const title = screen.getByRole('heading');
    const paragraph = screen.getByRole('paragraph');
    const closeButton = screen.getByRole('button');

    expect(title).toHaveTextContent('Hello World');
    expect(paragraph).toHaveTextContent('This is a paragraph');
    expect(closeButton).toHaveTextContent('X');
});

test('Dialog to not display when show is false.', () => {
    // Act
    const { container }  = render(
        <Dialog show={false} title={<h1>Hello World</h1>}>
            <p role="paragraph" >This is a paragraph</p>
        </Dialog>
    );

    // Assert
    expect(container).toBeEmptyDOMElement();
});

test('Dialog to perform a callback when close button is clicked.', () => {
    // Arrange
    const handleOnCloseClicked = jest.fn();
    render(
        <Dialog 
            show={true} 
            title={<h1>Hello World</h1>}
            onCloseButtonClicked={handleOnCloseClicked}
        >
            <p role="paragraph" >This is a paragraph</p>
        </Dialog>
    );
    const closeButton = screen.getByRole('button');

    // Act
    fireEvent.click(closeButton);

    // Assert
    expect(handleOnCloseClicked).toBeCalledTimes(1);
});