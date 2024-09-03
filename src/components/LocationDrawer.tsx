import { Autocomplete, Drawer, DrawerRootProps, Text } from '@mantine/core';
import { useEffect, useMemo, useState } from 'react';
import useSWR from 'swr';
import { FetchedCasvalData } from '../types/casval.types';
import { KasvotMember } from '../types/kasvot.types';
import { kasvotFetcher } from '../utilities/utilities';
import LoadingComponent from './LoadingComponent';

interface Props {
    open: string;
    handleOpen: (value: string) => void;
    data: FetchedCasvalData[];
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
                open.includes('11F Guest Meeting Rooms') ||
                open.includes('5F Meeting Rooms') ||
                open.includes('5F Web Meeting')
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

    const { data: members, isLoading } = useSWR(filteredData, (users) => {
        return Promise.all(
            users.map(async (user) => {
                const { member } = await kasvotFetcher<{
                    member: KasvotMember[];
                }>(
                    `query{member(email: "${user.email}"){id name email imgUrl positionDepartment{id primary department{id name} position{id name priority}}}}`
                );

                return member[0];
            })
        );
    });

    const filteredSearch = useMemo(() => {
        const output: KasvotMember[] = [];

        if (members) {
            members.forEach((member) => {
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
    }, [members, searchQuery]);

    return (
        <Drawer
            opened={!!open && !isClosing}
            onClose={() => handleOpen('')}
            position={drawerPosition}
            offset={8}
            radius='md'
            size='xs'
            title={open}
            overlayProps={{ backgroundOpacity: 0.25, blur: 0 }}
        >
            <div className='h-full w-[17rem]'>
                {isLoading && (
                    <div className='w-full h-[50vh] flex justify-center items-center'>
                        <LoadingComponent message='Fetching user list ...' />
                    </div>
                )}
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
                                                    <Text className='text-[0.6rem]'>{`${posDept.department?.name} - ${posDept.position?.name}`}</Text>
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
