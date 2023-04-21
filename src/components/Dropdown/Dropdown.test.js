import { act, fireEvent, render, screen } from "@testing-library/react";
import { Dropdown } from ".";

test('Dropdown renders with content with hidden menu', () => {
    // Act
    const { container } = render(
        <Dropdown inputContent={<input placeholder="This is a combobox" />}>
            <ul>
                <li>Menu Item</li>
            </ul>
        </Dropdown>
    );

    // Assert
    const inputContent = screen.getByRole('textbox');
    const listItem = screen.getByText('Menu Item');
    const menuContainer = container.querySelector('.dropdown-menu');

    expect(inputContent).toBeInTheDocument();
    expect(listItem).toBeInTheDocument();
    expect(menuContainer).toHaveClass('d-none');
});

test('Dropdown renders with content with visible menu', () => {
    // Act
    const { container } = render(
        <Dropdown inputContent={<input placeholder="This is a combobox" />} menuVisible={true}>
            <ul>
                <li>Menu Item</li>
            </ul>
        </Dropdown>
    );

    // Assert
    const inputContent = screen.getByRole('textbox');
    const listItem = screen.getByText('Menu Item');
    const menuContainer = container.querySelector('.dropdown-menu');

    expect(inputContent).toBeInTheDocument();
    expect(listItem).toBeInTheDocument();
    expect(menuContainer).not.toHaveClass('d-none');
});

test('Dropdown triggers onInputClicked when input content is clicked.', () => {
    // Arrange
    const handleInputClicked = jest.fn();

    const { container } = render(
        <Dropdown
            inputContent={<input placeholder="This is a combobox" />}
            onInputClick={handleInputClicked}
        >
            <ul>
                <li>Menu Item</li>
            </ul>
        </Dropdown>
    );
    const inputContent = screen.getByRole('textbox');

    // Act
    fireEvent.click(inputContent);

    // Assert
    expect(handleInputClicked).toBeCalled();

});