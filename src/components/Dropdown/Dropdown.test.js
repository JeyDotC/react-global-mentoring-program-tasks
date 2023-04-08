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
    const menuContainer = container.querySelector('.dropdown-menu.d-none');

    expect(inputContent).toBeInTheDocument();
    expect(listItem).toBeInTheDocument();
    expect(menuContainer).toBeInTheDocument();
});

test('Dropdown displays menu container when heading element is clicked', () => {
    // Arrange
    const { container } = render(
        <Dropdown inputContent={<input placeholder="This is a combobox" />}>
            <ul>
                <li>Menu Item</li>
            </ul>
        </Dropdown>
    );
    const inputContent = screen.getByRole('textbox');
    const menuContainer = container.querySelector('.dropdown-menu.d-none');

    // Act
    act(() => {
        fireEvent.click(inputContent);
    });

    // Assert
    expect(menuContainer.classList).not.toContain('d-none');

});