import { ActionIcon, FocusTrap, Group, Modal, Text } from '@mantine/core';
import { IconDirectionSign } from '@tabler/icons-react';
import { DateTime, Duration } from 'luxon';
import { useMemo } from 'react';
import { CasvalUserLocation } from '../types/casval.types';
import { KasvotMember } from '../types/kasvot.types';

interface Props {
    member: KasvotMember | undefined;
    open: boolean;
    handleClose: () => void;
    casvalLocation: CasvalUserLocation;
}

const IndividualSearchModal = ({
    member,
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
            size='sm'
            radius='md'
            title={`Search result`}
            overlayProps={{
                backgroundOpacity: 0.5,
                blur: 5,
            }}
            withCloseButton={false}
        >
            <FocusTrap.InitialFocus />
            {casvalLocation.last_seen && timeDifference.hours < 1 && member && (
                <Group className='flex flex-col items-start p-2 border-[1px] rounded-md'>
                    <div>
                        <Text size='xl' fw={600}>
                            {member.name}
                        </Text>
                        <Text size='sm' c='dimmed'>
                            {`Last seen: ${Math.floor(
                                timeDifference.minutes
                            )} minutes ago`}
                        </Text>
                    </div>

                    {casvalLocation.area_tags &&
                        casvalLocation.last_seen &&
                        timeDifference.minutes <= 15 && (
                            <Group>
                                <Text size='sm'>
                                    {casvalLocation.area_tags[2].name}
                                </Text>
                                <ActionIcon
                                    aria-label='Go to user on map'
                                    variant='filled'
                                    size='md'
                                    color='#003366'
                                    onClick={() =>
                                        window.location.replace(
                                            `/level-${
                                                casvalLocation.area_tags[2]
                                                    .name[0] === '1'
                                                    ? '11'
                                                    : casvalLocation
                                                          .area_tags[2].name[0]
                                            }/${member.email}`
                                        )
                                    }
                                >
                                    <IconDirectionSign />
                                </ActionIcon>
                            </Group>
                        )}
                    {casvalLocation.area_tags &&
                        casvalLocation.last_seen &&
                        timeDifference.minutes > 15 && (
                            <Group>
                                <Text size='sm' mb='xs' fw={500}>
                                    User not found in the office
                                </Text>
                            </Group>
                        )}
                </Group>
            )}
            {(!casvalLocation.last_seen || timeDifference.hours > 1) &&
                member && (
                    <Group className='flex flex-col items-start p-2 border-[1px] rounded-md'>
                        <div>
                            <Text size='md' fw={600}>
                                {member.name}
                            </Text>
                            {timeDifference.minutes > 0 && (
                                <Text size='sm' c='dimmed'>
                                    {`Last seen: ${Math.floor(
                                        timeDifference.minutes
                                    )} minutes ago`}
                                </Text>
                            )}
                        </div>

                        <Group>
                            <Text size='sm' mb='xs' fw={500}>
                                User not found in the office
                            </Text>
                        </Group>
                    </Group>
                )}
        </Modal>
    );
};

export default IndividualSearchModal;
