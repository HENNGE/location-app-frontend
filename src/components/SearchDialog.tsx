import { Button, Dialog, Group, Text, TextInput } from '@mantine/core';
import { DateTime } from 'luxon';
import { CasvalUserLocation } from '../types/casval.types';

interface Props {
    open: boolean;
    handleClose: () => void;
    casvalLocation: CasvalUserLocation;
}

const SearchDialogBox = ({ open, handleClose, casvalLocation }: Props) => {
    return (
        <Dialog
            opened={open}
            withCloseButton
            onClose={handleClose}
            size='lg'
            radius='md'
            className='border-[1px] border-black'
        >
            <Text size='sm' mb='xs' fw={500}>
                {`Last seen: ${DateTime.fromISO(
                    casvalLocation.last_seen
                ).toISODate()}`}
            </Text>
            {casvalLocation.area_tags && (
                <Text size='sm' mb='xs' fw={500}>
                    {casvalLocation.area_tags[2].name}
                </Text>
            )}
            <Group align='flex-end'>
                <TextInput
                    placeholder='hello@gluesticker.com'
                    style={{ flex: 1 }}
                />
                <Button onClick={close}>Subscribe</Button>
            </Group>
        </Dialog>
    );
};

export default SearchDialogBox;
