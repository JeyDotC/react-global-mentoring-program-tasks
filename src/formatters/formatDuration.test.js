import { formatDuration } from "./formatDuration";

test.each([
    { timeInMinutes: null, expectedFormat: '0min' },
    { timeInMinutes: undefined, expectedFormat: 'N/A' },
    { timeInMinutes: 0, expectedFormat: '0min' },
    { timeInMinutes: 35, expectedFormat: '35min' },
    { timeInMinutes: 68, expectedFormat: '1h 8min' },
    { timeInMinutes: 230, expectedFormat: '3h 50min' },
])('formatDuration $timeInMinutes Produces the "$expectedFormat"', ({ timeInMinutes, expectedFormat }) => {
    // Act
    const resultFormat = formatDuration(timeInMinutes);

    // Assert
    expect(resultFormat).toEqual(expectedFormat);
});