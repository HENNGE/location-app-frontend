import { MantineProvider } from '@mantine/core';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockDepartments, mockMembers } from '../../test/mockData';
import {
    casvalMockResponse,
    kasvotMockResponse,
    mswServer,
} from '../../test/mockServer';
import SearchBox from './SearchBox';

describe('SearchBox', () => {
    const mockSearchValueMember = 'member';
    const mockSearchValueDepartment = 'department';

    test('renders autocomplete search elements correctly', async () => {
        render(
            <MantineProvider>
                <SearchBox />
            </MantineProvider>
        );

        const searchBox = screen.getByRole('textbox', { name: /search box/i });

        await userEvent.type(searchBox, mockSearchValueMember);

        const dropdown = screen.getByRole('listbox');

        expect(dropdown).toBeInTheDocument();
        expect(searchBox).toBeInTheDocument();
    });
    test('clears search when clear button is clicked', async () => {
        mswServer.use(kasvotMockResponse);

        render(
            <MantineProvider>
                <SearchBox />
            </MantineProvider>
        );

        const searchBox = screen.getByRole('textbox', {
            name: /search box/i,
        });

        await userEvent.type(searchBox, mockSearchValueMember);

        expect(searchBox).toHaveValue(mockSearchValueMember);

        await userEvent.click(
            screen.getByRole('button', {
                name: /Clear search/i,
            })
        );

        expect(searchBox).toHaveValue('');
    });
    test('shows dropdown items when searching', async () => {
        mswServer.use(kasvotMockResponse);

        render(
            <MantineProvider>
                <SearchBox />
            </MantineProvider>
        );

        const searchBox = screen.getByRole('textbox', {
            name: /search box/i,
        });

        await userEvent.type(searchBox, mockSearchValueMember);

        const memberOption = await screen.findByText(
            mockMembers[0].name as string
        );

        expect(memberOption).toBeInTheDocument();

        await userEvent.click(
            screen.getByRole('button', {
                name: /Clear search/i,
            })
        );
        await userEvent.type(searchBox, mockSearchValueDepartment);

        const departmentOption = await screen.findByText(
            mockDepartments[0].name as string
        );

        expect(departmentOption).toBeInTheDocument();
    });
    test('calls Casval correctly and renders modal when querying member', async () => {
        mswServer.use(kasvotMockResponse);
        mswServer.use(casvalMockResponse);

        render(
            <MantineProvider>
                <SearchBox />
            </MantineProvider>
        );

        const searchBox = screen.getByRole('textbox', {
            name: /search box/i,
        });

        await userEvent.type(searchBox, mockSearchValueMember);

        const memberOption = await screen.findByText(
            mockMembers[0].name as string
        );

        await userEvent.click(memberOption);

        expect(await screen.findByRole('dialog')).toBeInTheDocument();
    });
    test('closes modal correctly when querying member', async () => {
        mswServer.use(kasvotMockResponse);
        mswServer.use(casvalMockResponse);

        render(
            <MantineProvider>
                <SearchBox />
            </MantineProvider>
        );

        const searchBox = screen.getByRole('textbox', {
            name: /search box/i,
        });

        await userEvent.type(searchBox, mockSearchValueMember);

        const memberOption = await screen.findByText(
            mockMembers[0].name as string
        );

        await userEvent.click(memberOption);

        await userEvent.click(searchBox);

        const backdrop = document.querySelector(
            '[aria-label="modal-backdrop"]'
        );

        await userEvent.click(backdrop as Element);

        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
    test('calls Casval correctly and renders modal when querying department', async () => {
        mswServer.use(kasvotMockResponse);
        mswServer.use(casvalMockResponse);

        render(
            <MantineProvider>
                <SearchBox />
            </MantineProvider>
        );

        const searchBox = screen.getByRole('textbox', {
            name: /search box/i,
        });

        await userEvent.type(searchBox, mockSearchValueDepartment);

        const departmentOption = await screen.findByText(
            mockDepartments[0].name as string
        );

        await userEvent.click(departmentOption);

        expect(await screen.findByRole('dialog')).toBeInTheDocument();
    });
    test('closes modal correctly when querying department', async () => {
        mswServer.use(kasvotMockResponse);
        mswServer.use(casvalMockResponse);

        render(
            <MantineProvider>
                <SearchBox />
            </MantineProvider>
        );

        const searchBox = screen.getByRole('textbox', {
            name: /search box/i,
        });

        await userEvent.type(searchBox, mockSearchValueDepartment);

        const departmentOption = await screen.findByText(
            mockDepartments[0].name as string
        );

        await userEvent.click(departmentOption);

        await userEvent.click(searchBox);

        const backdrop = document.querySelector(
            '[aria-label="modal-backdrop"]'
        );

        await userEvent.click(backdrop as Element);

        await waitFor(() => {
            expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        });
    });
});
