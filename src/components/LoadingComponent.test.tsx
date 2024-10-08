import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import LoadingComponent from './LoadingComponent';

describe('LoadingComponent', () => {
    const mockMessage = '123';
    test('renders correctly with message', () => {
        render(
            <MantineProvider>
                <LoadingComponent message={mockMessage} />
            </MantineProvider>
        );

        expect(screen.getByText(mockMessage)).toBeInTheDocument();
    });
});
