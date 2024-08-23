import { Autocomplete, Drawer, DrawerRootProps, Text } from '@mantine/core';
import { DateTime } from 'luxon';
import { useCallback, useEffect, useMemo, useState } from 'react';
import useSWR from 'swr';
import { CasvalUser, CasvalUserLocation } from '../types/casval.types';
import { KasvotMember } from '../types/kasvot.types';
import { kasvotFetcher } from '../utilities/utilities';
import LoadingComponent from './LoadingComponent';

interface Props {
    open: string;
    handleOpen: (value: string) => void;
    data: {
        user: CasvalUser;
        userLocation: CasvalUserLocation;
    }[];
}

const LocationDrawer = ({ data, open, handleOpen }: Props): JSX.Element => {
    const [searchQuery, setSearchQuery] = useState('');
    const [drawerPosition, setDrawerPosition] =
        useState<DrawerRootProps['position']>('left');
    const [isClosing, setIsClosing] = useState(false);

    // handles weird effect where drawer momentarily shifts left before closing
    useEffect(() => {
        if (open) {
            setIsClosing(false);
            if (
                open.includes('Wide-Deck') ||
                open.includes('Team-Lounge') ||
                open.includes('Forest') ||
                open.includes('South') ||
                open.includes('Meeting Rooms') ||
                open.includes('2F-Team-Lounge')
            ) {
                setDrawerPosition('right');
            } else {
                setDrawerPosition('left');
            }
        }
    }, [open]);

    const { data: members, isLoading } = useSWR<{
        data: { member: KasvotMember[] };
    }>(
        'query{member{id name email imgUrl positionDepartment{id primary department{id name} position{id name priority}}}}',
        kasvotFetcher
    );

    const filteredMembers = useCallback(() => {
        return data.map((casvalUser) => {
            if (members) {
                const matchingUser = members.data.member.find(
                    (kasvotMember) => {
                        if (kasvotMember.email === casvalUser.user.email) {
                            kasvotMember.positionDepartment?.sort(
                                (a, b) =>
                                    (a.position?.priority || 0) -
                                    (b.position?.priority || 0)
                            );
                            return kasvotMember;
                        }
                    }
                );
                if (matchingUser) {
                    return { ...casvalUser, kasvotData: matchingUser };
                } else {
                    return { ...casvalUser, kasvotData: {} };
                }
            } else {
                return { ...casvalUser, kasvotData: {} };
            }
        });
    }, [data, members]);

    const filteredSearch = useMemo(() => {
        const output: {
            user: CasvalUser;
            userLocation: CasvalUserLocation;
            kasvotData: KasvotMember;
        }[] = [];

        filteredMembers().forEach((member) => {
            if (
                member.kasvotData.name &&
                member.kasvotData.name
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
            ) {
                output.push(member);
            }
        });

        return output;
    }, [filteredMembers, searchQuery]);

    return (
        <Drawer
            opened={!!open && !isClosing}
            onClose={() => handleOpen('')}
            position={drawerPosition}
            offset={8}
            radius='md'
            size='xs'
            title={open}
        >
            <div className='h-full w-[17rem]'>
                {isLoading && <LoadingComponent message='Fetching users ...' />}
                {!isLoading && (
                    <>
                        <Autocomplete
                            className='w-[17rem]'
                            placeholder='Search for a user ...'
                            onChange={setSearchQuery}
                        />
                        {filteredSearch.map((user) => (
                            <div
                                className='w-full flex justify-start items-center my-2 p-1 hover:bg-slate-100 hover:rounded-lg space-x-4'
                                key={user.user.id}
                            >
                                <img
                                    loading='lazy'
                                    src={user.kasvotData.imgUrl}
                                    alt={`${user.kasvotData.name}'s picture`}
                                    className='h-[4rem] w-[3rem] object-cover rounded-full'
                                    title='profile image'
                                />
                                <div>
                                    <Text>{user.kasvotData.name}</Text>
                                    <div className='flex flex-col'>
                                        {user.kasvotData.positionDepartment?.map(
                                            (posDept) => {
                                                return (
                                                    <Text className='text-[0.6rem]'>{`${posDept.department?.name} - ${posDept.position?.name}`}</Text>
                                                );
                                            }
                                        )}
                                    </div>

                                    <Text c='dimmed' className='text-[0.6rem]'>
                                        {`Last Seen: ${DateTime.fromISO(
                                            user.userLocation.last_seen
                                        ).toRelative({
                                            unit: ['hours', 'minutes'],
                                        })}`}
                                    </Text>
                                </div>
                            </div>
                        ))}
                        {filteredSearch.length === 0 && (
                            <Text className='my-2'>
                                No users in the area ...
                            </Text>
                        )}
                    </>
                )}
            </div>
        </Drawer>
    );
};

export default LocationDrawer;
