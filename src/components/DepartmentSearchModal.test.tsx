import { MantineProvider } from '@mantine/core';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockDepartmentsTwo } from '../../test/mockData';
import { casvalMockResponse, mswServer } from '../../test/mockServer';
import DepartmentSearchModal from './DepartmentSearchModal';

describe('DepartmentSearchModal', () => {
    const mockHandleClose = vi.fn();

    test('renders modal correctly', async () => {
        mswServer.use(casvalMockResponse);

        render(
            <MantineProvider>
                <DepartmentSearchModal
                    open={true}
                    handleClose={mockHandleClose}
                    department={mockDepartmentsTwo[0]}
                />
            </MantineProvider>
        );

        expect(
            screen.getAllByRole('heading', {
                name: mockDepartmentsTwo[0].name,
            })[0]
        ).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { name: /2F/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { name: /4F/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { name: /5F/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { name: /11F/i })
        ).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText('Member Test')).toBeInTheDocument();
        });
    });

    test("doesn't render user if user's last seen is over 15 minutes", async () => {
        mswServer.use(casvalMockResponse);

        render(
            <MantineProvider>
                <DepartmentSearchModal
                    open={true}
                    handleClose={mockHandleClose}
                    department={mockDepartmentsTwo[1]}
                />
            </MantineProvider>
        );

        await waitFor(() => {
            expect(screen.queryByText('Member Test2')).not.toBeInTheDocument();
        });
        await waitFor(() => {
            expect(screen.getByText('Member Test3')).toBeInTheDocument();
        });
        await waitFor(() => {
            expect(screen.getByText('Member Test4')).toBeInTheDocument();
        });
        await waitFor(() => {
            expect(screen.getByText('Member Test5')).toBeInTheDocument();
        });
    });

    test('search bar filters out users', async () => {
        mswServer.use(casvalMockResponse);

        render(
            <MantineProvider>
                <DepartmentSearchModal
                    open={true}
                    handleClose={mockHandleClose}
                    department={mockDepartmentsTwo[1]}
                />
            </MantineProvider>
        );

        await userEvent.type(
            screen.getByRole('textbox', { name: /user search box/i }),
            'member test3'
        );

        await waitFor(() => {
            expect(screen.getByText('Member Test3')).toBeInTheDocument();
        });

        await waitFor(() => {
            expect(screen.queryByText('Member Test4')).not.toBeInTheDocument();
        });
    });
});
