import { MantineProvider } from '@mantine/core';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';
import { describe, test } from 'vitest';
import {
    casvalMockErrorResponse,
    casvalMockResponseByFloor,
    mswServer,
} from '../../test/mockServer';
import FifthFloorPage from './FifthFloorPage';

describe('FifthFloorPage', () => {
    test('renders map correctly', async () => {
        mswServer.use(casvalMockResponseByFloor);

        render(
            <SWRConfig
                value={{ provider: () => new Map(), dedupingInterval: 0 }}
            >
                <MantineProvider>
                    <FifthFloorPage />
                </MantineProvider>
            </SWRConfig>
        );

        expect(screen.getByText('Fetching map data ...')).toBeInTheDocument();

        await waitFor(() => {
            expect(
                screen.queryByText('Fetching map data ...')
            ).not.toBeInTheDocument();
        });

        expect(
            screen.getByRole('button', {
                name: /5F Web Meeting Area area button/i,
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole('button', {
                name: /5F Meeting Rooms area button/i,
            })
        ).toBeInTheDocument();
    });

    test('renders error page correctly', async () => {
        mswServer.use(casvalMockErrorResponse);

        render(
            <SWRConfig
                value={{ provider: () => new Map(), dedupingInterval: 0 }}
            >
                <MantineProvider>
                    <MemoryRouter>
                        <FifthFloorPage />
                    </MemoryRouter>
                </MantineProvider>
            </SWRConfig>
        );

        await waitFor(() => {
            expect(
                screen.getByText('Something went wrong.')
            ).toBeInTheDocument();
        });
    });

    test('handles drawer opening correctly', async () => {
        mswServer.use(casvalMockResponseByFloor);

        render(
            <SWRConfig
                value={{ provider: () => new Map(), dedupingInterval: 0 }}
            >
                <MantineProvider>
                    <FifthFloorPage />
                </MantineProvider>
            </SWRConfig>
        );

        await waitFor(async () => {
            await userEvent.click(
                screen.getByRole('button', {
                    name: /5F Web Meeting Area area button/i,
                })
            );
        });

        expect(
            screen.getByRole('dialog', { name: /5F Web Meeting Area/i })
        ).toBeInTheDocument();

        await userEvent.click(
            screen.getByRole('button', { name: /Close drawer/i })
        );

        await userEvent.click(
            screen.getByRole('button', {
                name: /5F Meeting Rooms area button/i,
            })
        );

        expect(
            screen.getByRole('dialog', { name: /5F Meeting Rooms/i })
        ).toBeInTheDocument();

        await userEvent.click(
            screen.getByRole('button', { name: /Close drawer/i })
        );

        await userEvent.click(
            screen.getByRole('button', {
                name: /5F Collaboration Area area button/i,
            })
        );

        expect(
            screen.getByRole('dialog', { name: /5F Collaboration Area/i })
        ).toBeInTheDocument();
    });
});
