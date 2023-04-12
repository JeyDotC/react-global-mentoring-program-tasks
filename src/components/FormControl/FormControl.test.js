import { render, screen } from '@testing-library/react';
import { FormControl } from '.';

test('FormControl displays input control with the given parameters', () => {
    // Act
    render(<FormControl
        name="my-form"
        label="Enter Text"
        initialValue="Foo"
    />);

    // Assert
    const input = screen.getByLabelText("Enter Text");

    expect(input).toHaveValue("Foo");
});

test('FormControl displays input placeholder when no initial value is set', () => {
    // Act
    render(<FormControl
        name="my-form"
        label="Enter Text"
        placeHolder="Foo placeholder"
    />);

    // Assert
    const input = screen.getByLabelText("Enter Text");

    expect(input).toHaveAttribute("placeholder", "Foo placeholder");
});

test('FormControl displays textarea control with the given parameters', () => {
    // Act
    render(<FormControl
        name="my-form"
        label="Enter Text"
        initialValue="Foo"
        multiline
    />);

    // Assert
    const input = screen.getByLabelText("Enter Text");

    expect(input).toHaveValue("Foo");
    expect(input.tagName).toBe("TEXTAREA");
});

test('FormControl displays textarea placeholder when no initial value is set', () => {
    // Act
    render(<FormControl
        name="my-form"
        label="Enter Text"
        placeHolder="Foo placeholder"
        multiline
    />);

    // Assert
    const input = screen.getByLabelText("Enter Text");

    expect(input).toHaveAttribute("placeholder", "Foo placeholder");
    expect(input.tagName).toBe("TEXTAREA");
});

test('FormControl displays input control and then the children.', () => {
    // Act
    render(
        <FormControl
            name="my-form"
            label="Enter Text"
            initialValue="Foo"
        >
            <p role='paragraph'>
                Extra child
            </p>
        </FormControl>
    );

    // Assert
    const input = screen.getByLabelText("Enter Text");
    const extraChild = screen.getByRole('paragraph');

    expect(input).toHaveValue("Foo");
    expect(extraChild).toBeInTheDocument();
});

test('FormControl displays only the children when useChildrenOnly is set to true.', () => {
    // Act
    render(
        <FormControl
            name="my-form"
            label="Enter Text"
            initialValue="Foo"
            useChildrenOnly
        >
            <p role='paragraph'>
                Extra child
            </p>
        </FormControl>
    );

    // Assert
    const input = screen.queryByLabelText("Enter Text");
    const extraChild = screen.getByRole('paragraph');

    expect(input).toBeNull();
    expect(extraChild).toBeInTheDocument();
});