import { ActionIcon, FocusTrap, Group, Modal, Text } from '@mantine/core';
import { IconDirectionSign } from '@tabler/icons-react';
import { DateTime, Duration } from 'luxon';
import { useMemo } from 'react';
import { CasvalUserLocation } from '../types/casval.types';

interface Props {
    name: string;
    open: boolean;
    handleClose: () => void;
    casvalLocation: CasvalUserLocation;
}

const SearchDialogBox = ({
    name,
    open,
    handleClose,
    casvalLocation,
}: Props) => {
    const timeDifference: Duration<true> = useMemo(() => {
        const parsedDate = DateTime.fromISO(casvalLocation.last_seen || '');

        const now = DateTime.now();

        return now.diff(parsedDate, ['hours', 'minutes']);
    }, [casvalLocation]);

    return (
        <Modal
            opened={open}
            onClose={handleClose}
            size='xs'
            radius='md'
            title={`Search result: ${name}`}
            overlayProps={{
                backgroundOpacity: 0.5,
                blur: 5,
            }}
            withCloseButton={false}
        >
            <FocusTrap.InitialFocus />
            {casvalLocation.last_seen && timeDifference.hours < 1 && (
                <Group className='flex flex-col items-start p-2'>
                    {casvalLocation.area_tags && (
                        <Group>
                            <Text size='sm' fw={600}>
                                {casvalLocation.area_tags[2].name}
                            </Text>
                            <ActionIcon
                                aria-label='Go to user on map'
                                variant='filled'
                                size='lg'
                                color='#003366'
                                onClick={() =>
                                    window.location.replace(
                                        `/level-${casvalLocation.area_tags[2].name[0]}/${casvalLocation.name}`
                                    )
                                }
                            >
                                <IconDirectionSign />
                            </ActionIcon>
                        </Group>
                    )}
                    <Text size='sm' mb='xs' c='dimmed'>
                        {`Last seen: ${Math.floor(
                            timeDifference.minutes
                        )} minutes ago`}
                    </Text>
                </Group>
            )}
            {(!casvalLocation.last_seen || timeDifference.hours > 1) && (
                <Group>
                    <Text size='sm' mb='xs' fw={500}>
                        User not found in the office
                    </Text>
                </Group>
            )}
        </Modal>
    );
};

export default SearchDialogBox;
