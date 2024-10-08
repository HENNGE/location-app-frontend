import { AppShell, MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
    test('renders text corectly', () => {
        render(
            <MantineProvider>
                <AppShell>
                    <Footer />
                </AppShell>
            </MantineProvider>
        );

        expect(
            screen.getByText(/Location is approximate, based on the Wi-Fi/i)
        );
        expect(screen.getByText(/Location is refreshed every few minutes/i));
    });
});
