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
import { IconSearch, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import useSWR from 'swr';
import { KasvotMember } from '../types/kasvot.types';
import { kasvotFetcher } from '../utilities/utilities';

const SearchBox = () => {
    const [value, setValue] = useState<string>('');
    const [debounced] = useDebouncedValue(value, 250);

    const { data: members, isLoading } = useSWR<{
        data: { member: KasvotMember[] };
    }>(
        debounced
            ? `query{member(name: "${debounced.toLowerCase()}"){id name email imgUrl positionDepartment{id primary department{id name} position{id name priority}}}}`
            : '',
        kasvotFetcher
    );

    // const { data: casvalLocation } = useSWR(
    //     ['/query-location', 'edward.peng@hennge.com'],
    //     ([endpoint, email]) =>
    //         fetcher<CasvalUserLocation>(endpoint, { email: email })
    // );

    const renderAutocompleteOption: AutocompleteProps['renderOption'] = ({
        option,
    }) => (
        <Group gap='sm' onClick={() => (window.location.href = '/test')}>
            {/* <a href='/' className='flex space-x-4'> */}
            <Avatar
                src={
                    members?.data.member.find(
                        (member) => member.name === option.value
                    )?.imgUrl
                }
                size={36}
                radius='xl'
            />
            <div>
                <Text size='sm'>{option.value}</Text>
                <Text size='xs' opacity={0.5}>
                    {
                        members?.data.member.find(
                            (member) => member.name === option.value
                        )?.email
                    }
                </Text>
            </div>
            {/* </a> */}
        </Group>
    );

    const optionsFilter: OptionsFilter = ({ options, search }) => {
        const filtered = (options as ComboboxItem[]).filter((option) =>
            option.label
                .toLowerCase()
                .trim()
                .includes(search.toLowerCase().trim())
        );

        filtered.sort((a, b) => a.label.localeCompare(b.label));
        return filtered;
    };

    return (
        <Autocomplete
            aria-label='Search box'
            value={value}
            onChange={(value) => setValue(value)}
            className='w-[22rem]'
            placeholder='Search user'
            leftSection={
                <IconSearch
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={1.5}
                />
            }
            rightSection={
                isLoading ? (
                    <Loader size={18} />
                ) : (
                    <ActionIcon
                        onClick={() => setValue('')}
                        className='bg-white text-gray-500 hover:bg-white hover:text-gray-500'
                    >
                        <IconX />
                    </ActionIcon>
                )
            }
            data={
                (members &&
                    members.data.member.map((member) => member.name || '')) ||
                []
            }
            renderOption={renderAutocompleteOption}
            filter={optionsFilter}
            visibleFrom='md'
        />
    );
};

export default SearchBox;
