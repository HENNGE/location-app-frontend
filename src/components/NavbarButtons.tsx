import { UnstyledButton } from '@mantine/core';

const NavbarButtons = (): JSX.Element => {
    const path = window.location.pathname;
    return (
        <>
            <a href='/'>
                <UnstyledButton
                    className={`block px-4 py-1 rounded-md font-medium hover:bg-gray-100 ${
                        path === '/' && 'underline'
                    }`}
                >
                    Home
                </UnstyledButton>
            </a>
            <a href='/level-2'>
                <UnstyledButton
                    className={`block px-4 py-1 rounded-md font-medium hover:bg-gray-100 ${
                        path === '/level-2' && 'underline'
                    }`}
                >
                    Level 2
                </UnstyledButton>
            </a>
            <a href='/level-4'>
                <UnstyledButton
                    className={`block px-4 py-1 rounded-md font-medium hover:bg-gray-100 ${
                        path === '/level-4' && 'underline'
                    }`}
                >
                    Level 4
                </UnstyledButton>
            </a>
            <a href='/level-5'>
                <UnstyledButton
                    className={`block px-4 py-1 rounded-md font-medium hover:bg-gray-100 ${
                        path === '/level-5' && 'underline'
                    }`}
                >
                    Level 5
                </UnstyledButton>
            </a>
            <a href='/level-11'>
                <UnstyledButton
                    className={`block px-4 py-1 rounded-md font-medium hover:bg-gray-100 ${
                        path === '/level-11' && 'underline'
                    }`}
                >
                    Level 11
                </UnstyledButton>
            </a>
        </>
    );
};

export default NavbarButtons;
