import {
    ActionIcon,
    Autocomplete,
    AutocompleteProps,
    Avatar,
    Button,
    ComboboxItem,
    Dialog,
    Group,
    Loader,
    OptionsFilter,
    rem,
    Text,
    TextInput,
} from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { IconSearch, IconX } from '@tabler/icons-react';
import { DateTime } from 'luxon';
import { useState } from 'react';
import useSWR from 'swr';
import { CasvalUserLocation } from '../types/casval.types';
import { KasvotMember } from '../types/kasvot.types';
import { fetcher, kasvotFetcher } from '../utilities/utilities';

const SearchBox = () => {
    const [value, setValue] = useState<string>('');
    const [debounced] = useDebouncedValue(value, 250);
    const [queryMember, setQueryMember] = useState('');

    const { data: members, isLoading } = useSWR<{
        member: KasvotMember[];
    }>(
        debounced
            ? `query{member(name: "${debounced.toLowerCase()}"){id name email imgUrl positionDepartment{id primary department{id name} position{id name priority}}}}`
            : '',
        kasvotFetcher
    );

    const { data: casvalLocation, isLoading: casvalLoading } = useSWR(
        queryMember ? ['/query-location', queryMember] : null,
        ([endpoint, email]) =>
            fetcher<CasvalUserLocation>(endpoint, { email: email })
    );

    const renderAutocompleteOption: AutocompleteProps['renderOption'] = ({
        option,
    }) => {
        const member = members?.member.find(
            (member) => member.name === option.value
        );

        if (member) {
            return (
                <Group
                    gap='sm'
                    onClick={() => setQueryMember(member.email || '')}
                >
                    <Avatar src={member.imgUrl} size={36} radius='xl' />
                    <div>
                        <Text size='sm'>{option.value}</Text>
                        <Text size='xs' opacity={0.5}>
                            {member.email}
                        </Text>
                    </div>
                </Group>
            );
        }
    };

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
    console.log(111, casvalLocation);
    return (
        <>
            {casvalLocation && (
                <Dialog
                    opened={!!queryMember}
                    withCloseButton
                    onClose={() => {
                        setQueryMember('');
                        setValue('');
                    }}
                    size='lg'
                    radius='md'
                    className='border-[1px] border-black'
                >
                    <Text size='sm' mb='xs' fw={500}>
                        {`Last seen: ${DateTime.fromISO(
                            casvalLocation.last_seen
                        ).toISODate()}`}
                    </Text>
                    <Text size='sm' mb='xs' fw={500}>
                        {casvalLocation.area_tags[2].name}
                    </Text>
                    <Group align='flex-end'>
                        <TextInput
                            placeholder='hello@gluesticker.com'
                            style={{ flex: 1 }}
                        />
                        <Button onClick={close}>Subscribe</Button>
                    </Group>
                </Dialog>
            )}
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
                    isLoading || casvalLoading ? (
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
                data={
                    (members &&
                        members.member.map((member) => member.name || '')) ||
                    []
                }
                renderOption={renderAutocompleteOption}
                filter={optionsFilter}
                visibleFrom='md'
            />
        </>
    );
};

export default SearchBox;
