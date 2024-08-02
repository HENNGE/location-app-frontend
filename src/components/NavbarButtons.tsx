import { UnstyledButton } from '@mantine/core';

const NavbarButtons = (): JSX.Element => {
    return (
        <>
            <UnstyledButton className='block px-4 py-1 rounded-md font-medium hover:bg-gray-100'>
                <a href='/'>Home</a>
            </UnstyledButton>
            <UnstyledButton className='block px-4 py-1 rounded-md font-medium hover:bg-gray-100'>
                <a href='/level-2'>Level 2</a>
            </UnstyledButton>
            <UnstyledButton className='block px-4 py-1 rounded-md font-medium hover:bg-gray-100'>
                <a href='/level-4'>Level 4</a>
            </UnstyledButton>
            <UnstyledButton className='block px-4 py-1 rounded-md font-medium hover:bg-gray-100'>
                <a href='/level-5'>Level 5</a>
            </UnstyledButton>
            <UnstyledButton className='block px-4 py-1 rounded-md font-medium hover:bg-gray-100'>
                <a href='/level-11'>Level 11</a>
            </UnstyledButton>
        </>
    );
};

export default NavbarButtons;
