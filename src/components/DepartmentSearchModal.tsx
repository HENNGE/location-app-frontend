import { Autocomplete, FocusTrap, Modal, Text, Title } from '@mantine/core';
import { DateTime } from 'luxon';
import { useCallback, useMemo, useState } from 'react';
import useSWR from 'swr';
import { CasvalUserLocation } from '../types/casval.types';
import { KasvotDepartment } from '../types/kasvot.types';
import { fetcher } from '../utilities/utilities';
import DepartmentSearchUser from './DepartmentSearchUser';
import LoadingComponent from './LoadingComponent';

interface CasvalDisplay {
    location: CasvalUserLocation;
    email: string;
    lastSeenMinutes: number;
}

interface Props {
    open: boolean;
    handleClose: () => void;
    department: KasvotDepartment;
}

const DepartmentSearchmodal = ({ open, handleClose, department }: Props) => {
    const [searchQuery, setSearchQuery] = useState('');

    const { data: casvalLocation, isLoading: casvalLoading } = useSWR(
        department.currentMembersAndChildrenEmails
            ? ['/query-location', department.currentMembersAndChildrenEmails]
            : null,
        ([endpoint, emails]) => {
            return Promise.all(
                emails.map(async (email) => {
                    const location = await fetcher<CasvalUserLocation>(
                        endpoint,
                        {
                            email: email,
                        }
                    );
                    return { location, email };
                })
            );
        }
    );

    const timeDifference = useCallback((lastSeen: string) => {
        const parsedDate = DateTime.fromISO(lastSeen || '');

        const now = DateTime.now();

        return now.diff(parsedDate, ['hours', 'minutes']);
    }, []);

    const sortedData = useMemo(() => {
        if (!casvalLocation) {
            return;
        }

        const output: {
            '2F': CasvalDisplay[];
            '4F': CasvalDisplay[];
            '5F': CasvalDisplay[];
            '11F': CasvalDisplay[];
            absent: CasvalDisplay[];
        } = {
            '2F': [],
            '4F': [],
            '5F': [],
            '11F': [],
            absent: [],
        };

        casvalLocation.forEach((location) => {
            const locationName = location.location.name;
            if (locationName) {
                if (locationName.includes('2F')) {
                    output['2F'].push({
                        ...location,
                        lastSeenMinutes: timeDifference(
                            location.location.last_seen
                        ).minutes,
                    });
                } else if (locationName.includes('4F')) {
                    output['4F'].push({
                        ...location,
                        lastSeenMinutes: timeDifference(
                            location.location.last_seen
                        ).minutes,
                    });
                } else if (locationName.includes('5F')) {
                    output['5F'].push({
                        ...location,
                        lastSeenMinutes: timeDifference(
                            location.location.last_seen
                        ).minutes,
                    });
                } else if (locationName.includes('11F')) {
                    output['11F'].push({
                        ...location,
                        lastSeenMinutes: timeDifference(
                            location.location.last_seen
                        ).minutes,
                    });
                }
            } else {
                output.absent.push({
                    ...location,
                    lastSeenMinutes: timeDifference(
                        location.location.last_seen || ''
                    ).minutes,
                });
            }
        });

        return output;
    }, [casvalLocation, timeDifference]);

    const filteredData = useMemo(() => {
        if (!sortedData || !searchQuery) {
            return sortedData;
        }

        const query = searchQuery.toLowerCase();

        const filterByQuery = (items: CasvalDisplay[]) => {
            return items.filter((item) => {
                const emailMatches = item.email.toLowerCase().includes(query);
                return emailMatches;
            });
        };

        return {
            '2F': filterByQuery(sortedData['2F']),
            '4F': filterByQuery(sortedData['4F']),
            '5F': filterByQuery(sortedData['5F']),
            '11F': filterByQuery(sortedData['11F']),
            absent: filterByQuery(sortedData.absent),
        };
    }, [searchQuery, sortedData]);

    return (
        <Modal
            opened={open}
            onClose={handleClose}
            size='auto'
            radius='md'
            title={
                <div className='flex flex-row justify-between items-center'>
                    <Title order={4}>{department.name}</Title>
                    <Autocomplete
                        className='w-[21rem] ml-4'
                        placeholder='Search for a user ...'
                        onChange={setSearchQuery}
                    />
                </div>
            }
            overlayProps={{
                backgroundOpacity: 0.5,
                blur: 5,
            }}
            withCloseButton={false}
        >
            <FocusTrap.InitialFocus />
            {casvalLoading && (
                <div className='w-full h-[50vh] flex justify-center items-center'>
                    <LoadingComponent message='Fetching map data ...' />
                </div>
            )}
            {filteredData && !casvalLoading && (
                <div className='flex flex-col sm:flex-row sm:space-x-6'>
                    <div className='flex flex-col justify-start items-center w-[15rem]'>
                        <Title>2F</Title>
                        {filteredData['2F'].map((location) => (
                            <DepartmentSearchUser
                                key={location.email}
                                email={location.email}
                                lastSeenMinutes={Math.floor(
                                    location.lastSeenMinutes
                                )}
                                areaName={location.location.area_tags[2].name}
                            />
                        ))}
                    </div>
                    <div className='flex flex-col justify-start items-center w-[15rem]'>
                        <Title>4F</Title>
                        {filteredData['4F'].map((location) => (
                            <DepartmentSearchUser
                                key={location.email}
                                email={location.email}
                                lastSeenMinutes={Math.floor(
                                    location.lastSeenMinutes
                                )}
                                areaName={location.location.area_tags[2].name}
                            />
                        ))}
                    </div>
                    <div className='flex flex-col justify-start items-center w-[15rem]'>
                        <Title>5F</Title>
                        {filteredData['5F'].map((location) => (
                            <DepartmentSearchUser
                                key={location.email}
                                email={location.email}
                                lastSeenMinutes={Math.floor(
                                    location.lastSeenMinutes
                                )}
                                areaName={location.location.area_tags[2].name}
                            />
                        ))}
                    </div>
                    <div className='flex flex-col justify-start items-center w-[15rem]'>
                        <Title>11F</Title>
                        {filteredData['11F'].map((location) => (
                            <DepartmentSearchUser
                                key={location.email}
                                email={location.email}
                                lastSeenMinutes={Math.floor(
                                    location.lastSeenMinutes
                                )}
                                areaName={location.location.area_tags[2].name}
                            />
                        ))}
                    </div>
                </div>
            )}
            {filteredData &&
                filteredData['2F'].length === 0 &&
                filteredData['4F'].length === 0 &&
                filteredData['5F'].length === 0 &&
                filteredData['11F'].length === 0 && (
                    <Text size='lg' className='w-full flex justify-center'>
                        No users found ...
                    </Text>
                )}
        </Modal>
    );
};

export default DepartmentSearchmodal;
