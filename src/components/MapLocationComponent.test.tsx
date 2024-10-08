import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockCasvalUserLocation, mockMembers } from '../../test/mockData';
import MapLocationComponent from './MapLocationComponent';

describe('MapLocationComponent', () => {
    const mockHandleClick = vi.fn();

    test('renders hover area and handleClick is called correctly', async () => {
        render(
            <MantineProvider>
                <MapLocationComponent
                    name={mockCasvalUserLocation.area_tags[0].name}
                    size={{ left: '1', top: '1', width: '1', height: '1' }}
                    data={[
                        {
                            users: [
                                {
                                    id: mockMembers[0].id as string,
                                    email: mockMembers[0].email as string,
                                },
                            ],
                            areaTag: {
                                name: mockCasvalUserLocation.area_tags[0].name,
                                id: mockCasvalUserLocation.area_tags[0].id,
                                access_points: [],
                            },
                        },
                    ]}
                    active='test'
                    handleClick={mockHandleClick}
                    members={mockMembers}
                    userEmail={undefined}
                />
            </MantineProvider>
        );

        await userEvent.click(
            screen.getByRole('button', { name: /Shibuya area button/i })
        );

        expect(mockHandleClick).toHaveBeenCalledWith(
            mockCasvalUserLocation.area_tags[0].name
        );

        await userEvent.type(
            screen.getByRole('button', { name: /Shibuya area button/i }),
            'abc{enter}'
        );

        expect(mockHandleClick).toHaveBeenCalledWith(
            mockCasvalUserLocation.area_tags[0].name
        );
    });

    test('renders empty tooltip if no members in area', async () => {
        render(
            <MantineProvider>
                <MapLocationComponent
                    name={mockCasvalUserLocation.area_tags[0].name}
                    size={{ left: '1', top: '1', width: '1', height: '1' }}
                    data={[]}
                    active='test'
                    handleClick={mockHandleClick}
                    members={mockMembers}
                    userEmail={undefined}
                />
            </MantineProvider>
        );

        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });

    test('renders avatar group of 5 or more users correctly', async () => {
        render(
            <MantineProvider>
                <MapLocationComponent
                    name={mockCasvalUserLocation.area_tags[0].name}
                    size={{ left: '1', top: '1', width: '1', height: '1' }}
                    data={[
                        {
                            users: [
                                {
                                    id: mockMembers[0].id as string,
                                    email: mockMembers[0].email as string,
                                },
                                {
                                    id: mockMembers[1].id as string,
                                    email: mockMembers[1].email as string,
                                },
                                {
                                    id: mockMembers[2].id as string,
                                    email: mockMembers[2].email as string,
                                },
                                {
                                    id: mockMembers[3].id as string,
                                    email: mockMembers[3].email as string,
                                },
                                {
                                    id: mockMembers[4].id as string,
                                    email: mockMembers[4].email as string,
                                },
                            ],
                            areaTag: {
                                name: mockCasvalUserLocation.area_tags[0].name,
                                id: mockCasvalUserLocation.area_tags[0].id,
                                access_points: [],
                            },
                        },
                    ]}
                    active='test'
                    handleClick={mockHandleClick}
                    members={mockMembers}
                    userEmail={undefined}
                />
            </MantineProvider>
        );

        await userEvent.hover(
            screen.getByRole('button', { name: /Shibuya area button/i })
        );

        const avatars = screen.getAllByRole('img');

        expect(avatars).toHaveLength(5); // includes the hover icon

        expect(screen.getByText('+1')).toBeInTheDocument();
    });

    test('if querying user, component finds user and shows class accordingly', async () => {
        render(
            <MantineProvider>
                <MapLocationComponent
                    name={mockCasvalUserLocation.area_tags[0].name}
                    size={{ left: '1', top: '1', width: '1', height: '1' }}
                    data={[
                        {
                            users: [
                                {
                                    id: mockMembers[0].id as string,
                                    email: mockMembers[0].email as string,
                                },
                            ],
                            areaTag: {
                                name: mockCasvalUserLocation.area_tags[0].name,
                                id: mockCasvalUserLocation.area_tags[0].id,
                                access_points: [],
                            },
                        },
                    ]}
                    active='test'
                    handleClick={mockHandleClick}
                    members={mockMembers}
                    userEmail={mockMembers[0].email as string}
                />
            </MantineProvider>
        );

        expect(
            screen.getByRole('button', { name: /Shibuya area button/i })
        ).toHaveClass('!opacity-100 !border-[3px] !border-white');
    });
});
