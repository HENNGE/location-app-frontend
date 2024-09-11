import { FocusTrap, Modal } from '@mantine/core';
import { KasvotDepartment } from '../types/kasvot.types';

interface Props {
    open: boolean;
    handleClose: () => void;
    department: KasvotDepartment;
}

const DepartmentSearchmodal = ({ open, handleClose, department }: Props) => {
    console.log(111, department);
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
        </Modal>
    );
};

export default DepartmentSearchmodal;
