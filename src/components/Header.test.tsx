import { AppShell, MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
    test('Renders header, navbuttons, and search bar correctly', () => {
        render(
            <MantineProvider>
                <AppShell
                    header={{ height: 60 }}
                    navbar={{
                        width: 300,
                        breakpoint: 'sm',
                        collapsed: { desktop: true, mobile: false },
                    }}
                    padding='md'
                >
                    <Header navbarOpen={false} navbarToggle={vi.fn()} />
                </AppShell>
            </MantineProvider>
        );

        expect(
            screen.getByRole('heading', { name: /HENNGE Location/i })
        ).toBeInTheDocument();
        expect(
            screen.getAllByRole('button', { name: /F button$/i })
        ).toHaveLength(4);
        expect(
            screen.getByRole('textbox', { name: /Search box/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('button', { name: /Clear search/i })
        ).toBeInTheDocument();
    });
});
