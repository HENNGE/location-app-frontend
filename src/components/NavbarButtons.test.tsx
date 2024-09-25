import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import NavbarButtons from './NavbarButtons';

describe('NavbarButtons', () => {
    beforeEach(() => {
        vi.unstubAllGlobals();
    });

    test('renders all 4 floors correctly with no selected css', () => {
        vi.stubGlobal('location', { pathname: '/error' });

        render(
            <MantineProvider>
                <NavbarButtons />
            </MantineProvider>
        );

        const buttons = screen.getAllByRole('button');

        expect(buttons).toHaveLength(4);

        buttons.forEach((button) => {
            expect(button).not.toHaveClass('bg-[#03366]');
        });
    });

    test('renders with correct color if path matches 2F', () => {
        vi.stubGlobal('location', { pathname: '/level-2' });

        render(
            <MantineProvider>
                <NavbarButtons />
            </MantineProvider>
        );

        expect(screen.getByRole('button', { name: /2F/i })).toHaveClass(
            'bg-[#003366] text-white'
        );

        vi.stubGlobal('location', { pathname: '/level-4' });
    });

    test('renders with correct color if path matches 4F', () => {
        vi.stubGlobal('location', { pathname: '/level-4' });

        render(
            <MantineProvider>
                <NavbarButtons />
            </MantineProvider>
        );

        expect(screen.getByRole('button', { name: /4F/i })).toHaveClass(
            'bg-[#003366] text-white'
        );
    });
    test('renders with correct color if path matches 5F', () => {
        vi.stubGlobal('location', { pathname: '/level-5' });

        render(
            <MantineProvider>
                <NavbarButtons />
            </MantineProvider>
        );

        expect(screen.getByRole('button', { name: /5F/i })).toHaveClass(
            'bg-[#003366] text-white'
        );
    });
    test('renders with correct color if path matches 11F', () => {
        vi.stubGlobal('location', { pathname: '/level-11' });

        render(
            <MantineProvider>
                <NavbarButtons />
            </MantineProvider>
        );

        expect(screen.getByRole('button', { name: /11F/i })).toHaveClass(
            'bg-[#003366] text-white'
        );
    });
});
