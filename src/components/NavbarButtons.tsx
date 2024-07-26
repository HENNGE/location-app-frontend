import { UnstyledButton } from '@mantine/core';

const NavbarButtons = (): JSX.Element => {
    return (
        <>
            <UnstyledButton className='block px-4 py-1 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-800'>
                Home
            </UnstyledButton>
            <UnstyledButton className='block px-4 py-1 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-800'>
                Blog
            </UnstyledButton>
            <UnstyledButton className='block px-4 py-1 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-800'>
                Contacts
            </UnstyledButton>
            <UnstyledButton className='block px-4 py-1 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-800'>
                Support
            </UnstyledButton>
        </>
    );
};

export default NavbarButtons;
