import { Modal } from '@mantine/core';

interface Props {
    opened: boolean;
    close: () => void;
}

const SearchModal = ({ opened, close }: Props) => {
    return <Modal opened={opened} onClose={close} title='Search'></Modal>;
};

export default SearchModal;
