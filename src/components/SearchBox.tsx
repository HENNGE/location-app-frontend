import {
    ActionIcon,
    Autocomplete,
    AutocompleteProps,
    Avatar,
    ComboboxItem,
    Group,
    Loader,
    OptionsFilter,
    rem,
    Text,
} from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { IconSearch, IconUsersGroup, IconX } from '@tabler/icons-react';
import { useCallback, useMemo, useState } from 'react';
import useSWR from 'swr';
import { CasvalUserLocation } from '../types/casval.types';
import { KasvotDepartment, KasvotMember } from '../types/kasvot.types';
import { fetcher, kasvotFetcher } from '../utilities/utilities';
import SearchDialogBox from './SearchDialog';

const SearchBox = () => {
    const [value, setValue] = useState<string>('');
    const [debounced] = useDebouncedValue<string>(value, 250);
    const [queryMember, setQueryMember] = useState<string>('');

    const { data: members, isLoading: isLoadingMembers } = useSWR<{
        member: KasvotMember[];
    }>(
        debounced
            ? `query{member(name: "${debounced.toLowerCase()}"){id name email imgUrl positionDepartment{id primary department{id name} position{id name priority}}}}`
            : '',
        kasvotFetcher
    );

    const { data: departments, isLoading: isLoadingDepartments } = useSWR<{
        department: KasvotDepartment[];
    }>(
        debounced
            ? `query{department(name: "${debounced.toLowerCase()}", active: "Y"){id name}}`
            : '',
        kasvotFetcher
    );

    const { data: casvalLocation, isLoading: casvalLoading } = useSWR(
        queryMember ? ['/query-location', queryMember] : null,
        ([endpoint, email]) =>
            fetcher<CasvalUserLocation>(endpoint, { email: email })
    );

    const optionsData = useMemo(() => {
        if (members && departments) {
            const combinedData = [...members.member, ...departments.department];

            return [
                ...new Set(
                    combinedData.map((queryData) => queryData.name || '')
                ),
            ];
        }
    }, [members, departments]);

    const renderAutocompleteOption: AutocompleteProps['renderOption'] = ({
        option,
    }) => {
        const member = members?.member.find(
            (member) => member.name === option.value
        );

        const department = departments?.department.find(
            (dept) => dept.name === option.value
        );

        if (member) {
            return (
                <Group
                    gap='sm'
                    onClick={() => setQueryMember(member.email || '')}
                >
                    <Avatar
                        src={member.imgUrl}
                        size={36}
                        radius='xl'
                        alt='Kasvot user images'
                    />
                    <div>
                        <Text size='sm'>{option.value}</Text>
                        <Text size='xs' opacity={0.5}>
                            {member.email}
                        </Text>
                    </div>
                </Group>
            );
        } else if (department) {
            return (
                <Group gap='sm' className='flex flex-row'>
                    <Avatar size={36} radius='xl'>
                        <IconUsersGroup />
                    </Avatar>
                    <div className='flex max-w-64'>
                        <Text size='sm'>{option.value}</Text>
                    </div>
                </Group>
            );
        }
    };

    const optionsFilter: OptionsFilter = useCallback(({ options, search }) => {
        const filtered = (options as ComboboxItem[]).filter((option) =>
            option.label
                .toLowerCase()
                .trim()
                .includes(search.toLowerCase().trim())
        );

        filtered.sort((a, b) => a.label.localeCompare(b.label));
        return filtered;
    }, []);

    return (
        <>
            <Autocomplete
                aria-label='Search box'
                value={value}
                onChange={(value) => setValue(value)}
                className='w-[22rem]'
                placeholder='Search user or department ... '
                leftSection={
                    <IconSearch
                        style={{ width: rem(16), height: rem(16) }}
                        stroke={1.5}
                    />
                }
                rightSection={
                    isLoadingMembers ||
                    casvalLoading ||
                    isLoadingDepartments ? (
                        <Loader size={18} />
                    ) : (
                        <ActionIcon
                            onClick={() => {
                                setValue('');
                                setQueryMember('');
                            }}
                            className='bg-white text-gray-500 hover:bg-white hover:text-gray-500'
                        >
                            <IconX />
                        </ActionIcon>
                    )
                }
                data={optionsData}
                renderOption={renderAutocompleteOption}
                filter={optionsFilter}
                visibleFrom='md'
            />
            {casvalLocation && (
                <SearchDialogBox
                    member={
                        members &&
                        members.member.find(
                            (member) => member.email === queryMember
                        )
                    }
                    open={!!queryMember}
                    handleClose={() => {
                        setQueryMember('');
                        setValue('');
                    }}
                    casvalLocation={casvalLocation}
                />
            )}
        </>
    );
};

export default SearchBox;
