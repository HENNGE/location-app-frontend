import { Autocomplete, Loader, Text } from '@mantine/core';
import { DateTime } from 'luxon';
import { useCallback, useMemo, useState } from 'react';
import useSWR from 'swr';
import { CasvalUser, CasvalUserLocation } from '../types/casval.types';
import { KasvotMember } from '../types/kasvot.types';
import { kasvotFetcher } from '../utilities/utilities';

interface Props {
    data: {
        user: CasvalUser;
        userLocation: CasvalUserLocation;
    }[];
}

const DrawerContainer = ({ data }: Props): JSX.Element => {
    const [searchQuery, setSearchQuery] = useState('');

    const { data: members, isLoading } = useSWR<{
        data: { member: KasvotMember[] };
    }>('query{member{id name email imgUrl}}', kasvotFetcher);

    const filteredMembers = useCallback(() => {
        return data.map((casvalUser) => {
            if (members) {
                const matchingUser = members.data.member.find(
                    (kasvotMember) =>
                        kasvotMember.email === casvalUser.user.email
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
        <div className='h-full w-[17rem]'>
            {isLoading && <Loader />}
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
                                src={user.kasvotData.imgUrl}
                                className='h-14 w-auto rounded-full'
                            />
                            <div>
                                <Text>{user.kasvotData.name}</Text>
                                <Text c='dimmed' size='xs'>
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
                        <Text className='my-2'>No users in the area ...</Text>
                    )}
                </>
            )}
        </div>
    );
};

export default DrawerContainer;
