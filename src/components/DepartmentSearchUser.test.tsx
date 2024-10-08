import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockAreaTagTwo, mockMembers } from '../../test/mockData';
import DepartmentSearchUser from './DepartmentSearchUser';

describe('DepartmentSearchUser', () => {
    const mockLocationReplace = vi.fn();

    const originalLocation = window.location;

    beforeEach(() => {
        window.location = { ...originalLocation, replace: mockLocationReplace };
    });

    afterEach(() => {
        window.location = originalLocation;
    });

    test('renders correctly', () => {
        render(
            <MantineProvider>
                <DepartmentSearchUser
                    email={mockMembers[0].email as string}
                    lastSeenMinutes={5}
                    areaName={mockAreaTagTwo.name}
                />
            </MantineProvider>
        );

        expect(screen.getByText('Member One')).toBeInTheDocument();
        expect(
            screen.getByText('Last seen: 5 minutes ago', { exact: false })
        ).toBeInTheDocument();
    });

    test('click on action icon is handled correctly', async () => {
        render(
            <MantineProvider>
                <DepartmentSearchUser
                    email={mockMembers[0].email as string}
                    lastSeenMinutes={5}
                    areaName={mockAreaTagTwo.name}
                />
            </MantineProvider>
        );

        await userEvent.click(
            screen.getByRole('button', { name: /Go to user on map/i })
        );

        expect(mockLocationReplace).toHaveBeenCalledWith(
            `/level-${mockAreaTagTwo.name[0]}/${mockMembers[0].email}`
        );
    });
});
