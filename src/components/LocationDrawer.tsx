import {
    Autocomplete,
    Drawer,
    DrawerRootProps,
    FocusTrap,
    rem,
    Text,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useEffect, useMemo, useState } from 'react';
import { FetchedCasvalData } from '../types/casval.types';
import { KasvotMember } from '../types/kasvot.types';

interface Props {
    open: string;
    handleOpen: (value: string) => void;
    data: FetchedCasvalData[];
    members: KasvotMember[] | undefined;
}

const LocationDrawer = ({
    data,
    open,
    handleOpen,
    members,
}: Props): JSX.Element => {
    const [searchQuery, setSearchQuery] = useState('');
    const [drawerPosition, setDrawerPosition] =
        useState<DrawerRootProps['position']>('left');
    const [isClosing, setIsClosing] = useState(false);

    // handles weird effect where drawer momentarily shifts left before closing
    useEffect(() => {
        if (open) {
            setIsClosing(false);
            if (
                open.includes('11F Open') ||
                open.includes('5F Meeting Rooms') ||
                open.includes('5F Web Meeting') ||
                open.includes('2F Wide Deck') ||
                open.includes('2F Team Lounge') ||
                open.includes('4F Forest')
            ) {
                setDrawerPosition('right');
            } else {
                setDrawerPosition('left');
            }
        }
    }, [open]);

    const filteredData = useMemo(() => {
        const [output] = data.filter((data) => data.areaTag.name === open);
        if (output) {
            return output.users;
        }
        return [];
    }, [data, open]);

    const filteredMembers = useMemo(() => {
        if (!members || !Array.isArray(members) || members.length < 1) {
            return [];
        }

        const output: KasvotMember[] = [];

        members.forEach((member) => {
            const user = filteredData.find(
                (user) => user.email === member.email
            );
            if (user) {
                output.push(member);
            }
        });

        return output.sort((a, b) =>
            (a.name || '').localeCompare(b.name || '')
        );
    }, [members, filteredData]);

    const filteredSearch = useMemo(() => {
        const output: KasvotMember[] = [];

        if (filteredMembers) {
            filteredMembers.forEach((member) => {
                if (
                    member.name &&
                    member.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                ) {
                    output.push(member);
                }
            });
        }
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
            closeButtonProps={{ 'aria-label': 'Close drawer' }}
            overlayProps={{ backgroundOpacity: 0.25, blur: 0 }}
        >
            <FocusTrap.InitialFocus />
            <div className='h-full w-[17rem]'>
                {filteredSearch && (
                    <>
                        <Autocomplete
                            className='w-[17rem]'
                            placeholder='Search for a user ...'
                            onChange={setSearchQuery}
                            leftSection={
                                <IconSearch
                                    style={{ width: rem(16), height: rem(16) }}
                                    stroke={1.5}
                                />
                            }
                            aria-label='User-search-box'
                        />
                        {filteredSearch.map((user) => (
                            <div
                                className='w-full flex justify-start items-center my-2 p-1 hover:bg-slate-100 hover:rounded-lg space-x-4'
                                key={user.id}
                            >
                                <img
                                    loading='lazy'
                                    src={user.imgUrl}
                                    alt={`${user.name}'s picture`}
                                    className='h-[4rem] w-[3rem] object-cover rounded-full'
                                    title='profile image'
                                />
                                <div>
                                    <Text>{user.name}</Text>
                                    <div className='flex flex-col'>
                                        {user.positionDepartment?.map(
                                            (posDept) => {
                                                return (
                                                    <Text
                                                        className='text-[0.6rem]'
                                                        key={posDept.id}
                                                    >{`${posDept.department?.name} - ${posDept.position?.name}`}</Text>
                                                );
                                            }
                                        )}
                                    </div>
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
