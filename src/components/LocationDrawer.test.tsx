import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
    mockAreaTag,
    mockAreaTagTwo,
    mockCasvalUsers,
    mockMembers,
} from '../../test/mockData';
import LocationDrawer from './LocationDrawer';

describe('LocationDrawer', () => {
    const mockHandleOpen = vi.fn();

    test('renders correctly', () => {
        render(
            <MantineProvider>
                <LocationDrawer
                    open='Shibuya'
                    handleOpen={mockHandleOpen}
                    data={[{ users: mockCasvalUsers, areaTag: mockAreaTag }]}
                    members={mockMembers}
                />
            </MantineProvider>
        );

        expect(
            screen.getByRole('heading', { name: /Shibuya/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('dialog', { name: /Shibuya/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /Close drawer/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('textbox', { name: /User-search-box/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('img', {
                name: `${mockMembers[0].name}'s picture`,
            })
        );
        expect(
            screen.getByRole('img', {
                name: `${mockMembers[1].name}'s picture`,
            })
        );
    });

    test('renders nothing if no area tag matching', () => {
        render(
            <MantineProvider>
                <LocationDrawer
                    open='4F Forest'
                    handleOpen={mockHandleOpen}
                    data={[{ users: mockCasvalUsers, areaTag: mockAreaTag }]}
                    members={mockMembers}
                />
            </MantineProvider>
        );

        expect(screen.getByRole('paragraph')).toHaveTextContent(
            'No users in the area ...'
        );
    });

    test('renders nothing if no area tag matching', () => {
        render(
            <MantineProvider>
                <LocationDrawer
                    open='4F Forest'
                    handleOpen={mockHandleOpen}
                    data={[{ users: [], areaTag: mockAreaTagTwo }]}
                    members={[]}
                />
            </MantineProvider>
        );

        expect(screen.getByRole('paragraph')).toHaveTextContent(
            'No users in the area ...'
        );
    });

    test('expect handleOpen to be clicked when closing dialog', async () => {
        render(
            <MantineProvider>
                <LocationDrawer
                    open='Shibuya'
                    handleOpen={mockHandleOpen}
                    data={[{ users: mockCasvalUsers, areaTag: mockAreaTag }]}
                    members={mockMembers}
                />
            </MantineProvider>
        );

        await userEvent.click(
            screen.getByRole('button', { name: /Close drawer/i })
        );

        expect(mockHandleOpen).toHaveBeenCalledOnce();
    });
});
