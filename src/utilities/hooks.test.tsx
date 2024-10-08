import '@testing-library/jest-dom/vitest';
import {
    render,
    screen,
    waitForElementToBeRemoved,
} from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { useTimeoutState } from './hooks';

const TestComponent = ({ initialValue }: { initialValue: string }) => {
    const value = useTimeoutState(initialValue);
    return <div>{value}</div>;
};

describe('useTimeoutState', () => {
    const mockValue = '123';

    test('expects state to be returned correctly', async () => {
        render(<TestComponent initialValue={mockValue} />);

        const divElement = screen.getByText(mockValue);

        expect(divElement).toBeInTheDocument();

        waitForElementToBeRemoved(divElement).then(() => {
            expect(divElement).not.toBeInTheDocument();
        });
    });
});
